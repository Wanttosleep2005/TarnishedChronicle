import { readFileSync } from 'node:fs';

const calculator = readFileSync(new URL('../src/renderer/src/features/calculator/index.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(!calculator.includes('formatCompact(chosenEnemy.hp'), '敌人 HP 不应使用万／千等紧凑格式');
check(calculator.includes('formatNumber(chosenEnemy.hp'), '敌人 HP 应显示完整整数');
check(/\.combat-result-grid\s*\{[^}]*grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/s.test(styles), '桌面端五项战斗结果应铺满一整行');

console.log('计算器布局静态测试通过');
