import type {
  QuestRewardKind,
  QuestStageState,
  QuestStatus,
  QuestView,
} from './quests.ts';

const STATUS_LABEL: Readonly<Record<QuestStatus, string>> = {
  done: '已完成',
  ongoing: '进行中',
  unstarted: '待开始',
  interrupted: '已中断',
};

const STAGE_STATE_LABEL: Readonly<Record<QuestStageState, string>> = {
  done: '已完成',
  current: '当前阶段',
  next: '下一阶段',
  later: '后续阶段',
};

const REWARD_KIND_LABEL: Readonly<Record<QuestRewardKind, string>> = {
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

/** Builds a complete, deterministic Markdown document for one NPC quest route. */
export function exportQuestToMarkdown(quest: QuestView): string {
  const lines = [
    `# NPC 任务路线：${quest.npc}`,
    '',
    `- 内容范围：${quest.dlc ? 'DLC（黄金树幽影）' : '本体'}`,
    `- 当前状态：${STATUS_LABEL[quest.status]}`,
    `- 路线摘要：${quest.summary}`,
    '',
    '## 关联 NPC',
    '',
    ...(quest.related.length > 0 ? quest.related.map((related) => `- ${related.npc}`) : ['- 无']),
    '',
    '## 重要提醒',
    '',
    ...(quest.warnings.length > 0 ? quest.warnings.map((warning) => `- ${warning}`) : ['- 无']),
    '',
    '## 全部阶段',
  ];

  quest.stages.forEach((stage, index) => {
    const currentMarker = index === quest.currentIndex ? '（当前阶段）' : '';
    lines.push(
      '',
      `### ${index + 1}. ${stage.region} · ${stage.location}${currentMarker}`,
      '',
      `- 阶段状态：${STAGE_STATE_LABEL[stage.state]}`,
      `- 目标：${stage.objective}`,
    );

    if (stage.rewards.length === 0) {
      lines.push('- 奖励：无');
      return;
    }

    lines.push('- 奖励：');
    for (const reward of stage.rewards) {
      const branch = reward.branch ? `（分支：${reward.branch}）` : '';
      lines.push(`  - ${REWARD_KIND_LABEL[reward.kind]}：${reward.name}${branch}`);
    }
  });

  return `${lines.join('\n')}\n`;
}
