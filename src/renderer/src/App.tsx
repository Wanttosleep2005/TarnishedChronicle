import { useEffect, useState } from 'react';
import { NAV_ICONS } from './components/icons.tsx';
import { ZH_ARCHETYPE } from './data/zh/translations.ts';
import { SaveProvider, useSaveContext } from './lib/save-context.tsx';
import { AchievementsPage } from './pages/AchievementsPage.tsx';
import { BossesPage } from './pages/BossesPage.tsx';
import { EquipmentPage } from './pages/EquipmentPage.tsx';
import { CollectionPage } from './pages/CollectionPage.tsx';
import { GracesPage } from './pages/GracesPage.tsx';
import { BuildPage } from './pages/BuildPage.tsx';
import { CalculatorPage } from './features/calculator/index.tsx';
import { LoadoutPage } from './pages/LoadoutPage.tsx';
import { ChatPage } from './pages/ChatPage.tsx';
import { ComparePage } from './pages/ComparePage.tsx';
import { MapPage } from './pages/MapPage.tsx';
import { OverviewPage } from './pages/OverviewPage.tsx';
import { QuestsPage } from './pages/QuestsPage.tsx';
import { SettingsPage } from './pages/SettingsPage.tsx';
import { StoryPage } from './pages/StoryPage.tsx';
import { Sts2OverviewPage } from './pages/Sts2OverviewPage.tsx';
import { Sts2RunsPage } from './pages/Sts2RunsPage.tsx';
import { Sts2CollectionPage } from './pages/Sts2CollectionPage.tsx';
import { Sts2BadgesPage } from './pages/Sts2BadgesPage.tsx';
import { Sts2ChatPage } from './pages/Sts2ChatPage.tsx';
import { Sts2SettingsPage } from './pages/Sts2SettingsPage.tsx';
import { TimelinePage } from './pages/TimelinePage.tsx';
import { ErrorBoundary } from './components/error-boundary.tsx';
import { Sts2Provider, useSts2 } from './lib/sts2-context.tsx';
import { Ds3Provider, useDs3 } from './lib/ds3-context.tsx';
import { Ds3OverviewPage } from './pages/Ds3OverviewPage.tsx';
import { Ds3PlannerPage } from './pages/Ds3PlannerPage.tsx';
import { Ds3ComparePage } from './pages/Ds3ComparePage.tsx';
import { Ds3ChatPage } from './pages/Ds3ChatPage.tsx';
import { Ds3AchievementsPage } from './pages/Ds3AchievementsPage.tsx';
import { Ds3SettingsPage } from './pages/Ds3SettingsPage.tsx';
import { SoulCareerCard } from './components/SoulCareerCard.tsx';
import { launcherVisibility } from './lib/launcherVisibility.ts';
import type { Ds3Root, Sts2Root } from '../../shared/contracts.ts';

type GameKey = 'er' | 'sts2' | 'ds3';

type PageKey =
  | 'overview'
  | 'map'
  | 'bosses'
  | 'graces'
  | 'equipment'
  | 'collections'
  | 'loadout'
  | 'planner'
  | 'calculator'
  | 'quests'
  | 'achievements'
  | 'timeline'
  | 'story'
  | 'chat'
  | 'compare'
  | 'settings';

const NAV: { key: PageKey; label: string; needsSave: boolean }[] = [
  { key: 'overview', label: '角色总览', needsSave: true },
  { key: 'map', label: '交界地图', needsSave: true },
  { key: 'bosses', label: 'Boss 讨伐', needsSave: true },
  { key: 'graces', label: '赐福足迹', needsSave: true },
  { key: 'equipment', label: '装备行囊', needsSave: true },
  { key: 'collections', label: '收藏图鉴', needsSave: true },
  { key: 'loadout', label: '配装器', needsSave: true },
  { key: 'planner', label: '洗点模拟', needsSave: true },
  { key: 'quests', label: 'NPC 任务线', needsSave: true },
  { key: 'achievements', label: '成就徽章', needsSave: true },
  { key: 'timeline', label: '游玩时间线', needsSave: true },
  { key: 'story', label: '编年史', needsSave: true },
  { key: 'chat', label: '军师', needsSave: true },
  { key: 'compare', label: '角色对比', needsSave: true },
  { key: 'settings', label: '设置', needsSave: false },
];

