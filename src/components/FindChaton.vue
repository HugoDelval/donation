<script setup lang="ts">
import type { Ref } from 'vue'
import type { GeoFeature } from '@/types/search'

import { ref, watch } from 'vue'
import chatonsJson from '@/assets/chatons/chatons.json'
import { distance } from '@/utils/distance'
import TextSelectInput from '@/components/TextSelectInput.vue'

type Chaton = {
  lat: number
  lon: number
  popup: string
}

const address: Ref<GeoFeature | null> = ref(null)
const chatonFound: Ref<Chaton | null> = ref(null)
const chatons: Chaton[] = chatonsJson.chatons

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

watch(address, (selectedAddress: GeoFeature | null) => {
  if (selectedAddress === null) {
    chatonFound.value = null
    return
  }

  chatonFound.value = findClosest(
    selectedAddress.geometry.coordinates[1],
    selectedAddress.geometry.coordinates[0],
  )
})

async function search(newAddress: string) {
  if (newAddress.length < 4) {
    return []
  }
  const response = await fetch(
    `https://data.geopf.fr/geocodage/search?q=${newAddress}&autocomplete=1&index=address&limit=10&returntruegeometry=false`,
  )
  return (await response.json()).features
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <p>😺 Trouver le chaton le plus proche de chez vous&nbsp;! 😻</p>
      <div class="mb-3">
        <TextSelectInput
          v-model="address"
          :autocompleteMethod="search"
          name="address"
          placeholder="Adresse.."
          help="Commencez à taper votre adresse, on va vous aider à trouver rapidement"
          label="Votre adresse"
        >
        </TextSelectInput>
      </div>

      <div v-if="chatonFound" class="mt-3">
        <p>Trouvé&nbsp;! Voici le chaton le plus proche de chez vous&nbsp;:</p>
        😺 <span v-html="chatonFound?.popup"></span>
      </div>
    </div>
  </div>
</template>
