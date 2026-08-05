import { DAMAGE_TYPES, type AttackRating } from './ar.ts';
import { weaponById, type CharacterProfile } from './derive.ts';
import { CLEAR_COUNT_SCALING, type EnemyCombatRow, type WeaponCombatAction } from '../data/generated/combat-data.ts';
import { SPELL_SCADU_GROWTH } from '../data/generated/spell-catalyst-graphs.ts';

export type CombatWorld = 'lands-between' | 'shadow-realm';

export interface CombatContext {
  readonly world: CombatWorld;
  readonly scaduLevel: number;
}

export function scaduDamageMultiplier(context: Readonly<Partial<CombatContext>> = {}): number {
  if (context.world !== 'shadow-realm') return 1;
  const level = Math.max(0, Math.min(20, Math.round(context.scaduLevel ?? 0)));
  return SPELL_SCADU_GROWTH[level]?.damageMultiplier ?? 1;
}

export interface DamageBreakdown {
  type: string;
  attack: number;
  defense: number;
  taken: number;
  takenType: string;
  partIndex: number;
  actionMultiplier: number;
  damage: number;
}

export interface EnemyHitEstimate {
  damage: number;
  hitsToKill: number | null;
  poiseDamage: number | null;
  poiseHits: number | null;
  breakdown: DamageBreakdown[];
}

const PHYSICAL_TAKEN_TYPES: Readonly<Record<string, string>> = {
  普通: 'standard',
  斩击: 'slash',
  打击: 'strike',
  突刺: 'thrust',
};

function clearCountScalingFor(newGameCycle: number) {
  const cycle = Math.max(0, Math.min(7, Math.round(newGameCycle)));
  return cycle === 0 ? null : CLEAR_COUNT_SCALING.find((row) => row.cycle === cycle) ?? null;
}

export function newGameLabel(newGameCycle: number): string {
  const cycle = Math.max(0, Math.min(7, Math.round(newGameCycle)));
  return cycle === 0 ? 'NG' : `NG+${cycle}`;
}

export function effectiveEnemyHp(enemy: EnemyCombatRow, newGameCycle = 0): number | null {
  if (enemy.hp === null) return null;
  const scaling = clearCountScalingFor(newGameCycle);
  if (!scaling) return enemy.hp;
  return enemy.hp * (enemy.gameClearHpScale ?? 1) * (scaling.hp ?? 1);
}

export function effectiveEnemyDefense(enemy: EnemyCombatRow, type: string, newGameCycle = 0): number {
  const base = enemy.defense[type] ?? 0;
  const scaling = clearCountScalingFor(newGameCycle);
  return base
    * (enemy.defenseScale[type] ?? 1)
    * (scaling ? (enemy.newGameDefenseScale[type] ?? 1) * (scaling.defense[type] ?? 1) : 1);
}

export function effectiveEnemyStatusResistance(enemy: EnemyCombatRow, type: string, newGameCycle = 0): number | null {
  const base = enemy.statusResistance[type] ?? null;
  if (base === null) return null;
  const scaling = clearCountScalingFor(newGameCycle);
  return base
    * (scaling ? (enemy.newGameStatusScale[type] ?? 1) * (scaling.statusResistance[type] ?? 1) : 1);
}

export function effectivePoiseDamage(poiseDamage: number | null, newGameCycle = 0): number | null {
  if (poiseDamage === null) return null;
  return poiseDamage * (clearCountScalingFor(newGameCycle)?.poiseDamage ?? 1);
}

function damageTakenType(action: WeaponCombatAction, damageType: string, partIndex: number): string {
  if (damageType !== 'physical') return damageType;
  const physicalType = action.physicalAttackTypes[partIndex] ?? action.physicalAttackTypes[0];
  return PHYSICAL_TAKEN_TYPES[physicalType] ?? 'standard';
}

// Elden Ring's defense curve, cross-checked against the v1.16 workbook breakpoints.
export function damageAfterDefense(attack: number, defense: number): number {
  if (attack <= 0) return 0;
  if (defense <= 0) return attack * 0.9;
  const ratio = attack / defense;
  if (ratio < 0.125) return attack * 0.1;
  if (ratio < 1) return attack * ((19.2 / 49) * (ratio - 0.125) ** 2 + 0.1);
  if (ratio < 2.5) return attack * ((-0.4 / 3) * (ratio - 2.5) ** 2 + 0.7);
  if (ratio < 8) return attack * ((-0.8 / 121) * (ratio - 8) ** 2 + 0.9);
  return attack * 0.9;
}

