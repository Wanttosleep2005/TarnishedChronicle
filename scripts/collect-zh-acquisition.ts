import { writeFile } from 'node:fs/promises';
import { request as httpsRequest } from 'node:https';
import { deriveCollections } from '../src/renderer/src/lib/collections.ts';
import { COLLECTION_ACQUISITION } from '../src/renderer/src/data/zh/collection-acquisition.ts';
import { BWIKI_ACQUISITION_CACHE } from './data/bwiki-acquisition-cache.ts';
import { GAMERSKY_ARMOR_ACQUISITION } from './data/gamersky-armor-acquisition.ts';

type CollectionKind = 'armor' | 'talisman' | 'sorcery' | 'incantation' | 'spirit-ash' | 'ash-of-war';
type SourceKind = 'shop' | 'enemy' | 'quest' | 'map' | 'other' | 'unknown';

interface GuideDefinition {
  readonly url: string;
  readonly title: string;
}

interface GuidePage {
  readonly title: string;
  readonly url: string;
  readonly summary: string;
}

interface ZhRecord {
  readonly kind: CollectionKind;
  readonly itemId: number;
  readonly sourceKind: SourceKind;
  readonly summary: string;
  readonly details: string;
  readonly sourceTitle: string;
  readonly sourceUrl: string;
  readonly verified: boolean;
  readonly pin?: (typeof COLLECTION_ACQUISITION)[string]['pin'];
}

interface AcquisitionEntry {
  readonly key: string;
  readonly kind: CollectionKind;
  readonly id: number;
  readonly name: string;
}

function normalizeAcquisitionPunctuation(value: string): string {
  return value
    .replace(/([。！？.!?])；+/g, '$1')
    .replace(/；{2,}/g, '；')
    .replace(/；([。！？.!?])/g, '$1');
}

const GUIDE_BY_KIND: Readonly<Record<CollectionKind, GuideDefinition>> = {
  armor: {
    url: 'https://www.gamersky.com/handbook/202204/1475060.shtml',
    title: '游民星空《艾尔登法环》防具图鉴',
  },
  talisman: {
    url: 'https://www.gamersky.com/handbook/202205/1483313.shtml',
    title: '游民星空《艾尔登法环》全护符收集图文攻略',
  },
  sorcery: {
    url: 'https://www.gamersky.com/handbook/202205/1481155.shtml',
    title: '游民星空《艾尔登法环》全魔法收集图文攻略',
  },
  incantation: {
    url: 'https://www.gamersky.com/handbook/202205/1482297.shtml',
    title: '游民星空《艾尔登法环》全祷告收集图文攻略',
  },
  'spirit-ash': {
    url: 'https://www.gamersky.com/handbook/202207/1502257.shtml',
    title: '游民星空《艾尔登法环》全骨灰收集图文攻略',
  },
  'ash-of-war': {
    url: 'https://www.gamersky.com/handbook/202205/1480430.shtml',
    title: '游民星空《艾尔登法环》全战灰收集图文攻略',
  },
};

function requestText(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const request = httpsRequest(url, (response) => {
      let body = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => { body += chunk; });
      response.on('end', () => {
        if ((response.statusCode ?? 500) >= 400) {
          reject(new Error(`${response.statusCode} ${url}`));
          return;
        }
        resolve(body);
      });
    });
    request.setTimeout(20000, () => request.destroy(new Error(`timeout ${url}`)));
    request.on('error', reject);
    request.end();
  });
}

async function fetchWithRetry(url: string): Promise<string | null> {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      return await requestText(url);
    } catch {
      if (attempt === 2) return null;
    }
  }
  return null;
}

async function mapConcurrent<T, R>(items: readonly T[], limit: number, work: (item: T) => Promise<R>): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const index = cursor;
      cursor += 1;
      if (index >= items.length) return;
      results[index] = await work(items[index]);
    }
  });
  await Promise.all(workers);
  return results;
}

