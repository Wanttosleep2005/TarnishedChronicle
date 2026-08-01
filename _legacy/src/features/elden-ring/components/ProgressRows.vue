<script setup lang="ts">
import { Check, MapPin, SearchX } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import type { ProgressEntry } from '@shared/contracts'

const props = defineProps<{
  entries: ProgressEntry[]
  emptyLabel: string
}>()

const filter = ref<'all' | 'complete' | 'missing'>('all')
const query = ref('')

const entries = computed(() => {
  const normalizedQuery = query.value.trim().toLocaleLowerCase('zh-CN')
  return props.entries.filter((entry) => {
    const filterMatch = filter.value === 'all' || (filter.value === 'complete' ? entry.completed : !entry.completed)
    const textMatch =
      !normalizedQuery ||
      `${entry.name} ${entry.location ?? ''}`.toLocaleLowerCase('zh-CN').includes(normalizedQuery)
    return filterMatch && textMatch
  })
})
</script>

<template>
  <section class="data-surface progress-surface">
    <div class="surface-toolbar">
      <div class="filter-group" aria-label="完成状态筛选">
        <button
          v-for="option in [
            ['all', '全部'],
            ['complete', '已完成'],
            ['missing', '未完成']
          ] as const"
          :key="option[0]"
          class="filter-button"
          :class="{ active: filter === option[0] }"
          type="button"
          @click="filter = option[0]"
        >
          {{ option[1] }}
        </button>
      </div>
      <label class="search-field">
        <span class="sr-only">搜索</span>
        <input v-model="query" type="search" placeholder="搜索名称或地点" />
      </label>
    </div>

    <div v-if="entries.length" class="progress-list">
      <article v-for="entry in entries" :key="entry.id" class="progress-row">
        <span class="row-status" :class="{ complete: entry.completed }" :title="entry.completed ? '已完成' : '未完成'">
          <Check v-if="entry.completed" :size="14" />
        </span>
        <div>
          <strong>{{ entry.name }}</strong>
          <span v-if="entry.location" class="row-location"><MapPin :size="13" />{{ entry.location }}</span>
        </div>
      </article>
    </div>
    <div v-else class="empty-inline">
      <SearchX :size="19" />
      <span>{{ emptyLabel }}</span>
    </div>
  </section>
</template>
