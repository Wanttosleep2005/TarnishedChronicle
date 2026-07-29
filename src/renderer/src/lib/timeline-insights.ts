import { BOSSES } from '../data/generated/bosses.ts';
import { displayPlace } from '../data/zh/translations.ts';
import type { SlotSnapshot } from '../../../shared/contracts';
import { graceForEntityId } from './derive.ts';

export interface TimedSlotSnapshot {
  t: number;
  s: SlotSnapshot;
}

export interface FarmingInterval {
  t: number;
  route: string;
  runeGain: number;
  minutes: number;
  perMinute: number;
  anomalous: boolean;
}

export interface FarmingRoute {
  route: string;
  runeGain: number;
  minutes: number;
  perMinute: number;
  sessions: number;
  spikes: number;
}

export interface FarmingAnalysis {
  intervals: FarmingInterval[];
  routes: FarmingRoute[];
}

function routeFor(snapshot: SlotSnapshot): string {
  const grace = snapshot.restedGraceEntityId === undefined ? undefined : graceForEntityId(snapshot.restedGraceEntityId);
  return grace ? displayPlace(grace.name) : '未识别地点';
}

function median(values: number[]): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)] ?? 0;
}

export function analyzeFarming(timed: readonly TimedSlotSnapshot[]): FarmingAnalysis {
  const candidates: Omit<FarmingInterval, 'anomalous'>[] = [];
  for (let i = 1; i < timed.length; i += 1) {
    const previous = timed[i - 1];
    const current = timed[i];
    const minutes = (current.t - previous.t) / 60000;
    const runeGain = current.s.runesMemory - previous.s.runesMemory;
    if (!Number.isFinite(minutes) || minutes <= 0 || minutes > 180 || runeGain < 1000) continue;
    candidates.push({
      t: current.t,
      route: routeFor(current.s),
      runeGain,
      minutes,
      perMinute: runeGain / minutes,
    });
  }

  const baseline = candidates.length > 1 ? median(candidates.map((item) => item.perMinute)) : 0;
  const intervals = candidates.map((item) => ({
    ...item,
    anomalous: item.runeGain >= 10000 && (baseline === 0 ? item.perMinute >= 1000 : item.perMinute >= baseline * 1.5),
  }));
  const byRoute = new Map<string, FarmingRoute>();
  for (const interval of intervals) {
    const row = byRoute.get(interval.route) ?? { route: interval.route, runeGain: 0, minutes: 0, perMinute: 0, sessions: 0, spikes: 0 };
    row.runeGain += interval.runeGain;
    row.minutes += interval.minutes;
    row.sessions += 1;
    if (interval.anomalous) row.spikes += 1;
    row.perMinute = row.runeGain / row.minutes;
    byRoute.set(interval.route, row);
  }
  return {
    intervals: intervals.sort((a, b) => b.t - a.t),
    routes: [...byRoute.values()].sort((a, b) => b.perMinute - a.perMinute),
  };
}

const ENDING_BOSS_FLAGS = new Set(
  BOSSES.filter((boss) => /Elden Beast|Radagon of the Golden Order|Godfrey, First Elden Lord/i.test(boss.name ?? '')).map(
    (boss) => boss.defeatFlagId,
  ),
);

export interface JourneyCycle {
  cycle: number;
  start: number;
  end: number;
  durationMinutes: number;
  deaths: number;
  bosses: string[];
  completed: boolean;
}

export function detectJourneyCycles(timed: readonly TimedSlotSnapshot[]): JourneyCycle[] {
  if (timed.length === 0) return [];
  const cycles: JourneyCycle[] = [];
  let startIndex = 0;
  let cycleNumber = 1;
  for (let i = 1; i < timed.length; i += 1) {
    const previous = new Set(timed[i - 1].s.bossFlags);
    const added = timed[i].s.bossFlags.filter((flag) => !previous.has(flag));
    if (!added.some((flag) => ENDING_BOSS_FLAGS.has(flag))) continue;
    cycles.push(makeCycle(timed, startIndex, i, cycleNumber));
    startIndex = i;
    cycleNumber += 1;
  }
  cycles.push(makeCycle(timed, startIndex, timed.length - 1, cycleNumber));
  return cycles;
}

function makeCycle(timed: readonly TimedSlotSnapshot[], startIndex: number, endIndex: number, cycle: number): JourneyCycle {
  const start = timed[startIndex];
  const end = timed[endIndex];
  const baseline = new Set(start.s.bossFlags);
  const bosses = end.s.bossFlags
    .filter((flag) => !baseline.has(flag))
    .map((flag) => BOSSES.find((boss) => boss.defeatFlagId === flag)?.name ?? `Boss #${flag}`);
  return {
    cycle,
    start: start.t,
    end: end.t,
    durationMinutes: Math.max(0, (end.t - start.t) / 60000),
    deaths: Math.max(0, end.s.deaths - start.s.deaths),
    bosses,
    completed: end.s.bossFlags.some((flag) => ENDING_BOSS_FLAGS.has(flag)),
  };
}