function decodeHtml(value: string): string {
  return normalizeAcquisitionPunctuation(value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCodePoint(Number.parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, decimal: string) => String.fromCodePoint(Number.parseInt(decimal, 10)))
    .replace(/\bBOSS\b/gi, '首领')
    .replace(/\bNPC\b/gi, '角色')
    .replace(/[ \t\r\n]+/g, ' ')
    .trim());
}

function encodeTitle(title: string): string {
  return encodeURIComponent(title).replace(/%20/g, '_');
}

function candidateTitles(name: string): string[] {
  const candidates = [name];
  const withoutPrefix = name.replace(/^(?:战灰|魔法|祷告)：/, '');
  if (withoutPrefix !== name) candidates.push(withoutPrefix);
  const withoutLegend = withoutPrefix.replace(/（传说）$/, '');
  if (withoutLegend !== withoutPrefix) candidates.push(withoutLegend);
  const withoutAshPrefix = withoutPrefix.replace(/^战灰\s*/, '');
  if (withoutAshPrefix !== withoutPrefix) candidates.push(withoutAshPrefix);
  return [...new Set(candidates.filter(Boolean))];
}

function parseBwikiAcquisition(html: string): string | null {
  const start = html.indexOf('id="bwiki_er_item_coll"');
  if (start < 0) return null;
  const end = html.indexOf('id="bwiki_er_item_upgrade"', start);
  const section = html.slice(start, end > start ? end : start + 30000);
  const cells = [...section.matchAll(/<td(?:\s[^>]*)?>([\s\S]*?)<\/td>/gi)]
    .map((match) => decodeHtml(match[1]));
  const markerIndex = cells.findIndex((cell) => cell.includes('获取途径'));
  if (markerIndex < 0) return null;
  const value = cells.slice(markerIndex + 1).find((cell) => cell && !cell.includes('MENU Br Line'));
  return value || null;
}

function normalizeGuideTitle(value: string): string {
  return decodeHtml(value)
    .replace(/^战灰：/, '')
    .replace(/（传说）$/, '')
    .replace(/^厚重[-：]|^锋利[-：]|^优质[-：]|^魔力[-：]|^寒冷[-：]|^火焰[-：]|^火焰艺术[-：]|^雷电[-：]|^神圣[-：]|^毒[-：]|^血[-：]|^神秘[-：]/, '')
    .replace(/[：:·\-\s]/g, '')
    .trim();
}

function stripGuideMarkup(value: string): string {
  return decodeHtml(value)
    .replace(/游民(?:星空)?《艾尔登法环》DLC互动地图[\s\S]*/g, '')
    .replace(/更多相关内容请关注[\s\S]*/g, '')
    .trim();
}

function parseGuidePage(html: string, url: string): GuidePage | null {
  const titleMatch = html.match(/class="GsWeTxt1"[^>]*>([\s\S]*?)<\/div>/i);
  if (!titleMatch) return null;
  const title = stripGuideMarkup(titleMatch[1]);
  const start = titleMatch.index ?? 0;
  const end = html.indexOf('<!--{pe.begin.pagination}-->', start);
  const content = html.slice(start, end > start ? end : start + 150000);
  const paragraphs = [...content.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/gi)]
    .map((match) => stripGuideMarkup(match[1]))
    .filter((paragraph) => paragraph.length >= 4)
    .filter((paragraph) => !paragraph.includes('该') || /位于|获得|购买|击败|完成|兑换|掉落|获取|宝箱|对话|奖励/.test(paragraph))
    .filter((paragraph) => !/DLC互动地图|责任编辑|更多相关内容/.test(paragraph));
  const summary = paragraphs
    .filter((paragraph) => /位于|获得|购买|击败|完成|兑换|掉落|获取|宝箱|对话|奖励|探索/.test(paragraph))
    .join('；');
  return { title, url, summary: normalizeAcquisitionPunctuation(summary) };
}

function guidePageUrls(indexHtml: string, indexUrl: string): string[] {
  const base = indexUrl.replace(/\.shtml$/, '');
  const urls = [...indexHtml.matchAll(/https:\/\/www\.gamersky\.com\/handbook\/\d+\/\d+(?:_\d+)?\.shtml/g)]
    .map((match) => match[0])
    .filter((url) => url === indexUrl || url.startsWith(`${base}_`));
  return [...new Set([indexUrl, ...urls])].sort((left, right) => {
    const number = (url: string) => Number(url.match(/_(\d+)\.shtml$/)?.[1] ?? 1);
    return number(left) - number(right);
  });
}