const PAGE_KEYS: PageKey[] = [...NAV.map((n) => n.key), 'calculator'];

function initialPage(): PageKey {
  const hash = window.location.hash.replace('#', '') as PageKey;
  return PAGE_KEYS.includes(hash) ? hash : 'overview';
}

function ErShell({ goLauncher }: { goLauncher: () => void }) {
  const { status, error, save, slotIndex, setSlotIndex, openPicker, reload, savePath, mapFocus, mapReplay } =
    useSaveContext();
  const [page, setPage] = useState<PageKey>(initialPage);
  const [plannerToolsOpen, setPlannerToolsOpen] = useState(() => initialPage() === 'calculator');

  // 其他页面点了"在地图查看 / 回放" → 切到地图页(由 MapPage 消费)
  useEffect(() => {
    if (mapFocus || mapReplay !== null) setPage('map');
  }, [mapFocus, mapReplay]);

  const hasSave = status === 'ready' && save !== null;

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-top">
          <div className="brand">
            <div className="brand-title">褪色者编年史</div>
            <div className="brand-sub">TARNISHED CHRONICLE</div>
            <div className="brand-rule" />
          </div>

          <button className="nav-item launcher-return" onClick={goLauncher}>
            <span className="nav-icon">⌂</span>
            返回启动页
          </button>

          {hasSave && save && (
            <div className="char-select">
              <label>角色</label>
              <select className="select" value={slotIndex} onChange={(e) => setSlotIndex(Number(e.target.value))}>
                {save.slots.map((slot, index) => {
                  const p = slot.player_game_data;
                  return (
                    <option key={index} value={index}>
                      {p.character_name || `槽位 ${index + 1}`} · Lv{p.level} · {ZH_ARCHETYPE[p.arche_type] ?? ''}
                    </option>
                  );
                })}
              </select>
            </div>
          )}
        </div>

        <nav className="nav">
          {NAV.map((item) => {
            const isDisabled = item.needsSave && !hasSave;
            const itemStyle = isDisabled ? { opacity: 0.35, cursor: 'not-allowed' } : {};

            if (item.key !== 'planner') {
              return (
                <button
                  key={item.key}
                  className={`nav-item ${page === item.key ? 'active' : ''}`}
                  disabled={isDisabled}
                  style={itemStyle}
                  onClick={() => setPage(item.key)}
                >
                  <span className="nav-icon">{NAV_ICONS[item.key]?.()}</span>
                  {item.label}
                </button>
              );
            }

            return (
              <div className="nav-group" key={item.key}>
                <button
                  className={`nav-item nav-parent-toggle ${page === item.key ? 'active' : ''} ${plannerToolsOpen ? 'expanded' : ''}`}
                  disabled={isDisabled}
                  style={itemStyle}
                  aria-expanded={plannerToolsOpen}
                  onClick={() => {
                    if (page === item.key) setPlannerToolsOpen((open) => !open);
                    else {
                      setPage(item.key);
                      setPlannerToolsOpen(true);
                    }
                  }}
                >
                  <span className="nav-icon">{NAV_ICONS[item.key]?.()}</span>
                  {item.label}
                  <span className="nav-disclosure" aria-hidden="true" />
                </button>
                {plannerToolsOpen && (
                  <button
                    className={`nav-item nav-child ${page === 'calculator' ? 'active' : ''}`}
                    disabled={isDisabled}
                    style={itemStyle}
                    onClick={() => setPage('calculator')}
                  >
                    <span className="nav-icon">{NAV_ICONS.calculator?.()}</span>
                    计算器
                  </button>
                )}
              </div>
            );
          })}
        </nav>

        <div className="sidebar-foot">
          {savePath && <div className="save-path">{savePath}</div>}
          <div className="row">
            <button className="btn small" onClick={() => void openPicker()}>
              打开存档
            </button>
            {hasSave && (
              <button className="btn small" onClick={() => void reload()}>
                刷新
              </button>
            )}
          </div>
        </div>
      </aside>

      <main className="main">
        <ErrorBoundary>
        {status === 'boot' || status === 'loading' ? (
          <div className="empty-hero">
            <div className="spin" />
            <p>正在读取存档……</p>
          </div>
        ) : status === 'error' ? (
          <div className="empty-hero">
            <div className="glyph">☠</div>
            <h2>读取失败</h2>
            <p>{error}</p>
            <button className="btn primary" onClick={() => void openPicker()}>
              重新选择存档
            </button>
          </div>
        ) : !hasSave && page !== 'settings' ? (
          <div className="empty-hero">
            <div className="glyph">✦</div>
            <h2>寻找你的存档</h2>
            <p>
              未检测到艾尔登法环存档。默认位置:
              <br />
              <code style={{ color: 'var(--gold-dim)' }}>%APPDATA%\EldenRing\&lt;SteamID&gt;\ER0000.sl2</code>
              <br />
              也可以直接把 .sl2 / .co2 文件拖进窗口。
            </p>
            <button className="btn primary" onClick={() => void openPicker()}>
              选择存档文件
            </button>
          </div>
        ) : (
          <>
            {page === 'overview' && <OverviewPage />}
            {page === 'map' && <MapPage />}
            {page === 'bosses' && <BossesPage />}
            {page === 'graces' && <GracesPage />}
            {page === 'equipment' && <EquipmentPage onOpenCollection={() => setPage('collections')} />}
            {page === 'collections' && <CollectionPage />}
            {page === 'loadout' && <LoadoutPage />}
            {page === 'planner' && <BuildPage />}
            {page === 'calculator' && <CalculatorPage />}
            {page === 'quests' && <QuestsPage />}
            {page === 'achievements' && <AchievementsPage onOpenCollection={() => setPage('collections')} />}
            {page === 'timeline' && <TimelinePage />}
            {page === 'story' && <StoryPage goSettings={() => setPage('settings')} />}
            {page === 'chat' && <ChatPage goSettings={() => setPage('settings')} />}
            {page === 'compare' && <ComparePage />}
            {page === 'settings' && <SettingsPage />}
          </>
        )}
        </ErrorBoundary>
      </main>
    </div>
  );
}

