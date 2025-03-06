<template>
  <div class="flex flex-col items-center justify-center w-full h-full bg-purple-200">
    <h2 class="text-3xl font-bold mb-4">{{ t('sections.contact.title') }}</h2>
    <p class="max-w-md text-center mb-6">
      {{ t('sections.contact.textMe') }}
      <strong>{{ t('myData.email') }}</strong> {{ t('sections.contact.callMe') }}<strong>{{ t('myData.phone') }}
        }}</strong>.
    </p>

    <!-- Príklad formulára, (momentálne len ukážka) -->
    <form class="space-y-4 w-64">
      <input class="block w-full p-2 border border-gray-300 rounded" type="text" placeholder="Vaše meno" />
      <input class="block w-full p-2 border border-gray-300 rounded" type="email" placeholder="E-mail" />
      <textarea class="block w-full p-2 border border-gray-300 rounded" rows="3" placeholder="Správa" />
      <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        {{ t('sections.contact.send') }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>

<style scoped>
/* Prípadné lokálne úpravy pre Kontakt sekciu */
</style>