function sourceKindFromText(text: string): SourceKind {
  if (/购买|商人|商店|兑换|花费/.test(text)) return 'shop';
  if (/击败|击杀|敌人|掉落|首领|Boss|boss/.test(text)) return 'enemy';
  if (/任务|支线|对话|奖励|交给|完成/.test(text)) return 'quest';
  if (/位于|宝箱|拾取|地牢|墓地|洞窟|遗迹|区域|地图/.test(text)) return 'map';
  return 'other';
}

function isConcreteAcquisition(text: string): boolean {
  return /赐福|位于|(?:从|由).{0,30}(?:掉落|获得)|击败|击杀|消灭|掉落|商人|购买|花费|售价|兑换|任务|支线|对话|交谈|交给|完成|奖励|宝箱|拾取|前往|沿着|进入|来到|穿过|探索|调查|赐予|赠予/.test(text);
}

function entryMatchesGuide(entry: { readonly kind: CollectionKind; readonly name: string }, title: string): boolean {
  const item = normalizeGuideTitle(entry.name);
  const page = normalizeGuideTitle(title);
  if (item.length < 3 || page.length < 3) return false;
  if (item === page || item.endsWith(page) || page.endsWith(item)) return true;
  return false;
}

async function collectGuidePages(): Promise<readonly GuidePage[]> {
  const pages: GuidePage[] = [];
  for (const definition of Object.values(GUIDE_BY_KIND)) {
    const indexHtml = await fetchWithRetry(definition.url);
    if (!indexHtml) continue;
    const urls = guidePageUrls(indexHtml, definition.url);
    const fetched = await mapConcurrent(urls, 8, async (url) => {
      const html = await fetchWithRetry(url);
      return html ? parseGuidePage(html, url) : null;
    });
    pages.push(...fetched.filter((page): page is GuidePage => page !== null));
  }
  return pages;
}

async function collectBwikiRecord(entry: { readonly key: string; readonly kind: CollectionKind; readonly id: number; readonly name: string }): Promise<ZhRecord | null> {
  const cached = BWIKI_ACQUISITION_CACHE[entry.key];
  if (cached) {
    return {
      kind: entry.kind,
      itemId: entry.id,
      sourceKind: cached.sourceKind,
      summary: decodeHtml(cached.summary),
      details: '',
      sourceTitle: cached.sourceTitle,
      sourceUrl: cached.sourceUrl,
      verified: true,
      ...(COLLECTION_ACQUISITION[entry.key]?.pin ? { pin: COLLECTION_ACQUISITION[entry.key].pin } : {}),
    };
  }
  if (entry.kind === 'armor' && entry.id < 40000) return null;
  for (const title of candidateTitles(entry.name)) {
    const url = `https://wiki.biligame.com/eldenring/${encodeTitle(title)}`;
    const html = await fetchWithRetry(url);
    if (!html) continue;
    const summary = parseBwikiAcquisition(html);
    if (!summary || !isConcreteAcquisition(summary)) continue;
    return {
      kind: entry.kind,
      itemId: entry.id,
      sourceKind: sourceKindFromText(summary),
      summary,
      details: '',
      sourceTitle: title,
      sourceUrl: url,
      verified: true,
      ...(COLLECTION_ACQUISITION[entry.key]?.pin ? { pin: COLLECTION_ACQUISITION[entry.key].pin } : {}),
    };
  }
  return null;
}

function fallbackRecord(entry: { readonly key: string; readonly kind: CollectionKind; readonly id: number }): ZhRecord {
  const guide = GUIDE_BY_KIND[entry.kind];
  return {
    kind: entry.kind,
    itemId: entry.id,
    sourceKind: 'unknown',
    summary: '中文攻略待补：暂未找到包含该条目获取途径的中文页面。',
    details: '',
    sourceTitle: guide.title,
    sourceUrl: guide.url,
    verified: false,
    ...(COLLECTION_ACQUISITION[entry.key]?.pin ? { pin: COLLECTION_ACQUISITION[entry.key].pin } : {}),
  };
}

