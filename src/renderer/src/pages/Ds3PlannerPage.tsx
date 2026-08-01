import { useEffect, useMemo, useState } from 'react';
import type { Ds3Stats } from '../../../shared/contracts';
import { Card, PageHead, Stat } from '../components/ui.tsx';
import { StatRadar } from '../components/ds3-widgets.tsx';
import { DS3_STAT_ZH, SOFTCAPS, buildArchetype, formatSouls, soulCost, soulCostRange } from '../lib/ds3.ts';
import { useDs3 } from '../lib/ds3-context.tsx';

export function Ds3PlannerPage() {
  const { characters, plannerSlot, setPlannerSlot } = useDs3();
  const withStats = characters.filter((c) => c.stats);
  const [slotIdx, setSlotIdx] = useState(0);
  const base = withStats[Math.min(slotIdx, Math.max(withStats.length - 1, 0))];
  const [plan, setPlan] = useState<Partial<Ds3Stats>>({});

  // 名册"去规划"联动:定位到指定槽位
  useEffect(() => {
    if (plannerSlot === null) return;
    const idx = withStats.findIndex((c) => c.slot === plannerSlot);
    if (idx >= 0) {
      setSlotIdx(idx);
      setPlan({});
    }
    setPlannerSlot(null);
  }, [plannerSlot, withStats, setPlannerSlot]);

  const planned = useMemo<Ds3Stats | null>(() => {
    if (!base?.stats) return null;
    const merged = { ...base.stats };
    for (const s of DS3_STAT_ZH) {
      const v = plan[s.key];
      if (v !== undefined) merged[s.key] = Math.max(base.stats[s.key], Math.min(99, v));
    }
    return merged;
  }, [base, plan]);

  if (!base || !base.stats || !planned) {
    return (
      <div className="page">
        <PageHead title="升级规划" sub="以现有角色为起点,模拟加点与灵魂成本" />
        <div className="empty-hero">
          <div className="glyph">✦</div>
          <h2>没有可规划的角色</h2>
        </div>
      </div>
    );
  }

  const targetLevel = DS3_STAT_ZH.reduce((n, s) => n + planned[s.key], 0) - 89;
  const cost = soulCostRange(base.level, targetLevel);
  const nextCost = soulCost(base.level + 1);

  return (
    <div className="page">
      <PageHead
        title="升级规划"
        sub="拖动目标属性,实时计算所需灵魂(2-12 级固定表,13 级起官式公式)"
        right={
          withStats.length > 1 ? (
            <select className="select" value={slotIdx} onChange={(e) => { setSlotIdx(Number(e.target.value)); setPlan({}); }}>
              {withStats.map((c, i) => (
                <option key={c.slot} value={i}>
                  {c.name} · Lv{c.level}
                </option>
              ))}
            </select>
          ) : undefined
        }
      />

      <div className="stat-grid">
        <Stat label="当前等级" value={base.level} />
        <Stat label="目标等级" value={targetLevel} sub={targetLevel > base.level ? `+${targetLevel - base.level}` : ''} />
        <Stat label="所需灵魂" value={formatSouls(cost)} />
        <Stat label="下一级要价" value={formatSouls(nextCost)} />
        <Stat label="目标流派" value={buildArchetype(planned)} />
      </div>

      <Card title="属性规划" hint="只能加不能减(游戏内无退点);软上限为社区参考值">
        <table className="tbl">
          <thead>
            <tr>
              <th>属性</th>
              <th className="num" style={{ textAlign: 'right' }}>当前</th>
              <th style={{ width: '42%' }}></th>
              <th className="num" style={{ textAlign: 'right' }}>目标</th>
              <th style={{ textAlign: 'right' }}>软上限</th>
            </tr>
          </thead>
          <tbody>
            {DS3_STAT_ZH.map((s) => {
              const current = base.stats![s.key];
              const value = planned[s.key];
              return (
                <tr key={s.key}>
                  <td>{s.zh}</td>
                  <td className="num">{current}</td>
                  <td>
                    <input
                      type="range"
                      min={current}
                      max={99}
                      value={value}
                      style={{ width: '100%' }}
                      onChange={(e) => setPlan((p) => ({ ...p, [s.key]: Number(e.target.value) }))}
                    />
                  </td>
                  <td className="num" style={{ color: value > current ? 'var(--gold-2)' : undefined }}>
                    {value}
                    {value > current && <span style={{ color: 'var(--moss)', fontSize: 10.5 }}> +{value - current}</span>}
                  </td>
                  <td style={{ textAlign: 'right', fontSize: 10.5, color: 'var(--faint)' }}>{SOFTCAPS[s.key] ?? '—'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="row" style={{ marginTop: 10 }}>
          <button className="btn small" onClick={() => setPlan({})}>
            重置规划
          </button>
          <span style={{ fontSize: 11.5, color: 'var(--faint)' }}>
            {targetLevel > base.level
              ? `从 Lv${base.level} 升至 Lv${targetLevel} 共需 ${formatSouls(cost)} 灵魂`
              : '拖动滑块开始规划'}
          </span>
        </div>
      </Card>

      <Card title="目标形态雷达">
        <div className="row" style={{ justifyContent: 'center' }}>
          <StatRadar stats={planned} size={260} max={Math.max(60, ...DS3_STAT_ZH.map((s) => planned[s.key]))} />
        </div>
      </Card>
    </div>
  );
}
