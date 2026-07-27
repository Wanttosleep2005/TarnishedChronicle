import { ZH_ARCHETYPE } from '../data/zh/translations.ts';
import type { BadgeResult } from './badges.ts';
import type { CharacterProfile } from './derive.ts';
import { formatCompact } from './format.ts';
import { buildLabel } from './story-profile.ts';

export type CardTheme = 'gold' | 'parchment';

interface Palette {
  bg: string;
  glow: string;
  frame: string;
  frameInner: string;
  title: string;
  text: string;
  muted: string;
  faint: string;
  barBg: string;
  radar: string;
  radarFill: string;
}

const PALETTES: Record<CardTheme, Palette> = {
  gold: {
    bg: '#100e0a',
    glow: 'rgba(201,166,98,0.14)',
    frame: '#4a3c24',
    frameInner: 'rgba(201,166,98,0.25)',
    title: '#e8d3a0',
    text: '#e8deca',
    muted: '#a2937a',
    faint: '#6e6250',
    barBg: '#241d12',
    radar: '#c9a662',
    radarFill: 'rgba(201,166,98,0.25)',
  },
  parchment: {
    bg: '#efe3c8',
    glow: 'rgba(140,100,40,0.10)',
    frame: '#8a6f3e',
    frameInner: 'rgba(110,80,40,0.35)',
    title: '#5a3d1a',
    text: '#3c2f1a',
    muted: '#6e5a3a',
    faint: '#94805c',
    barBg: '#d9c9a4',
    radar: '#8a6212',
    radarFill: 'rgba(138,98,18,0.22)',
  },
};

const RARITY_COLOR: Record<BadgeResult['rarity'], string> = {
  legendary: '#e0af4e',
  epic: '#9a76c4',
  rare: '#6f95b5',
  common: '#b8b0a0',
};
const RARITY_COLOR_PARCHMENT: Record<BadgeResult['rarity'], string> = {
  legendary: '#a67c14',
  epic: '#6d4b9e',
  rare: '#3f6a8e',
  common: '#7a6a4e',
};

