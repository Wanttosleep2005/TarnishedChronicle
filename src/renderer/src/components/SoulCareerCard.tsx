import { useEffect, useMemo, useState } from 'react';
import { formatPlaytime } from '../lib/format.ts';
import { parseSts2Progress } from '../lib/sts2.ts';
import { useSaveContext } from '../lib/save-context.tsx';

interface CareerData {
  sts2Games: number;
  sts2Losses: number;
  ds3Characters: number;
  ds3Playtime: number;
}

export function SoulCareerCard() {
  const { save } = useSaveContext();
  const [data, setData] = useState<CareerData | null>(null);
  const erDeaths = useMemo(() => save?.slots.reduce((sum, slot) => sum + slot.deaths, 0) ?? 0, [save]);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      try {
        const [sts2Roots, ds3Roots] = await Promise.all([window.api.sts2Detect(), window.api.ds3Detect()]);
        let sts2Games = 0;
        let sts2Losses = 0;
        const sts2Root = sts2Roots[0];
        if (sts2Root) {
          sts2Games = sts2Root.runCount;
          const progress = await window.api.sts2Progress(sts2Root.path);
          if (progress.ok) {
            const parsed = parseSts2Progress(progress.json);
            sts2Losses = (parsed.character_stats ?? []).reduce((sum, row) => sum + (row.total_losses ?? 0), 0);
          }
        }
        let ds3Characters = 0;
        let ds3Playtime = 0;
        const ds3Root = ds3Roots[0];
        if (ds3Root) {
          const result = await window.api.ds3Load(ds3Root.path);
          if (result.ok) {
            ds3Characters = result.characters.length;
            ds3Playtime = result.characters.reduce((sum, character) => sum + character.playtimeSec, 0);
          }
        }
        if (!cancelled) setData({ sts2Games, sts2Losses, ds3Characters, ds3Playtime });
      } catch {
        if (!cancelled) setData({ sts2Games: 0, sts2Losses: 0, ds3Characters: 0, ds3Playtime: 0 });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="soul-career-card">
      <div>
        <div className="soul-career-kicker">SOULS CAREER</div>
        <div className="soul-career-title">魂系生涯</div>
        <div className="soul-career-note">只汇总各游戏存档能可靠提供的数字</div>
      </div>
      <div className="soul-career-grid">
        <div><span>艾尔登法环</span><strong>{erDeaths.toLocaleString('zh-CN')}</strong><small>累计死亡</small></div>
        <div><span>杀戮尖塔 II</span><strong>{data?.sts2Games ?? '—'}</strong><small>{data ? `对局 · 失败 ${data.sts2Losses}` : '扫描中'}</small></div>
        <div><span>黑暗之魂 III</span><strong>{data?.ds3Characters ?? '—'}</strong><small>{data ? `${formatPlaytime(data.ds3Playtime)} · 未读取死亡数` : '扫描中'}</small></div>
      </div>
    </div>
  );
}
