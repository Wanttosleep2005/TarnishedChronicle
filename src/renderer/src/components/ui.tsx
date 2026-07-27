import type { ReactNode } from 'react';
import { iconThumbUrl } from '../data/images.ts';

export function Card({ title, hint, children, className }: { title?: string; hint?: string; children: ReactNode; className?: string }) {
  return (
    <section className={`card ${className ?? ''}`}>
      {title && (
        <div className="card-title">
          <span>✦ {title}</span>
          {hint && <span className="hint">{hint}</span>}
        </div>
      )}
      {children}
    </section>
  );
}

export function CollapsibleCard({
  title,
  hint,
  children,
  defaultOpen = false,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="card collapsible-card" open={defaultOpen}>
      <summary className="card-title collapsible-title">
        <span>✦ {title}</span>
        {hint && <span className="hint">{hint}</span>}
        <span className="collapse-chevron" aria-hidden="true" />
      </summary>
      <div className="collapsible-content">{children}</div>
    </details>
  );
}

export function Stat({ label, value, sub }: { label: string; value: ReactNode; sub?: string }) {
  return (
    <div className="stat">
      <div className="stat-label">{label}</div>
      <div className="stat-value">
        {value}
        {sub && <small> {sub}</small>}
      </div>
    </div>
  );
}

export function ProgressLine({
  label,
  value,
  total,
  tone,
}: {
  label: string;
  value: number;
  total: number;
  tone?: 'gold' | 'azure' | 'crimson';
}) {
  const pct = total > 0 ? Math.min(100, (value / total) * 100) : 0;
  return (
    <div className="progress-line">
      <div className="meta">
        <span>{label}</span>
        <span>
          <b>{value.toLocaleString('zh-CN')}</b> / {total.toLocaleString('zh-CN')}({Math.round(pct)}%)
        </span>
      </div>
      <div className="bar">
        <div className={`bar-fill ${tone ?? ''}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

export function Toggle({ on, onChange }: { on: boolean; onChange: (next: boolean) => void }) {
  return <span className={`toggle ${on ? 'on' : ''}`} onClick={() => onChange(!on)} role="switch" aria-checked={on} />;
}

export function ItemThumb({ icon, size = 44 }: { icon: number | null; size?: number }) {
  const url = icon !== null ? iconThumbUrl(icon) : undefined;
  if (!url) {
    return (
      <div className="equip-thumb placeholder" style={{ width: size, height: size }}>
        ◈
      </div>
    );
  }
  return <img className="equip-thumb" src={url} width={size} height={size} loading="lazy" alt="" />;
}

export function PageHead({ title, sub, right }: { title: string; sub?: string; right?: ReactNode }) {
  return (
    <div className="page-head">
      <div>
        <div className="page-title">{title}</div>
        {sub && <div className="page-sub">{sub}</div>}
      </div>
      {right}
    </div>
  );
}
