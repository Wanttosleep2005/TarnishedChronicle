import type { QuestReward, QuestStageView, QuestStatus, QuestView } from '../../../lib/quests.ts';
import { compareRegions, regionDefinition, type RegionWorld } from '../../../lib/region-catalog.ts';

export type NpcDecisionFacet = 'actionable' | 'risk' | 'rewards';
export type NpcDecisionEditionKey = 'base' | 'dlc';
export type NpcDecisionRelationKind = 'reference' | 'prerequisite' | 'branch' | 'reward' | 'unknown';
export type NpcDecisionPriority = 'now' | 'blocked' | 'watch' | 'later';
export type NpcDecisionEvidenceKind = 'save' | 'quest-record' | 'inference';

export const NPC_DECISION_EVIDENCE_NOTE =
  '基于当前存档与已收录资料；关联不代表严格因果，也不自动判定未收录的对话分支。';

export interface NpcDecisionEvidence {
  kind: NpcDecisionEvidenceKind;
  label: string;
}

export interface NpcDecisionTimelineStep {
  stageIndex: number;
  state: QuestStageView['state'];
  region: string;
  location: string;
  objective: string;
  rewards: readonly QuestReward[];
  isCurrent: boolean;
}

export interface NpcDecisionRelatedRoute {
  questId: string;
  npc: string;
  relationKind: NpcDecisionRelationKind;
  evidence: NpcDecisionEvidence;
}

export interface NpcDecisionRoute {
  questId: string;
  npc: string;
  status: QuestStatus;
  dlc: boolean;
  currentStageIndex: number;
  currentStage: QuestStageView;
  priority: NpcDecisionPriority;
  priorityReason: string;
  evidence: readonly NpcDecisionEvidence[];
  timeline: readonly NpcDecisionTimelineStep[];
  remainingRewards: readonly QuestReward[];
  hasRemainingRewards: boolean;
  recordedWarnings: readonly string[];
  hasRecordedRisk: boolean;
  relatedRiskRoutes: readonly NpcDecisionRelatedRoute[];
}

export interface NpcDecisionRegion {
  region: string;
  routes: readonly NpcDecisionRoute[];
  counts: Readonly<Record<NpcDecisionFacet, number>>;
}

export interface NpcDecisionWorld {
  key: RegionWorld;
  label: string;
  parentLabel: string;
  regions: readonly NpcDecisionRegion[];
  counts: Readonly<Record<NpcDecisionFacet, number>>;
}

export interface NpcDecisionEdition {
  key: NpcDecisionEditionKey;
  label: string;
  worlds: readonly NpcDecisionWorld[];
  counts: Readonly<Record<NpcDecisionFacet, number>>;
}

export interface NpcDecisionSummary {
  evidenceBoundary: string;
  routes: readonly NpcDecisionRoute[];
  editions: readonly NpcDecisionEdition[];
  counts: Readonly<Record<NpcDecisionFacet, number>>;
}

function emptyCounts(): Record<NpcDecisionFacet, number> {
  return { actionable: 0, risk: 0, rewards: 0 };
}

function rewardKey(reward: QuestReward): string {
  return `${reward.kind}|${reward.name.normalize('NFKC')}|${reward.branch ?? ''}`;
}

function collectRemainingRewards(quest: QuestView): readonly QuestReward[] {
  const unique = new Map<string, QuestReward>();
  for (const stage of quest.stages.slice(Math.max(0, quest.currentIndex))) {
    for (const reward of stage.rewards) {
      const key = rewardKey(reward);
      if (!unique.has(key)) unique.set(key, reward);
    }
  }
  return [...unique.values()];
}

function priorityFor(
  quest: QuestView,
  recordedWarnings: readonly string[],
): { priority: NpcDecisionPriority; reason: string } {
  if (quest.status === 'interrupted') {
    return { priority: 'blocked', reason: '路线已中断；请先处理当前收录的状态提醒。' };
  }
  if (recordedWarnings.length > 0) {
    return { priority: 'watch', reason: recordedWarnings[0]! };
  }
  if (quest.status === 'ongoing') {
    return { priority: 'now', reason: quest.current.objective };
  }
  return { priority: 'later', reason: '路线尚未开始；可先完成当前阶段前置准备。' };
}

function buildTimeline(quest: QuestView): readonly NpcDecisionTimelineStep[] {
  const start = Math.max(0, quest.currentIndex);
  return quest.stages.slice(start).map((stage, offset) => {
    const stageIndex = start + offset;
    return {
      stageIndex,
      state: stage.state,
      region: stage.region,
      location: stage.location,
      objective: stage.objective,
      rewards: stage.rewards,
      isCurrent: stageIndex === quest.currentIndex,
    };
  });
}

function buildEvidence(): readonly NpcDecisionEvidence[] {
  return [
    { kind: 'save', label: '当前存档状态' },
    { kind: 'quest-record', label: '已收录任务资料' },
  ];
}

function routeCounts(route: NpcDecisionRoute): Record<NpcDecisionFacet, number> {
  return {
    actionable: route.status === 'done' ? 0 : 1,
    risk: route.hasRecordedRisk ? 1 : 0,
    rewards: route.hasRemainingRewards ? 1 : 0,
  };
}

function addCounts(target: Record<NpcDecisionFacet, number>, source: Readonly<Record<NpcDecisionFacet, number>>): void {
  target.actionable += source.actionable;
  target.risk += source.risk;
  target.rewards += source.rewards;
}

function routeSort(left: NpcDecisionRoute, right: NpcDecisionRoute): number {
  return Number(left.dlc) - Number(right.dlc)
    || compareRegions(left.currentStage.region, right.currentStage.region)
    || left.currentStageIndex - right.currentStageIndex
    || left.npc.localeCompare(right.npc, 'zh-CN')
    || left.questId.localeCompare(right.questId);
}

