import { SPELL_COMBAT_DATA, WEAPON_COMBAT_ACTIONS, type SpellCombatRow, type WeaponCombatRow } from '../data/generated/combat-data.ts';
import { weaponById } from './derive.ts';
import { zhItemNameByKind } from '../data/zh/translations.ts';

const weaponCombatByName = new Map(WEAPON_COMBAT_ACTIONS.map((row) => [row.weapon, row]));
const spellCombatByName = new Map(SPELL_COMBAT_DATA.map((row) => [row.name, row]));

export function weaponCombatForId(paramId: number): WeaponCombatRow | null {
  const baseId = paramId - (paramId % 10000);
  const weapon = weaponById.get(paramId) ?? weaponById.get(baseId);
  if (!weapon) return null;
  return weaponCombatByName.get(zhItemNameByKind('weapon', baseId) ?? weapon.name) ?? null;
}

export function spellCombatForName(name: string): SpellCombatRow | null {
  return spellCombatByName.get(name) ?? null;
}

export function combatTypeLabel(type: string): string {
  return type === 'Sorcery' ? '魔法' : type === 'Incantation' ? '祷告' : type;
}

export function damageMultiplierLabel(multipliers: Readonly<Record<string, number>>): string {
  const labels: Record<string, string> = { physical: '物理', magic: '魔力', fire: '火', lightning: '雷', holy: '圣' };
  return Object.entries(multipliers)
    .map(([type, value]) => `${labels[type] ?? type} ${(value / 100).toFixed(2)}x`)
    .join(' + ');
}
