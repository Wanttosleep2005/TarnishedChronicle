import { ARMOR } from '../data/generated/armor.ts';
import { SPELL_CALCULATOR_BUFFS } from '../data/generated/spell-calculator-data.ts';
import { TALISMANS } from '../data/generated/talismans.ts';
import type { Attributes, DamageType, ScalingAttr } from './ar.ts';
import type { CharacterProfile } from './derive.ts';

const armorById = new Map(ARMOR.map((armor) => [armor.id, armor]));
const talismanById = new Map(TALISMANS.map((talisman) => [talisman.id, talisman]));

const ATTRIBUTE_STAT: Readonly<Record<string, ScalingAttr>> = {
  Strength: 'str',
  Dexterity: 'dex',
  Intelligence: 'int',
  Faith: 'fai',
  Arcane: 'arc',
};

const ARMOR_DAMAGE_ATTRIBUTE: Readonly<Record<string, DamageType>> = {
  'Magic Attack Power': 'magic',
  'Fire Attack Power': 'fire',
  'Lightning Attack Power': 'lightning',
  'Holy Attack Power': 'holy',
};

export interface SpellEquipmentModifiers {
  readonly attrs: Attributes;
  readonly damageMultipliers: Readonly<Partial<Record<DamageType, number>>>;
  readonly focusCost: Readonly<{ magic: number; incantation: number }>;
}

function applyFocusCost(
  focusCost: { magic: number; incantation: number },
  effect: { attribute: string; value: number; model: string },
): void {
  if (effect.model !== 'multiplicative') return;
  const magic = effect.attribute === 'Sorcery Focus Consumption'
    || effect.attribute === 'Spell Focus Consumption'
    || effect.attribute === 'Pyromancy Focus Consumption';
  const incantation = effect.attribute === 'Incantation Focus Consumption'
    || effect.attribute === 'Spell Focus Consumption'
    || effect.attribute === 'Pyromancy Focus Consumption';
  if (magic) focusCost.magic *= effect.value;
  if (incantation) focusCost.incantation *= effect.value;
}

export function equipmentSpellModifiers(profile: CharacterProfile): SpellEquipmentModifiers {
  const attrs: Attributes = {
    str: profile.stats.str,
    dex: profile.stats.dex,
    int: profile.stats.int,
    fai: profile.stats.fai,
    arc: profile.stats.arc,
  };
  const damageMultipliers: Partial<Record<DamageType, number>> = {};
  const focusCost = { magic: 1, incantation: 1 };

  for (const entry of profile.equipment.armor) {
    const armor = armorById.get(entry.paramId);
    if (!armor) continue;
    for (const effect of armor.effects) {
      const stat = ATTRIBUTE_STAT[effect.attribute];
      if (stat && effect.model === 'additive') {
        attrs[stat] += effect.value;
      }
      const damageType = ARMOR_DAMAGE_ATTRIBUTE[effect.attribute];
      if (damageType && effect.model === 'multiplicative' && effect.value !== 0) {
        damageMultipliers[damageType] = (damageMultipliers[damageType] ?? 1) * effect.value;
      }
      applyFocusCost(focusCost, effect);
    }
  }

  for (const entry of profile.equipment.talismans) {
    const talisman = talismanById.get(entry.paramId);
    if (!talisman) continue;
    for (const effect of talisman.effects) {
      const stat = ATTRIBUTE_STAT[effect.attribute];
      if (stat && effect.model === 'additive') {
        attrs[stat] += effect.value;
      }
      applyFocusCost(focusCost, effect);
    }
  }

  return {
    attrs,
    damageMultipliers,
    focusCost,
  };
}

const TALISMAN_BUFF_BY_ID: Readonly<Record<number, string>> = {
  2000: 'excel-buff-010',
  2010: 'excel-buff-011',
  2020: 'excel-buff-012',
  2030: 'excel-buff-013',
  2040: 'excel-buff-008',
  2050: 'excel-buff-009',
  3000: 'excel-buff-014',
  3001: 'excel-buff-015',
  3040: 'excel-buff-014',
  3050: 'excel-buff-015',
  3090: 'excel-buff-016',
};

const ARMOR_BUFF_BY_ID: Readonly<Record<number, string>> = {
  1010000: 'excel-buff-040',
  1040000: 'excel-buff-041',
  580000: 'excel-buff-043',
  581000: 'excel-buff-042',
  530100: 'excel-buff-046',
  5020000: 'excel-buff-047',
  5272000: 'excel-buff-048',
  5062100: 'excel-buff-049',
  5230000: 'excel-buff-050',
  5290000: 'excel-buff-053',
  5253000: 'excel-buff-054',
  5070100: 'excel-buff-056',
};

const CRUCIBLE_ARMOR_IDS = [570000, 570100, 570200, 570300, 571000, 571100, 572100, 573100];
const ALBERICH_ARMOR_IDS = [120000, 120100, 120200, 121000];
const RAKSHASA_ARMOR_IDS = [5160000, 5160100, 5160200, 5160300];
const DEATH_KNIGHT_ARMOR_IDS = [5200000, 5200100, 5200200, 5200300];

export function equippedSpellBuffIds(profile: CharacterProfile): readonly string[] {
  const ids = new Set<string>();
  const armorIds = new Set(profile.equipment.armor.map((entry) => entry.paramId));
  const talismanIds = new Set(profile.equipment.talismans.map((entry) => entry.paramId));

  for (const id of talismanIds) {
    const buffId = TALISMAN_BUFF_BY_ID[id];
    if (buffId) ids.add(buffId);
  }
  for (const id of armorIds) {
    const buffId = ARMOR_BUFF_BY_ID[id];
    if (buffId) ids.add(buffId);
  }

  const countOf = (candidates: readonly number[]): number =>
    candidates.filter((id) => armorIds.has(id)).length;

  if (countOf(CRUCIBLE_ARMOR_IDS) >= 4) ids.add('excel-buff-044');
  if (countOf(ALBERICH_ARMOR_IDS) >= 3) ids.add('excel-buff-045');
  if (countOf(DEATH_KNIGHT_ARMOR_IDS) >= 4) ids.add('excel-buff-052');
  const rakshasaCount = countOf(RAKSHASA_ARMOR_IDS);
  if (rakshasaCount >= 1) ids.add('excel-buff-031');
  if (rakshasaCount >= 2) ids.add('excel-buff-032');
  if (rakshasaCount >= 3) ids.add('excel-buff-033');
  if (rakshasaCount >= 4) ids.add('excel-buff-055');
  if ((armorIds.has(5220000) || armorIds.has(5221000)) && armorIds.has(5180100)) {
    ids.add('excel-buff-051');
  }

  const equipmentNames = new Set([
    ...profile.equipment.armor,
    ...profile.equipment.talismans,
  ].map((item) => item.display.replace(/ \+\d+$/, '')));
  const offhandNames = new Set(profile.equipment.armaments
    .filter((item) => item.slotLabel.startsWith('左手'))
    .map((item) => item.display.replace(/ \+\d+$/, '')));

  for (const buff of SPELL_CALCULATOR_BUFFS) {
    const names = buff.name.replace('（副手）', '').split('/');
    const source = buff.category === '副手类buff' ? offhandNames : equipmentNames;
    if (names.some((name) => source.has(name))) ids.add(buff.id);
  }

  return [...ids].sort((a, b) => a.localeCompare(b, 'en'));
}
