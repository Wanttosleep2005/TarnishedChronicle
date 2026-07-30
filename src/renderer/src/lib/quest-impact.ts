import type { QuestRewardKind, QuestStageView, QuestStatus, QuestView } from './quests.ts';
import { regionDefinition, type RegionParent, type RegionWorld } from './region-catalog.ts';

export type QuestImpactRelationDirection = 'mutual' | 'outgoing' | 'incoming';

export interface QuestImpactRelation {
  readonly questId: string;
  readonly npc: string;
  readonly direction: QuestImpactRelationDirection;
  readonly status: QuestStatus | null;
}

export interface QuestImpactRewardSource {
  readonly stageIndex: number;
  readonly region: string;
  readonly location: string;
}

export interface QuestImpactRemainingReward {
  readonly name: string;
  readonly kind: QuestRewardKind;
  readonly branch?: string;
  readonly firstStageIndex: number;
  readonly stageIndexes: readonly number[];
  readonly sources: readonly QuestImpactRewardSource[];
}

export type QuestImpactWarningTiming = 'current' | 'future';

export interface QuestImpactWarning {
  readonly text: string;
  readonly timing: QuestImpactWarningTiming;
  readonly sourceQuestId: string;
  readonly sourceNpc: string;
  readonly relationDirection: QuestImpactRelationDirection | null;
}

export interface QuestImpactWarnings {
  readonly current: readonly QuestImpactWarning[];
  readonly future: readonly QuestImpactWarning[];
}

export interface QuestImpactRegionCoverage {
  readonly region: string;
  readonly world: RegionWorld;
  readonly worldLabel: string;
  readonly parent: RegionParent;
  readonly parentLabel: string;
  readonly stageIndexes: readonly number[];
  readonly remainingStageIndexes: readonly number[];
  readonly locations: readonly string[];
  readonly selected: boolean;
}

export interface QuestImpactSelection {
  readonly questId: string;
  readonly npc: string;
  readonly status: QuestStatus;
  readonly stageIndex: number;
  readonly stage: QuestStageView;
  readonly currentStageIndex: number;
  readonly isCurrentStage: boolean;
  readonly isComplete: boolean;
}

export interface QuestImpactSuccess {
  readonly ok: true;
  readonly selection: QuestImpactSelection;
  readonly relations: readonly QuestImpactRelation[];
  readonly remainingRewards: readonly QuestImpactRemainingReward[];
  readonly warnings: QuestImpactWarnings;
  readonly coverage: readonly QuestImpactRegionCoverage[];
}

export type QuestImpactFailureReason = 'quest-not-found' | 'quest-has-no-stages' | 'stage-out-of-range';

export interface QuestImpactFailure {
  readonly ok: false;
  readonly reason: QuestImpactFailureReason;
  readonly requestedQuestId: string;
  readonly requestedStageIndex: number;
  readonly availableStageCount: number;
}

export type QuestImpactAnalysis = QuestImpactSuccess | QuestImpactFailure;

interface RelationAccumulator {
  questId: string;
  npc: string;
  outgoing: boolean;
  incoming: boolean;
  status: QuestStatus | null;
}

interface RewardAccumulator {
  name: string;
  kind: QuestRewardKind;
  branch?: string;
  firstStageIndex: number;
  stageIndexes: number[];
  sources: QuestImpactRewardSource[];
}

interface CoverageAccumulator {
  region: string;
  world: RegionWorld;
  worldLabel: string;
  parent: RegionParent;
  parentLabel: string;
  stageIndexes: number[];
  remainingStageIndexes: number[];
  locations: string[];
  selected: boolean;
}

function relationDirection(relation: RelationAccumulator): QuestImpactRelationDirection {
  if (relation.outgoing && relation.incoming) return 'mutual';
  return relation.outgoing ? 'outgoing' : 'incoming';
}

function collectRelations(quests: readonly QuestView[], selected: QuestView): QuestImpactRelation[] {
  const questsById = new Map(quests.map((quest) => [quest.id, quest]));
  const relations = new Map<string, RelationAccumulator>();

  for (const related of selected.related) {
    if (related.id === selected.id) continue;
    const target = questsById.get(related.id);
    relations.set(related.id, {
      questId: related.id,
      npc: target?.npc ?? related.npc,
      outgoing: true,
      incoming: target?.related.some((candidate) => candidate.id === selected.id) ?? false,
      status: target?.status ?? null,
    });
  }

  for (const candidate of quests) {
    if (candidate.id === selected.id || !candidate.related.some((related) => related.id === selected.id)) continue;
    const existing = relations.get(candidate.id);
    if (existing) {
      existing.incoming = true;
      continue;
    }
    relations.set(candidate.id, {
      questId: candidate.id,
      npc: candidate.npc,
      outgoing: false,
      incoming: true,
      status: candidate.status,
    });
  }

  return [...relations.values()].map((relation) => ({
    questId: relation.questId,
    npc: relation.npc,
    direction: relationDirection(relation),
    status: relation.status,
  }));
}

function rewardKey(name: string, kind: QuestRewardKind, branch: string | undefined): string {
  return JSON.stringify([name, kind, branch ?? null]);
}

