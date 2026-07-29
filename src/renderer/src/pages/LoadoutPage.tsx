import { useEffect, useMemo, useState } from 'react';
import { Card, ItemThumb, PageHead, Stat } from '../components/ui.tsx';
import { ARMOR, type Armor } from '../data/generated/armor.ts';
import { TALISMANS, type Talisman } from '../data/generated/talismans.ts';
import { WEAPONS, type Weapon } from '../data/generated/weapons.ts';
import { zhItemNameByKind } from '../data/zh/translations.ts';
import { deriveEquipment, deriveProfile, type EquipmentView } from '../lib/derive.ts';
import { drawLoadoutShareCard, type LoadoutShareData } from '../lib/loadout-share-card.ts';
import { useActiveSlot, useSaveContext } from '../lib/save-context.tsx';
import { profileAttrs, weaponPanelAt } from '../lib/weapon-ar.ts';

type AttrKey = 'vig' | 'mnd' | 'end' | 'str' | 'dex' | 'int' | 'fai' | 'arc';
type ArmorSlot = 'head' | 'chest' | 'arms' | 'legs';
type CatalogKind = 'weapon' | 'armor' | 'talisman';

const ATTRS: { key: AttrKey; label: string }[] = [
  { key: 'vig', label: '生命力' },
  { key: 'mnd', label: '集中力' },
  { key: 'end', label: '耐力' },
  { key: 'str', label: '力气' },
  { key: 'dex', label: '灵巧' },
  { key: 'int', label: '智力' },
  { key: 'fai', label: '信仰' },
  { key: 'arc', label: '感应' },
];

const ARMOR_SLOTS: { key: ArmorSlot; label: string }[] = [
  { key: 'head', label: '头部' },
  { key: 'chest', label: '身体' },
  { key: 'arms', label: '手部' },
  { key: 'legs', label: '腿部' },
];

const WEAPON_CATEGORIES = new Set(['Arrow', 'Greatarrow', 'Bolt', 'Greatbolt']);

interface LoadoutState {
  stats: Record<AttrKey, number>;
  rightWeapon: number | null;
  leftWeapon: number | null;
  weaponUpgrades: Record<string, number>;
  armor: Record<ArmorSlot, number | null>;
  talismans: (number | null)[];
}

interface SavedLoadout {
  id: string;
  name: string;
  savedAt: number;
  state: LoadoutState;
}

interface CatalogItem {
  kind: CatalogKind;
  id: number;
  name: string;
  en: string;
  icon: number;
  category: string;
  owned: boolean;
  weight: number;
}

function nameFor(kind: CatalogKind, id: number): string {
  const item = kind === 'weapon' ? WEAPONS.find((entry) => entry.id === id) : kind === 'armor' ? ARMOR.find((entry) => entry.id === id) : TALISMANS.find((entry) => entry.id === id);
  const translated = zhItemNameByKind(kind, id);
  if (translated) return translated;
  if (kind === 'weapon') {
    const base = id - (id % 10000);
    return zhItemNameByKind('weapon', base) ?? WEAPONS.find((entry) => entry.id === base)?.name ?? item?.name ?? `武器 ${id}`;
  }
  return item?.name ?? `${kind === 'armor' ? '防具' : '护符'} ${id}`;
}

function defaultState(equipment: EquipmentView, stats: LoadoutState['stats']): LoadoutState {
  const right = equipment.armaments.find((entry) => entry.slotLabel === '右手 1' && entry.kind === 'weapon');
  const left = equipment.armaments.find((entry) => entry.slotLabel === '左手 1' && entry.kind === 'weapon');
  const armor: Record<ArmorSlot, number | null> = { head: null, chest: null, arms: null, legs: null };
  ARMOR_SLOTS.forEach(({ key, label }) => {
    const entry = equipment.armor.find((item) => item.slotLabel === label && item.kind === 'armor');
    armor[key] = entry?.paramId ?? null;
  });
  return {
    stats,
    rightWeapon: right?.paramId ?? null,
    leftWeapon: left?.paramId ?? null,
    weaponUpgrades: {
      ...(right ? { [right.paramId]: right.upgrade } : {}),
      ...(left ? { [left.paramId]: left.upgrade } : {}),
    },
    armor,
    talismans: equipment.talismans.map((entry) => (entry.kind === 'talisman' ? entry.paramId : null)),
  };
}

