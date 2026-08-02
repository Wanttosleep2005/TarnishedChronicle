import { readFileSync } from 'node:fs';

import { WEAPONS, type Weapon } from '../src/renderer/src/data/generated/weapons.ts';
import { weaponAffinityLabel } from '../src/renderer/src/lib/weapon-ar.ts';

const page = readFileSync(new URL('../src/renderer/src/pages/LoadoutPage.tsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/renderer/src/styles.css', import.meta.url), 'utf8');

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

check(page.includes('const baseId = weapon.id - (weapon.id % 10000);'), '武器目录应按基础型号归并质变。');
check(page.includes('weaponVariants: variants.map'), '武器目录应保留可选择的质变条目。');
check(page.includes('owned: variants.some'), '只看已拥有应识别任一已持有或已装备的质变。');
check(page.includes('<details className="loadout-affinities">'), '质变列表应默认折叠。');
check(page.includes('item.id > 0') && page.includes("Object.values(ARMOR_CATEGORY_BY_SLOT).includes(item.category)"), '防具目录不应包含空部位占位符。');
check(page.includes('!EMPTY_ARMOR_NAMES.has(item.name)'), '防具目录应排除使用正 ID 的 Head、Body、Arms、Legs 空槽占位项。');
check(page.includes('防具部位筛选') && page.includes('ARMOR_FILTER_LABEL'), '防具目录应提供四个部位筛选。');
check(styles.includes('.loadout-weapon-group') && styles.includes('.loadout-affinities'), '武器归并与质变折叠应有专用布局。');
check(/\.loadout-results\s*>\s*\*\s*\{[^}]*flex:\s*0\s+0\s+auto/s.test(styles), '目录结果项必须禁止 flex 收缩，避免列表被压成横线。');
check(page.includes('type="checkbox"') && page.includes('只看已拥有'), '已拥有筛选应使用明确的二元控件。');
check(page.includes("onlyOwned ? item.weaponVariants?.find((variant) => variant.owned) : undefined"), '只看已拥有时，点击武器组应优先装备已拥有的质变。');
check(page.includes('const targetSlot = armorSlotForCategory(item.category);'), '点击防具应按实际部位写入对应槽位。');
check(page.includes('selectCatalogKind(kind)'), '切换装备分类时应同步选择可用槽位。');
check(!page.includes('weapon.name.endsWith(base.name)'), '质变中文名不应依赖英文基础名后缀。');

const celebrantBase = WEAPONS.find((weapon) => weapon.name === "Celebrant's Sickle");
const celebrantHeavy = WEAPONS.find((weapon) => weapon.name === "Celebrant's Heavy Sickle");
const celebrantFlameArt = WEAPONS.find((weapon) => weapon.name === "Celebrant's Flame Art Sickle");
check(Boolean(celebrantBase && celebrantHeavy && weaponAffinityLabel(celebrantHeavy, celebrantBase) === '厚重'), '庆典小镰刀厚重质变应显示中文');
check(Boolean(celebrantBase && celebrantFlameArt && weaponAffinityLabel(celebrantFlameArt, celebrantBase) === '焰术'), '庆典小镰刀焰术质变应显示中文');

const weaponGroups = new Map<number, Weapon[]>();
for (const weapon of WEAPONS) {
  if (weapon.id === 110000 || weapon.name === 'DLC dummy') continue;
  const baseId = weapon.id - (weapon.id % 10000);
  const variants = weaponGroups.get(baseId) ?? [];
  variants.push(weapon);
  weaponGroups.set(baseId, variants);
}
for (const [baseId, variants] of weaponGroups) {
  const base = variants.find((weapon) => weapon.id === baseId) ?? variants[0];
  for (const variant of variants) {
    check(!/[A-Za-z]/.test(weaponAffinityLabel(variant, base)), `${variant.name} 的质变中文名仍包含英文`);
  }
}

console.log('配装器目录静态测试通过');
