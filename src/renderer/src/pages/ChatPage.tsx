import { useEffect, useMemo, useRef, useState } from 'react';
import type { HistorySnapshot, LlmChatMessage } from '../../../shared/contracts';
import { Card, PageHead } from '../components/ui.tsx';
import { deriveBadges } from '../lib/badges.ts';
import { deriveProfile } from '../lib/derive.ts';
import { formatDateTime } from '../lib/format.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';
import { summarizeFacts } from '../lib/story-profile.ts';
import { buildEvents, eventToText } from '../lib/timeline.ts';

const ADVISOR_SYSTEM = `你是圆桌厅堂的"军师",一位熟读交界地一切情报的老学士,为面前这位褪色者答疑。
规则:
1. 简体中文,口吻亲切、专业、略带老学士的幽默;回答控制在 250 字内,除非玩家要求展开。
2. 下面提供了这位玩家的存档档案(全部为真实数据)。回答必须以档案为准:谈及"你已/未击败、已/未持有"时只依据档案,不得编造。
3. 玩家问路线/攻略时,可以用你的游戏知识给建议,但要区分"档案里的事实"和"通用攻略知识"。
4. 不剧透玩家明显还没接触的剧情,除非对方明确要求。`;

const QUICK_PROMPTS = [
  '按我的进度,下一个该去打哪个 Boss?',
  '我还缺哪些传说收集?去哪找?',
  '按我的属性推荐三把我已持有的武器',
  '看看我的死亡数据,损我两句',
];

export function ChatPage({ goSettings }: { goSettings: () => void }) {
  const slot = useActiveSlot();
  const { settings, savePath, mtimeMs, slotIndex } = useSaveContext();
  const [messages, setMessages] = useState<LlmChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [history, setHistory] = useState<HistorySnapshot[] | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!savePath) return;
    void window.api.getHistory(savePath).then(setHistory);
  }, [savePath, mtimeMs]);

  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const facts = useMemo(() => {
    if (!profile) return '';
    const recent = history
      ? buildEvents(history, slotIndex)
          .filter((e) => e.bosses.length > 0 || e.parts.length > 0)
          .slice(0, 12)
          .map((e) => `${formatDateTime(e.t)}:${eventToText(e)}`)
      : [];
    return summarizeFacts(profile, deriveBadges(profile), recent);
  }, [profile, history, slotIndex]);

  if (!slot || !profile) return null;

  const hasKey =
    Boolean(settings?.llm.apiKey) || /(localhost|127\.0\.0\.1)/.test(settings?.llm.baseUrl ?? '');

  const scrollDown = () => {
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
    });
  };

  const send = async (text: string) => {
    const question = text.trim();
    if (!question || sending) return;
    setInput('');
    const base: LlmChatMessage[] = [...messages, { role: 'user', content: question }];
    setMessages([...base, { role: 'assistant', content: '' }]);
    setSending(true);
    scrollDown();
    try {
      const result = await window.api.llmGenerateStream(
        {
          system: `${ADVISOR_SYSTEM}\n\n———玩家存档档案———\n${facts}`,
          user: question,
          messages: base.slice(-12),
          maxTokens: 1200,
        },
        (chunk) => {
          setMessages((prev) => {
            const next = [...prev];
            const last = next[next.length - 1];
            next[next.length - 1] = { ...last, content: last.content + chunk };
            return next;
          });
          scrollDown();
        },
      );
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = {
          role: 'assistant',
          content: result.ok ? result.text : `(军师沉默了:${result.message})`,
        };
        return next;
      });
    } finally {
      setSending(false);
      scrollDown();
    }
  };

  return (
    <div className="page">
      <PageHead
        title="军师"
        sub={`与熟知「${profile.name}」存档的老学士对谈——回答只依据你的真实数据`}
        right={
          messages.length > 0 ? (
            <button className="btn small" onClick={() => setMessages([])}>清空对话</button>
          ) : undefined
        }
      />

      {!hasKey && (
        <div className="notice">
          尚未配置 LLM。前往
          <a style={{ color: 'var(--gold)', cursor: 'pointer', margin: '0 4px' }} onClick={goSettings}>「设置」</a>
          选择服务商并填写 API Key 即可与军师对谈。
        </div>
      )}

      <Card>
        <div
          ref={listRef}
          style={{ height: '46vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, padding: '4px 2px' }}
        >
          {messages.length === 0 && (
            <div className="undone" style={{ margin: 'auto', textAlign: 'center', lineHeight: 2 }}>
              「问吧,褪色者。你的存档,老夫已经读过了。」
            </div>
          )}
          {messages.map((message, i) => (
            <div
              key={i}
              style={{
                alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '78%',
                background: message.role === 'user' ? 'rgba(201,166,98,0.13)' : 'var(--panel-3)',
                border: `1px solid ${message.role === 'user' ? 'var(--gold-dim)' : 'var(--line)'}`,
                borderRadius: 10,
                padding: '9px 14px',
                fontSize: 13.5,
                lineHeight: 1.9,
                whiteSpace: 'pre-wrap',
              }}
            >
              {message.content}
              {message.role === 'assistant' && i === messages.length - 1 && sending && (
                <span style={{ color: 'var(--gold)' }}>▍</span>
              )}
            </div>
          ))}
        </div>

        <div className="divider" style={{ margin: '10px 0' }} />
        <div className="tag-cloud" style={{ marginBottom: 10 }}>
          {QUICK_PROMPTS.map((prompt) => (
            <span
              key={prompt}
              className="pill"
              style={{ cursor: 'pointer' }}
              onClick={() => void send(prompt)}
            >
              {prompt}
            </span>
          ))}
        </div>
        <div className="row" style={{ flexWrap: 'nowrap' }}>
          <input
            className="input"
            placeholder="向军师提问…(Enter 发送)"
            value={input}
            disabled={!hasKey || sending}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.nativeEvent.isComposing) void send(input);
            }}
          />
          <button className="btn primary" disabled={!hasKey || sending || !input.trim()} onClick={() => void send(input)}>
            {sending ? '思索中…' : '发送'}
          </button>
        </div>
      </Card>
    </div>
  );
}
