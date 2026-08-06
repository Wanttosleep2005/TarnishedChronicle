import { readFileSync } from 'node:fs';

const questsPage = readFileSync(new URL('../src/renderer/src/pages/QuestsPage.tsx', import.meta.url), 'utf8');
const actionBar = readFileSync(new URL('../src/renderer/src/features/quests/components/NpcDecisionBar.tsx', import.meta.url), 'utf8');
const decisionModel = readFileSync(new URL('../src/renderer/src/features/quests/lib/deriveNpcDecisionSummary.ts', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(questsPage.includes("from '../features/quests/components/NpcDecisionBar.tsx'"), 'NPC 页面应接入独立的全局行动栏组件');
check(!questsPage.includes('QuestActionRail'), 'V2 页面不应重复渲染两套行动栏');
check(actionBar.includes('aria-label="NPC 全局行动与决策摘要"'), '行动栏应提供明确的区域无障碍名称');
check(actionBar.includes('aria-pressed={facet === key}'), '行动分类按钮应暴露当前选中状态');
check(actionBar.includes('aria-pressed={selectedQuestId === route.questId}'), 'NPC 阶段按钮应暴露当前聚焦路线');
check(actionBar.includes('onFocusStage(route.questId, route.currentStageIndex)'), '点击 NPC 阶段应聚焦对应当前阶段');
check(actionBar.includes('requestMapFocus'), '存在可靠映射时行动栏应复用现有地图聚焦能力');
check(actionBar.includes('aria-label={`在地图查看${route.npc}的${route.currentStage.location}`}'), '地图按钮应提供描述性 aria-label');
check(actionBar.includes('route.priority'), '行动卡片应显示统一决策优先级');
check(actionBar.includes('route.timeline'), '行动卡片应提供当前阶段时间线');
check(actionBar.includes('quest-decision-timeline'), '行动卡片应提供紧凑时间线视觉结构');

const focusHandler = questsPage.match(/const focusDecisionStage = \(id: string, stageIndex: number\) => \{([\s\S]*?)\n  \};/);
check(focusHandler !== null, '行动栏应有独立的共同聚焦处理器');
check(focusHandler![1].includes('selectQuest(id, stageIndex);'), '行动栏点击应同步任务工作流和阶段');
check(focusHandler![1].includes('setConstellationQuestId(id);'), '行动栏点击应同步星图节点焦点');
check(questsPage.includes('onFocusStage={focusDecisionStage}'), '行动栏组件应使用共同聚焦处理器');

const actionBarIndex = questsPage.indexOf('<NpcDecisionBar');
const flowIndex = questsPage.indexOf('<QuestFlow');
check(actionBarIndex >= 0 && flowIndex > actionBarIndex, '全局行动栏应位于既有任务工作流之前');

const evidence = '基于当前存档与已收录资料；关联不代表严格因果，也不自动判定未收录的对话分支。';
check(decisionModel.includes(evidence), '决策模型应提供统一的证据边界文案');
check(actionBar.includes('NPC_DECISION_EVIDENCE_NOTE'), '行动栏应直接显示证据边界文案');
check(!questsPage.includes('因果、战利品与抉择'), '任务图不得继续把资料关联描述为严格因果');
check(styles.includes('.quest-decision-bar'), '行动栏应具有独立的暗金视觉样式');
check(styles.includes('.quest-decision-route'), 'NPC 当前阶段入口应具有可扫描样式');

console.log('NPC 全局行动栏 UI 契约测试通过');
