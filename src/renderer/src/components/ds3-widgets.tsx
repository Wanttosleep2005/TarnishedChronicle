import type { Ds3Stats } from '../../../shared/contracts';
import { DS3_STAT_ZH } from '../lib/ds3.ts';

/** 九维属性雷达(SVG,尺寸自适应容器宽度)。 */
export function StatRadar({ stats, size = 190, max = 60 }: { stats: Ds3Stats; size?: number; max?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - 26;
  const n = DS3_STAT_ZH.length;
  const angle = (i: number) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const point = (i: number, r: number) => `${(cx + Math.cos(angle(i)) * r).toFixed(1)},${(cy + Math.sin(angle(i)) * r).toFixed(1)}`;

  const rings = [0.33, 0.66, 1];
  const values = DS3_STAT_ZH.map((s) => Math.min(stats[s.key] / max, 1));

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {rings.map((f) => (
        <polygon
          key={f}
          points={Array.from({ length: n }, (_, i) => point(i, radius * f)).join(' ')}
          fill="none"
          stroke="var(--line)"
          strokeWidth="1"
        />
      ))}
      {DS3_STAT_ZH.map((_, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={cx + Math.cos(angle(i)) * radius}
          y2={cy + Math.sin(angle(i)) * radius}
          stroke="var(--line)"
          strokeWidth="0.6"
        />
      ))}
      <polygon
        points={values.map((v, i) => point(i, radius * v)).join(' ')}
        fill="rgba(216,130,60,0.22)"
        stroke="var(--gold)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {DS3_STAT_ZH.map((s, i) => (
        <text
          key={s.key}
          x={cx + Math.cos(angle(i)) * (radius + 14)}
          y={cy + Math.sin(angle(i)) * (radius + 14) + 4}
          textAnchor="middle"
          fontSize="10"
          fill="var(--muted)"
        >
          {s.zh}
        </text>
      ))}
    </svg>
  );
}

export function ResourceBar({ label, current, max, tone }: { label: string; current: number; max: number; tone: string }) {
  const clamped = Math.max(0, Math.min(current, max));
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5 }}>
      <span style={{ width: 30, color: 'var(--faint)', flex: 'none' }}>{label}</span>
      <div style={{ flex: 1, height: 7, background: 'var(--panel-3)', borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ width: `${max > 0 ? (clamped / max) * 100 : 0}%`, height: '100%', background: tone }} />
      </div>
      <span style={{ width: 84, textAlign: 'right', color: 'var(--muted)', fontVariantNumeric: 'tabular-nums' }}>
        {current} / {max}
      </span>
    </div>
  );
}
