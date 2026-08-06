import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from 'react';
import { ItemThumb, PageHead } from '../components/ui.tsx';
import { MapPinIcon, TargetIcon } from '../components/icons.tsx';
import { NpcDecisionBar } from '../features/quests/components/NpcDecisionBar.tsx';
import { deriveProfile } from '../lib/derive.ts';
import { analyzeQuestImpact, type QuestImpactRelationDirection } from '../lib/quest-impact.ts';
import { fuzzyMatch } from '../lib/fuzzy-search.ts';
import {
  deriveQuests,
  questRewardIconId,
  type QuestReward,
  type QuestRewardKind,
  type QuestStageView,
  type QuestStatus,
  type QuestView,
} from '../lib/quests.ts';
import {
  compareRegions,
  regionDefinition,
  visibleWorldsForRegions,
  type RegionParent,
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

const REWARD_KIND_LABEL: Record<string, string> = {
  weapon: '武器',
  talisman: '护符',
  spell: '魔法',
  incantation: '祷告',
  ash: '骨灰',
  'ash-of-war': '战灰',
  armor: '装备',
  'key-item': '道具',
  gesture: '动作',
  upgrade: '强化',
};

interface QuestRegionGroup {
  world: RegionWorldDefinition;
  regions: readonly [string, readonly QuestView[]][];
}

interface QuestWorldGroup {
  parent: RegionParent;
  label: string;
  groups: readonly QuestRegionGroup[];
}

type MindmapScope = 'all' | 'base' | 'dlc' | 'related';
type ConstellationMode = 'relations' | 'rewards' | 'warnings';
type QuestImpactMode = 'relations' | 'rewards' | 'regions';

interface MindmapNode {
  quest: QuestView;
  x: number;
  y: number;
}

interface MindmapRelation {
  fromId: string;
  toId: string;
  mutual: boolean;
  hasRisk: boolean;
}

interface QuestRewardSource {
  quest: QuestView;
  stage: QuestStageView;
  stageIndex: number;
  reward: QuestReward;
}

interface QuestRewardEntry {
  key: string;
  name: string;
  kind: QuestRewardKind;
  sources: readonly QuestRewardSource[];
}

const MINDMAP_WIDTH = 1_700;
const MINDMAP_HEIGHT = 960;
const MINDMAP_WORLD_WIDTH = 1_180;
const MINDMAP_WORLD_HEIGHT = 860;
const MINDMAP_INITIAL_VIEW = { x: 16, y: 14, scale: 0.62 };
const IMPACT_DIRECTION_LABEL: Record<QuestImpactRelationDirection, string> = {
  mutual: '相互收录关联',
  outgoing: '本路线提及',
  incoming: '被对方提及',
};

function QuestRewardBadge({ reward, stageLabel }: { reward: QuestReward; stageLabel?: string }) {
  return (
    <span className={`quest-reward reward-${reward.kind}`}>
      <ItemThumb icon={questRewardIconId(reward)} size={24} />
      <span className="quest-reward-copy">
        <b>{REWARD_KIND_LABEL[reward.kind]}</b>
        <span>{reward.name}</span>
      </span>
      {stageLabel && <em>{stageLabel}</em>}
      {reward.branch && <em>{reward.branch}</em>}
    </span>
  );
}

function getQuestRelations(quests: readonly QuestView[]): readonly MindmapRelation[] {
  const visible = new Set(quests.map((quest) => quest.id));
  const questById = new Map(quests.map((quest) => [quest.id, quest]));
  const relations = new Map<string, MindmapRelation>();
  for (const quest of quests) {
    for (const related of quest.related) {
      if (!visible.has(related.id)) continue;
      const key = [quest.id, related.id].sort().join('|');
      const existing = relations.get(key);
      if (existing) {
        if (existing.fromId === related.id && existing.toId === quest.id) existing.mutual = true;
        continue;
      }
      relations.set(key, {
        fromId: quest.id,
        toId: related.id,
        mutual: false,
        hasRisk: quest.warnings.length > 0 || (questById.get(related.id)?.warnings.length ?? 0) > 0,
      });
    }
  }
  return [...relations.values()];
}

function mindmapInitialView(scope: MindmapScope) {
  return scope === 'base' || scope === 'dlc'
    ? { x: 22, y: 18, scale: 0.72 }
    : MINDMAP_INITIAL_VIEW;
}

function getMindmapNodes(
  quests: readonly QuestView[], relations: readonly MindmapRelation[], scope: MindmapScope,
): readonly MindmapNode[] {
  const degree = new Map<string, number>();
  for (const relation of relations) {
    degree.set(relation.fromId, (degree.get(relation.fromId) ?? 0) + 1);
    degree.set(relation.toId, (degree.get(relation.toId) ?? 0) + 1);
  }
  const sorted = (dlc: boolean) => quests
    .filter((quest) => quest.dlc === dlc)
    .slice()
    .sort((left, right) => (degree.get(right.id) ?? 0) - (degree.get(left.id) ?? 0) || left.npc.localeCompare(right.npc, 'zh-Hans-CN'));
  const place = (list: readonly QuestView[], columns: number, startX: number, startY: number, xGap: number): MindmapNode[] =>
    list.map((quest, index) => {
      const row = Math.floor(index / columns);
      const column = index % columns;
      return {
        quest,
        x: startX + column * xGap + (row % 2 === 0 ? 0 : 20),
        y: startY + row * 122 + (column % 2 === 0 ? 0 : 18),
      };
    });
  if (scope === 'base' || scope === 'dlc') {
    return place(sorted(scope === 'dlc'), 5, 100, 205, 205);
  }
  return [...place(sorted(false), 5, 135, 210, 185), ...place(sorted(true), 3, 1_105, 230, 205)];
}

function mindmapEdgePath(from: MindmapNode, to: MindmapNode): string {
  const deltaX = to.x - from.x;
  const deltaY = to.y - from.y;
  const edgeScale = 1 / Math.max(Math.abs(deltaX) / 86, Math.abs(deltaY) / 34);
  const startX = from.x + deltaX * edgeScale;
  const startY = from.y + deltaY * edgeScale;
  const endX = to.x - deltaX * edgeScale;
  const endY = to.y - deltaY * edgeScale;
  const direction = startX <= endX ? 1 : -1;
  const bend = Math.max(68, Math.min(230, Math.abs(endX - startX) * 0.42));
  return `M ${startX} ${startY} C ${startX + direction * bend} ${startY}, ${endX - direction * bend} ${endY}, ${endX} ${endY}`;
}

function compassWaypointStyle(index: number, total: number): CSSProperties {
  const angle = -Math.PI / 2 + (Math.PI * 2 * index) / Math.max(total, 1);
  const radius = total <= 3 ? 29 : total <= 5 ? 32 : 34;
  return {
    left: `${50 + Math.cos(angle) * radius}%`,
    top: `${50 + Math.sin(angle) * radius}%`,
  };
}

function QuestFlow({
  quests,
  selectedQuestId,
  selectedStageIndex,
  onStageChange,
  onFocus,
}: {
  quests: readonly QuestView[];
  selectedQuestId: string | null;
  selectedStageIndex: number;
  onStageChange: (index: number) => void;
  onFocus: (id: string) => void;
}) {
  const { requestMapFocus } = useSaveContext();
  const activeQuest = quests.find((quest) => quest.id === selectedQuestId) ?? quests.find((quest) => quest.status === 'ongoing') ?? quests[0];

  useEffect(() => {
    if (activeQuest) onStageChange(activeQuest.currentIndex);
  }, [activeQuest?.id, activeQuest?.currentIndex]);

  if (!activeQuest) return null;

  const activeStageIndex = Math.min(Math.max(selectedStageIndex, 0), activeQuest.stages.length - 1);
  const selectedStage = activeQuest.stages[activeStageIndex] ?? activeQuest.current;
  const projected = selectedStage.mapGraceFlagId === null ? null : (gracePixelByFlagId.get(selectedStage.mapGraceFlagId) ?? null);

  return (
    <section className="quest-flow" aria-label="NPC 任务工作流">
      <div className="quest-flow-heading">
        <div>
          <span>任务工作流</span>
          <strong>{activeQuest.npc}</strong>
        </div>
        <label className="quest-flow-selector">
          <span>切换路线</span>
          <select value={activeQuest.id} onChange={(event) => onFocus(event.target.value)}>
            {quests.map((quest) => <option key={quest.id} value={quest.id}>{quest.npc}{quest.dlc ? ' · DLC' : ''}</option>)}
          </select>
        </label>
      </div>

      <div className="quest-flow-track" aria-label={`${activeQuest.npc} 的任务阶段`}>
        {activeQuest.stages.map((stage, index) => (
          <div key={`${stage.region}-${stage.location}-${index}`} className="quest-flow-stage-wrap">
            <button
              className={`quest-flow-stage state-${stage.state} ${activeStageIndex === index ? 'is-selected' : ''}`}
              type="button"
              aria-pressed={activeStageIndex === index}
              onClick={() => onStageChange(index)}
            >
              <span>{stage.state === 'done' ? '✓' : stage.state === 'current' ? '◆' : index + 1}</span>
              <strong>{stage.location}</strong>
              <small>{stage.region}</small>
            </button>
            {index < activeQuest.stages.length - 1 && <span className="quest-flow-connector" aria-hidden="true" />}
          </div>
        ))}
      </div>

      <div className="quest-flow-detail">
        <div className="quest-flow-detail-copy">
          <div className="quest-flow-detail-place">{selectedStage.region} · {selectedStage.location}</div>
          <p>{selectedStage.objective}</p>
          {selectedStage.rewards.length > 0 && (
            <div className="quest-rewards">
              {selectedStage.rewards.map((reward) => (
                <QuestRewardBadge key={`${reward.name}-${reward.branch ?? ''}`} reward={reward} />
              ))}
            </div>
          )}
        </div>
        <div className="quest-flow-detail-actions">
          {activeQuest.related.length > 0 && (
            <div className="quest-flow-relations">
              <span>资料关联路线</span>
              <div>{activeQuest.related.map((related) => <button key={related.id} type="button" onClick={() => onFocus(related.id)}>{related.npc}</button>)}</div>
            </div>
          )}
          {projected && (
            <button
              className="icon-button"
              type="button"
              title="在地图查看所选阶段"
              aria-label={`在地图查看${activeQuest.npc}的${selectedStage.location}`}
              onClick={() => requestMapFocus({ ...projected, name: `${activeQuest.npc} · ${selectedStage.location}` })}
            >
              <MapPinIcon />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function QuestImpactDesk({
  quests,
  selectedQuestId,
  selectedStageIndex,
  onStageChange,
  onFocus,
}: {
  quests: readonly QuestView[];
  selectedQuestId: string | null;
  selectedStageIndex: number;
  onStageChange: (index: number) => void;
  onFocus: (id: string) => void;
}) {
  const { requestMapFocus } = useSaveContext();
  const [mode, setMode] = useState<QuestImpactMode>('relations');
  const activeQuest = quests.find((quest) => quest.id === selectedQuestId) ?? quests.find((quest) => quest.status === 'ongoing') ?? quests[0] ?? null;
  const activeStageIndex = activeQuest ? Math.min(Math.max(selectedStageIndex, 0), activeQuest.stages.length - 1) : 0;
  const impact = useMemo(
    () => activeQuest ? analyzeQuestImpact(quests, activeQuest.id, activeStageIndex) : null,
    [quests, activeQuest?.id, activeStageIndex],
  );

  if (!activeQuest || !impact?.ok) return null;

  const selectedStage = impact.selection.stage;
  const projected = selectedStage.mapGraceFlagId === null ? null : (gracePixelByFlagId.get(selectedStage.mapGraceFlagId) ?? null);
  const warningCount = impact.warnings.current.length + impact.warnings.future.length;
  const remainingRegions = impact.coverage.filter((region) => region.remainingStageIndexes.length > 0);
  return (
    <section className="quest-impact-desk" aria-label="NPC 命运推演台">
      <div className="quest-impact-heading">
        <div>
          <span>命运推演台</span>
          <strong>{activeQuest.npc}</strong>
          <small>阶段 {activeStageIndex + 1} / {activeQuest.stages.length}</small>
        </div>
      </div>

      <div className="quest-impact-metrics" aria-label="所选路线影响概览">
        <span><b>{impact.relations.length}</b>资料关联</span>
        <span><b>{impact.remainingRewards.length}</b>后续已收录奖励</span>
        <span className={warningCount > 0 ? 'has-risk' : ''}><b>{warningCount}</b>已收录风险</span>
        <span><b>{remainingRegions.length}</b>待经地区</span>
      </div>

      <div className="quest-impact-layout">
        <article className="quest-impact-current">
          <div className="quest-impact-current-label">
            <span>{selectedStage.state === 'done' ? '已完成阶段' : selectedStage.state === 'current' ? '当前行动' : '推演航点'}</span>
            <em>{selectedStage.region}</em>
          </div>
          <strong>{selectedStage.location}</strong>
          <p>{selectedStage.objective}</p>
          {selectedStage.rewards.length > 0 && (
            <div className="quest-rewards">
              {selectedStage.rewards.map((reward) => (
                <QuestRewardBadge key={`${reward.name}-${reward.branch ?? ''}`} reward={reward} />
              ))}
            </div>
          )}
          <div className="quest-impact-stage-actions">
            <button className="btn small" type="button" disabled={activeStageIndex === 0} onClick={() => onStageChange(activeStageIndex - 1)}>上一阶段</button>
            <button className="btn small" type="button" disabled={activeStageIndex >= activeQuest.stages.length - 1} onClick={() => onStageChange(activeStageIndex + 1)}>下一阶段</button>
            {projected && (
              <button
                className="icon-button"
                type="button"
                title="在地图查看所选阶段"
                aria-label={`在地图查看${activeQuest.npc}的${selectedStage.location}`}
                onClick={() => requestMapFocus({ ...projected, name: `${activeQuest.npc} · ${selectedStage.location}` })}
              >
                <MapPinIcon />
              </button>
            )}
          </div>
        </article>

        <div className="quest-impact-analysis">
          <div className="quest-impact-modes" role="tablist" aria-label="命运推演视图">
            {(
              [
                ['relations', '关联与风险'],
                ['rewards', '奖励路径'],
                ['regions', '地区轨迹'],
              ] as [QuestImpactMode, string][]
            ).map(([key, label]) => (
              <button
                key={key}
                className={`btn small ${mode === key ? 'primary' : ''}`}
                type="button"
                role="tab"
                aria-selected={mode === key}
                onClick={() => setMode(key)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className={`quest-impact-mode-panel mode-${mode}`} role="tabpanel">
            {mode === 'relations' && (
              <>
                <div className="quest-impact-relations">
                  {impact.relations.map((relation) => (
                    <button key={relation.questId} type="button" onClick={() => onFocus(relation.questId)}>
                      <span>{relation.npc}</span>
                      <small>{IMPACT_DIRECTION_LABEL[relation.direction]}{relation.status ? ` · ${STATUS_META[relation.status].label}` : ''}</small>
                    </button>
                  ))}
                  {impact.relations.length === 0 && <span className="quest-impact-empty">暂无直接资料关联路线。</span>}
                </div>
                {warningCount > 0 ? (
                  <div className="quest-impact-warning-ledger">
                    {impact.warnings.current.map((warning) => (
                      <span key={`${warning.sourceQuestId}-${warning.text}`}><b>{warning.sourceNpc}</b><span>{warning.text}</span></span>
                    ))}
                    {impact.warnings.future.map((warning) => (
                      <button key={`${warning.sourceQuestId}-${warning.text}`} type="button" onClick={() => onFocus(warning.sourceQuestId)}>
                        <b>{warning.sourceNpc}</b><span>{warning.text}</span>
                      </button>
                    ))}
                  </div>
                ) : <span className="quest-impact-empty">当前资料关联中没有已收录风险。</span>}
              </>
            )}

            {mode === 'rewards' && (
              <div className="quest-impact-reward-grid">
                {impact.remainingRewards.map((reward) => (
                  <button key={`${reward.kind}-${reward.name}-${reward.branch ?? ''}`} type="button" onClick={() => onStageChange(reward.firstStageIndex)}>
                    <span className="quest-impact-reward-thumb"><ItemThumb icon={questRewardIconId(reward)} size={38} /></span>
                    <b>{reward.name}</b>
                    <small>{REWARD_KIND_LABEL[reward.kind]} · 阶段 {reward.firstStageIndex + 1}</small>
                    {reward.branch && <em>{reward.branch}</em>}
                  </button>
                ))}
                {impact.remainingRewards.length === 0 && <span className="quest-impact-empty">所选阶段起没有后续已收录奖励。</span>}
              </div>
            )}

            {mode === 'regions' && (
              <div className="quest-impact-regions">
                {impact.coverage.map((region, index) => {
                  const targetStageIndex = region.remainingStageIndexes[0] ?? region.stageIndexes[0] ?? 0;
                  return (
                    <button
                      key={region.region}
                      className={`${region.selected ? 'is-selected' : ''} ${region.remainingStageIndexes.length === 0 ? 'is-past' : ''}`}
                      type="button"
                      aria-pressed={region.selected}
                      onClick={() => onStageChange(targetStageIndex)}
                    >
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <small>{region.parentLabel} · {region.worldLabel}</small>
                      <b>{region.region}</b>
                      <em>{region.locations.join(' · ')}</em>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuestCompass({
  quests,
  selectedQuestId,
  selectedStageIndex,
  onStageChange,
  onFocus,
}: {
  quests: readonly QuestView[];
  selectedQuestId: string | null;
  selectedStageIndex: number;
  onStageChange: (index: number) => void;
  onFocus: (id: string) => void;
}) {
  const { requestMapFocus } = useSaveContext();
  const activeQuest = quests.find((quest) => quest.id === selectedQuestId) ?? quests.find((quest) => quest.status === 'ongoing') ?? quests[0];

  if (!activeQuest) return null;

  const activeStageIndex = Math.min(Math.max(selectedStageIndex, 0), activeQuest.stages.length - 1);
  const selectedStage: QuestStageView = activeQuest.stages[activeStageIndex] ?? activeQuest.current;
  const projected = selectedStage.mapGraceFlagId === null ? null : (gracePixelByFlagId.get(selectedStage.mapGraceFlagId) ?? null);

  return (
    <section className="quest-compass" aria-label="NPC 任务路线罗盘">
      <div className="quest-compass-heading">
        <div>
          <span>路线罗盘</span>
          <strong>{activeQuest.npc} 的行动路线</strong>
        </div>
        <span>{activeStageIndex + 1} / {activeQuest.stages.length} 阶段</span>
      </div>
      <div className="quest-compass-layout">
        <div className="quest-compass-dial" aria-label={`${activeQuest.npc} 的任务阶段罗盘`}>
          <span className="quest-compass-cardinal cardinal-n" aria-hidden="true">北</span>
          <span className="quest-compass-cardinal cardinal-e" aria-hidden="true">东</span>
          <span className="quest-compass-cardinal cardinal-s" aria-hidden="true">南</span>
          <span className="quest-compass-cardinal cardinal-w" aria-hidden="true">西</span>
          {activeQuest.stages.map((stage, index) => (
            <button
              key={`${stage.region}-${stage.location}-${index}`}
              className={`quest-compass-waypoint state-${stage.state} ${activeStageIndex === index ? 'is-selected' : ''}`}
              style={compassWaypointStyle(index, activeQuest.stages.length)}
              type="button"
              aria-pressed={activeStageIndex === index}
              aria-label={`选择第 ${index + 1} 阶段：${stage.location}`}
              onClick={() => onStageChange(index)}
            >
              <b>{stage.state === 'done' ? '✓' : stage.state === 'current' ? '●' : index + 1}</b>
              <span>{stage.location}</span>
              <small>{stage.region}</small>
            </button>
          ))}
          <div className="quest-compass-center">
            <span>当前路线</span>
            <strong>{activeQuest.npc}</strong>
            <small>{activeQuest.dlc ? '幽影地支线' : '交界地支线'}</small>
          </div>
        </div>
        <div className="quest-compass-detail">
          <div className="quest-compass-stage-copy">
            <span>阶段 {activeStageIndex + 1} · {selectedStage.state === 'done' ? '已完成' : selectedStage.state === 'current' ? '当前目标' : '后续航点'}</span>
            <strong>{selectedStage.region} · {selectedStage.location}</strong>
            <p>{selectedStage.objective}</p>
            {selectedStage.rewards.length > 0 && (
              <div className="quest-rewards">
                {selectedStage.rewards.map((reward) => (
                  <QuestRewardBadge key={`${reward.name}-${reward.branch ?? ''}`} reward={reward} />
                ))}
              </div>
            )}
          </div>
          <div className="quest-compass-actions">
            {projected && (
              <button
                className="icon-button"
                type="button"
                title="在地图查看此航点"
                aria-label={`在地图查看${activeQuest.npc}的${selectedStage.location}`}
                onClick={() => requestMapFocus({ ...projected, name: `${activeQuest.npc} · ${selectedStage.location}` })}
              >
                <MapPinIcon />
              </button>
            )}
          </div>
          {activeQuest.related.length > 0 && (
            <div className="quest-compass-related">
              <span>资料关联</span>
              <div>{activeQuest.related.map((related) => <button key={related.id} type="button" onClick={() => onFocus(related.id)}>{related.npc}</button>)}</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function QuestRewardAtlas({
  quests,
  onFocusStage,
}: {
  quests: readonly QuestView[];
  onFocusStage: (questId: string, stageIndex: number) => void;
}) {
  const { requestMapFocus } = useSaveContext();
  const [rewardKind, setRewardKind] = useState<'all' | QuestRewardKind>('all');
  const [rewardScope, setRewardScope] = useState<'all' | 'base' | 'dlc'>('all');
  const [rewardSearch, setRewardSearch] = useState('');
  const [selectedRewardKey, setSelectedRewardKey] = useState<string | null>(null);
  const rewardEntries = useMemo<readonly QuestRewardEntry[]>(() => {
    const byReward = new Map<string, { name: string; kind: QuestRewardKind; sources: QuestRewardSource[] }>();
    for (const quest of quests) {
      quest.stages.forEach((stage, stageIndex) => {
        for (const reward of stage.rewards) {
          const key = `${reward.kind}|${reward.name}`;
          const entry = byReward.get(key) ?? { name: reward.name, kind: reward.kind, sources: [] };
          entry.sources.push({ quest, stage, stageIndex, reward });
          byReward.set(key, entry);
        }
      });
    }
    return [...byReward.entries()]
      .map(([key, entry]) => ({ key, ...entry }))
      .sort((left, right) => left.name.localeCompare(right.name, 'zh-Hans-CN'));
  }, [quests]);
  const filteredRewardEntries = useMemo(() => {
    const query = rewardSearch.trim().toLocaleLowerCase('zh-CN');
    return rewardEntries.flatMap((entry) => {
      if (rewardKind !== 'all' && entry.kind !== rewardKind) return [];
      const sources = entry.sources.filter(({ quest }) => rewardScope === 'all' || (rewardScope === 'dlc' ? quest.dlc : !quest.dlc));
      if (sources.length === 0) return [];
      if (!query) return [{ ...entry, sources }];
      const matches = sources.some(({ quest, stage, reward }) => fuzzyMatch(
        query,
        entry.name,
        quest.npc,
        stage.region,
        stage.location,
        reward.branch ?? '',
      ));
      return matches ? [{ ...entry, sources }] : [];
    });
  }, [rewardEntries, rewardKind, rewardScope, rewardSearch]);
  const activeReward = filteredRewardEntries.find((entry) => entry.key === selectedRewardKey) ?? filteredRewardEntries[0] ?? null;
  const availableKinds = [...new Set(rewardEntries.map(({ kind }) => kind))] as QuestRewardKind[];

  return (
    <section className="quest-reward-atlas" aria-label="NPC 任务奖励星库">
      <div className="quest-reward-atlas-heading">
        <div>
          <span>奖励星库</span>
          <strong>从战利品反查任务路线</strong>
        </div>
        <span>{rewardEntries.length} 项已收录奖励</span>
      </div>
      <div className="quest-reward-atlas-controls">
        <label className="quest-reward-search">
          <span>检索</span>
          <input value={rewardSearch} onChange={(event) => setRewardSearch(event.target.value)} placeholder="奖励、NPC、地点" />
        </label>
        <div className="quest-reward-filter-row">
          <div className="quest-reward-scope" role="group" aria-label="奖励来源世界">
            {(
              [
                ['all', '全部世界'],
                ['base', '交界地'],
                ['dlc', '幽影地'],
              ] as ['all' | 'base' | 'dlc', string][]
            ).map(([key, label]) => (
              <button key={key} className={`btn small ${rewardScope === key ? 'primary' : ''}`} type="button" aria-pressed={rewardScope === key} onClick={() => setRewardScope(key)}>{label}</button>
            ))}
          </div>
          <div className="quest-reward-kinds" role="group" aria-label="奖励类型">
            <button className={`btn small ${rewardKind === 'all' ? 'primary' : ''}`} type="button" aria-pressed={rewardKind === 'all'} onClick={() => setRewardKind('all')}>全部类型</button>
            {availableKinds.map((kind) => (
              <button key={kind} className={`btn small ${rewardKind === kind ? 'primary' : ''}`} type="button" aria-pressed={rewardKind === kind} onClick={() => setRewardKind(kind)}>{REWARD_KIND_LABEL[kind]}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="quest-reward-atlas-layout">
        <div className="quest-reward-atlas-list" role="listbox" aria-label="已收录任务奖励">
          {filteredRewardEntries.map((entry) => (
            <button
              key={entry.key}
              className={`quest-reward-atlas-item ${activeReward?.key === entry.key ? 'is-selected' : ''}`}
              type="button"
              role="option"
              aria-selected={activeReward?.key === entry.key}
              onClick={() => setSelectedRewardKey(entry.key)}
            >
              <span className="quest-reward-atlas-item-thumb">
                <ItemThumb icon={questRewardIconId({ name: entry.name, kind: entry.kind })} size={28} />
              </span>
              <b>{REWARD_KIND_LABEL[entry.kind]}</b>
              <span>{entry.name}</span>
              <small>{entry.sources.length} 个任务航点</small>
            </button>
          ))}
          {filteredRewardEntries.length === 0 && <span className="quest-reward-atlas-empty">没有匹配的已收录奖励。</span>}
        </div>
        <div className="quest-reward-atlas-detail">
          {activeReward ? (
            <>
              <div className={`quest-reward-atlas-identity reward-${activeReward.kind}`}>
                <span className="quest-reward-atlas-detail-thumb">
                  <ItemThumb icon={questRewardIconId({ name: activeReward.name, kind: activeReward.kind })} size={48} />
                </span>
                <b>{REWARD_KIND_LABEL[activeReward.kind]}</b>
                <strong>{activeReward.name}</strong>
                <span>{activeReward.sources.length} 个已收录来源</span>
              </div>
              <div className="quest-reward-sources">
                {activeReward.sources.map(({ quest, stage, stageIndex, reward }) => {
                  const projected = stage.mapGraceFlagId === null ? null : (gracePixelByFlagId.get(stage.mapGraceFlagId) ?? null);
                  return (
                    <article key={`${quest.id}-${stageIndex}-${reward.branch ?? ''}`} className="quest-reward-source">
                      <button type="button" onClick={() => onFocusStage(quest.id, stageIndex)}>
                        <span>{quest.dlc ? '幽影地' : '交界地'} · 阶段 {stageIndex + 1}</span>
                        <strong>{quest.npc}</strong>
                        <small>{stage.region} · {stage.location}</small>
                      </button>
                      <p>{stage.objective}</p>
                      <div>
                        {reward.branch && <em>{reward.branch}</em>}
                        {projected && (
                          <button
                            className="icon-button"
                            type="button"
                            title="在地图查看此奖励来源"
                            aria-label={`在地图查看${activeReward.name}的来源地点`}
                            onClick={() => requestMapFocus({ ...projected, name: `${activeReward.name} · ${stage.location}` })}
                          >
                            <MapPinIcon />
                          </button>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          ) : <span className="quest-reward-atlas-empty">切换检索条件以浏览奖励来源。</span>}
        </div>
      </div>
    </section>
  );
}

function QuestMindmap({
  quests,
  constellationQuestId,
  onSelectQuest,
  onJump,
}: {
  quests: readonly QuestView[];
  constellationQuestId: string | null;
  onSelectQuest: (id: string) => void;
  onJump: () => void;
}) {
  const [scope, setScope] = useState<MindmapScope>('all');
  const [constellationMode, setConstellationMode] = useState<ConstellationMode | null>(null);
  const [view, setView] = useState(MINDMAP_INITIAL_VIEW);
  const viewportRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ pointerId: number; startX: number; startY: number; x: number; y: number; moved: boolean; questId: string | null } | null>(null);
  const justDragged = useRef(false);
  const relations = useMemo(() => getQuestRelations(quests), [quests]);
  const nodes = useMemo(() => getMindmapNodes(quests, relations, scope), [quests, relations, scope]);
  const stageSize = scope === 'base' || scope === 'dlc'
    ? { width: MINDMAP_WORLD_WIDTH, height: MINDMAP_WORLD_HEIGHT }
    : { width: MINDMAP_WIDTH, height: MINDMAP_HEIGHT };
  const activeQuestId = constellationQuestId ?? quests.find((quest) => quest.status === 'ongoing')?.id ?? quests[0]?.id ?? null;
  const relatedIds = useMemo(() => {
    if (!activeQuestId) return new Set<string>();
    const ids = new Set([activeQuestId]);
    for (const relation of relations) {
      if (relation.fromId === activeQuestId) ids.add(relation.toId);
      if (relation.toId === activeQuestId) ids.add(relation.fromId);
    }
    return ids;
  }, [activeQuestId, relations]);
  const visibleNodes = nodes.filter(({ quest }) => {
    if (scope === 'base') return !quest.dlc;
    if (scope === 'dlc') return quest.dlc;
    if (scope === 'related') return relatedIds.has(quest.id);
    return true;
  });
  const visibleIds = new Set(visibleNodes.map(({ quest }) => quest.id));
  const visibleRelations = relations.filter(({ fromId, toId }) => visibleIds.has(fromId) && visibleIds.has(toId));
  const nodeById = new Map(nodes.map((node) => [node.quest.id, node]));
  const questById = new Map(quests.map((quest) => [quest.id, quest]));
  const focusedQuest = activeQuestId ? (questById.get(activeQuestId) ?? null) : null;
  const focusedConnections = activeQuestId ? relations.flatMap((relation) => {
    const outgoing = relation.fromId === activeQuestId;
    const incoming = relation.toId === activeQuestId;
    if (!outgoing && !incoming) return [];
    const quest = questById.get(outgoing ? relation.toId : relation.fromId);
    if (!quest) return [];
    return [{
      quest,
      relation,
      direction: relation.mutual ? 'mutual' as const : outgoing ? 'outgoing' as const : 'incoming' as const,
    }];
  }) : [];
  const focusedRewards = useMemo(() => {
    if (!focusedQuest) return [];
    const seen = new Set<string>();
    return focusedQuest.stages.flatMap((stage, stageIndex) => stage.rewards.flatMap((reward) => {
      const key = `${reward.name}|${reward.branch ?? ''}`;
      if (seen.has(key)) return [];
      seen.add(key);
      return [{ reward, stageIndex, location: stage.location }];
    }));
  }, [focusedQuest]);

  useEffect(() => {
    setView(mindmapInitialView(scope));
  }, [scope]);

  useEffect(() => {
    if (!constellationQuestId) return;
    const selected = quests.find((quest) => quest.id === constellationQuestId);
    if (!selected) return;
    if ((scope === 'base' && selected.dlc) || (scope === 'dlc' && !selected.dlc)) setScope('all');
  }, [constellationQuestId, quests, scope]);

  const toggleConstellationMode = (mode: ConstellationMode) => {
    setConstellationMode((current) => current === mode ? null : mode);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    const nodeTarget = event.target instanceof Element ? event.target.closest<HTMLElement>('.quest-mindmap-node') : null;
    // Nodes remain click targets. The viewport owns pointer capture so a drag that starts on
    // one pans the canvas instead of making the node itself draggable.
    if (nodeTarget) event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      x: view.x,
      y: view.y,
      moved: false,
      questId: nodeTarget?.dataset.questId ?? null,
    };
  };
  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const activeDrag = drag.current;
    if (!activeDrag || activeDrag.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - activeDrag.startX;
    const deltaY = event.clientY - activeDrag.startY;
    if (Math.abs(deltaX) + Math.abs(deltaY) > 4) activeDrag.moved = true;
    setView((current) => ({ ...current, x: activeDrag.x + deltaX, y: activeDrag.y + deltaY }));
  };
  const finishDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const activeDrag = drag.current;
    if (!activeDrag || activeDrag.pointerId !== event.pointerId) return;
    if (activeDrag.moved) {
      justDragged.current = true;
      window.setTimeout(() => { justDragged.current = false; }, 0);
    } else if (activeDrag.questId) {
      onSelectQuest(activeDrag.questId);
    }
    drag.current = null;
  };
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    // React's delegated wheel listener can be passive in the desktop shell.
    // This listener owns the event so the window cannot scroll while zooming.
    const handleViewportWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      const bounds = viewport.getBoundingClientRect();
      const pointerX = event.clientX - bounds.left;
      const pointerY = event.clientY - bounds.top;
      setView((current) => {
        const scale = Math.max(0.36, Math.min(1.5, current.scale * (event.deltaY > 0 ? 0.9 : 1.1)));
        const graphX = (pointerX - current.x) / current.scale;
        const graphY = (pointerY - current.y) / current.scale;
        return { scale, x: pointerX - graphX * scale, y: pointerY - graphY * scale };
      });
    };

    viewport.addEventListener('wheel', handleViewportWheel, { passive: false });
    return () => viewport.removeEventListener('wheel', handleViewportWheel);
  }, []);
  const changeZoom = (delta: number) => setView((current) => ({ ...current, scale: Math.max(0.36, Math.min(1.5, current.scale + delta)) }));
  const stageStyle = {
    width: stageSize.width,
    height: stageSize.height,
    transform: `translate(${view.x}px, ${view.y}px) scale(${view.scale})`,
  };

  return (
    <section className="quest-mindmap" aria-label="NPC 任务图">
      <div className="quest-mindmap-heading">
        <div>
          <span>任务图</span>
          <strong>{quests.length} 条路线的关联、战利品与抉择</strong>
        </div>
        <div className="quest-mindmap-zoom" aria-label="星图缩放">
          <button className="icon-button" type="button" title="缩小" aria-label="缩小任务图" onClick={() => changeZoom(-0.12)}>−</button>
          <span>{Math.round(view.scale * 100)}%</span>
          <button className="icon-button" type="button" title="放大" aria-label="放大任务图" onClick={() => changeZoom(0.12)}>+</button>
          <button className="btn small" type="button" onClick={() => setView(mindmapInitialView(scope))}>重置视图</button>
        </div>
      </div>
      <div className="quest-mindmap-toolbar">
        <div className="quest-mindmap-filters" role="group" aria-label="任务图筛选">
          {(
            [
              ['all', `全部 ${quests.length}`],
              ['base', `交界地 ${quests.filter((quest) => !quest.dlc).length}`],
              ['dlc', `幽影地 ${quests.filter((quest) => quest.dlc).length}`],
              ['related', '关联'],
            ] as [MindmapScope, string][]
          ).map(([key, label]) => (
            <button key={key} className={`btn small ${scope === key ? 'primary' : ''}`} type="button" aria-pressed={scope === key} onClick={() => setScope(key)}>{label}</button>
          ))}
        </div>
        <div className="quest-mindmap-legend" aria-label="任务关系图例">
          <span><i className="is-mutual" aria-hidden="true" />相互关联</span>
          <span><i className="is-one-way" aria-hidden="true" />单向提及</span>
          <span><i className="has-risk" aria-hidden="true" />关联节点含已收录风险</span>
        </div>
        <span className="quest-mindmap-status">
          {scope === 'related' && focusedQuest ? `围绕 ${focusedQuest.npc} 显示 ${visibleNodes.length} 条直接资料关联路线` : `显示 ${visibleNodes.length} 条路线 · ${visibleRelations.length} 条资料关系`}
        </span>
      </div>
      <div
        ref={viewportRef}
        className="quest-mindmap-viewport"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
      >
        <div
          className={`quest-constellation-dock ${constellationMode ? 'is-expanded' : ''}`}
          onPointerDown={(event) => event.stopPropagation()}
          onWheelCapture={(event) => event.stopPropagation()}
        >
          <div className="quest-constellation-dock-bar">
            <div className="quest-constellation-identity">
              <span>当前任务</span>
              <strong>{focusedQuest?.npc ?? '未选择路线'}</strong>
              <small>{focusedQuest ? `${focusedQuest.current.region} · ${focusedQuest.current.location}` : '选择图中节点查看路线脉络'}</small>
            </div>
            <div className="quest-constellation-metrics quest-constellation-mode" role="group" aria-label="当前路线概览">
              {(
                [
                  ['relations', '关联', focusedConnections.length],
                  ['rewards', '已收录战利品', focusedRewards.length],
                  ['warnings', '分歧风险', focusedQuest?.warnings.length ?? 0],
                ] as [ConstellationMode, string, number][]
              ).map(([key, label, count]) => (
                <button
                  key={key}
                  className={`${constellationMode === key ? 'is-active' : ''} ${key === 'warnings' && count > 0 ? 'has-risk' : ''}`}
                  type="button"
                  aria-pressed={constellationMode === key}
                  aria-expanded={constellationMode === key}
                  onClick={() => toggleConstellationMode(key)}
                >
                  <b>{count}</b>
                  <span>{label}</span>
                </button>
              ))}
            </div>
            <button
              className="btn small quest-constellation-jump"
              type="button"
              disabled={!focusedQuest}
              onClick={onJump}
            >
              跳转至任务
            </button>
          </div>
          {constellationMode && (
            <div className="quest-constellation-drawer">
              <div className="quest-constellation-drawer-heading">
                <span>{constellationMode === 'relations' ? '资料关联路线' : constellationMode === 'rewards' ? '已收录战利品' : '已收录分歧风险'}</span>
                <button
                  className="icon-button quest-constellation-drawer-close"
                  type="button"
                  title="收起详情"
                  aria-label="收起任务详情"
                  onClick={() => setConstellationMode(null)}
                >
                  ×
                </button>
              </div>
              <div className="quest-constellation-content">
                {constellationMode === 'relations' && (
                  focusedConnections.length ? (
                    <div className="quest-constellation-links">
                      {focusedConnections.map(({ quest, direction }) => (
                        <button key={quest.id} type="button" onClick={() => onSelectQuest(quest.id)}>
                          <span>{quest.npc}</span>
                          <em>{direction === 'mutual' ? '相互关联' : direction === 'outgoing' ? '单向提及' : '被对方提及'}</em>
                        </button>
                      ))}
                    </div>
                  ) : <span>此路线暂无已收录的直接资料关联。</span>
                )}
                {constellationMode === 'rewards' && (
                  focusedRewards.length ? (
                    <div className="quest-constellation-rewards">
                      {focusedRewards.map(({ reward, stageIndex, location }) => (
                        <QuestRewardBadge key={`${reward.name}-${reward.branch ?? ''}`} reward={reward} stageLabel={`阶段 ${stageIndex + 1} · ${location}`} />
                      ))}
                    </div>
                  ) : <span>此路线暂无已收录的可获得奖励。</span>
                )}
                {constellationMode === 'warnings' && (
                  focusedQuest?.warnings.length ? (
                    <div className="quest-warnings">{focusedQuest.warnings.map((warning) => <span key={warning}>{warning}</span>)}</div>
                  ) : <span>此路线暂无已收录的分歧风险。</span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className={`quest-mindmap-stage mode-${constellationMode ?? 'relations'} scope-${scope} ${activeQuestId ? 'has-focus' : ''}`} style={stageStyle}>
          <svg className="quest-mindmap-lines" viewBox={`0 0 ${stageSize.width} ${stageSize.height}`} aria-hidden="true">
            <defs>
              <marker id="quest-relation-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path className="quest-relation-arrowhead" d="M 0 0 L 8 4 L 0 8 z" />
              </marker>
            </defs>
            {visibleRelations.map((relation) => {
              const from = nodeById.get(relation.fromId);
              const to = nodeById.get(relation.toId);
              if (!from || !to) return null;
              const highlighted = relation.fromId === activeQuestId || relation.toId === activeQuestId;
              const fromQuest = questById.get(relation.fromId);
              const toQuest = questById.get(relation.toId);
              const semantic = relation.mutual ? '相互收录关联' : '单向资料提及';
              return (
                <path
                  key={`${relation.fromId}-${relation.toId}`}
                  className={`${relation.mutual ? 'is-mutual' : 'is-one-way'} ${relation.hasRisk ? 'has-risk' : ''} ${highlighted ? 'is-highlighted' : ''}`}
                  d={mindmapEdgePath(from, to)}
                  markerEnd={relation.mutual ? undefined : 'url(#quest-relation-arrow)'}
                >
                  <title>{`${fromQuest?.npc ?? relation.fromId} → ${toQuest?.npc ?? relation.toId} · ${semantic}${relation.hasRisk ? ' · 关联节点含已收录风险' : ''}`}</title>
                </path>
              );
            })}
          </svg>
          {visibleNodes.some(({ quest }) => !quest.dlc) && <div className={`quest-mindmap-world world-base ${scope === 'base' ? 'world-solo' : ''}`} aria-hidden="true"><span>交界地</span><small>陆地 · 地下</small></div>}
          {visibleNodes.some(({ quest }) => quest.dlc) && <div className={`quest-mindmap-world world-dlc ${scope === 'dlc' ? 'world-solo' : ''}`} aria-hidden="true"><span>幽影地</span><small>黄金树幽影</small></div>}
          {visibleNodes.map((node) => {
            const { quest } = node;
            const linked = relatedIds.has(quest.id);
            const style = { left: node.x, top: node.y } as CSSProperties;
            return (
              <button
                key={quest.id}
                className={`quest-mindmap-node ${quest.dlc ? 'dlc' : 'base'} ${quest.id === activeQuestId ? 'is-focused' : ''} ${linked ? 'is-linked' : ''}`}
                style={style}
                type="button"
                data-quest-id={quest.id}
                aria-label={`聚焦 ${quest.npc} 的任务路线`}
                aria-pressed={quest.id === activeQuestId}
                onClick={() => { if (!justDragged.current) onSelectQuest(quest.id); }}
              >
                <span>{quest.npc}</span>
                <small>{quest.current.region}</small>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function QuestCard({
  quest,
  tracked,
  focused,
  onTrack,
  onFocus,
}: {
  quest: QuestView;
  tracked: boolean;
  focused: boolean;
  onTrack: (npc: string | null) => void;
  onFocus: (id: string) => void;
}) {
  const { requestMapFocus } = useSaveContext();
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLElement>(null);
  const meta = STATUS_META[quest.status];
  const progress = quest.status === 'done' ? quest.stages.length : quest.currentIndex;
  const projected = quest.current.mapGraceFlagId === null ? null : (gracePixelByFlagId.get(quest.current.mapGraceFlagId) ?? null);

  useEffect(() => {
    if (!focused) return;
    setOpen(true);
    requestAnimationFrame(() => cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }));
  }, [focused]);

  return (
    <article ref={cardRef} id={`quest-${quest.id}`} className={`quest-card status-${quest.status} ${focused ? 'is-focused' : ''}`}>
      <button className="quest-card-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
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
        {quest.related.length > 0 && (
          <div className="quest-relations">
            <span>关联 NPC</span>
            <div>
              {quest.related.map((related) => (
                <button key={related.id} type="button" onClick={() => onFocus(related.id)}>{related.npc}</button>
              ))}
            </div>
          </div>
        )}
        {quest.warnings.length > 0 && (
          <div className="quest-warnings">
            {quest.warnings.map((warning) => <span key={warning}>{warning}</span>)}
          </div>
        )}
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
                {stage.rewards.length > 0 && (
                  <span className="quest-rewards">
                    {stage.rewards.map((reward) => (
                      <QuestRewardBadge key={`${reward.name}-${reward.branch ?? ''}`} reward={reward} />
                    ))}
                  </span>
                )}
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
  focusedQuestId,
  setTrackedQuestNpc,
  onFocus,
}: {
  region: string;
  quests: readonly QuestView[];
  trackedQuestNpc: string | null;
  focusedQuestId: string | null;
  setTrackedQuestNpc: (npc: string | null) => void;
  onFocus: (id: string) => void;
}) {
  const containsFocused = quests.some((quest) => quest.id === focusedQuestId);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (containsFocused) setOpen(true);
  }, [containsFocused]);

  return (
    <section className={`quest-region ${open ? 'open' : ''}`}>
      <button className="quest-region-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className="quest-region-chevron" aria-hidden="true">{open ? '▾' : '▸'}</span>
        <h3>{region}</h3>
        <span>{quests.length} 条当前路线</span>
      </button>
      {open && (
        <div className="quest-list">
          {quests.map((quest) => (
            <QuestCard
              key={quest.id}
              quest={quest}
              tracked={trackedQuestNpc === quest.npc}
              focused={quest.id === focusedQuestId}
              onTrack={setTrackedQuestNpc}
              onFocus={onFocus}
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
  const [constellationQuestId, setConstellationQuestId] = useState<string | null>(null);
  const [questListExpanded, setQuestListExpanded] = useState(false);
  const [questListFocusedId, setQuestListFocusedId] = useState<string | null>(null);
  const [workflowQuestId, setWorkflowQuestId] = useState<string | null>(null);
  const [workflowStageIndex, setWorkflowStageIndex] = useState(0);
  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const quests = useMemo(
    () => (profile && slot ? deriveQuests(profile, slot.event_flags.flags) : []),
    [profile, slot],
  );

  const selectQuest = (id: string, stageIndex?: number) => {
    setWorkflowQuestId(id);
    setWorkflowStageIndex(stageIndex ?? quests.find((quest) => quest.id === id)?.currentIndex ?? 0);
  };

  const selectConstellationQuest = (id: string) => {
    setConstellationQuestId(id);
  };

  const focusDecisionStage = (id: string, stageIndex: number) => {
    selectQuest(id, stageIndex);
    setConstellationQuestId(id);
  };

  const jumpToQuest = (id: string, stageIndex?: number) => {
    selectQuest(id, stageIndex);
    setFilter('all');
    setQuestListFocusedId(id);
    setQuestListExpanded(true);
  };

  const jumpToConstellationQuest = () => {
    if (!constellationQuestId) return;
    selectQuest(constellationQuestId);
    setFilter('all');
    setQuestListFocusedId(constellationQuestId);
    setQuestListExpanded(true);
  };

  const groups = useMemo<readonly QuestWorldGroup[]>(() => {
    const listQuests = questListFocusedId ? quests.filter((quest) => quest.id === questListFocusedId) : quests;
    const visible = listQuests.filter((quest) => filter === 'all' || quest.status === filter);
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
    const worlds = visibleWorldsForRegions(byRegion.keys()).map((world) => ({
      world,
      regions: (byWorld.get(world.key) ?? []).sort(([a], [b]) => compareRegions(a, b)),
    }));
    const parents: RegionParent[] = ['lands-between', 'shadow-land'];
    return parents.flatMap((parent) => {
      const matching = worlds.filter(({ world }) => world.parent === parent);
      if (matching.length === 0) return [];
      return [{ parent, label: matching[0]!.world.parentLabel, groups: matching }];
    });
  }, [quests, filter, questListFocusedId]);

  if (!slot || !profile) return null;

  const done = quests.filter((quest) => quest.status === 'done').length;
  const ongoing = quests.filter((quest) => quest.status === 'ongoing').length;

  return (
    <div className="page quest-page">
      <PageHead title="NPC 任务引导" sub={`当前地区随存档进度更新 · 进行中 ${ongoing} 条 · 已完成 ${done} 条 · 共 ${quests.length} 条`} />

      <NpcDecisionBar
        quests={quests}
        selectedQuestId={workflowQuestId ?? quests.find((quest) => quest.status === 'ongoing')?.id ?? quests[0]?.id ?? null}
        onFocusStage={focusDecisionStage}
        onFocusNpc={selectQuest}
      />

      <QuestFlow
        quests={quests}
        selectedQuestId={workflowQuestId}
        selectedStageIndex={workflowStageIndex}
        onStageChange={setWorkflowStageIndex}
        onFocus={selectQuest}
      />

      <QuestImpactDesk
        quests={quests}
        selectedQuestId={workflowQuestId}
        selectedStageIndex={workflowStageIndex}
        onStageChange={setWorkflowStageIndex}
        onFocus={selectQuest}
      />

      <QuestCompass
        quests={quests}
        selectedQuestId={workflowQuestId}
        selectedStageIndex={workflowStageIndex}
        onStageChange={setWorkflowStageIndex}
        onFocus={selectQuest}
      />

      <QuestRewardAtlas quests={quests} onFocusStage={selectQuest} />

      <div className="quest-star-system">
        <QuestMindmap
          quests={quests}
          constellationQuestId={constellationQuestId}
          onSelectQuest={selectConstellationQuest}
          onJump={jumpToConstellationQuest}
        />

        <section className={`quest-constellation-list ${questListExpanded ? 'open' : ''}`} aria-label="星图任务列表">
          <button
            className="quest-constellation-list-toggle"
            type="button"
            aria-expanded={questListExpanded}
            aria-controls="constellation-region-list"
            onClick={() => setQuestListExpanded((value) => !value)}
          >
            <span className="quest-region-chevron" aria-hidden="true">{questListExpanded ? '▾' : '▸'}</span>
            <span>
              <b>星图任务</b>
              <small>{questListFocusedId ? `仅显示 ${quests.find((quest) => quest.id === questListFocusedId)?.npc ?? '当前路线'}` : '按地区浏览全部路线'}</small>
            </span>
            <em>{questListFocusedId ? '单路线' : `${quests.length} 条路线`}</em>
          </button>

          {questListExpanded && (
            <div id="constellation-region-list" className="quest-constellation-list-content">
              <div className="quest-list-controls">
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
                    <button
                      key={key}
                      className={`btn small ${filter === key && !questListFocusedId ? 'primary' : ''}`}
                      onClick={() => {
                        setQuestListFocusedId(null);
                        setFilter(key);
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {questListFocusedId && (
                  <button className="btn small" type="button" onClick={() => setQuestListFocusedId(null)}>
                    显示全部任务
                  </button>
                )}
              </div>

              <div className="quest-regions">
                {groups.map(({ parent, label, groups: worldGroups }) => (
                  <section key={parent} className="quest-parent-group">
                    <div className="quest-parent-heading">
                      <h2>{label}</h2>
                      <span>{worldGroups.reduce((count, group) => count + group.regions.length, 0)} 个地区</span>
                    </div>
                    {worldGroups.map(({ world, regions }) => (
                      <div key={world.key} className="quest-terrain-group">
                        {parent === 'lands-between' && <h3 className="quest-terrain-heading">{world.label}</h3>}
                        <div className="quest-world-regions">
                          {regions.map(([region, regionQuests]) => (
                            <QuestRegion
                              key={region}
                              region={region}
                              quests={regionQuests}
                              trackedQuestNpc={trackedQuestNpc}
                              focusedQuestId={questListFocusedId}
                              setTrackedQuestNpc={setTrackedQuestNpc}
                              onFocus={jumpToQuest}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </section>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
