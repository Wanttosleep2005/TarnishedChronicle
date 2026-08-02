/**
 * 存档 → 展示模型的推导层:Boss/赐福进度、装备还原、物品统计、角色画像。
 * ID 解码规则与 compass 的 equipmentDbView / inventoryDbView 一致。
 */
import { ARMOR, type Armor } from '../data/generated/armor.ts';
import { ASHES_OF_WAR, type AshOfWar } from '../data/generated/ashes-of-war.ts';
import { BOSSES } from '../data/generated/bosses.ts';
import { FIXED_BOSSES, type FixedBoss } from './boss-data.ts';
import { GOODS, type Good } from '../data/generated/goods.ts';
import { GRACES, type Grace } from '../data/generated/graces.ts';
import { REGIONS } from '../data/generated/regions.ts';
import { SPELLS, type Spell } from '../data/generated/spells.ts';
import { SPIRIT_ASHES } from '../data/generated/spirit-ashes.ts';
import { TALISMANS, type Talisman } from '../data/generated/talismans.ts';
import { WEAPONS, type Weapon } from '../data/generated/weapons.ts';
import { BOSS_FLAG_ZH, displayBoss, displayPlace, zhItemName, zhItemNameByKind, zhItemTextByKind } from '../data/zh/translations.ts';
import type { LeanSlot } from '../vendor/save-parser/index.ts';
import { isFlagSet } from './flags.ts';

// ———— 静态索引(模块级构建一次) ————
export const weaponById: ReadonlyMap<number, Weapon> = new Map(WEAPONS.map((w) => [w.id, w]));
export const armorById: ReadonlyMap<number, Armor> = new Map(ARMOR.map((a) => [a.id, a]));
export const talismanById: ReadonlyMap<number, Talisman> = new Map(TALISMANS.map((t) => [t.id, t]));
export const goodById: ReadonlyMap<number, Good> = new Map(GOODS.map((g) => [g.id, g]));
export const spellById: ReadonlyMap<number, Spell> = new Map(SPELLS.map((s) => [s.id, s]));
export const aowById: ReadonlyMap<number, AshOfWar> = new Map(ASHES_OF_WAR.map((a) => [a.id, a]));
const spiritAshIds = new Set(SPIRIT_ASHES.map((s) => s.id));
const graceByEntityId: ReadonlyMap<number, Grace> = new Map(GRACES.map((grace) => [grace.bonfireEntityId, grace]));
const VISIBLE_REGION_IDS = new Set(REGIONS.map((region) => region.id));

/** 存档记录的是运行时赐福实体 ID，目录使用地图实体 ID，两者通常相差 1000。 */
export function graceForEntityId(entityId: number): Grace | undefined {
  return graceByEntityId.get(entityId) ?? graceByEntityId.get(entityId - 1000) ?? graceByEntityId.get(entityId + 1000);
}

// 七枚大卢恩(GOODS 英文名 → id,持有判定走背包数据,不猜旗标)
const GREAT_RUNE_EN = [
  "Godrick's Great Rune",
  "Radahn's Great Rune",
  "Morgott's Great Rune",
  "Rykard's Great Rune",
  "Mohg's Great Rune",
  "Malenia's Great Rune",
  'Great Rune of the Unborn',
];
const goodIdByEnName: ReadonlyMap<string, number> = new Map(GOODS.map((g) => [g.name, g.id]));

// gaitem.item_id 的类别偏移(compass InventoryItemTypeToOffset)
const GA_WEAPON = 0x0;
const GA_ARMOR = 0x10000000;
const GA_ACCESSORY = 0x20000000;
const GA_ITEM = 0x40000000;
const GA_AOW = 0x80000000;
// 背包 ga_item_handle 的类别高位(compass InventoryGaItemTypeToOffset)
const H_WEAPON = 0x80000000;
const H_ARMOR = 0x90000000;
const H_ACCESSORY = 0xa0000000;
const H_ITEM = 0xb0000000;
const H_AOW = 0xc0000000;

export type ItemKind = 'weapon' | 'armor' | 'talisman' | 'goods' | 'aow' | 'empty';

const UNARMED_WEAPON_ID = 110000;
const SEAMLESS_COOP_INTERNAL_GOODS_IDS = new Set([
  166,
  8_380_001,
  8_380_002,
  8_380_003,
  8_380_004,
  8_380_005,
  8_380_006,
  8_380_010,
  8_380_012,
]);

