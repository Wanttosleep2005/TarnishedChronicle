/** 中文覆盖率审计:统计 boss/赐福/装备常用物品的中文名缺口。运行:npx tsx scripts/zh-coverage.ts */
import { BOSSES } from '../src/renderer/src/data/generated/bosses.ts';
import { GRACES } from '../src/renderer/src/data/generated/graces.ts';
import { TALISMANS } from '../src/renderer/src/data/generated/talismans.ts';
import { BOSS_FLAG_ZH, zhBoss, zhItemName, zhPlace } from '../src/renderer/src/data/zh/translations.ts';

const bossMiss = BOSSES.filter((b) => b.name && !zhBoss(b.name) && !BOSS_FLAG_ZH[b.defeatFlagId]);
console.log(`Boss 中文缺口: ${bossMiss.length}/${BOSSES.length}`);
for (const b of bossMiss) console.log(`  - ${b.name} (flag ${b.defeatFlagId}, ${b.mapId}, ${b.runes} 卢恩)`);

const graceMiss = GRACES.filter((g) => !zhPlace(g.name));
console.log(`赐福名中文缺口: ${graceMiss.length}/${GRACES.length}`);
for (const g of graceMiss.slice(0, 40)) console.log(`  - ${g.name} @ ${g.region ?? '?'}`);

const regionSet = [...new Set(GRACES.map((g) => g.region).filter((r): r is string => r !== null))];
const regionMiss = regionSet.filter((r) => !zhPlace(r));
console.log(`地区名中文缺口: ${regionMiss.length}/${regionSet.length}`);
for (const r of regionMiss) console.log(`  - ${r}`);

const talisMiss = TALISMANS.filter((t) => !zhItemName(t.id));
console.log(`护符中文缺口: ${talisMiss.length}/${TALISMANS.length}`);
for (const t of talisMiss.slice(0, 20)) console.log(`  - ${t.name} (${t.id})`);
