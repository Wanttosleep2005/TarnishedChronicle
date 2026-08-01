import { useMemo, useState } from 'react';
import { Card, ItemThumb, PageHead } from '../components/ui.tsx';
import { zhItemNameByKind } from '../data/zh/translations.ts';
import { deriveEquipment, deriveInventory, deriveProfile, goodById, type EquipSlotEntry, type ResolvedItem } from '../lib/derive.ts';
import { classifyEntry, GAME_TABS, type GameTab } from '../lib/inventory-classify.ts';
import { useActiveSlot } from '../lib/save-context.tsx';
import { DAMAGE_ZH, weaponPanel } from '../lib/weapon-ar.ts';
import { fuzzyMatch } from '../lib/fuzzy-search.ts';

function EquipCell({ entry }: { entry: EquipSlotEntry }) {
  return (
    <div className="equip-item">
      <ItemThumb icon={entry.icon} />
      <div>
        <div className="equip-slot-label">{entry.slotLabel}</div>
        <div className="equip-name">{entry.display}</div>
        {entry.ashOfWar && <div className="equip-extra">战灰:{entry.ashOfWar}</div>}
        {entry.en && entry.display !== entry.en && entry.kind !== 'empty' && (
          <div className="en-name">{entry.en}</div>
        )}
      </div>
    </div>
  );
}

function SimpleCell({ item, label, count }: { item: ResolvedItem; label?: string; count?: number | null }) {
  return (
    <div className="equip-item">
      <ItemThumb icon={item.icon} />
      <div>
        {label && <div className="equip-slot-label">{label}</div>}
        <div className="equip-name">
          {item.display}
          {count !== undefined && count !== null && count > 1 && (
            <span style={{ color: 'var(--gold-dim)' }}> ×{count}</span>
          )}
        </div>
      </div>
    </div>
  );
}

type TabFilter = 'all' | GameTab | 'gesture';

const TAB_LABEL: Record<GameTab, string> = Object.fromEntries(
  GAME_TABS.map((t) => [t.key, t.label]),
) as Record<GameTab, string>;

