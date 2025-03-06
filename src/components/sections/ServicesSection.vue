<template>
  <div class="flex flex-col items-center justify-center w-full h-full bg-blue-200">
    <h2 class="text-3xl font-bold mb-4">{{ t('sections.services.title') }}</h2>
    <p class="max-w-md text-center">
      {{ t('sections.services.description') }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped></style>
