import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { Effect } from 'effect';
import type { AppSettings } from '../../../shared/contracts';
import { parseSave, type LeanSave } from '../vendor/save-parser/index.ts';
import type { MapFocusTarget } from './map-affine.ts';
import { buildSnapshot } from './snapshot.ts';
import { deriveProfile } from './derive.ts';
import { deriveQuests } from './quests.ts';

export type SaveStatus = 'boot' | 'empty' | 'loading' | 'ready' | 'error';

interface SaveContextValue {
  status: SaveStatus;
  error: string | null;
  save: LeanSave | null;
  savePath: string | null;
  mtimeMs: number | null;
  slotIndex: number;
  settings: AppSettings | null;
  setSlotIndex: (index: number) => void;
  openPicker: () => Promise<void>;
  openPath: (path: string) => Promise<void>;
  reload: () => Promise<void>;
  updateSettings: (partial: Partial<AppSettings>) => Promise<void>;
  mapFocus: MapFocusTarget | null;
  requestMapFocus: (target: MapFocusTarget) => void;
  clearMapFocus: () => void;
  /** 时光回放:选中的历史快照时间戳(null=实时)。 */
  mapReplay: number | null;
  requestMapReplay: (t: number) => void;
  clearMapReplay: () => void;
  /** 讨伐计划(Boss 击杀旗标集合,按存档+槽位持久化)。 */
  planFlags: ReadonlySet<number>;
  togglePlanFlag: (flagId: number) => void;
  /** 当前追踪的 NPC 任务，按存档和角色槽位持久化。 */
  trackedQuestNpc: string | null;
  setTrackedQuestNpc: (npc: string | null) => void;
}

const SaveContext = createContext<SaveContextValue | null>(null);

function toArrayBuffer(data: Uint8Array): ArrayBuffer {
  if (data.byteOffset === 0 && data.byteLength === data.buffer.byteLength) {
    return data.buffer as ArrayBuffer;
  }
  return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer;
}