const AFFINITY_ZH: Record<number, string> = {
  0: '',
  100: '重厚',
  200: '锋利',
  300: '上质',
  400: '火',
  500: '炎术',
  600: '雷电',
  700: '神圣',
  800: '魔力',
  900: '冷气',
  1000: '毒',
  1100: '出血',
  1200: '神秘',
};

export interface ResolvedItem {
  kind: ItemKind;
  paramId: number;
  upgrade: number;
  display: string;
  en: string | null;
  icon: number | null;
  summary: string | null;
  description: readonly string[];
}

const EMPTY_ITEM: ResolvedItem = { kind: 'empty', paramId: 0, upgrade: 0, display: '—', en: null, icon: null, summary: null, description: [] };

type ItemTextSource = Pick<ResolvedItem, 'summary' | 'description'>;

function resolvedItemText(
  kind: 'weapon' | 'armor' | 'talisman' | 'goods' | 'aow' | 'spell',
  paramId: number,
  source: ItemTextSource | undefined,
): ItemTextSource {
  const localized = zhItemTextByKind(kind, paramId);
  return {
    summary: localized?.summary || source?.summary || null,
    description: localized?.description.length ? localized.description : source?.description ?? [],
  };
}

function kindOfGaItemId(itemId: number): ItemKind {
  const cat = (itemId & 0xf0000000) >>> 0;
  if (cat === GA_AOW) return 'aow';
  if (cat === GA_ITEM) return 'goods';
  if (cat === GA_ACCESSORY) return 'talisman';
  if (cat === GA_ARMOR) return 'armor';
  if (itemId === 0 || itemId === -1 || itemId === 0xffffffff) return 'empty';
  return 'weapon';
}

/** 武器 param id(含亲和,不含强化)→ 展示信息。 */
function weaponDisplay(idNoUpgrade: number, upgrade: number): ResolvedItem {
  const affinity = idNoUpgrade % 10000;
  const pureBase = idNoUpgrade - affinity; // 去掉亲和与强化的裸武器 id
  const weapon = weaponById.get(idNoUpgrade) ?? weaponById.get(pureBase);
  const en = weapon?.name ?? null;
  const zh = zhItemNameByKind('weapon', pureBase);
  const affinityZh = AFFINITY_ZH[affinity] ?? '';
  const base = zh ? `${affinityZh ? `${affinityZh}·` : ''}${zh}` : (en ?? `未知武器 ${idNoUpgrade}`);
  return {
    kind: 'weapon',
    paramId: idNoUpgrade,
    upgrade,
    display: upgrade > 0 ? `${base} +${upgrade}` : base,
    en,
    icon: weapon?.icon ?? null,
    ...resolvedItemText('weapon', idNoUpgrade, weapon),
  };
}

export function resolveGaItemId(itemId: number): ResolvedItem {
  const kind = kindOfGaItemId(itemId);
  switch (kind) {
    case 'empty':
      return EMPTY_ITEM;
    case 'weapon': {
      const upgrade = itemId % 100;
      const idNoUpgrade = itemId - upgrade;
      return idNoUpgrade === UNARMED_WEAPON_ID ? EMPTY_ITEM : weaponDisplay(idNoUpgrade, upgrade);
    }
    case 'armor': {
      const id = (itemId ^ GA_ARMOR) >>> 0;
      const armor = armorById.get(id);
      const en = armor?.name ?? null;
      return { kind, paramId: id, upgrade: 0, display: zhItemNameByKind('armor', id) ?? en ?? `未知防具 ${id}`, en, icon: armor?.icon ?? null, ...resolvedItemText('armor', id, armor) };
    }
    case 'talisman': {
      const id = (itemId ^ GA_ACCESSORY) >>> 0;
      const talisman = talismanById.get(id);
      const en = talisman?.name ?? null;
      return { kind, paramId: id, upgrade: 0, display: zhItemNameByKind('talisman', id) ?? en ?? `未知护符 ${id}`, en, icon: talisman?.icon ?? null, ...resolvedItemText('talisman', id, talisman) };
    }
    case 'goods': {
      const id = (itemId ^ GA_ITEM) >>> 0;
      if (SEAMLESS_COOP_INTERNAL_GOODS_IDS.has(id)) return EMPTY_ITEM;
      const good = goodById.get(id);
      const en = good?.name ?? null;
      return { kind, paramId: id, upgrade: 0, display: zhItemNameByKind('goods', id) ?? en ?? `未知道具 ${id}`, en, icon: good?.icon ?? null, ...resolvedItemText('goods', id, good) };
    }
    case 'aow': {
      const id = (itemId ^ GA_AOW) >>> 0;
      const aow = aowById.get(id);
      const en = aow?.name ?? null;
      const zh = zhItemNameByKind('aow', id);
      return { kind, paramId: id, upgrade: 0, display: zh ?? en ?? `未知战灰 ${id}`, en, icon: aow?.icon ?? null, ...resolvedItemText('aow', id, aow) };
    }
  }
}

