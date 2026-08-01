import { ARMOR_SETS, ARMOR_SINGLE_IDS } from '../src/renderer/src/data/zh/armor-sets.ts';
import { ARMOR } from '../src/renderer/src/data/generated/armor.ts';
import {
  deriveCollections,
  groupArmorSets,
  isDlcArmorId,
  type CollectionEntry,
} from '../src/renderer/src/lib/collections.ts';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const catalogIds = new Set(ARMOR.filter((item) => !item.name.startsWith('[ERROR]')).map((item) => item.id));

const seenIds = new Set<number>();
for (const set of ARMOR_SETS) {
  for (const id of set.itemIds) {
    assert(catalogIds.has(id), `${set.name} 包含目录外条目 ${id}`);
    assert(!seenIds.has(id), `${set.name} 与其它套装重复包含条目 ${id}`);
    seenIds.add(id);
    assert(set.dlc === isDlcArmorId(id), `${set.name} 的 DLC 标记与条目 ${id} 不一致`);
  }
}
for (const id of ARMOR_SINGLE_IDS) {
  assert(catalogIds.has(id), `单件列表包含目录外条目 ${id}`);
  assert(!seenIds.has(id), `单件 ${id} 与套装重复`);
  seenIds.add(id);
}

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
const groupedCount = grouped.sets.reduce((sum, set) => sum + set.entries.length, 0) + grouped.singles.length;
assert(groupedCount === 710, `套装分组覆盖数量异常：${groupedCount}（应 710，不含 4 个分类占位行）`);
assert(!grouped.singles.some((entry) => [10000, 10100, 10200, 10300].includes(entry.id)), '分类占位行不应出现在单件列表');

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

console.log(`防具套装测试通过：${ARMOR_SETS.length} 套 + ${ARMOR_SINGLE_IDS.length} 单件，覆盖 ${groupedCount} 件防具，状态推导正常。`);
