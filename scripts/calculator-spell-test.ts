import { SPELL_CALCULATOR_ATTACKS, SPELL_CALCULATOR_CATALYSTS } from '../src/renderer/src/data/generated/spell-calculator-data.ts';
import type { EnemyCombatRow } from '../src/renderer/src/data/generated/combat-data.ts';
import { estimateSpellAttack } from '../src/renderer/src/lib/spell-calculator.ts';

const ELEMENT_FIELDS = ['physical', 'magic', 'fire', 'lightning', 'holy'] as const;
const TAKEN_FIELDS = ['standard', 'slash', 'strike', 'thrust', 'magic', 'fire', 'lightning', 'holy'] as const;
const STATUS_FIELDS = ['poison', 'rot', 'bleed', 'frost', 'sleep', 'madness', 'death'] as const;

function enemyWithMagicDefense(defense: number, taken: number): EnemyCombatRow {
  const defenseMap = Object.fromEntries(ELEMENT_FIELDS.map((key) => [key, defense])) as Record<string, number | null>;
  const damageTaken = Object.fromEntries(TAKEN_FIELDS.map((key) => [key, key === 'magic' ? taken : 1])) as Record<string, number | null>;
  const statusResistance = Object.fromEntries(STATUS_FIELDS.map((key) => [key, 100])) as Record<string, number | null>;
  return {
    kind: 'test',
    bossFlagId: null,
    npcParamId: 1,
    name: '测试敌人',
    nameEn: 'Test Enemy',
    nameVariant: '',
    region: '测试区域',
    hp: 10_000,
    gameClearHpScale: null,
    saDurability: 100,
    defense: defenseMap,
    defenseScale: Object.fromEntries(ELEMENT_FIELDS.map((key) => [key, 1])),
    newGameDefenseScale: Object.fromEntries(ELEMENT_FIELDS.map((key) => [key, 1])),
    damageTaken,
    baseStatusResistance: statusResistance,
    statusResistance,
    newGameStatusScale: Object.fromEntries(STATUS_FIELDS.map((key) => [key, 1])),
    statusImmunity: Object.fromEntries(STATUS_FIELDS.map((key) => [key, false])),
  };
}

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

const attack = SPELL_CALCULATOR_ATTACKS.find((row) => row.name === '帚星');
const catalyst = SPELL_CALCULATOR_CATALYSTS.find((row) => row.name === '母亲杖' && row.kind === '法杖');
check(Boolean(attack), '找不到帚星法术参数');
check(Boolean(catalyst), '找不到母亲杖触媒参数');

const attrs = { str: 99, dex: 99, int: 99, fai: 99, arc: 99 };
const enemy = enemyWithMagicDefense(84, 1.68);
const estimate = estimateSpellAttack(attrs, attack!, catalyst!, 25, enemy);
const magicPart = estimate.parts.find((part) => part.type === 'magic');
check(Boolean(magicPart), '帚星应产生魔力伤害段');
check(Math.abs((magicPart?.attack ?? 0) - 1255.6) < 0.01, `母亲杖 +25 帚星攻击力应为 1255.6，实际 ${magicPart?.attack}`);
check(Math.abs(estimate.damagePerHit - 1898.4672) < 0.01, `防御 84、承伤 1.68 时伤害应为 1898.4672，实际 ${estimate.damagePerHit}`);
check(estimate.hitsToKill === 6, `击杀次数应为 6，实际 ${estimate.hitsToKill}`);

const scaduEstimate = estimateSpellAttack(attrs, attack!, catalyst!, 25, enemy, [], { scaduLevel: 20 });
check(Math.abs(scaduEstimate.damagePerHit - 1898.4672 * 2.05) < 0.05, `幽影树庇佑 +20 应乘 2.05，实际 ${scaduEstimate.damagePerHit}`);

const equippedEstimate = estimateSpellAttack(attrs, attack!, catalyst!, 25, enemy, [], { damageMultipliers: { magic: 1.12 } });
check(Math.abs(equippedEstimate.damagePerHit - 1898.4672 * 1.12) < 0.05, `装备魔力加成应乘 1.12，实际 ${equippedEstimate.damagePerHit}`);
check(Math.abs((equippedEstimate.parts[0]?.equipmentMultiplier ?? 0) - 1.12) < 1e-9, '装备加成列应返回 1.12');

const weakAttrs = { ...attrs, int: 10 };
const ineffective = estimateSpellAttack(weakAttrs, attack!, catalyst!, 25, enemy);
check(!ineffective.requirementSatisfied, '不满足智需求时应标记为属性不足');
check(Math.abs((ineffective.parts[0]?.scaling ?? 0) - 0.6) < 1e-9, `不满足需求时成长应为 0.6，实际 ${ineffective.parts[0]?.scaling}`);

console.log('魔法祷告计算测试通过');