async function main(): Promise<void> {
  const emptyProfile = {
    ownedWeaponBaseIds: new Set<number>(),
    ownedArmorIds: new Set<number>(),
    ownedTalismanIds: new Set<number>(),
    ownedGoodsIds: new Set<number>(),
    ownedAshOfWarIds: new Set<number>(),
  };
  const entries = deriveCollections(emptyProfile).entries.filter((entry) => entry.kind !== 'weapon') as AcquisitionEntry[];
  const guidePages = await collectGuidePages();
  const bwikiRecords = await mapConcurrent(entries, 8, (entry) => collectBwikiRecord(entry));
  const records: Record<string, ZhRecord> = {};
  let bwikiCount = 0;
  let guideCount = 0;
  for (const [index, entry] of entries.entries()) {
    const bwikiRecord = bwikiRecords[index];
    if (bwikiRecord) {
      records[entry.key] = bwikiRecord;
      bwikiCount += 1;
      continue;
    }
    const armorGuide = GAMERSKY_ARMOR_ACQUISITION[entry.key];
    if (armorGuide) {
      records[entry.key] = {
        kind: entry.kind,
        itemId: entry.id,
        sourceKind: armorGuide.sourceKind,
        summary: decodeHtml(armorGuide.summary),
        details: '',
        sourceTitle: armorGuide.sourceTitle,
        sourceUrl: armorGuide.sourceUrl,
        verified: true,
        ...(COLLECTION_ACQUISITION[entry.key]?.pin ? { pin: COLLECTION_ACQUISITION[entry.key].pin } : {}),
      };
      guideCount += 1;
      continue;
    }
    const guidePage = guidePages
      .filter((page) => entryMatchesGuide(entry, page.title) && isConcreteAcquisition(page.summary))[0];
    if (guidePage) {
      const guide = GUIDE_BY_KIND[entry.kind];
      records[entry.key] = {
        kind: entry.kind,
        itemId: entry.id,
        sourceKind: sourceKindFromText(guidePage.summary),
        summary: guidePage.summary,
        details: '',
        sourceTitle: `${guide.title}：${guidePage.title}`,
        sourceUrl: guidePage.url,
        verified: true,
        ...(COLLECTION_ACQUISITION[entry.key]?.pin ? { pin: COLLECTION_ACQUISITION[entry.key].pin } : {}),
      };
      guideCount += 1;
      continue;
    }
    records[entry.key] = fallbackRecord(entry);
  }

  const output = `// @generated from Chinese BWiki entries and Chinese guide pages (2026-07-31).\n// The English acquisition table remains in collection-acquisition.ts.\n\nimport type { CollectionAcquisitionKind, CollectionAcquisitionPin } from './collection-acquisition.ts';\n\nexport interface CollectionAcquisitionZhRecord {\n  readonly kind: 'armor' | 'talisman' | 'sorcery' | 'incantation' | 'spirit-ash' | 'ash-of-war';\n  readonly itemId: number;\n  readonly sourceKind: CollectionAcquisitionKind;\n  readonly summary: string;\n  readonly details: string;\n  readonly sourceTitle: string;\n  readonly sourceUrl: string;\n  readonly verified: boolean;\n  readonly pin?: CollectionAcquisitionPin;\n}\n\nexport const COLLECTION_ACQUISITION_ZH: Readonly<Record<string, CollectionAcquisitionZhRecord>> = ${JSON.stringify(records, null, 2)};\n`;
  await writeFile('src/renderer/src/data/zh/collection-acquisition-zh.ts', output, 'utf8');
  const pending = entries.length - bwikiCount - guideCount;
  console.log(`中文获取表已生成：${entries.length} 条；BWIKI ${bwikiCount} 条；游民星空攻略 ${guideCount} 条；待补 ${pending} 条。`);
}

await main();
