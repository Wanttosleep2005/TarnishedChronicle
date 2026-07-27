import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { app, net } from 'electron';
import type { SteamAchievement, SteamAchievementsResult, SteamSettings } from '../shared/contracts';

const ELDEN_RING_APP_ID = '1245620';
const STS2_APP_ID = '2868840';
const inFlightRequests = new Map<string, Promise<SteamAchievementsResult>>();

// 成就常驻缓存:自动加载只读缓存,仅手动"刷新"才发网络请求
interface SteamCache {
  steamId: string;
  fetchedAt: number;
  achievements: SteamAchievement[];
}

function cacheFile(suffix: string): string {
  return join(app.getPath('userData'), `steam-achievements${suffix}.json`);
}

function readCache(suffix: string): SteamCache | null {
  try {
    return JSON.parse(readFileSync(cacheFile(suffix), 'utf-8')) as SteamCache;
  } catch {
    return null;
  }
}

function writeCache(suffix: string, cache: SteamCache): void {
  try {
    mkdirSync(app.getPath('userData'), { recursive: true });
    writeFileSync(cacheFile(suffix), JSON.stringify(cache), 'utf-8');
  } catch (error) {
    console.error('写入 Steam 成就缓存失败:', error);
  }
}

interface SteamPlayerAchievement {
  apiname: string;
  achieved: number;
  unlocktime: number;
}

interface SteamSchemaAchievement {
  name: string;
  displayName?: string;
  description?: string;
  hidden?: number;
  icon?: string;
  icongray?: string;
}

interface SteamApiResponse {
  playerstats?: { achievements?: SteamPlayerAchievement[] };
  game?: { availableGameStats?: { achievements?: SteamSchemaAchievement[] } };
}

function buildUrl(endpoint: string, parameters: Record<string, string>): string {
  const url = new URL(`https://api.steampowered.com/ISteamUserStats/${endpoint}`);
  Object.entries(parameters).forEach(([key, value]) => url.searchParams.set(key, value));
  return url.toString();
}

function mapSteamAchievements(
  playerAchievements: SteamPlayerAchievement[],
  schemaAchievements: SteamSchemaAchievement[],
): SteamAchievement[] {
  const schemaById = new Map(schemaAchievements.map((achievement) => [achievement.name, achievement]));

  return playerAchievements
    .map((achievement) => {
      const schema = schemaById.get(achievement.apiname);
      return {
        id: achievement.apiname,
        name: schema?.displayName || achievement.apiname,
        description: schema?.description,
        unlocked: achievement.achieved === 1,
        unlockedAt:
          achievement.achieved === 1 && achievement.unlocktime > 0 ? achievement.unlocktime : undefined,
        iconUrl: schema?.icon,
        grayIconUrl: schema?.icongray,
        hidden: schema?.hidden === 1,
      };
    })
    .sort((a, b) => Number(b.unlocked) - Number(a.unlocked) || a.name.localeCompare(b.name, 'zh-CN'));
}

async function loadFor(
  appId: string,
  cacheSuffix: string,
  gameLabel: string,
  withGlobalPercent: boolean,
  steam: SteamSettings,
  force: boolean,
): Promise<SteamAchievementsResult> {
  const steamId = steam.steamId64.trim();
  const apiKey = steam.webApiKey.trim();

  if (!force) {
    const cache = readCache(cacheSuffix);
    if (cache && (!steamId || cache.steamId === steamId)) {
      return { ok: true, achievements: cache.achievements, fetchedAt: cache.fetchedAt, fromCache: true };
    }
    return { ok: false, code: 'no-cache', message: '本地还没有成就缓存,点击「拉取」联网获取一次即可常驻。' };
  }

  if (!steamId || !apiKey) {
    return {
      ok: false,
      code: 'not-configured',
      message: '未配置 Steam64 ID 或 Steam Web API Key,无法读取 Steam 成就。可在法环侧「设置」页配置(两个游戏共用)。',
    };
  }

  const requestKey = `${appId}:${steamId}`;
  const pending = inFlightRequests.get(requestKey);
  if (pending) return pending;

  const request = fetchAndCache(appId, cacheSuffix, gameLabel, withGlobalPercent, steamId, apiKey);
  inFlightRequests.set(requestKey, request);
  return request.finally(() => {
    if (inFlightRequests.get(requestKey) === request) inFlightRequests.delete(requestKey);
  });
}

