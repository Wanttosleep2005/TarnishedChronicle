import { estimateEnemyHit } from '../src/renderer/src/lib/build-insights.ts';
import type { AttackRating } from '../src/renderer/src/lib/ar.ts';
import type { EnemyCombatRow, WeaponCombatAction } from '../src/renderer/src/data/generated/combat-data.ts';

const attack: AttackRating = { total: 500, damage: { physical: 500 }, ineffective: false };
const action: WeaponCombatAction = { damageMultiplier: 100, pvePoise: 25 };
const enemy = {
  hp: 1000,
  saDurability: 100,
  defense: { physical: 100 },
  damageTaken: { physical: 1 },
} as unknown as EnemyCombatRow;
const result = estimateEnemyHit(enemy, attack, action);
if (Math.round(result.damage) !== 400 || result.hitsToKill !== 3 || result.poiseHits !== 4) {
  throw new Error(`敌人实战换算异常:${JSON.stringify(result)}`);
}
console.log('Build 实战换算测试通过');
