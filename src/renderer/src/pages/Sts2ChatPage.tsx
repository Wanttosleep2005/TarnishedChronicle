import { useMemo, useRef, useState } from 'react';
import type { LlmChatMessage } from '../../../shared/contracts';
import { Card, PageHead } from '../components/ui.tsx';
import { formatDateTime, formatPlaytime } from '../lib/format.ts';
import { useSaveContext } from '../lib/save-context.tsx';
import { useSts2 } from '../lib/sts2-context.tsx';
import { ascensionLevel, cardName, characterName, encounterName, formatRunTime, relicName, runOutcome } from '../lib/sts2.ts';
import { cardPickRates, coopCombos, killerCounts, relicWinRates } from '../lib/sts2-stats.ts';

const SPIRE_ADVISOR_SYSTEM = `你是尖塔顶端的观测者,一位看过无数次攀塔的老登山客,为面前这位玩家复盘与支招。
规则:
1. 简体中文,口吻犀利幽默、懂梗但专业;回答控制在 250 字内,除非玩家要求展开。
2. 下方档案全部来自玩家真实存档。谈及胜率、连胜、某局细节时只依据档案,不得编造。
3. 玩家问构筑思路时,可以用你的杀戮尖塔知识给建议,但要区分"档案事实"和"通用攻略"。`;

const QUICK_PROMPTS = [
  '我最近的对局表现怎么样?',
  '我哪个角色最该练?为什么?',
  '看看我的毒瘤卡,损我两句',
  '推荐一个我下一局该试的挑战',
];

