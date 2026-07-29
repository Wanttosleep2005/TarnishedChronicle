import { DAMAGE_TYPES, type AttackRating } from './ar.ts';
import { weaponById, type CharacterProfile } from './derive.ts';
import type { EnemyCombatRow, WeaponCombatAction } from '../data/generated/combat-data.ts';

export interface DamageBreakdown {
  type: string;
  attack: number;
  defense: number;
  taken: number;
  damage: number;
}

export interface EnemyHitEstimate {
  damage: number;
  hitsToKill: number | null;
  poiseDamage: number | null;
  poiseHits: number | null;
  breakdown: DamageBreakdown[];
}

function enemyDefense(enemy: EnemyCombatRow, type: string): number {
  return enemy.defense[type] ?? (type === 'holy' ? enemy.defense.dark : null) ?? 0;
}

export function estimateEnemyHit(
  enemy: EnemyCombatRow,
  attack: AttackRating,
  action: WeaponCombatAction,
): EnemyHitEstimate {
  const actionMultiplier = (action.damageMultiplier ?? 100) / 100;
  const breakdown = DAMAGE_TYPES.map((type) => {
    const attackValue = attack.damage[type] ?? 0;
    const defense = enemyDefense(enemy, type);
    const taken = enemy.damageTaken[type] ?? (type === 'holy' ? enemy.damageTaken.dark : null) ?? 1;
    return {
      type,
      attack: attackValue,
      defense,
      taken,
      damage: Math.max(0, attackValue * actionMultiplier - defense) * taken,
    };
  }).filter((row) => row.attack > 0);
  const damage = breakdown.reduce((sum, row) => sum + row.damage, 0);
  return {
    damage,
    hitsToKill: enemy.hp && damage > 0 ? Math.ceil(enemy.hp / damage) : null,
    poiseDamage: action.pvePoise,
    poiseHits: enemy.saDurability && action.pvePoise ? Math.ceil(enemy.saDurability / action.pvePoise) : null,
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
