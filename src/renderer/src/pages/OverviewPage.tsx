import { useMemo, useState } from 'react';
import { REGIONS } from '../data/generated/regions.ts';
import { displayPlace, ZH_ARCHETYPE, ZH_GIFT } from '../data/zh/translations.ts';
import { Card, PageHead, ProgressLine, Stat } from '../components/ui.tsx';
import { deriveBadges } from '../lib/badges.ts';
import { deriveProfile, graceForEntityId, type CharacterProfile } from '../lib/derive.ts';
import { formatCompact, formatNumber, formatPlaytime } from '../lib/format.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';
import { drawShareCard, type CardTheme } from '../lib/share-card.ts';

const ATTRS: { key: 'vig' | 'mnd' | 'end' | 'str' | 'dex' | 'int' | 'fai' | 'arc'; label: string }[] = [
  { key: 'vig', label: '生命力' },
  { key: 'mnd', label: '集中力' },
  { key: 'end', label: '耐力' },
  { key: 'str', label: '力气' },
  { key: 'dex', label: '灵巧' },
  { key: 'int', label: '智力' },
  { key: 'fai', label: '信仰' },
  { key: 'arc', label: '感应' },
];

function Radar({ stats }: { stats: CharacterProfile['stats'] }) {
  const values = [stats.vig, stats.mnd, stats.end, stats.str, stats.dex, stats.int, stats.fai, stats.arc];
  const labels = ['生命', '集中', '耐力', '力气', '灵巧', '智力', '信仰', '感应'];
  const C = 110;
  const R = 74;
  const point = (i: number, r: number): [number, number] => {
    const angle = (Math.PI / 4) * i - Math.PI / 2;
    return [C + r * Math.cos(angle), C + r * Math.sin(angle)];
  };
  const ring = (ratio: number) =>
    values.map((_, i) => point(i, R * ratio).map((v) => v.toFixed(1)).join(',')).join(' ');
  // 60 视为软上限
  const poly = values
    .map((v, i) => point(i, R * Math.min(1, v / 60)).map((n) => n.toFixed(1)).join(','))
    .join(' ');

  return (
    <svg viewBox="0 0 220 220" width={230} height={230} style={{ flex: 'none' }}>
      {[0.33, 0.66, 1].map((r) => (
        <polygon key={r} points={ring(r)} fill="none" stroke="#33291a" strokeWidth={1} />
      ))}
      {values.map((_, i) => {
        const [x, y] = point(i, R);
        return <line key={i} x1={C} y1={C} x2={x} y2={y} stroke="#33291a" strokeWidth={1} />;
      })}
      <polygon points={poly} fill="rgba(201,166,98,0.22)" stroke="#c9a662" strokeWidth={1.8} />
      {values.map((v, i) => {
        const [x, y] = point(i, R + 17);
        return (
          <text key={i} x={x} y={y + 4} textAnchor="middle" fontSize={11} fill={v >= 50 ? '#e8d3a0' : '#a2937a'}>
            {labels[i]}
          </text>
        );
      })}
    </svg>
  );
}