export function SaveProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<SaveStatus>('boot');
  const [error, setError] = useState<string | null>(null);
  const [save, setSave] = useState<LeanSave | null>(null);
  const [savePath, setSavePath] = useState<string | null>(null);
  const [mtimeMs, setMtimeMs] = useState<number | null>(null);
  const [slotIndex, setSlotIndex] = useState(0);
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [mapFocus, setMapFocus] = useState<MapFocusTarget | null>(null);
  const [mapReplay, setMapReplay] = useState<number | null>(null);
  const [planFlags, setPlanFlags] = useState<ReadonlySet<number>>(new Set());
  const [trackedQuestNpc, setTrackedQuestNpcState] = useState<string | null>(null);
  const pathRef = useRef<string | null>(null);

  const planKey = savePath ? `chronicle:plan:${savePath}:${slotIndex}` : null;
  const questTrackKey = savePath ? `chronicle:quest-track:${savePath}:${slotIndex}` : null;
  useEffect(() => {
    if (!planKey) return;
    try {
      const raw = localStorage.getItem(planKey);
      setPlanFlags(new Set(raw ? (JSON.parse(raw) as number[]) : []));
    } catch {
      setPlanFlags(new Set());
    }
  }, [planKey]);

  useEffect(() => {
    if (!questTrackKey) {
      setTrackedQuestNpcState(null);
      return;
    }
    try {
      setTrackedQuestNpcState(localStorage.getItem(questTrackKey));
    } catch {
      setTrackedQuestNpcState(null);
    }
  }, [questTrackKey]);

  const togglePlanFlag = useCallback(
    (flagId: number) => {
      setPlanFlags((prev) => {
        const next = new Set(prev);
        if (next.has(flagId)) next.delete(flagId);
        else next.add(flagId);
        if (planKey) localStorage.setItem(planKey, JSON.stringify([...next]));
        return next;
      });
    },
    [planKey],
  );

  const setTrackedQuestNpc = useCallback(
    (npc: string | null) => {
      setTrackedQuestNpcState(npc);
      if (!questTrackKey) return;
      try {
        if (npc) localStorage.setItem(questTrackKey, npc);
        else localStorage.removeItem(questTrackKey);
      } catch {
        // 本地追踪是辅助功能，存储不可用时保持当前会话状态。
      }
    },
    [questTrackKey],
  );

  useEffect(() => {
    if (!trackedQuestNpc || !save) return;
    const activeSlot = save.slots[slotIndex];
    if (!activeSlot) return;
    const tracked = deriveQuests(deriveProfile(activeSlot), activeSlot.event_flags.flags).find(
      (quest) => quest.npc === trackedQuestNpc,
    );
    if (tracked && tracked.status !== 'done' && tracked.status !== 'interrupted') return;
    setTrackedQuestNpc(null);
  }, [save, slotIndex, trackedQuestNpc, setTrackedQuestNpc]);

  const loadFromPath = useCallback(async (path: string, keepSlot = false) => {
    setStatus('loading');
    setError(null);
    const result = await window.api.readSave(path);
    if (!result.ok) {
      setStatus('error');
      setError(result.message);
      return;
    }
    try {
      const parsed = Effect.runSync(parseSave(toArrayBuffer(result.data)));
      if (parsed.slots.length === 0) {
        setStatus('error');
        setError('这份存档里没有可用的角色。');
        return;
      }
      setSave(parsed);
      setSavePath(path);
      pathRef.current = path;
      setMtimeMs(result.mtimeMs);
      setSlotIndex((prev) => (keepSlot && prev < parsed.slots.length ? prev : 0));
      setStatus('ready');
      void window.api.setSettings({ savePath: path }).then(setSettings);
      // 时间线快照:主进程按 mtime/内容去重
      void window.api.appendHistory(path, buildSnapshot(parsed, result.mtimeMs));
    } catch (parseError) {
      setStatus('error');
      const message = parseError instanceof Error ? parseError.message : String(parseError);
      setError(`解析存档失败:${message}(仅支持 PC 版 ER0000.sl2 / .co2)`);
    }
  }, []);

  // 启动:读设置 → 上次路径或自动探测
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const loaded = await window.api.getSettings();
      if (cancelled) return;
      setSettings(loaded);
      if (loaded.savePath) {
        await loadFromPath(loaded.savePath);
        return;
      }
      const detected = await window.api.detectSaves();
      if (cancelled) return;
      if (detected.length > 0) {
        await loadFromPath(detected[0].path);
      } else {
        setStatus('empty');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [loadFromPath]);

  // 存档变更监听(自动刷新)
  useEffect(() => {
    if (!savePath || !settings?.autoRefresh) {
      void window.api.unwatchSave();
      return;
    }
    void window.api.watchSave(savePath);
    const off = window.api.onSaveChanged(() => {
      const current = pathRef.current;
      if (current) void loadFromPath(current, true);
    });
    return () => {
      off();
      void window.api.unwatchSave();
    };
  }, [savePath, settings?.autoRefresh, loadFromPath]);

  // 拖拽打开
  useEffect(() => {
    const onDrop = (event: DragEvent) => {
      event.preventDefault();
      const file = event.dataTransfer?.files?.[0] as (File & { path?: string }) | undefined;
      if (file?.path && /\.(sl2|co2)$/i.test(file.path)) {
        void loadFromPath(file.path);
      }
    };
    const onDragOver = (event: DragEvent) => event.preventDefault();
    window.addEventListener('drop', onDrop);
    window.addEventListener('dragover', onDragOver);
    return () => {
      window.removeEventListener('drop', onDrop);
      window.removeEventListener('dragover', onDragOver);
    };
  }, [loadFromPath]);

  const openPicker = useCallback(async () => {
    const picked = await window.api.pickSaveFile();
    if (picked) await loadFromPath(picked);
  }, [loadFromPath]);

  const reload = useCallback(async () => {
    if (pathRef.current) await loadFromPath(pathRef.current, true);
  }, [loadFromPath]);

  const updateSettings = useCallback(async (partial: Partial<AppSettings>) => {
    const next = await window.api.setSettings(partial);
    setSettings(next);
  }, []);

  const requestMapFocus = useCallback((target: MapFocusTarget) => setMapFocus(target), []);
  const clearMapFocus = useCallback(() => setMapFocus(null), []);
  const requestMapReplay = useCallback((t: number) => setMapReplay(t), []);
  const clearMapReplay = useCallback(() => setMapReplay(null), []);

  const value = useMemo<SaveContextValue>(
    () => ({
      status,
      error,
      save,
      savePath,
      mtimeMs,
      slotIndex,
      settings,
      setSlotIndex,
      openPicker,
      openPath: loadFromPath,
      reload,
      updateSettings,
      mapFocus,
      requestMapFocus,
      clearMapFocus,
      mapReplay,
      requestMapReplay,
      clearMapReplay,
      planFlags,
      togglePlanFlag,
      trackedQuestNpc,
      setTrackedQuestNpc,
    }),
    [status, error, save, savePath, mtimeMs, slotIndex, settings, openPicker, loadFromPath, reload, updateSettings, mapFocus, requestMapFocus, clearMapFocus, mapReplay, requestMapReplay, clearMapReplay, planFlags, togglePlanFlag, trackedQuestNpc, setTrackedQuestNpc],
  );

  return <SaveContext.Provider value={value}>{children}</SaveContext.Provider>;
}

export function useSaveContext(): SaveContextValue {
  const ctx = useContext(SaveContext);
  if (!ctx) throw new Error('useSaveContext 必须在 SaveProvider 内使用');
  return ctx;
}

export function useActiveSlot() {
  const { save, slotIndex } = useSaveContext();
  return save?.slots[slotIndex] ?? null;
}
