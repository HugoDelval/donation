<script setup lang="ts">
import SearchResults from '@/components/SearchResults.vue'
import { ref, computed, watch, useTemplateRef } from 'vue'
import { debounce } from '@/utils/debouce'
import type { GeoFeature } from '@/types/search'

const props = defineProps<{
  label: string
  name: string
  placeholder: string
  help: string
  autocompleteMethod: (v: string) => Promise<GeoFeature[]>
}>()

const focused = ref(false)
const model = defineModel<GeoFeature | null>()
const searchedValue = ref('')
const found = ref(false)
const searchResults = ref<GeoFeature[]>([])
const searchedValueEncoded = computed(() => encodeURIComponent(searchedValue.value))
const inputWrapper = useTemplateRef('input-wrapper')

function hideSearchResults(event: FocusEvent) {
  if (inputWrapper.value?.contains(event.relatedTarget as Node)) {
    return
  }

  setTimeout(() => {
    focused.value = false
  }, 200)
}

function addressSelected(address: GeoFeature) {
  model.value = address
  found.value = true
  focused.value = false
  searchedValue.value = address.properties.label
}

async function doSearch(searchString: string) {
  if (found.value) {
    // skip the search once, as it has been triggered by the user selecting its address
    found.value = false
    return
  }
  model.value = null
  searchResults.value = await props.autocompleteMethod(searchString)
}

watch(searchedValueEncoded, debounce(doSearch, 500))
</script>

<template>
  <label for="{{ name }}" class="form-label">{{ label }}</label>
  <div @focusin="focused = true" @focusout="hideSearchResults" ref="input-wrapper">
    <input
      type="text"
      class="form-control"
      :id="name"
      :placeholder
      autocomplete="off"
      aria-describedby="inputHelp"
      v-model="searchedValue"
    />
    <SearchResults
      @selected="addressSelected"
      :searchResults="searchResults"
      v-show="focused"
      :aria-hidden="!focused"
    />
  </div>
  <div id="inputHelp" class="form-text">
    {{ help }}
  </div>
</template>
