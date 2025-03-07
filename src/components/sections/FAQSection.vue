<!-- TODO: Google Featured Snippets.
Odpovedaj na časté otázky
Použi FAQ sekciu na stránke

<h2>Najčastejšie otázky</h2>
<h3>Koľko stojí doučovanie?</h3>
<p>Jedna lekcia stojí ...</p> -->

<template>
  <div class="flex flex-col items-center justify-center w-full h-full bg-blue-500">
    <h2 class="text-3xl font-bold mb-4">{{ t('sections.faq.title') }}</h2>
    <p class="max-w-md text-center">
      {{ t('sections.faq.description') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped></style>
