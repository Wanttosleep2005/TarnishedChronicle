import {
  QUEST_ACTION_EVIDENCE_BOUNDARY,
  deriveQuestActionDashboard,
} from '../src/renderer/src/lib/quest-action-summary.ts';
import type { QuestReward, QuestStageView, QuestStatus, QuestView } from '../src/renderer/src/lib/quests.ts';

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

function stage(
  region: string,
  state: QuestStageView['state'],
  rewards: readonly QuestReward[] = [],
): QuestStageView {
  return {
    region,
    location: `${region}测试地点`,
    objective: `${region}测试目标`,
    state,
    mapGraceFlagId: null,
    rewards,
  };
}

function quest(options: {
  id: string;
  npc: string;
  status: QuestStatus;
  stages: readonly QuestStageView[];
  currentIndex?: number;
  dlc?: boolean;
  warnings?: readonly string[];
}): QuestView {
  const currentIndex = options.currentIndex ?? 0;
  const current = options.stages[currentIndex];
  if (!current) throw new Error(`测试任务 ${options.id} 缺少当前阶段`);
  return {
    id: options.id,
    npc: options.npc,
    dlc: options.dlc ?? false,
    summary: `${options.npc}测试任务`,
    status: options.status,
    currentIndex,
    current,
    next: options.stages[currentIndex + 1] ?? null,
    stages: options.stages,
    related: [],
    warnings: options.warnings ?? [],
  };
}

const quests: QuestView[] = [
  quest({
    id: 'base-ongoing',
    npc: '交界地 NPC',
    status: 'ongoing',
    currentIndex: 1,
    warnings: ['先确认当前对话，再继续推进。'],
    stages: [
      stage('宁姆格福', 'done', [{ name: '已取得奖励', kind: 'weapon' }]),
      stage('湖之利耶尼亚', 'current', [{ name: '当前奖励', kind: 'talisman' }]),
      stage('亚坛高原', 'next', [{ name: '后续奖励', kind: 'armor' }]),
    ],
  }),
  quest({
    id: 'shadow-unstarted',
    npc: '幽影地 NPC',
    status: 'unstarted',
    dlc: true,
    warnings: ['该任务收录了一条注意事项。'],
    stages: [
      stage('墓地平原', 'current'),
      stage('幽影亚坛', 'next', [{ name: '幽影奖励', kind: 'spell' }]),
    ],
  }),
  quest({
    id: 'interrupted',
    npc: '中断 NPC',
    status: 'interrupted',
    stages: [stage('盖利德', 'current')],
  }),
  quest({
    id: 'completed',
    npc: '已完成 NPC',
    status: 'done',
    warnings: ['完成任务不应进入风险行动。'],
    stages: [stage('王城罗德尔', 'current', [{ name: '完成奖励', kind: 'weapon' }])],
  }),
];

const fixtureBefore = JSON.stringify(quests);
const dashboard = deriveQuestActionDashboard(quests);

check(QUEST_ACTION_EVIDENCE_BOUNDARY.includes('基于当前存档与已收录资料'), '证据边界应说明数据来源');
check(QUEST_ACTION_EVIDENCE_BOUNDARY.includes('关联不代表严格因果，也不自动判定未收录的对话分支'), '证据边界应说明推断限制');
equal(dashboard.evidenceBoundary, QUEST_ACTION_EVIDENCE_BOUNDARY, '仪表盘应导出固定证据边界');
equal(dashboard.ongoing.count, 1, '只应收录 ongoing 状态的当前推进行动');
equal(dashboard.risk.count, 3, '未完成且有警告或已中断的任务应进入风险行动');
equal(dashboard.reward.count, 2, '未完成且当前或后续阶段有奖励的任务应进入奖励行动');
equalList(dashboard.ongoing.actions.map((action) => action.questId), ['base-ongoing'], 'ongoing 行动任务不符');
equalList(
  dashboard.risk.actions.map((action) => action.questId),
  ['interrupted', 'base-ongoing', 'shadow-unstarted'],
  'risk 行动任务不符',
);
equalList(
  dashboard.reward.actions.map((action) => action.questId),
  ['base-ongoing', 'shadow-unstarted'],
  'reward 行动任务不符',
);
equal(dashboard.risk.actions.find((action) => action.questId === 'base-ongoing')?.detail, '先确认当前对话，再继续推进。', '风险行动应直接使用已收录 warning');
equal(dashboard.reward.actions[0]?.rewardCount, 2, '奖励行动只应统计当前及后续阶段奖励');
equal(dashboard.risk.actions.find((action) => action.questId === 'base-ongoing')?.priority, 'watch', '行动摘要应复用统一决策优先级');
equal(dashboard.risk.actions.find((action) => action.questId === 'interrupted')?.priority, 'blocked', '中断行动应标记为 blocked');
check((dashboard.ongoing.actions[0]?.timeline.length ?? 0) > 0, '行动摘要应保留当前路线时间线');
check(!dashboard.ongoing.actions.some((action) => action.questId === 'completed'), '完成任务不应进入 ongoing');
check(!dashboard.risk.actions.some((action) => action.questId === 'completed'), '完成任务不应进入 risk');
check(!dashboard.reward.actions.some((action) => action.questId === 'completed'), '完成任务不应进入 reward');

equal(dashboard.ongoing.worldCounts.交界地, 1, 'ongoing 交界地聚合不符');
equal(dashboard.ongoing.worldCounts.幽影地, 0, 'ongoing 幽影地聚合不符');
equal(dashboard.risk.worldCounts.交界地, 2, 'risk 交界地聚合不符');
equal(dashboard.risk.worldCounts.幽影地, 1, 'risk 幽影地聚合不符');
equal(dashboard.reward.worldCounts.交界地, 1, 'reward 交界地聚合不符');
equal(dashboard.reward.worldCounts.幽影地, 1, 'reward 幽影地聚合不符');
equalList(
  dashboard.reward.regionCounts.map((region) => `${region.world}:${region.region}:${region.count}`),
  ['交界地:湖之利耶尼亚:1', '幽影地:墓地平原:1'],
  '奖励行动应按当前 region 与 DLC 世界聚合',
);
equal(JSON.stringify(quests), fixtureBefore, '纯函数不应修改输入任务');

const empty = deriveQuestActionDashboard([]);
equalList([empty.ongoing.count, empty.risk.count, empty.reward.count], [0, 0, 0], '空数据类别计数应为零');
equalList(empty.ongoing.actions, [], '空数据不应有 ongoing 行动');
equalList(empty.risk.actions, [], '空数据不应有 risk 行动');
equalList(empty.reward.actions, [], '空数据不应有 reward 行动');
equalList([empty.reward.worldCounts.交界地, empty.reward.worldCounts.幽影地], [0, 0], '空数据世界聚合应为零');
equalList(empty.reward.regionCounts, [], '空数据不应有 region 聚合');

console.log('NPC 决策行动摘要测试通过');