type Sts2PageKey = 'overview' | 'runs' | 'collection' | 'badges' | 'chat' | 'settings';

const STS2_NAV: { key: Sts2PageKey; label: string; icon: string; needsSave: boolean }[] = [
  { key: 'overview', label: '生涯总览', icon: 'sts2', needsSave: true },
  { key: 'runs', label: '对局复盘', icon: 'timeline', needsSave: true },
  { key: 'collection', label: '图鉴完成度', icon: 'story', needsSave: true },
  { key: 'badges', label: '徽章墙', icon: 'achievements', needsSave: true },
  { key: 'chat', label: '尖塔军师', icon: 'chat', needsSave: true },
  { key: 'settings', label: '设置', icon: 'settings', needsSave: false },
];

function initialSts2Page(): Sts2PageKey {
  const hash = window.location.hash.replace('#sts2-', '');
  return STS2_NAV.some((n) => n.key === hash) ? (hash as Sts2PageKey) : 'overview';
}

function Sts2ShellInner({ goLauncher }: { goLauncher: () => void }) {
  const { roots, rootPath, setRootPath, runs, loadedCount, error, runsFocus } = useSts2();
  const [page, setPage] = useState<Sts2PageKey>(initialSts2Page);

  // 总览点榜单 → 跳到对局页(筛选由 RunsPage 消费)
  useEffect(() => {
    if (runsFocus) setPage('runs');
  }, [runsFocus]);
  const hasRoot = roots !== null && roots.length > 0;

  return (
    <div className="app theme-sts2">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-title">杀戮尖塔 II</div>
          <div className="brand-sub">SLAY THE SPIRE 2</div>
          <div className="brand-rule" />
        </div>

        {roots && roots.length > 1 && (
          <div className="char-select">
            <label>存档档案</label>
            <select className="select" value={rootPath ?? ''} onChange={(e) => setRootPath(e.target.value)}>
              {roots.map((root) => (
                <option key={root.path} value={root.path}>
                  {root.label} · {root.runCount} 局
                </option>
              ))}
            </select>
          </div>
        )}

        <nav className="nav">
          {STS2_NAV.map((item) => (
            <button
              key={item.key}
              className={`nav-item ${page === item.key ? 'active' : ''}`}
              disabled={item.needsSave && !hasRoot}
              style={item.needsSave && !hasRoot ? { opacity: 0.35, cursor: 'not-allowed' } : {}}
              onClick={() => setPage(item.key)}
            >
              <span className="nav-icon">{NAV_ICONS[item.icon]?.()}</span>
              {item.label}
            </button>
          ))}
          <div className="divider" style={{ margin: '8px 4px' }} />
          <button className="nav-item" onClick={goLauncher}>
            <span className="nav-icon">⌂</span>
            返回启动页
          </button>
        </nav>

        <div className="sidebar-foot">
          {rootPath && <div className="save-path">{rootPath}</div>}
          {runs.length > 0 && loadedCount < runs.length && (
            <div style={{ fontSize: 11, color: 'var(--faint)', textAlign: 'center' }}>
              对局摘要加载中 {loadedCount}/{runs.length}
            </div>
          )}
          <div style={{ fontSize: 11, color: 'var(--faint)', textAlign: 'center' }}>
            SLAY THE SPIRE 2 · 只读解析
          </div>
        </div>
      </aside>

      <main className="main">
        <ErrorBoundary>
          {roots === null ? (
            <div className="empty-hero">
              <div className="spin" />
              <p>正在扫描存档……</p>
            </div>
          ) : !hasRoot && page !== 'settings' ? (
            <div className="empty-hero">
              {error && <div className="notice" style={{ maxWidth: 560, borderColor: 'var(--crimson)' }}>{error}</div>}
              <div className="glyph">🗼</div>
              <h2>未找到杀戮尖塔 2 存档</h2>
              <p>已扫描 Steam userdata 与 %APPDATA%\SlayTheSpire2。安装并进行一局游戏后再来。</p>
            </div>
          ) : (
            <>
              {error && page !== 'settings' && (
                <div className="notice" style={{ margin: 16, borderColor: 'var(--crimson)' }}>{error}</div>
              )}
              {page === 'overview' && <Sts2OverviewPage />}
              {page === 'runs' && <Sts2RunsPage />}
              {page === 'collection' && <Sts2CollectionPage />}
              {page === 'badges' && <Sts2BadgesPage />}
              {page === 'chat' && <Sts2ChatPage />}
              {page === 'settings' && <Sts2SettingsPage />}
            </>
          )}
        </ErrorBoundary>
      </main>
    </div>
  );
}

