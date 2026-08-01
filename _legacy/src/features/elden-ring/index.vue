<script setup lang="ts">
import {
  Archive,
  ChevronRight,
  CircleAlert,
  Crosshair,
  FolderOpen,
  Landmark,
  LoaderCircle,
  PackageOpen,
  ScrollText,
  ShieldCheck,
  Skull,
  Trophy
} from 'lucide-vue-next'
import { computed, onMounted, ref } from 'vue'
import ProgressRows from './components/ProgressRows.vue'
import { parseEldenRingSave } from './parser/save-adapter'
import type {
  CharacterProgress,
  ImportResult,
  InventoryCategory,
  InventoryItem,
  InventorySource,
  SaveScopeApi,
  SaveSnapshot,
  SteamAchievement
} from '@shared/contracts'

type View = 'overview' | 'achievements' | 'bosses' | 'graces' | 'inventory'
type InventoryFilter = 'all' | InventorySource
type InventoryCategoryFilter = 'all' | InventoryCategory

const desktopApi: SaveScopeApi | undefined = typeof window.saveScope === 'undefined' ? undefined : window.saveScope
const isDesktop = Boolean(desktopApi)
const view = ref<View>('overview')
const save = ref<SaveSnapshot>()
const selectedCharacterId = ref<string>()
const browserFileInput = ref<HTMLInputElement>()
const importState = ref<'idle' | 'loading' | 'error'>('idle')
const importMessage = ref('尚未导入存档。')
const achievements = ref<SteamAchievement[]>([])
const achievementState = ref<'loading' | 'ready' | 'error'>('loading')
const achievementMessage = ref('正在检查 Steam 成就配置…')
const inventoryFilter = ref<InventoryFilter>('all')
const inventoryCategory = ref<InventoryCategoryFilter>('all')
const inventoryQuery = ref('')

const navigation = [
  { id: 'overview', label: '概览', icon: Crosshair },
  { id: 'achievements', label: 'Steam 成就', icon: Trophy },
  { id: 'bosses', label: 'Boss', icon: Skull },
  { id: 'graces', label: '赐福', icon: Landmark },
  { id: 'inventory', label: '库存', icon: Archive }
] as const

const categoryOptions: readonly { id: InventoryCategoryFilter; label: string }[] = [
  { id: 'all', label: '全部分类' },
  { id: 'weapons-shields', label: '武器与盾牌' },
  { id: 'ammunition', label: '弹药' },
  { id: 'armor', label: '防具' },
  { id: 'talismans', label: '护符' },
  { id: 'ashes-of-war', label: '战灰' },
  { id: 'spells', label: '魔法与祷告' },
  { id: 'spirit-ashes', label: '骨灰' },
  { id: 'tools', label: '道具' },
  { id: 'crafting-materials', label: '制作材料' },
  { id: 'bolstering-materials', label: '强化材料' },
  { id: 'key-items', label: '重要物品' },
  { id: 'info-items', label: '信息物品' },
  { id: 'gestures', label: '肢体动作' }
]

const selectedCharacter = computed<CharacterProgress | undefined>(() => {
  return save.value?.characters.find((character) => character.id === selectedCharacterId.value) ?? save.value?.characters[0]
})

const activeEntries = computed(() => {
  if (!selectedCharacter.value) return []
  if (view.value === 'bosses') return selectedCharacter.value.bosses
  if (view.value === 'graces') return selectedCharacter.value.graces
  return []
})

const completion = computed(() => {
  const entries = activeEntries.value
  const complete = entries.filter((entry) => entry.completed).length
  return { complete, total: entries.length, percent: entries.length ? Math.round((complete / entries.length) * 100) : 0 }
})

const achievementCompletion = computed(() => {
  const complete = achievements.value.filter((achievement) => achievement.unlocked).length
  return { complete, total: achievements.value.length }
})

const sourceOptions = computed<readonly { id: InventoryFilter; label: string }[]>(() => {
  const options: { id: InventoryFilter; label: string }[] = [
    { id: 'all', label: '全部' },
    { id: 'held', label: '随身' }
  ]
  if (selectedCharacter.value?.inventory.storageAvailable) options.push({ id: 'storage', label: '箱子' })
  return options
})

