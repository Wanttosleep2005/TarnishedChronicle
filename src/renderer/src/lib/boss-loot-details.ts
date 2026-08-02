import { ARMOR } from '../data/generated/armor.ts';
import { ASHES_OF_WAR } from '../data/generated/ashes-of-war.ts';
import { GOODS } from '../data/generated/goods.ts';
import { SPELLS } from '../data/generated/spells.ts';
import { SPIRIT_ASHES } from '../data/generated/spirit-ashes.ts';
import { TALISMANS } from '../data/generated/talismans.ts';
import { WEAPONS } from '../data/generated/weapons.ts';
import { type ItemNameKind, zhItemNameByKind } from '../data/zh/translations.ts';
import { BOSS_LOOT_ARCHIVE_BY_FLAG, bossLootArchive, type BossLootReference } from './boss-loot.ts';

export type BossLootKind = 'weapon' | 'armor' | 'talisman' | 'sorcery' | 'incantation' | 'spirit-ash' | 'ash-of-war' | 'goods';

export interface BossLootItem {
  readonly en: string;
  readonly zh: string;
  readonly icon: number | null;
  readonly kind: BossLootKind;
  readonly quantity: number;
  readonly source?: BossLootReference['source'];
}

export interface BossRemembranceExchange {
  readonly remembrance: BossLootItem;
  readonly rewards: readonly BossLootItem[];
}

type CatalogItem = Readonly<{
  en: string;
  id: number;
  icon: number;
  kind: BossLootKind;
  translationKind: ItemNameKind;
}>;

const NAME_ALIASES: Readonly<Record<string, string>> = {
  "Smithing-Stone Miner's Bell Bearing": "Smithing-Stone Miner's Bell Bearing [4]",
  'Banished Knight Oleg Ashes': 'Banished Knight Oleg',
  'Ancient Dragon Knight Kristoff Ashes': 'Ancient Dragon Knight Kristoff',
  'Battlemage Hugues Ashes': 'Battlemage Hugues',
};

function nameKey(name: string): string {
  return name
    .replace(/[\[\]]/g, '')
    .replace(/[’]/g, "'")
    .replace(/[-\s]+/g, ' ')
    .trim()
    .toLocaleLowerCase('en-US');
}

function catalogEntry(
  en: string,
  id: number,
  icon: number,
  kind: BossLootKind,
  translationKind: ItemNameKind,
): CatalogItem {
  return { en, id, icon, kind, translationKind };
}

const ITEM_BY_NAME: ReadonlyMap<string, CatalogItem> = (() => {
  const index = new Map<string, CatalogItem>();
  const add = (item: CatalogItem) => {
    const key = nameKey(item.en);
    if (!index.has(key)) index.set(key, item);
  };

  for (const item of WEAPONS) add(catalogEntry(item.name, item.id, item.icon, 'weapon', 'weapon'));
  for (const item of ARMOR) add(catalogEntry(item.name, item.id, item.icon, 'armor', 'armor'));
  for (const item of TALISMANS) add(catalogEntry(item.name, item.id, item.icon, 'talisman', 'talisman'));
  for (const item of SPELLS) {
    add(catalogEntry(item.name, item.id, item.icon, item.category === 'Sorcery' ? 'sorcery' : 'incantation', 'goods'));
  }
  for (const item of SPIRIT_ASHES) add(catalogEntry(item.name, item.id, item.icon, 'spirit-ash', 'goods'));
  for (const item of ASHES_OF_WAR) add(catalogEntry(item.name, item.id, item.icon, 'ash-of-war', 'aow'));
  for (const item of GOODS) add(catalogEntry(item.name, item.id, item.icon, 'goods', 'goods'));

  return index;
})();

function itemFor(ref: BossLootReference): CatalogItem | undefined {
  return ITEM_BY_NAME.get(nameKey(NAME_ALIASES[ref.en] ?? ref.en));
}

function resolveLoot(ref: BossLootReference): BossLootItem {
  const item = itemFor(ref);
  return {
    en: item?.en ?? ref.en,
    zh: item ? (zhItemNameByKind(item.translationKind, item.id) ?? item.en) : ref.en,
    icon: item?.icon ?? null,
    kind: item?.kind ?? 'goods',
    quantity: ref.quantity ?? 1,
    source: ref.source,
  };
}

