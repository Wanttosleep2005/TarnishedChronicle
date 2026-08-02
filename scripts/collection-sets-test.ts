import { readFileSync } from 'node:fs';
import { ARMOR_SETS, ARMOR_SINGLE_IDS } from '../src/renderer/src/data/zh/armor-sets.ts';
import { ARMOR } from '../src/renderer/src/data/generated/armor.ts';
import {
  deriveCollections,
  groupArmorSetVariants,
  groupArmorSets,
  isDlcArmorId,
  type CollectionEntry,
} from '../src/renderer/src/lib/collections.ts';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const collectionPage = readFileSync(new URL('../src/renderer/src/pages/CollectionPage.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

assert(collectionPage.includes('className="armor-set-display"'), '套装摘要应使用单一穿戴展示台。');
assert(collectionPage.includes('className="collection-set-toggle"'), '整张套装摘要应提供统一的展开按钮。');
assert(!collectionPage.includes("if (slot === 'Arms')"), '腕部不应复制成两个独立交互槽位。');
assert(collectionPage.includes('className="armor-set-piece-label"'), '穿戴展示的四个固定槽位应带有明确部位标签。');
assert(collectionPage.includes('decoding="async"'), '套装缩略图应异步解码，避免阻塞滚动。');
assert(collectionPage.includes('memo(function ArmorSetCard'), '打开单套详情时不应重新渲染其余套装卡片。');
assert(collectionPage.includes('className="collection-set-slot-strip"'), '套装摘要应显示四个部位的聚合状态。');
assert(collectionPage.includes('className="collection-set-variant-switch"'), '有轻装的套装应在同一张卡内提供原装/轻装切换。');
assert(collectionPage.includes('className="collection-set-part-group"'), '展开区应按部位组织分件与获取方法。');
assert(collectionPage.includes('{!setViewActive && visibleEntries.length === 0 &&'), '套装搜索有结果时不应显示散件视图的空状态。');
assert(collectionPage.includes('createPortal('), '套装详情应通过 portal 渲染为独立覆盖层。');
assert(collectionPage.includes('role="dialog"') && collectionPage.includes('aria-modal="true"'), '套装详情覆盖层应提供模态对话框语义。');
assert(collectionPage.includes("event.key === 'Escape'"), '套装详情应支持 Esc 关闭。');
assert(!collectionPage.includes('expandedSets'), '套装详情不得继续以内联展开状态挤压列表。');
assert(/\.collection-set\s*\{(?=[^}]*content-visibility:\s*auto)(?=[^}]*contain-intrinsic-size:)[^}]*\}/s.test(styles), '离屏套装卡片应跳过布局和绘制。');
assert(/\.armor-set-display\s*\{[^}]*display:\s*grid[^}]*grid-template-areas:/s.test(styles), '穿戴展示应使用固定网格槽位。');
assert(!/\.armor-set-piece\s*\{[^}]*position:\s*absolute/s.test(styles), '四个装备图标不得再用绝对定位互相覆盖。');
assert(!/\.armor-set-piece img\s*\{[^}]*filter:/s.test(styles), '套装缩略图不应使用高开销滤镜。');
assert(/@media\s*\(max-width:\s*640px\)[\s\S]*\.armor-set-display/s.test(styles), '穿戴展示台应提供窄窗口布局。');
assert(/\.armor-set-modal-backdrop\s*\{(?=[^}]*position:\s*fixed)(?=[^}]*inset:\s*0)[^}]*\}/s.test(styles), '套装详情遮罩应覆盖整个窗口。');
assert(/\.armor-set-dialog\s*\{(?=[^}]*max-height:)(?=[^}]*overflow:\s*hidden)[^}]*\}/s.test(styles), '套装详情窗口应限制高度并在内部滚动。');

const catalogIds = new Set(ARMOR.filter((item) => !item.name.startsWith('[ERROR]')).map((item) => item.id));

const seenIds = new Set<number>();
for (const set of ARMOR_SETS) {
  for (const id of set.itemIds) {
    assert(catalogIds.has(id), `${set.name} 包含目录外条目 ${id}`);
    seenIds.add(id);
    assert(set.dlc === isDlcArmorId(id), `${set.name} 的 DLC 标记与条目 ${id} 不一致`);
  }
}
for (const id of ARMOR_SINGLE_IDS) {
  assert(catalogIds.has(id), `单件列表包含目录外条目 ${id}`);
  assert(!seenIds.has(id), `单件 ${id} 与实际套装重复`);
  seenIds.add(id);
}
assert(ARMOR_SETS.length === 156, `实际套装数量异常：${ARMOR_SETS.length}`);
assert(ARMOR_SINGLE_IDS.length === 50, `单件数量异常：${ARMOR_SINGLE_IDS.length}`);
assert(seenIds.size === 710, `实际套装与单件应覆盖 710 件唯一防具，当前为 ${seenIds.size}`);

