import { readFileSync } from 'node:fs';

const questsPage = readFileSync(new URL('../src/renderer/src/pages/QuestsPage.tsx', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

const wheelHandler = questsPage.match(/const handleViewportWheel = \(event: WheelEvent\) => \{([\s\S]*?)\n    \};/);
check(wheelHandler !== null, 'The constellation needs a dedicated non-passive wheel handler.');
check(wheelHandler![1].includes('event.preventDefault();'), 'The constellation wheel handler must prevent page scrolling.');
check(
  questsPage.includes("viewport.addEventListener('wheel', handleViewportWheel, { passive: false });"),
  'The constellation wheel listener must be non-passive so preventDefault takes effect.',
);

check(
  questsPage.includes('const [constellationQuestId, setConstellationQuestId] = useState<string | null>(null);'),
  'Constellation selection must retain its own quest id.',
);
const selectHandler = questsPage.match(/const selectConstellationQuest = \(id: string\) => \{([\s\S]*?)\n  \};/);
check(selectHandler !== null, 'Constellation node selection needs a dedicated handler.');
check(selectHandler![1].includes('setConstellationQuestId(id);'), 'Selecting a constellation node must update only constellation focus.');
check(!selectHandler![1].includes('scrollIntoView'), 'Selecting a constellation node must not scroll to a quest card.');
check(!selectHandler![1].includes('jumpToConstellationQuest'), 'Selecting a constellation node must not immediately jump to the quest list.');
check(questsPage.includes('onSelectQuest={selectConstellationQuest}'), 'QuestMindmap must use the non-jumping selection handler.');

check(questsPage.includes('data-quest-id={quest.id}'), 'Constellation nodes need a stable pointer-selection target.');
check(questsPage.includes('questId: nodeTarget?.dataset.questId ?? null'), 'Pointer capture must retain the node selected at drag start.');
check(/else if \(activeDrag\.questId\)\s*\{\s*onSelectQuest\(activeDrag\.questId\);/s.test(questsPage), 'A click captured by the canvas must still select its quest node.');

check(
  questsPage.includes('const [constellationMode, setConstellationMode] = useState<ConstellationMode | null>(null);'),
  'The constellation inspector must start collapsed.',
);
const inspectorToggle = questsPage.match(/const toggleConstellationMode = \(mode: ConstellationMode\) => \{([\s\S]*?)\n  \};/);
check(inspectorToggle !== null, 'The constellation inspector needs a dedicated toggle handler.');
check(
  inspectorToggle![1].includes('current === mode ? null : mode'),
  'Selecting the open inspector mode again must collapse the drawer.',
);
check(questsPage.includes('aria-expanded={constellationMode === key}'), 'Inspector mode buttons must expose drawer state.');
check(
  questsPage.includes('{constellationMode && (') && questsPage.includes('className="quest-constellation-drawer"'),
  'Inspector details must render only while a mode is open.',
);

check(
  questsPage.includes('const [questListExpanded, setQuestListExpanded] = useState(false);'),
  'The region quest list must have collapsed/expanded state.',
);
check(
  questsPage.includes('const [questListFocusedId, setQuestListFocusedId] = useState<string | null>(null);'),
  'The region quest list must retain the optional constellation jump target.',
);
const jumpHandler = questsPage.match(/const jumpToConstellationQuest = \(\) => \{([\s\S]*?)\n  \};/);
check(jumpHandler !== null, 'Constellation focus needs an explicit jump action.');
check(jumpHandler![1].includes('setQuestListExpanded(true);'), 'Explicit jump must expand the region quest list.');
check(jumpHandler![1].includes('setQuestListFocusedId(constellationQuestId);'), 'Explicit jump must focus the selected constellation quest.');
check(questsPage.includes('onJump={jumpToConstellationQuest}'), 'The constellation focus panel must expose the explicit jump action.');

check(
  questsPage.includes('const listQuests = questListFocusedId ? quests.filter((quest) => quest.id === questListFocusedId) : quests;'),
  'An explicit constellation jump must hide all non-selected quests.',
);
check(
  questsPage.includes('const visible = listQuests.filter((quest) => filter === \'all\' || quest.status === filter);'),
  'Region grouping must use the constellation-filtered quest list.',
);
check(questsPage.includes('aria-expanded={questListExpanded}'), 'The region list toggle must expose its collapsed state.');
check(
  questsPage.includes('{questListExpanded && (') && questsPage.includes('className="quest-regions"'),
  'The region list must render only when expanded.',
);

console.log('Constellation quest interaction static checks passed');
