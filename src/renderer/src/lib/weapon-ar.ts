import { ATTACK_ELEMENT_CORRECTS } from '../data/generated/attack-element-correct.ts';
import { CALC_CORRECT_GRAPHS } from '../data/generated/calc-correct-graphs.ts';
import { REINFORCE_TYPES } from '../data/generated/reinforce-types.ts';
import { WEAPON_SCALING } from '../data/generated/weapon-scaling.ts';
import {
  DAMAGE_TYPES,
  SCALING_ATTRS,
  createArCalculator,
  evaluateCalcCorrectGraph,
  type AttackRating,
  type Attributes,
  type DamageType,
} from './ar.ts';
import type { CharacterProfile } from './derive.ts';

const calculator = createArCalculator({
  reinforceTypes: REINFORCE_TYPES,
  attackElementCorrects: ATTACK_ELEMENT_CORRECTS,
  calcCorrectGraphs: CALC_CORRECT_GRAPHS,
});

const scalingById = new Map(WEAPON_SCALING.map((w) => [w.id, w]));
const reinforceById = new Map(REINFORCE_TYPES.map((row) => [row.id, row]));
const attackCorrectById = new Map(ATTACK_ELEMENT_CORRECTS.map((row) => [row.id, row]));
const graphById = new Map(CALC_CORRECT_GRAPHS.map((row) => [row.id, evaluateCalcCorrectGraph(row.stages)]));
const scalingIndex = { str: 0, dex: 1, int: 2, fai: 3, arc: 4 } as const;

export interface WeaponPanel {
  oneHand: AttackRating;
  twoHand: AttackRating;
  unmetRequirements: string[];
}

const ATTR_ZH: Record<string, string> = { str: '力气', dex: '灵巧', int: '智力', fai: '信仰', arc: '感应' };

export const DAMAGE_ZH: Record<string, string> = {
  physical: '物理',
  magic: '魔力',
  fire: '火',
  lightning: '雷电',
  holy: '神圣',
};

/** 任意属性下的武器面板(洗点模拟等复用);无 AR 数据(拳/特殊)返回 null。 */
export function weaponPanelAt(attrs: Attributes, paramId: number, upgrade: number): WeaponPanel | null {
  const scaling = scalingById.get(paramId);
  if (!scaling) return null;

  const unmetRequirements: string[] = [];
  for (const [attr, req] of Object.entries(scaling.requirements)) {
    if (req != null && attrs[attr as keyof Attributes] < req) {
      unmetRequirements.push(`${ATTR_ZH[attr] ?? attr} ${attrs[attr as keyof Attributes]}/${req}`);
    }
  }

  return {
    oneHand: calculator.compute(scaling, attrs, upgrade),
    twoHand: calculator.compute(scaling, attrs, upgrade, { twoHanding: true }),
    unmetRequirements,
  };
}

/** 战技 B 类基础威力使用武器强化与补正曲线，但替换基础攻击和补正修正。 */
export function skillBaseAttackAt(
  attrs: Attributes,
  paramId: number,
  upgrade: number,
  baseAttack: Readonly<Partial<Record<DamageType, number>>>,
  correctionId: number,
  twoHanding = false,
): AttackRating | null {
  const scaling = scalingById.get(paramId);
  if (!scaling) return null;
  const reinforce = reinforceById.get(scaling.reinforceTypeId);
  const level = reinforce?.levels[upgrade];
  const correction = attackCorrectById.get(correctionId < 0 ? scaling.attackElementCorrectId : correctionId);
  if (!level || !correction) return null;

  const effectiveAttrs = twoHanding ? { ...attrs, str: Math.floor(attrs.str * 1.5) } : attrs;
  const damage: Partial<Record<DamageType, number>> = {};
  let total = 0;
  for (const type of DAMAGE_TYPES) {
    const base = baseAttack[type] ?? 0;
    if (base <= 0) continue;
    const graph = graphById.get(scaling.calcCorrectIds[type] ?? 0);
    let multiplier = 1;
    if (graph) {
      const correct = correction.correct[type] ?? {};
      for (const attr of SCALING_ATTRS) {
        const attributeCorrect = correct[attr];
        if (!attributeCorrect) continue;
        const coefficient = attributeCorrect === true ? scaling.scaling[attr] ?? 0 : attributeCorrect;
        const upgradedCoefficient = coefficient * (level.scaling[scalingIndex[attr]] ?? 0);
        const value = Math.max(1, Math.min(148, effectiveAttrs[attr]));
        multiplier += (graph[value] ?? 0) * upgradedCoefficient;
      }
    }
    const reinforceMultiplier = 1 + upgrade * (scaling.reinforceTypeId === 2200 ? 0.3 : 0.12);
    const value = base * reinforceMultiplier * multiplier;
    damage[type] = value;
    total += value;
  }
  return { total, damage, ineffective: false };
}

export function profileAttrs(profile: CharacterProfile): Attributes {
  return {
    str: profile.stats.str,
    dex: profile.stats.dex,
    int: profile.stats.int,
    fai: profile.stats.fai,
    arc: profile.stats.arc,
  };
}

/** 已装备武器(含亲和的 paramId + 强化等级)→ 面板攻击力。 */
export function weaponPanel(profile: CharacterProfile, paramId: number, upgrade: number): WeaponPanel | null {
  return weaponPanelAt(profileAttrs(profile), paramId, upgrade);
}
