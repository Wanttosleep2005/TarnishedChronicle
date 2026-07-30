import { readFileSync } from 'node:fs';

const questsPage = readFileSync(new URL('../src/renderer/src/pages/QuestsPage.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(questsPage.includes('function QuestRewardAtlas'), 'NPC 页面应提供任务奖励星库');
check(questsPage.includes('rewardEntries'), '奖励星库应汇总全量任务阶段奖励');
check(questsPage.includes('rewardScope'), '奖励星库应支持交界地与幽影地来源筛选');
check(questsPage.includes('rewardSearch'), '奖励星库应支持按奖励和来源检索');
check(questsPage.includes('quest-reward-source'), '奖励星库应显示奖励对应的任务阶段来源');
check(questsPage.includes('onFocusStage'), '奖励来源应能同步聚焦到任务流程与路线罗盘');
check(styles.includes('.quest-reward-atlas'), '奖励星库应具有专用容器样式');
check(styles.includes('.quest-reward-atlas-list'), '奖励星库应具有可扫描的奖励列表样式');
check(styles.includes('.quest-reward-source'), '奖励来源应具有专用样式');

console.log('NPC 奖励星库静态测试通过');
