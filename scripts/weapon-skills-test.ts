import {
  SKILL_ATTACKS,
  SKILL_BUFFS,
  SKILL_WEAPONS,
  WAR_ASHES,
} from '../src/renderer/src/data/generated/weapon-skill-data.ts';
import {
  availableSkillsForWeapon,
  estimateSkillAttack,
  resolveSkillKey,
  skillAttackPower,
} from '../src/renderer/src/lib/weapon-skill.ts';
import { weaponPanelAt } from '../src/renderer/src/lib/weapon-ar.ts';
import type { EnemyCombatRow } from '../src/renderer/src/data/generated/combat-data.ts';

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(SKILL_ATTACKS.length === 1_428, '战技表应导出 1,428 条攻击参数');
check(WAR_ASHES.length === 108, '战技表应导出 108 条战灰');
check(SKILL_WEAPONS.length >= 430, '战技表基础武器映射覆盖不足');
check(SKILL_BUFFS.length >= 70, '战技表增益规则覆盖不足');

const moonveil = SKILL_WEAPONS.find((weapon) => weapon.id === 9_060_000);
check(moonveil?.defaultSkill === '隙间月影', '名刀月隐默认战技映射错误');
check(Boolean(moonveil && resolveSkillKey('隙间月影', moonveil) === '隙间月影'), '名刀月隐战技变体解析错误');
check(Boolean(moonveil && availableSkillsForWeapon(moonveil).some((skill) => skill.name === '隙间月影')), '默认战技未进入可选列表');

const attack = SKILL_ATTACKS.find((row) => row.id === 303_400_100);
const attrs = { str: 99, dex: 99, int: 99, fai: 99, arc: 99 } as const;
const panel = weaponPanelAt(attrs, 9_060_000, 10);
check(Boolean(attack && panel), '隙间月影测试数据缺失');
if (attack && panel) {
  const power = skillAttackPower(attrs, 9_060_000, 10, panel.oneHand, attack);
  const enemy = {
    hp: 10_000,
    saDurability: 100,
    defense: { physical: 100, magic: 100, fire: 100, lightning: 100, holy: 100 },
    defenseScale: { physical: 1, magic: 1, fire: 1, lightning: 1, holy: 1 },
    gameClearHpScale: 1.5,
    newGameDefenseScale: { physical: 1.2, magic: 1.2, fire: 1.2, lightning: 1.2, holy: 1.2 },
    damageTaken: { standard: 1, slash: 1, strike: 1, thrust: 1, magic: 1, fire: 1, lightning: 1, holy: 1 },
  } as unknown as EnemyCombatRow;
  const ng = estimateSkillAttack(attrs, 9_060_000, 10, panel.oneHand, moonveil!, attack, enemy);
  const ngPlusTwo = estimateSkillAttack(attrs, 9_060_000, 10, panel.oneHand, moonveil!, attack, enemy, [], false, 2);
  check(
    (ngPlusTwo.hitsToKill ?? 0) > (ng.hitsToKill ?? 0) && (ngPlusTwo.poiseHits ?? 0) > (ng.poiseHits ?? 0),
    'Weapon skill calculation must apply New Game HP and poise scaling',
  );
  check(Math.abs((power.magic ?? 0) - 1_164.8) < 0.01, '隙间月影刀波攻击力应与 Excel 缓存值一致');
}

console.log(`战技数据测试通过：攻击 ${SKILL_ATTACKS.length}，战灰 ${WAR_ASHES.length}，武器 ${SKILL_WEAPONS.length}`);
