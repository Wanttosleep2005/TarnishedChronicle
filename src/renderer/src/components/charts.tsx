/** 轻量 SVG 图表组件:折线 / 柱状 / 散点,统一 hover 提示,无第三方依赖。 */
import { useRef, useState, type ReactNode } from 'react';

interface TipState {
  x: number;
  y: number;
  content: ReactNode;
}

function useTooltip() {
  const [tip, setTip] = useState<TipState | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const show = (clientX: number, clientY: number, content: ReactNode) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTip({ x: clientX - rect.left, y: clientY - rect.top, content });
  };
  const hide = () => setTip(null);
  const overlay = tip ? (
    <div
      style={{
        position: 'absolute',
        left: Math.min(tip.x + 12, (wrapRef.current?.clientWidth ?? 300) - 170),
        top: Math.max(tip.y - 40, 2),
        background: 'var(--panel-3)',
        border: '1px solid var(--line-2)',
        borderRadius: 7,
        padding: '6px 10px',
        fontSize: 11.5,
        lineHeight: 1.7,
        pointerEvents: 'none',
        zIndex: 5,
        boxShadow: 'var(--shadow)',
        maxWidth: 220,
      }}
    >
      {tip.content}
    </div>
  ) : null;
  return { wrapRef, show, hide, overlay };
}

export interface LinePoint {
  x: number;
  y: number;
  label: ReactNode;
}

export function LineChart({
  points,
  height = 150,
  yMax = 1,
  yFormat = (v: number) => `${Math.round(v * 100)}%`,
  color = 'var(--gold)',
}: {
  points: LinePoint[];
  height?: number;
  yMax?: number;
  yFormat?: (v: number) => string;
  color?: string;
}) {
  const { wrapRef, show, hide, overlay } = useTooltip();
  const [active, setActive] = useState<number | null>(null);
  const W = 640;
  const H = height;
  const pad = 8;
  if (points.length === 0) return null;
  const xs = points.map((p) => p.x);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const px = (x: number) => pad + (xMax > xMin ? ((x - xMin) / (xMax - xMin)) * (W - pad * 2) : (W - pad * 2) / 2);
  const py = (y: number) => H - pad - (y / yMax) * (H - pad * 2);
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'}${px(p.x).toFixed(1)},${py(p.y).toFixed(1)}`).join(' ');
  const area = `${path} L${px(points[points.length - 1].x).toFixed(1)},${H - pad} L${px(points[0].x).toFixed(1)},${H - pad} Z`;

  return (
    <div ref={wrapRef} style={{ position: 'relative' }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', height, display: 'block' }}
        onMouseLeave={() => {
          hide();
          setActive(null);
        }}
        onMouseMove={(e) => {
          const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
          const mx = ((e.clientX - rect.left) / rect.width) * W;
          let best = 0;
          let bestDist = Infinity;
          points.forEach((p, i) => {
            const d = Math.abs(px(p.x) - mx);
            if (d < bestDist) {
              bestDist = d;
              best = i;
            }
          });
          setActive(best);
          const p = points[best];
          show(e.clientX, e.clientY, (
            <>
              {p.label}
              <div style={{ color: 'var(--gold-2)' }}>{yFormat(p.y)}</div>
            </>
          ));
        }}
      >
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={pad} x2={W - pad} y1={py(yMax * f)} y2={py(yMax * f)} stroke="var(--line)" strokeWidth="0.6" strokeDasharray="3 5" />
        ))}
        <path d={area} fill={`color-mix(in srgb, ${color} 14%, transparent)`} />
        <path d={path} fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
        {active !== null && (
          <>
            <line x1={px(points[active].x)} x2={px(points[active].x)} y1={pad} y2={H - pad} stroke="var(--line-2)" strokeWidth="0.8" />
            <circle cx={px(points[active].x)} cy={py(points[active].y)} r="3.4" fill={color} stroke="var(--bg)" strokeWidth="1.4" />
          </>
        )}
      </svg>
      {overlay}
    </div>
  );
}

export interface BarDatum {
  label: ReactNode;
  axis: string;
  value: number;
  /** 第二段(如败场),堆叠在 value 之上 */
  value2?: number;
}

