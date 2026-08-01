import { mkdirSync, writeFileSync } from 'node:fs';
import { deriveCollections } from '../src/renderer/src/lib/collections.ts';
import { GAMERSKY_ARMOR_ACQUISITION } from './data/gamersky-armor-acquisition.ts';

const profile = {
  ownedWeaponBaseIds: new Set<number>(),
  ownedArmorIds: new Set<number>(),
  ownedTalismanIds: new Set<number>(),
  ownedGoodsIds: new Set<number>(),
  ownedAshOfWarIds: new Set<number>(),
};
const entries = new Map(
  deriveCollections(profile).entries
    .filter((entry) => entry.kind === 'armor')
    .map((entry) => [entry.key, entry] as const),
);
const inferredKeys = new Set(['armor:470100', 'armor:630200']);
const categoryLabel: Readonly<Record<string, string>> = {
  Head: '头部',
  Body: '身体',
  Arms: '腕部',
  Legs: '腿部',
};
const sourceKindLabel: Readonly<Record<string, string>> = {
  shop: '商人 / 购买',
  enemy: '敌人 / 首领掉落',
  quest: '任务 / 事件奖励',
  map: '地图拾取 / 宝箱',
  other: '其他来源',
};

const rows = Object.entries(GAMERSKY_ARMOR_ACQUISITION)
  .map(([key, record]) => {
    const entry = entries.get(key);
    if (!entry) return null;
    return {
      物品ID: record.itemId,
      防具名称: entry.name,
      部位: categoryLabel[entry.category] ?? entry.category,
      获取文本: record.summary,
      来源类型: sourceKindLabel[record.sourceKind] ?? record.sourceKind,
      核对方式: record.verification ?? (inferredKeys.has(key) ? '同页资料补全' : 'OCR原图提取'),
      攻略分页: record.sourceUrl,
      来源标题: record.sourceTitle,
    };
  })
  .filter((row): row is NonNullable<typeof row> => row !== null)
  .sort((left, right) => left.物品ID - right.物品ID);

const columns = ['物品ID', '防具名称', '部位', '获取文本', '来源类型', '核对方式', '攻略分页', '来源标题'] as const;
const csvCell = (value: unknown): string => `"${String(value ?? '').replace(/"/g, '""')}"`;
const csv = `\uFEFF${columns.join(',')}\n${rows.map((row) => columns.map((column) => csvCell(row[column])).join(',')).join('\n')}\n`;

mkdirSync('exports', { recursive: true });
writeFileSync('exports/gamersky-armor-acquisition.csv', csv, 'utf8');
console.log(`已导出 ${rows.length} 条防具 OCR 获取文本：exports/gamersky-armor-acquisition.csv`);