function Sts2Shell({ goLauncher }: { goLauncher: () => void }) {
  return (
    <Sts2Provider>
      <Sts2ShellInner goLauncher={goLauncher} />
    </Sts2Provider>
  );
}

type Ds3PageKey = 'overview' | 'planner' | 'compare' | 'chat' | 'achievements' | 'settings';

const DS3_NAV: { key: Ds3PageKey; label: string; icon: string; needsSave: boolean }[] = [
  { key: 'overview', label: '不死人名册', icon: 'overview', needsSave: true },
  { key: 'planner', label: '升级规划', icon: 'planner', needsSave: true },
  { key: 'compare', label: '不死人对比', icon: 'compare', needsSave: true },
  { key: 'chat', label: '传火军师', icon: 'chat', needsSave: true },
  { key: 'achievements', label: '火之意志', icon: 'achievements', needsSave: false },
  { key: 'settings', label: '设置', icon: 'settings', needsSave: false },
];

function initialDs3Page(): Ds3PageKey {
  const hash = window.location.hash.replace('#ds3-', '');
  return DS3_NAV.some((n) => n.key === hash) ? (hash as Ds3PageKey) : 'overview';
}

function Ds3ShellInner({ goLauncher }: { goLauncher: () => void }) {
  const { roots, characters, error, plannerSlot } = useDs3();
  const [page, setPage] = useState<Ds3PageKey>(initialDs3Page);
  const hasSave = roots !== null && roots.length > 0;

  useEffect(() => {
    if (plannerSlot !== null) setPage('planner');
  }, [plannerSlot]);

  return (
    <div className="app theme-ds3">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-title">薪火编年史</div>
          <div className="brand-sub">DARK SOULS Ⅲ</div>
          <div className="brand-rule" />
        </div>

        <nav className="nav">
          {DS3_NAV.map((item) => (
            <button
              key={item.key}
              className={`nav-item ${page === item.key ? 'active' : ''}`}
              disabled={item.needsSave && !hasSave}
              style={item.needsSave && !hasSave ? { opacity: 0.35, cursor: 'not-allowed' } : {}}
              onClick={() => setPage(item.key)}
            >
              <span className="nav-icon">{NAV_ICONS[item.icon]?.()}</span>
              {item.label}
            </button>
          ))}
          <div className="divider" style={{ margin: '8px 4px' }} />
          <button className="nav-item" onClick={goLauncher}>
            <span className="nav-icon">⌂</span>
            返回启动页
          </button>
        </nav>

        <div className="sidebar-foot">
          {characters.length > 0 && (
            <div style={{ fontSize: 11, color: 'var(--faint)', textAlign: 'center' }}>
              {characters.length} 位不死人 · 只读解析
            </div>
          )}
          <div style={{ fontSize: 11, color: 'var(--faint)', textAlign: 'center' }}>DARK SOULS Ⅲ</div>
        </div>
      </aside>

      <main className="main">
        <ErrorBoundary>
          {roots === null ? (
            <div className="empty-hero">
              <div className="spin" />
              <p>正在寻找篝火……</p>
            </div>
          ) : !hasSave && page !== 'settings' && page !== 'achievements' ? (
            <div className="empty-hero">
              <div className="glyph">🔥</div>
              <h2>未找到黑暗之魂 III 存档</h2>
              <p>
                已扫描
                <code style={{ color: 'var(--gold-dim)' }}> %APPDATA%\DarkSoulsIII\&lt;SteamID&gt;\DS30000.sl2</code>
              </p>
            </div>
          ) : (
            <>
              {error && page !== 'settings' && (
                <div className="notice" style={{ margin: 16, borderColor: 'var(--crimson)' }}>{error}</div>
              )}
              {page === 'overview' && <Ds3OverviewPage />}
              {page === 'planner' && <Ds3PlannerPage />}
              {page === 'compare' && <Ds3ComparePage />}
              {page === 'chat' && <Ds3ChatPage />}
              {page === 'achievements' && <Ds3AchievementsPage />}
              {page === 'settings' && <Ds3SettingsPage />}
            </>
          )}
        </ErrorBoundary>
      </main>
    </div>
  );
}

