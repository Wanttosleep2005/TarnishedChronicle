import { launcherVisibility } from '../src/renderer/src/lib/launcherVisibility.ts';

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(JSON.stringify(launcherVisibility([], [])) === JSON.stringify({ sts2: false, ds3: false }), '无额外存档时只能显示艾尔登法环');
check(JSON.stringify(launcherVisibility([{}], [])) === JSON.stringify({ sts2: true, ds3: false }), '仅有 STS2 存档时应显示 STS2');
check(JSON.stringify(launcherVisibility([], [{}])) === JSON.stringify({ sts2: false, ds3: true }), '仅有黑暗之魂 3 存档时应显示黑暗之魂 3');
check(JSON.stringify(launcherVisibility([{}], [{}])) === JSON.stringify({ sts2: true, ds3: true }), '两种存档都存在时应同时显示');

console.log('启动页游戏可见性测试通过');