export function BarChart({
  data,
  height = 150,
  color = 'var(--gold)',
  color2 = 'var(--panel-3)',
  yFormat = (v: number) => String(v),
}: {
  data: BarDatum[];
  height?: number;
  color?: string;
  color2?: string;
  yFormat?: (v: number) => string;
}) {
  const { wrapRef, show, hide, overlay } = useTooltip();
  const [active, setActive] = useState<number | null>(null);
  const W = 640;
  const H = height;
  const pad = 8;
  const axisH = 16;
  if (data.length === 0) return null;
  const max = Math.max(...data.map((d) => d.value + (d.value2 ?? 0)), 1);
  const bw = (W - pad * 2) / data.length;

  return (
    <div ref={wrapRef} style={{ position: 'relative' }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height, display: 'block' }} onMouseLeave={() => { hide(); setActive(null); }}>
        {data.map((d, i) => {
          const x = pad + i * bw;
          const h1 = ((d.value / max) * (H - pad * 2 - axisH));
          const h2 = (((d.value2 ?? 0) / max) * (H - pad * 2 - axisH));
          const yBase = H - pad - axisH;
          return (
            <g
              key={i}
              onMouseMove={(e) => {
                setActive(i);
                show(e.clientX, e.clientY, (
                  <>
                    {d.label}
                    <div style={{ color: 'var(--gold-2)' }}>{yFormat(d.value + (d.value2 ?? 0))}</div>
                  </>
                ));
              }}
            >
              <rect x={x} y={pad} width={bw} height={H - pad * 2 - axisH} fill="transparent" />
              {d.value2 !== undefined && d.value2 > 0 && (
                <rect x={x + bw * 0.18} y={yBase - h1 - h2} width={bw * 0.64} height={h2} rx="2" fill={color2} opacity={active === i ? 1 : 0.85} />
              )}
              <rect x={x + bw * 0.18} y={yBase - h1} width={bw * 0.64} height={Math.max(h1, d.value > 0 ? 2 : 0)} rx="2" fill={color} opacity={active === i ? 1 : 0.85} />
              <text x={x + bw / 2} y={H - 4} textAnchor="middle" fontSize="9.5" fill={active === i ? 'var(--gold-2)' : 'var(--faint)'}>
                {d.axis}
              </text>
            </g>
          );
        })}
      </svg>
      {overlay}
    </div>
  );
}

export interface ScatterPoint {
  x: number;
  y: number;
  size?: number;
  label: ReactNode;
  color?: string;
}

export function ScatterChart({
  points,
  height = 220,
  xLabel,
  yLabel,
  yMax = 1,
  xFormat = (v: number) => String(Math.round(v)),
  yFormat = (v: number) => `${Math.round(v * 100)}%`,
  onPick,
}: {
  points: ScatterPoint[];
  height?: number;
  xLabel: string;
  yLabel: string;
  yMax?: number;
  xFormat?: (v: number) => string;
  yFormat?: (v: number) => string;
  onPick?: (index: number) => void;
}) {
  const { wrapRef, show, hide, overlay } = useTooltip();
  const W = 640;
  const H = height;
  const pad = 14;
  if (points.length === 0) return null;
  const xMax = Math.max(...points.map((p) => p.x), 1);
  const px = (x: number) => pad + (x / xMax) * (W - pad * 2);
  const py = (y: number) => H - pad - (y / yMax) * (H - pad * 2 - 10);

  return (
    <div ref={wrapRef} style={{ position: 'relative' }}>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height, display: 'block' }} onMouseLeave={hide}>
        {[0.5, 1].map((f) => (
          <line key={f} x1={pad} x2={W - pad} y1={py(yMax * f)} y2={py(yMax * f)} stroke="var(--line)" strokeWidth="0.6" strokeDasharray="3 5" />
        ))}
        <text x={W - pad} y={H - 3} textAnchor="end" fontSize="9.5" fill="var(--faint)">{xLabel} →</text>
        <text x={pad} y={12} fontSize="9.5" fill="var(--faint)">↑ {yLabel}</text>
        {points.map((p, i) => (
          <circle
            key={i}
            cx={px(p.x)}
            cy={py(p.y)}
            r={p.size ?? 4}
            fill={p.color ?? 'var(--gold)'}
            opacity="0.8"
            style={{ cursor: onPick ? 'pointer' : 'default' }}
            onMouseMove={(e) =>
              show(e.clientX, e.clientY, (
                <>
                  {p.label}
                  <div style={{ color: 'var(--faint)' }}>
                    {xLabel} {xFormat(p.x)} · {yLabel} <span style={{ color: 'var(--gold-2)' }}>{yFormat(p.y)}</span>
                  </div>
                </>
              ))
            }
            onClick={() => onPick?.(i)}
          />
        ))}
      </svg>
      {overlay}
    </div>
  );
}
