import { exportQuestToMarkdown } from '../src/renderer/src/lib/quest-export.ts';
import type { QuestStageView, QuestView } from '../src/renderer/src/lib/quests.ts';

function equal(actual: string, expected: string, message: string): void {
  if (actual !== expected) {
    throw new Error(`${message}\n--- 实际 ---\n${actual}\n--- 预期 ---\n${expected}`);
  }
}

function stage(options: Partial<QuestStageView> & Pick<QuestStageView, 'region' | 'location' | 'objective'>): QuestStageView {
  return {
    state: 'later',
    mapGraceFlagId: null,
    rewards: [],
    ...options,
  };
}

const dlcStages: readonly QuestStageView[] = [
  stage({
    region: '墓地平原',
    location: '龙洞',
    objective: '取得尖刺山的地图线索。',
    state: 'done',
  }),
  stage({
    region: '尖刺山',
    location: '贝勒的战场',
    objective: '击败“狂龙”贝勒后回访两位 NPC。',
    state: 'current',
    rewards: [
      { name: '花岩槌', kind: 'weapon', branch: '直接击败贝勒' },
      { name: '芙柔桑克斯的龙雷', kind: 'incantation', branch: '使用休里耶的秘药' },
    ],
  }),
];

const dlcQuest: QuestView = {
  id: 'igon-and-florissax',
  npc: '埃贡与龙飨女巫',
  dlc: true,
  summary: '尖刺山的贝勒之战与休里耶秘药互相锁定。',
  status: 'ongoing',
  currentIndex: 1,
  current: dlcStages[1]!,
  next: null,
  stages: dlcStages,
  related: [{ id: 'thiollier', npc: '休里耶' }],
  warnings: ['两种终局奖励无法在同一周目全部取得。'],
};

equal(
  exportQuestToMarkdown(dlcQuest),
  `# NPC 任务路线：埃贡与龙飨女巫

- 内容范围：DLC（黄金树幽影）
- 当前状态：进行中
- 路线摘要：尖刺山的贝勒之战与休里耶秘药互相锁定。

## 关联 NPC

- 休里耶

## 重要提醒

- 两种终局奖励无法在同一周目全部取得。

## 全部阶段

### 1. 墓地平原 · 龙洞

- 阶段状态：已完成
- 目标：取得尖刺山的地图线索。
- 奖励：无

### 2. 尖刺山 · 贝勒的战场（当前阶段）

- 阶段状态：当前阶段
- 目标：击败“狂龙”贝勒后回访两位 NPC。
- 奖励：
  - 武器：花岩槌（分支：直接击败贝勒）
  - 祷告：芙柔桑克斯的龙雷（分支：使用休里耶的秘药）
`,
  'DLC 路线应完整导出元信息、关系、警告、阶段和分支奖励',
);

const baseStage = stage({
  region: '宁姆格福',
  location: '艾雷教堂',
  objective: '等待夜晚并与菈妮交谈。',
  state: 'current',
});
const baseQuest: QuestView = {
  id: 'ranni',
  npc: '魔女菈妮',
  dlc: false,
  summary: '沿着星星时代的道路前进。',
  status: 'unstarted',
  currentIndex: 0,
  current: baseStage,
  next: null,
  stages: [baseStage],
  related: [],
  warnings: [],
};

equal(
  exportQuestToMarkdown(baseQuest),
  `# NPC 任务路线：魔女菈妮

- 内容范围：本体
- 当前状态：待开始
- 路线摘要：沿着星星时代的道路前进。

## 关联 NPC

- 无

## 重要提醒

- 无

## 全部阶段

### 1. 宁姆格福 · 艾雷教堂（当前阶段）

- 阶段状态：当前阶段
- 目标：等待夜晚并与菈妮交谈。
- 奖励：无
`,
  '本体路线在没有关联、警告和奖励时仍应输出完整结构',
);

console.log('NPC 单条任务路线 Markdown 导出测试通过');
