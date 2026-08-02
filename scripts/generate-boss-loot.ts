import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FIXED_BOSSES } from '../src/renderer/src/lib/boss-data.ts';

type RawDrop = Readonly<{
  en: string;
  quantity?: number;
  source?: 'arena-chest' | 'encounter';
}>;
type WikiCandidate = Readonly<{ runes: number | null; drops: readonly RawDrop[] }>;

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'src/renderer/src/lib/boss-loot.ts');

// Fandom infoboxes group these encounters by enemy type or omit their reward field.
// Keep the flag-specific records here so regeneration never relies on a fuzzy match.
const MANUAL_DROPS_BY_FLAG: Readonly<Record<number, readonly RawDrop[]>> = {
  10000850: [{ en: 'Talisman Pouch' }],
  11050850: [
    { en: 'All-Knowing Helm' },
    { en: 'All-Knowing Armor' },
    { en: 'All-Knowing Gauntlets' },
    { en: 'All-Knowing Greaves' },
    { en: 'Scepter of the All-Knowing' },
  ],
  12020390: [{ en: "Siluria's Tree" }],
  12020800: [{ en: "Gargoyle's Greatsword" }, { en: "Gargoyle's Twinblade" }],
  16000860: [{ en: "Inquisitor's Girandole" }],
  18000850: [],
  20000800: [{ en: 'Remembrance of the Dancing Lion' }, { en: 'Divine Beast Head' }],
  20010850: [{ en: "Leda's Sword" }],
  21000850: [{ en: 'Scadutree Fragment', quantity: 2 }, { en: 'Aspects of the Crucible: Thorns' }],
  30040800: [{ en: 'Banished Knight Engvall' }],
  30060800: [{ en: 'Kaiden Sellsword Ashes' }],
  30100800: [
    { en: 'Crucible Axe Helm' },
    { en: 'Crucible Axe Armor' },
    { en: 'Crucible Gauntlets' },
    { en: 'Crucible Greaves' },
    { en: "Ordovis's Greatsword" },
  ],
  30130800: [{ en: 'Soldjars of Fortune Ashes' }],
  30140800: [{ en: 'Mad Pumpkin Head Ashes' }],
  30170800: [
    { en: 'Zamor Curved Sword' },
    { en: 'Zamor Mask' },
    { en: 'Zamor Armor' },
    { en: 'Zamor Bracelets' },
    { en: 'Zamor Legwraps' },
  ],
  30200810: [{ en: 'Blackflame Monk Amon' }],
  31000800: [{ en: 'Grovel for Mercy', source: 'encounter' }],
  31060800: [{ en: 'Crystal Release' }],
  31070800: [{ en: "Kindred of Rot's Exultation" }],
  31100800: [{ en: 'Flamedrake Talisman +2' }],
  31110800: [{ en: 'Crystal Torrent' }],
  31170800: [{ en: 'Blue Dancer Charm' }],
  31200800: [{ en: 'Gold Scarab' }],
  32050800: [{ en: "Somberstone Miner's Bell Bearing [2]" }],
  40000800: [{ en: "Death Knight's Twin Axes" }, { en: 'Crimson Amber Medallion +3' }],
  40010800: [{ en: "Death Knight's Longhaft Axe" }, { en: 'Cerulean Amber Medallion +3' }],
  1033430800: [{ en: 'Cerulean Crystal Tear' }, { en: 'Ruptured Crystal Tear' }],
  1033450800: [{ en: 'Greatblade Phalanx' }],
  1034480800: [{ en: 'Frozen Needle', source: 'arena-chest' }],
  1034500800: [],
  1037510800: [],
  1038480800: [{ en: 'Holy-Shrouding Cracked Tear' }, { en: 'Lightning-Shrouding Cracked Tear' }, { en: 'Magic-Shrouding Cracked Tear' }],
  1038510800: [{ en: 'Ritual Sword Talisman' }],
  1038520800: [{ en: 'Fingerprint Grape' }, { en: "Vyke's War Spear" }],
  1039540800: [{ en: "Marais Executioner's Sword" }, { en: 'Briar Greatshield' }],
  1040530800: [{ en: 'Bloody Helice', source: 'arena-chest' }],
  1041510800: [{ en: 'Erdtree Greatshield' }, { en: "Hero's Rune [1]" }],
  1041520800: [{ en: "Lansseax's Glaive" }],
  1041530800: [{ en: 'Larval Tear' }],
  1043370800: [{ en: 'Reduvia' }],
  1043530800: [{ en: "Medicine Peddler's Bell Bearing" }],
  1044320800: [{ en: 'Sacrificial Axe' }],
  1044320850: [{ en: 'Ash of War: Barricade Shield' }, { en: 'Nightrider Flail' }],
  1044360800: [],
  1045520800: [{ en: 'Dragon Greatclaw' }, { en: 'Dragonclaw Shield' }],
  1048400800: [],
  1049390800: [{ en: "Lusat's Glintstone Staff", source: 'arena-chest' }],
  1052520800: [{ en: 'Remembrance of the Fire Giant' }],
  1053560800: [
    { en: "Vyke's Dragonbolt" },
    { en: 'Fingerprint Helm' },
    { en: 'Fingerprint Armor' },
    { en: 'Fingerprint Gauntlets' },
    { en: 'Fingerprint Greaves' },
  ],
  1252380800: [{ en: 'Remembrance of the Starscourge' }, { en: "Radahn's Great Rune" }],
  1254560800: [{ en: 'Death Ritual Spear' }],
  1248550800: [
    { en: 'Ancient Dragon Smithing Stone' },
    { en: "Night's Cavalry Helm" },
    { en: "Night's Cavalry Armor" },
    { en: "Night's Cavalry Gauntlets" },
    { en: "Night's Cavalry Greaves" },
  ],
  2046380800: [
    { en: "Dancer's Hood" },
    { en: "Dancer's Dress" },
    { en: "Dancer's Bracer" },
    { en: "Dancer's Trousers" },
    { en: 'Dancing Blade of Ranah' },
  ],
  2046410800: [
    { en: 'Helm of Solitude' },
    { en: 'Armor of Solitude' },
    { en: 'Gauntlets of Solitude' },
    { en: 'Greaves of Solitude' },
    { en: 'Greatsword of Solitude' },
  ],
  2046450800: [
    { en: "Red Bear's Claw" },
    { en: 'Iron Rivet Armor' },
    { en: 'Iron Rivet Gauntlets' },
    { en: 'Iron Rivet Greaves' },
  ],
  2046460800: [{ en: 'Enraged Divine Beast' }],
  2048380850: [{ en: 'Dragon Heart' }, { en: 'Somber Ancient Dragon Smithing Stone' }],
  2049430800: [{ en: 'Dragon Heart' }, { en: 'Somber Ancient Dragon Smithing Stone' }],
  2050470800: [{ en: 'Blessing of Marika' }],
  2050480800: [{ en: 'Remembrance of the Shadow Sunflower' }, { en: "Miquella's Great Rune" }],
  2050480860: [{ en: 'Blessing of Marika' }],
  2051440800: [
    { en: 'Rakshasa Helm' },
    { en: 'Rakshasa Armor' },
    { en: 'Rakshasa Gauntlets' },
    { en: 'Rakshasa Greaves' },
    { en: "Rakshasa's Great Katana" },
  ],
  2051450800: [
    { en: 'High Priest Hat' },
    { en: 'High Priest Robe' },
    { en: 'High Priest Gloves' },
    { en: 'High Priest Undergarments' },
    { en: 'Maternal Staff' },
    { en: "Ymir's Bell Bearing" },
  ],
  2052400800: [{ en: 'Dragon Heart' }, { en: 'Dragonscale Flesh' }],
  2054390800: [{ en: 'Heart of Bayle' }],
};

