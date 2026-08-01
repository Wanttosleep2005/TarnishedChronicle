import { deriveCollections, enrichCollectionLocations, entryStatus, type CollectionEntry } from '../src/renderer/src/lib/collections.ts';
import { findItemSources } from '../src/renderer/src/lib/locate-item.ts';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

const emptyProfile = {
  ownedWeaponBaseIds: new Set<number>(),
  ownedArmorIds: new Set<number>(),
  ownedTalismanIds: new Set<number>(),
  ownedGoodsIds: new Set<number>(),
  ownedAshOfWarIds: new Set<number>(),
};

const catalog = deriveCollections(emptyProfile);
const sourceMap = new Map<string, Awaited<ReturnType<typeof findItemSources>>>();
for (const entry of catalog.entries) {
  sourceMap.set(entry.key, await findItemSources(entry.placementType, entry.id));
}
const located = enrichCollectionLocations(catalog, sourceMap);
const statusOf = (entry: CollectionEntry) => entryStatus(entry, true);

const placeholders = located.entries.filter((entry) => /^(头部|身体|腕部|腿部)$/.test(entry.name));
assert(placeholders.length === 4, `分类占位行数量异常：${placeholders.length}`);
for (const entry of placeholders) {
  assert(statusOf(entry) === 'unresolved', `${entry.key} 分类占位行应保持无法确认`);
}

const zhVerifiedWithoutSource = located.entries.filter((entry) => (
  entry.sources.length === 0
  && !entry.acquisition
  && !entry.acquisitionRecord?.verified
  && entry.acquisitionZhRecord?.verified === true
));
assert(zhVerifiedWithoutSource.length > 50, `中文已核对且无地图点位的样本不足：${zhVerifiedWithoutSource.length}`);
for (const entry of zhVerifiedWithoutSource.slice(0, 30)) {
  assert(statusOf(entry) !== 'unresolved', `${entry.key}（${entry.name}）已有中文获取记录却仍显示无法确认`);
}

assert(
  !located.entries.some((entry) => entry.kind === 'weapon' && statusOf(entry) === 'unresolved'),
  '有获取文案的武器不应显示无法确认',
);

const ownedSample = { ...located.entries[0], owned: true };
assert(statusOf(ownedSample) === 'owned', '已拥有条目应显示已拥有');

console.log(`收藏状态测试通过：占位行 ${placeholders.length} 条保持无法确认；中文已核对 ${zhVerifiedWithoutSource.length} 条不再误判；武器与已拥有状态正常。`);
