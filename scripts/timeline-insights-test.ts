import { analyzeFarming, type TimedSlotSnapshot } from '../src/renderer/src/lib/timeline-insights.ts';
import { displayPlace } from '../src/renderer/src/data/zh/translations.ts';

const timed: TimedSlotSnapshot[] = [
  { t: 0, s: { name: 'test', level: 1, deaths: 0, runesMemory: 0, seconds: 0, gracesLit: 0, bossFlags: [], restedGraceEntityId: 10002955 } },
  { t: 15 * 60000, s: { name: 'test', level: 1, deaths: 0, runesMemory: 80000, seconds: 0, gracesLit: 0, bossFlags: [], restedGraceEntityId: 10002955 } },
];
const result = analyzeFarming(timed);
if (result.routes[0]?.route !== displayPlace('Rampart Tower') || Math.round(result.routes[0].perMinute) !== Math.round(80000 / 15)) {
  throw new Error(`Farming 路线推导异常:${JSON.stringify(result.routes[0])}`);
}
if (!result.intervals[0]?.anomalous) throw new Error('短时间大额卢恩增量未识别为异常 farming 段');
console.log('时间线洞察测试通过');
