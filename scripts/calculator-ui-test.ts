import { readFileSync } from 'node:fs';

const calculator = readFileSync(new URL('../src/renderer/src/features/calculator/index.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');
const spellCalculatorData = readFileSync(new URL('../src/renderer/src/data/generated/spell-calculator-data.ts', import.meta.url), 'utf8');
const weaponSkillData = readFileSync(new URL('../src/renderer/src/data/generated/weapon-skill-data.ts', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(!calculator.includes('formatCompact(chosenEnemy.hp'), '敌人 HP 不应使用万／千等紧凑格式');
check(calculator.includes('formatNumber(hp ?? 0)'), '敌人 HP 应显示完整周目整数');
check(/\.combat-result-grid\s*\{[^}]*grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/s.test(styles), '桌面端五项战斗结果应铺满一整行');
check(calculator.includes('SPELL_CALCULATOR_BUFFS'), '法术页应使用 Excel 提取的增益数据');
check(calculator.includes('selectSpellBuff'), '法术页应支持选择可叠加增益');
check(calculator.includes('addEquippedSpellBonuses'), '法术页应支持读取当前装备的可识别增益');
check(calculator.includes('spellBuffEffectsFor'), '法术页应按元素与专属标签筛选增益');
check(styles.includes('.spell-bonus-config'), '法术增益配置应有独立布局样式');
check((spellCalculatorData.match(/"atkId":/g) ?? []).length === 319, 'Excel 应导出 319 条法术攻击参数');
check((spellCalculatorData.match(/"excel-buff-/g) ?? []).length === 91, 'Excel 应导出 91 条法术增益规则');
check(calculator.includes("'skills'"), '计算器应提供战技模式');
check(calculator.includes('SKILL_ATTACKS'), '战技页应使用 Excel 提取的攻击参数');
check(calculator.includes('weaponScope'), '武器页应支持完整目录与持有范围切换');
check(calculator.includes('newGameCycle') && calculator.includes('模拟周目'), '武器和战技页应提供共享的周目模拟控件');
check(calculator.includes("type EnemyScope = 'boss' | 'all'"), '计算器目标应默认提供 Boss 范围');
check(calculator.includes('TargetCombatSummary'), '武器、战技、法术应复用目标战斗数据摘要');
check(calculator.includes('战斗地点') && calculator.includes('幽影地') && calculator.includes('交界地'), '三类计算应明确选择战斗地点');
check(calculator.includes('本次命中总伤害'), '武器页应直观显示本次命中总伤害');
check(calculator.includes('本次施放伤害') && calculator.includes('selectedSkillAttackId'), '战技页应按选中攻击段显示本次施放伤害');
check(calculator.includes('单次施放总伤害'), '法术页应直观显示单次施放总伤害');
check(calculator.includes("const [combatWorld, setCombatWorld]"), '三类计算应共享交界地/幽影地上下文');
check((weaponSkillData.match(/"specialCorrectionId":/g) ?? []).length === 1428, 'Excel 应导出完整战技攻击参数');
check((calculator.match(/enemy\.nameVariant \|\| enemy\.name/g) ?? []).length >= 2, '敌人下拉应优先显示武器或配饰配置变体名');
check(calculator.includes('enemy.nameVariant || enemy.name'), '敌人详情摘要应优先显示配置变体名');
check(calculator.includes('搜索敌人中文、英文、变体或地区'), '敌人搜索应支持配置变体关键词');
check(calculator.includes('STANDARD_AFFINITY') && calculator.includes('weaponAffinityLabel'), '计算器质变名应使用共享中文映射');
check(!calculator.includes('AFFINITY_ZH.Standard'), '计算器不应再依赖英文后缀推断质变');
check(styles.includes('.target-combat-summary'), 'Boss 战斗数据摘要应有专用布局');
check(!calculator.includes('<details className="target-combat-details" open>'), 'Boss 完整防御与抗性明细应默认收起，避免结果区过于杂乱');

console.log('计算器布局静态测试通过');
