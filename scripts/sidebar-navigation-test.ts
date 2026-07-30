import { readFileSync } from 'node:fs';

const app = readFileSync(new URL('../src/renderer/src/App.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(!/\{ key: 'calculator', label:/.test(app), '计算器不应作为独立主导航项');
check(app.includes("const PAGE_KEYS: PageKey[] = [...NAV.map((n) => n.key), 'calculator'];"), '地址栏仍应支持直接访问计算器');
check(app.includes("useState(() => initialPage() === 'calculator')"), '直接访问计算器时应展开其父级导航');
check(app.includes("if (item.key !== 'planner')"), '计算器应嵌套在洗点模拟之下');
check(app.includes("className={`nav-item nav-child ${page === 'calculator' ? 'active' : ''}`}"), '计算器子项应保留独立选中态');
check(app.includes("{ key: 'quests', label: 'NPC 任务线'"), 'NPC 任务线应保持独立主导航');
check(styles.includes('.nav-child-toggle {'), '子项展开控件应有专用样式');
check(styles.includes('.nav-child {'), '子项应有缩进样式');

console.log('侧边栏层级导航静态测试通过');
