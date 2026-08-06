import {
  mergeEvidenceLevels,
  type EvidenceLevel,
} from './quest-evidence.ts';
import type { QuestRelationKind, QuestView } from './quests.ts';

export interface QuestGraphEdge {
  readonly fromId: string;
  readonly fromNpc: string;
  readonly toId: string;
  readonly toNpc: string;
  readonly kind: QuestRelationKind;
  readonly level: EvidenceLevel;
  readonly note: string;
}

const REFERENCE_NOTE = '资料收录的关联路线';

/** 从任务视图派生有向关系边；未收录的目标 NPC 不进入关系图。 */
export function buildQuestGraphEdges(quests: readonly QuestView[]): readonly QuestGraphEdge[] {
  const questById = new Map(quests.map((quest) => [quest.id, quest]));
  const edges: QuestGraphEdge[] = [];

  for (const quest of quests) {
    for (const related of quest.related ?? []) {
      const target = questById.get(related.id);
      if (!target) continue;
      edges.push({
        fromId: quest.id,
        fromNpc: quest.npc,
        toId: target.id,
        toNpc: target.npc,
        kind: 'reference',
        level: 'confirmed',
        note: REFERENCE_NOTE,
      });
    }

    for (const relation of quest.relations ?? []) {
      const target = questById.get(relation.toId);
      if (!target) continue;
      edges.push({
        fromId: quest.id,
        fromNpc: quest.npc,
        toId: target.id,
        toNpc: target.npc,
        kind: relation.kind,
        level: relation.level,
        note: relation.note,
      });
    }
  }

  return edges;
}

/** 查询指定 NPC 发出的关系边。 */
export function getOutgoingQuestGraphEdges(
  edges: readonly QuestGraphEdge[],
  npcId: string,
): readonly QuestGraphEdge[] {
  return edges.filter((edge) => edge.fromId === npcId);
}

/** 查询指向指定 NPC 的关系边。 */
export function getIncomingQuestGraphEdges(
  edges: readonly QuestGraphEdge[],
  npcId: string,
): readonly QuestGraphEdge[] {
  return edges.filter((edge) => edge.toId === npcId);
}

/** 汇总整个关系图的最弱证据等级。 */
export function summarizeQuestGraphEvidence(edges: readonly QuestGraphEdge[]): EvidenceLevel {
  return mergeEvidenceLevels(edges.map((edge) => edge.level));
}
