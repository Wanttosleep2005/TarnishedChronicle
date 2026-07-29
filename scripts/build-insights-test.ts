import { damageAfterDefense, estimateEnemyHit } from '../src/renderer/src/lib/build-insights.ts';
import type { AttackRating } from '../src/renderer/src/lib/ar.ts';
import type { EnemyCombatRow, WeaponCombatAction } from '../src/renderer/src/data/generated/combat-data.ts';

const attack: AttackRating = { total: 500, damage: { physical: 500 }, ineffective: false };
const action: WeaponCombatAction = {
  damageMultiplier: 100,
  damageMultiplierParts: [100],
  damageMultiplierText: '100',
  pvePoise: 25,
  pvePoiseParts: [25],
  pvePoiseText: '25',
  physicalAttackType: '斩击',
  physicalAttackTypes: ['斩击'],
};
const enemy = {
  hp: 1000,
  saDurability: 100,
  defense: { physical: 100 },
  defenseScale: { physical: 1.1 },
  damageTaken: { standard: 1, slash: 0.8 },
} as unknown as EnemyCombatRow;
const result = estimateEnemyHit(enemy, attack, action);
if (Math.round(damageAfterDefense(100, 800)) !== 10 || Math.round(damageAfterDefense(100, 100)) !== 40 || Math.round(damageAfterDefense(250, 100)) !== 175 || Math.round(damageAfterDefense(800, 100)) !== 720) {
  throw new Error('攻防比边界值与威力表公式不一致');
}
if (Math.round(result.damage) !== 328 || result.hitsToKill !== 4 || result.poiseHits !== 4) {
  throw new Error(`敌人实战换算异常:${JSON.stringify(result)}`);
}
console.log('Build 实战换算测试通过');
