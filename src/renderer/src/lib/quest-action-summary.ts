import type { QuestReward, QuestStatus, QuestView } from './quests.ts';
import { compareRegions, type RegionParent } from './region-catalog.ts';
import {
  deriveNpcDecisionSummary,
  NPC_DECISION_EVIDENCE_NOTE,
  type NpcDecisionEvidence,
  type NpcDecisionPriority,
  type NpcDecisionRoute,
  type NpcDecisionTimelineStep,
} from '../features/quests/lib/deriveNpcDecisionSummary.ts';

export const QUEST_ACTION_EVIDENCE_BOUNDARY = NPC_DECISION_EVIDENCE_NOTE;

export type QuestActionFacet = 'ongoing' | 'risk' | 'reward';
export type QuestActionWorld = '交界地' | '幽影地';
export type QuestActionPriority = NpcDecisionPriority;
export type QuestActionTimelineStep = NpcDecisionTimelineStep;
export type QuestActionEvidence = NpcDecisionEvidence;

export interface QuestAction {
  facet: QuestActionFacet;
  questId: string;
  npc: string;
  status: QuestStatus;
  dlc: boolean;
  world: QuestActionWorld;
  region: string;
  location: string;
  objective: string;
  detail: string;
  priority: QuestActionPriority;
  priorityReason: string;
  evidence: readonly QuestActionEvidence[];
  timeline: readonly QuestActionTimelineStep[];
  rewardCount: number;
  rewards: readonly QuestReward[];
  warnings: readonly string[];
}

export interface QuestActionRegionCount {
  world: QuestActionWorld;
  region: string;
  count: number;
}

export interface QuestActionBucket {
  count: number;
  actions: readonly QuestAction[];
  worldCounts: Readonly<Record<QuestActionWorld, number>>;
  regionCounts: readonly QuestActionRegionCount[];
}

export interface QuestActionArea {
  key: RegionParent;
  label: string;
  total: number;
  ongoing: number;
  risk: number;
  reward: number;
}

export interface QuestActionRegion extends QuestActionArea {
  region: string;
  area: RegionParent;
}

export interface QuestActionDashboard {
  evidenceBoundary: string;
  ongoing: QuestActionBucket;
  risk: QuestActionBucket;
  reward: QuestActionBucket;
  counts: Readonly<Record<QuestActionFacet, number>>;
  actions: Readonly<Record<QuestActionFacet, readonly QuestAction[]>>;
  areas: readonly QuestActionArea[];
  regions: readonly QuestActionRegion[];
}

function actionWorld(route: NpcDecisionRoute): QuestActionWorld {
  return route.dlc ? '幽影地' : '交界地';
}

function rewardDetail(rewards: readonly QuestReward[]): string {
  return rewards
    .slice(0, 3)
    .map((reward) => reward.branch ? `${reward.name}（${reward.branch}）` : reward.name)
    .join('、');
}

function makeAction(route: NpcDecisionRoute, facet: QuestActionFacet, detail: string): QuestAction {
  return {
    facet,
    questId: route.questId,
    npc: route.npc,
    status: route.status,
    dlc: route.dlc,
    world: actionWorld(route),
    region: route.currentStage.region,
    location: route.currentStage.location,
    objective: route.currentStage.objective,
    detail,
    priority: route.priority,
    priorityReason: route.priorityReason,
    evidence: route.evidence,
    timeline: route.timeline,
    rewardCount: route.remainingRewards.length,
    rewards: route.remainingRewards,
    warnings: route.recordedWarnings,
  };
}

function buildBucket(actions: readonly QuestAction[]): QuestActionBucket {
  const worldCounts: Record<QuestActionWorld, number> = { 交界地: 0, 幽影地: 0 };
  const regions = new Map<string, QuestActionRegionCount>();

  for (const action of actions) {
    worldCounts[action.world] += 1;
    const key = `${action.world}\u0000${action.region}`;
    const current = regions.get(key);
    regions.set(key, current ? { ...current, count: current.count + 1 } : {
      world: action.world,
      region: action.region,
      count: 1,
    });
  }

  return {
    count: actions.length,
    actions,
    worldCounts,
    regionCounts: [...regions.values()].sort((left, right) =>
      (left.world === '交界地' ? 0 : 1) - (right.world === '交界地' ? 0 : 1)
      || compareRegions(left.region, right.region)),
  };
}

function makeArea(key: RegionParent, label: string): QuestActionArea {
  return { key, label, total: 0, ongoing: 0, risk: 0, reward: 0 };
}

function areaKeyFor(route: NpcDecisionRoute): RegionParent {
  return route.dlc ? 'shadow-land' : 'lands-between';
}

function routeIsRisk(route: NpcDecisionRoute): boolean {
  return route.hasRecordedRisk || route.status === 'interrupted';
}

/** Builds the legacy action dashboard from the single NPC decision summary. */
export function deriveQuestActionDashboard(quests: readonly QuestView[]): QuestActionDashboard {
  const summary = deriveNpcDecisionSummary(quests);
  const ongoing: QuestAction[] = [];
  const risk: QuestAction[] = [];
  const reward: QuestAction[] = [];
  const areas = [makeArea('lands-between', '交界地'), makeArea('shadow-land', '幽影地')];
  const areaByKey = new Map(areas.map((area) => [area.key, area]));
  const regionMap = new Map<string, QuestActionRegion>();

  for (const route of summary.routes) {
    const rewards = route.remainingRewards;
    const areaKey = areaKeyFor(route);
    const area = areaByKey.get(areaKey)!;
    area.total += 1;
    if (route.status === 'ongoing') area.ongoing += 1;
    if (routeIsRisk(route)) area.risk += 1;
    if (rewards.length > 0) area.reward += 1;

    const regionKey = `${areaKey}\u0000${route.currentStage.region}`;
    const region = regionMap.get(regionKey) ?? {
      ...makeArea(areaKey, area.label),
      region: route.currentStage.region,
      area: areaKey,
    };
    region.total += 1;
    if (route.status === 'ongoing') region.ongoing += 1;
    if (routeIsRisk(route)) region.risk += 1;
    if (rewards.length > 0) region.reward += 1;
    regionMap.set(regionKey, region);

    if (route.status === 'ongoing') ongoing.push(makeAction(route, 'ongoing', route.currentStage.objective));
    if (routeIsRisk(route)) risk.push(makeAction(route, 'risk', route.priorityReason));
    if (rewards.length > 0) reward.push(makeAction(route, 'reward', rewardDetail(rewards)));
  }

  const actions = { ongoing, risk, reward } as const;
  const counts = {
    ongoing: ongoing.length,
    risk: risk.length,
    reward: reward.length,
  } as const;
  const regions = [...regionMap.values()].sort((left, right) =>
    (left.area === 'lands-between' ? 0 : 1) - (right.area === 'lands-between' ? 0 : 1)
    || compareRegions(left.region, right.region));

  return {
    evidenceBoundary: summary.evidenceBoundary,
    ongoing: buildBucket(ongoing),
    risk: buildBucket(risk),
    reward: buildBucket(reward),
    counts,
    actions,
    areas,
    regions,
  };
}
