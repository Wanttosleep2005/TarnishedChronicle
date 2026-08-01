/** 任务线细分物证核实(第二批)。运行:npx tsx scripts/probe-quests2.ts */
import { ARMOR } from '../src/renderer/src/data/generated/armor.ts';
import { GOODS } from '../src/renderer/src/data/generated/goods.ts';
import { SPELLS } from '../src/renderer/src/data/generated/spells.ts';
import { SPIRIT_ASHES } from '../src/renderer/src/data/generated/spirit-ashes.ts';
import { zhItemNameByKind } from '../src/renderer/src/data/zh/translations.ts';

function probe(kind: 'goods' | 'armor', rows: readonly { id: number; name: string }[], names: string[]) {
  for (const n of names) {
    const hit = rows.find((r) => r.name === n);
    if (!hit) {
      const fuzzy = rows.filter((r) => r.name.toLowerCase().includes(n.toLowerCase().slice(0, 10))).slice(0, 2);
      console.log(`MISS [${kind}] ${n}${fuzzy.length ? ` 近似:${fuzzy.map((f) => f.name).join(' | ')}` : ''}`);
    } else {
      console.log(`OK [${kind}] ${n} → ${hit.id} ${zhItemNameByKind(kind, hit.id) ?? '(无中文)'}`);
    }
  }
}

probe('goods', GOODS, [
  'Miniature Ranni',
  'Carian Inverted Statue',
  'Dark Moon Ring',
  'Fingerslayer Blade',
  'Discarded Palace Key',
  'Amber Starlight',
  "Pureblood Knight's Medal",
  'Sewing Needle',
  'Gold Sewing Needle',
  "Boc's Bell Bearing",
  'Haligtree Secret Medallion (Left)',
  'Haligtree Secret Medallion (Right)',
  "Gowry's Bell Bearing",
  "D's Bell Bearing",
  'Weathered Dagger',
  'Academy Glintstone Key',
  'Shabriri Grape',
  'Fingerprint Grape',
  "Serpent's Amnion",
  'Tonic of Forgetfulness',
  'Volcano Manor Invitation',
  'Drawing-Room Key',
  "Rya's Necklace",
  'The Stormhawk King',
  'Secret Rite Scroll',
  'Iris of Grace',
  'Iris of Occultation',
  "Thiollier's Concoction",
]);
probe('armor', ARMOR, ['Snow Witch Hat', 'Twinned Helm']);
console.log(
  'spell Thops:',
  SPELLS.find((s) => s.name === "Thops's Barrier")?.id,
  zhItemNameByKind('goods', SPELLS.find((s) => s.name === "Thops's Barrier")?.id ?? -1),
);
console.log(
  'ash Latenna:',
  SPIRIT_ASHES.find((s) => s.name === 'Latenna the Albinauric')?.id,
);
