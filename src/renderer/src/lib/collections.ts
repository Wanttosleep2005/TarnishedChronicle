import { ARMOR } from '../data/generated/armor.ts';
import { ASHES_OF_WAR } from '../data/generated/ashes-of-war.ts';
import { GRACES } from '../data/generated/graces.ts';
import { GRACE_PINS } from '../data/generated/grace-pins.ts';
import { SPELLS } from '../data/generated/spells.ts';
import { SPIRIT_ASHES } from '../data/generated/spirit-ashes.ts';
import { TALISMANS } from '../data/generated/talismans.ts';
import { WEAPONS } from '../data/generated/weapons.ts';
import { zhItemNameByKind, displayPlace } from '../data/zh/translations.ts';
import type { MasterPixel } from './map-affine.ts';
import { markerToMasterPixel } from './map-affine.ts';
import type { CharacterProfile } from './derive.ts';
import { type ItemPlacementSource, type PlacementType } from './locate-item.ts';
import { compareRegions, regionDefinition } from './region-catalog.ts';

export type CollectionKind = 'weapon' | 'armor' | 'talisman' | 'sorcery' | 'incantation' | 'spirit-ash' | 'ash-of-war';
export type CollectionStatus = 'owned' | 'missing' | 'unresolved';

export interface CollectionSource {
  readonly mapId: string;
  readonly source: string;
  readonly sourceLabel: string;
  readonly chance: number;
  readonly region: string | null;
  readonly projected: MasterPixel;
}

export interface CollectionEntry {
  readonly key: string;
  readonly kind: CollectionKind;
  readonly category: string;
  readonly id: number;
  readonly name: string;
  readonly en: string;
  readonly icon: number;
  readonly owned: boolean;
  readonly placementType: PlacementType;
  readonly dlc: boolean | null;
  readonly sources: readonly CollectionSource[];
}

export interface CollectionGroup {
  readonly kind: CollectionKind;
  readonly label: string;
  readonly entries: readonly CollectionEntry[];
  readonly owned: number;
  readonly total: number;
}

export interface CollectionCatalog {
  readonly groups: readonly CollectionGroup[];
  readonly entries: readonly CollectionEntry[];
  readonly owned: number;
  readonly total: number;
}

export const COLLECTION_GROUPS: readonly { kind: CollectionKind; label: string; order: number }[] = [
  { kind: 'weapon', label: '武器', order: 0 },
  { kind: 'armor', label: '防具', order: 1 },
  { kind: 'talisman', label: '护符', order: 2 },
  { kind: 'sorcery', label: '魔法', order: 3 },
  { kind: 'incantation', label: '祷告', order: 4 },
  { kind: 'spirit-ash', label: '骨灰', order: 5 },
  { kind: 'ash-of-war', label: '战灰', order: 6 },
] as const;

const SOURCE_LABEL: Readonly<Record<string, string>> = {
  map: '地图拾取 / 宝箱',
  enemy: '敌人掉落',
  event: '事件 / 任务奖励',
};

const UNRESOLVED_ACQUISITION_HINT: Readonly<Record<CollectionKind, string>> = {
  weapon: '武器可能来自商店、敌人掉落、地图宝箱或任务奖励；当前没有足够可靠的记录可确认具体方式。',
  armor: '防具可能来自敌人掉落、商店、地图宝箱或任务奖励；当前没有足够可靠的记录可确认具体方式。',
  talisman: '护符可能来自地图宝箱、敌人、商店或任务奖励；当前没有足够可靠的记录可确认具体方式。',
  sorcery: '魔法可能来自商店、卷轴交付、NPC 或任务奖励；当前没有足够可靠的记录可确认具体方式。',
  incantation: '祷告可能来自商店、祷告书交付、NPC 或任务奖励；当前没有足够可靠的记录可确认具体方式。',
  'spirit-ash': '骨灰可能来自地图宝箱、敌人、NPC 或任务奖励；当前没有足够可靠的记录可确认具体方式。',
  'ash-of-war': '战灰可能来自地图拾取、敌人掉落或事件奖励；当前没有足够可靠的记录可确认具体方式。',
};

export function unresolvedAcquisitionHint(kind: CollectionKind): string {
  return UNRESOLVED_ACQUISITION_HINT[kind];
}

function entryName(kind: CollectionKind, id: number, fallback: string): string {
  const itemKind = kind === 'weapon' || kind === 'armor' || kind === 'talisman' ? kind : kind === 'ash-of-war' ? 'aow' : 'goods';
  return zhItemNameByKind(itemKind, id) ?? fallback;
}

function makeEntry(
  kind: CollectionKind,
  category: string,
  id: number,
  en: string,
  icon: number,
  owned: boolean,
  placementType: PlacementType,
): CollectionEntry {
  return {
    key: `${placementType}:${id}`,
    kind,
    category,
    id,
    name: entryName(kind, id, en),
    en,
    icon,
    owned,
    placementType,
    dlc: null,
    sources: [],
  };
}

