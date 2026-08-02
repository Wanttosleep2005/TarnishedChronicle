import { ARMOR } from '../data/generated/armor.ts';
import { ASHES_OF_WAR } from '../data/generated/ashes-of-war.ts';
import { GRACES } from '../data/generated/graces.ts';
import { GRACE_PINS } from '../data/generated/grace-pins.ts';
import { SPELLS } from '../data/generated/spells.ts';
import { SPIRIT_ASHES } from '../data/generated/spirit-ashes.ts';
import { TALISMANS } from '../data/generated/talismans.ts';
import { WEAPONS } from '../data/generated/weapons.ts';
import { COLLECTION_ACQUISITION, type CollectionAcquisitionRecord } from '../data/zh/collection-acquisition.ts';
import { COLLECTION_ACQUISITION_ZH, type CollectionAcquisitionZhRecord } from '../data/zh/collection-acquisition-zh.ts';
import { ARMOR_SETS, ARMOR_SINGLE_IDS, type ArmorSetDef } from '../data/zh/armor-sets.ts';
import { WEAPON_ACQUISITION } from '../data/zh/weapon-acquisition.ts';
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
  readonly referenceLabel?: string;
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
  readonly acquisition?: string;
  readonly acquisitionRecord?: CollectionAcquisitionRecord;
  readonly acquisitionZhRecord?: CollectionAcquisitionZhRecord;
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

/** 防具分类占位行（头部/身体/腕部/腿部），不是真实装备，套装视图不展示。 */
const ARMOR_PLACEHOLDER_IDS = new Set([10000, 10100, 10200, 10300]);

/** DLC 防具的条目 ID 从 3000000 起。 */
export function isDlcArmorId(id: number): boolean {
  return id >= 3000000;
}

export type ArmorSetStatus = CollectionStatus | 'partial';
export type ArmorSetVariant = 'standard' | 'altered';

export interface ArmorSetView {
  readonly key: string;
  readonly name: string;
  readonly def: ArmorSetDef;
  readonly entries: readonly CollectionEntry[];
  readonly ownedCount: number;
  readonly status: ArmorSetStatus;
  readonly variant: ArmorSetVariant;
  readonly hasAlteredVariant: boolean;
}

export interface ArmorSetVariantGroup {
  readonly key: string;
  readonly def: ArmorSetDef;
  readonly standard: ArmorSetView;
  readonly altered?: ArmorSetView;
}

export function armorSetStatus(entries: readonly CollectionEntry[], ownedCount: number, locationsReady: boolean): ArmorSetStatus {
  if (entries.length === 0) return 'missing';
  if (ownedCount === entries.length) return 'owned';
  if (entries.some((entry) => entryStatus(entry, locationsReady) === 'unresolved')) return 'unresolved';
  if (ownedCount > 0) return 'partial';
  return 'missing';
}

function armorSetView(
  def: ArmorSetDef,
  entries: readonly CollectionEntry[],
  variant: ArmorSetVariant,
  hasAlteredVariant: boolean,
  locationsReady: boolean,
): ArmorSetView {
  const ownedCount = entries.filter((entry) => entry.owned).length;
  return {
    key: `${def.name}:${variant}`,
    name: variant === 'altered' ? `${def.name}（轻装）` : def.name,
    def,
    entries,
    ownedCount,
    status: armorSetStatus(entries, ownedCount, locationsReady),
    variant,
    hasAlteredVariant,
  };
}

/** 将同一实际套装的原装与轻装视图收拢为一张可切换的展示卡。 */
export function groupArmorSetVariants(views: readonly ArmorSetView[]): readonly ArmorSetVariantGroup[] {
  const byName = new Map<string, { def: ArmorSetDef; standard?: ArmorSetView; altered?: ArmorSetView }>();
  for (const view of views) {
    const group = byName.get(view.def.name) ?? { def: view.def };
    if (view.variant === 'standard') group.standard = view;
    else group.altered = view;
    byName.set(view.def.name, group);
  }
  const groups: ArmorSetVariantGroup[] = [];
  for (const group of byName.values()) {
    if (!group.standard) continue;
    groups.push({
      key: group.def.name,
      def: group.def,
      standard: group.standard,
      ...(group.altered ? { altered: group.altered } : {}),
    });
  }
  return groups;
}