function collectRemainingRewards(quest: QuestView, selectedStageIndex: number): QuestImpactRemainingReward[] {
  if (quest.status === 'done') return [];

  const rewards = new Map<string, RewardAccumulator>();
  for (let stageIndex = selectedStageIndex; stageIndex < quest.stages.length; stageIndex += 1) {
    const stage = quest.stages[stageIndex]!;
    for (const reward of stage.rewards) {
      const key = rewardKey(reward.name, reward.kind, reward.branch);
      const existing = rewards.get(key);
      if (existing) {
        existing.stageIndexes.push(stageIndex);
        existing.sources.push({ stageIndex, region: stage.region, location: stage.location });
        continue;
      }
      rewards.set(key, {
        name: reward.name,
        kind: reward.kind,
        ...(reward.branch === undefined ? {} : { branch: reward.branch }),
        firstStageIndex: stageIndex,
        stageIndexes: [stageIndex],
        sources: [{ stageIndex, region: stage.region, location: stage.location }],
      });
    }
  }

  return [...rewards.values()].map((reward) => ({
    name: reward.name,
    kind: reward.kind,
    ...(reward.branch === undefined ? {} : { branch: reward.branch }),
    firstStageIndex: reward.firstStageIndex,
    stageIndexes: reward.stageIndexes,
    sources: reward.sources,
  }));
}

function uniqueWarnings(warnings: readonly string[]): string[] {
  return [...new Set(warnings)];
}

/**
 * QuestView only stores quest-wide warnings. "Current" therefore means the selected quest's
 * actionable warnings; "future" means warnings on unfinished, directly related quests.
 */
function collectWarnings(
  quests: readonly QuestView[],
  selected: QuestView,
  relations: readonly QuestImpactRelation[],
): QuestImpactWarnings {
  const questsById = new Map(quests.map((quest) => [quest.id, quest]));
  const current = selected.status === 'done'
    ? []
    : uniqueWarnings(selected.warnings).map((text): QuestImpactWarning => ({
        text,
        timing: 'current',
        sourceQuestId: selected.id,
        sourceNpc: selected.npc,
        relationDirection: null,
      }));
  const future = relations.flatMap((relation): QuestImpactWarning[] => {
    const related = questsById.get(relation.questId);
    if (!related || related.status === 'done') return [];
    return uniqueWarnings(related.warnings).map((text) => ({
      text,
      timing: 'future',
      sourceQuestId: related.id,
      sourceNpc: related.npc,
      relationDirection: relation.direction,
    }));
  });
  return { current, future };
}

function collectCoverage(quest: QuestView, selectedStageIndex: number): QuestImpactRegionCoverage[] {
  const completed = quest.status === 'done';
  const coverage = new Map<string, CoverageAccumulator>();

  quest.stages.forEach((stage, stageIndex) => {
    const definition = regionDefinition(stage.region);
    const existing = coverage.get(stage.region);
    if (existing) {
      existing.stageIndexes.push(stageIndex);
      if (!completed && stageIndex >= selectedStageIndex) existing.remainingStageIndexes.push(stageIndex);
      if (!existing.locations.includes(stage.location)) existing.locations.push(stage.location);
      if (stageIndex === selectedStageIndex) existing.selected = true;
      return;
    }
    coverage.set(stage.region, {
      region: stage.region,
      world: definition.key,
      worldLabel: definition.label,
      parent: definition.parent,
      parentLabel: definition.parentLabel,
      stageIndexes: [stageIndex],
      remainingStageIndexes: !completed && stageIndex >= selectedStageIndex ? [stageIndex] : [],
      locations: [stage.location],
      selected: stageIndex === selectedStageIndex,
    });
  });

  return [...coverage.values()];
}

/** Builds a deterministic, mutation-free projection for an NPC route and one selected stage. */
export function analyzeQuestImpact(
  quests: readonly QuestView[],
  questId: string,
  selectedStageIndex: number,
): QuestImpactAnalysis {
  const selected = quests.find((quest) => quest.id === questId);
  if (!selected) {
    return {
      ok: false,
      reason: 'quest-not-found',
      requestedQuestId: questId,
      requestedStageIndex: selectedStageIndex,
      availableStageCount: 0,
    };
  }
  if (selected.stages.length === 0) {
    return {
      ok: false,
      reason: 'quest-has-no-stages',
      requestedQuestId: questId,
      requestedStageIndex: selectedStageIndex,
      availableStageCount: 0,
    };
  }
  if (!Number.isInteger(selectedStageIndex) || selectedStageIndex < 0 || selectedStageIndex >= selected.stages.length) {
    return {
      ok: false,
      reason: 'stage-out-of-range',
      requestedQuestId: questId,
      requestedStageIndex: selectedStageIndex,
      availableStageCount: selected.stages.length,
    };
  }

  const stage = selected.stages[selectedStageIndex]!;
  const relations = collectRelations(quests, selected);
  return {
    ok: true,
    selection: {
      questId: selected.id,
      npc: selected.npc,
      status: selected.status,
      stageIndex: selectedStageIndex,
      stage,
      currentStageIndex: selected.currentIndex,
      isCurrentStage: selectedStageIndex === selected.currentIndex,
      isComplete: selected.status === 'done',
    },
    relations,
    remainingRewards: collectRemainingRewards(selected, selectedStageIndex),
    warnings: collectWarnings(quests, selected, relations),
    coverage: collectCoverage(selected, selectedStageIndex),
  };
}
