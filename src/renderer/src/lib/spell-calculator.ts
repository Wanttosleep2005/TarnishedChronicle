import { DAMAGE_TYPES, INEFFECTIVE_PENALTY, SCALING_ATTRS, type Attributes, type DamageType, type ScalingAttr } from './ar.ts';
import {
  SPELL_CALCULATOR_CATALYSTS,
  type SpellCalculatorAttack,
  type SpellCalculatorBuff,
  type SpellCalculatorCatalyst,
} from '../data/generated/spell-calculator-data.ts';
import {
  SPELL_ATK_CORRECTS,
  SPELL_CATALYST_PARAMS,
  SPELL_CURVE_GRAPHS,
  SPELL_WEAPON_UP_GROWTH,
  type SpellCatalystParams,
} from '../data/generated/spell-catalyst-graphs.ts';
import type { EnemyCombatRow } from '../data/generated/combat-data.ts';
import {
  damageAfterDefense,
  effectiveEnemyDefense,
  effectiveEnemyHp,
  effectiveEnemyStatusResistance,
  effectivePoiseDamage,
  scaduDamageMultiplier,
  type CombatWorld,
} from './build-insights.ts';

const ELEMENT_CONDITION: Readonly<Record<DamageType, string>> = {
  physical: '物',
  magic: '魔',
  fire: '火',
  lightning: '雷',
  holy: '圣',
};

const REQUIREMENT_FIELD: Readonly<Partial<Record<ScalingAttr, 'int' | 'fai' | 'arc'>>> = {
  int: 'int',
  fai: 'fai',
  arc: 'arc',
};

export function catalystKey(catalyst: SpellCalculatorCatalyst): string {
  return `${catalyst.itemId}:${catalyst.kind}`;
}

export function catalystParamsFor(catalyst: SpellCalculatorCatalyst): SpellCatalystParams | null {
  return SPELL_CATALYST_PARAMS[catalystKey(catalyst)] ?? null;
}

export function spellCatalystsFor(attack: SpellCalculatorAttack | null): readonly SpellCalculatorCatalyst[] {
  const kind = attack?.type === '祷告' ? '印记' : '法杖';
  return attack
    ? SPELL_CALCULATOR_CATALYSTS.filter((catalyst) => catalyst.kind === kind)
    : [];
}

export function catalystMaxUpgrade(catalyst: SpellCalculatorCatalyst): number {
  return catalyst.somber ? 10 : 25;
}

export interface SpellDamagePart {
  readonly type: DamageType;
  readonly attack: number;
  readonly scaling: number;
  readonly specialMultiplier: number;
  readonly defense: number;
  readonly takenType: string;
  readonly taken: number;
  readonly buffMultiplier: number;
  readonly equipmentMultiplier: number;
  readonly damage: number;
}

export interface SpellAttackEstimate {
  readonly attack: SpellCalculatorAttack;
  readonly catalyst: SpellCalculatorCatalyst;
  readonly catalystParams: SpellCatalystParams | null;
  readonly parts: readonly SpellDamagePart[];
  readonly damagePerHit: number;
  readonly damageTotal: number;
  readonly hitsToKill: number | null;
  readonly poisePerHit: number | null;
  readonly poiseTotal: number | null;
  readonly poiseHits: number | null;
  readonly statusBuildup: number | null;
  readonly status: string;
  readonly focusCost: number | null;
  readonly requirementSatisfied: boolean;
  readonly ineffectiveTypes: readonly DamageType[];
}

function buffMultiplierFor(
  buffs: readonly SpellCalculatorBuff[],
  type: DamageType,
  attack: SpellCalculatorAttack,
): number {
  const element = ELEMENT_CONDITION[type];
  return buffs.reduce((total, buff) => buff.effects.reduce((inner, effect) => {
    const matches = effect.condition === '全'
      || effect.condition === element
      || attack.tags.includes(effect.condition);
    return matches ? inner * effect.multiplier : inner;
  }, total), 1);
}

function statusBuildupFor(
  attack: SpellCalculatorAttack,
  catalyst: SpellCalculatorCatalyst,
  params: SpellCatalystParams | null,
  attrs: Attributes,
  upgrade: number,
): number | null {
  if (attack.buildup == null || !attack.status) return null;
  if (!attack.statusScales || !params) return attack.buildup;
  const weaponUpId = catalyst.somber
    ? catalyst.reinforcementCurve + Math.min(10, upgrade)
    : catalyst.reinforcementCurve + Math.min(25, upgrade);
  const weaponUp = SPELL_WEAPON_UP_GROWTH[weaponUpId];
  const graph = SPELL_CURVE_GRAPHS[params.statusGraph]?.values;
  if (!weaponUp || !graph) return attack.buildup;
  const arc = Math.max(1, Math.min(graph.length - 1, attrs.arc));
  const scaling = (graph[arc] ?? 0) * (params.correct.arc / 100) * weaponUp.arc;
  return attack.buildup * (1 + scaling);
}