/** 把防具目录按套装分组，未归入任何套装的散件作为单件返回。 */
export function groupArmorSets(
  entries: readonly CollectionEntry[],
  locationsReady: boolean,
): { sets: readonly ArmorSetView[]; singles: readonly CollectionEntry[] } {
  const byId = new Map<number, CollectionEntry>();
  for (const entry of entries) {
    if (entry.kind !== 'armor' || ARMOR_PLACEHOLDER_IDS.has(entry.id)) continue;
    byId.set(entry.id, entry);
  }
  const sets: ArmorSetView[] = [];
  for (const def of ARMOR_SETS) {
    const setEntries = def.itemIds
      .map((id) => byId.get(id))
      .filter((entry): entry is CollectionEntry => entry !== undefined);
    if (setEntries.length === 0) continue;
    const alteredEntries = setEntries.filter((entry) => entry.en.endsWith('(Altered)'));
    const hasAlteredVariant = alteredEntries.length > 0;
    const standardEntries = setEntries.filter((entry) => !entry.en.endsWith('(Altered)'));
    sets.push(armorSetView(def, standardEntries, 'standard', hasAlteredVariant, locationsReady));
    if (hasAlteredVariant) {
      const alteredSlots = new Set(alteredEntries.map((entry) => entry.category));
      const lightEntries = setEntries.filter((entry) => entry.en.endsWith('(Altered)') || !alteredSlots.has(entry.category));
      sets.push(armorSetView(def, lightEntries, 'altered', true, locationsReady));
    }
  }
  const singles = ARMOR_SINGLE_IDS
    .map((id) => byId.get(id))
    .filter((entry): entry is CollectionEntry => entry !== undefined);
  return { sets, singles };
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
  guide: '获取方式定位',
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
  acquisition?: string,
  acquisitionRecord?: CollectionAcquisitionRecord,
  acquisitionZhRecord?: CollectionAcquisitionZhRecord,
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
    acquisition,
    acquisitionRecord,
    acquisitionZhRecord,
  };
}

/** 资料页正文可能带有 wiki 链接或 HTML 标签，收藏卡片只显示纯文本。 */
export function normalizeAcquisitionText(text: string): string {
  return text
    .replace(/<nowiki>([\s\S]*?)<\/nowiki>/gi, '$1')
    .replace(/\[\[([^|\]]+)\|([\s\S]*?)\]\]/g, '$2')
    .replace(/\[\[([^\]]+)\]\]/g, '$1')
    .replace(/<!--[\s\S]*?(?:-->|$)/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\{\{[\s\S]*?\}\}/g, '')
    .replace(/(?:^|；)[-!]\s*/g, '；')
    .replace(/\|[-!]\|?/g, '')
    .replace(/\|[A-Za-z]+=/g, '')
    .replace(/(?:^|；)\s*(?:Retail|CNT)\s*=\s*/gi, '；')
    .replace(/\|\}/g, '')
    .replace(/\s*\|\|\s*/g, '：')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/\bBOSS\b/gi, '首领')
    .replace(/\bNPC\b/gi, '角色')
    .replace(/([。！？.!?])；+/g, '$1')
    .replace(/；{2,}/g, '；')
    .replace(/；([。！？.!?])/g, '$1')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

function acquisitionRecordFor(key: string): CollectionAcquisitionRecord | undefined {
  const record = COLLECTION_ACQUISITION[key];
  if (!record) return undefined;
  return {
    ...record,
    summary: normalizeAcquisitionText(record.summary),
    details: normalizeAcquisitionText(record.details),
  };
}

function acquisitionZhRecordFor(key: string): CollectionAcquisitionZhRecord | undefined {
  const record = COLLECTION_ACQUISITION_ZH[key];
  if (!record) return undefined;
  return {
    ...record,
    summary: normalizeAcquisitionText(record.summary),
    details: normalizeAcquisitionText(record.details),
  };
}

