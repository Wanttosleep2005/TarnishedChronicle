import { Card, PageHead } from '../components/ui.tsx';
import { useDs3 } from '../lib/ds3-context.tsx';

export function Ds3SettingsPage() {
  const { roots, rootPath, setRootPath } = useDs3();

  return (
    <div className="page">
      <PageHead title="设置" sub="黑暗之魂 III · 存档只读,永不写入" />

      <Card title="存档来源" hint="%APPDATA%\DarkSoulsIII\<SteamID>\DS30000.sl2">
        {roots && roots.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {roots.map((root) => (
              <label key={root.path} className="row" style={{ cursor: 'pointer', gap: 10 }}>
                <input type="radio" checked={rootPath === root.path} onChange={() => setRootPath(root.path)} />
                <span style={{ fontSize: 12.5 }}>{root.label}</span>
                <span style={{ fontSize: 11, color: 'var(--faint)' }}>{root.path}</span>
              </label>
            ))}
          </div>
        ) : (
          <div className="undone">未检测到存档。</div>
        )}
      </Card>

      <Card title="Steam 成就" hint="Steam64 ID 与 Web API Key 与法环侧共用">
        <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.9 }}>
          在「褪色者编年史 → 设置」里填写一次,三个游戏同时生效。
        </div>
      </Card>

      <Card title="关于">
        <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 2 }}>
          存档解密仅在本机进行,任何数据不会上传。
          <br />
          属性/等级读取自带自校验(九维合计 − 89 = 等级),校验失败的槽位只显示档案级信息。
        </div>
      </Card>
    </div>
  );
}