export function estimateSpellAttack(
  attrs: Attributes,
  attack: SpellCalculatorAttack,
  catalyst: SpellCalculatorCatalyst,
  upgrade: number,
  enemy: EnemyCombatRow,
  buffs: readonly SpellCalculatorBuff[] = [],
  options: {
    readonly newGameCycle?: number;
    readonly world?: CombatWorld;
    readonly scaduLevel?: number;
    readonly focusCostMultiplier?: Readonly<{ magic: number; incantation: number }>;
    readonly damageMultipliers?: Readonly<Partial<Record<DamageType, number>>>;
  } = {},
): SpellAttackEstimate {
  const params = catalystParamsFor(catalyst);
  const newGameCycle = Math.max(0, Math.min(7, Math.round(options.newGameCycle ?? 0)));
  const scaduMultiplier = scaduDamageMultiplier(options);
  const weaponUpId = catalyst.somber
    ? catalyst.reinforcementCurve + Math.min(10, Math.max(0, upgrade))
    : catalyst.reinforcementCurve + Math.min(25, Math.max(0, upgrade));
  const weaponUp = SPELL_WEAPON_UP_GROWTH[weaponUpId];
  const atkCorrect = SPELL_ATK_CORRECTS[catalyst.attackCorrectId];
  const ineffectiveTypes: DamageType[] = [];
  const parts = DAMAGE_TYPES.flatMap((type): SpellDamagePart[] => {
    const base = attack.baseDamage[type] ?? 0;
    if (base <= 0) return [];
    const graph = params ? SPELL_CURVE_GRAPHS[params.graphs[type]]?.values : undefined;
    const correct = atkCorrect?.[type] ?? {};
    const requirementUnmet = SCALING_ATTRS.some((attr) => {
      if (!correct[attr]) return false;
      const requirementField = REQUIREMENT_FIELD[attr];
      if (!requirementField) return false;
      return attrs[attr] < (attack.requirements[requirementField] ?? 0)
        || attrs[attr] < (catalyst.requirements[requirementField] ?? 0);
    });
    let scaling = 1;
    if (requirementUnmet) {
      scaling = 1 - INEFFECTIVE_PENALTY;
      ineffectiveTypes.push(type);
    } else if (graph && weaponUp) {
      for (const attr of SCALING_ATTRS) {
        if (!correct[attr]) continue;
        const idx = Math.max(1, Math.min(graph.length - 1, attrs[attr]));
        const graphValue = graph[idx] ?? 0;
        scaling += graphValue * (params?.correct[attr] ?? 0) / 100 * (weaponUp[attr] ?? 0);
      }
    }
    const specialMultiplier = catalyst.specialTag !== '无' && attack.tags.includes(catalyst.specialTag)
      ? catalyst.specialMultiplier ?? 1
      : 1;
    const attackValue = base * scaling * specialMultiplier;
    const defense = effectiveEnemyDefense(enemy, type, newGameCycle);
    const takenType = type === 'physical' ? 'standard' : type;
    const taken = enemy.damageTaken[takenType] ?? 1;
    const buffMultiplier = buffMultiplierFor(buffs, type, attack);
    const equipmentMultiplier = options.damageMultipliers?.[type] ?? 1;
    const damage = damageAfterDefense(attackValue, defense)
      * taken
      * buffMultiplier
      * equipmentMultiplier
      * scaduMultiplier;
    return [{
      type,
      attack: attackValue,
      scaling,
      specialMultiplier,
      defense,
      takenType,
      taken,
      buffMultiplier,
      equipmentMultiplier,
      damage,
    }];
  });
  const damagePerHit = parts.reduce((sum, part) => sum + part.damage, 0);
  const damageTotal = damagePerHit * attack.hitCount;
  const hp = effectiveEnemyHp(enemy, newGameCycle);
  const poisePerHit = attack.poiseDamage == null
    ? null
    : effectivePoiseDamage(attack.poiseDamage, newGameCycle);
  const poiseTotal = poisePerHit == null ? null : poisePerHit * attack.hitCount;
  const statusBuildup = statusBuildupFor(attack, catalyst, params, attrs, upgrade);
  const statusResistance = statusBuildup != null
    ? effectiveEnemyStatusResistance(enemy, statusKey(attack.status), newGameCycle)
    : null;
  const status = statusBuildup != null
    ? `${Math.floor(statusBuildup)} ${attack.status}${statusResistance != null ? ` · 抗性 ${Math.round(statusResistance)}` : ''}`
    : '';
  const focusMultiplier = options.focusCostMultiplier
    ? attack.type === '祷告' ? options.focusCostMultiplier.incantation : options.focusCostMultiplier.magic
    : 1;
  const focusCost = attack.staminaCost == null
    ? null
    : attack.staminaCost * (catalyst.staminaMultiplier ?? 1) * focusMultiplier;
  return {
    attack,
    catalyst,
    catalystParams: params,
    parts,
    damagePerHit,
    damageTotal,
    hitsToKill: hp != null && hp > 0 && damageTotal > 0 ? Math.ceil(hp / damageTotal) : null,
    poisePerHit,
    poiseTotal,
    poiseHits: enemy.saDurability != null && enemy.saDurability > 0 && poiseTotal
      ? Math.ceil(enemy.saDurability / poiseTotal)
      : null,
    statusBuildup,
    status,
    focusCost,
    requirementSatisfied: ineffectiveTypes.length === 0,
    ineffectiveTypes,
  };
}

const STATUS_KEYS: Readonly<Record<string, string>> = {
  '毒': 'poison',
  '腐败': 'rot',
  '出血': 'bleed',
  '冻伤': 'frost',
  '睡眠': 'sleep',
  '发狂': 'madness',
  '死亡': 'death',
  '抗死度': 'death',
};

function statusKey(status: string): string {
  return STATUS_KEYS[status] ?? '';
}