const REMEMBRANCE_EXCHANGE_BY_EN: Readonly<Record<string, readonly BossLootReference[]>> = {
  'Remembrance of the Grafted': [{ en: 'Axe of Godrick' }, { en: 'Grafted Dragon' }],
  'Remembrance of the Omen King': [{ en: "Morgott's Cursed Sword" }, { en: 'Regal Omen Bairn' }],
  'Remembrance of Hoarah Loux': [{ en: 'Axe of Godfrey' }, { en: "Ash of War: Hoarah Loux's Earthshaker" }],
  'Remembrance of the Starscourge': [{ en: 'Starscourge Greatsword' }, { en: 'Lion Greatbow' }],
  'Remembrance of the Naturalborn': [{ en: "Bastard's Stars" }, { en: 'Ash of War: Waves of Darkness' }],
  'Remembrance of the Full Moon Queen': [{ en: 'Carian Regal Scepter' }, { en: "Rennala's Full Moon" }],
  'Remembrance of the Blasphemous': [{ en: 'Blasphemous Blade' }, { en: "Rykard's Rancor" }],
  'Remembrance of the Black Blade': [{ en: "Maliketh's Black Blade" }, { en: 'Black Blade' }],
  'Remembrance of the Dragonlord': [{ en: "Dragon King's Cragblade" }, { en: "Placidusax's Ruin" }],
  'Remembrance of the Regal Ancestor': [{ en: 'Winged Greathorn' }, { en: "Ancestral Infant's Head" }],
  'Remembrance of the Lichdragon': [{ en: "Fortissax's Lightning Spear" }, { en: 'Death Lightning' }],
  'Remembrance of the Blood Lord': [{ en: "Mohgwyn's Sacred Spear" }, { en: 'Bloodboon' }],
  'Remembrance of the Fire Giant': [{ en: "Giant's Red Braid" }, { en: 'Burn, O Flame!' }],
  'Remembrance of the Rot Goddess': [{ en: 'Hand of Malenia' }, { en: 'Scarlet Aeonia' }],
  'Elden Remembrance': [{ en: "Marika's Hammer" }, { en: 'Sacred Relic Sword' }],
  'Remembrance of the Dancing Lion': [{ en: 'Ash of War: Divine Beast Frost Stomp' }, { en: 'Divine Beast Tornado' }],
  'Remembrance of a God and a Lord': [{ en: 'Greatsword of Radahn (Lord)' }, { en: 'Light of Miquella' }],
  'Remembrance of the Impaler': [{ en: 'Spear of the Impaler' }, { en: "Messmer's Orb" }],
  'Remembrance of Putrescence': [{ en: 'Putrescence Cleaver' }, { en: 'Vortex of Putrescence' }],
  'Remembrance of the Mother of Fingers': [{ en: 'Staff of the Great Beyond' }, { en: 'Fleeting Microcosm' }],
  'Remembrance of the Lord of Frenzied Flame': [{ en: 'Greatsword of Damnation' }, { en: "Midra's Flame of Frenzy" }],
  'Remembrance of the Saint of the Bud': [{ en: 'Poleblade of the Bud' }, { en: 'Rotten Butterflies' }],
  'Remembrance of the Twin Moon Knight': [{ en: "Rellana's Twin Blades" }, { en: "Rellana's Twin Moons" }],
  'Remembrance of the Wild Boar Rider': [{ en: 'Sword Lance' }, { en: 'Blades of Stone' }],
  'Remembrance of the Shadow Sunflower': [{ en: 'Shadow Sunflower Blossom' }, { en: 'Land of Shadow' }],
};

export const BOSS_LOOT_KIND_ZH: Readonly<Record<BossLootKind, string>> = {
  weapon: '武器',
  armor: '防具',
  talisman: '护符',
  sorcery: '魔法',
  incantation: '祷告',
  'spirit-ash': '骨灰',
  'ash-of-war': '战灰',
  goods: '道具',
};

export const BOSS_LOOT_SOURCE_ZH: Readonly<Record<NonNullable<BossLootReference['source']>, string>> = {
  'arena-chest': '场地宝箱',
  encounter: '遭遇奖励',
};

export function bossLootDetails(flag: number): readonly BossLootItem[] | undefined {
  return bossLootArchive(flag)?.drops.map(resolveLoot);
}

export function bossRemembranceExchange(flag: number): BossRemembranceExchange | undefined {
  const archive = bossLootArchive(flag);
  const remembrance = archive?.drops.find((drop) => REMEMBRANCE_EXCHANGE_BY_EN[drop.en] !== undefined);
  if (!remembrance) return undefined;
  const rewards = REMEMBRANCE_EXCHANGE_BY_EN[remembrance.en];
  if (!rewards) return undefined;
  return { remembrance: resolveLoot(remembrance), rewards: rewards.map(resolveLoot) };
}

export function bossLootSearchTerms(flag: number): readonly string[] {
  const exchange = bossRemembranceExchange(flag);
  const items = [
    ...(bossLootDetails(flag) ?? []),
    ...(exchange ? [exchange.remembrance, ...exchange.rewards] : []),
  ];
  return [...new Set(items.flatMap((item) => [item.zh, item.en]))];
}

export const BOSS_LOOT_UNRESOLVED_NAMES: readonly string[] = [
  ...new Set(
    Object.values(BOSS_LOOT_ARCHIVE_BY_FLAG)
      .flatMap((entry) => entry.drops)
      .filter((drop) => !itemFor(drop))
      .map((drop) => drop.en),
  ),
].sort((left, right) => left.localeCompare(right, 'en'));

export const BOSS_REMEMBRANCE_EXCHANGE_UNRESOLVED_NAMES: readonly string[] = [
  ...new Set(
    Object.values(REMEMBRANCE_EXCHANGE_BY_EN)
      .flatMap((rewards) => rewards)
      .filter((reward) => !itemFor(reward))
      .map((reward) => reward.en),
  ),
].sort((left, right) => left.localeCompare(right, 'en'));
