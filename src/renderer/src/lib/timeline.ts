import type { HistorySnapshot } from '../../../shared/contracts';
import { bossDisplayByFlagId } from './derive.ts';
import { formatCompact } from './format.ts';

export interface TimelineEntry {
  t: number;
  /** 距上个快照超过 90 分钟,视为新的游玩时段。 */
  newSession: boolean;
  bosses: string[];
  parts: string[];
}

/** 相邻快照差分 → 战报(最新在前)。 */
export function buildEvents(history: HistorySnapshot[], slotIndex: number): TimelineEntry[] {
  const out: TimelineEntry[] = [];
  for (let i = 1; i < history.length; i++) {
    const prev = history[i - 1].slots[slotIndex];
    const cur = history[i].slots[slotIndex];
    if (!prev || !cur) continue;
    if (prev.name !== cur.name) {
      out.push({ t: history[i].t, newSession: true, bosses: [], parts: [`角色「${cur.name}」开始记录`] });
      continue;
    }
    const gapMinutes = (history[i].t - history[i - 1].t) / 60000;
    const newSession = gapMinutes > 90;
    const prevSet = new Set(prev.bossFlags);
    const bosses = cur.bossFlags
      .filter((f) => !prevSet.has(f))
      .map((f) => bossDisplayByFlagId.get(f) ?? `未知强敌 #${f}`);

    const parts: string[] = [];
    if (cur.level !== prev.level) parts.push(`等级 ${prev.level} → ${cur.level}`);
    const deaths = cur.deaths - prev.deaths;
    if (deaths > 0) parts.push(`死亡 +${deaths}`);
    const graces = cur.gracesLit - prev.gracesLit;
    if (graces > 0) parts.push(`点亮赐福 +${graces}`);
    const runes = cur.runesMemory - prev.runesMemory;
    if (runes > 0) parts.push(`获得卢恩 ${formatCompact(runes)}`);

    if (bosses.length === 0 && parts.length === 0 && !newSession) continue;
    out.push({ t: history[i].t, newSession, bosses, parts });
  }
  return out.reverse();
}

export function eventToText(entry: TimelineEntry): string {
  return [...entry.bosses.map((b) => `击败了${b}`), ...entry.parts].join('、');
}