// ———— 装备还原 ————
export interface EquipSlotEntry extends ResolvedItem {
  slotLabel: string;
  ashOfWar: string | null;
  ashOfWarId: number | null;
  ashOfWarItem: ResolvedItem | null;
}

export interface EquipmentView {
  armaments: EquipSlotEntry[];
  armor: EquipSlotEntry[];
  talismans: EquipSlotEntry[];
  talismanSlots: number;
  physick: ResolvedItem[];
  spells: ResolvedItem[];
  quickItems: { item: ResolvedItem; count: number | null }[];
  pouch: ResolvedItem[];
  arrows: EquipSlotEntry[];
}

export function deriveEquipment(slot: LeanSlot): EquipmentView {
  const gaByHandle = new Map(slot.ga_items.map((g) => [g.gaitem_handle, g]));

  const resolveHandle = (handle: number): ResolvedItem => {
    if (!handle || handle === -1 || handle === 0xffffffff) return EMPTY_ITEM;
    const cat = (handle & 0xf0000000) >>> 0;
    // 护符/道具的 handle 直接编码 param id
    if (cat === H_ACCESSORY) return resolveGaItemId((((handle ^ H_ACCESSORY) >>> 0) | GA_ACCESSORY) >>> 0);
    if (cat === H_ITEM) return resolveGaItemId((((handle ^ H_ITEM) >>> 0) | GA_ITEM) >>> 0);
    const ga = gaByHandle.get(handle);
    if (!ga || !ga.item_id) return EMPTY_ITEM;
    return resolveGaItemId(ga.item_id);
  };

  const ashIdFor = (handle: number): number | null => {
    const gemHandle = gaByHandle.get(handle)?.gem_gaitem_handle ?? 0;
    if (!gemHandle) return null;
    const gemItemId = gaByHandle.get(gemHandle)?.item_id ?? 0;
    if (!gemItemId) return null;
    return (gemItemId ^ GA_AOW) >>> 0;
  };

  const armamentEntry = (handle: number, slotLabel: string): EquipSlotEntry => {
    const ashOfWarId = handle ? ashIdFor(handle) : null;
    const ashOfWarItem = ashOfWarId === null ? null : resolveGaItemId((ashOfWarId | GA_AOW) >>> 0);
    return {
      ...resolveHandle(handle),
      slotLabel,
      ashOfWar: ashOfWarItem?.display ?? null,
      ashOfWarId,
      ashOfWarItem,
    };
  };

  const armaments: EquipSlotEntry[] = [
    ...slot.chr_asm2.right_hand_armaments.map((h, i) => armamentEntry(h, `右手 ${i + 1}`)),
    ...slot.chr_asm2.left_hand_armaments.map((h, i) => armamentEntry(h, `左手 ${i + 1}`)),
  ];

  const armorEntries: EquipSlotEntry[] = (
    [
      ['头部', slot.chr_asm2.head],
      ['身体', slot.chr_asm2.chest],
      ['手部', slot.chr_asm2.arms],
      ['腿部', slot.chr_asm2.legs],
    ] as const
  ).map(([slotLabel, handle]) => ({ ...resolveHandle(handle), slotLabel, ashOfWar: null, ashOfWarId: null, ashOfWarItem: null }));

  const talismans: EquipSlotEntry[] = slot.chr_asm2.talismans.map((handle, i) => ({
    ...resolveHandle(handle),
    slotLabel: `护符 ${i + 1}`,
    ashOfWar: null,
    ashOfWarId: null,
    ashOfWarItem: null,
  }));

  const arrows: EquipSlotEntry[] = [
    ...slot.chr_asm2.arrows.map((h, i) => armamentEntry(h, `箭矢 ${i + 1}`)),
    ...slot.chr_asm2.bolts.map((h, i) => armamentEntry(h, `弩箭 ${i + 1}`)),
  ];

  const quantityByHandle = new Map<number, number>();
  for (const item of slot.equip_inventory_data.common_items) {
    quantityByHandle.set(item.ga_item_handle, item.quantity);
  }

  const quickItems = slot.equip_item_data.quick_slot_items.map((entry) => ({
    item: resolveHandle(entry.item_id),
    count: quantityByHandle.get(entry.item_id) ?? null,
  }));
  const pouch = slot.equip_item_data.pouch_items.map((entry) => resolveHandle(entry.item_id));

  // 空法术槽是 0xFFFFFFFF(读出为 4294967295)而非 0
  const spells = slot.equipped_spells
    .filter((id) => id > 0 && id < 0xfffffffe)
    .map((id) => {
      const spell = spellById.get(id);
      const good = goodById.get(id);
      const en = spell?.name ?? good?.name ?? null;
      return {
        kind: 'goods' as const,
        paramId: id,
        upgrade: 0,
        display: zhItemNameByKind('spell', id) ?? en ?? `未知法术 ${id}`,
        en,
        icon: spell?.icon ?? good?.icon ?? null,
        ...resolvedItemText('spell', id, spell ?? good),
      };
    });

  const physick = [...slot.equipped_physics]
    .filter((id) => id > 0)
    .map((id) => resolveGaItemId((id | GA_ITEM) >>> 0));

  // 护符袋:钥匙物品 10040 的数量决定解锁槽位
  let talismanSlots = 1 + slot.player_game_data.additional_talisman_slot_count;
  for (const keyItem of slot.equip_inventory_data.key_items) {
    if (((keyItem.ga_item_handle ^ H_ITEM) >>> 0) === 10040) {
      talismanSlots = Math.min(1 + keyItem.quantity, 4);
    }
  }

  return { armaments, armor: armorEntries, talismans, talismanSlots, physick, spells, quickItems, pouch, arrows };
}