function drawRadar(
  ctx: CanvasRenderingContext2D,
  palette: Palette,
  stats: CharacterProfile['stats'],
  cx: number,
  cy: number,
  radius: number,
): void {
  const values = [stats.vig, stats.mnd, stats.end, stats.str, stats.dex, stats.int, stats.fai, stats.arc];
  const labels = ['生', '集', '耐', '力', '灵', '智', '信', '感'];
  const point = (i: number, r: number): [number, number] => {
    const angle = (Math.PI / 4) * i - Math.PI / 2;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  };
  for (const ratio of [0.5, 1]) {
    ctx.strokeStyle = palette.frame;
    ctx.lineWidth = 1;
    ctx.beginPath();
    values.forEach((_, i) => {
      const [x, y] = point(i, radius * ratio);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.stroke();
  }
  ctx.beginPath();
  values.forEach((v, i) => {
    const [x, y] = point(i, radius * Math.min(1, v / 60));
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = palette.radarFill;
  ctx.fill();
  ctx.strokeStyle = palette.radar;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = palette.muted;
  ctx.font = '13px "Segoe UI", "Microsoft YaHei", sans-serif';
  ctx.textAlign = 'center';
  values.forEach((_, i) => {
    const [x, y] = point(i, radius + 15);
    ctx.fillText(labels[i], x, y + 4);
  });
  ctx.textAlign = 'left';
}

export function drawShareCard(
  profile: CharacterProfile,
  badges: BadgeResult[],
  theme: CardTheme = 'gold',
): string {
  const palette = PALETTES[theme];
  const rarityColor = theme === 'parchment' ? RARITY_COLOR_PARCHMENT : RARITY_COLOR;
  const GOLD = palette.radar;
  const GOLD_LIGHT = palette.title;
  const MUTED = palette.muted;
  const FAINT = palette.faint;

  const W = 1200;
  const H = 675;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;

  // 背景
  ctx.fillStyle = palette.bg;
  ctx.fillRect(0, 0, W, H);
  const glow = ctx.createRadialGradient(W * 0.85, -60, 40, W * 0.85, -60, 700);
  glow.addColorStop(0, palette.glow);
  glow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  // 边框
  ctx.strokeStyle = palette.frame;
  ctx.lineWidth = 2;
  ctx.strokeRect(18, 18, W - 36, H - 36);
  ctx.strokeStyle = palette.frameInner;
  ctx.strokeRect(26, 26, W - 52, H - 52);

  // 雷达图(右上)
  drawRadar(ctx, palette, profile.stats, W - 165, 160, 92);

  const serif = 'Georgia, "STSong", "SimSun", serif';
  const sans = '"Segoe UI", "Microsoft YaHei", sans-serif';

  // 头部
  ctx.fillStyle = FAINT;
  ctx.font = `15px ${sans}`;
  ctx.fillText('褪 色 者 编 年 史 · 战 绩 卡', 64, 78);

  ctx.fillStyle = GOLD_LIGHT;
  ctx.font = `600 58px ${serif}`;
  ctx.fillText(profile.name, 60, 150);

  ctx.fillStyle = MUTED;
  ctx.font = `19px ${sans}`;
  ctx.fillText(
    `${ZH_ARCHETYPE[profile.archetype] ?? '未知职业'} · 等级 ${profile.level} · ${buildLabel(profile.stats)}${profile.dlcEntered ? ' · 幽影之地' : ''}`,
    62,
    186,
  );

  // 分隔线
  const rule = ctx.createLinearGradient(60, 0, W - 60, 0);
  rule.addColorStop(0, 'rgba(147,121,74,0)');
  rule.addColorStop(0.5, 'rgba(147,121,74,0.9)');
  rule.addColorStop(1, 'rgba(147,121,74,0)');
  ctx.fillStyle = rule;
  ctx.fillRect(60, 212, W - 120, 1);

  // 数据列
  const stats: [string, string][] = [
    ['游玩时长', `${profile.hoursPlayed.toFixed(1)} 小时`],
    ['死亡次数', `${profile.deaths.toLocaleString('zh-CN')}`],
    ['累计卢恩', formatCompact(profile.runesMemory)],
    ['Boss 讨伐', `${profile.bossesDefeated} / ${profile.bossTotal}`],
    ['赐福点亮', `${profile.gracesLit} / ${profile.graceTotal}`],
    ['大卢恩', `${profile.greatRunes.filter((r) => r.owned).length} / ${profile.greatRunes.length}`],
  ];
  const colWidth = (W - 340) / stats.length;
  stats.forEach(([label, value], i) => {
    const cx = 62 + i * colWidth;
    ctx.fillStyle = FAINT;
    ctx.font = `15px ${sans}`;
    ctx.fillText(label, cx, 262);
    ctx.fillStyle = GOLD_LIGHT;
    ctx.font = `600 30px ${serif}`;
    ctx.fillText(value, cx, 302);
  });

  // 进度条
  const bar = (label: string, value: number, total: number, y: number, color: string) => {
    const bw = W - 124;
    ctx.fillStyle = FAINT;
    ctx.font = `13px ${sans}`;
    ctx.fillText(label, 62, y - 8);
    ctx.fillStyle = palette.barBg;
    ctx.beginPath();
    ctx.roundRect(62, y, bw, 10, 5);
    ctx.fill();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(62, y, Math.max(10, bw * Math.min(1, value / Math.max(total, 1))), 10, 5);
    ctx.fill();
  };
  bar('讨伐进度', profile.bossesDefeated, profile.bossTotal, 348, GOLD);
  bar('探索进度(赐福)', profile.gracesLit, profile.graceTotal, 396, theme === 'parchment' ? '#3f6a8e' : '#5b86a3');

  // 徽章
  const earned = badges.filter((b) => b.earned).slice(0, 8);
  ctx.fillStyle = FAINT;
  ctx.font = `15px ${sans}`;
  ctx.fillText(`获得徽章(${badges.filter((b) => b.earned).length} 枚)`, 62, 452);

  let bx = 62;
  let by = 474;
  ctx.font = `17px ${sans}`;
  for (const badge of earned) {
    const text = `${badge.icon} ${badge.name}`;
    const width = ctx.measureText(text).width + 34;
    if (bx + width > W - 62) {
      bx = 62;
      by += 52;
      if (by > 570) break;
    }
    ctx.strokeStyle = rarityColor[badge.rarity];
    ctx.lineWidth = badge.rarity === 'legendary' ? 2 : 1.2;
    ctx.fillStyle = theme === 'parchment' ? 'rgba(110,80,40,0.08)' : 'rgba(201,166,98,0.06)';
    ctx.beginPath();
    ctx.roundRect(bx, by, width, 40, 20);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = rarityColor[badge.rarity];
    ctx.fillText(text, bx + 17, by + 26);
    bx += width + 12;
  }
  if (earned.length === 0) {
    ctx.fillStyle = MUTED;
    ctx.fillText('尚未获得徽章——传说仍在书写。', 62, 500);
  }

  // 页脚
  ctx.fillStyle = FAINT;
  ctx.font = `13px ${sans}`;
  ctx.fillText(`TARNISHED CHRONICLE · ${new Date().toLocaleDateString('zh-CN')}`, 62, H - 44);
  ctx.textAlign = 'right';
  ctx.fillStyle = MUTED;
  ctx.font = `15px ${serif}`;
  ctx.fillText('愿引导之恩与你同在', W - 62, H - 44);
  ctx.textAlign = 'left';

  return canvas.toDataURL('image/png');
}
