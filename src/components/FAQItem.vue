<script setup lang="ts">
import { computed } from 'vue'
import { newId } from '@/utils/id.ts'

defineProps<{
  parentId: string
}>()

const faqId = computed(() => newId('faq-item-'))
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed fw-semibold"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#' + faqId"
        aria-expanded="false"
        :aria-controls="faqId"
      >
        <slot name="title"></slot>
      </button>
    </h2>
    <div :id="faqId" class="accordion-collapse collapse" :data-bs-parent="'#' + parentId">
      <div class="accordion-body">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
