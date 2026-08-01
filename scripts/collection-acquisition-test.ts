import { COLLECTION_ACQUISITION } from '../src/renderer/src/data/zh/collection-acquisition.ts';
import { COLLECTION_ACQUISITION_ZH } from '../src/renderer/src/data/zh/collection-acquisition-zh.ts';
import { ASHES_OF_WAR } from '../src/renderer/src/data/generated/ashes-of-war.ts';
import { ARMOR } from '../src/renderer/src/data/generated/armor.ts';
import { PLACEMENTS } from '../src/renderer/src/data/generated/placements.ts';
import { SPELLS } from '../src/renderer/src/data/generated/spells.ts';
import { SPIRIT_ASHES } from '../src/renderer/src/data/generated/spirit-ashes.ts';
import { TALISMANS } from '../src/renderer/src/data/generated/talismans.ts';
import { deriveCollections, normalizeAcquisitionText } from '../src/renderer/src/lib/collections.ts';
import { findItemSources, type PlacementType } from '../src/renderer/src/lib/locate-item.ts';

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
const nonWeaponEntries = catalog.entries.filter((entry) => entry.kind !== 'weapon');
const acquisitionKeys = Object.keys(COLLECTION_ACQUISITION);
const zhAcquisitionKeys = Object.keys(COLLECTION_ACQUISITION_ZH);

assert(!catalog.entries.some((entry) => entry.en.startsWith('[ERROR]')), '收藏目录不应包含 [ERROR] 废案条目');
assert(
  normalizeAcquisitionText('第一句。；；第二句；。第三句。') === '第一句。第二句。第三句。',
  '获取文本标点规范化失败',
);
for (const record of [...Object.values(COLLECTION_ACQUISITION), ...Object.values(COLLECTION_ACQUISITION_ZH)]) {
  assert(!/(?:[。！？.!?]；+|；{2,}|；[。！？.!?])/.test(`${record.summary} ${record.details}`), `${record.itemId} 获取文本含异常标点`);
}

assert(
  acquisitionKeys.length === nonWeaponEntries.length,
  `统一获取表条目数不匹配：table=${acquisitionKeys.length}, catalog=${nonWeaponEntries.length}`,
);
assert(
  zhAcquisitionKeys.length === nonWeaponEntries.length,
  `中文获取表条目数不匹配：table=${zhAcquisitionKeys.length}, catalog=${nonWeaponEntries.length}`,
);

