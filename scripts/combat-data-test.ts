import { ENEMY_COMBAT_DATA, SPELL_COMBAT_DATA, WEAPON_COMBAT_ACTIONS } from '../src/renderer/src/data/generated/combat-data.ts';
import { spellCombatForName, weaponCombatForId } from '../src/renderer/src/lib/combat-data.ts';

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

const dagger = WEAPON_COMBAT_ACTIONS.find((row) => row.weapon === '匕首');
check(dagger?.actions['单手 轻击 1']?.pvePoise === 3, '匕首单手轻击 PvE 削韧应为 3');
check(dagger?.actions['单手 重击 1']?.pvePoise === 6, '匕首单手重击 PvE 削韧应为 6');
check(dagger?.actions['单手 满蓄力 重击 1']?.pvePoise === 18, '匕首满蓄力重击 PvE 削韧应为 18');

const pebble = spellCombatForName('Glintstone Pebble');
check(pebble?.damageMultipliers.magic === 152, '辉石飞弹魔力攻击倍率应为 152');
check(pebble?.pvePoiseDamage === 3, '辉石飞弹 PvE 削韧应为 3');
check(SPELL_COMBAT_DATA.length >= 500, '法术数据行数异常');
check(ENEMY_COMBAT_DATA.length >= 2000, '敌人数据行数异常');
check(ENEMY_COMBAT_DATA.every((row) => row.name && row.saDurability !== null), '敌人名称或 SA 耐久缺失');
check(weaponCombatForId(1_000_000)?.weapon === '匕首', '武器中文名映射失败');

console.log(`Combat data test passed: weapons ${WEAPON_COMBAT_ACTIONS.length}, spells ${SPELL_COMBAT_DATA.length}, enemies ${ENEMY_COMBAT_DATA.length}`);