async function fetchAndCache(
  appId: string,
  cacheSuffix: string,
  gameLabel: string,
  withGlobalPercent: boolean,
  steamId: string,
  apiKey: string,
): Promise<SteamAchievementsResult> {
  try {
    const commonParameters = { key: apiKey, appid: appId, l: 'schinese' };
    // net.fetch 走 Chromium 网络栈,自动跟随系统代理(api.steampowered.com 国内需代理)
    const requests: Promise<Response>[] = [
      net.fetch(buildUrl('GetPlayerAchievements/v0001/', { ...commonParameters, steamid: steamId })),
      net.fetch(buildUrl('GetSchemaForGame/v2/', commonParameters)),
    ];
    if (withGlobalPercent) {
      requests.push(net.fetch(buildUrl('GetGlobalAchievementPercentagesForApp/v0002/', { gameid: appId })));
    }
    const [playerResponse, schemaResponse, globalResponse] = await Promise.all(requests);

    if (playerResponse.status === 403 || playerResponse.status === 401) {
      return {
        ok: false,
        code: 'private-profile',
        message: 'Steam 资料不可访问。请确认个人资料与游戏详情设置为公开。',
      };
    }

    if (!playerResponse.ok || !schemaResponse.ok) {
      return { ok: false, code: 'request-failed', message: 'Steam 未返回成就数据,请稍后重试。' };
    }

    const [playerPayload, schemaPayload] = (await Promise.all([
      playerResponse.json(),
      schemaResponse.json(),
    ])) as [SteamApiResponse, SteamApiResponse];
    const playerAchievements = playerPayload.playerstats?.achievements;
    const schemaAchievements = schemaPayload.game?.availableGameStats?.achievements;

    if (!playerAchievements || !schemaAchievements) {
      return {
        ok: false,
        code: 'private-profile',
        message: `Steam 未公开此账户的${gameLabel}成就数据。`,
      };
    }

    const achievements = mapSteamAchievements(playerAchievements, schemaAchievements);

    if (globalResponse?.ok) {
      try {
        const globalPayload = (await globalResponse.json()) as {
          achievementpercentages?: { achievements?: { name: string; percent: number | string }[] };
        };
        const percents = new Map(
          (globalPayload.achievementpercentages?.achievements ?? []).map((a) => [a.name, Number(a.percent)]),
        );
        for (const achievement of achievements) {
          const percent = percents.get(achievement.id);
          if (percent !== undefined && Number.isFinite(percent)) achievement.globalPercent = percent;
        }
      } catch {
        // 全球比例是锦上添花,失败不影响主数据
      }
    }

    const fetchedAt = Date.now();
    writeCache(cacheSuffix, { steamId, fetchedAt, achievements });
    return { ok: true, achievements, fetchedAt, fromCache: false };
  } catch {
    return {
      ok: false,
      code: 'request-failed',
      message:
        '无法连接 Steam Web API(该域名国内需代理)。请求已跟随系统代理设置——请确认代理已开启"系统代理"后重试。',
    };
  }
}

export function loadSteamAchievements(steam: SteamSettings, force: boolean): Promise<SteamAchievementsResult> {
  return loadFor(ELDEN_RING_APP_ID, '', '艾尔登法环', false, steam, force);
}

export function loadSts2SteamAchievements(steam: SteamSettings, force: boolean): Promise<SteamAchievementsResult> {
  return loadFor(STS2_APP_ID, '-sts2', '杀戮尖塔 2', true, steam, force);
}

export function loadDs3SteamAchievements(steam: SteamSettings, force: boolean): Promise<SteamAchievementsResult> {
  return loadFor('374320', '-ds3', '黑暗之魂 3', true, steam, force);
}
