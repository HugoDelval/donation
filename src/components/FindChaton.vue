<script setup lang="ts">
import type { Ref } from 'vue'
import type { GeoFeature } from '@/types/search'

import { watch, ref, computed } from 'vue'
import chatonsJson from '@/assets/chatons/chatons.json'
import { distance } from '@/utils/distance'
import { debounce } from '@/utils/debouce'
import SearchResults from '@/components/SearchResults.vue'

type Chaton = {
  lat: number
  lon: number
  popup: string
}

const address = ref('')
const chatonFound: Ref<Chaton | null> = ref(null)
const resultFound = ref(false)
const focused = ref(false)
const addressEncoded = computed(() => encodeURIComponent(address.value))
const chatons: Chaton[] = chatonsJson.chatons
const searchResults: Ref<GeoFeature[]> = ref([])

function findClosest(lat: number, lon: number): Chaton | null {
  let closestDistance = 99e99
  let closestChaton = null
  for (const chaton of chatons) {
    const dist = distance(lat, lon, chaton.lat, chaton.lon)
    if (dist < closestDistance) {
      closestChaton = chaton
      closestDistance = dist
    }
  }

  return closestChaton
}

function addressSelected(addressSelected: GeoFeature) {
  resultFound.value = true
  address.value = addressSelected.properties.label
  searchResults.value = []
  chatonFound.value = findClosest(
    addressSelected.geometry.coordinates[1],
    addressSelected.geometry.coordinates[0],
  )
}

function hideSearchResults() {
  setTimeout(() => {
    focused.value = false
  }, 100)
}

async function search(newAddress: string) {
  if (newAddress.length < 4) {
    searchResults.value = []
    return
  }
  if (resultFound.value) {
    // skip the search once, as it has been triggered by the user selecting its address
    resultFound.value = false
    return
  }
  const response = await fetch(
    `https://data.geopf.fr/geocodage/search?q=${newAddress}&autocomplete=1&index=address&limit=10&returntruegeometry=false`,
  )
  searchResults.value = (await response.json()).features
}

watch(addressEncoded, debounce(search, 500))
</script>

<template>
  <div class="card">
    <div class="card-body">
      <p>😺 Trouver le chaton le plus proche de chez vous&nbsp;! 😻</p>
      <div class="mb-3">
        <label for="address" class="form-label">Votre adresse</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Adresse.."
          autocomplete="off"
          aria-describedby="addressHelp"
          @focusin="focused = true"
          @focusout="hideSearchResults"
          v-model="address"
        />
        <SearchResults
          @selected="addressSelected"
          :searchResults="searchResults"
          v-show="focused"
        />
        <div id="addressHelp" class="form-text">
          Commencez à taper votre adresse, on va vous aider à trouver rapidement
        </div>
      </div>

      <div v-if="chatonFound" class="mt-3">
        <p>Trouvé&nbsp;! Voici le chaton le plus proche de chez vous&nbsp;:</p>
        😺 <span v-html="chatonFound?.popup"></span>
      </div>
    </div>
  </div>
</template>
