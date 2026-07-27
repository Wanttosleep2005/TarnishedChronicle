/** 对局摘要(summaries)上的共享聚合,总览页与尖塔军师共用同一套口径。 */
import { bareId, looseId, type Sts2Run } from './sts2.ts';

export interface RateRow {
  id: string;
  games: number;
  winrate: number;
}

/** 遗物胜率:按局去重(任一玩家携带即算)。 */
export function relicWinRates(summaries: ReadonlyMap<string, Sts2Run>, minGames = 5): RateRow[] {
  const agg = new Map<string, { games: number; wins: number }>();
  for (const run of summaries.values()) {
    const carried = new Set<string>();
    for (const p of run.players ?? []) {
      if (!p || !Array.isArray(p.relics)) continue;
      for (const r of p.relics) {
        const id = looseId(r);
        if (id) carried.add(bareId(id));
      }
    }
    for (const id of carried) {
      const a = agg.get(id) ?? { games: 0, wins: 0 };
      a.games += 1;
      if (run.win) a.wins += 1;
      agg.set(id, a);
    }
  }
  return [...agg]
    .map(([id, a]) => ({ id, games: a.games, winrate: a.wins / a.games }))
    .filter((r) => r.games >= minGames);
}

export interface PickRow {
  id: string;
  offered: number;
  rate: number;
}

/** 卡牌真实选取率(三选一记录聚合)。 */
export function cardPickRates(summaries: ReadonlyMap<string, Sts2Run>, minOffered = 10): PickRow[] {
  const agg = new Map<string, { offered: number; picked: number }>();
  for (const run of summaries.values()) {
    for (const act of run.map_point_history ?? []) {
      if (!Array.isArray(act)) continue;
      for (const node of act) {
        for (const ps of node?.player_stats ?? []) {
          for (const c of ps?.card_choices ?? []) {
            const id = looseId(c);
            if (!id) continue;
            const bare = bareId(id);
            const a = agg.get(bare) ?? { offered: 0, picked: 0 };
            a.offered += 1;
            if (c.was_picked) a.picked += 1;
            agg.set(bare, a);
          }
        }
      }
    }
  }
  return [...agg]
    .map(([id, a]) => ({ id, offered: a.offered, rate: a.picked / a.offered }))
    .filter((r) => r.offered >= minOffered);
}

/** 终结整局的凶手计数(败局 killed_by_encounter)。 */
export function killerCounts(summaries: ReadonlyMap<string, Sts2Run>): [string, number][] {
  const agg = new Map<string, number>();
  for (const run of summaries.values()) {
    const k = run.killed_by_encounter;
    if (run.win || typeof k !== 'string' || k.startsWith('NONE')) continue;
    agg.set(k, (agg.get(k) ?? 0) + 1);
  }
  return [...agg].sort((a, b) => b[1] - a[1]);
}

export interface ComboRow {
  characters: string[];
  games: number;
  wins: number;
}

/** 联机搭档组合(>1 玩家的局,按角色组合聚合)。 */
export function coopCombos(summaries: ReadonlyMap<string, Sts2Run>): ComboRow[] {
  const agg = new Map<string, ComboRow>();
  for (const run of summaries.values()) {
    const chars = (run.players ?? [])
      .filter((p) => p && typeof p.character === 'string')
      .map((p) => p.character);
    if (chars.length < 2) continue;
    const sorted = [...chars].sort();
    const key = sorted.join('+');
    const row = agg.get(key) ?? { characters: sorted, games: 0, wins: 0 };
    row.games += 1;
    if (run.win) row.wins += 1;
    agg.set(key, row);
  }
  return [...agg.values()].sort((a, b) => b.games - a.games);
}
