import { readFileSync } from 'node:fs';
import { fuzzyMatch } from '../src/renderer/src/lib/fuzzy-search.ts';
import { markerToMasterPixel } from '../src/renderer/src/lib/map-affine.ts';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const page = readFileSync(new URL('../src/renderer/src/pages/BossesPage.tsx', import.meta.url), 'utf8');
const bossData = readFileSync(new URL('../src/renderer/src/lib/boss-data.ts', import.meta.url), 'utf8');
const bossMeta = readFileSync(new URL('../src/renderer/src/lib/boss-meta.ts', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

assert(bossData.includes('DLC_BOSS_MAP_AREAS'), 'Boss 本体 / DLC 必须依据实际地图区块判定。');
assert(page.includes('bossScope(row.boss)'), 'Boss 页必须使用数据层的范围判定，不能按名称猜测。');
assert(page.includes('className="boss-scope-switch"'), 'Boss 页必须提供全部、本体与 DLC 的范围切换。');
assert(page.includes('className="boss-command-target"'), 'Boss 页必须展示当前追猎目标。');
assert(page.includes('targetReason'), '当前追猎目标必须说明其选择依据。');
assert(page.includes('const plannedTargets'), '讨伐计划应优先作为当前追猎目标。');
assert(page.includes('className="boss-hunt-queue"'), 'Boss 页必须提供清晰的讨伐队列。');
assert(page.includes('createPortal('), 'Boss 详情必须通过 portal 渲染为覆盖窗口。');
assert(page.includes('className="boss-dialog-backdrop"'), 'Boss 详情必须具有独立的全窗口遮罩层。');
assert(page.includes('role="dialog"') && page.includes('aria-modal="true"'), 'Boss 详情覆盖层应提供模态对话框语义。');
assert(page.includes("event.key === 'Escape'"), 'Boss 详情必须支持 Esc 关闭。');
assert(/\.boss-dialog-backdrop\s*\{(?=[^}]*position:\s*fixed)(?=[^}]*inset:\s*0)[^}]*\}/s.test(styles), 'Boss 详情遮罩必须覆盖整个窗口。');
assert(/\.boss-dialog\s*\{(?=[^}]*max-height:)(?=[^}]*overflow:\s*hidden)[^}]*\}/s.test(styles), 'Boss 详情窗口必须限制高度并在内部滚动。');
assert(
  /\.boss-dialog-profile\s*\{(?=[^}]*justify-content:\s*center)[^}]*\}/s.test(styles),
  '奖励较多时，桌面端 Boss 资料栏应在被撑高的详情区内垂直居中。',
);
assert(
  /@media\s*\(max-width:\s*640px\)[\s\S]*\.boss-dialog-profile\s*\{(?=[^}]*justify-content:\s*flex-start)[^}]*\}/s.test(styles),
  '窄屏 Boss 资料栏应恢复顶部单列排布。',
);
assert(/@media\s*\(max-width:\s*640px\)[\s\S]*\.boss-command-panel/s.test(styles), 'Boss 战报台必须提供窄窗口布局。');

const { FIXED_BOSSES, bossScope } = await import('../src/renderer/src/lib/boss-data.ts');
assert(typeof bossScope === 'function', 'Boss 数据层必须导出范围判定函数。');
const dlcRows = FIXED_BOSSES.filter((boss) => bossScope(boss) === 'dlc');
assert(dlcRows.length === 42, `DLC Boss 数量异常：${dlcRows.length}`);
assert(bossScope(FIXED_BOSSES.find((boss) => boss.defeatFlagId === 10000800)!) === 'base', '接肢葛瑞克应归入本体。');
assert(bossScope(FIXED_BOSSES.find((boss) => boss.defeatFlagId === 20000800)!) === 'dlc', '舞狮应归入黄金树幽影。');
assert(bossScope(FIXED_BOSSES.find((boss) => boss.defeatFlagId === 2052400800)!) === 'dlc', '尖刺山的古龙应归入黄金树幽影。');

