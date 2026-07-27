import { useMemo, useState } from 'react';
import { Card, PageHead, ProgressLine } from '../components/ui.tsx';
import { deriveGraces, type GraceRow } from '../lib/derive.ts';
import {
  compareRegions,
  regionDefinition,
  visibleWorldsForRegions,
  type RegionWorld,
} from '../lib/region-catalog.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';
import { gracePixelByFlagId } from '../lib/worldmap.ts';

export function GracesPage() {
  const slot = useActiveSlot();
  const { requestMapFocus } = useSaveContext();
  const [onlyUnlit, setOnlyUnlit] = useState(false);
  const [search, setSearch] = useState('');

  const rows = useMemo(() => (slot ? deriveGraces(slot) : []), [slot]);
  if (!slot) return null;

  const lit = rows.filter((row) => row.lit).length;
  const q = search.toLowerCase();
  const byRegion = new Map<string, GraceRow[]>();
  for (const row of rows) {
    const list = byRegion.get(row.regionZh) ?? [];
    list.push(row);
    byRegion.set(row.regionZh, list);
  }

  const regions = [...byRegion.entries()]
    .map(([region, list]) => ({
      region,
      list,
      lit: list.filter((row) => row.lit).length,
    }))
    .sort((a, b) => compareRegions(a.region, b.region));
  const byWorld = new Map<RegionWorld, typeof regions>();
  for (const region of regions) {
    const world = regionDefinition(region.region).key;
    const list = byWorld.get(world) ?? [];
    list.push(region);
    byWorld.set(world, list);
  }
  const worlds = visibleWorldsForRegions(byRegion.keys()).map((world) => ({
    world,
    regions: byWorld.get(world.key) ?? [],
  }));

  return (
    <div className="page">
      <PageHead title="赐福足迹" sub={`已点亮 ${lit} / ${rows.length} 处赐福`} />

      <Card>
        <ProgressLine label="总点亮进度" value={lit} total={rows.length} tone="azure" />
        <div className="row" style={{ marginTop: 14 }}>
          <button className={`btn small ${onlyUnlit ? 'primary' : ''}`} onClick={() => setOnlyUnlit(!onlyUnlit)}>
            只看未点亮
          </button>
          <input
            className="input"
            style={{ width: 260 }}
            placeholder="搜索赐福 / 地区…"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </Card>

      <div className="grace-world-groups">
        {worlds.map(({ world, regions: worldRegions }) => {
          const visibleRegions = worldRegions
            .map(({ region, list, lit: regionLit }) => ({
              region,
              list,
              regionLit,
              visible: list.filter((row) => {
                if (onlyUnlit && row.lit) return false;
                if (q && !row.display.toLowerCase().includes(q) && !region.toLowerCase().includes(q)) return false;
                return true;
              }),
            }))
            .filter(({ visible }) => visible.length > 0);
          if (visibleRegions.length === 0) return null;

          return (
            <section key={world.key} className="grace-world-group">
              <div className="quest-world-heading">
                <h2>{world.label}</h2>
                <span>{visibleRegions.length} 个地区</span>
              </div>
              {visibleRegions.map(({ region, list, regionLit, visible }) => (
                <Card key={region} title={region} hint={`${regionLit}/${list.length}`}>
                  <div className="bar" style={{ marginBottom: 12 }}>
                    <div className="bar-fill azure" style={{ width: `${(regionLit / list.length) * 100}%` }} />
                  </div>
                  <div className="tag-cloud">
                    {visible.map((row) => {
                      const projected = gracePixelByFlagId.get(row.grace.flagId);
                      return (
                        <span
                          key={row.grace.flagId}
                          className={`pill ${row.lit ? 'gold' : ''}`}
                          title={projected ? `${row.grace.name} · 点击在地图上查看` : row.grace.name}
                          style={{
                            ...(row.lit
                              ? { boxShadow: '0 0 10px rgba(232,199,106,0.28)', background: 'rgba(201,166,98,0.10)' }
                              : { opacity: 0.45 }),
                            ...(projected ? { cursor: 'pointer' } : {}),
                          }}
                          onClick={projected ? () => requestMapFocus({ ...projected, name: row.display }) : undefined}
                        >
                          {row.lit ? '✓' : '·'} {row.display}
                        </span>
                      );
                    })}
                  </div>
                </Card>
              ))}
            </section>
          );
        })}
      </div>
    </div>
  );
}
