import { useMemo, useState } from 'react';
import { Card, PageHead } from '../components/ui.tsx';
import { StatRadar } from '../components/ds3-widgets.tsx';
import { formatPlaytime } from '../lib/format.ts';
import { DS3_STAT_ZH, buildArchetype, formatSouls, soulCostRange } from '../lib/ds3.ts';
import { useDs3 } from '../lib/ds3-context.tsx';

export function Ds3ComparePage() {
  const { characters } = useDs3();
  const withStats = characters.filter((c) => c.stats);
  const [pick, setPick] = useState<number[]>([]);

  const economy = useMemo(
    () =>
      characters.map((c) => {
        const levelSpent = soulCostRange(1, c.level);
        const held = c.soulsHeld ?? 0;
        const other = Math.max(0, c.totalSouls - levelSpent - held);
        return { ...c, levelSpent, other, levelPct: c.totalSouls > 0 ? levelSpent / c.totalSouls : 0 };
      }),
    [characters],
  );

  const toggle = (slot: number) => {
    setPick((p) => (p.includes(slot) ? p.filter((s) => s !== slot) : [...p.slice(-1), slot]));
  };
  const picked = withStats.filter((c) => pick.includes(c.slot));

  return (
    <div className="page">
      <PageHead title="不死人对比" sub="全角色横评 · 点选两名角色叠加雷达" />

      <Card title="名册横评">
        <table className="tbl">
          <thead>
            <tr>
              <th></th>
              <th>角色</th>
              <th className="num" style={{ textAlign: 'right' }}>等级</th>
              <th>流派</th>
              <th className="num" style={{ textAlign: 'right' }}>时长</th>
              <th className="num" style={{ textAlign: 'right' }}>累计获魂</th>
              {DS3_STAT_ZH.map((s) => (
                <th key={s.key} className="num" style={{ textAlign: 'right', fontSize: 10.5 }}>{s.zh.slice(0, 2)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {characters.map((c) => {
              const best = c.stats
                ? Math.max(...DS3_STAT_ZH.map((s) => c.stats![s.key]))
                : 0;
              return (
                <tr key={c.slot} style={{ cursor: c.stats ? 'pointer' : 'default', background: pick.includes(c.slot) ? 'rgba(216,130,60,0.08)' : undefined }} onClick={() => c.stats && toggle(c.slot)}>
                  <td style={{ width: 24 }}>{c.stats ? (pick.includes(c.slot) ? '◉' : '○') : ''}</td>
                  <td style={{ color: 'var(--gold-2)' }}>{c.name}</td>
                  <td className="num">{c.level}</td>
                  <td style={{ fontSize: 11.5 }}>{c.stats ? buildArchetype(c.stats) : '—'}</td>
                  <td className="num">{formatPlaytime(c.playtimeSec)}</td>
                  <td className="num">{formatSouls(c.totalSouls)}</td>
                  {DS3_STAT_ZH.map((s) => {
                    const v = c.stats?.[s.key];
                    return (
                      <td key={s.key} className="num" style={{ color: v !== undefined && v === best ? 'var(--gold)' : undefined, fontSize: 11.5 }}>
                        {v ?? '—'}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {picked.length > 0 && (
        <Card title={`雷达对比:${picked.map((c) => c.name).join(' vs ')}`}>
          <div className="row" style={{ justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
            {picked.map((c, i) => (
              <div key={c.slot} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 12.5, color: i === 0 ? 'var(--gold-2)' : 'var(--azure)', marginBottom: 4 }}>
                  {c.name} · Lv{c.level}
                </div>
                <StatRadar stats={c.stats!} size={230} max={Math.max(60, ...picked.flatMap((p) => DS3_STAT_ZH.map((s) => p.stats![s.key])))} />
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card title="灵魂经济学" hint="累计获魂 = 升级消耗 + 当前持有 + 其他(装备/道具/丢失)">
        {economy.map((c) => (
          <div key={c.slot} style={{ marginBottom: 12 }}>
            <div className="row" style={{ fontSize: 12, marginBottom: 4 }}>
              <span style={{ color: 'var(--gold-2)' }}>{c.name}</span>
              <span style={{ color: 'var(--faint)' }}>升级花费 {formatSouls(c.levelSpent)}({Math.round(c.levelPct * 100)}%)</span>
              <span className="spacer" />
              <span style={{ color: 'var(--muted)' }}>{formatSouls(c.totalSouls)}</span>
            </div>
            <div style={{ display: 'flex', height: 9, borderRadius: 5, overflow: 'hidden', background: 'var(--panel-3)' }}>
              <div style={{ width: `${c.levelPct * 100}%`, background: 'var(--gold)' }} title="升级消耗" />
              <div
                style={{ width: `${c.totalSouls > 0 ? ((c.soulsHeld ?? 0) / c.totalSouls) * 100 : 0}%`, background: 'var(--moss)' }}
                title="当前持有"
              />
              <div style={{ width: `${c.totalSouls > 0 ? (c.other / c.totalSouls) * 100 : 0}%`, background: 'var(--panel-2)' }} title="其他去向" />
            </div>
          </div>
        ))}
        <div className="row" style={{ fontSize: 10.5, color: 'var(--faint)', gap: 14 }}>
          <span><span style={{ color: 'var(--gold)' }}>■</span> 升级消耗</span>
          <span><span style={{ color: 'var(--moss)' }}>■</span> 当前持有</span>
          <span>■ 其他(购物/强化/死亡丢失)</span>
        </div>
      </Card>
    </div>
  );
}
