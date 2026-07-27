import { Card, PageHead } from '../components/ui.tsx';
import { UpdatePanel } from '../components/UpdatePanel.tsx';

/** 杀戮尖塔壳的精简设置(不含法环存档 / LLM / Steam 等无关项)。 */
export function Sts2SettingsPage() {
  return (
    <div className="page">
      <PageHead title="设置" sub="杀戮尖塔 2 模块设置" />

      <Card title="存档来源">
        <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 2 }}>
          自动扫描以下位置,存档下拉框在「尖塔数据」页顶部:
          <br />
          <code style={{ color: 'var(--gold-dim)' }}>Steam\userdata\&lt;账号&gt;\2868840\remote(\modded)</code>
          <br />
          <code style={{ color: 'var(--gold-dim)' }}>%APPDATA%\SlayTheSpire2\default</code>
          <br />
          全部只读,不会写入你的存档。
        </div>
      </Card>

      <Card title="图片来源">
        <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 2 }}>
          药水图为游戏本体官方原图(从游戏文件直读);卡牌与遗物图按需从杀戮尖塔 Wiki 拉取并缓存到本机,
          拉不到时只显示官方中文名。缓存目录:<code style={{ color: 'var(--gold-dim)' }}>%APPDATA%\tarnished-chronicle\sts2-art</code>
        </div>
      </Card>

      <UpdatePanel title="更新" />
      {/*
      <Card title="更新">
        <div className="row">
          <input
            className="input"
            style={{ width: 300 }}
            defaultValue={settings.updateRepo}
            placeholder="GitHub 仓库(owner/repo)"
            onBlur={(e) => void updateSettings({ updateRepo: e.target.value.trim() })}
          />
          <button
            className="btn"
            onClick={async () => {
              setUpdateMsg(null);
              const result = await window.api.checkUpdate();
              if (!result.ok) setUpdateMsg(`✗ ${result.message}`);
              else if (result.hasUpdate) {
                setUpdateMsg(`✓ 发现新版本 v${result.latest}`);
                void window.api.openExternal(result.url);
              } else setUpdateMsg(`✓ 已是最新版本(v${result.current})`);
            }}
          >
            检查更新
          </button>
          {updateMsg && (
            <span style={{ fontSize: 13, color: updateMsg.startsWith('✓') ? 'var(--moss)' : 'var(--crimson)' }}>
              {updateMsg}
            </span>
          )}
        </div>
      </Card>

      */}
      <Card title="关于">
        <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 2 }}>
          官方简体中文取自游戏本体 localization/zhs(卡 624 / 遗物 311 / 角色 9 / 怪物 483 …),
          游戏更新后可重新提取。法环相关设置请回启动页进入「褪色者编年史」。
        </div>
      </Card>
    </div>
  );
}
