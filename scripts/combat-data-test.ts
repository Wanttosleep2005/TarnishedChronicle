import { CLEAR_COUNT_SCALING, ENEMY_COMBAT_DATA, SPELL_COMBAT_DATA, WEAPON_COMBAT_ACTIONS } from '../src/renderer/src/data/generated/combat-data.ts';
import { filterCombatEnemies, groupSpellCombatRows, spellCombatDisplayName, spellCombatForName, weaponCombatForId } from '../src/renderer/src/lib/combat-data.ts';

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

const dagger = WEAPON_COMBAT_ACTIONS.find((row) => row.weapon === '匕首');
check(dagger?.actions['单手 轻击 1']?.pvePoise === 3, '匕首单手轻击 PvE 削韧应为 3');
check(dagger?.actions['单手 重击 1']?.pvePoise === 6, '匕首单手重击 PvE 削韧应为 6');
check(dagger?.actions['单手 满蓄力 重击 1']?.pvePoise === 18, '匕首满蓄力重击 PvE 削韧应为 18');
check(dagger?.actions['单手 轻击 1']?.physicalAttackType === '斩击', '匕首轻击应标明斩击类型');
check(Object.keys(dagger?.actions ?? {}).length > 30, '应提取表格中的完整武器动作，而非只保留 17 项');
const weaponActions = WEAPON_COMBAT_ACTIONS.flatMap((weapon) => Object.values(weapon.actions));
check(weaponActions.length >= 24_800, '武器动作提取覆盖率异常');
check(weaponActions.every((action) => action.pvePoise !== null && action.pvePoiseParts.length > 0), '存在未提取的武器 PvE 削韧');

