import { readFileSync } from 'node:fs';

const questsPage = readFileSync(new URL('../src/renderer/src/pages/QuestsPage.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(questsPage.includes('任务星图'), 'NPC 页面应将全量关系导图升级为任务星图');
check(questsPage.includes('constellationMode'), '任务星图应支持不同的信息焦点');
check(questsPage.includes("'rewards'"), '任务星图应提供战利品焦点');
check(questsPage.includes("'warnings'"), '任务星图应提供风险焦点');
check(questsPage.includes('quest-constellation-focus'), '任务星图应显示当前路线的聚焦摘要');
check(questsPage.includes('quest-constellation-metrics'), '任务星图应汇总关联、奖励与风险数量');
check(styles.includes('.quest-constellation-focus'), '任务星图摘要应具备专用视觉样式');
check(styles.includes('.quest-constellation-mode'), '任务星图模式控制应具备专用视觉样式');

console.log('NPC 任务星图静态测试通过');
