import { readFileSync } from 'node:fs';

import { WEAPONS, type Weapon } from '../src/renderer/src/data/generated/weapons.ts';
import { weaponAffinityLabel } from '../src/renderer/src/lib/weapon-ar.ts';
import {
  WHETBLADE_GOODS_IDS,
  affinityAvailableForSave,
  whetbladeNameForAffinity,
} from '../src/renderer/src/lib/weapon-whetblades.ts';

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
check(page.includes("onlyOwned ? item.weaponVariants?.find((variant) => variant.owned && variant.available) : undefined"), '只看已拥有时，点击武器组应优先装备实际持有且当前砥石可用的质变。');
check(page.includes('const targetSlot = armorSlotForCategory(item.category);'), '点击防具应按实际部位写入对应槽位。');
check(page.includes('selectCatalogKind(kind)'), '切换装备分类时应同步选择可用槽位。');
check(!page.includes('weapon.name.endsWith(base.name)'), '质变中文名不应依赖英文基础名后缀。');
check(page.includes('affinityAvailableForSave(weapon.id - base.id, profile.ownedGoodsIds)'), '武器质变可用性应按当前存档砥石刀判断。');
check(page.includes('variant.available'), '武器质变应区分可用性与实际持有。');
check(page.includes('<small className="is-missing">未拥有</small>'), '缺少砥石刀对应的质变应显示未拥有。');

const allWhetblades = new Set<number>(Object.values(WHETBLADE_GOODS_IDS));
const affinityOffsets = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
check(affinityOffsets.every((offset) => affinityAvailableForSave(offset, allWhetblades)), '拥有全部砥石刀时应解锁全部质变。');
check(affinityOffsets.every((offset) => !affinityAvailableForSave(offset, new Set())), '没有任何砥石刀时所有质变都不可用。');

const withoutSanctified = new Set<number>([...allWhetblades].filter((id) => id !== 8972));
check(!affinityAvailableForSave(600, withoutSanctified) && !affinityAvailableForSave(700, withoutSanctified), '缺少神圣砥石刀时神圣、雷电质变应不可用。');
check(affinityAvailableForSave(100, withoutSanctified) && affinityAvailableForSave(800, withoutSanctified), '缺少神圣砥石刀不应影响其他砥石质变。');

const withoutBlack = new Set<number>([...allWhetblades].filter((id) => id !== 8974));
check(!affinityAvailableForSave(1000, withoutBlack) && !affinityAvailableForSave(1100, withoutBlack) && !affinityAvailableForSave(1200, withoutBlack), '缺少漆黑砥石刀时神秘、血、毒质变应不可用。');

const withoutWhetstoneKnife = new Set<number>([...allWhetblades].filter((id) => id !== 8590));
check(!affinityAvailableForSave(0, withoutWhetstoneKnife), '缺少砥石小刀时标准质变应不可用。');
check(whetbladeNameForAffinity(600) === '神圣砥石刀' && whetbladeNameForAffinity(800) === '辉石砥石刀', '质变应能对应到砥石刀中文名。');

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