export function Sts2ChatPage() {
  const { settings } = useSaveContext();
  const { progress, runs, summaries } = useSts2();
  const [messages, setMessages] = useState<LlmChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  const facts = useMemo(() => {
    if (!progress) return '';
    const lines: string[] = [];
    lines.push(`总时长:${formatPlaytime(progress.total_playtime ?? 0)};累计爬层:${progress.floors_climbed ?? 0};对局:${runs.length}`);
    const cs = (progress.character_stats ?? []).filter((c) => (c.total_wins ?? 0) + (c.total_losses ?? 0) > 0);
    lines.push(
      '角色战绩:' +
        cs
          .map(
            (c) =>
              `${characterName(c.id)} ${c.total_wins ?? 0}胜${c.total_losses ?? 0}负(最高A${ascensionLevel(c.max_ascension)},最佳连胜${c.best_win_streak ?? 0})`,
          )
          .join(';'),
    );
    const cardRows = (progress.card_stats ?? [])
      .map((c) => {
        const games = (c.times_won ?? 0) + (c.times_lost ?? 0);
        return { id: c.id, games, rate: games > 0 ? (c.times_won ?? 0) / games : 0 };
      })
      .filter((c) => c.games >= 5);
    const best = [...cardRows].sort((a, b) => b.rate - a.rate).slice(0, 5);
    const worst = [...cardRows].sort((a, b) => a.rate - b.rate).slice(0, 5);
    lines.push(`本命卡:${best.map((c) => `${cardName(c.id)}(${Math.round(c.rate * 100)}%/${c.games}局)`).join('、')}`);
    lines.push(`毒瘤卡:${worst.map((c) => `${cardName(c.id)}(${Math.round(c.rate * 100)}%/${c.games}局)`).join('、')}`);
    const nemesis = (progress.enemy_stats ?? [])
      .map((e) => ({
        id: e.enemy_id ?? '',
        losses: (e.fight_stats ?? []).reduce((n, f) => n + (f.losses ?? 0), 0),
      }))
      .filter((e) => e.losses > 0)
      .sort((a, b) => b.losses - a.losses)
      .slice(0, 5);
    lines.push(`苦手敌人:${nemesis.map((e) => `${encounterName(e.id)}(败${e.losses}次)`).join('、')}`);
    const relics = relicWinRates(summaries);
    const bestRelics = [...relics].sort((a, b) => b.winrate - a.winrate).slice(0, 4);
    const worstRelics = [...relics].sort((a, b) => a.winrate - b.winrate).slice(0, 4);
    if (relics.length > 0) {
      lines.push(`本命遗物:${bestRelics.map((r) => `${relicName(r.id)}(${Math.round(r.winrate * 100)}%/${r.games}局)`).join('、')}`);
      lines.push(`毒瘤遗物:${worstRelics.map((r) => `${relicName(r.id)}(${Math.round(r.winrate * 100)}%/${r.games}局)`).join('、')}`);
    }
    const killers = killerCounts(summaries).slice(0, 4);
    if (killers.length > 0) {
      lines.push(`终结整局最多的凶手:${killers.map(([id, n]) => `${encounterName(id)}(×${n})`).join('、')}`);
    }
    const picks = cardPickRates(summaries);
    const topPick = [...picks].sort((a, b) => b.rate - a.rate).slice(0, 4);
    const topSkip = [...picks].sort((a, b) => a.rate - b.rate).slice(0, 4);
    if (picks.length > 0) {
      lines.push(`三选一最常拿:${topPick.map((c) => `${cardName(c.id)}(${Math.round(c.rate * 100)}%)`).join('、')};最常跳:${topSkip.map((c) => `${cardName(c.id)}(${Math.round(c.rate * 100)}%)`).join('、')}`);
    }
    const combos = coopCombos(summaries).slice(0, 3);
    if (combos.length > 0) {
      lines.push(`联机搭档:${combos.map((c) => `${c.characters.map(characterName).join('+')} ${c.wins}/${c.games}胜`).join('、')}`);
    }
    const recent = runs
      .slice(0, 10)
      .map((meta) => {
        const run = summaries.get(meta.path);
        if (!run) return null;
        const who = (run.players ?? []).filter((p) => p?.character).map((p) => characterName(p.character)).join('+');
        return `${formatDateTime(meta.t)} ${who} A${ascensionLevel(run.ascension)} ${runOutcome(run).label} 用时${formatRunTime(run.run_time)}`;
      })
      .filter((l): l is string => l !== null);
    lines.push(`最近对局:\n${recent.map((l) => `  - ${l}`).join('\n')}`);
    return lines.join('\n');
  }, [progress, runs, summaries]);

  const hasKey =
    Boolean(settings?.llm.apiKey) || /(localhost|127\.0\.0\.1)/.test(settings?.llm.baseUrl ?? '');

  const scrollDown = () => {
    requestAnimationFrame(() => listRef.current?.scrollTo({ top: listRef.current.scrollHeight }));
  };

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
        {
          system: `${SPIRE_ADVISOR_SYSTEM}\n\n———玩家档案———\n${facts}`,
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
          content: result.ok ? result.text : `(观测者沉默了:${result.message})`,
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
        title="尖塔军师"
        sub="熟读你全部战绩的观测者 · 回答只依据你的真实数据"
        right={messages.length > 0 ? <button className="btn small" onClick={() => setMessages([])}>清空对话</button> : undefined}
      />

      {!hasKey && (
        <div className="notice">
          尚未配置 LLM。LLM 配置与法环侧共用:回启动页进入「褪色者编年史 → 设置」填写即可,两边同时生效。
        </div>
      )}

      <Card>
        <div ref={listRef} style={{ height: '46vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, padding: '4px 2px' }}>
          {messages.length === 0 && (
            <div className="undone" style={{ margin: 'auto', textAlign: 'center', lineHeight: 2 }}>
              「说吧,攀塔者。你摔下去的每一次,我都看见了。」
            </div>
          )}
          {messages.map((message, i) => (
            <div
              key={i}
              style={{
                alignSelf: message.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '78%',
                background: message.role === 'user' ? 'rgba(224,121,63,0.13)' : 'var(--panel-3)',
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
            <span key={prompt} className="pill" style={{ cursor: 'pointer' }} onClick={() => void send(prompt)}>
              {prompt}
            </span>
          ))}
        </div>
        <div className="row" style={{ flexWrap: 'nowrap' }}>
          <input
            className="input"
            placeholder="向观测者提问…(Enter 发送)"
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