function templateAt(text: string, start: number): string {
  let depth = 0;
  for (let index = start; index < text.length - 1; index += 1) {
    const pair = text.slice(index, index + 2);
    if (pair === '{{') {
      depth += 1;
      index += 1;
      continue;
    }
    if (pair === '}}') {
      depth -= 1;
      index += 1;
      if (depth === 0) return text.slice(start, index + 1);
    }
  }
  return text.slice(start);
}

function templateField(template: string, name: string): string {
  const match = new RegExp(
    `(?:^|\\n)\\s*\\|\\s*${name}\\s*=\\s*([\\s\\S]*?)(?=\\n\\s*\\|\\s*[A-Za-z_][A-Za-z_ ]*\\s*=|\\n\\s*}})`,
    'i',
  ).exec(template);
  return match?.[1].trim() ?? '';
}

function runesFrom(value: string): number | null {
  const match = value.replace(/,/g, '').match(/\d+/);
  return match ? Number(match[0]) : null;
}

function dropRefs(value: string): readonly RawDrop[] {
  const drops: RawDrop[] = [];
  const seen = new Set<string>();
  const link = /\[\[([^|\]#]+)(?:#[^|\]]+)?(?:\|[^\]]+)?\]\]/g;
  let match: RegExpExecArray | null;
  while ((match = link.exec(value))) {
    const en = match[1].trim();
    if (!en || /^runes?$/i.test(en) || seen.has(en)) continue;
    const next = value.slice(match.index + match[0].length, match.index + match[0].length + 20);
    const quantity = /(?:x|×)\s*(\d+)/i.exec(next)?.[1];
    drops.push(quantity ? { en, quantity: Number(quantity) } : { en });
    seen.add(en);
  }
  return drops;
}

function candidates(wikitext: string): readonly WikiCandidate[] {
  const entries: WikiCandidate[] = [];
  const pattern = /\{\{Infobox(?:_| )(?:Boss|Enemy)\b/gi;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(wikitext))) {
    const template = templateAt(wikitext, match.index);
    const drops = dropRefs(templateField(template, 'drops'));
    if (drops.length > 0) entries.push({ runes: runesFrom(templateField(template, 'runes')), drops });
    pattern.lastIndex = match.index + template.length;
  }
  return entries;
}

async function fetchCandidatesByName(names: readonly string[]): Promise<ReadonlyMap<string, readonly WikiCandidate[]>> {
  const byName = new Map<string, readonly WikiCandidate[]>();
  for (let index = 0; index < names.length; index += 45) {
    const titles = names.slice(index, index + 45);
    const response = await fetch(
      `https://eldenring.fandom.com/api.php?action=query&format=json&origin=*&redirects=1&prop=revisions&rvprop=content&rvslots=main&titles=${encodeURIComponent(titles.join('|'))}`,
    );
    if (!response.ok) throw new Error(`Fandom API returned ${response.status}.`);
    const json = await response.json() as {
      query: {
        normalized?: readonly { from: string; to: string }[];
        redirects?: readonly { from: string; to: string }[];
        pages: Record<string, { title: string; revisions?: readonly { slots?: { main?: { '*': string } } }[] }>;
      };
    };
    const redirects = new Map<string, string>([
      ...(json.query.normalized ?? []),
      ...(json.query.redirects ?? []),
    ].map(({ from, to }) => [from, to]));
    const resolveTitle = (input: string) => {
      const seen = new Set<string>();
      let current = input;
      while (redirects.has(current) && !seen.has(current)) {
        seen.add(current);
        current = redirects.get(current)!;
      }
      return current;
    };
    const pageByTitle = new Map(Object.values(json.query.pages).map((page) => [page.title, page]));
    for (const name of titles) {
      const page = pageByTitle.get(resolveTitle(name));
      byName.set(name, candidates(page?.revisions?.[0]?.slots?.main?.['*'] ?? ''));
    }
  }
  return byName;
}

function selectCandidate(runes: number, candidatesForName: readonly WikiCandidate[]): readonly RawDrop[] | undefined {
  const exact = candidatesForName.filter((candidate) => candidate.runes === runes);
  if (exact.length === 1) return exact[0].drops;
  // A generic enemy page can have one infobox whose listed drops are not the
  // named boss encounter's reward. Only use it without a rune match when the
  // source genuinely omits its rune value.
  if (candidatesForName.length === 1 && candidatesForName[0]?.runes === null) return candidatesForName[0].drops;
  return undefined;
}

async function main(): Promise<void> {
  const automaticBosses = FIXED_BOSSES.filter((boss) => !(boss.defeatFlagId in MANUAL_DROPS_BY_FLAG));
  const names = [...new Set(automaticBosses.flatMap((boss) => boss.name ? [boss.name] : []))];
  if (automaticBosses.some((boss) => !boss.name)) throw new Error('Every automatically generated Boss must have an English name.');
  const byName = await fetchCandidatesByName(names);
  const unresolved: number[] = [];
  const archive = Object.fromEntries(FIXED_BOSSES.flatMap((boss) => {
    const drops = MANUAL_DROPS_BY_FLAG[boss.defeatFlagId]
      ?? selectCandidate(boss.runes, byName.get(boss.name!) ?? []);
    if (!drops) {
      unresolved.push(boss.defeatFlagId);
      return [];
    }
    return [[boss.defeatFlagId, { drops }]];
  }));
  if (unresolved.length > 0) throw new Error(`No unambiguous Fandom drop entries for flags: ${unresolved.join(', ')}.`);
  const outputText = `// @generated from Elden Ring Wiki Boss infoboxes and flag-specific manual reviews; do not edit by hand.\n// Regenerate with: npx tsx scripts/generate-boss-loot.ts\n\nexport interface BossLootReference {\n  readonly en: string;\n  readonly quantity?: number;\n  readonly source?: 'arena-chest' | 'encounter';\n}\n\nexport interface BossLootArchiveEntry {\n  readonly drops: readonly BossLootReference[];\n}\n\nexport const BOSS_LOOT_ARCHIVE_BY_FLAG: Readonly<Record<number, BossLootArchiveEntry>> = ${JSON.stringify(archive, null, 2)};\n\nexport function bossLootArchive(flag: number): BossLootArchiveEntry | undefined {\n  return BOSS_LOOT_ARCHIVE_BY_FLAG[flag];\n}\n`;
  writeFileSync(output, outputText, 'utf8');
  console.log(`Generated ${output} for ${Object.keys(archive).length} Boss flags.`);
}

await main();
