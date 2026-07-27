import { useMemo, useState } from 'react';
import { PageHead } from '../components/ui.tsx';
import { MapPinIcon, TargetIcon } from '../components/icons.tsx';
import { deriveProfile } from '../lib/derive.ts';
import { deriveQuests, type QuestStatus, type QuestView } from '../lib/quests.ts';
import {
  compareRegions,
  regionDefinition,
  visibleWorldsForRegions,
  type RegionWorld,
  type RegionWorldDefinition,
} from '../lib/region-catalog.ts';
import { gracePixelByFlagId } from '../lib/worldmap.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';

const STATUS_META: Record<QuestStatus, { label: string; cls: string }> = {
  done: { label: '已完成', cls: 'gold' },
  ongoing: { label: '进行中', cls: 'ok' },
  unstarted: { label: '待开始', cls: '' },
  interrupted: { label: '已中断', cls: 'danger' },
};

interface QuestWorldGroup {
  world: RegionWorldDefinition;
  regions: readonly [string, readonly QuestView[]][];
}

function QuestCard({
  quest,
  tracked,
  onTrack,
}: {
  quest: QuestView;
  tracked: boolean;
  onTrack: (npc: string | null) => void;
}) {
  const { requestMapFocus } = useSaveContext();
  const [open, setOpen] = useState(false);
  const meta = STATUS_META[quest.status];
  const progress = quest.status === 'done' ? quest.stages.length : quest.currentIndex;
  const projected =
    quest.current.mapGraceFlagId === null ? null : (gracePixelByFlagId.get(quest.current.mapGraceFlagId) ?? null);

  return (
    <article className={`quest-card status-${quest.status}`}>
      <button className="quest-card-toggle" type="button" onClick={() => setOpen((value) => !value)}>
        <span className="quest-chevron" aria-hidden="true">{open ? '▾' : '▸'}</span>
        <span className="quest-heading">
          <span className="quest-name-row">
            <span className="quest-name">{quest.npc}</span>
            {quest.dlc && <span className="pill">DLC</span>}
          </span>
          <span className="quest-summary">{quest.summary}</span>
        </span>
        <span className="quest-status-block">
          <span className={`pill ${meta.cls}`}>{meta.label}</span>
          <span className="quest-progress">{progress}/{quest.stages.length - 1}</span>
        </span>
      </button>

      <div className="quest-current">
        <div className="quest-current-place">
          <span>{quest.current.location}</span>
          <span className="pill">{quest.current.region}</span>
        </div>
        <div className="quest-objective">{quest.current.objective}</div>
        <div className="quest-current-actions">
          {projected && (
            <button
              className="icon-button"
              type="button"
              title="在地图查看当前地点"
              aria-label={`在地图查看${quest.npc}当前地点`}
              onClick={() => requestMapFocus({ ...projected, name: `${quest.npc} · ${quest.current.location}` })}
            >
              <MapPinIcon />
            </button>
          )}
          <button
            className={`icon-button quest-track-button ${tracked ? 'is-tracked' : ''}`}
            type="button"
            title={tracked ? '取消追踪此任务' : '追踪此任务'}
            aria-label={tracked ? `取消追踪${quest.npc}` : `追踪${quest.npc}`}
            aria-pressed={tracked}
            onClick={() => onTrack(tracked ? null : quest.npc)}
          >
            <TargetIcon />
          </button>
        </div>
      </div>

      {open && (
        <div className="quest-route">
          {quest.stages.map((stage, index) => (
            <div key={`${stage.region}-${stage.location}-${index}`} className={`quest-step step-${stage.state}`}>
              <span className="quest-step-marker" aria-hidden="true">
                {stage.state === 'done' ? '✓' : stage.state === 'current' ? '◆' : index + 1}
              </span>
              <span className="quest-step-copy">
                <span className="quest-step-place">{stage.region} · {stage.location}</span>
                <span className="quest-step-objective">{stage.objective}</span>
              </span>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

function QuestRegion({
  region,
  quests,
  trackedQuestNpc,
  setTrackedQuestNpc,
}: {
  region: string;
  quests: readonly QuestView[];
  trackedQuestNpc: string | null;
  setTrackedQuestNpc: (npc: string | null) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className={`quest-region ${open ? 'open' : ''}`}>
      <button className="quest-region-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className="quest-region-chevron" aria-hidden="true">{open ? '▾' : '▸'}</span>
        <h2>{region}</h2>
        <span>{quests.length} 条当前路线</span>
      </button>
      {open && (
        <div className="quest-list">
          {quests.map((quest) => (
            <QuestCard
              key={quest.npc}
              quest={quest}
              tracked={trackedQuestNpc === quest.npc}
              onTrack={setTrackedQuestNpc}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export function QuestsPage() {
  const slot = useActiveSlot();
  const { trackedQuestNpc, setTrackedQuestNpc } = useSaveContext();
  const [filter, setFilter] = useState<'all' | QuestStatus>('all');
  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const quests = useMemo(
    () => (profile && slot ? deriveQuests(profile, slot.event_flags.flags) : []),
    [profile, slot],
  );

  const groups = useMemo<readonly QuestWorldGroup[]>(() => {
    const visible = quests.filter((quest) => filter === 'all' || quest.status === filter);
    const byRegion = new Map<string, QuestView[]>();
    for (const quest of visible) {
      const list = byRegion.get(quest.current.region) ?? [];
      list.push(quest);
      byRegion.set(quest.current.region, list);
    }
    const byWorld = new Map<RegionWorld, [string, readonly QuestView[]][]>();
    for (const [region, regionQuests] of byRegion) {
      const world = regionDefinition(region).key;
      const list = byWorld.get(world) ?? [];
      list.push([region, regionQuests]);
      byWorld.set(world, list);
    }
    return visibleWorldsForRegions(byRegion.keys()).map((world) => ({
      world,
      regions: (byWorld.get(world.key) ?? []).sort(([a], [b]) => compareRegions(a, b)),
    }));
  }, [quests, filter]);

  if (!slot || !profile) return null;

  const done = quests.filter((quest) => quest.status === 'done').length;
  const ongoing = quests.filter((quest) => quest.status === 'ongoing').length;

  return (
    <div className="page">
      <PageHead
        title="NPC 任务引导"
        sub={`当前地区随存档进度更新 · 进行中 ${ongoing} 条 · 已完成 ${done} 条 · 共 ${quests.length} 条`}
      />

      <div className="row quest-filters">
        {(
          [
            ['all', '全部'],
            ['ongoing', '进行中'],
            ['unstarted', '待开始'],
            ['done', '已完成'],
            ['interrupted', '已中断'],
          ] as ['all' | QuestStatus, string][]
        ).map(([key, label]) => (
          <button key={key} className={`btn small ${filter === key ? 'primary' : ''}`} onClick={() => setFilter(key)}>
            {label}
          </button>
        ))}
      </div>

      <div className="quest-regions">
        {groups.map(({ world, regions }) => (
          <section key={world.key} className="quest-world-group">
            <div className="quest-world-heading">
              <h2>{world.label}</h2>
              <span>{regions.length} 个地区</span>
            </div>
            <div className="quest-world-regions">
              {regions.map(([region, regionQuests]) => (
                <QuestRegion
                  key={region}
                  region={region}
                  quests={regionQuests}
                  trackedQuestNpc={trackedQuestNpc}
                  setTrackedQuestNpc={setTrackedQuestNpc}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
