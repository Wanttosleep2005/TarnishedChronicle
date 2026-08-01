import { readFileSync } from 'node:fs';

const questsPage = readFileSync(new URL('../src/renderer/src/pages/QuestsPage.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(questsPage.includes('function QuestFlow'), 'NPC 页面应提供可交互的任务流视图');
check(questsPage.includes('selectedStageIndex'), '任务流应支持选择不同阶段');
check(questsPage.includes('requestMapFocus'), '任务流阶段应能定位到地图');
check(questsPage.includes('workflowQuestId'), '任务流应能切换 NPC 路线');
check(styles.includes('.quest-flow-stage'), '任务流阶段应有专用视觉状态');

console.log('NPC 任务流静态测试通过');
