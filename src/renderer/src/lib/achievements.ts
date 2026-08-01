/**
 * 存档推演成就:把 Steam 全成就里"能从存档判定"的部分推导出来
 * (Boss 讨伐成就按击杀旗标;四个"传说收集"成就按持有物品集合)。
 * 结局类成就无法从旗标可靠判定,留给 Steam API 数据。
 */
import { SPELLS } from '../data/generated/spells.ts';
import { SPIRIT_ASHES } from '../data/generated/spirit-ashes.ts';
import { TALISMANS } from '../data/generated/talismans.ts';
import { WEAPONS } from '../data/generated/weapons.ts';
import { zhItemNameByKind, type ItemNameKind } from '../data/zh/translations.ts';
import type { CharacterProfile } from './derive.ts';

export interface BossAchievement {
  zh: string;
  en: string;
  done: boolean;
  available: boolean;
}

export interface MissingItem {
  label: string;
  id: number | null;
  /** placements 数据里的物品类型(定位用)。 */
  placementType: 'weapon' | 'goods' | 'talisman';
}

export interface CollectionAchievement {
  zh: string;
  have: number;
  total: number;
  done: boolean;
  missing: MissingItem[];
}

export interface DerivedAchievements {
  bossKills: BossAchievement[];
  collections: CollectionAchievement[];
}

/** Steam Boss 讨伐成就 ↔ compass Boss 名(旗标经由 BOSSES 数据匹配)。 */
const BOSS_ACHIEVEMENTS: { zh: string; names: string[]; flagIds?: number[] }[] = [
  { zh: '“恶兆妖鬼”玛尔基特', names: ['Margit, the Fell Omen'] },
  { zh: '“接肢”葛瑞克', names: ['Godrick the Grafted'] },
  { zh: '“拉达冈的红狼”', names: ['Red Wolf of Radagon'] },
  { zh: '“满月女王”蕾娜菈', names: ['Rennala, Queen of the Full Moon'] },
  { zh: '“碎星”拉塔恩', names: ['Starscourge Radahn'], flagIds: [1252380800] },
  { zh: '狮子混种', names: ['Leonine Misbegotten'] },
  { zh: '“王室骑士”萝蕾塔', names: ['Loretta, Knight of the Haligtree', 'Royal Knight Loretta'] },
  { zh: '神皮使徒', names: ['Godskin Apostle'] },
  { zh: '“熔岩土龙”玛卡尔', names: ['Magma Wyrm Makar'] },
  { zh: '仿身泪滴', names: ['Mimic Tear'] },
  { zh: '祖灵', names: ['Ancestor Spirit'] },
  { zh: '诺克史黛拉的龙人士兵', names: ['Dragonkin Soldier of Nokstella'] },
  { zh: '英勇石像鬼', names: ['Valiant Gargoyle', 'Valiant Gargoyles'] },
  { zh: '祖灵之王', names: ['Regal Ancestor Spirit'] },
  { zh: '菲雅的英雄', names: ["Fia's Champion", "Fia's Champions"] },
  { zh: '“死龙”弗尔桑克斯', names: ['Lichdragon Fortissax'] },
  { zh: '“黑暗弃子”亚斯特', names: ['Astel, Naturalborn of the Void'] },
  { zh: '“恶兆王”蒙葛特', names: ['Morgott, the Omen King'] },
  { zh: '“初始之王”葛孚雷(黄金之影)', flagIds: [11000850], names: [] },
  { zh: '火焰巨人', names: ['Fire Giant'] },
  { zh: '神皮双人组', names: ['Godskin Duo'] },
  { zh: '“黑刀”玛利喀斯', names: ['Maliketh, the Black Blade'] },
  { zh: '“龙王”普拉顿桑克斯', names: ['Dragonlord Placidusax'] },
  { zh: '“全知”基甸·奥夫尼尔', names: ['Sir Gideon Ofnir, the All-Knowing'] },
  { zh: '“战士”霍拉·卢克斯', flagIds: [11050800], names: [] },
  { zh: '“渎神君王”莱卡德', names: ['Rykard, Lord of Blasphemy'] },
  { zh: '“城主”尼奥尔', names: ['Commander Niall'] },
  { zh: '“荆棘”艾尔梅尔', names: ['Elemer of the Briar'] },
  { zh: '“鲜血君王”蒙格', names: ['Mohg, Lord of Blood'] },
  { zh: '“米凯拉的锋刃”玛莲妮亚', names: ['Malenia, Blade of Miquella'] },
  { zh: '艾尔登之兽', names: ['Elden Beast'] },
];

