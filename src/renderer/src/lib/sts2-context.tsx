import { createContext, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import type { Sts2Root, Sts2RunMeta } from '../../../shared/contracts';
import { parseSts2Progress, parseSts2Run, type Sts2Progress, type Sts2Run } from './sts2.ts';

export interface Sts2RunsFocus {
  kind: 'card' | 'relic';
  id: string;
}

interface Sts2ContextValue {
  roots: Sts2Root[] | null;
  rootPath: string | null;
  setRootPath: (path: string) => void;
  progress: Sts2Progress | null;
  runs: Sts2RunMeta[];
  /** path → 对局(全量后台加载)。 */
  summaries: ReadonlyMap<string, Sts2Run>;
  loadedCount: number;
  error: string | null;
  /** 跨页联动:总览点榜单 → 对局页按携带筛选。 */
  runsFocus: Sts2RunsFocus | null;
  setRunsFocus: (focus: Sts2RunsFocus | null) => void;
}

const Sts2Context = createContext<Sts2ContextValue | null>(null);

export function Sts2Provider({ children }: { children: ReactNode }) {
  const [roots, setRoots] = useState<Sts2Root[] | null>(null);
  const [rootPath, setRootPath] = useState<string | null>(null);
  const [progress, setProgress] = useState<Sts2Progress | null>(null);
  const [runs, setRuns] = useState<Sts2RunMeta[]>([]);
  const [summaries, setSummaries] = useState<ReadonlyMap<string, Sts2Run>>(new Map());
  const [loadedCount, setLoadedCount] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [runsFocus, setRunsFocus] = useState<Sts2RunsFocus | null>(null);

  useEffect(() => {
    void window.api.sts2Detect().then((detected) => {
      setRoots(detected);
      if (detected.length > 0) setRootPath(detected[0].path);
    });
  }, []);

  const summariesRef = useRef<ReadonlyMap<string, Sts2Run>>(new Map());
  summariesRef.current = summaries;
  const [reloadKey, setReloadKey] = useState(0);
  const prevRootRef = useRef<string | null>(null);

  useEffect(() => {
    if (!rootPath) return;
    let cancelled = false;
    const sameRoot = prevRootRef.current === rootPath;
    prevRootRef.current = rootPath;
    if (!sameRoot) {
      setProgress(null);
      setRuns([]);
      setSummaries(new Map());
      setLoadedCount(0);
    }
    setError(null);
    void (async () => {
      const prog = await window.api.sts2Progress(rootPath);
      if (cancelled) return;
      if (prog.ok) {
        try {
          setProgress(parseSts2Progress(prog.json));
        } catch (e) {
          setError(`progress.save 解析失败:${e instanceof Error ? e.message : String(e)}`);
        }
      } else setError(prog.message);

      const list = await window.api.sts2Runs(rootPath);
      if (cancelled) return;
      setRuns(list);

      // 后台加载对局摘要;刷新时已加载的局直接复用,只补新增的
      const acc = new Map<string, Sts2Run>();
      if (sameRoot) {
        for (const meta of list) {
          const prev = summariesRef.current.get(meta.path);
          if (prev) acc.set(meta.path, prev);
        }
      }
      const pending = list.filter((meta) => !acc.has(meta.path));
      setSummaries(new Map(acc));
      setLoadedCount(acc.size);
      for (let i = 0; i < pending.length; i += 10) {
        const batch = pending.slice(i, i + 10);
        await Promise.all(
          batch.map(async (meta) => {
            const result = await window.api.sts2Run(meta.path);
            if (result.ok) {
              try {
                acc.set(meta.path, parseSts2Run(result.json));
              } catch {
                // 单局损坏跳过
              }
            }
          }),
        );
        if (cancelled) return;
        setSummaries(new Map(acc));
        setLoadedCount(acc.size);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [rootPath, reloadKey]);

  // 实时监听:游戏写盘(打完一局/进度变化)后自动刷新
  useEffect(() => {
    if (!rootPath) return;
    void window.api.sts2Watch(rootPath);
    const off = window.api.onSts2Changed(() => setReloadKey((k) => k + 1));
    return () => {
      off();
      void window.api.sts2Unwatch();
    };
  }, [rootPath]);

  const value = useMemo<Sts2ContextValue>(
    () => ({ roots, rootPath, setRootPath, progress, runs, summaries, loadedCount, error, runsFocus, setRunsFocus }),
    [roots, rootPath, progress, runs, summaries, loadedCount, error, runsFocus],
  );

  return <Sts2Context.Provider value={value}>{children}</Sts2Context.Provider>;
}

export function useSts2(): Sts2ContextValue {
  const ctx = useContext(Sts2Context);
  if (!ctx) throw new Error('useSts2 必须在 Sts2Provider 内使用');
  return ctx;
}
