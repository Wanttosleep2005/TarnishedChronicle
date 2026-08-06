import { readFileSync } from 'node:fs';

const questsPage = readFileSync(new URL('../src/renderer/src/pages/QuestsPage.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(questsPage.includes('function QuestMindmap'), 'NPC 页面应提供覆盖全部路线的交互思维导图');
check(questsPage.includes("'related'"), '思维导图应支持关联链路筛选');
check(questsPage.includes('onPointerMove'), '思维导图应支持指针拖拽平移');
check(
  questsPage.includes("viewport.addEventListener('wheel', handleViewportWheel, { passive: false });")
    && questsPage.includes('event.preventDefault();'),
  '思维导图应支持不会滚动页面的滚轮缩放',
);
check(questsPage.includes('重置视图'), '思维导图应提供视图复位');
check(questsPage.includes('quest-mindmap-node'), '思维导图节点应可聚焦任务工作流');
check(
  /\.closest\s*(?:<\s*HTMLElement\s*>)?\s*\(\s*['"]\.quest-mindmap-node['"]\s*\)/.test(questsPage),
  '节点点击不应被画布拖拽行为拦截',
);
check(styles.includes('.quest-mindmap-viewport'), '思维导图应有专用视口样式');
check(styles.includes('touch-action: none'), '思维导图触控拖拽不应触发浏览器手势');

console.log('NPC 思维导图静态测试通过');
