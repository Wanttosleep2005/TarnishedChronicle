import { useEffect, useState } from 'react';
import type { UpdateStatus } from '../../../shared/contracts';
import { Card } from './ui.tsx';

function tone(status: UpdateStatus): string {
  return status.phase === 'error' ? 'var(--crimson)' : status.phase === 'ready' ? 'var(--moss)' : 'var(--muted)';
}

export function UpdatePanel({ title = '关于与更新' }: { title?: string }) {
  const [status, setStatus] = useState<UpdateStatus | null>(null);

  useEffect(() => {
    void window.api.getUpdateStatus().then(setStatus);
    return window.api.onUpdateStatus(setStatus);
  }, []);

  const checking = status?.phase === 'checking' || status?.phase === 'downloading';
  const development = status?.phase === 'development';
  const ready = status?.phase === 'ready';

  return (
    <Card title={title}>
      <div className="update-panel" aria-live="polite">
        <div className="update-version">当前版本 v{status?.currentVersion ?? '…'}</div>
        <div className="desc" style={{ color: status ? tone(status) : undefined }}>
          {status?.message ?? '正在读取更新状态…'}
        </div>
        {status?.releaseNotes && <div className="update-notes">{status.releaseNotes}</div>}
        <div className="row">
          {ready ? (
            <button className="btn primary" onClick={() => void window.api.installUpdate()}>
              重启并安装
            </button>
          ) : (
            <button className="btn" onClick={() => void window.api.checkUpdate()} disabled={checking || development}>
              {checking ? '检查中…' : '检查更新'}
            </button>
          )}
          {status?.phase === 'downloading' && status.progress !== undefined && (
            <span className="update-progress">{status.progress}%</span>
          )}
        </div>
      </div>
    </Card>
  );
}
