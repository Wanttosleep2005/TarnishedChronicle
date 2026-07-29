import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { GRACE_PINS } from '../src/renderer/src/data/generated/grace-pins.ts';
import { GRACES } from '../src/renderer/src/data/generated/graces.ts';
import { TALISMANS } from '../src/renderer/src/data/generated/talismans.ts';
import { GOODS } from '../src/renderer/src/data/generated/goods.ts';
import { FIXED_BOSSES } from '../src/renderer/src/lib/boss-data.ts';
import { resolveGaItemId } from '../src/renderer/src/lib/derive.ts';
import { COLLECTION_GROUPS, deriveCollections, unresolvedAcquisitionHint } from '../src/renderer/src/lib/collections.ts';
import { findItemPixel } from '../src/renderer/src/lib/locate-item.ts';
import { markerToMasterPixel } from '../src/renderer/src/lib/map-affine.ts';
import { questDefinitionAudit } from '../src/renderer/src/lib/quests.ts';
import { compareRegions, regionDefinition, REGION_CATALOG } from '../src/renderer/src/lib/region-catalog.ts';
import { displayPlace } from '../src/renderer/src/data/zh/translations.ts';

const root = join(import.meta.dirname, '..');
const failures: string[] = [];

function check(condition: boolean, message: string): void {
  if (!condition) failures.push(message);
}

const bossFlags = FIXED_BOSSES.map((boss) => boss.defeatFlagId);
check(new Set(bossFlags).size === bossFlags.length, 'Boss 讨伐记录仍包含重复击杀旗标');
check(
  FIXED_BOSSES.every((boss) => Boolean(boss.name || boss.zhOverride)),
  'Boss 讨伐记录仍包含无显示名称条目',
);

const bossLocations = FIXED_BOSSES.flatMap((boss) =>
  boss.locations.map((location) => ({ ...location, defeatFlagId: boss.defeatFlagId })),
);
const unprojected = bossLocations.filter((boss) => !markerToMasterPixel(boss.mapId, boss.x, boss.z));
check(
  unprojected.length === 0,
  `仍有 ${unprojected.length} 个 Boss 地点无法投影到地图:${unprojected.map((boss) => boss.defeatFlagId).join(', ')}`,
);
const bossMetaSource = readFileSync(join(root, 'src/renderer/src/lib/boss-meta.ts'), 'utf8');
check(!bossMetaSource.includes('?? mapId'), 'Boss 地点仍可能回退显示内部地图 ID');

const farum = FIXED_BOSSES.filter((boss) => boss.mapId.startsWith('m13_'));
check(farum.length > 0, '没有找到法姆·亚兹拉 Boss 数据');
check(
  farum.every((boss) => {
    const point = markerToMasterPixel(boss.mapId, boss.x, boss.z);
    return Boolean(
      point &&
        point.master === 'M00' &&
        point.px >= 8_200 &&
        point.px <= 9_100 &&
        point.py >= 4_050 &&
        point.py <= 4_950,
    );
  }),
  '法姆·亚兹拉点位没有落在地图东侧独立图形范围',
);

const graceByEntityId = new Map(GRACES.map((grace) => [grace.bonfireEntityId, grace]));
const farumGraces = GRACE_PINS.filter((pin) => pin.mapId.startsWith('m13_'));
check(farumGraces.length === 11, `法姆·亚兹拉赐福数量异常:${farumGraces.length}`);
check(
  farumGraces.every((pin) => {
    const point = markerToMasterPixel(pin.mapId, pin.x, pin.z);
    return Boolean(
      point &&
        point.master === 'M00' &&
        point.px >= 8_200 &&
        point.px <= 9_100 &&
        point.py >= 4_050 &&
        point.py <= 4_950,
    );
  }),
  '法姆·亚兹拉赐福没有全部落在地图东侧独立图形范围',
);

const supportedRegions = new Set<string>();
for (const pin of GRACE_PINS) {
  const grace = graceByEntityId.get(pin.entityId);
  const projected = markerToMasterPixel(pin.mapId, pin.x, pin.z);
  if (grace?.region && projected) supportedRegions.add(`${projected.master}|${grace.region}`);
}
const worldMapSource = readFileSync(join(root, 'src/renderer/src/lib/worldmap.ts'), 'utf8');
check(
  worldMapSource.includes('region: g.region') && !worldMapSource.includes('.filter((g) => g.n >= 2)'),
  '地图地区图例仍会过滤只有一个赐福的已支持地区',
);

const questAudit = questDefinitionAudit();
check(questAudit.quests === 26, `NPC 任务线数量应为 26,当前为 ${questAudit.quests}`);
check(questAudit.unresolvedGraces.length === 0, `NPC 阶段含未解析赐福:${questAudit.unresolvedGraces.join(', ')}`);
check(questAudit.unresolvedSignals.length === 0, `NPC 阶段含未解析信号:${questAudit.unresolvedSignals.join(', ')}`);