function Ds3Shell({ goLauncher }: { goLauncher: () => void }) {
  return (
    <Ds3Provider>
      <Ds3ShellInner goLauncher={goLauncher} />
    </Ds3Provider>
  );
}

function Launcher({ onPick }: { onPick: (game: GameKey) => void }) {
  const [roots, setRoots] = useState<{ readonly sts2: readonly Sts2Root[]; readonly ds3: readonly Ds3Root[] }>({
    sts2: [],
    ds3: [],
  });

  useEffect(() => {
    let cancelled = false;
    void Promise.all([
      window.api.sts2Detect().catch(() => []),
      window.api.ds3Detect().catch(() => []),
    ]).then(([sts2, ds3]) => {
      if (!cancelled) setRoots({ sts2, ds3 });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const visibility = launcherVisibility(roots.sts2, roots.ds3);
  const visibleGameCount = 1 + Number(visibility.sts2) + Number(visibility.ds3);

  return (
    <div className="launcher">
      <div className="launcher-head">
        <div className="launcher-title">存 档 编 年 史</div>
        <div className="launcher-sub">SAVE CHRONICLES · 选择要进入的世界</div>
      </div>
      <div className={`launcher-cards launcher-cards--${visibleGameCount}`}>
        <div className="game-card game-er" onClick={() => onPick('er')}>
          <div className="game-emblem">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#e8c76a" strokeWidth="3.4" strokeLinecap="round">
              <path d="M36 8a26 26 0 1 1-14 47" />
              <path d="M38 4l-3 15 5 12" strokeWidth="2.6" />
              <circle cx="36" cy="37" r="3.4" fill="#f2dfae" stroke="none" />
            </svg>
          </div>
          <div className="game-name">褪色者编年史</div>
          <div className="game-desc">艾尔登法环 · 进度 / 地图 / 徽章 / 编年史</div>
          <div className="game-enter">进入交界地 →</div>
        </div>
        {visibility.sts2 && <div className="game-card game-sts2" onClick={() => onPick('sts2')}>
          <div className="game-emblem">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#f0863f" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M27 64V26l9-18 9 18v38" />
              <path d="M27 40h18M27 52h18M16 64h40" />
              <path d="M36 16v-6" strokeWidth="2.4" />
            </svg>
          </div>
          <div className="game-name">杀戮尖塔 II</div>
          <div className="game-desc">生涯统计 / 角色战绩 / 对局复盘(官方简中)</div>
          <div className="game-enter">开始攀塔 →</div>
        </div>}
        {visibility.ds3 && <div className="game-card game-ds3" onClick={() => onPick('ds3')}>
          <div className="game-emblem">
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none" stroke="#d8823c" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M36 6c-2 8-1 14 0 20M36 26 30 62h12L36 26Z" />
              <path d="M22 50c-3-6-2-12 3-16M50 50c3-6 2-12-3-16" strokeWidth="2.4" />
              <path d="M17 60c-2-4-1-8 2-11M55 60c2-4 1-8-2-11" strokeWidth="2" opacity="0.7" />
            </svg>
          </div>
          <div className="game-name">黑暗之魂 III</div>
          <div className="game-desc">不死人名册 / 升级规划 / 火之意志成就</div>
          <div className="game-enter">传火 →</div>
        </div>}
      </div>
      <SoulCareerCard sts2Roots={roots.sts2} ds3Roots={roots.ds3} />
      <div className="launcher-foot">存档只读 · 永不写入 · 上次的选择会被记住</div>
    </div>
  );
}

function Root() {
  const { settings, updateSettings } = useSaveContext();
  const [game, setGame] = useState<GameKey | 'launcher' | 'boot'>('boot');

  useEffect(() => {
    if (game !== 'boot' || !settings) return;
    // 截图/深链:#<er页> 直进法环壳,#sts2 直进尖塔壳
    const hash = window.location.hash.replace('#', '');
    if (hash === 'sts2' || hash.startsWith('sts2-')) setGame('sts2');
    else if (hash === 'ds3' || hash.startsWith('ds3-')) setGame('ds3');
    else if (PAGE_KEYS.includes(hash as PageKey)) setGame('er');
    else setGame(settings.lastGame ?? 'launcher');
  }, [settings, game]);

  const pick = (next: GameKey) => {
    setGame(next);
    void updateSettings({ lastGame: next });
  };

  if (game === 'boot') {
    return (
      <div className="launcher">
        <div className="spin" style={{ margin: 'auto' }} />
      </div>
    );
  }
  if (game === 'launcher') return <Launcher onPick={pick} />;
  if (game === 'sts2') return <Sts2Shell goLauncher={() => setGame('launcher')} />;
  if (game === 'ds3') return <Ds3Shell goLauncher={() => setGame('launcher')} />;
  return <ErShell goLauncher={() => setGame('launcher')} />;
}

export function App() {
  return (
    <SaveProvider>
      <Root />
    </SaveProvider>
  );
}