function editionSort(left: NpcDecisionEdition, right: NpcDecisionEdition): number {
  return (left.key === 'base' ? 0 : 1) - (right.key === 'base' ? 0 : 1);
}

function worldSort(left: NpcDecisionWorld, right: NpcDecisionWorld): number {
  return regionDefinition(left.regions[0]?.region ?? '').order - regionDefinition(right.regions[0]?.region ?? '').order
    || left.label.localeCompare(right.label, 'zh-CN');
}

function facetMatches(route: NpcDecisionRoute, facet: NpcDecisionFacet): boolean {
  if (facet === 'actionable') return route.status !== 'done';
  if (facet === 'risk') return route.hasRecordedRisk || route.status === 'interrupted';
  return route.hasRemainingRewards;
}

function buildRelatedRiskRoutes(quest: QuestView, questsById: ReadonlyMap<string, QuestView>): readonly NpcDecisionRelatedRoute[] {
  return quest.related
    .map((related) => {
      const target = questsById.get(related.id);
      if (!target || target.status === 'done' || target.warnings.length === 0) return null;
      return {
        questId: target.id,
        npc: target.npc,
        relationKind: 'reference',
        evidence: { kind: 'quest-record', label: '已收录路线关联' },
      };
    })
    .filter((related): related is NpcDecisionRelatedRoute => related !== null)
    .sort((left, right) => left.npc.localeCompare(right.npc, 'zh-CN') || left.questId.localeCompare(right.questId));
}

export function matchesNpcDecisionFacet(route: NpcDecisionRoute, facet: NpcDecisionFacet): boolean {
  return facetMatches(route, facet);
}

export function deriveNpcDecisionSummary(quests: readonly QuestView[]): NpcDecisionSummary {
  const questsById = new Map(quests.map((quest) => [quest.id, quest]));
  const routes = quests
    .filter((quest) => quest.status !== 'done')
    .map<NpcDecisionRoute>((quest) => {
      const remainingRewards = collectRemainingRewards(quest);
      const recordedWarnings = [...quest.warnings];
      const { priority, reason: priorityReason } = priorityFor(quest, recordedWarnings);
      return {
        questId: quest.id,
        npc: quest.npc,
        status: quest.status,
        dlc: quest.dlc,
        currentStageIndex: quest.currentIndex,
        currentStage: quest.current,
        priority,
        priorityReason,
        evidence: buildEvidence(),
        timeline: buildTimeline(quest),
        remainingRewards,
        hasRemainingRewards: remainingRewards.length > 0,
        recordedWarnings,
        hasRecordedRisk: recordedWarnings.length > 0,
        relatedRiskRoutes: buildRelatedRiskRoutes(quest, questsById),
      };
    })
    .sort(routeSort);

  const summaryCounts = emptyCounts();
  const editionBuckets = new Map<NpcDecisionEditionKey, {
    routes: NpcDecisionRoute[];
    worlds: Map<RegionWorld, { label: string; parentLabel: string; regions: Map<string, NpcDecisionRoute[]> }>;
  }>();

  for (const route of routes) {
    const counts = routeCounts(route);
    addCounts(summaryCounts, counts);
    const editionKey: NpcDecisionEditionKey = route.dlc ? 'dlc' : 'base';
    const definition = regionDefinition(route.currentStage.region);
    const edition = editionBuckets.get(editionKey) ?? {
      routes: [] as NpcDecisionRoute[],
      worlds: new Map<RegionWorld, { label: string; parentLabel: string; regions: Map<string, NpcDecisionRoute[]> }>(),
    };
    edition.routes.push(route);
    const world = edition.worlds.get(definition.key) ?? {
      label: definition.label,
      parentLabel: definition.parentLabel,
      regions: new Map<string, NpcDecisionRoute[]>(),
    };
    const regionRoutes = world.regions.get(route.currentStage.region) ?? [];
    regionRoutes.push(route);
    world.regions.set(route.currentStage.region, regionRoutes);
    edition.worlds.set(definition.key, world);
    editionBuckets.set(editionKey, edition);
  }

  const editions = [...editionBuckets.entries()].map(([key, bucket]): NpcDecisionEdition => {
    const worlds = [...bucket.worlds.entries()].map(([worldKey, world]): NpcDecisionWorld => {
      const regions = [...world.regions.entries()]
        .sort(([left], [right]) => compareRegions(left, right))
        .map(([region, regionRoutes]): NpcDecisionRegion => {
          const counts = emptyCounts();
          for (const route of regionRoutes) addCounts(counts, routeCounts(route));
          return {
            region,
            routes: [...regionRoutes].sort(routeSort),
            counts,
          };
        });
      const counts = emptyCounts();
      for (const region of regions) addCounts(counts, region.counts);
      return { key: worldKey, label: world.label, parentLabel: world.parentLabel, regions, counts };
    }).sort(worldSort);
    const counts = emptyCounts();
    for (const world of worlds) addCounts(counts, world.counts);
    return {
      key,
      label: key === 'base' ? '交界地' : '幽影地',
      worlds,
      counts,
    };
  }).sort(editionSort);

  return {
    evidenceBoundary: NPC_DECISION_EVIDENCE_NOTE,
    routes,
    editions,
    counts: summaryCounts,
  };
}

export function decisionRouteMatches(route: NpcDecisionRoute, facet: NpcDecisionFacet): boolean {
  return facetMatches(route, facet);
}

export const NPC_DECISION_FACETS: readonly NpcDecisionFacet[] = ['actionable', 'risk', 'rewards'];