const inventoryItems = computed(() => {
  const inventory = selectedCharacter.value?.inventory
  const query = inventoryQuery.value.trim().toLocaleLowerCase('zh-CN')
  return (inventory?.items ?? []).filter((item) => {
    const sourceMatch = inventoryFilter.value === 'all' || item.source === inventoryFilter.value
    const categoryMatch = inventoryCategory.value === 'all' || item.category === inventoryCategory.value
    const textMatch =
      !query ||
      item.name?.toLocaleLowerCase('zh-CN').includes(query) ||
      item.catalogId?.toString().includes(query) ||
      item.itemId.toString().includes(query)
    return sourceMatch && categoryMatch && textMatch
  })
})

const inventoryCount = computed(() => selectedCharacter.value?.inventory.items.length ?? 0)

function formatPlaytime(seconds?: number): string {
  if (!seconds) return '—'
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  return `${hours} 小时 ${minutes} 分钟`
}

function formatItemName(item: InventoryItem): string {
  return item.name ?? `未收录物品 #${item.itemId}`
}

function formatCategory(category?: InventoryCategory): string {
  return categoryOptions.find((option) => option.id === category)?.label ?? '未分类'
}

function selectCharacter(id: string): void {
  selectedCharacterId.value = id
  view.value = 'overview'
  inventoryFilter.value = 'all'
  inventoryCategory.value = 'all'
  inventoryQuery.value = ''
}

function applyImportResult(result: ImportResult): void {
  if (result.ok) {
    save.value = result.save
    selectedCharacterId.value = result.save.characters[0]?.id
    importState.value = 'idle'
    importMessage.value = `已读取 ${result.save.characters.length} 个角色槽位。`
    return
  }

  importState.value = result.code === 'cancelled' ? 'idle' : 'error'
  importMessage.value = result.message
}

function importFailure(error: unknown): ImportResult {
  const message = error instanceof Error ? error.message : '无法读取该文件。'
  return { ok: false, code: 'invalid-save', message: `导入失败：${message}` }
}

async function importBrowserSave(event: Event): Promise<void> {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (!file) return

  if (file.name.toLocaleLowerCase('en-US') !== 'er0000.sl2') {
    applyImportResult({ ok: false, code: 'unsupported-save', message: '请选择艾尔登法环的 ER0000.sl2 文件。' })
    return
  }

  importState.value = 'loading'
  importMessage.value = '正在浏览器内存中读取并解析存档…'
  try {
    applyImportResult({ ok: true, save: parseEldenRingSave(await file.arrayBuffer()) })
  } catch (error) {
    applyImportResult(importFailure(error))
  }
}

async function importSave(): Promise<void> {
  if (!desktopApi) {
    browserFileInput.value?.click()
    return
  }

  importState.value = 'loading'
  importMessage.value = '正在读取并在本机解析存档…'
  try {
    applyImportResult(await desktopApi.importEldenRingSave())
  } catch (error) {
    applyImportResult(importFailure(error))
  }
}

async function fetchAchievements(): Promise<void> {
  if (!desktopApi) {
    achievementState.value = 'error'
    achievementMessage.value = '浏览器预览可手选并解析存档；Steam 成就需要 Electron 桌面应用读取本机 .env。'
    return
  }

  achievementState.value = 'loading'
  const result = await desktopApi.getSteamAchievements()
  if (result.ok) {
    achievements.value = result.achievements
    achievementState.value = 'ready'
    achievementMessage.value = ''
  } else {
    achievementState.value = 'error'
    achievementMessage.value = result.message
  }
}

onMounted(fetchAchievements)
</script>