/** 当前存档槽位的核心收藏目录。武器只保留基础 ID,不把亲和变体重复计数。 */
export function deriveCollections(
  profile: Pick<CharacterProfile, 'ownedWeaponBaseIds' | 'ownedArmorIds' | 'ownedTalismanIds' | 'ownedGoodsIds' | 'ownedAshOfWarIds'>,
): CollectionCatalog {
  const entries: CollectionEntry[] = [];

  for (const item of WEAPONS) {
    if (item.id % 10000 !== 0 || item.id === 110000 || /arrow|bolt|bow|crossbow/i.test(item.category) || item.name.startsWith('[ERROR]')) continue;
    entries.push(makeEntry('weapon', item.category, item.id, item.name, item.icon, profile.ownedWeaponBaseIds.has(item.id), 'weapon'));
  }
  for (const item of ARMOR) {
    if (item.name.startsWith('[ERROR]')) continue;
    entries.push(makeEntry('armor', item.category, item.id, item.name, item.icon, profile.ownedArmorIds.has(item.id), 'armor'));
  }
  for (const item of TALISMANS) {
    entries.push(makeEntry('talisman', '护符', item.id, item.name, item.icon, profile.ownedTalismanIds.has(item.id), 'talisman'));
  }
  for (const item of SPELLS) {
    const kind = item.category === 'Incantation' ? 'incantation' : 'sorcery';
    entries.push(makeEntry(kind, item.category, item.id, item.name, item.icon, profile.ownedGoodsIds.has(item.id), 'goods'));
  }
  for (const item of SPIRIT_ASHES) {
    entries.push(makeEntry('spirit-ash', 'Spirit Ash', item.id, item.name, item.icon, profile.ownedGoodsIds.has(item.id), 'goods'));
  }
  for (const item of ASHES_OF_WAR) {
    entries.push(makeEntry('ash-of-war', 'Ash of War', item.id, item.name, item.icon, profile.ownedAshOfWarIds.has(item.id), 'ash-of-war'));
  }

  const groups = COLLECTION_GROUPS.map(({ kind, label }) => {
    const groupEntries = entries.filter((entry) => entry.kind === kind);
    return { kind, label, entries: groupEntries, owned: groupEntries.filter((entry) => entry.owned).length, total: groupEntries.length };
  });
  return { groups, entries, owned: entries.filter((entry) => entry.owned).length, total: entries.length };
}

interface RegionAnchor {
  readonly master: MasterPixel['master'];
  readonly px: number;
  readonly py: number;
  readonly region: string;
}

const graceByEntityId = new Map(GRACES.map((grace) => [grace.bonfireEntityId, grace]));
const regionAnchors: readonly RegionAnchor[] = GRACE_PINS.flatMap((pin) => {
  const grace = graceByEntityId.get(pin.entityId);
  const projected = markerToMasterPixel(pin.mapId, pin.x, pin.z);
  if (!grace?.region || !projected) return [];
  return [{ ...projected, region: displayPlace(grace.region) }];
});

function nearestRegion(projected: MasterPixel): string | null {
  let best: RegionAnchor | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;
  for (const anchor of regionAnchors) {
    if (anchor.master !== projected.master) continue;
    const dx = anchor.px - projected.px;
    const dy = anchor.py - projected.py;
    const distance = dx * dx + dy * dy;
    if (distance < bestDistance) {
      best = anchor;
      bestDistance = distance;
    }
  }
  return best?.region ?? null;
}

function sourceLabel(source: string): string {
  return SOURCE_LABEL[source] ?? '世界来源';
}

function isDlcMap(mapId: string): boolean {
  return /^m2[0-9]_/.test(mapId);
}

function toCollectionSource(source: ItemPlacementSource): CollectionSource {
  return {
    mapId: source.mapId,
    source: source.source,
    sourceLabel: sourceLabel(source.source),
    chance: source.chance,
    region: nearestRegion(source.projected),
    projected: source.projected,
  };
}

/** 把懒加载的 placement 结果附加到目录,并据此确定本体/DLC筛选。 */
export function enrichCollectionLocations(
  catalog: CollectionCatalog,
  sourceMap: ReadonlyMap<string, readonly ItemPlacementSource[]>,
): CollectionCatalog {
  const entries = catalog.entries.map((entry) => {
    const raw = sourceMap.get(entry.key) ?? [];
    const seen = new Set<string>();
    const sources = raw
      .map(toCollectionSource)
      .filter((source) => {
        const key = `${source.source}|${source.mapId}|${Math.round(source.projected.px / 50)}|${Math.round(source.projected.py / 50)}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 8);
    const dlc = sources.length > 0 ? sources.some((source) => isDlcMap(source.mapId) || (source.region ? regionDefinition(source.region).key.startsWith('shadow-') : false)) : null;
    return { ...entry, sources, dlc };
  });
  const groups = COLLECTION_GROUPS.map(({ kind, label }) => {
    const groupEntries = entries.filter((entry) => entry.kind === kind);
    return { kind, label, entries: groupEntries, owned: groupEntries.filter((entry) => entry.owned).length, total: groupEntries.length };
  });
  return { groups, entries, owned: catalog.owned, total: catalog.total };
}

export function compareCollectionEntries(left: CollectionEntry, right: CollectionEntry): number {
  const leftRegion = left.sources[0]?.region ?? '其他区域';
  const rightRegion = right.sources[0]?.region ?? '其他区域';
  return compareRegions(leftRegion, rightRegion) || left.name.localeCompare(right.name, 'zh-CN') || left.id - right.id;
}