/** 当前存档槽位的核心收藏目录。武器只保留基础 ID,不把亲和变体重复计数。 */
export function deriveCollections(
  profile: Pick<CharacterProfile, 'ownedWeaponBaseIds' | 'ownedArmorIds' | 'ownedTalismanIds' | 'ownedGoodsIds' | 'ownedAshOfWarIds'>,
): CollectionCatalog {
  const entries: CollectionEntry[] = [];

  for (const item of WEAPONS) {
    if (item.id % 10000 !== 0 || item.id === 110000 || /arrow|bolt|bow|crossbow/i.test(item.category) || item.name.startsWith('[ERROR]')) continue;
    const baseWeaponId = item.id - (item.id % 10000);
    const acquisition = WEAPON_ACQUISITION[item.id] ?? (baseWeaponId !== item.id ? WEAPON_ACQUISITION[baseWeaponId] : undefined);
    entries.push(makeEntry('weapon', item.category, item.id, item.name, item.icon, profile.ownedWeaponBaseIds.has(item.id), 'weapon', acquisition));
  }
  for (const item of ARMOR) {
    if (item.name.startsWith('[ERROR]')) continue;
    entries.push(makeEntry(
      'armor',
      item.category,
      item.id,
      item.name,
      item.icon,
      profile.ownedArmorIds.has(item.id),
      'armor',
      undefined,
      acquisitionRecordFor(`armor:${item.id}`),
      acquisitionZhRecordFor(`armor:${item.id}`),
    ));
  }
  for (const item of TALISMANS) {
    if (item.name.startsWith('[ERROR]')) continue;
    entries.push(makeEntry(
      'talisman',
      '护符',
      item.id,
      item.name,
      item.icon,
      profile.ownedTalismanIds.has(item.id),
      'talisman',
      undefined,
      acquisitionRecordFor(`talisman:${item.id}`),
      acquisitionZhRecordFor(`talisman:${item.id}`),
    ));
  }
  for (const item of SPELLS) {
    if (item.name.startsWith('[ERROR]')) continue;
    const kind = item.category === 'Incantation' ? 'incantation' : 'sorcery';
    entries.push(makeEntry(
      kind,
      item.category,
      item.id,
      item.name,
      item.icon,
      profile.ownedGoodsIds.has(item.id),
      'goods',
      undefined,
      acquisitionRecordFor(`goods:${item.id}`),
      acquisitionZhRecordFor(`goods:${item.id}`),
    ));
  }
  for (const item of SPIRIT_ASHES) {
    if (item.name.startsWith('[ERROR]')) continue;
    entries.push(makeEntry(
      'spirit-ash',
      'Spirit Ash',
      item.id,
      item.name,
      item.icon,
      profile.ownedGoodsIds.has(item.id),
      'goods',
      undefined,
      acquisitionRecordFor(`goods:${item.id}`),
      acquisitionZhRecordFor(`goods:${item.id}`),
    ));
  }
  for (const item of ASHES_OF_WAR) {
    if (item.name.startsWith('[ERROR]')) continue;
    entries.push(makeEntry(
      'ash-of-war',
      'Ash of War',
      item.id,
      item.name,
      item.icon,
      profile.ownedAshOfWarIds.has(item.id),
      'ash-of-war',
      undefined,
      acquisitionRecordFor(`ash-of-war:${item.id}`),
      acquisitionZhRecordFor(`ash-of-war:${item.id}`),
    ));
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
    referenceLabel: source.label,
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

/** 收藏状态：已拥有 > 缺失（有来源或获取记录）> 无法确认（无任何可靠记录或坐标）。 */
export function entryStatus(entry: CollectionEntry, locationsReady: boolean): CollectionStatus {
  if (entry.owned) return 'owned';
  if (
    locationsReady
    && entry.sources.length === 0
    && !entry.acquisition
    && !entry.acquisitionRecord?.verified
    && !entry.acquisitionZhRecord?.verified
  ) return 'unresolved';
  return 'missing';
}
