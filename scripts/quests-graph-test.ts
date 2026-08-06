import {
  buildQuestGraphEdges,
  getIncomingQuestGraphEdges,
  getOutgoingQuestGraphEdges,
  summarizeQuestGraphEvidence,
} from '../src/renderer/src/lib/quest-graph.ts';
import type {
  QuestRelationView,
  QuestStageView,
  QuestStatus,
  QuestView,
} from '../src/renderer/src/lib/quests.ts';

function check(condition: boolean, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function equal<T>(actual: T, expected: T, message: string): void {
  if (actual !== expected) throw new Error(`${message}：实际为 ${String(actual)}，预期为 ${String(expected)}`);
}

function equalList<T>(actual: readonly T[], expected: readonly T[], message: string): void {
  const actualValue = JSON.stringify(actual);
  const expectedValue = JSON.stringify(expected);
  if (actualValue !== expectedValue) throw new Error(`${message}：实际为 ${actualValue}，预期为 ${expectedValue}`);
}

function stage(location: string): QuestStageView {
  return {
    region: '宁姆格福',
    location,
    objective: `${location}测试目标`,
    state: 'current',
    mapGraceFlagId: null,
    rewards: [],
  };
}

function quest(options: {
  id: string;
  npc: string;
  related?: readonly { id: string; npc: string }[];
  relations?: readonly QuestRelationView[];
}): QuestView {
  const current = stage(`${options.npc}当前地点`);
  return {
    id: options.id,
    npc: options.npc,
    dlc: false,
    summary: `${options.npc}测试任务`,
    status: 'ongoing' satisfies QuestStatus,
    currentIndex: 0,
    current,
    next: null,
    stages: [current],
    related: options.related ?? [],
    relations: options.relations ?? [],
    warnings: [],
  };
}

const aToBImpact: QuestRelationView = {
  toId: 'npc-b',
  toNpc: '乙 NPC（数据层名称）',
  kind: 'impact',
  level: 'inferred',
  note: '甲路线会影响乙路线',
};
const bToARoute: QuestRelationView = {
  toId: 'npc-a',
  toNpc: '甲 NPC（数据层名称）',
  kind: 'route',
  level: 'unknown',
  note: '乙路线与甲路线顺路',
};

const quests: readonly QuestView[] = [
  quest({
    id: 'npc-a',
    npc: '甲 NPC',
    related: [{ id: 'npc-b', npc: '旧的乙名称' }, { id: 'missing', npc: '未收录 NPC' }],
    relations: [
      aToBImpact,
      {
        toId: 'missing',
        toNpc: '未收录 NPC',
        kind: 'prerequisite',
        level: 'confirmed',
        note: '未知目标应跳过',
      },
    ],
  }),
  quest({
    id: 'npc-b',
    npc: '乙 NPC',
    related: [{ id: 'npc-a', npc: '旧的甲名称' }],
    relations: [bToARoute],
  }),
  quest({
    id: 'npc-c',
    npc: '丙 NPC',
    related: [{ id: 'missing', npc: '未收录 NPC' }],
  }),
];

const edges = buildQuestGraphEdges(quests);
equal(edges.length, 4, '关系图应保留已知 related 与结构化边并跳过未知目标');
equalList(
  edges.map((edge) => `${edge.fromId}:${edge.toId}:${edge.kind}:${edge.level}`),
  [
    'npc-a:npc-b:reference:confirmed',
    'npc-a:npc-b:impact:inferred',
    'npc-b:npc-a:reference:confirmed',
    'npc-b:npc-a:route:unknown',
  ],
  '关系边应按输入顺序保留方向、类型与等级',
);

const reference = edges[0]!;
equal(reference.fromNpc, '甲 NPC', '出发 NPC 应使用 QuestView 中文名');
equal(reference.toNpc, '乙 NPC', '目标 NPC 应使用 QuestView 中文名而非 related 冗余名称');
equal(reference.note, '资料收录的关联路线', 'related 边应带资料关联说明');

const impact = edges[1]!;
equal(impact.note, aToBImpact.note, '结构化边应保留关系说明');

const outgoingA = getOutgoingQuestGraphEdges(edges, 'npc-a');
equalList(outgoingA.map((edge) => edge.kind), ['reference', 'impact'], '应能查询指定 NPC 的出边');
const incomingB = getIncomingQuestGraphEdges(edges, 'npc-b');
equalList(incomingB.map((edge) => edge.kind), ['reference', 'impact'], '应能查询指定 NPC 的全部入边');
equal(getOutgoingQuestGraphEdges(edges, 'missing').length, 0, '未知 NPC 查询应返回空集合');
equal(getIncomingQuestGraphEdges(edges, 'missing').length, 0, '未知 NPC 入边查询应返回空集合');
equal(summarizeQuestGraphEvidence(edges), 'unknown', '全图最弱证据等级应汇总为未知');
equal(summarizeQuestGraphEvidence([]), 'unknown', '空图最弱证据等级应为未知');

check(edges.every((edge) => edge.fromId !== 'missing' && edge.toId !== 'missing'), '关系图不得包含未知节点');

console.log('NPC 任务关系图测试通过');