// ———— 背包清单 ————
export interface InventoryEntry extends ResolvedItem {
  quantity: number;
  source: '随身' | '仓库';
}

export function deriveInventory(slot: LeanSlot): InventoryEntry[] {
  const gaByHandle = new Map(slot.ga_items.map((g) => [g.gaitem_handle, g]));
  const rows: InventoryEntry[] = [];

  const push = (handle: number, quantity: number, source: '随身' | '仓库') => {
    if (!handle || handle === -1) return;
    const cat = (handle & 0xf0000000) >>> 0;
    let resolved: ResolvedItem | null = null;
    if (cat === H_ACCESSORY) resolved = resolveGaItemId((((handle ^ H_ACCESSORY) >>> 0) | GA_ACCESSORY) >>> 0);
    else if (cat === H_ITEM) resolved = resolveGaItemId((((handle ^ H_ITEM) >>> 0) | GA_ITEM) >>> 0);
    else if (cat === H_WEAPON || cat === H_ARMOR || cat === H_AOW) {
      const ga = gaByHandle.get(handle);
      if (ga?.item_id) resolved = resolveGaItemId(ga.item_id);
    }
    if (resolved && resolved.kind !== 'empty') rows.push({ ...resolved, quantity, source });
  };

  for (const item of slot.equip_inventory_data.common_items) push(item.ga_item_handle, item.quantity, '随身');
  for (const item of slot.equip_inventory_data.key_items) push(item.ga_item_handle, item.quantity, '随身');
  for (const item of slot.storage_inventory_data.common_items) push(item.ga_item_handle, item.quantity, '仓库');
  for (const item of slot.storage_inventory_data.key_items) push(item.ga_item_handle, item.quantity, '仓库');

  return rows;
}

// ———— Boss / 赐福 / 地区 ————
export interface BossRow {
  boss: FixedBoss;
  defeated: boolean;
  display: string;
  areaZh: string;
}

export interface GraceRow {
  grace: Grace;
  lit: boolean;
  display: string;
  regionZh: string;
}

