<script setup lang="ts">
import type { GeoFeature } from '@/types/search'

defineProps<{
  searchResults: GeoFeature[]
}>()

defineEmits(['selected'])
</script>

<style scoped lang="scss">
.search-results:hover {
  background-color: $light !important;
}
</style>

<template>
  <template v-if="searchResults.length > 0">
    <div class="mt-1 border border-bottom-0">
      <button
        class="search-results rounded-0 p-2 bg-white d-block w-100 text-start border-0 border-bottom"
        @click="$emit('selected', searchResult)"
        v-for="searchResult of searchResults"
        :key="searchResult.properties.id"
      >
        {{ searchResult.properties.label }}
      </button>
    </div>
  </template>
</template>
