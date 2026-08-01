import { detectDs3, parseDs3 } from '../src/main/ds3';

const roots = detectDs3();
console.log('roots:', JSON.stringify(roots, null, 1));
if (roots.length > 0) {
  const result = parseDs3(roots[0].path);
  if (!result.ok) {
    console.log('FAIL:', result.message);
  } else {
    for (const c of result.characters) {
      console.log(
        `slot${c.slot} ${c.name} Lv${c.level} 时长${(c.playtimeSec / 3600).toFixed(1)}h 累计魂${c.totalSouls.toLocaleString()}` +
          (c.stats
            ? ` | 属性 [${Object.values(c.stats).join(',')}] HP${c.hp?.current}/${c.hp?.max} FP${c.fp?.current}/${c.fp?.max} 精力${c.staminaMax} 持有魂${c.soulsHeld}`
            : ' | (槽内属性未解析)'),
      );
    }
  }
}
