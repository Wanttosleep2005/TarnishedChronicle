import {
  deriveNpcDecisionSummary,
  matchesNpcDecisionFacet,
} from '../src/renderer/src/features/quests/lib/deriveNpcDecisionSummary.ts';
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
  location: string,
  state: QuestStageView['state'],
  rewards: readonly QuestReward[] = [],
  mapGraceFlagId: number | null = null,
): QuestStageView {
  return {
    region,
    location,
    objective: `前往${location}推进测试目标。`,
    state,
    mapGraceFlagId,
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

const sharedReward: QuestReward = { name: '已收录钥匙', kind: 'key-item' };
const branchReward: QuestReward = { name: '分支武器', kind: 'weapon', branch: '资料分支说明' };

const quests: readonly QuestView[] = [
  quest({
    id: 'dlc-reward',
    npc: '幽影角色',
    dlc: true,
    status: 'unstarted',
    stages: [stage('墓地平原', '三叉口', 'current', [branchReward], 300)],
  }),
  quest({
    id: 'related-only',
    npc: '仅有关联者',
    status: 'unstarted',
    stages: [stage('湖之利耶尼亚', '湖边', 'current')],
    related: [{ id: 'underground-risk', npc: '地下风险者' }],
  }),
  quest({
    id: 'done',
    npc: '已完成者',
    status: 'done',
    currentIndex: 1,
    stages: [
      stage('宁姆格福', '旧地点', 'done', [sharedReward]),
      stage('宁姆格福', '终点', 'current', [branchReward]),
    ],
    warnings: ['完成后不应继续作为行动风险展示'],
  }),
  quest({
    id: 'surface-risk',
    npc: '地表风险者',
    currentIndex: 1,
    stages: [
      stage('宁姆格福', '起点', 'done'),
      stage('宁姆格福', '当前营地', 'current', [sharedReward], 101),
      stage('盖利德', '后续营地', 'next', [sharedReward, branchReward], 202),
    ],
    related: [{ id: 'underground-risk', npc: '地下风险者' }],
    warnings: ['本路线已收录风险'],
  }),
  quest({
    id: 'underground-risk',
    npc: '地下风险者',
    status: 'unstarted',
    stages: [stage('希芙拉河', '河岸', 'current', [sharedReward])],
    warnings: ['关联路线已收录风险'],
  }),
];

const before = JSON.stringify(quests);
const summary = deriveNpcDecisionSummary(quests);
equal(JSON.stringify(quests), before, '派生函数不得修改输入任务');
equal(summary.counts.actionable, 4, '进行中与待开始路线都应计入当前可推进');
equal(summary.counts.risk, 2, '风险分类只统计未完成路线自身的已收录提醒');
equal(summary.counts.rewards, 3, '奖励分类应统计当前阶段起仍有已收录奖励的路线');

const relatedOnly = summary.routes.find((route) => route.questId === 'related-only');
check(relatedOnly !== undefined, '仅有关联风险的待开始路线仍应出现在行动摘要');
check(matchesNpcDecisionFacet(relatedOnly, 'actionable'), '待开始路线应可作为当前行动入口');
check(!matchesNpcDecisionFacet(relatedOnly, 'risk'), '关联路线的风险不得伪装成本路线风险');
equal(relatedOnly.relatedRiskRoutes.length, 1, '关联路线风险应作为独立资料提示保留');

const surface = summary.routes.find((route) => route.questId === 'surface-risk');
check(surface !== undefined, '地表测试路线应存在');
check(matchesNpcDecisionFacet(surface, 'actionable'), '进行中路线应可推进');
check(matchesNpcDecisionFacet(surface, 'risk'), '自身含提醒的路线应进入风险分类');
check(matchesNpcDecisionFacet(surface, 'rewards'), '仍有奖励的路线应进入奖励分类');
equal(surface.currentStageIndex, 1, '行动入口应保留当前阶段索引');
equal(surface.currentStage.mapGraceFlagId, 101, '行动入口应保留当前阶段地图旗标');
equal(surface.remainingRewards.length, 2, '重复奖励应沿用任务影响分析的去重结果');
equal(surface.priority, 'watch', '含已收录提醒的路线应标记为 watch');
equal(surface.timeline.length, 2, '时间线应从当前阶段起保留后续阶段');
check(surface.timeline[0]?.isCurrent === true, '时间线第一项应标记当前阶段');
equal(surface.relatedRiskRoutes[0]?.relationKind, 'reference', '普通关联应明确标记为资料提及');
equal(surface.relatedRiskRoutes[0]?.evidence.kind, 'quest-record', '关联风险应保留已收录资料证据');

const dlcReward = summary.routes.find((route) => route.questId === 'dlc-reward');
check(dlcReward !== undefined, 'DLC 测试路线应存在');
equal(dlcReward.priority, 'later', '待开始且无自身风险的路线应标记为 later');

check(!summary.routes.some((route) => route.questId === 'done'), '已完成路线不应继续占用行动摘要');
equalList(summary.editions.map((edition) => edition.key), ['base', 'dlc'], '摘要应先按本体与 DLC 聚合');
equalList(
  summary.editions[0]?.worlds.map((world) => world.key) ?? [],
  ['lands-between-land', 'lands-between-underground'],
  '本体路线应继续按陆地与地下地区组聚合',
);
equalList(
  summary.editions[0]?.worlds.flatMap((world) => world.regions.map((region) => region.region)) ?? [],
  ['宁姆格福', '湖之利耶尼亚', '希芙拉河'],
  '地区应沿用既有地理顺序',
);
equalList(
  summary.editions[1]?.worlds.flatMap((world) => world.regions.map((region) => region.region)) ?? [],
  ['墓地平原'],
  'DLC 路线应聚合到幽影地具体地区',
);

const reversed = deriveNpcDecisionSummary([...quests].reverse());
equalList(
  reversed.routes.map((route) => route.questId),
  summary.routes.map((route) => route.questId),
  '输入顺序不应改变全局摘要排序',
);

console.log('NPC 全局行动摘要纯函数测试通过');
