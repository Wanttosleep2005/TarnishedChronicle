import { readFileSync } from 'node:fs';

const questsPage = readFileSync(new URL('../src/renderer/src/pages/QuestsPage.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(questsPage.includes('任务图'), 'NPC 页面应显示全量关系任务图');
check(questsPage.includes('constellationMode'), '任务图应支持不同的信息焦点');
check(questsPage.includes("'rewards'"), '任务星图应提供战利品焦点');
check(questsPage.includes("'warnings'"), '任务星图应提供风险焦点');
check(questsPage.includes('quest-constellation-dock'), '任务图应使用底部检查器 Dock 展示当前路线');
check(questsPage.includes('quest-constellation-drawer'), '任务图应在 Dock 上方按需展开详情抽屉');
check(questsPage.includes('quest-constellation-metrics'), '任务图应汇总关联、奖励与风险数量');
check(styles.includes('.quest-constellation-dock'), '任务图底部 Dock 应具备专用视觉样式');
check(styles.includes('.quest-constellation-drawer'), '任务图抽屉应具备专用视觉样式');

const dockBarIndex = questsPage.indexOf('className="quest-constellation-dock-bar"');
const drawerIndex = questsPage.indexOf('className="quest-constellation-drawer"');
check(dockBarIndex >= 0 && drawerIndex > dockBarIndex, '任务图详情抽屉应显示在当前任务栏下方');

const dockStyle = styles.match(/\.quest-constellation-dock \{([\s\S]*?)\n\}/);
check(dockStyle !== null, '任务图底部 Dock 样式不能为空');
check(dockStyle![1].includes('bottom:'), '任务图检查器应锚定在画布底部');
check(!dockStyle![1].includes('top:'), '任务图检查器不应继续占据画布右上区域');

console.log('NPC 任务星图静态测试通过');