const scadutreeAvatar = FIXED_BOSSES.find((boss) => boss.defeatFlagId === 2050480800);
assert(scadutreeAvatar?.zhOverride === '幽影树的化身', '幽影树的化身不能被误标为坠星兽物。');
assert(/2050480800:\s*'幽影树的树脚'/.test(bossMeta), '幽影树的化身应归入幽影树的树脚。');
assert(
  scadutreeAvatar && markerToMasterPixel(scadutreeAvatar.mapId, scadutreeAvatar.x, scadutreeAvatar.z)?.master === 'M10',
  '幽影树的化身必须可投影到幽影之地地图。',
);

const { bossLootArchive } = await import('../src/renderer/src/lib/boss-loot.ts');
assert(typeof bossLootArchive === 'function', 'Boss 元数据必须提供固定掉落档案。');
const lootArchive = FIXED_BOSSES.map((boss) => bossLootArchive(boss.defeatFlagId));
assert(lootArchive.every((loot) => loot !== undefined), '207 个唯一击杀旗标均应具备掉落档案。');
assert(
  bossLootArchive(2050480800)?.drops.some((drop) => drop.en === 'Remembrance of the Shadow Sunflower'),
  '幽影树的化身应掉落幽影树化身的追忆。',
);
assert(
  bossLootArchive(10000800)?.drops.some((drop) => drop.en === "Godrick's Great Rune"),
  '接肢葛瑞克应掉落葛瑞克的大卢恩。',
);
const {
  BOSS_LOOT_UNRESOLVED_NAMES,
  BOSS_REMEMBRANCE_EXCHANGE_UNRESOLVED_NAMES,
  bossLootDetails,
  bossLootSearchTerms,
  bossRemembranceExchange,
} = await import('../src/renderer/src/lib/boss-loot-details.ts');
assert(BOSS_LOOT_UNRESOLVED_NAMES.length === 0, `固定掉落必须全部解析为本地物品：${BOSS_LOOT_UNRESOLVED_NAMES.join('、')}`);
assert(
  BOSS_REMEMBRANCE_EXCHANGE_UNRESOLVED_NAMES.length === 0,
  `追忆兑换必须全部解析为本地物品：${BOSS_REMEMBRANCE_EXCHANGE_UNRESOLVED_NAMES.join('、')}`,
);
assert(
  bossLootDetails(1034480800)?.some((drop) => drop.en === 'Frozen Needle' && drop.source === 'arena-chest'),
  '王室亡魂应标记王室领地废墟的固定场地宝箱奖励。',
);
assert(bossLootDetails(1034500800)?.length === 0, '三姐妹塔的初次辉石龙亚杜拉遭遇不应复用最终击杀奖励。');
assert(
  bossRemembranceExchange(2050480800)?.rewards.some((drop) => drop.en === 'Shadow Sunflower Blossom'),
  '幽影树化身的追忆应列出影轮草花的兑换物。',
);
const rykardSearchTerms = bossLootSearchTerms(16000800);
assert(fuzzyMatch('拉卡德的大卢恩', ...rykardSearchTerms), '固定掉落应可反查对应 Boss。');
assert(fuzzyMatch('Blasphemous Blade', ...rykardSearchTerms), '追忆兑换物也应可反查对应 Boss。');
assert(page.includes('bossLootSearchTerms(row.boss.defeatFlagId)'), 'Boss 搜索必须纳入战利品和追忆兑换物。');
assert(page.includes('搜索 Boss、掉落或兑换物（中 / 英文）'), 'Boss 搜索框应明确支持掉落物反查。');
assert(page.includes('固定掉落'), 'Boss 详情必须展示固定掉落区。');
assert(page.includes('追忆兑换'), 'Boss 详情必须展示追忆兑换信息。');

console.log(`Boss 战报台测试通过：${FIXED_BOSSES.length} 个唯一击杀旗标，其中 DLC ${dlcRows.length} 个。`);
