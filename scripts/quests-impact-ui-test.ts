import { readFileSync } from 'node:fs';

const questsPage = readFileSync(new URL('../src/renderer/src/pages/QuestsPage.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(questsPage.includes("from '../lib/quest-impact.ts'"), 'NPC 页面应导入路线影响分析模块');
check(questsPage.includes('analyzeQuestImpact(quests, activeQuest.id, activeStageIndex)'), 'NPC 页面应使用路线影响分析引擎');
check(!questsPage.includes('quest-export.ts'), '已移除的路线导出不应残留在 NPC 页面');
check(questsPage.includes('function QuestImpactDesk'), 'NPC 页面应提供命运推演台');
check(questsPage.includes('命运推演台'), '推演台应提供明确的无障碍名称');
check(questsPage.includes('quest-impact-modes'), '推演台应能切换牵连、奖励和地区路径视图');
check(questsPage.includes('quest-impact-reward-thumb'), '推演台奖励应显示本地物品缩略图');
check(styles.includes('.quest-impact-desk'), '命运推演台应有独立布局样式');
check(styles.includes('.quest-impact-mode-panel'), '推演台模式内容应有稳定尺寸');
check(styles.includes('.quest-impact-reward-thumb .equip-thumb'), '推演台奖励图应有稳定尺寸');
check(styles.includes('@media (max-width: 760px)'), 'NPC 页面应保留窄屏适配');

console.log('NPC 命运推演台静态测试通过');
