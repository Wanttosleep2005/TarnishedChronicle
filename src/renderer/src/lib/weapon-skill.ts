import {
  SKILL_ATTACKS,
  SPECIAL_SKILL_VARIANTS,
  WAR_ASHES,
  type SkillAttack,
  type SkillBuff,
  type SkillWeapon,
  type WarAsh,
} from '../data/generated/weapon-skill-data.ts';
import type { EnemyCombatRow } from '../data/generated/combat-data.ts';
import { DAMAGE_TYPES, type AttackRating, type Attributes, type DamageType } from './ar.ts';
import {
  damageAfterDefense,
  effectiveEnemyDefense,
  effectiveEnemyHp,
  effectiveEnemyStatusResistance,
  effectivePoiseDamage,
  newGameLabel,
} from './build-insights.ts';
import { skillBaseAttackAt } from './weapon-ar.ts';

const attacksBySkill = new Map<string, readonly SkillAttack[]>();
for (const attack of SKILL_ATTACKS) {
  const rows = attacksBySkill.get(attack.skill) ?? [];
  attacksBySkill.set(attack.skill, [...rows, attack]);
}

const specialVariantBySkill = new Map(SPECIAL_SKILL_VARIANTS.map((row) => [row.skill, row.variants]));

const PHYSICAL_TYPE_BY_ID: Readonly<Record<number, string>> = {
  0: '斩击',
  1: '打击',
  2: '突刺',
  3: '普通',
};

const PHYSICAL_TAKEN_TYPE: Readonly<Record<string, string>> = {
  普通: 'standard',
  斩击: 'slash',
  打击: 'strike',
  突刺: 'thrust',
};

const ELEMENT_CONDITION: Readonly<Record<DamageType, string>> = {
  physical: '物',
  magic: '魔',
  fire: '火',
  lightning: '雷',
  holy: '圣',
};

const STATUS_KEY: Readonly<Record<string, string>> = {
  '毒': 'poison',
  '腐败': 'rot',
  '出血': 'bleed',
  '冻伤': 'frost',
  '睡眠': 'sleep',
  '发狂': 'madness',
  '抗死度': 'death',
};

export interface AvailableSkill {
  readonly name: string;
  readonly affinity: string;
  readonly isDefault: boolean;
}

export interface SkillDamagePart {
  readonly type: DamageType;
  readonly attack: number;
  readonly defense: number;
  readonly takenType: string;
  readonly taken: number;
  readonly buffMultiplier: number;
  readonly damage: number;
}

export interface SkillAttackEstimate {
  readonly attack: SkillAttack;
  readonly power: Readonly<Partial<Record<DamageType, number>>>;
  readonly damage: number;
  readonly poiseDamage: number;
  readonly poiseHits: number | null;
  readonly hitsToKill: number | null;
  readonly physicalType: string;
  readonly status: string;
  readonly statusResistance: number | null;
  readonly parts: readonly SkillDamagePart[];
}

export function availableSkillsForWeapon(weapon: SkillWeapon): readonly AvailableSkill[] {
  const skills: AvailableSkill[] = [];
  if (weapon.defaultSkill && attacksForSkill(weapon.defaultSkill, weapon).length > 0) {
    skills.push({ name: weapon.defaultSkill, affinity: '专属 / 默认', isDefault: true });
  }
  if (weapon.allowAshOfWar) {
    for (const ash of WAR_ASHES) {
      if (!ash.categories.includes(weapon.category) || attacksForSkill(ash.name, weapon).length === 0) continue;
      if (!skills.some((skill) => skill.name === ash.name)) {
        skills.push({ name: ash.name, affinity: ash.affinity, isDefault: ash.name === weapon.defaultSkill });
      }
    }
  }
  return skills;
}

export function compatibleWarAshes(weapon: SkillWeapon): readonly WarAsh[] {
  return WAR_ASHES.filter((ash) => ash.categories.includes(weapon.category));
}

export function resolveSkillKey(skillName: string, weapon: SkillWeapon): string {
  const variants = specialVariantBySkill.get(skillName);
  return variants?.[weapon.name] ?? variants?.[weapon.category] ?? skillName;
}

export function attacksForSkill(skillName: string, weapon: SkillWeapon): readonly SkillAttack[] {
  return attacksBySkill.get(resolveSkillKey(skillName, weapon)) ?? [];
}

