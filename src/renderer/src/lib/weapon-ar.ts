import { ATTACK_ELEMENT_CORRECTS } from '../data/generated/attack-element-correct.ts';
import { CALC_CORRECT_GRAPHS } from '../data/generated/calc-correct-graphs.ts';
import { REINFORCE_TYPES } from '../data/generated/reinforce-types.ts';
import { WEAPON_SCALING } from '../data/generated/weapon-scaling.ts';
import { createArCalculator, type AttackRating, type Attributes } from './ar.ts';
import type { CharacterProfile } from './derive.ts';

const calculator = createArCalculator({
  reinforceTypes: REINFORCE_TYPES,
  attackElementCorrects: ATTACK_ELEMENT_CORRECTS,
  calcCorrectGraphs: CALC_CORRECT_GRAPHS,
});

const scalingById = new Map(WEAPON_SCALING.map((w) => [w.id, w]));

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
