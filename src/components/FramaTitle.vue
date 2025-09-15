<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  level: string
}>()

const titleTag = computed(() => {
  return 'h' + props.level
})
</script>

<style scoped>
h1,
h2,
h3 {
  font-family: 'Tovari Sans', sans-serif;
  transform: rotate(-2deg);
  max-width: fit-content;
}
</style>

<template>
  <component
    :is="titleTag"
    class="text-white m-0 text-uppercase fs-1 bg-primary rounded-3 p-3 pb-2 mb-5"
  >
    <slot></slot>
  </component>
</template>
