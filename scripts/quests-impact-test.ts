import {
  analyzeQuestImpact,
  type QuestImpactAnalysis,
  type QuestImpactSuccess,
} from '../src/renderer/src/lib/quest-impact.ts';
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
  rewards: readonly QuestReward[] = [],
  state: QuestStageView['state'] = 'later',
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
  stages: readonly QuestStageView[];
  currentIndex?: number;
  status?: QuestStatus;
  dlc?: boolean;
  related?: readonly { id: string; npc: string }[];
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
    status: options.status ?? 'ongoing',
    currentIndex,
    current,
    next: options.stages[currentIndex + 1] ?? null,
    stages: options.stages,
    related: options.related ?? [],
    warnings: options.warnings ?? [],
  };
}

function success(result: QuestImpactAnalysis, message: string): QuestImpactSuccess {
  if (!result.ok) throw new Error(`${message}：${result.reason}`);
  return result;
}

const sharedReward: QuestReward = { name: '共同奖励', kind: 'key-item' };
const branchRewardA: QuestReward = { name: '分支武器', kind: 'weapon', branch: '协助甲' };
const branchRewardB: QuestReward = { name: '分支武器', kind: 'weapon', branch: '协助乙' };

const quests: readonly QuestView[] = [
  quest({
    id: 'a',
    npc: '甲',
    stages: [
      stage('宁姆格福', [sharedReward], 'current'),
      stage('希芙拉河', [sharedReward, branchRewardA, branchRewardB], 'next'),
      stage('墓地平原', [branchRewardA]),
    ],
    related: [
      { id: 'b', npc: '乙' },
      { id: 'c', npc: '丙' },
    ],
    warnings: ['甲路线当前锁线提示'],
  }),
  quest({
    id: 'b',
    npc: '乙',
    stages: [stage('湖之利耶尼亚', [], 'current')],
    related: [{ id: 'a', npc: '甲' }],
    warnings: ['乙路线未来锁线提示'],
  }),
  quest({
    id: 'c',
    npc: '丙',
    stages: [stage('盖利德', [], 'current')],
  }),
  quest({
    id: 'd',
    npc: '丁',
    stages: [stage('亚坛高原', [], 'current')],
    related: [{ id: 'a', npc: '甲' }],
    warnings: ['丁路线未来锁线提示'],
  }),
];

const impact = success(analyzeQuestImpact(quests, 'a', 0), '甲任务影响分析应成功');
equalList(
  impact.relations.map((relation) => `${relation.questId}:${relation.direction}`),
  ['b:mutual', 'c:outgoing', 'd:incoming'],
  '关系应区分双向、当前任务单向指向和其他任务单向指入',
);
equalList(
  impact.remainingRewards.map((reward) => `${reward.name}:${reward.branch ?? '主线'}`),
  ['共同奖励:主线', '分支武器:协助甲', '分支武器:协助乙'],
  '奖励去重时必须保留互斥分支',
);
equalList(impact.remainingRewards[0]?.stageIndexes ?? [], [0, 1], '重复奖励应聚合来源阶段');
equalList(impact.remainingRewards[1]?.stageIndexes ?? [], [1, 2], '同一分支的重复奖励应聚合来源阶段');
equalList(impact.warnings.current.map((warning) => warning.text), ['甲路线当前锁线提示'], '当前警告应来自选中任务');
equalList(
  impact.warnings.future.map((warning) => `${warning.sourceQuestId}:${warning.text}`),
  ['b:乙路线未来锁线提示', 'd:丁路线未来锁线提示'],
  '未来警告应来自未完成的直接关联任务',
);
equalList(
  impact.coverage.map((coverage) => `${coverage.region}:${coverage.world}`),
  ['宁姆格福:lands-between-land', '希芙拉河:lands-between-underground', '墓地平原:shadow-land'],
  '地区覆盖应沿用既有世界层级',
);

const completedQuest = quest({
  id: 'done',
  npc: '已完成者',
  status: 'done',
  currentIndex: 1,
  stages: [stage('宁姆格福', [{ name: '过去奖励', kind: 'weapon' }], 'done'), stage('盖利德', [{ name: '终局奖励', kind: 'talisman' }], 'current')],
  warnings: ['已失效的锁线提示'],
});
const completed = success(analyzeQuestImpact([completedQuest], 'done', 1), '已完成任务仍应能生成只读分析');
check(completed.selection.isComplete, '已完成任务应带有完成标记');
equal(completed.remainingRewards.length, 0, '已完成任务不应报告剩余奖励');
equal(completed.warnings.current.length, 0, '已完成任务不应报告仍可操作的当前锁线警告');

const outOfRange = analyzeQuestImpact(quests, 'a', 3);
check(!outOfRange.ok, '阶段越界应返回结构化失败结果');
equal(outOfRange.reason, 'stage-out-of-range', '阶段越界应使用稳定错误码');
equal(outOfRange.availableStageCount, 3, '阶段越界结果应提供可用阶段数');

const missingQuest = analyzeQuestImpact(quests, 'missing', 0);
check(!missingQuest.ok, '未知任务应返回结构化失败结果');
equal(missingQuest.reason, 'quest-not-found', '未知任务应使用稳定错误码');

console.log('NPC 路线影响分析测试通过');