export function estimateEnemyHit(
  enemy: EnemyCombatRow,
  attack: AttackRating,
  action: WeaponCombatAction,
  newGameCycle = 0,
  context: Readonly<Partial<CombatContext>> = {},
): EnemyHitEstimate {
  const scaduMultiplier = scaduDamageMultiplier(context);
  const actionMultipliers = action.damageMultiplierParts.length > 0
    ? action.damageMultiplierParts.map((value) => value / 100)
    : [(action.damageMultiplier ?? 100) / 100];
  const breakdown = DAMAGE_TYPES.flatMap((type) => {
    const attackValue = attack.damage[type] ?? 0;
    if (attackValue <= 0) return [];
    const defense = effectiveEnemyDefense(enemy, type, newGameCycle);
    return actionMultipliers.map((actionMultiplier, partIndex) => {
      const takenType = damageTakenType(action, type, partIndex);
      const taken = enemy.damageTaken[takenType] ?? 1;
      const scaledAttack = attackValue * actionMultiplier;
      return {
        type,
        attack: attackValue,
        defense,
        taken,
        takenType,
        partIndex,
        actionMultiplier,
        damage: damageAfterDefense(scaledAttack, defense) * taken * scaduMultiplier,
      };
    });
  });
  const damage = breakdown.reduce((sum, row) => sum + row.damage, 0);
  const poiseDamage = effectivePoiseDamage(action.pvePoise, newGameCycle);
  const hp = effectiveEnemyHp(enemy, newGameCycle);
  return {
    damage,
    hitsToKill: hp !== null && hp > 0 && damage > 0 ? Math.ceil(hp / damage) : null,
    poiseDamage,
    poiseHits: enemy.saDurability !== null && enemy.saDurability > 0 && poiseDamage
      ? Math.ceil(enemy.saDurability / poiseDamage)
      : null,
    breakdown,
  };
}

function weaponText(profile: CharacterProfile, selectedWeaponId: number | null): string {
  const ids = new Set(profile.equipment.armaments.filter((item) => item.kind === 'weapon').map((item) => item.paramId));
  if (selectedWeaponId !== null) ids.add(selectedWeaponId);
  return [...ids]
    .map((id) => {
      const weapon = weaponById.get(id) ?? weaponById.get(id - (id % 10000));
      return `${weapon?.name ?? ''} ${weapon?.category ?? ''}`;
    })
    .join(' ')
    .toLowerCase();
}

export function inferBuildTags(profile: CharacterProfile, selectedWeaponId: number | null): string[] {
  const { str, dex, int, fai, arc } = profile.stats;
  const text = weaponText(profile, selectedWeaponId);
  const tags: string[] = [];
  const talismanText = profile.equipment.talismans.map((item) => `${item.en ?? ''} ${item.display}`).join(' ').toLowerCase();
  const ashText = profile.equipment.armaments.map((item) => item.ashOfWar ?? '').join(' ').toLowerCase();

  if (str >= 35 && str >= dex + 8 && /great hammer|colossal|greatsword|ultra|hammer/i.test(text)) tags.push('纯力量重武器');
  if (dex >= 35 && dex >= str + 8 && /katana|curved sword|twinblade|spear|rapier|bow|crossbow/i.test(text)) tags.push('敏捷武器流');
  if (arc >= 25 && /blood|bleed|rivers of blood|eleonora/i.test(`${text} ${ashText} ${talismanText}`)) tags.push('出血流');
  if (int >= 30 && profile.spellsKnown > 0) tags.push('法师炮台');
  if (fai >= 30 && profile.spellsKnown > 0) tags.push('祷告强化');
  if (profile.equipment.armaments.filter((item) => item.kind === 'weapon').length >= 2) tags.push('双持压制');
  if (ashText.trim()) tags.push('战技核心');
  return tags.length > 0 ? tags : ['通用混合流派'];
}