export function physicalTypeForAttack(attack: SkillAttack, weapon: SkillWeapon): string {
  if (attack.physicalTypeId === 252) return weapon.thrustType || '突刺';
  if (attack.physicalTypeId === 253) return weapon.swingType || '普通';
  return PHYSICAL_TYPE_BY_ID[attack.physicalTypeId] ?? '普通';
}

export function skillAttackPower(
  attrs: Attributes,
  paramId: number,
  upgrade: number,
  panel: AttackRating,
  attack: SkillAttack,
  twoHanding = false,
): Readonly<Partial<Record<DamageType, number>>> {
  const base = skillBaseAttackAt(attrs, paramId, upgrade, attack.baseDamage, attack.specialCorrectionId, twoHanding);
  const power: Partial<Record<DamageType, number>> = {};
  for (const type of DAMAGE_TYPES) {
    const motion = (panel.damage[type] ?? 0) * (attack.motionValues[type] ?? 0) / 100;
    const scaledBase = base?.damage[type] ?? 0;
    const forcedEnchant = attack.forcedEnchantType === ELEMENT_CONDITION[type]
      ? attack.forcedEnchantAttack * attack.enchantMultiplier / 100
      : 0;
    const value = motion + scaledBase + forcedEnchant;
    if (value > 0) power[type] = value;
  }
  return power;
}

function buffMultiplierFor(
  buffs: readonly SkillBuff[],
  type: DamageType,
  physicalType: string,
  attack: SkillAttack,
): number {
  const tags = attack.specialTypes.join('\n');
  return buffs.reduce((multiplier, buff) => {
    const targetMatches = buff.targets.includes('全') || buff.targets.includes(ELEMENT_CONDITION[type]);
    const restrictionMatches = !buff.restriction || physicalType.includes(buff.restriction) || tags.includes(buff.restriction);
    return targetMatches && restrictionMatches ? multiplier * buff.multiplier : multiplier;
  }, 1);
}

export function estimateSkillAttack(
  attrs: Attributes,
  paramId: number,
  upgrade: number,
  panel: AttackRating,
  weapon: SkillWeapon,
  attack: SkillAttack,
  enemy: EnemyCombatRow,
  buffs: readonly SkillBuff[] = [],
  twoHanding = false,
  newGameCycle = 0,
): SkillAttackEstimate {
  const power = skillAttackPower(attrs, paramId, upgrade, panel, attack, twoHanding);
  const physicalType = physicalTypeForAttack(attack, weapon);
  const parts = DAMAGE_TYPES.flatMap((type): SkillDamagePart[] => {
    const attackValue = power[type] ?? 0;
    if (attackValue <= 0) return [];
    const defense = effectiveEnemyDefense(enemy, type, newGameCycle);
    const takenType = type === 'physical' ? PHYSICAL_TAKEN_TYPE[physicalType] ?? 'standard' : type;
    const taken = enemy.damageTaken[takenType] ?? 1;
    const buffMultiplier = buffMultiplierFor(buffs, type, physicalType, attack);
    return [{
      type,
      attack: attackValue,
      defense,
      takenType,
      taken,
      buffMultiplier,
      damage: damageAfterDefense(attackValue, defense) * taken * buffMultiplier,
    }];
  });
  const damage = parts.reduce((sum, part) => sum + part.damage, 0);
  const poiseDamage = effectivePoiseDamage(attack.poiseDamage + weapon.basePoise * attack.poiseMultiplier / 100, newGameCycle) ?? 0;
  const hp = effectiveEnemyHp(enemy, newGameCycle);
  const baseStatus = attack.status && attack.statusValue > 0 ? `${Math.floor(attack.statusValue)} ${attack.status}` : '';
  const statusResistance = attack.status ? effectiveEnemyStatusResistance(enemy, STATUS_KEY[attack.status] ?? '', newGameCycle) : null;
  const status = baseStatus && statusResistance !== null
    ? `${baseStatus} · ${newGameLabel(newGameCycle)}抗性 ${Math.round(statusResistance)}`
    : baseStatus;
  return {
    attack,
    power,
    damage,
    poiseDamage,
    poiseHits: enemy.saDurability !== null && enemy.saDurability > 0 && poiseDamage > 0
      ? Math.ceil(enemy.saDurability / poiseDamage)
      : null,
    hitsToKill: hp !== null && hp > 0 && damage > 0 ? Math.ceil(hp / damage) : null,
    physicalType,
    status,
    statusResistance,
    parts,
  };
}
