/** 任务线证据物品与 NPC 官方名核实脚本(一次性)。运行:npx tsx scripts/probe-quests.ts */
import { ARMOR } from '../src/renderer/src/data/generated/armor.ts';
import { BOSSES } from '../src/renderer/src/data/generated/bosses.ts';
import { GOODS } from '../src/renderer/src/data/generated/goods.ts';
import { SPIRIT_ASHES } from '../src/renderer/src/data/generated/spirit-ashes.ts';
import { TALISMANS } from '../src/renderer/src/data/generated/talismans.ts';
import { WEAPONS } from '../src/renderer/src/data/generated/weapons.ts';
import { OFFICIAL_NPC_ZH } from '../src/renderer/src/data/zh/official-names.generated.ts';
import { zhItemName } from '../src/renderer/src/data/zh/translations.ts';

function probe(kind: string, rows: readonly { id: number; name: string }[], names: string[]) {
  for (const n of names) {
    const hits = rows.filter((r) => r.name === n);
    if (hits.length === 0) {
      const fuzzy = rows.filter((r) => r.name.toLowerCase().includes(n.toLowerCase().slice(0, 12))).slice(0, 3);
      console.log(`MISS [${kind}] ${n}${fuzzy.length ? `  近似: ${fuzzy.map((f) => f.name).join(' | ')}` : ''}`);
    } else {
      const h = hits[0];
      console.log(`OK   [${kind}] ${n} → id=${h.id} zh=${zhItemName(h.id) ?? '(无中文)'}`);
    }
  }
}

probe('weapon', WEAPONS, [
  'Dark Moon Greatsword',
  'Royal Greatsword',
  "Rogier's Rapier",
  'Nagakiba',
  "Varré's Bouquet",
  'Frenzied Flame Seal',
  "Ansbach's Longbow",
  'Obsidian Lamina',
]);
probe('talisman', TALISMANS, [
  'Shard of Alexander',
  'Rotten Winged Sword Insignia',
  "Millicent's Prosthesis",
  'Companion Jar',
  "Daedicar's Woe",
  'Lord of Blood\'s Favor',
]);
probe('goods', GOODS, [
  'Mending Rune of the Death-Prince',
  'Mending Rune of the Fell Curse',
  'Mending Rune of Perfect Order',
  "Patches' Bell Bearing",
  "Sellen's Bell Bearing",
  'Unalloyed Gold Needle',
  "Miquella's Needle",
  'Discarded Palace Key',
  "Seluvis's Bell Bearing",
  "Thiollier's Concoction",
  'Frenzyflame Stone',
]);
probe('armor', ARMOR, ["Iji's Mirrorhelm", "Witch's Glintstone Crown", 'Twinned Helm', "Leda's Helm"]);
probe('ash', SPIRIT_ASHES, ['Stormhawk Deenh', 'Nepheli Loux Puppet', 'Dung Eater Puppet']);

console.log('--- BOSSES 名称检索 ---');
for (const key of ['Leda', "Fia's Champion", 'Astel', 'Loathsome Dung Eater']) {
  const hits = BOSSES.filter((b) => b.name?.includes(key));
  console.log(`${key}: ${hits.map((h) => `${h.name}#${h.defeatFlagId}`).join(' | ') || 'MISS'}`);
}

console.log('--- NPC 官方名检索 ---');
const npcProbes = ['Ranni', 'Blaidd', 'Alexander', 'Millicent', 'Varr', 'Sellen', 'Rogier', 'Yura', 'Nepheli', 'Patches', 'Fia', 'Dung Eater', 'Goldmask', 'Corhyn', 'Iji', 'Seluvis', 'Ansbach', 'Thiollier', 'Leda', 'Hyetta', 'Diallos', 'Jar Bairn', 'Boc', 'Latenna', 'Gowry'];
for (const p of npcProbes) {
  const hits = Object.entries(OFFICIAL_NPC_ZH).filter(([en]) => en.toLowerCase().includes(p.toLowerCase()));
  console.log(`${p}: ${hits.map(([en, zh]) => `${en}=${zh}`).join(' | ') || 'MISS'}`);
}