function itemName(kind: CatalogKind, id: number | null): string {
  return id === null ? '空槽' : nameFor(kind, id);
}

function armorMetrics(items: (Armor | undefined)[]) {
  const keys = ['negationPhysical', 'negationMagic', 'negationFire', 'negationLightning', 'negationHoly', 'poise', 'resistPoison', 'resistScarletRot', 'resistBleed', 'resistFrost'] as const;
  return items.reduce(
    (sum, item) => {
      if (!item) return sum;
      sum.weight += item.weight;
      keys.forEach((key) => { sum[key] += item[key]; });
      return sum;
    },
    { weight: 0, negationPhysical: 0, negationMagic: 0, negationFire: 0, negationLightning: 0, negationHoly: 0, poise: 0, resistPoison: 0, resistScarletRot: 0, resistBleed: 0, resistFrost: 0 },
  );
}

function upgradeFor(state: LoadoutState, id: number | null): number {
  return id === null ? 0 : Math.max(0, Math.min(25, state.weaponUpgrades[String(id)] ?? 0));
}

export function LoadoutPage() {
  const slot = useActiveSlot();
  const { savePath, slotIndex } = useSaveContext();
  const profile = useMemo(() => (slot ? deriveProfile(slot) : null), [slot]);
  const equipment = useMemo(() => (slot ? deriveEquipment(slot) : null), [slot]);
  const stats = profile?.stats ?? null;
  const presetKey = savePath ? `chronicle:loadouts:${savePath}:${slotIndex}` : null;
  const [state, setState] = useState<LoadoutState | null>(null);
  const [presets, setPresets] = useState<SavedLoadout[]>([]);
  const [activeSlot, setActiveSlot] = useState<string>('rightWeapon');
  const [catalogKind, setCatalogKind] = useState<CatalogKind>('weapon');
  const [search, setSearch] = useState('');
  const [onlyOwned, setOnlyOwned] = useState(false);
  const [resultLimit, setResultLimit] = useState(120);
  const [presetName, setPresetName] = useState('');
  const [exportState, setExportState] = useState<'idle' | 'busy' | 'done'>('idle');

  useEffect(() => {
    if (!presetKey || !equipment || !stats) return;
    let nextPresets: SavedLoadout[] = [];
    try {
      const raw = localStorage.getItem(presetKey);
      nextPresets = raw ? (JSON.parse(raw) as SavedLoadout[]) : [];
    } catch {
      nextPresets = [];
    }
    setPresets(nextPresets);
    setState(defaultState(equipment, stats));
  }, [presetKey, equipment, stats]);

  useEffect(() => {
    setResultLimit(120);
  }, [catalogKind, onlyOwned, search]);

  const current = state ?? (equipment && stats ? defaultState(equipment, stats) : null);

  const ownedWeaponVariantIds = useMemo(() => {
    if (!profile) return new Set<number>();
    const ids = new Set(
      profile.inventory.filter((item) => item.kind === 'weapon').map((item) => item.paramId),
    );
    for (const item of profile.equipment.armaments) {
      if (item.kind === 'weapon') ids.add(item.paramId);
    }
    return ids;
  }, [profile]);

  const catalog = useMemo<CatalogItem[]>(() => {
    if (!profile) return [];
    const weapons = WEAPONS.filter((item) => item.id !== 110000 && item.name !== 'DLC dummy' && !WEAPON_CATEGORIES.has(item.category)).map((item) => ({
      kind: 'weapon' as const,
      id: item.id,
      name: nameFor('weapon', item.id),
      en: item.name,
      icon: item.icon,
      category: item.category,
      owned: ownedWeaponVariantIds.has(item.id),
      weight: item.weight,
    }));
    const armor = ARMOR.filter((item) => !item.name.startsWith('[ERROR]')).map((item) => ({
      kind: 'armor' as const,
      id: item.id,
      name: nameFor('armor', item.id),
      en: item.name,
      icon: item.icon,
      category: item.category,
      owned: profile.ownedArmorIds.has(item.id),
      weight: item.weight,
    }));
    const talismans = TALISMANS.map((item) => ({
      kind: 'talisman' as const,
      id: item.id,
      name: nameFor('talisman', item.id),
      en: item.name,
      icon: item.icon,
      category: '护符',
      owned: profile.ownedTalismanIds.has(item.id),
      weight: item.weight,
    }));
    return [...weapons, ...armor, ...talismans];
  }, [profile, ownedWeaponVariantIds]);

  const matchingCatalog = useMemo(() => {
    const query = search.trim().toLowerCase();
    return catalog
      .filter((item) => item.kind === catalogKind)
      .filter((item) => !onlyOwned || item.owned)
      .filter((item) => !query || item.name.toLowerCase().includes(query) || item.en.toLowerCase().includes(query) || item.category.toLowerCase().includes(query));
  }, [catalog, catalogKind, onlyOwned, search]);
  const visibleCatalog = onlyOwned ? matchingCatalog : matchingCatalog.slice(0, resultLimit);

  const selectedWeapons = useMemo(() => {
    if (!current) return { right: undefined, left: undefined };
    return { right: WEAPONS.find((item) => item.id === current.rightWeapon), left: WEAPONS.find((item) => item.id === current.leftWeapon) };
  }, [current]);
  const selectedArmor = useMemo(() => ARMOR_SLOTS.map(({ key }) => (current?.armor[key] === null || current?.armor[key] === undefined ? undefined : ARMOR.find((item) => item.id === current.armor[key]))), [current]);
  const selectedTalismans = useMemo(() => (current?.talismans ?? []).map((id) => (id === null ? undefined : TALISMANS.find((item) => item.id === id))), [current]);
  const metrics = useMemo(() => {
    if (!current || !selectedWeapons.right || !selectedWeapons.left) {
      const armor = armorMetrics(selectedArmor);
      return { armor, weight: armor.weight + (selectedWeapons.right?.weight ?? 0) + (selectedWeapons.left?.weight ?? 0) + selectedTalismans.reduce((sum, item) => sum + (item?.weight ?? 0), 0) };
    }
    const armor = armorMetrics(selectedArmor);
    return { armor, weight: armor.weight + selectedWeapons.right.weight + selectedWeapons.left.weight + selectedTalismans.reduce((sum, item) => sum + (item?.weight ?? 0), 0) };
  }, [current, selectedArmor, selectedTalismans, selectedWeapons]);

  if (!slot || !profile || !equipment || !current) return null;

  const arAttrs = { str: current.stats.str, dex: current.stats.dex, int: current.stats.int, fai: current.stats.fai, arc: current.stats.arc };
  const rightPanel = current.rightWeapon === null ? null : weaponPanelAt(arAttrs, current.rightWeapon, upgradeFor(current, current.rightWeapon));
  const leftPanel = current.leftWeapon === null ? null : weaponPanelAt(arAttrs, current.leftWeapon, upgradeFor(current, current.leftWeapon));
  const maxWeight = 40 + current.stats.end * 1.6;
  const loadRatio = metrics.weight / maxWeight;
  const loadLabel = loadRatio > 1 ? '超重' : loadRatio > 0.7 ? '重型' : loadRatio > 0.3 ? '中型' : '轻型';
  const currentCatalog = catalog.find((item) => item.kind === catalogKind && item.id === (activeSlot === 'rightWeapon' ? current.rightWeapon : activeSlot === 'leftWeapon' ? current.leftWeapon : activeSlot.startsWith('talisman-') ? current.talismans[Number(activeSlot.slice(9))] : current.armor[activeSlot as ArmorSlot]));

  const update = (patch: Partial<LoadoutState>) => setState((previous) => ({ ...current, ...previous, ...patch }));
  const updateStats = (key: AttrKey, value: number) => update({ stats: { ...current.stats, [key]: Math.max(1, Math.min(99, Math.round(value))) } });
  const equip = (item: CatalogItem) => {
    if (item.kind === 'weapon' && (activeSlot === 'rightWeapon' || activeSlot === 'leftWeapon')) {
      update({ [activeSlot]: item.id, weaponUpgrades: { ...current.weaponUpgrades, [String(item.id)]: current.weaponUpgrades[String(item.id)] ?? 0 } });
    } else if (item.kind === 'armor' && ARMOR_SLOTS.some(({ key }) => key === activeSlot)) {
      update({ armor: { ...current.armor, [activeSlot as ArmorSlot]: item.id } });
    } else if (item.kind === 'talisman' && activeSlot.startsWith('talisman-')) {
      const index = Number(activeSlot.slice(9));
      update({ talismans: current.talismans.map((id, i) => (i === index ? item.id : id)) });
    }
  };
  const clearSlot = (slotId = activeSlot) => {
    if (slotId === 'rightWeapon' || slotId === 'leftWeapon') update({ [slotId]: null });
    else if (ARMOR_SLOTS.some(({ key }) => key === slotId)) update({ armor: { ...current.armor, [slotId as ArmorSlot]: null } });
    else if (slotId.startsWith('talisman-')) {
      const index = Number(slotId.slice(9));
      update({ talismans: current.talismans.map((id, i) => (i === index ? null : id)) });
    }
  };
  const setUpgrade = (id: number | null, value: number) => id !== null && update({ weaponUpgrades: { ...current.weaponUpgrades, [String(id)]: Math.max(0, Math.min(25, Math.round(value))) } });
  const persistPresets = (next: SavedLoadout[]) => {
    setPresets(next);
    if (presetKey) localStorage.setItem(presetKey, JSON.stringify(next));
  };
  const savePreset = () => {
    const name = presetName.trim() || `配装方案 ${presets.length + 1}`;
    persistPresets([{ id: `${Date.now()}`, name, savedAt: Date.now(), state: current }, ...presets].slice(0, 24));
    setPresetName('');
  };
  const shareData: LoadoutShareData = {
    stats: current.stats,
    rightWeapon: itemName('weapon', current.rightWeapon),
    leftWeapon: itemName('weapon', current.leftWeapon),
    armor: selectedArmor.map((item) => (item ? nameFor('armor', item.id) : '空槽')),
    talismans: selectedTalismans.map((item) => (item ? nameFor('talisman', item.id) : '空槽')),
    rightAr: rightPanel?.oneHand.total ?? null,
    leftAr: leftPanel?.oneHand.total ?? null,
    weight: metrics.weight,
    maxWeight,
    poise: metrics.armor.poise,
    physical: metrics.armor.negationPhysical,
    magic: metrics.armor.negationMagic,
    fire: metrics.armor.negationFire,
    lightning: metrics.armor.negationLightning,
    holy: metrics.armor.negationHoly,
  };
  const exportShare = async () => {
    setExportState('busy');
    const dataUrl = drawLoadoutShareCard(profile, shareData);
    const result = await window.api.exportPng(`配装方案-${profile.name}.png`, dataUrl);
    setExportState(result.ok ? 'done' : 'idle');
    window.setTimeout(() => setExportState('idle'), 2200);
  };

  return (
    <div className="page loadout-page">
      <PageHead
        title="配装器"
        sub="以当前属性为基准，组合全库装备并实时查看攻击力、负重与防御"
        right={<div className="row"><input className="input loadout-preset-input" placeholder="方案名称" value={presetName} onChange={(event) => setPresetName(event.target.value)} /><button className="btn small" onClick={savePreset}>保存方案</button><button className="btn small" onClick={() => void exportShare()} disabled={exportState === 'busy'}>{exportState === 'busy' ? '生成中…' : exportState === 'done' ? '已保存 ✓' : '分享 PNG'}</button></div>}
      />

      <div className="loadout-top-grid">
        <Card title="当前属性" hint="只影响本页推演，不写入存档">
          <div className="loadout-attrs">
            {ATTRS.map(({ key, label }) => (
              <label className="loadout-attr" key={key}>
                <span>{label}</span>
                <input className="input" type="number" min={1} max={99} value={current.stats[key]} onChange={(event) => updateStats(key, Number(event.target.value))} />
                <input type="range" min={1} max={99} value={current.stats[key]} onChange={(event) => updateStats(key, Number(event.target.value))} />
              </label>
            ))}
          </div>
        </Card>
        <Card title="实时面板" hint="数值来自当前选中的装备">
          <div className="stat-grid loadout-stat-grid">
            <Stat label="装备重量" value={metrics.weight.toFixed(1)} sub={`/ ${maxWeight.toFixed(1)} 估算`} />
            <Stat label="负重等级" value={loadLabel} />
            <Stat label="韧性" value={metrics.armor.poise.toFixed(1)} />
            <Stat label="物理减伤" value={metrics.armor.negationPhysical.toFixed(1)} />
            <Stat label="魔力减伤" value={metrics.armor.negationMagic.toFixed(1)} />
          </div>
          <div className="loadout-ar-grid">
            <div><span>右手 AR</span><strong>{rightPanel ? Math.floor(rightPanel.oneHand.total) : '—'}</strong>{rightPanel?.unmetRequirements.length ? <em>需求未达标</em> : <small>双手 {rightPanel ? Math.floor(rightPanel.twoHand.total) : '—'}</small>}</div>
            <div><span>左手 AR</span><strong>{leftPanel ? Math.floor(leftPanel.oneHand.total) : '—'}</strong>{leftPanel?.unmetRequirements.length ? <em>需求未达标</em> : <small>双手 {leftPanel ? Math.floor(leftPanel.twoHand.total) : '—'}</small>}</div>
          </div>
        </Card>
      </div>

      <div className="loadout-workspace">
        <Card title="装备槽位" hint="点击槽位后从右侧检索替换">
          <div className="loadout-slot-section">
            <div className="loadout-section-label">武器</div>
            {(['rightWeapon', 'leftWeapon'] as const).map((key) => {
              const item = key === 'rightWeapon' ? selectedWeapons.right : selectedWeapons.left;
              const id = current[key];
              return <div className={`loadout-slot ${activeSlot === key ? 'active' : ''}`} key={key} onClick={() => { setActiveSlot(key); setCatalogKind('weapon'); }}><ItemThumb icon={item?.icon ?? null} size={40} /><div><span>{key === 'rightWeapon' ? '右手武器' : '左手武器'}</span><strong>{itemName('weapon', id)}{id !== null && <small> +{upgradeFor(current, id)}</small>}</strong></div><button className="icon-button" title="清空槽位" onClick={(event) => { event.stopPropagation(); setActiveSlot(key); clearSlot(key); }}>×</button></div>;
            })}
          </div>
          <div className="loadout-section-label">防具</div>
          <div className="loadout-slot-list">
            {ARMOR_SLOTS.map(({ key, label }) => { const item = current.armor[key] === null ? undefined : ARMOR.find((entry) => entry.id === current.armor[key]); return <div className={`loadout-slot ${activeSlot === key ? 'active' : ''}`} key={key} onClick={() => { setActiveSlot(key); setCatalogKind('armor'); }}><ItemThumb icon={item?.icon ?? null} size={34} /><div><span>{label}</span><strong>{itemName('armor', current.armor[key])}</strong></div><button className="icon-button" title="清空槽位" onClick={(event) => { event.stopPropagation(); setActiveSlot(key); clearSlot(key); }}>×</button></div>; })}
          </div>
          <div className="loadout-section-label">护符</div>
          <div className="loadout-slot-list loadout-talisman-list">
            {[0, 1, 2, 3].map((index) => { const id = current.talismans[index] ?? null; const item = id === null ? undefined : TALISMANS.find((entry) => entry.id === id); const slotId = `talisman-${index}`; return <div className={`loadout-slot ${activeSlot === slotId ? 'active' : ''}`} key={index} onClick={() => { setActiveSlot(slotId); setCatalogKind('talisman'); }}><ItemThumb icon={item?.icon ?? null} size={30} /><div><span>护符 {index + 1}</span><strong>{itemName('talisman', id)}</strong></div><button className="icon-button" title="清空槽位" onClick={(event) => { event.stopPropagation(); setActiveSlot(slotId); clearSlot(slotId); }}>×</button></div>; })}
          </div>
          <div className="loadout-slot-actions"><button className="btn small" onClick={() => setState(defaultState(equipment, profile.stats))}>恢复存档装备</button></div>
        </Card>

        <Card title="检索装备" hint={`${visibleCatalog.length} / ${matchingCatalog.length} 条匹配`}>
          <div className="loadout-search-tabs">{(['weapon', 'armor', 'talisman'] as CatalogKind[]).map((kind) => <button className={`btn small ${catalogKind === kind ? 'primary' : ''}`} key={kind} onClick={() => setCatalogKind(kind)}>{kind === 'weapon' ? '武器' : kind === 'armor' ? '防具' : '护符'}</button>)}</div>
          <div className="row loadout-search-row"><input className="input" placeholder="搜索中文名、英文名或类别" value={search} onChange={(event) => setSearch(event.target.value)} /><button className={`btn small ${onlyOwned ? 'primary' : ''}`} onClick={() => setOnlyOwned((value) => !value)}>只看已拥有</button></div>
          <div className="loadout-results">{visibleCatalog.map((item) => <button className="loadout-result" key={`${item.kind}-${item.id}`} onClick={() => equip(item)}><ItemThumb icon={item.icon} size={34} /><span><strong>{item.name}</strong><small>{item.en} · {item.category} · {item.weight.toFixed(1)} 重量</small></span>{item.owned ? <em>已拥有</em> : <i>未拥有</i>}</button>)}{matchingCatalog.length === 0 && <div className="notice">没有符合条件的装备。</div>}</div>
          {visibleCatalog.length < matchingCatalog.length && <div className="loadout-result-actions"><button className="btn small" onClick={() => setResultLimit((limit) => Math.min(matchingCatalog.length, limit + 120))}>继续加载 120 条</button><button className="btn small" onClick={() => setResultLimit(matchingCatalog.length)}>显示全部 {matchingCatalog.length} 条</button></div>}
        </Card>
      </div>

      <Card title="已保存方案" hint="按当前存档与角色槽位隔离">
        {presets.length === 0 ? <div className="notice">还没有保存方案。保存后可在这里一键复制或加载。</div> : <div className="loadout-presets">{presets.map((preset) => <div className="loadout-preset" key={preset.id}><div><strong>{preset.name}</strong><small>{new Date(preset.savedAt).toLocaleString('zh-CN')}</small></div><div className="row"><button className="btn small" onClick={() => setState({ ...preset.state, stats: { ...preset.state.stats } })}>加载</button><button className="btn small" onClick={() => setState({ ...preset.state, stats: { ...preset.state.stats } })}>复制</button><button className="btn small" onClick={() => persistPresets(presets.filter((entry) => entry.id !== preset.id))}>删除</button></div></div>)}</div>}
      </Card>

      {currentCatalog?.kind === 'weapon' && <Card title="强化等级" hint="强化只作用于当前推演"><div className="row loadout-upgrade-row"><span>{currentCatalog.name}</span><input type="range" min={0} max={25} value={upgradeFor(current, currentCatalog.id)} onChange={(event) => setUpgrade(currentCatalog.id, Number(event.target.value))} /><input className="input" type="number" min={0} max={25} value={upgradeFor(current, currentCatalog.id)} onChange={(event) => setUpgrade(currentCatalog.id, Number(event.target.value))} /><span>+{upgradeFor(current, currentCatalog.id)}</span></div></Card>}
    </div>
  );
}