export const MAP_AREA_ZH: Record<string, string> = {
  m10: '史东薇尔城',
  m11: '王城罗德尔',
  m12: '地底世界',
  m13: '崩毁的法姆·亚兹拉',
  m14: '魔法学院雷亚卢卡利亚',
  m15: '米凯拉的圣树',
  m16: '火山官邸',
  m18: '漂流墓地',
  m19: '艾尔登王座',
  m20: '“塔之镇”贝瑞特 / 艾尼尔·伊利姆',
  m21: '幽影城',
  m22: '石棺大洞',
  m25: '指头遗迹',
  m28: '谷底森林 / 米德拉府邸',
  m30: '地下墓地',
  m31: '洞窟',
  m32: '坑道',
  m34: '封印监牢',
  m35: '弃置恶兆的地底',
  m39: '龙之圣殿',
  m40: '神授塔',
  m41: '神授塔',
  m42: '解放蛆之教堂',
  m43: '英雄墓地',
  m45: '边境洞窟',
  m60: '交界地(大地图)',
  m61: '幽影之地(大地图)',
};

export function bossArea(boss: { mapId: string }): string {
  const prefix = boss.mapId.slice(0, 3);
  return MAP_AREA_ZH[prefix] ?? '其他地点';
}

/** 击杀旗标 → 中文展示名(时间线战报等复用)。 */
export const bossDisplayByFlagId: ReadonlyMap<number, string> = new Map(
  FIXED_BOSSES.map((boss) => [
    boss.defeatFlagId,
    boss.zhOverride ??
      BOSS_FLAG_ZH[boss.defeatFlagId] ??
      (boss.name ? displayBoss(boss.name) : '隐藏强敌'),
  ]),
);

export function deriveBosses(slot: LeanSlot): BossRow[] {
  const flags = slot.event_flags.flags;
  return FIXED_BOSSES.map((boss) => ({
    boss,
    defeated: isFlagSet(flags, boss.defeatFlagId),
    display: bossDisplayByFlagId.get(boss.defeatFlagId) ?? '隐藏强敌',
    areaZh: bossArea(boss),
  }));
}

export function deriveGraces(slot: LeanSlot): GraceRow[] {
  const flags = slot.event_flags.flags;
  return GRACES.map((grace) => ({
    grace,
    lit: isFlagSet(flags, grace.flagId),
    display: displayPlace(grace.name),
    regionZh: grace.region ? displayPlace(grace.region) : '未知地区',
  }));
}

// ———— 角色画像(徽章 / 故事的输入) ————
export interface CharacterProfile {
  name: string;
  level: number;
  archetype: number;
  stats: { vig: number; mnd: number; end: number; str: number; dex: number; int: number; fai: number; arc: number };
  hoursPlayed: number;
  deaths: number;
  runesMemory: number;
  runesHeld: number;
  maxHp: number;
  flasks: { crimson: number; cerulean: number };
  greatRuneOn: boolean;
  dlcEntered: boolean;
  bossRows: BossRow[];
  bossesDefeated: number;
  bossTotal: number;
  graceRows: GraceRow[];
  gracesLit: number;
  graceTotal: number;
  /** 存档原始地区计数（含联机匹配/隐藏分区），用于趣味徽章。 */
  regionsUnlocked: number;
  /** 仅统计 REGIONS 中可见地图区块的数量，用于角色总览进度条。 */
  mapRegionsUnlocked: number;
  equipment: EquipmentView;
  inventory: InventoryEntry[];
  ownedWeaponBaseIds: Set<number>;
  ownedTalismanIds: Set<number>;
  ownedGoodsIds: Set<number>;
  ownedArmorIds: Set<number>;
  ownedAshOfWarIds: Set<number>;
  spellsKnown: number;
  spiritAshesOwned: number;
  gesturesUnlocked: number;
  bloodstainRunes: number;
  horseDead: boolean;
  lastRestedGraceEntityId: number;
  greatRunes: { zh: string; owned: boolean }[];
  /** 持有武器变体(含亲和、去强化的 id + 已强化到的最高等级),洗点模拟用。 */
  weaponVariants: { id: number; upgrade: number }[];
}

