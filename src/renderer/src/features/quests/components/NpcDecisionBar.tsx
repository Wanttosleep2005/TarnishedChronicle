import { useMemo, useState } from 'react';
import { MapPinIcon } from '../../../components/icons.tsx';
import { useSaveContext } from '../../../lib/save-context.tsx';
import type { QuestStatus, QuestView } from '../../../lib/quests.ts';
import { gracePixelByFlagId } from '../../../lib/worldmap.ts';
import {
  deriveNpcDecisionSummary,
  matchesNpcDecisionFacet,
  NPC_DECISION_EVIDENCE_NOTE,
  type NpcDecisionFacet,
  type NpcDecisionPriority,
  type NpcDecisionRoute,
} from '../lib/deriveNpcDecisionSummary.ts';

const STATUS_LABEL: Record<QuestStatus, string> = {
  ongoing: '进行中',
  unstarted: '待开始',
  interrupted: '已中断',
  done: '已完成',
};

const FACET_META: readonly [NpcDecisionFacet, string, string][] = [
  ['actionable', '当前可推进', '按当前存档派生出的未完成路线'],
  ['risk', '已收录风险', '本路线资料中含明确提醒'],
  ['rewards', '后续奖励', '当前阶段起仍有已收录奖励'],
];

const PRIORITY_META: Record<NpcDecisionPriority, { label: string; description: string }> = {
  now: { label: '现在推进', description: '当前存档可直接继续' },
  blocked: { label: '先解除阻塞', description: '路线已中断，需要先处理状态提醒' },
  watch: { label: '谨慎推进', description: '资料中存在需要留意的提醒' },
  later: { label: '可稍后处理', description: '路线尚未开始，可先准备' },
};

function routeDetail(route: NpcDecisionRoute, facet: NpcDecisionFacet): string {
  if (facet === 'risk') return route.recordedWarnings[0] ?? route.currentStage.objective;
  if (facet === 'rewards') {
    const names = route.remainingRewards.slice(0, 3).map((reward) => reward.name).join('、');
    return names || route.currentStage.objective;
  }
  return route.currentStage.objective;
}

