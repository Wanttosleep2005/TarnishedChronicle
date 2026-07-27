import { useMemo, useRef, useState } from 'react';
import type { LlmChatMessage } from '../../../shared/contracts';
import { Card, PageHead } from '../components/ui.tsx';
import { formatPlaytime } from '../lib/format.ts';
import { useSaveContext } from '../lib/save-context.tsx';
import { DS3_STAT_ZH, buildArchetype, formatSouls, soulCostRange } from '../lib/ds3.ts';
import { useDs3 } from '../lib/ds3-context.tsx';

const FIREKEEPER_SYSTEM = `你是传火祭祀场的一位老不死,阅尽无数灰烬的兴衰,替眼前这位不死人看角色、聊构筑。
规则:
1. 简体中文,苍凉幽默、有魂系味,但建议要专业;250 字内,除非对方要求展开。
2. 下方名册来自玩家真实存档,谈及等级/属性/时长必须以名册为准,不得编造。
3. 构筑建议可用你的黑暗之魂 3 知识(武器、软上限、加点),但要区分"名册事实"与"通用攻略"。`;

const QUICK_PROMPTS = [
  '看看我的角色,谁的加点最有问题?',
  '给我的主力角色推荐武器方向',
  'PVP 125 级标准下我该怎么调整?',
  '哪个角色最适合打 DLC?',
];

export function Ds3ChatPage() {
  const { settings } = useSaveContext();
  const { characters } = useDs3();
  const [messages, setMessages] = useState<LlmChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  const facts = useMemo(() => {
    if (characters.length === 0) return '';
    const lines = characters.map((c) => {
      const statText = c.stats
        ? DS3_STAT_ZH.map((s) => `${s.zh}${c.stats![s.key]}`).join(' ')
        : '(属性未解析)';
      return `${c.name}:Lv${c.level} ${c.stats ? buildArchetype(c.stats) : ''} 时长${formatPlaytime(c.playtimeSec)} 累计获魂${formatSouls(c.totalSouls)} 升级已耗魂${formatSouls(soulCostRange(1, c.level))}\n  ${statText}`;
    });
    return `名册(${characters.length} 位不死人):\n${lines.join('\n')}`;
  }, [characters]);

  const hasKey = Boolean(settings?.llm.apiKey) || /(localhost|127\.0\.0\.1)/.test(settings?.llm.baseUrl ?? '');
  const scrollDown = () => requestAnimationFrame(() => listRef.current?.scrollTo({ top: listRef.current.scrollHeight }));

  const send = async (text: string) => {
    const question = text.trim();
    if (!question || sending || !facts) return;
    setInput('');
    const base: LlmChatMessage[] = [...messages, { role: 'user', content: question }];
    setMessages([...base, { role: 'assistant', content: '' }]);
    setSending(true);
    scrollDown();
    try {
      const result = await window.api.llmGenerateStream(
        { system: `${FIREKEEPER_SYSTEM}\n\n———名册———\n${facts}`, user: question, messages: base.slice(-12), maxTokens: 1200 },
        (chunk) => {
          setMessages((prev) => {
            const next = [...prev];
            next[next.length - 1] = { ...next[next.length - 1], content: next[next.length - 1].content + chunk };
            return next;
          });
          scrollDown();
        },
      );
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = { role: 'assistant', content: result.ok ? result.text : `(篝火忽明忽暗:${result.message})` };
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
        title="传火军师"
        sub="熟读名册的老不死 · 回答只依据你的真实角色"
        right={messages.length > 0 ? <button className="btn small" onClick={() => setMessages([])}>清空对话</button> : undefined}
      />

      {!hasKey && (
        <div className="notice">
          尚未配置 LLM。配置与法环侧共用:回启动页进入「褪色者编年史 → 设置」填写即可,三个游戏同时生效。
        </div>
      )}

      <Card>
        <div ref={listRef} style={{ height: '46vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, padding: '4px 2px' }}>
          {messages.length === 0 && (
            <div className="undone" style={{ margin: 'auto', textAlign: 'center', lineHeight: 2 }}>
              「又一位灰烬。说吧,为了什么而传火?」
            </div>
          )}
          {messages.map((message, i) => (
            <div
              key={i}
              style={{
                alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '78%',
                background: message.role === 'user' ? 'rgba(216,130,60,0.12)' : 'var(--panel-3)',
                border: `1px solid ${message.role === 'user' ? 'var(--gold-dim)' : 'var(--line)'}`,
                borderRadius: 10,
                padding: '9px 14px',
                fontSize: 13.5,
                lineHeight: 1.9,
                whiteSpace: 'pre-wrap',
              }}
            >
              {message.content}
              {message.role === 'assistant' && i === messages.length - 1 && sending && <span style={{ color: 'var(--gold)' }}>▍</span>}
            </div>
          ))}
        </div>

        <div className="divider" style={{ margin: '10px 0' }} />
        <div className="tag-cloud" style={{ marginBottom: 10 }}>
          {QUICK_PROMPTS.map((prompt) => (
            <span key={prompt} className="pill" style={{ cursor: 'pointer' }} onClick={() => void send(prompt)}>
              {prompt}
            </span>
          ))}
        </div>
        <div className="row" style={{ flexWrap: 'nowrap' }}>
          <input
            className="input"
            placeholder="向老不死提问…(Enter 发送)"
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