const setByName = (name: string) => ARMOR_SETS.find((set) => set.name === name);
assert(setByName('白金之子套装')?.itemIds.join(',') === '1060000,1060100', '白金之子套装应采用 Wiki 的两件组成。');
assert(setByName('灵庙小兵套装')?.itemIds.join(',') === '1870100,1830200,1830300', '灵庙小兵套装应包含共用的小兵腕甲和腿甲。');
assert(setByName('熔炉树形套装')?.itemIds.includes(570200), '熔炉树形套装应与斧形套装共享熔炉臂甲。');
assert(setByName('诺克斯剑士套装')?.itemIds.includes(290300), '诺克斯剑士套装应与诺克斯套装共享腿甲。');
assert(setByName('流浪骑士套装')?.itemIds.includes(661100), '流浪骑士套装应包含已核验的轻装铠甲。');
assert(!setByName('拼接（帕奇）套装'), '未实装的拼接防具不得再定义为实际套装。');

const emptyProfile = {
  ownedWeaponBaseIds: new Set<number>(),
  ownedArmorIds: new Set<number>(),
  ownedTalismanIds: new Set<number>(),
  ownedGoodsIds: new Set<number>(),
  ownedAshOfWarIds: new Set<number>(),
};
const catalog = deriveCollections(emptyProfile);
const armorEntries = catalog.entries.filter((entry) => entry.kind === 'armor');
assert(armorEntries.length === 714, `防具目录数量异常：${armorEntries.length}`);

const grouped = groupArmorSets(catalog.entries, true);
assert(grouped.sets.length === 231, `原装与轻装视图数量异常：${grouped.sets.length}`);
const setCards = groupArmorSetVariants(grouped.sets);
assert(setCards.length === 156, `原装与轻装应聚合为 156 张套装卡，当前为 ${setCards.length}`);
const groupedIds = new Set([
  ...grouped.sets.flatMap((set) => set.entries.map((entry) => entry.id)),
  ...grouped.singles.map((entry) => entry.id),
]);
assert(groupedIds.size === 710, `套装分组唯一覆盖数量异常：${groupedIds.size}（应 710，不含 4 个分类占位行）`);
assert(!grouped.singles.some((entry) => [10000, 10100, 10200, 10300].includes(entry.id)), '分类占位行不应出现在单件列表');

const alberichViews = grouped.sets.filter((view) => view.def.name === '阿尔佩利希套装');
assert(alberichViews.length === 2, '有轻装的套装应拆为原装和轻装两条视图。');
const alberichCard = setCards.find((set) => set.def.name === '阿尔佩利希套装');
assert(alberichCard?.standard.variant === 'standard' && alberichCard.altered?.variant === 'altered', '同一套装卡应同时持有原装与轻装视图。');
const alberichStandard = alberichViews.find((view) => view.variant === 'standard');
const alberichAltered = alberichViews.find((view) => view.variant === 'altered');
assert(alberichStandard?.entries.map((entry) => entry.id).sort((left, right) => left - right).join(',') === '120000,120100,120200,120300', '原装进度只应包含原装部件和共用部件。');
assert(alberichAltered?.entries.map((entry) => entry.id).sort((left, right) => left - right).join(',') === '120200,120300,121000,121100', '轻装进度应包含轻装部件和共用部件。');

const completedAlberichCatalog = deriveCollections({
  ...emptyProfile,
  ownedArmorIds: new Set([120000, 121000, 120100, 121100, 120200, 120300]),
});
const completedAlberichViews = groupArmorSets(completedAlberichCatalog.entries, true).sets.filter((view) => view.def.name === '阿尔佩利希套装');
assert(completedAlberichViews.every((view) => view.status === 'owned' && view.ownedCount === 4), '原装与轻装应分别计算共享部件后的完整进度。');
assert(completedAlberichCatalog.groups.find((group) => group.kind === 'armor')?.owned === 6, '全局防具进度不得重复计算两套共享部件。');

const fakeEntry = (overrides: Partial<CollectionEntry>): CollectionEntry => ({
  key: 'armor:1',
  kind: 'armor',
  category: 'Head',
  id: 1,
  name: '测试',
  en: 'Test',
  icon: 0,
  owned: false,
  placementType: 'armor',
  dlc: false,
  sources: [],
  ...overrides,
});
const known = fakeEntry({ acquisitionZhRecord: { kind: 'armor', itemId: 1, sourceKind: 'map', summary: '测试拾取', details: '', sourceTitle: '测试', sourceUrl: 'https://example.com', verified: true } });
const unknown = fakeEntry({ acquisitionZhRecord: { kind: 'armor', itemId: 1, sourceKind: 'unknown', summary: '中文攻略待补', details: '', sourceTitle: '测试', sourceUrl: 'https://example.com', verified: false } });
const { armorSetStatus } = await import('../src/renderer/src/lib/collections.ts');
assert(armorSetStatus([{ ...known, owned: true }], 1, true) === 'owned', '全拥有套装应为已拥有');
assert(armorSetStatus([{ ...known, owned: true }, { ...known, owned: false }], 1, true) === 'partial', '部分拥有套装应为部分获取');
assert(armorSetStatus([{ ...known, owned: false }, { ...known, owned: false }], 0, true) === 'missing', '无拥有且全部已核对应为未获取');
assert(armorSetStatus([{ ...known, owned: false }, { ...unknown, owned: false }], 0, true) === 'unresolved', '含无法确认分件的套装应为无法确认');

console.log(`防具套装测试通过：${ARMOR_SETS.length} 个实际套装、${grouped.sets.length} 条原装/轻装视图聚合为 ${setCards.length} 张套装卡 + ${ARMOR_SINGLE_IDS.length} 单件，唯一覆盖 ${groupedIds.size} 件防具。`);
