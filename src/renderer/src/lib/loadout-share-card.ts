import type { CharacterProfile } from './derive.ts';

export interface LoadoutShareData {
  stats: CharacterProfile['stats'];
  rightWeapon: string;
  leftWeapon: string;
  armor: string[];
  talismans: string[];
  rightAr: number | null;
  leftAr: number | null;
  weight: number;
  maxWeight: number;
  poise: number;
  physical: number;
  magic: number;
  fire: number;
  lightning: number;
  holy: number;
}

function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number): void {
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
  ctx.fill();
}

export function drawLoadoutShareCard(profile: CharacterProfile, data: LoadoutShareData): string {
  const width = 1200;
  const height = 675;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const colors = {
    bg: '#100e0a',
    panel: '#1b1710',
    panel2: '#251f15',
    line: '#5b4828',
    gold: '#e8c76a',
    text: '#eee4cc',
    muted: '#a89b83',
    faint: '#70634e',
    green: '#8bb17d',
  };
  const serif = 'Georgia, "STSong", "SimSun", serif';
  const sans = '"Segoe UI", "Microsoft YaHei", sans-serif';

  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, width, height);
  const glow = ctx.createRadialGradient(960, -30, 20, 960, -30, 620);
  glow.addColorStop(0, 'rgba(201,166,98,0.18)');
  glow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = colors.line;
  ctx.lineWidth = 2;
  ctx.strokeRect(18, 18, width - 36, height - 36);
  ctx.strokeStyle = 'rgba(201,166,98,0.25)';
  ctx.strokeRect(27, 27, width - 54, height - 54);

  ctx.fillStyle = colors.faint;
  ctx.font = `14px ${sans}`;
  ctx.fillText('TARNISHED CHRONICLE  /  配装方案', 60, 72);
  ctx.fillStyle = colors.gold;
  ctx.font = `600 44px ${serif}`;
  ctx.fillText(profile.name, 60, 124);
  ctx.fillStyle = colors.muted;
  ctx.font = `16px ${sans}`;
  ctx.fillText(`Lv ${profile.level}  ·  当前属性推演`, 62, 154);

  const statLabels = ['生命', '集中', '耐力', '力气', '灵巧', '智力', '信仰', '感应'];
  const statValues = [data.stats.vig, data.stats.mnd, data.stats.end, data.stats.str, data.stats.dex, data.stats.int, data.stats.fai, data.stats.arc];
  const statWidth = 66;
  statLabels.forEach((label, index) => {
    const x = 62 + index * statWidth;
    ctx.fillStyle = colors.faint;
    ctx.font = `12px ${sans}`;
    ctx.fillText(label, x, 194);
    ctx.fillStyle = colors.text;
    ctx.font = `600 21px ${serif}`;
    ctx.fillText(String(statValues[index]), x, 220);
  });

  const panel = (x: number, y: number, w: number, h: number) => {
    ctx.fillStyle = colors.panel;
    roundedRect(ctx, x, y, w, h, 8);
    ctx.strokeStyle = 'rgba(201,166,98,0.2)';
    ctx.stroke();
  };
  panel(60, 250, 530, 250);
  panel(610, 250, 530, 250);

  const line = (label: string, value: string, x: number, y: number, valueColor = colors.text) => {
    ctx.fillStyle = colors.faint;
    ctx.font = `13px ${sans}`;
    ctx.fillText(label, x, y);
    ctx.fillStyle = valueColor;
    ctx.font = `16px ${sans}`;
    ctx.fillText(value, x + 120, y);
  };
  ctx.fillStyle = colors.gold;
  ctx.font = `18px ${serif}`;
  ctx.fillText('武器', 84, 286);
  line('右手', `${data.rightWeapon}${data.rightAr === null ? '' : `  ·  AR ${Math.floor(data.rightAr)}`}`, 84, 324, colors.gold);
  line('左手', `${data.leftWeapon}${data.leftAr === null ? '' : `  ·  AR ${Math.floor(data.leftAr)}`}`, 84, 358);
  line('装备重量', `${data.weight.toFixed(1)} / ${data.maxWeight.toFixed(1)}`, 84, 402, data.weight > data.maxWeight ? '#d38a75' : colors.text);
  line('韧性', data.poise.toFixed(1), 84, 436);
  line('减伤', `物理 ${data.physical.toFixed(1)}  魔力 ${data.magic.toFixed(1)}  火 ${data.fire.toFixed(1)}`, 84, 470);

  ctx.fillStyle = colors.gold;
  ctx.font = `18px ${serif}`;
  ctx.fillText('护甲与护符', 634, 286);
  const armorLines = [...data.armor, ...data.talismans];
  armorLines.slice(0, 7).forEach((item, index) => {
    ctx.fillStyle = index < data.armor.length ? colors.text : colors.muted;
    ctx.font = `15px ${sans}`;
    ctx.fillText(item || '空槽', 634, 322 + index * 27);
  });

  ctx.fillStyle = colors.faint;
  ctx.font = `13px ${sans}`;
  ctx.fillText('雷电 / 神圣减伤', 634, 468);
  ctx.fillStyle = colors.text;
  ctx.font = `15px ${sans}`;
  ctx.fillText(`${data.lightning.toFixed(1)}  /  ${data.holy.toFixed(1)}`, 780, 468);

  ctx.fillStyle = colors.green;
  ctx.font = `13px ${sans}`;
  ctx.fillText('效果说明以游戏内实际条件为准，数值未合并条件性增伤。', 60, 560);
  ctx.fillStyle = colors.faint;
  ctx.font = `12px ${sans}`;
  ctx.fillText(`TARNISHED CHRONICLE  ·  ${new Date().toLocaleDateString('zh-CN')}`, 60, height - 48);
  ctx.textAlign = 'right';
  ctx.fillText('离线生成 · 可直接分享', width - 60, height - 48);
  ctx.textAlign = 'left';

  return canvas.toDataURL('image/png');
}