export function EquipmentPage({ onOpenCollection }: { onOpenCollection?: () => void }) {
  const slot = useActiveSlot();
  const [tab, setTab] = useState<TabFilter>('all');
  const [search, setSearch] = useState('');
  const [showStorage, setShowStorage] = useState(true);

  const equipment = useMemo(() => (slot ? deriveEquipment(slot) : null), [slot]);
  const inventory = useMemo(() => (slot ? deriveInventory(slot) : []), [slot]);
  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  if (!slot || !equipment || !profile) return null;

  const armaments = equipment.armaments.filter((a) => a.kind !== 'empty');
  const talismans = equipment.talismans.filter((t) => t.kind !== 'empty');
  const quickItems = equipment.quickItems.filter((q) => q.item.kind !== 'empty');
  const pouch = equipment.pouch.filter((p) => p.kind !== 'empty');
  const arrows = equipment.arrows.filter((a) => a.kind !== 'empty');

  const filteredInventory = inventory.filter((row) => {
    if (tab !== 'all' && tab !== 'gesture' && classifyEntry(row) !== tab) return false;
    if (!showStorage && row.source === '仓库') return false;
    if (search.trim() && !fuzzyMatch(search, row.display, row.en ?? '')) return false;
    return true;
  });

  const tabCounts = new Map<GameTab, number>();
  for (const row of inventory) {
    const key = classifyEntry(row);
    tabCounts.set(key, (tabCounts.get(key) ?? 0) + 1);
  }

  const gestureIds = slot.gestures.filter((id) => id > 0 && id < 0xfffffffe);

  return (
    <div className="page">
      <PageHead
        title="装备与行囊"
        sub="当前装备、记忆法术与全部持有物"
        right={onOpenCollection ? <button className="btn small" onClick={onOpenCollection}>{'\u67e5\u770b\u6536\u85cf\u56fe\u9274'}</button> : undefined}
      />

      <Card title="武器" hint={`双手共 ${armaments.length} 件 · 面板按当前属性实时计算`}>
        <div className="equip-grid">
          {armaments.length > 0 ? (
            armaments.map((entry) => {
              const panel = entry.kind === 'weapon' ? weaponPanel(profile, entry.paramId, entry.upgrade) : null;
              return (
                <div key={entry.slotLabel}>
                  <EquipCell entry={entry} />
                  {panel && (
                    <div style={{ margin: '6px 0 0 56px', fontSize: 11.5, lineHeight: 1.8 }}>
                      <span style={{ color: 'var(--gold-2)' }}>
                        攻击力 {Math.floor(panel.oneHand.total)}
                      </span>
                      <span style={{ color: 'var(--faint)' }}>(双手 {Math.floor(panel.twoHand.total)})</span>
                      <span style={{ color: 'var(--muted)', marginLeft: 8 }}>
                        {Object.entries(panel.oneHand.damage)
                          .filter(([, v]) => (v ?? 0) > 0)
                          .map(([k, v]) => `${DAMAGE_ZH[k] ?? k} ${Math.floor(v ?? 0)}`)
                          .join(' + ')}
                      </span>
                      {panel.unmetRequirements.length > 0 && (
                        <div style={{ color: 'var(--crimson)' }}>
                          ⚠ 需求未达标:{panel.unmetRequirements.join('、')}(攻击力已惩罚)
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <span className="undone">赤手空拳,勇气可嘉</span>
          )}
        </div>
      </Card>

      <div className="grid-2">
        <Card title="防具">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {equipment.armor.map((entry) => (
              <EquipCell key={entry.slotLabel} entry={entry} />
            ))}
          </div>
        </Card>

        <Card title="护符" hint={`${talismans.length}/${equipment.talismanSlots} 槽`}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {talismans.length > 0 ? (
              talismans.map((entry) => <EquipCell key={entry.slotLabel} entry={entry} />)
            ) : (
              <span className="undone">未佩戴护符</span>
            )}
          </div>
          {equipment.physick.length > 0 && (
            <>
              <div className="divider" style={{ margin: '12px 0' }} />
              <div className="equip-slot-label" style={{ marginBottom: 8 }}>
                调香瓶(结晶泪滴)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {equipment.physick.map((item, i) => (
                  <SimpleCell key={i} item={item} />
                ))}
              </div>
            </>
          )}
        </Card>
      </div>

      {equipment.spells.length > 0 && (
        <Card title="记忆法术" hint={`${equipment.spells.length} 个`}>
          <div className="equip-grid">
            {equipment.spells.map((spell, i) => (
              <SimpleCell key={i} item={spell} label={`法术 ${i + 1}`} />
            ))}
          </div>
        </Card>
      )}

      {(quickItems.length > 0 || pouch.length > 0 || arrows.length > 0) && (
        <Card title="快捷栏与箭筒">
          <div className="equip-grid">
            {quickItems.map((entry, i) => (
              <SimpleCell key={`q${i}`} item={entry.item} label="快捷栏" count={entry.count} />
            ))}
            {pouch.map((item, i) => (
              <SimpleCell key={`p${i}`} item={item} label="收纳袋" />
            ))}
            {arrows.map((entry) => (
              <EquipCell key={entry.slotLabel} entry={entry} />
            ))}
          </div>
        </Card>
      )}

      <Card
        title="行囊清单"
        hint={`随身+仓库共 ${inventory.length} 项 · 按游戏内分类划分`}
      >
        <div className="row" style={{ marginBottom: 12 }}>
          <button className={`btn small ${tab === 'all' ? 'primary' : ''}`} onClick={() => setTab('all')}>
            全部 {inventory.length}
          </button>
          {GAME_TABS.map(({ key, label }) => (
            <button
              key={key}
              className={`btn small ${tab === key ? 'primary' : ''}`}
              onClick={() => setTab(key)}
            >
              {label} {tabCounts.get(key) ?? 0}
            </button>
          ))}
          <button className={`btn small ${tab === 'gesture' ? 'primary' : ''}`} onClick={() => setTab('gesture')}>
            动作 {gestureIds.length}
          </button>
          <button className={`btn small ${showStorage ? 'primary' : ''}`} onClick={() => setShowStorage(!showStorage)}>
            含仓库
          </button>
          <input
            className="input"
            style={{ width: 240 }}
            placeholder="搜索物品(中/英文)…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className="spacer" />
          <span className="pill">{filteredInventory.length} 项</span>
        </div>
        {tab === 'gesture' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div className="stat" style={{ maxWidth: 260 }}>
              <div className="stat-label">已解锁动作</div>
              <div className="stat-value">{gestureIds.length} <small>个</small></div>
            </div>
            {(() => {
              const gestureGoods = inventory.filter(
                (row) => row.kind === 'goods' && goodById.get(row.paramId)?.category === 'Gesture',
              );
              return gestureGoods.length > 0 ? (
                <div className="tag-cloud">
                  {gestureGoods.map((row) => (
                    <span key={row.paramId} className="pill gold">
                      🙇 {zhItemNameByKind('goods', row.paramId) ?? row.display}
                    </span>
                  ))}
                </div>
              ) : null;
            })()}
            <div className="notice">
              存档里的动作解锁表只记录内部槽位 ID,与任何物品表都不通用,因此无法可靠还原每个动作的名称
              ——之前版本把它硬套到道具名上属于 bug,已移除。这里只展示可信的解锁数量。
            </div>
          </div>
        ) : (
        <div style={{ maxHeight: '52vh', overflowY: 'auto' }}>
          <table className="tbl">
            <thead>
              <tr>
                <th style={{ width: 52 }}></th>
                <th>名称</th>
                <th style={{ width: 90 }}>类别</th>
                <th style={{ width: 70, textAlign: 'right' }}>数量</th>
                <th style={{ width: 70 }}>位置</th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.slice(0, 800).map((row, i) => (
                <tr key={`${row.kind}-${row.paramId}-${row.source}-${i}`}>
                  <td>
                    <ItemThumb icon={row.icon} size={32} />
                  </td>
                  <td>
                    <div>{row.display}</div>
                    {row.en && row.display !== row.en && <div className="en-name">{row.en}</div>}
                  </td>
                  <td style={{ color: 'var(--muted)' }}>{TAB_LABEL[classifyEntry(row)]}</td>
                  <td className="num">{row.quantity}</td>
                  <td style={{ color: 'var(--faint)' }}>{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredInventory.length > 800 && (
            <div className="notice" style={{ marginTop: 10 }}>
              仅显示前 800 项,请用搜索或筛选缩小范围。
            </div>
          )}
        </div>
        )}
      </Card>
    </div>
  );
}
