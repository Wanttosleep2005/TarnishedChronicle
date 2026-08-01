/** 单局战报 PNG:StS2 主题(黑蓝+火橙),卡组/遗物用官方原图。 */
import { formatDateTime } from './format.ts';
import {
  actName,
  ascensionLevel,
  bareId,
  cardName,
  characterName,
  encounterName,
  formatRunTime,
  runOutcome,
  type Sts2Player,
  type Sts2Run,
} from './sts2.ts';

const W = 720;
const EMBER = '#f0863f';
const GOLD = '#e8c76a';
const TEXT = '#dbe2ee';
const MUTED = '#8b94a8';
const FAINT = '#5d6579';

async function loadArt(kind: 'card' | 'relic', id: string): Promise<HTMLImageElement | null> {
  try {
    const result = await window.api.sts2Art(kind, bareId(id));
    if (!result.ok) return null;
    return await new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = result.dataUrl;
    });
  } catch {
    return null;
  }
}

export async function buildSts2RunCard(run: Sts2Run, timestampMs: number): Promise<string> {
  const players = (run.players ?? []).filter((p): p is Sts2Player => Boolean(p) && typeof p?.character === 'string').slice(0, 2);
  const H = 250 + players.length * 240 + 90;
  const canvas = document.createElement('canvas');
  canvas.width = W * 2;
  canvas.height = H * 2;
  const ctx = canvas.getContext('2d')!;
  ctx.scale(2, 2);

  // 底色 + 顶部余烬光晕 + 边框
  ctx.fillStyle = '#0a0c12';
  ctx.fillRect(0, 0, W, H);
  const glow = ctx.createRadialGradient(W / 2, 0, 20, W / 2, 0, 420);
  glow.addColorStop(0, 'rgba(240,134,63,0.16)');
  glow.addColorStop(1, 'rgba(240,134,63,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, 420);
  ctx.strokeStyle = '#2a3346';
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, W - 20, H - 20);
  ctx.strokeStyle = 'rgba(240,134,63,0.35)';
  ctx.lineWidth = 1;
  ctx.strokeRect(16, 16, W - 32, H - 32);

  // 标题行
  ctx.fillStyle = EMBER;
  ctx.font = '600 24px "Noto Serif SC", serif';
  ctx.fillText('杀戮尖塔 Ⅱ · 战报', 36, 56);
  ctx.fillStyle = FAINT;
  ctx.font = '12px "Noto Sans SC", sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText(formatDateTime(timestampMs), W - 36, 52);
  ctx.textAlign = 'left';

  // 结局 + 关键数字
  const outcome = runOutcome(run);
  const outcomeColor = outcome.tone === 'win' ? GOLD : outcome.tone === 'loss' ? '#e06a5e' : MUTED;
  ctx.fillStyle = outcomeColor;
  ctx.font = '700 40px "Noto Serif SC", serif';
  ctx.fillText(outcome.tone === 'win' ? '登 顶' : outcome.tone === 'loss' ? '陨 落' : '中途收手', 36, 116);

  const floors = (run.map_point_history ?? []).reduce((n, act) => n + (Array.isArray(act) ? act.length : 0), 0);
  const statBits = [
    `进阶 A${ascensionLevel(run.ascension)}`,
    `用时 ${formatRunTime(run.run_time)}`,
    floors > 0 ? `${floors} 层` : null,
    run.seed ? `种子 ${run.seed}` : null,
  ].filter((s): s is string => s !== null);
  ctx.fillStyle = MUTED;
  ctx.font = '13px "Noto Sans SC", sans-serif';
  ctx.fillText(statBits.join('   ·   '), 36, 146);

  if (Array.isArray(run.acts) && run.acts.length > 0) {
    ctx.fillStyle = FAINT;
    ctx.fillText(`路线  ${run.acts.filter((a) => typeof a === 'string').map(actName).join('  →  ')}`, 36, 172);
  }

  if (outcome.tone === 'loss' && typeof run.killed_by_encounter === 'string' && !run.killed_by_encounter.startsWith('NONE')) {
    ctx.fillStyle = '#e06a5e';
    ctx.fillText(`☠ 终结于:${encounterName(run.killed_by_encounter)}`, 36, 198);
  }

  // 每位玩家:角色 + 卡组图 + 遗物图
  let y = 228;
  for (const player of players) {
    ctx.strokeStyle = '#242c3d';
    ctx.beginPath();
    ctx.moveTo(36, y - 14);
    ctx.lineTo(W - 36, y - 14);
    ctx.stroke();

    const deck = (Array.isArray(player.deck) ? player.deck : []).filter((c) => c && typeof c.id === 'string');
    const relics = (Array.isArray(player.relics) ? player.relics : []).filter((r) => r && typeof r.id === 'string');
    ctx.fillStyle = TEXT;
    ctx.font = '600 18px "Noto Serif SC", serif';
    ctx.fillText(characterName(player.character), 36, y + 8);
    ctx.fillStyle = FAINT;
    ctx.font = '12px "Noto Sans SC", sans-serif';
    ctx.fillText(`卡组 ${deck.length} 张 · 遗物 ${relics.length} 件`, 160, y + 7);

    const cardImages = await Promise.all(deck.slice(0, 8).map((c) => loadArt('card', c.id)));
    let x = 36;
    for (let i = 0; i < cardImages.length; i++) {
      const img = cardImages[i];
      if (img) {
        ctx.drawImage(img, x, y + 20, 76, 58);
        ctx.strokeStyle = '#2a3346';
        ctx.strokeRect(x, y + 20, 76, 58);
      } else {
        ctx.fillStyle = '#141926';
        ctx.fillRect(x, y + 20, 76, 58);
        ctx.fillStyle = MUTED;
        ctx.font = '10px "Noto Sans SC", sans-serif';
        ctx.fillText(cardName(deck[i].id).slice(0, 6), x + 4, y + 52);
      }
      x += 84;
    }
    if (deck.length > 8) {
      ctx.fillStyle = FAINT;
      ctx.font = '12px "Noto Sans SC", sans-serif';
      ctx.fillText(`+${deck.length - 8}`, x + 2, y + 54);
    }

    const relicImages = await Promise.all(relics.slice(0, 14).map((r) => loadArt('relic', r.id)));
    let rx = 36;
    for (const img of relicImages) {
      if (img) ctx.drawImage(img, rx, y + 92, 34, 34);
      else {
        ctx.fillStyle = '#141926';
        ctx.beginPath();
        ctx.arc(rx + 17, y + 109, 16, 0, Math.PI * 2);
        ctx.fill();
      }
      rx += 42;
    }
    if (relics.length > 14) {
      ctx.fillStyle = FAINT;
      ctx.font = '12px "Noto Sans SC", sans-serif';
      ctx.fillText(`+${relics.length - 14}`, rx + 2, y + 114);
    }

    // 核心卡名(前 4 张)
    ctx.fillStyle = MUTED;
    ctx.font = '11.5px "Noto Sans SC", sans-serif';
    ctx.fillText(
      deck.slice(0, 4).map((c) => cardName(c.id)).join(' · ') + (deck.length > 4 ? ' …' : ''),
      36,
      y + 152,
    );

    y += 240;
  }

  // 页脚
  ctx.strokeStyle = '#242c3d';
  ctx.beginPath();
  ctx.moveTo(36, H - 56);
  ctx.lineTo(W - 36, H - 56);
  ctx.stroke();
  ctx.fillStyle = FAINT;
  ctx.font = '11px "Noto Sans SC", sans-serif';
  ctx.fillText('SAVE CHRONICLES · SLAY THE SPIRE 2', 36, H - 34);
  ctx.fillStyle = 'rgba(240,134,63,0.6)';
  ctx.textAlign = 'right';
  ctx.fillText('存档编年史 · 战报卡', W - 36, H - 34);
  ctx.textAlign = 'left';

  return canvas.toDataURL('image/png');
}