const LEGENDARY_ARMAMENTS = [
  'Grafted Blade Greatsword',
  'Ruins Greatsword',
  'Eclipse Shotel',
  'Sword of Night and Flame',
  "Marais Executioner's Sword",
  'Dark Moon Greatsword',
  "Devourer's Scepter",
  'Golden Order Greatsword',
  'Bolt of Gransax',
];

const LEGENDARY_SPELLS = [
  'Flame of the Fell God',
  "Greyoll's Roar",
  'Elden Stars',
  'Founding Rain of Stars',
  "Ranni's Dark Moon",
  'Comet Azur',
  'Stars of Ruin',
];

const LEGENDARY_TALISMANS = [
  'Radagon Icon',
  "Radagon's Soreseal",
  'Godfrey Icon',
  'Moon of Nokstella',
  'Dragoncrest Greatshield Talisman',
  "Marika's Soreseal",
  "Old Lord's Talisman",
  "Erdtree's Favor +2",
];

const LEGENDARY_ASHES = [
  'Lhutel the Headless',
  'Black Knife Tiche',
  'Redmane Knight Ogha',
  'Mimic Tear Ashes',
  'Dung Eater Puppet',
  'Ancient Dragon Knight Kristoff',
];

// 名称 → id(模块级构建一次;武器取裸 id)
const weaponIdByName = new Map<string, number>();
for (const w of WEAPONS) {
  if (w.id % 10000 === 0 && !weaponIdByName.has(w.name)) weaponIdByName.set(w.name, w.id);
}
const spellIdByName = new Map(SPELLS.map((s) => [s.name, s.id]));
const talismanIdByName = new Map(TALISMANS.map((t) => [t.name, t.id]));
const ashIdByName = new Map(SPIRIT_ASHES.map((s) => [s.name, s.id]));

function collection(
  zh: string,
  wanted: string[],
  idByName: ReadonlyMap<string, number>,
  ownedIds: ReadonlySet<number>,
  kind: ItemNameKind,
  placementType: MissingItem['placementType'],
): CollectionAchievement {
  const missing: MissingItem[] = [];
  let have = 0;
  for (const en of wanted) {
    const id = idByName.get(en);
    const owned = id !== undefined && ownedIds.has(id);
    if (owned) have += 1;
    else {
      missing.push({
        label: (id !== undefined ? zhItemNameByKind(kind, id) : null) ?? en,
        id: id ?? null,
        placementType,
      });
    }
  }
  return { zh, have, total: wanted.length, done: have === wanted.length, missing };
}

export function deriveAchievements(profile: CharacterProfile): DerivedAchievements {
  const byName = new Map<string, boolean>();
  const byFlag = new Map<number, boolean>();
  for (const row of profile.bossRows) {
    if (row.boss.name) {
      byName.set(row.boss.name, (byName.get(row.boss.name) ?? false) || row.defeated);
    }
    byFlag.set(row.boss.defeatFlagId, row.defeated);
  }

  const bossKills: BossAchievement[] = BOSS_ACHIEVEMENTS.map((entry) => {
    let available = false;
    let done = false;
    for (const en of entry.names) {
      if (byName.has(en)) {
        available = true;
        done = done || (byName.get(en) ?? false);
      }
    }
    for (const flagId of entry.flagIds ?? []) {
      if (byFlag.has(flagId)) {
        available = true;
        done = done || (byFlag.get(flagId) ?? false);
      }
    }
    return { zh: entry.zh, en: entry.names[0] ?? '', done, available };
  });

  const collections: CollectionAchievement[] = [
    collection('传说中的武器', LEGENDARY_ARMAMENTS, weaponIdByName, profile.ownedWeaponBaseIds, 'weapon', 'weapon'),
    collection('传说中的魔法与祷告', LEGENDARY_SPELLS, spellIdByName, profile.ownedGoodsIds, 'goods', 'goods'),
    collection('传说中的护符', LEGENDARY_TALISMANS, talismanIdByName, profile.ownedTalismanIds, 'talisman', 'talisman'),
    collection('传说中的骨灰', LEGENDARY_ASHES, ashIdByName, profile.ownedGoodsIds, 'goods', 'goods'),
  ];

  return { bossKills, collections };
}