export function deriveProfile(slot: LeanSlot): CharacterProfile {
  const p = slot.player_game_data;
  const bossRows = deriveBosses(slot);
  const graceRows = deriveGraces(slot);
  const equipment = deriveEquipment(slot);
  const inventory = deriveInventory(slot);

  const ownedWeaponBaseIds = new Set<number>();
  const ownedTalismanIds = new Set<number>();
  const ownedGoodsIds = new Set<number>();
  const ownedArmorIds = new Set<number>();
  const ownedAshOfWarIds = new Set<number>();
  const variantUpgrade = new Map<number, number>();
  for (const row of inventory) {
    if (row.kind === 'weapon') {
      const baseId = row.paramId - (row.paramId % 10000);
      ownedWeaponBaseIds.add(baseId);
      variantUpgrade.set(row.paramId, Math.max(variantUpgrade.get(row.paramId) ?? 0, row.upgrade));
    }
    if (row.kind === 'armor') ownedArmorIds.add(row.paramId);
    if (row.kind === 'talisman') ownedTalismanIds.add(row.paramId);
    if (row.kind === 'goods') ownedGoodsIds.add(row.paramId);
    if (row.kind === 'aow') ownedAshOfWarIds.add(row.paramId);
  }
  // 某些版本的存档不会把当前装备槽重复写入行囊，装备本身仍应算作已拥有。
  for (const item of [...equipment.armaments, ...equipment.armor, ...equipment.talismans]) {
    if (item.kind === 'weapon') {
      const baseId = item.paramId - (item.paramId % 10000);
      ownedWeaponBaseIds.add(baseId);
      variantUpgrade.set(item.paramId, Math.max(variantUpgrade.get(item.paramId) ?? 0, item.upgrade));
    }
    if (item.kind === 'armor') ownedArmorIds.add(item.paramId);
    if (item.kind === 'talisman') ownedTalismanIds.add(item.paramId);
    if (item.ashOfWarId !== null) ownedAshOfWarIds.add(item.ashOfWarId);
  }
  const weaponVariants = [...variantUpgrade.entries()].map(([id, upgrade]) => ({ id, upgrade }));

  let spellsKnown = 0;
  let spiritAshesOwned = 0;
  for (const id of ownedGoodsIds) {
    if (spellById.has(id)) spellsKnown += 1;
    if (spiritAshIds.has(id)) spiritAshesOwned += 1;
  }

  const gesturesUnlocked = slot.gestures.filter((g) => g > 0 && g !== 0xfffffffe).length;

  const greatRunes = GREAT_RUNE_EN.map((en) => {
    const id = goodIdByEnName.get(en);
    return {
      zh: (id !== undefined ? zhItemNameByKind('goods', id) : null) ?? en,
      owned: id !== undefined && ownedGoodsIds.has(id),
    };
  });

  return {
    name: p.character_name || '无名褪色者',
    level: p.level,
    archetype: p.arche_type,
    stats: {
      vig: p.vigor,
      mnd: p.mind,
      end: p.endurance,
      str: p.strength,
      dex: p.dexterity,
      int: p.intelligence,
      fai: p.faith,
      arc: p.arcane,
    },
    hoursPlayed: slot.seconds_played / 3600,
    deaths: slot.deaths,
    runesMemory: p.soulsmemory,
    runesHeld: p.souls,
    maxHp: p.base_max_hp,
    flasks: { crimson: p.max_crimson_flask_count, cerulean: p.max_cerulean_flask_count },
    greatRuneOn: p.great_rune_on,
    dlcEntered: slot.dlc.shadow_of_erdtree,
    bossRows,
    bossesDefeated: bossRows.filter((b) => b.defeated).length,
    bossTotal: bossRows.length,
    graceRows,
    gracesLit: graceRows.filter((g) => g.lit).length,
    graceTotal: graceRows.length,
    regionsUnlocked: slot.regions.unlocked_regions_count,
    mapRegionsUnlocked: slot.regions.unlocked_regions.filter((id) => VISIBLE_REGION_IDS.has(id)).length,
    equipment,
    inventory,
    ownedWeaponBaseIds,
    ownedTalismanIds,
    ownedGoodsIds,
    ownedArmorIds,
    ownedAshOfWarIds,
    spellsKnown,
    spiritAshesOwned,
    gesturesUnlocked,
    bloodstainRunes: slot.blood_stain.runes,
    horseDead: slot.horse.state === 3,
    lastRestedGraceEntityId: slot.last_rested_grace,
    greatRunes,
    weaponVariants,
  };
}
