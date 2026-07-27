import { useEffect, useState } from 'react';
import { LLM_PRESETS, type BackupInfo, type DetectedSave } from '../../../shared/contracts';
import { Card, PageHead, Toggle } from '../components/ui.tsx';
import { UpdatePanel } from '../components/UpdatePanel.tsx';
import { formatDateTime } from '../lib/format.ts';
import { useSaveContext } from '../lib/save-context.tsx';

export function SettingsPage() {
  const { settings, updateSettings, savePath, openPicker, openPath, reload } = useSaveContext();
  const [detected, setDetected] = useState<DetectedSave[]>([]);
  const [testResult, setTestResult] = useState<string | null>(null);
  const [testing, setTesting] = useState(false);
  const [backups, setBackups] = useState<BackupInfo[]>([]);
  const [backupMsg, setBackupMsg] = useState<string | null>(null);
  const [backingUp, setBackingUp] = useState(false);
  const [modelList, setModelList] = useState<string[]>([]);
  const [modelMsg, setModelMsg] = useState<string | null>(null);

  const fetchModels = async () => {
    setModelMsg('获取中…');
    const result = await window.api.llmListModels();
    if (result.ok) {
      setModelList(result.models);
      setModelMsg(`✓ 获取到 ${result.models.length} 个模型,在模型框里点击/输入即可选择`);
    } else {
      setModelList([]);
      setModelMsg(`✗ ${result.message}`);
    }
  };

  useEffect(() => {
    void window.api.detectSaves().then(setDetected);
    void window.api.listBackups().then(setBackups);
  }, []);

  const doBackup = async () => {
    if (!savePath) return;
    setBackingUp(true);
    setBackupMsg(null);
    try {
      const result = await window.api.createBackup(savePath);
      setBackupMsg(result.ok ? `✓ 已备份到:${result.path}` : `✗ ${result.message}`);
      setBackups(await window.api.listBackups());
    } finally {
      setBackingUp(false);
    }
  };

  if (!settings) return null;

  const llm = settings.llm;
  const steam = settings.steam;

  const testLlm = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      const result = await window.api.llmGenerate({
        system: '你是连通性测试助手。',
        user: '请只回复四个字:连接成功',
        maxTokens: 20,
      });
      setTestResult(result.ok ? `✓ ${result.text.trim()}` : `✗ ${result.message}`);
    } finally {
      setTesting(false);
    }
  };

  return (
    <div className="page">
      <PageHead title="设置" sub="存档来源、LLM 与 Steam 配置(保存在本机)" />

      <Card title="存档文件">
        <div className="field">
          <label>当前存档</label>
          <div className="row">
            <input className="input" style={{ flex: 1 }} readOnly value={savePath ?? '未选择'} />
            <button className="btn" onClick={() => void openPicker()}>
              选择文件…
            </button>
            <button className="btn" onClick={() => void reload()}>
              重新读取
            </button>
          </div>
          <div className="desc">支持 ER0000.sl2(本体)与 ER0000.co2(无缝合作模组),也可直接拖拽文件进窗口。</div>
        </div>
        {detected.length > 0 && (
          <div className="field">
            <label>本机检测到的存档</label>
            {detected.map((save) => (
              <div className="row" key={save.path} style={{ padding: '4px 0' }}>
                <span style={{ flex: 1, fontSize: 12.5, color: 'var(--muted)', wordBreak: 'break-all' }}>
                  {save.path}
                  <span style={{ color: 'var(--faint)' }}>
                    ({(save.sizeBytes / 1048576).toFixed(1)}MB · {formatDateTime(save.mtimeMs)})
                  </span>
                </span>
                <button className="btn small" onClick={() => void openPath(save.path)}>
                  读取
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="row">
          <span style={{ color: 'var(--muted)', fontSize: 13 }}>游戏存档时自动刷新</span>
          <Toggle on={settings.autoRefresh} onChange={(next) => void updateSettings({ autoRefresh: next })} />
        </div>
      </Card>

      <Card title="存档备份" hint="备份到本机应用数据目录,还原请手动复制回存档文件夹">
        <div className="row">
          <button className="btn primary" onClick={() => void doBackup()} disabled={backingUp || !savePath}>
            {backingUp ? '备份中…' : '立即备份当前存档'}
          </button>
          <button className="btn" onClick={() => void window.api.openBackupsFolder()}>
            打开备份文件夹
          </button>
          {backupMsg && (
            <span style={{ fontSize: 12.5, color: backupMsg.startsWith('✓') ? 'var(--moss)' : 'var(--crimson)', wordBreak: 'break-all' }}>
              {backupMsg}
            </span>
          )}
        </div>
        {backups.length > 0 && (
          <div style={{ marginTop: 12, maxHeight: 180, overflowY: 'auto' }}>
            <table className="tbl">
              <tbody>
                {backups.map((b) => (
                  <tr key={b.path}>
                    <td>{b.name}</td>
                    <td className="num" style={{ width: 90 }}>{(b.sizeBytes / 1048576).toFixed(1)} MB</td>
                    <td style={{ width: 170, color: 'var(--faint)' }}>{formatDateTime(b.mtimeMs)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="desc" style={{ marginTop: 8 }}>
          本工具坚持只读承诺:提供备份、不做自动还原。需要回档时,请关闭游戏后把备份文件复制回存档目录并改名为原文件名。
        </div>
      </Card>

      <Card title="LLM 编年史官" hint="用于生成游玩故事,支持国内外主流大模型">
        <div className="grid-2">
          <div className="field">
            <label>服务商预设</label>
            <select
              className="select"
              value={llm.provider}
              onChange={(e) => {
                const preset = LLM_PRESETS.find((p) => p.id === e.target.value);
                if (!preset) return;
                void updateSettings({
                  llm: {
                    ...llm,
                    provider: preset.id,
                    protocol: preset.protocol,
                    baseUrl: preset.baseUrl,
                    model: preset.defaultModel,
                  },
                });
              }}
            >
              {LLM_PRESETS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.label}
                </option>
              ))}
            </select>
            {(() => {
              const preset = LLM_PRESETS.find((p) => p.id === llm.provider);
              return preset?.note ? <div className="desc">{preset.note}</div> : null;
            })()}
          </div>
          <div className="field">
            <label>模型(填 Key 后自动获取,可下拉选择或手输)</label>
            <div className="row" style={{ flexWrap: 'nowrap' }}>
              <input
                key={`model-${llm.provider}-${modelList.length}`}
                className="input"
                list="llm-model-list"
                defaultValue={llm.model}
                placeholder={LLM_PRESETS.find((p) => p.id === llm.provider)?.modelHint ?? '模型名'}
                onBlur={(e) => void updateSettings({ llm: { ...llm, model: e.target.value.trim() } })}
              />
              <button className="btn small" style={{ flex: 'none' }} onClick={() => void fetchModels()}>
                获取列表
              </button>
            </div>
            <datalist id="llm-model-list">
              {modelList.map((m) => (
                <option key={m} value={m} />
              ))}
            </datalist>
            {modelMsg && (
              <div className="desc" style={{ color: modelMsg.startsWith('✓') ? 'var(--moss)' : undefined }}>
                {modelMsg}
              </div>
            )}
          </div>
        </div>
        <div className="field">
          <label>API Key(输入后点击其他位置生效;本地 Ollama 可留空)</label>
          <input
            className="input"
            type="password"
            defaultValue={llm.apiKey}
            placeholder="sk-…"
            onBlur={(e) => {
              const apiKey = e.target.value.trim();
              void updateSettings({ llm: { ...llm, apiKey } }).then(() => {
                if (apiKey) void fetchModels();
              });
            }}
          />
        </div>
        <div className="field">
          <label>Base URL(选预设后自动填写,可改为你的中转地址)</label>
          <input
            key={`base-${llm.provider}`}
            className="input"
            defaultValue={llm.baseUrl}
            onBlur={(e) => void updateSettings({ llm: { ...llm, baseUrl: e.target.value.trim() } })}
          />
          <div className="desc">
            协议:{llm.protocol === 'anthropic' ? 'Anthropic 原生' : llm.protocol === 'gemini' ? 'Gemini 原生' : 'OpenAI 兼容(自动适配 /v1、/v3、/v4 等版本段)'}
            · 故事生成为流式输出,逐字浮现。
          </div>
        </div>
        <div className="row">
          <button className="btn" onClick={testLlm} disabled={testing}>
            {testing ? '测试中…' : '测试连接'}
          </button>
          {testResult && <span style={{ fontSize: 13, color: testResult.startsWith('✓') ? 'var(--moss)' : 'var(--crimson)' }}>{testResult}</span>}
        </div>
      </Card>

      <Card title="Steam 官方成就(可选)">
        <div className="grid-2">
          <div className="field">
            <label>Steam64 ID</label>
            <input
              className="input"
              defaultValue={steam.steamId64}
              placeholder="7656119…(17 位数字)"
              onBlur={(e) => void updateSettings({ steam: { ...steam, steamId64: e.target.value.trim() } })}
            />
          </div>
          <div className="field">
            <label>Steam Web API Key</label>
            <input
              className="input"
              type="password"
              defaultValue={steam.webApiKey}
              placeholder="在 steamcommunity.com/dev/apikey 申请"
              onBlur={(e) => void updateSettings({ steam: { ...steam, webApiKey: e.target.value.trim() } })}
            />
          </div>
        </div>
        <div className="desc">
          需要 Steam 个人资料与游戏详情设为公开。不配置也不影响其他功能——成就页有基于存档的推演版本。
        </div>
      </Card>

      <UpdatePanel />
      {/*
      <Card title="关于与更新">
        <div className="grid-2">
          <div className="field">
            <label>更新源(GitHub 仓库,owner/repo)</label>
            <input
              className="input"
              defaultValue={settings.updateRepo}
              placeholder="例如 yourname/tarnished-chronicle"
              onBlur={(e) => void updateSettings({ updateRepo: e.target.value.trim() })}
            />
          </div>
          <div className="field">
            <label>&nbsp;</label>
            <div className="row">
              <button
                className="btn"
                onClick={async () => {
                  setTestResult(null);
                  const result = await window.api.checkUpdate();
                  if (!result.ok) setTestResult(`✗ ${result.message}`);
                  else if (result.hasUpdate) {
                    setTestResult(`✓ 发现新版本 v${result.latest}(当前 v${result.current})`);
                    void window.api.openExternal(result.url);
                  } else setTestResult(`✓ 已是最新版本(v${result.current})`);
                }}
              >
                检查更新
              </button>
            </div>
          </div>
        </div>
      </Card>
      */}
    </div>
  );
}