export function NpcDecisionBar({
  quests,
  selectedQuestId,
  onFocusStage,
}: {
  quests: readonly QuestView[];
  selectedQuestId: string | null;
  onFocusStage: (questId: string, stageIndex: number) => void;
}) {
  const { requestMapFocus } = useSaveContext();
  const [facet, setFacet] = useState<NpcDecisionFacet>('actionable');
  const summary = useMemo(() => deriveNpcDecisionSummary(quests), [quests]);
  const visibleEditions = summary.editions.flatMap((edition) => {
    const worlds = edition.worlds.flatMap((world) => {
      const regions = world.regions.flatMap((region) => {
        const routes = region.routes.filter((route) => matchesNpcDecisionFacet(route, facet));
        return routes.length > 0 ? [{ ...region, routes }] : [];
      });
      return regions.length > 0 ? [{ ...world, regions }] : [];
    });
    return worlds.length > 0 ? [{ ...edition, worlds }] : [];
  });

  return (
    <section className="quest-decision-bar" aria-label="NPC 全局行动与决策摘要">
      <div className="quest-decision-heading">
        <div>
          <span>当前存档 · 决策入口</span>
          <strong>NPC 全局行动摘要</strong>
        </div>
        <p>{NPC_DECISION_EVIDENCE_NOTE}</p>
      </div>

      <div className="quest-decision-facets" role="group" aria-label="NPC 行动分类">
        {FACET_META.map(([key, label, description]) => (
          <button
            key={key}
            className={`${facet === key ? 'is-active' : ''} facet-${key}`}
            type="button"
            aria-label={`${label}：${description}`}
            aria-pressed={facet === key}
            onClick={() => setFacet(key)}
          >
            <b>{summary.counts[key]}</b>
            <span>{label}</span>
            <small>{description}</small>
          </button>
        ))}
      </div>

      <div className={`quest-decision-body facet-${facet}`}>
        {visibleEditions.map((edition) => (
          <section key={edition.key} className={`quest-decision-edition edition-${edition.key}`}>
            <div className="quest-decision-edition-heading">
              <span>{edition.key === 'base' ? 'BASE GAME' : 'SHADOW OF THE ERDTREE'}</span>
              <strong>{edition.label}</strong>
              <em>{edition.counts[facet]} 条</em>
            </div>

            {edition.worlds.map((world) => (
              <div key={world.key} className="quest-decision-world">
                <div className="quest-decision-world-heading">
                  <span>{world.parentLabel}</span>
                  <strong>{world.label}</strong>
                </div>
                <div className="quest-decision-regions">
                  {world.regions.map((region) => (
                    <section key={region.region} className="quest-decision-region">
                      <div className="quest-decision-region-heading">
                        <strong>{region.region}</strong>
                        <span>{region.routes.length}</span>
                      </div>
                      <div className="quest-decision-routes">
                        {region.routes.map((route) => {
                          const projected = route.currentStage.mapGraceFlagId === null
                            ? null
                            : (gracePixelByFlagId.get(route.currentStage.mapGraceFlagId) ?? null);
                          return (
                            <article key={route.questId} className={`quest-decision-route ${selectedQuestId === route.questId ? 'is-selected' : ''}`}>
                              <button
                                className="quest-decision-route-main"
                                type="button"
                                aria-label={`聚焦${route.npc}当前阶段：${route.currentStage.location}`}
                                aria-pressed={selectedQuestId === route.questId}
                                onClick={() => onFocusStage(route.questId, route.currentStageIndex)}
                              >
                                <span className="quest-decision-route-meta">
                                  <em>{STATUS_LABEL[route.status]}</em>
                                  <em className={`quest-decision-priority priority-${route.priority}`} title={PRIORITY_META[route.priority].description}>{PRIORITY_META[route.priority].label}</em>
                                  <small>阶段 {route.currentStageIndex + 1}</small>
                                </span>
                                <strong>{route.npc}</strong>
                                <span className="quest-decision-route-place">{route.currentStage.location}</span>
                                <p>{routeDetail(route, facet)}</p>
                                <span className="quest-decision-signals" aria-label={`${route.npc}的决策信号`}>
                                  {route.hasRecordedRisk && <em className="has-risk">本路线 {route.recordedWarnings.length} 条已收录风险</em>}
                                  {route.hasRemainingRewards && <em>后续 {route.remainingRewards.length} 项已收录奖励</em>}
                                  {route.relatedRiskRoutes.length > 0 && <em className="is-related">关联资料 {route.relatedRiskRoutes.length} 条路线含提醒</em>}
                                </span>
                                <ol className="quest-decision-timeline" aria-label={`${route.npc}从当前阶段起的时间线`}>
                                  {route.timeline.slice(0, 3).map((step) => (
                                    <li key={step.stageIndex} className={step.isCurrent ? 'is-current' : ''}>
                                      <span>{step.isCurrent ? '当前' : `第${step.stageIndex + 1}阶段`}</span>
                                      <strong>{step.location}</strong>
                                    </li>
                                  ))}
                                  {route.timeline.length > 3 && <li className="is-more">另有 {route.timeline.length - 3} 个后续阶段</li>}
                                </ol>
                              </button>
                              {projected && (
                                <button
                                  className="icon-button quest-decision-map"
                                  type="button"
                                  title="在地图查看当前阶段"
                                  aria-label={`在地图查看${route.npc}的${route.currentStage.location}`}
                                  onClick={() => requestMapFocus({ ...projected, name: `${route.npc} · ${route.currentStage.location}` })}
                                >
                                  <MapPinIcon />
                                </button>
                              )}
                            </article>
                          );
                        })}
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
        {visibleEditions.length === 0 && <span className="quest-decision-empty">当前分类没有可显示的路线。</span>}
      </div>
    </section>
  );
}