const pebble = spellCombatForName('Glintstone Pebble');
check(pebble?.damageMultipliers.magic === 152, '辉石飞弹魔力攻击倍率应为 152');
check(pebble?.pvePoiseDamage === 3, '辉石飞弹 PvE 削韧应为 3');
check(spellCombatDisplayName('Comet - Charged (AoE)') === '帚星 · 蓄力（范围）', '帚星蓄力范围攻击应完整汉化');
check(spellCombatDisplayName('Glintstone Cometshard - Charged') === '辉石彗星 · 蓄力', '辉石彗星蓄力攻击应完整汉化');
check(SPELL_COMBAT_DATA.every((row) => !/[A-Za-z]/.test(spellCombatDisplayName(row.name))), '所有法术攻击动作显示名都应为中文');
const spellGroups = groupSpellCombatRows(SPELL_COMBAT_DATA);
const glintstoneStars = spellGroups.find((group) => group.name === 'Glintstone Stars');
check(glintstoneStars?.attacks.length === 3, '辉石流星的三条内部命中记录应合并为一个动作');
check(glintstoneStars?.attacks.map((attack) => attack.atkId).join(',') === '40400,40401,40402', '辉石流星命中段应保持原表顺序');
check(spellGroups.find((group) => group.name === 'Glintstone Stars - Charged')?.attacks.length === 3, '辉石流星蓄力动作不应与普通动作合并');
check(spellGroups.length === 370, '法术动作合并后的数量异常');
check(spellGroups.reduce((count, group) => count + group.attacks.length, 0) === SPELL_COMBAT_DATA.length, '法术分组不得遗漏或重复命中记录');
check(spellGroups.every((group) => group.attacks.every((attack) => attack.name === group.name && attack.type === group.type)), '法术分组混入了其他名称或类型');
check(spellGroups.find((group) => group.name === 'Law of Regression')?.attacks.length === 7, '重复 Atk ID 的原表命中记录不应丢失');
check(SPELL_COMBAT_DATA.length === 518, '法术数据行数异常');
check(ENEMY_COMBAT_DATA.length === 2430, '敌人数据行数异常');
check(ENEMY_COMBAT_DATA.every((row) => row.name && row.saDurability !== null), '敌人名称或 SA 耐久缺失');
check(CLEAR_COUNT_SCALING.length === 7, 'ClearCountCorrect must include NG+1 through NG+7');
const ngPlusTwoScaling = CLEAR_COUNT_SCALING[1];
check(
  Math.abs((ngPlusTwoScaling?.hp ?? 0) - 1.1) < 0.0001
    && Math.abs((ngPlusTwoScaling?.defense.physical ?? 0) - 1.025) < 0.0001
    && Math.abs((ngPlusTwoScaling?.poiseDamage ?? 0) - 0.95) < 0.0001,
  'NG+2 ClearCount scaling was extracted incorrectly',
);
const defenseKeys = ['physical', 'magic', 'fire', 'lightning', 'holy'];
const takenKeys = ['standard', 'slash', 'strike', 'thrust', 'magic', 'fire', 'lightning', 'holy'];
const statusKeys = ['poison', 'rot', 'bleed', 'frost', 'sleep', 'madness', 'death'];
check(ENEMY_COMBAT_DATA.every((row) => defenseKeys.every((key) => row.defense[key] !== null && row.defenseScale[key] !== null)), '敌人防御数据覆盖不完整');
check(ENEMY_COMBAT_DATA.every((row) => takenKeys.every((key) => row.damageTaken[key] !== null)), '敌人承伤倍率覆盖不完整');
check(ENEMY_COMBAT_DATA.every((row) => statusKeys.every((key) => row.statusResistance[key] !== null && typeof row.statusImmunity[key] === 'boolean')), '敌人异常抗性覆盖不完整');
const miranda = ENEMY_COMBAT_DATA.find((row) => row.npcParamId === 44_800_930);
check(miranda?.gameClearHpScale === 1.479 && miranda.newGameDefenseScale.physical === 1.18, 'Boss GameClear HP/defense scaling is missing');
check(miranda?.defenseScale.physical === 1.106, '米兰达常驻物理防御倍率应为 1.106');
check(miranda?.damageTaken.slash === 1.4 && miranda.damageTaken.lightning === 0.6, '米兰达承伤倍率缺失');
check(miranda?.statusResistance.poison === 1160 && miranda.statusResistance.frost === 135, '米兰达异常抗性缺失');
check(miranda?.statusImmunity.madness === true && miranda.statusImmunity.poison === false, '米兰达异常免疫标记缺失');
check(ENEMY_COMBAT_DATA.find((row) => row.npcParamId === 20400024)?.nameVariant === '魔法学院年幼魔法学徒-羽毛笔', '羽毛笔配置的敌人变体名缺失');
check(ENEMY_COMBAT_DATA.find((row) => row.npcParamId === 20401024)?.nameVariant === '魔法学院年幼魔法学徒-烛台', '烛台配置的敌人变体名缺失');
check(ENEMY_COMBAT_DATA.find((row) => row.npcParamId === 20402024)?.nameVariant === '魔法学院年幼魔法学徒-羽毛笔-白衣', '白衣羽毛笔配置的敌人变体名缺失');
check(ENEMY_COMBAT_DATA.find((row) => row.npcParamId === 20404024)?.nameVariant === '魔法学院年幼魔法学徒-烛台', '同名敌人在配饰配置不同时应保留独立变体名');
check(miranda?.nameVariant === '', '无配置差异的敌人不应填充变体名');
check(ENEMY_COMBAT_DATA.every((row) => typeof row.nameVariant === 'string'), '敌人变体名字段类型异常');
check(filterCombatEnemies(ENEMY_COMBAT_DATA, '米兰达').some((row) => row.npcParamId === miranda?.npcParamId), '敌人中文搜索失败');
check(filterCombatEnemies(ENEMY_COMBAT_DATA, 'miranda').some((row) => row.npcParamId === miranda?.npcParamId), '敌人英文搜索失败');
check(filterCombatEnemies(ENEMY_COMBAT_DATA, miranda?.region ?? '').some((row) => row.npcParamId === miranda?.npcParamId), '敌人地区搜索失败');
check(filterCombatEnemies(ENEMY_COMBAT_DATA, '羽毛笔').some((row) => row.npcParamId === 20400024), '敌人配置变体名搜索失败');
check(filterCombatEnemies(ENEMY_COMBAT_DATA, '烛台').some((row) => row.npcParamId === 20401024), '敌人配饰变体名搜索失败');
check(weaponCombatForId(1_000_000)?.weapon === '匕首', '武器中文名映射失败');

console.log(`Combat data test passed: weapons ${WEAPON_COMBAT_ACTIONS.length}, spells ${SPELL_COMBAT_DATA.length}, enemies ${ENEMY_COMBAT_DATA.length}`);
