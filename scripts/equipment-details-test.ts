import { readFileSync } from 'node:fs';

import { ARMOR } from '../src/renderer/src/data/generated/armor.ts';
import { ASHES_OF_WAR } from '../src/renderer/src/data/generated/ashes-of-war.ts';
import { SPELLS } from '../src/renderer/src/data/generated/spells.ts';
import { TALISMANS } from '../src/renderer/src/data/generated/talismans.ts';
import { WEAPONS } from '../src/renderer/src/data/generated/weapons.ts';
import { zhItemTextByKind } from '../src/renderer/src/data/zh/translations.ts';
import {
  weaponAffinityLabel,
  weaponScalingGradeChanges,
  weaponScalingGradesAt,
} from '../src/renderer/src/lib/weapon-ar.ts';

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

const sourceSets = [
  ['weapon', WEAPONS],
  ['armor', ARMOR],
  ['talisman', TALISMANS],
  ['aow', ASHES_OF_WAR],
  ['spell', SPELLS],
] as const;

for (const [kind, records] of sourceSets) {
  for (const record of records.filter((entry) => entry.description.length > 0 && !entry.name.startsWith('[ERROR]'))) {
    const text = zhItemTextByKind(kind, record.id);
    check(Boolean(text?.description.length), `${kind} ${record.id} 缺少官方简中说明`);
  }
}

const derive = readFileSync(new URL('../src/renderer/src/lib/derive.ts', import.meta.url), 'utf8');
const page = readFileSync(new URL('../src/renderer/src/pages/EquipmentPage.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

check(derive.includes('summary: string | null') && derive.includes('description: readonly string[]'), 'ResolvedItem 应保留摘要与完整说明');
check(derive.includes("resolvedItemText('spell', id, spell ?? good)"), '记忆魔法应使用法术专用的官方文本');
check(derive.includes('ashOfWarItem: ResolvedItem | null'), '装备条目应保留已装备战灰的完整数据');
check(page.includes('ItemDetailDialog') && page.includes('createPortal(') && page.includes('selectedItemKey') && page.includes('equippedAshes'), '装备页应以覆盖式详情窗口展示选中的物品与已装备战灰');
check(page.includes("event.key === 'Escape'") && page.includes('item-dialog-backdrop') && page.includes('item-dialog-close'), '覆盖式详情窗口应支持 Esc、遮罩和关闭按钮退出');
check(styles.includes('.item-dialog-backdrop') && styles.includes('.item-dialog') && styles.includes('.equip-ash-select'), '覆盖式详情窗口与战灰入口应有专用样式');
check(page.includes('weaponScalingGradeChanges') && page.includes('WeaponScalingDetails'), '武器详情应展示强化补正变化');
check(styles.includes('.weapon-scaling-detail') && styles.includes('.weapon-scaling-changes'), '武器补正详情应有专用布局');

check(weaponScalingGradesAt(1_000_000, 0)?.str === 'D' && weaponScalingGradesAt(1_000_000, 0)?.dex === 'C', '标准匕首 +0 补正应为力气 D / 灵巧 C');
check(weaponScalingGradesAt(1_000_000, 25)?.dex === 'B', '标准匕首 +25 灵巧补正应升到 B');
check(weaponScalingGradesAt(1_000_100, 0)?.str === 'B' && weaponScalingGradesAt(1_000_100, 25)?.str === 'A', '厚重匕首补正应从 B 升到 A');
const daggerChanges = weaponScalingGradeChanges(1_000_000);
check(daggerChanges?.[0]?.upgrade === 0 && daggerChanges?.[daggerChanges.length - 1]?.upgrade === 25, '补正变化应覆盖 +0 到满强化');

const celebrantBase = WEAPONS.find((weapon) => weapon.name === "Celebrant's Sickle");
const celebrantHeavy = WEAPONS.find((weapon) => weapon.name === "Celebrant's Heavy Sickle");
const celebrantFlameArt = WEAPONS.find((weapon) => weapon.name === "Celebrant's Flame Art Sickle");
check(Boolean(celebrantBase && celebrantHeavy && weaponAffinityLabel(celebrantHeavy, celebrantBase) === '厚重'), '庆典小镰刀厚重质变应显示中文');
check(Boolean(celebrantBase && celebrantFlameArt && weaponAffinityLabel(celebrantFlameArt, celebrantBase) === '焰术'), '庆典小镰刀焰术质变应显示中文');

console.log('装备与魔法详情契约测试通过');