const catalogNames = REGION_CATALOG.map((region) => region.region);
check(new Set(catalogNames).size === catalogNames.length, '区域目录包含重复地区');
for (const grace of GRACES) {
  if (!grace.region) continue;
  const region = displayPlace(grace.region);
  check(regionDefinition(region).key !== 'other', `赐福地区未纳入世界目录:${region}`);
}
const questSource = readFileSync(join(root, 'src/renderer/src/lib/quests.ts'), 'utf8');
const questRegions = [...questSource.matchAll(/region: '([^']+)'/g)].map((match) => match[1]);
for (const region of questRegions) {
  check(regionDefinition(region).key !== 'other', `NPC 地区未纳入世界目录:${region}`);
}
check(
  compareRegions('啜泣半岛', '宁姆格福') < 0 && compareRegions('宁姆格福', '盖利德') < 0,
  '地表地区首段顺序不是啜泣半岛、宁姆格福、盖利德',
);

check(resolveGaItemId(110000).kind === 'empty', '徒手没有被归为空槽');
check(resolveGaItemId((166 | 0x40000000) >>> 0).kind === 'empty', '无缝联机内部物品 166 没有被过滤');
check(resolveGaItemId((8_380_001 | 0x40000000) >>> 0).kind === 'empty', '无缝联机内部物品范围没有被过滤');
const normalGood = GOODS.find((good) => good.id > 0 && good.id !== 166);
check(Boolean(normalGood), '没有可用于物品解析审计的普通道具');
if (normalGood) {
  check(
    resolveGaItemId((normalGood.id | 0x40000000) >>> 0).kind === 'goods',
    `普通道具被错误过滤:${normalGood.id}`,
  );
}

const emptyCollectionProfile = {
  ownedWeaponBaseIds: new Set<number>(),
  ownedArmorIds: new Set<number>(),
  ownedTalismanIds: new Set<number>(),
  ownedGoodsIds: new Set<number>(),
  ownedAshOfWarIds: new Set<number>(),
};
const collectionCatalog = deriveCollections(emptyCollectionProfile);
check(collectionCatalog.groups.length === COLLECTION_GROUPS.length, `collection groups: ${collectionCatalog.groups.length}`);
check(collectionCatalog.groups.every((group) => group.total > 0), 'collection group is empty');
check(COLLECTION_GROUPS.every((group) => unresolvedAcquisitionHint(group.kind).length > 0), '收藏类别缺少无法确认说明');
check(new Set(collectionCatalog.entries.map((entry) => entry.key)).size === collectionCatalog.entries.length, 'collection keys are not unique');
check(!collectionCatalog.entries.some((entry) => entry.id === 110000), 'unarmed is included in collections');
check(
  !collectionCatalog.entries.some((entry) => entry.kind === 'weapon' && /arrow|bolt|bow|crossbow/i.test(entry.category)),
  'bows, crossbows, arrows, or bolts are included in collections',
);
const collectionWeapons = collectionCatalog.entries.filter((entry) => entry.kind === 'weapon');
check(collectionWeapons.every((entry) => entry.id % 10000 === 0), 'weapon collection contains a non-base ID');
check(new Set(collectionWeapons.map((entry) => entry.id)).size === collectionWeapons.length, 'weapon base IDs are duplicated');
check(
  collectionCatalog.entries.filter((entry) => entry.kind === 'armor').every((entry) => entry.placementType === 'armor') &&
    collectionCatalog.entries.filter((entry) => entry.kind === 'ash-of-war').every((entry) => entry.placementType === 'ash-of-war'),
  'armor or ash-of-war placement type is invalid',
);

const legendaryTalismanNames = [
  'Radagon Icon',
  "Radagon's Soreseal",
  'Godfrey Icon',
  'Moon of Nokstella',
  'Dragoncrest Greatshield Talisman',
  "Marika's Soreseal",
  "Old Lord's Talisman",
  "Erdtree's Favor +2",
];
for (const name of legendaryTalismanNames) {
  const talisman = TALISMANS.find((entry) => entry.name === name);
  check(Boolean(talisman), `传说护符未找到数据:${name}`);
  if (!talisman) continue;
  const point = await findItemPixel('talisman', talisman.id);
  check(Boolean(point), `传说护符缺少可投影地点:${name}`);
}

const questPageSource = readFileSync(join(root, 'src/renderer/src/pages/QuestsPage.tsx'), 'utf8');
for (const phrase of ['缺失不代表没做过', '缺失≠没做过', '证据不足时宁可']) {
  check(!questSource.includes(phrase) && !questPageSource.includes(phrase), `NPC 页面仍包含技术提示:${phrase}`);
}

check(existsSync(join(root, 'start.bat')), '根目录缺少 start.bat');

if (failures.length > 0) {
  console.error(`ER 数据审计失败(${failures.length} 项):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(
    `ER 数据审计通过:Boss ${FIXED_BOSSES.length} 个唯一进度,NPC ${questAudit.quests} 条,${supportedRegions.size} 个地图地区均有图例。`,
  );
}