<template>
  <main class="scope-shell">
    <input ref="browserFileInput" class="sr-only" type="file" accept=".sl2" @change="importBrowserSave" />

    <aside class="sidebar">
      <div class="brand-lockup">
        <div class="brand-mark" aria-hidden="true"><Crosshair :size="23" /></div>
        <div>
          <span class="brand-kicker">LOCAL SAVE OBSERVATORY</span>
          <h1>Save Scope</h1>
        </div>
      </div>

      <button class="import-button" type="button" :disabled="importState === 'loading'" @click="importSave">
        <LoaderCircle v-if="importState === 'loading'" :size="17" class="spin" />
        <FolderOpen v-else :size="17" />
        <span>{{ importState === 'loading' ? '读取存档中…' : '导入 ER0000.sl2' }}</span>
      </button>
      <p class="import-note">{{ isDesktop ? '仅在本机内存读取，不写回、不上传。' : '手选文件后仅在浏览器内存读取，不上传。' }}</p>

      <nav class="side-nav" aria-label="进度视图">
        <button
          v-for="item in navigation"
          :key="item.id"
          type="button"
          class="nav-item"
          :class="{ active: view === item.id }"
          @click="view = item.id"
        >
          <component :is="item.icon" :size="18" />
          <span>{{ item.label }}</span>
          <ChevronRight v-if="view === item.id" :size="15" class="nav-arrow" />
        </button>
      </nav>
    </aside>

    <section class="workspace">
      <header class="workspace-header">
        <div>
          <span class="eyebrow">{{ view === 'overview' ? '当前档案' : '进度检索' }}</span>
          <h2>
            {{
              {
                overview: '存档概览',
                achievements: 'Steam 成就',
                bosses: 'Boss 进度',
                graces: '赐福记录',
                inventory: '库存目录'
              }[view]
            }}
          </h2>
        </div>
        <div class="header-status" :class="{ error: importState === 'error' }">
          <ShieldCheck v-if="importState !== 'error'" :size="16" />
          <CircleAlert v-else :size="16" />
          <span>{{ importMessage }}</span>
        </div>
      </header>

      <div v-if="save?.characters.length" class="character-strip" aria-label="角色选择">
        <button
          v-for="character in save.characters"
          :key="character.id"
          type="button"
          class="character-chip"
          :class="{ active: selectedCharacter?.id === character.id }"
          @click="selectCharacter(character.id)"
        >
          <span>槽位 {{ character.slotIndex + 1 }}</span>
          <strong>{{ character.name }}</strong>
          <small>Lv. {{ character.level ?? '—' }}</small>
        </button>
      </div>

      <section v-if="!selectedCharacter" class="empty-state main-empty">
        <div class="empty-emblem"><ScrollText :size="34" /></div>
        <span class="eyebrow">READ-ONLY SESSION</span>
        <h3>从存档开始观察</h3>
        <p>选择艾尔登法环的 <code>ER0000.sl2</code>，查看角色、Boss、赐福及 Steam 成就进度。</p>
        <button class="secondary-command" type="button" @click="importSave">
          <FolderOpen :size="17" />
          选择存档
        </button>
      </section>

      <template v-else>
        <section v-if="view === 'overview'" class="overview-grid">
          <article class="identity-panel">
            <span class="eyebrow">SELECTED CHARACTER</span>
            <h3>{{ selectedCharacter.name }}</h3>
            <p>{{ selectedCharacter.mapName || '位置未知' }}</p>
            <div class="identity-metrics">
              <div><span>等级</span><strong>{{ selectedCharacter.level ?? '—' }}</strong></div>
              <div><span>游玩时间</span><strong>{{ formatPlaytime(selectedCharacter.secondsPlayed) }}</strong></div>
            </div>
          </article>
          <article class="metric-panel">
            <Skull :size="18" />
            <span>已击败 Boss</span>
            <strong>{{ selectedCharacter.bosses.filter((entry) => entry.completed).length }}<small>/ {{ selectedCharacter.bosses.length }}</small></strong>
          </article>
          <article class="metric-panel">
            <Landmark :size="18" />
            <span>已开启赐福</span>
            <strong>{{ selectedCharacter.graces.filter((entry) => entry.completed).length }}<small>/ {{ selectedCharacter.graces.length }}</small></strong>
          </article>
          <article class="metric-panel steam-metric">
            <Trophy :size="18" />
            <span>Steam 成就</span>
            <strong v-if="achievementState === 'ready'">{{ achievementCompletion.complete }}<small>/ {{ achievementCompletion.total }}</small></strong>
            <strong v-else>—</strong>
          </article>
        </section>

        <section v-else-if="view === 'achievements'" class="achievements-view">
          <div class="view-intro">
            <div><span class="eyebrow">STEAM ACCOUNT</span><p>账户进度与角色存档彼此独立。</p></div>
            <strong v-if="achievementState === 'ready'">{{ achievementCompletion.complete }} / {{ achievementCompletion.total }}</strong>
          </div>
          <div v-if="achievementState === 'loading'" class="empty-inline"><LoaderCircle :size="18" class="spin" />正在读取 Steam 成就…</div>
          <div v-else-if="achievementState === 'error'" class="empty-inline warning"><CircleAlert :size="19" />{{ achievementMessage }}</div>
          <div v-else class="achievement-grid">
            <article v-for="achievement in achievements" :key="achievement.id" class="achievement-card" :class="{ locked: !achievement.unlocked }">
              <img v-if="achievement.unlocked ? achievement.iconUrl : achievement.grayIconUrl || achievement.iconUrl" :src="achievement.unlocked ? achievement.iconUrl : achievement.grayIconUrl || achievement.iconUrl" :alt="achievement.name" />
              <div v-else class="achievement-fallback"><Trophy :size="20" /></div>
              <div><strong>{{ achievement.hidden && !achievement.unlocked ? '隐藏成就' : achievement.name }}</strong><span>{{ achievement.unlocked ? '已解锁' : '未解锁' }}</span></div>
            </article>
          </div>
        </section>

        <section v-else-if="view === 'bosses' || view === 'graces'" class="progress-view">
          <div class="view-intro"><div><span class="eyebrow">SAVE EVENT FLAGS</span><p>由当前角色的本地事件标志计算。</p></div><strong>{{ completion.complete }} / {{ completion.total }} · {{ completion.percent }}%</strong></div>
          <ProgressRows :entries="activeEntries" :empty-label="view === 'bosses' ? '未找到可显示的 Boss 标志。' : '未找到可显示的赐福标志。'" />
        </section>

        <section v-else-if="view === 'inventory'" class="inventory-view">
          <div class="view-intro inventory-intro">
            <div><span class="eyebrow">SAVE INVENTORY</span><p>名称来自本机游戏简体中文文本；数量和归属直接由已选角色存档解析。</p></div>
            <strong>{{ inventoryCount }} 条记录</strong>
          </div>
          <div v-if="selectedCharacter.inventory.availability === 'not-supported'" class="catalog-warning"><CircleAlert :size="17" />{{ selectedCharacter.inventory.message }}</div>
          <div v-else-if="!selectedCharacter.inventory.storageAvailable" class="catalog-warning"><CircleAlert :size="17" />{{ selectedCharacter.inventory.message ?? '该存档版本仅确认随身库存；箱子内容暂不展示。' }}</div>
          <div class="inventory-controls">
            <div class="filter-group" aria-label="库存来源筛选">
              <button v-for="option in sourceOptions" :key="option.id" type="button" class="filter-button" :class="{ active: inventoryFilter === option.id }" @click="inventoryFilter = option.id">{{ option.label }}</button>
            </div>
            <label class="category-field">
              <span class="sr-only">库存分类</span>
              <select v-model="inventoryCategory" aria-label="库存分类">
                <option v-for="option in categoryOptions" :key="option.id" :value="option.id">{{ option.label }}</option>
              </select>
            </label>
            <label class="search-field"><span class="sr-only">搜索库存</span><input v-model="inventoryQuery" type="search" placeholder="搜索物品名称或目录 ID" /></label>
          </div>
          <div class="data-surface inventory-table-wrap">
            <table class="inventory-table">
              <thead><tr><th>来源</th><th>物品</th><th>数量</th><th>强化</th><th>目录 ID</th></tr></thead>
              <tbody>
                <tr v-for="(item, index) in inventoryItems" :key="`${item.source}-${item.handle}-${item.itemId}-${index}`">
                  <td><span class="source-status" :class="item.source">{{ item.source === 'held' ? '随身' : '箱子' }}</span></td>
                  <td><div class="inventory-name"><PackageOpen :size="16" /><div><strong>{{ formatItemName(item) }}</strong><small>{{ formatCategory(item.category) }} · 原始 ID {{ item.itemId }}</small></div></div></td>
                  <td><strong>{{ item.quantity }}</strong></td>
                  <td>{{ item.upgradeLevel === undefined ? '—' : `+${item.upgradeLevel}` }}</td>
                  <td><small>{{ item.catalogId ?? '未收录' }}</small></td>
                </tr>
                <tr v-if="!inventoryItems.length"><td colspan="5" class="no-table-results">没有符合条件的已解析物品。</td></tr>
              </tbody>
            </table>
          </div>
        </section>
      </template>
    </section>
  </main>
</template>
