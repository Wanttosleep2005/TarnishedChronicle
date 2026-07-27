import { useEffect, useMemo, useState } from 'react';
import type { HistorySnapshot, StoryEntry } from '../../../shared/contracts';
import { Card, PageHead } from '../components/ui.tsx';
import { deriveBadges } from '../lib/badges.ts';
import { deriveProfile } from '../lib/derive.ts';
import { formatDateTime } from '../lib/format.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';
import { STORY_SYSTEM_PROMPT, summarizeFacts } from '../lib/story-profile.ts';
import { buildEvents, eventToText } from '../lib/timeline.ts';

export function StoryPage({ goSettings }: { goSettings: () => void }) {
  const slot = useActiveSlot();
  const { settings, savePath, mtimeMs, slotIndex } = useSaveContext();
  const [generating, setGenerating] = useState(false);
  const [story, setStory] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showFacts, setShowFacts] = useState(false);
  const [history, setHistory] = useState<HistorySnapshot[] | null>(null);
  const [archive, setArchive] = useState<StoryEntry[]>([]);

  useEffect(() => {
    if (!savePath) return;
    void window.api.getHistory(savePath).then(setHistory);
    void window.api.listStories(savePath).then(setArchive);
  }, [savePath, mtimeMs]);

  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const badges = useMemo(() => (profile ? deriveBadges(profile) : []), [profile]);
  const recentEvents = useMemo(() => {
    if (!history) return [];
    return buildEvents(history, slotIndex)
      .filter((e) => e.bosses.length > 0 || e.parts.length > 0)
      .slice(0, 10)
      .map((e) => `${formatDateTime(e.t)}:${eventToText(e)}`);
  }, [history, slotIndex]);
  const facts = useMemo(
    () => (profile ? summarizeFacts(profile, badges, recentEvents) : ''),
    [profile, badges, recentEvents],
  );
  if (!slot || !profile) return null;

  const hasKey =
    Boolean(settings?.llm.apiKey) || /(localhost|127\.0\.0\.1)/.test(settings?.llm.baseUrl ?? '');

  const generate = async () => {
    setGenerating(true);
    setError(null);
    setStory('');
    try {
      const result = await window.api.llmGenerateStream(
        {
          system: STORY_SYSTEM_PROMPT,
          user: `请为下面这位褪色者撰写编年史。存档事实如下:\n\n${facts}`,
          maxTokens: 3000,
        },
        (chunk) => setStory((prev) => (prev ?? '') + chunk),
      );
      if (result.ok) {
        setStory(result.text);
        if (savePath && profile) {
          const entry = {
            t: Date.now(),
            slotName: profile.name,
            model: settings?.llm.model || '未知模型',
            text: result.text,
          };
          setArchive(await window.api.saveStory(savePath, entry));
        }
      } else {
        setError(result.message);
        setStory((prev) => (prev ? prev : null));
      }
    } finally {
      setGenerating(false);
    }
  };

  const exportMarkdown = async () => {
    if (!story || !profile) return;
    await window.api.exportText(
      `${profile.name}-褪色者编年史.md`,
      `# ${profile.name} 的褪色者编年史\n\n${story}\n\n---\n\n> 由「褪色者编年史」根据存档数据生成 · ${new Date().toLocaleDateString('zh-CN')}\n`,
    );
  };

  return (
    <div className="page">
      <PageHead
        title="褪色者编年史"
        sub="把存档数据交给编年史官,写下属于这个角色的故事"
        right={
          <div className="row">
            <button className="btn small" onClick={() => setShowFacts(!showFacts)}>
              {showFacts ? '收起' : '查看'}事实档案
            </button>
            <button className="btn primary" onClick={generate} disabled={generating || !hasKey}>
              {generating ? '编年史官执笔中…' : story ? '重写编年史' : '撰写编年史'}
            </button>
          </div>
        }
      />

      {!hasKey && (
        <div className="notice">
          尚未配置 LLM。前往
          <a
            style={{ color: 'var(--gold)', cursor: 'pointer', margin: '0 4px' }}
            onClick={goSettings}
          >
            「设置」
          </a>
          选择服务商(Claude / DeepSeek / Kimi / 智谱 / 通义 / 豆包 / Gemini / 本地 Ollama 等)并填写
          API Key 即可生成故事。事实档案不依赖 API,可先行查看。
        </div>
      )}

      {showFacts && (
        <Card title="事实档案" hint="发给编年史官的原始数据(全部来自存档推导)">
          <pre
            style={{
              whiteSpace: 'pre-wrap',
              fontFamily: 'var(--sans)',
              fontSize: 12.5,
              color: 'var(--muted)',
              lineHeight: 1.8,
            }}
          >
            {facts}
          </pre>
        </Card>
      )}

      {generating && !story && (
        <Card>
          <div className="row" style={{ justifyContent: 'center', padding: 30 }}>
            <div className="spin" />
            <span style={{ color: 'var(--muted)' }}>
              编年史官提笔蘸墨……(流式输出,片刻后逐字浮现)
            </span>
          </div>
        </Card>
      )}

      {error && <div className="notice" style={{ borderColor: 'var(--crimson)' }}>{error}</div>}

      {archive.filter((e) => e.slotName === profile.name).length > 0 && (
        <Card
          title="往期传记"
          hint={`「${profile.name}」共 ${archive.filter((e) => e.slotName === profile.name).length} 篇,自动归档`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 220, overflowY: 'auto' }}>
            {archive
              .filter((e) => e.slotName === profile.name)
              .map((entry) => (
                <div key={entry.t} className="row" style={{ gap: 10 }}>
                  <span className="pill" style={{ flex: 'none' }}>
                    {new Date(entry.t).toLocaleString('zh-CN', { hour12: false })}
                  </span>
                  <span style={{ flex: 1, fontSize: 12.5, color: 'var(--muted)', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                    {entry.text.split('\n')[0]}
                  </span>
                  <span className="en-name" style={{ flex: 'none' }}>{entry.model}</span>
                  <button className="btn small" onClick={() => setStory(entry.text)}>
                    查看
                  </button>
                  <button
                    className="btn small"
                    onClick={() => {
                      if (savePath) void window.api.deleteStory(savePath, entry.t).then(setArchive);
                    }}
                  >
                    删除
                  </button>
                </div>
              ))}
          </div>
        </Card>
      )}

      {story !== null && story.length > 0 && (
        <Card>
          <div className="story-output">
            {story}
            {generating && <span style={{ color: 'var(--gold)' }}>▍</span>}
          </div>
          {!generating && (
            <>
              <div className="divider" style={{ margin: '16px 0' }} />
              <div className="row">
                <span className="pill">模型:{settings?.llm.model || '未知'}</span>
                <span className="spacer" />
                <button className="btn small" onClick={() => void exportMarkdown()}>
                  导出 Markdown
                </button>
                <button className="btn small" onClick={() => void navigator.clipboard.writeText(story)}>
                  复制全文
                </button>
              </div>
            </>
          )}
        </Card>
      )}
    </div>
  );
}
