import {
  buildGraceRegionLights,
  findNearestUnlitGrace,
  type MapPin,
} from '../src/renderer/src/lib/worldmap.ts';

function check(condition: boolean, message: string): void {
  if (!condition) throw new Error(message);
}

function gracePin(overrides: Partial<MapPin> = {}): MapPin {
  return {
    kind: 'grace',
    master: 'M00',
    px: 100,
    py: 100,
    name: '测试赐福',
    active: false,
    flagId: 1,
    region: '宁姆格福',
    sourceMapId: 'm60_08_10_02',
    sourceX: 0,
    sourceZ: 0,
    ...overrides,
  };
}

const lights = buildGraceRegionLights([
  gracePin({ active: true, px: 100, py: 120 }),
  gracePin({ active: false, px: 300, py: 320 }),
  gracePin({ active: true, region: '盖利德', px: 800, py: 500 }),
  gracePin({ active: true, region: undefined }),
]);

const limgrave = lights.find((light) => light.region === '宁姆格福');
if (!limgrave) throw new Error('应为存在地区字段的赐福生成区域光脉');
check(limgrave.lit === 1 && limgrave.total === 2, '区域光脉应使用真实点亮数量');
check(limgrave.ratio === 0.5, '区域亮度比例应严格等于点亮比例');
check(limgrave.px === 200 && limgrave.py === 220, '区域光脉中心应由赐福投影坐标计算');
check(!lights.some((light) => light.region === ''), '无地区或无投影的赐福不得伪造区域光脉');

const nearest = findNearestUnlitGrace(
  ['m60_08_10_02'],
  0,
  0,
  [
    gracePin({ active: false, sourceX: 40, sourceZ: 30 }),
    gracePin({ active: false, sourceX: 2, sourceZ: 1, sourceMapId: 'm60_09_10_02' }),
    gracePin({ active: true, sourceX: 1, sourceZ: 1 }),
  ],
);
check(nearest?.pin.sourceX === 40, '最近未点亮赐福只能在同一张存档地图中计算');
check(nearest?.distance === 50, '直线距离应使用同一地图的原始坐标计算');
check(findNearestUnlitGrace(['m10_00_00_00'], 0, 0, [gracePin()]) === null, '无同图未点亮赐福时不应给出路线建议');

console.log('赐福光脉数据测试通过');
