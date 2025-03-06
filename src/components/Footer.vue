<template>
  <footer class="bg-gray-800 text-white py-4 px-6 flex justify-center">
    <p>&copy; 2025 {{ t("myData.name") + ' ' + t("myData.surname") }} | {{ t("footer.copyright") }}</p>
  </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
/* Footer so základným stylingom cez Tailwind */
</style>
