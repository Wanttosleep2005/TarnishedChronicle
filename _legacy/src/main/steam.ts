import type { SteamAchievement, SteamAchievementsResult } from '../shared/contracts.js'

const ELDEN_RING_APP_ID = '1245620'

interface SteamPlayerAchievement {
  apiname: string
  achieved: number
  unlocktime: number
}

interface SteamSchemaAchievement {
  name: string
  displayName?: string
  description?: string
  hidden?: number
  icon?: string
  icongray?: string
}

interface SteamApiResponse {
  playerstats?: {
    achievements?: SteamPlayerAchievement[]
  }
  game?: {
    availableGameStats?: {
      achievements?: SteamSchemaAchievement[]
    }
  }
}

type Fetcher = typeof fetch

function buildUrl(endpoint: string, parameters: Record<string, string>): string {
  const url = new URL(`https://api.steampowered.com/ISteamUserStats/${endpoint}`)
  Object.entries(parameters).forEach(([key, value]) => url.searchParams.set(key, value))
  return url.toString()
}

export function mapSteamAchievements(
  playerAchievements: SteamPlayerAchievement[],
  schemaAchievements: SteamSchemaAchievement[]
): SteamAchievement[] {
  const schemaById = new Map(schemaAchievements.map((achievement) => [achievement.name, achievement]))

  return playerAchievements
    .map((achievement) => {
      const schema = schemaById.get(achievement.apiname)
      return {
        id: achievement.apiname,
        name: schema?.displayName || achievement.apiname,
        description: schema?.description,
        unlocked: achievement.achieved === 1,
        unlockedAt: achievement.achieved === 1 && achievement.unlocktime > 0 ? achievement.unlocktime : undefined,
        iconUrl: schema?.icon,
        grayIconUrl: schema?.icongray,
        hidden: schema?.hidden === 1
      }
    })
    .sort((a, b) => Number(b.unlocked) - Number(a.unlocked) || a.name.localeCompare(b.name, 'zh-CN'))
}

export async function loadSteamAchievements(
  steamId: string | undefined,
  apiKey: string | undefined,
  fetcher: Fetcher = fetch
): Promise<SteamAchievementsResult> {
  if (!steamId || !apiKey) {
    return {
      ok: false,
      code: 'not-configured',
      message: '未配置 STEAM64_ID 或 STEAM_WEB_API_KEY，无法读取 Steam 成就。'
    }
  }

  try {
    const commonParameters = { key: apiKey, appid: ELDEN_RING_APP_ID, l: 'schinese' }
    const [playerResponse, schemaResponse] = await Promise.all([
      fetcher(buildUrl('GetPlayerAchievements/v0001/', { ...commonParameters, steamid: steamId })),
      fetcher(buildUrl('GetSchemaForGame/v2/', commonParameters))
    ])

    if (playerResponse.status === 403 || playerResponse.status === 401) {
      return {
        ok: false,
        code: 'private-profile',
        message: 'Steam 资料不可访问。请确认个人资料和游戏详情对 API 可见。'
      }
    }

    if (!playerResponse.ok || !schemaResponse.ok) {
      return {
        ok: false,
        code: 'request-failed',
        message: 'Steam 未返回成就数据，请稍后重试。'
      }
    }

    const [playerPayload, schemaPayload] = (await Promise.all([
      playerResponse.json(),
      schemaResponse.json()
    ])) as [SteamApiResponse, SteamApiResponse]
    const playerAchievements = playerPayload.playerstats?.achievements
    const schemaAchievements = schemaPayload.game?.availableGameStats?.achievements

    if (!playerAchievements || !schemaAchievements) {
      return {
        ok: false,
        code: 'private-profile',
        message: 'Steam 未公开此账户的艾尔登法环成就数据。'
      }
    }

    return { ok: true, achievements: mapSteamAchievements(playerAchievements, schemaAchievements) }
  } catch {
    return {
      ok: false,
      code: 'request-failed',
      message: '无法连接 Steam Web API。请检查网络后重试。'
    }
  }
}