for (const entry of nonWeaponEntries) {
  const record = entry.acquisitionRecord;
  assert(record, `${entry.key} 未接入统一获取表`);
  assert(record.kind === entry.kind, `${entry.key} 的类别不匹配：${record.kind}`);
  assert(/^https:\/\//.test(record.sourceUrl), `${entry.key} 来源 URL 无效`);
  assert(record.summary.trim().length > 0, `${entry.key} 缺少获取摘要`);
  assert(!/<\/?[a-z]|<!--|\[\[|\]\]|\{\{|\}\}|(?:^|；)\s*(?:Retail|CNT)\s*=/i.test(`${record.summary} ${record.details}`), `${entry.key} 获取正文仍包含 wiki 标记`);

  const zhRecord = COLLECTION_ACQUISITION_ZH[entry.key];
  assert(zhRecord, `${entry.key} 未接入中文获取表`);
  assert(zhRecord.kind === entry.kind, `${entry.key} 的中文类别不匹配：${zhRecord.kind}`);
  assert(/^https:\/\//.test(zhRecord.sourceUrl), `${entry.key} 中文来源 URL 无效`);
  assert(zhRecord.summary.trim().length > 0, `${entry.key} 缺少中文获取摘要`);
  assert(/[\u3400-\u9fff]/.test(`${zhRecord.summary} ${zhRecord.sourceTitle}`), `${entry.key} 中文资料缺少中文正文或标题`);
  assert(!/[A-Za-z]/.test(`${zhRecord.summary} ${zhRecord.details} ${zhRecord.sourceTitle}`), `${entry.key} 中文资料混入英文`);
  if (zhRecord.verified) {
    assert(!/^中文攻略[：:]?\s*参见|^参见/.test(zhRecord.summary), `${entry.key} 用泛化页面冒充具体中文攻略`);
    assert(
      /赐福|位于|(?:从|由).{0,30}(?:掉落|获得)|击败|击杀|消灭|掉落|商人|购买|花费|售价|兑换|任务|支线|对话|交谈|交给|完成|奖励|宝箱|拾取|前往|沿着|进入|来到|穿过|探索|调查|赐予|赠予|裁缝改|未实装|来源未知/.test(zhRecord.summary),
      `${entry.key} 已核对记录没有具体地点、对象、条件或获取步骤`,
    );
  } else {
    assert(zhRecord.summary.startsWith('中文攻略待补'), `${entry.key} 待补记录没有明确标记`);
  }
  assert(
    zhRecord.pin?.mapId === record.pin?.mapId && zhRecord.pin?.x === record.pin?.x && zhRecord.pin?.z === record.pin?.z,
    `${entry.key} 中文表与英文表的参考图钉不一致`,
  );
}

const placementKeys = new Set(PLACEMENTS.map((placement) => `${placement.itemType}:${placement.itemId}`));
const placementTypeForRecord = (kind: string): PlacementType => (
  kind === 'sorcery' || kind === 'incantation' || kind === 'spirit-ash' ? 'goods' : kind as PlacementType
);
const recordsWithoutPlacementByKind = new Map<string, [string, (typeof COLLECTION_ACQUISITION)[string]]>();

for (const [key, record] of Object.entries(COLLECTION_ACQUISITION)) {
  if (!record.pin || placementKeys.has(key) || recordsWithoutPlacementByKind.has(record.kind)) continue;
  recordsWithoutPlacementByKind.set(record.kind, [key, record]);
}

for (const kind of ['armor', 'talisman', 'sorcery', 'incantation', 'spirit-ash', 'ash-of-war']) {
  assert(recordsWithoutPlacementByKind.has(kind), `${kind} 没有可验证的参考图钉样本`);
  const [key, record] = recordsWithoutPlacementByKind.get(kind)!;
  const [, rawId] = key.split(':');
  const sources = await findItemSources(placementTypeForRecord(record.kind), Number(rawId));
  assert(sources[0]?.source === 'guide', `${key} 未回退到统一表参考图钉`);
  assert(sources[0]?.mapId === record.pin!.mapId, `${key} 参考图钉地图不一致`);
}

const precedence = Object.entries(COLLECTION_ACQUISITION).find(([key, record]) => record.pin && placementKeys.has(key));
assert(precedence, '没有找到可验证真实 placements 优先级的样本');
const [precedenceKey, precedenceRecord] = precedence;
const [, precedenceId] = precedenceKey.split(':');
const precedenceSources = await findItemSources(placementTypeForRecord(precedenceRecord.kind), Number(precedenceId));
assert(precedenceSources.length > 0, `${precedenceKey} 缺少真实地图来源`);
assert(precedenceSources[0].source !== 'guide', `${precedenceKey} 的真实地图来源被参考图钉覆盖`);

const generatedCounts = {
  armor: ARMOR.filter((item) => !item.name.startsWith('[ERROR]')).length,
  talisman: TALISMANS.filter((item) => !item.name.startsWith('[ERROR]')).length,
  sorcery: SPELLS.filter((item) => item.category !== 'Incantation' && !item.name.startsWith('[ERROR]')).length,
  incantation: SPELLS.filter((item) => item.category === 'Incantation' && !item.name.startsWith('[ERROR]')).length,
  'spirit-ash': SPIRIT_ASHES.filter((item) => !item.name.startsWith('[ERROR]')).length,
  'ash-of-war': ASHES_OF_WAR.filter((item) => !item.name.startsWith('[ERROR]')).length,
};
for (const [kind, count] of Object.entries(generatedCounts)) {
  const actual = nonWeaponEntries.filter((entry) => entry.kind === kind).length;
  assert(actual === count, `${kind} 目录数量异常：catalog=${actual}, generated=${count}`);
}

const zhVerified = Object.values(COLLECTION_ACQUISITION_ZH).filter((record) => record.verified).length;
console.log(`收藏获取表通过：英文 ${nonWeaponEntries.length} 条，中文 ${zhAcquisitionKeys.length} 条（已核对 ${zhVerified} 条），${recordsWithoutPlacementByKind.size} 类参考图钉回退，真实 placements 优先级通过`);
