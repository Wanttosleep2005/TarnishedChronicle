import {
  EVIDENCE_LEVEL_LABELS,
  compareEvidenceLevels,
  mergeEvidenceLevels,
  type EvidenceLevel,
} from '../src/renderer/src/lib/quest-evidence.ts';

function check(condition: boolean, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function equal<T>(actual: T, expected: T, message: string): void {
  if (actual !== expected) throw new Error(`${message}：实际为 ${String(actual)}，预期为 ${String(expected)}`);
}

function equalList<T>(actual: readonly T[], expected: readonly T[], message: string): void {
  const actualValue = JSON.stringify(actual);
  const expectedValue = JSON.stringify(expected);
  if (actualValue !== expectedValue) throw new Error(`${message}：实际为 ${actualValue}，预期为 ${expectedValue}`);
}

const levels: EvidenceLevel[] = ['unknown', 'confirmed', 'inferred'];
equalList(
  levels.sort(compareEvidenceLevels),
  ['confirmed', 'inferred', 'unknown'],
  '证据等级应按已确认、推断、未知从强到弱排序',
);

equal(mergeEvidenceLevels(['confirmed']), 'confirmed', '单条已确认证据应保持原等级');
equal(mergeEvidenceLevels(['confirmed', 'inferred']), 'inferred', '多条证据应取较弱等级');
equal(mergeEvidenceLevels(['unknown', 'confirmed', 'inferred']), 'unknown', '任意未知证据应使合并结果为未知');
equal(mergeEvidenceLevels([]), 'unknown', '空证据集合不得被误标为已确认');

equal(EVIDENCE_LEVEL_LABELS.confirmed, '已确认', '已确认等级应提供中文标签');
equal(EVIDENCE_LEVEL_LABELS.inferred, '推断', '推断等级应提供中文标签');
equal(EVIDENCE_LEVEL_LABELS.unknown, '未知', '未知等级应提供中文标签');
check(Object.keys(EVIDENCE_LEVEL_LABELS).length === 3, '证据等级标签映射不应包含额外状态');

console.log('NPC 任务证据等级测试通过');
