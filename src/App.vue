<script setup lang="ts">
import FramaTitle from './components/FramaTitle.vue'
import FAQ from './components/FAQ.vue'
import FindChaton from './components/FindChaton.vue'
</script>

<template>
  <div class="bg-light">
    <div class="container-lg pb-5 pt-3 mb-4">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title fs-1 mb-1">Ceci est un site de test</h1>
          <p class="card-text">
            Ceci n'est pas un site de framasoft mais uniquement un site de test.
          </p>
          <a href="#content-start" class="btn btn-secondary text-white">↓ Lire la suite</a>
        </div>
      </div>

      <div id="content-start">
        <FramaTitle class="mt-5" level="2">Trouver un chaton&nbsp;!</FramaTitle>
        <FindChaton />
      </div>
    </div>
  </div>

  <div class="bg-dark">
    <div class="container-lg pb-5 pt-2">
      <FAQ />
      <FramaTitle class="mt-5" level="2">Nous contacter</FramaTitle>
      <div class="mt-4">
        <p class="text-light">
          Vous pouvez nous contacter en passant par notre
          <a href="https://contact.framasoft.org/fr/#support" target="_blank">
            formulaire de contact.
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
