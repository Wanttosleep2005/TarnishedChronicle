export type RegionWorld =
  | 'lands-between-surface'
  | 'lands-between-underground'
  | 'lands-between-special'
  | 'shadow-surface'
  | 'shadow-depths'
  | 'other';

export interface RegionWorldDefinition {
  key: RegionWorld;
  label: string;
  order: number;
}

export interface RegionDefinition extends RegionWorldDefinition {
  region: string;
  regionOrder: number;
}

export const REGION_WORLDS: readonly RegionWorldDefinition[] = [
  { key: 'lands-between-surface', label: '交界地 · 地表', order: 0 },
  { key: 'lands-between-underground', label: '交界地 · 地下', order: 1 },
  { key: 'lands-between-special', label: '交界地 · 特殊区域', order: 2 },
  { key: 'shadow-surface', label: '幽影之地 · 地表', order: 3 },
  { key: 'shadow-depths', label: '幽影之地 · 地下与特殊区域', order: 4 },
  { key: 'other', label: '其他区域', order: 99 },
] as const;

const WORLD_BY_KEY = new Map(REGION_WORLDS.map((world) => [world.key, world]));

function regions(world: RegionWorld, names: readonly string[]): RegionDefinition[] {
  const definition = WORLD_BY_KEY.get(world)!;
  return names.map((region, regionOrder) => ({ ...definition, region, regionOrder }));
}

/**
 * 世界地图浏览顺序：由南至北；相近纬度按由东至西排列。
 * 这里同时覆盖赐福和 NPC 任务当前阶段使用的全部地区名称。
 */
export const REGION_CATALOG: readonly RegionDefinition[] = [
  ...regions('lands-between-surface', [
    '啜泣半岛',
    '宁姆格福',
    '盖利德',
    '艾奥尼亚沼泽',
    '桂奥尔龙墓',
    '风暴山丘',
    '史东薇尔城',
    '湖之利耶尼亚',
    '魔法学院雷亚卢卡利亚',
    '月光祭坛',
    '彼鲁姆大道',
    '古遗迹断崖',
    '亚坛高原',
    '格密尔火山',
    '火山官邸',
    '王城外围',
    '王城罗德尔',
    '禁域',
    '巨人山顶',
    '火焰之巅',
    '化圣雪原',
    '米凯拉的圣树',
    '“圣树分枝”艾布雷菲尔',
  ]),
  ...regions('lands-between-underground', [
    '希芙拉河',
    '“永恒之城”诺克隆恩',
    '安瑟尔河',
    '安瑟尔河主流',
    '腐败湖',
    '深根底层',
    '弃置恶兆的地底',
    '蒙格温王朝',
  ]),
  ...regions('lands-between-special', [
    '漂流墓地',
    '圆桌厅堂',
    '石舞台',
    '逐渐崩毁的法姆·亚兹拉',
    '灰城罗德尔',
  ]),
  ...regions('shadow-surface', [
    '墓地平原',
    '“塔之镇”贝瑞特',
    '恩希斯城',
    '幽影亚坛',
    '幽影城',
    '幽影城（教区）',
    '物种保藏库',
    '劳弗下方',
    '劳弗古遗迹',
    '望影露台',
    '青蓝海岸',
    '卡罗隐藏墓地',
    '尖刺山的山脚',
    '尖刺山',
  ]),
  ...regions('shadow-depths', [
    '石棺大洞',
    '谷底森林',
    '米德拉府邸',
    '艾尼尔·伊利姆',
  ]),
] as const;

const REGION_BY_NAME = new Map(REGION_CATALOG.map((region) => [region.region, region]));
const REGION_ALIASES = new Map([
  ['永恒之城诺克隆恩', '“永恒之城”诺克隆恩'],
  ['圣树分枝艾布雷菲尔', '“圣树分枝”艾布雷菲尔'],
]);
const OTHER_WORLD = WORLD_BY_KEY.get('other')!;

export function regionDefinition(region: string): RegionDefinition {
  return (
    REGION_BY_NAME.get(REGION_ALIASES.get(region) ?? region) ?? {
      ...OTHER_WORLD,
      region,
      regionOrder: Number.MAX_SAFE_INTEGER,
    }
  );
}

export function compareRegions(left: string, right: string): number {
  const a = regionDefinition(left);
  const b = regionDefinition(right);
  return a.order - b.order || a.regionOrder - b.regionOrder || a.region.localeCompare(b.region, 'zh-CN');
}

export function visibleWorldsForRegions(regionsToShow: Iterable<string>): RegionWorldDefinition[] {
  const keys = new Set<RegionWorld>();
  for (const region of regionsToShow) keys.add(regionDefinition(region).key);
  return REGION_WORLDS.filter((world) => keys.has(world.key));
}
