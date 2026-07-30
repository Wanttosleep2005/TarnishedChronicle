import { readFileSync } from 'node:fs';

const questsPage = readFileSync(new URL('../src/renderer/src/pages/QuestsPage.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(questsPage.includes('function QuestCompass'), 'NPC 页面应提供任务路线罗盘');
check(questsPage.includes('selectedStageIndex'), '路线罗盘应共享当前选中的任务阶段');
check(questsPage.includes('quest-compass-waypoint'), '路线罗盘应提供可点击的阶段航点');
check(questsPage.includes('requestMapFocus'), '路线罗盘应能将选中阶段定位到地图');
check(questsPage.includes('quest-compass-related'), '路线罗盘应显示可跳转的牵连路线');
check(styles.includes('.quest-compass-dial'), '路线罗盘应具有专用罗盘盘面样式');
check(styles.includes('.quest-compass-waypoint'), '路线罗盘航点应具有专用样式');
check(styles.includes('.quest-compass-center'), '路线罗盘应具有中心任务信息区');

console.log('NPC 路线罗盘静态测试通过');