export function OverviewPage() {
  const slot = useActiveSlot();
  const { mtimeMs } = useSaveContext();
  const [cardMsg, setCardMsg] = useState<string | null>(null);
  const [cardTheme, setCardTheme] = useState<CardTheme>('gold');
  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  if (!slot || !profile) return null;

  const exportCard = async () => {
    setCardMsg(null);
    const dataUrl = drawShareCard(profile, deriveBadges(profile), cardTheme);
    const result = await window.api.exportPng(`${profile.name}-战绩卡.png`, dataUrl);
    setCardMsg(result.ok ? `已保存:${result.path}` : result.message);
  };

  const p = slot.player_game_data;
  const lastGrace = graceForEntityId(slot.last_rested_grace) ?? graceForEntityId(slot.spawn_point_entity_id);
  const worldTime = slot.world_time;

  return (
    <div className="page">
      <PageHead
        title={profile.name}
        sub={`${ZH_ARCHETYPE[profile.archetype] ?? '未知职业'} · 等级 ${profile.level} · 初始遗物:${ZH_GIFT[p.gift] ?? '未知'}`}
        right={
          <div className="row">
            {profile.bossRows.some((r) => r.boss.name === 'Elden Beast' && r.defeated) && (
              <span className="pill gold">已抵达结局</span>
            )}
            {profile.dlcEntered && <span className="pill gold">幽影之地</span>}
            {p.great_rune_on && <span className="pill gold">大卢恩生效中</span>}
            {slot.deaths === 0 && <span className="pill ok">零死亡</span>}
            <select
              className="select"
              style={{ width: 96, padding: '4px 8px', fontSize: 12 }}
              value={cardTheme}
              onChange={(e) => setCardTheme(e.target.value as CardTheme)}
            >
              <option value="gold">金黑</option>
              <option value="parchment">羊皮纸</option>
            </select>
            <button className="btn small" onClick={() => void exportCard()}>
              导出战绩卡
            </button>
          </div>
        }
      />

      {cardMsg && <div className="notice">{cardMsg}</div>}

      <div className="stat-grid">
        <Stat label="游玩时长" value={formatPlaytime(slot.seconds_played)} />
        <Stat label="死亡次数" value={formatNumber(profile.deaths)} sub="次" />
        <Stat label="累计卢恩" value={formatCompact(profile.runesMemory)} />
        <Stat label="持有卢恩" value={formatCompact(profile.runesHeld)} />
        <Stat label="生命上限" value={formatNumber(p.base_max_hp)} sub="HP" />
        <Stat label="圣杯瓶" value={`${profile.flasks.crimson} 红 / ${profile.flasks.cerulean} 蓝`} />
        <Stat label="已知法术" value={formatNumber(profile.spellsKnown)} sub="个" />
        <Stat label="骨灰" value={formatNumber(profile.spiritAshesOwned)} sub="个" />
      </div>

      <Card title="属性八维">
        <div className="row" style={{ alignItems: 'center', gap: 24, flexWrap: 'nowrap' }}>
          <Radar stats={profile.stats} />
          <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {ATTRS.map((attr) => {
              const value = profile.stats[attr.key];
              return (
                <div className="attr" key={attr.key}>
                  <div className="attr-name">{attr.label}</div>
                  <div className={`attr-num ${value >= 50 ? 'hi' : ''}`}>{value}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <Card
        title="大卢恩"
        hint={`${profile.greatRunes.filter((r) => r.owned).length}/${profile.greatRunes.length} 枚(按持有物判定)`}
      >
        <div className="tag-cloud">
          {profile.greatRunes.map((rune) => (
            <span key={rune.zh} className={`pill ${rune.owned ? 'gold' : ''}`} style={rune.owned ? {} : { opacity: 0.4 }}>
              {rune.owned ? '◈' : '·'} {rune.zh}
            </span>
          ))}
        </div>
      </Card>

      <div className="grid-2">
        <Card title="征程进度">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <ProgressLine label="Boss 讨伐" value={profile.bossesDefeated} total={profile.bossTotal} />
            <ProgressLine label="赐福点亮" value={profile.gracesLit} total={profile.graceTotal} tone="azure" />
            <ProgressLine label="地图区块" value={profile.regionsUnlocked} total={REGIONS.length} tone="crimson" />
          </div>
        </Card>

        <Card title="此刻的褪色者">
          <table className="tbl">
            <tbody>
              <tr>
                <td style={{ color: 'var(--faint)' }}>最后休息的赐福</td>
                <td>{lastGrace ? displayPlace(lastGrace.name) : '未知'}</td>
              </tr>
              <tr>
                <td style={{ color: 'var(--faint)' }}>游戏内时刻</td>
                <td className="mono">
                  {String(worldTime.hour).padStart(2, '0')}:{String(worldTime.minute).padStart(2, '0')}
                </td>
              </tr>
              <tr>
                <td style={{ color: 'var(--faint)' }}>灵马托雷特</td>
                <td>{profile.horseDead ? '阵亡(该道歉了)' : '健在'}</td>
              </tr>
              <tr>
                <td style={{ color: 'var(--faint)' }}>血迹待回收</td>
                <td>{profile.bloodstainRunes > 0 ? `${formatNumber(profile.bloodstainRunes)} 卢恩` : '无'}</td>
              </tr>
              <tr>
                <td style={{ color: 'var(--faint)' }}>解锁手势</td>
                <td>{profile.gesturesUnlocked} 个</td>
              </tr>
              <tr>
                <td style={{ color: 'var(--faint)' }}>存档时间</td>
                <td>{mtimeMs ? new Date(mtimeMs).toLocaleString('zh-CN', { hour12: false }) : '—'}</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
