import { existsSync, readFileSync } from 'node:fs';
import { questRewardHasExactIcon, questRewardIconId, type QuestReward, type QuestRewardKind } from '../src/renderer/src/lib/quests.ts';

const questsPage = readFileSync(new URL('../src/renderer/src/pages/QuestsPage.tsx', import.meta.url), 'utf8');
const questData = readFileSync(new URL('../src/renderer/src/lib/quests.ts', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

const representativeRewards: readonly QuestReward[] = [
  { name: '蕾妲的剑', kind: 'weapon' },
  { name: '暗月戒指', kind: 'key-item' },
  { name: '菈雅的项链', kind: 'key-item' },
  { name: '狄蒂卡之祸', kind: 'talisman' },
  { name: '芙柔桑克斯的龙雷', kind: 'incantation' },
  { name: '守护指头', kind: 'incantation' },
  { name: '战灰：鲜血斩击', kind: 'ash-of-war' },
  { name: '求饶', kind: 'gesture' },
  { name: '帕奇坐姿', kind: 'gesture' },
  { name: '古龙岩锻造石', kind: 'upgrade' },
];

const exactIconCases: readonly [QuestReward, number][] = [
  [{ name: '红种子护符', kind: 'talisman' }, 18_610],
  [{ name: '红种子护符＋１', kind: 'talisman' }, 18_914],
  [{ name: '红种子护符+1', kind: 'talisman' }, 18_914],
  [{ name: '蓝种子护符', kind: 'talisman' }, 18_620],
  [{ name: '蓝种子护符＋１', kind: 'talisman' }, 18_915],
  [{ name: '蓝种子护符+1', kind: 'talisman' }, 18_915],
  [{ name: '罗杰尔刺剑＋８', kind: 'weapon' }, 10_163],
  [{ name: '失乡骑士戟＋８', kind: 'weapon' }, 10_683],
];

const rewardDefinitions: readonly QuestReward[] = [...questData.matchAll(/name: '([^']+)', kind: '([^']+)'/g)].map(([, name, kind]) => ({
  name: name!,
  kind: kind! as QuestRewardKind,
}));

check(rewardDefinitions.length > 0, '任务数据中应存在可审计的奖励定义');
const missingImages: string[] = [];
for (const reward of [...representativeRewards, ...rewardDefinitions]) {
  const icon = questRewardIconId(reward);
  check((icon ?? 0) > 0, `${reward.name} 应解析为可显示的奖励图标`);
  check(questRewardHasExactIcon(reward), `${reward.name} (${reward.kind}) 不应使用类别兜底图标`);
  if (!existsSync(new URL(`../src/renderer/src/assets/icons-thumb/${icon}.webp`, import.meta.url))) {
    missingImages.push(`${reward.name} (${reward.kind}, icon ${icon})`);
  }
}
check(missingImages.length === 0, `以下任务奖励缺少本地缩略图：${missingImages.join('；')}`);

for (const [reward, expectedIcon] of exactIconCases) {
  check(
    questRewardIconId(reward) === expectedIcon,
    `${reward.name} 应精确匹配官方图标 ${expectedIcon}，实际为 ${questRewardIconId(reward) ?? '无'}`,
  );
}
check(
  questRewardIconId(exactIconCases[0]![0]) !== questRewardIconId(exactIconCases[1]![0]),
  '基础红种子护符与＋１版本必须使用不同图标',
);
check(
  questRewardIconId(exactIconCases[3]![0]) !== questRewardIconId(exactIconCases[4]![0]),
  '基础蓝种子护符与＋１版本必须使用不同图标',
);

check(questsPage.includes('function QuestRewardBadge'), '所有任务奖励应通过统一的图标徽标渲染');
check(questsPage.includes('<ItemThumb icon={questRewardIconId(reward)}'), '任务奖励徽标应使用真实物品缩略图');
check(questsPage.includes('quest-reward-atlas-item-thumb'), '奖励星库列表应显示奖励缩略图');
check(questsPage.includes('quest-reward-atlas-detail-thumb'), '奖励星库详情应显示奖励缩略图');
check(styles.includes('.quest-reward .equip-thumb'), '任务奖励缩略图应具备稳定的密集布局样式');
check(styles.includes('.quest-reward-atlas-item-thumb'), '奖励星库列表缩略图应具备专用样式');
check(styles.includes('.quest-reward-atlas-detail-thumb'), '奖励星库详情缩略图应具备专用样式');

console.log('NPC 任务奖励图标测试通过');
