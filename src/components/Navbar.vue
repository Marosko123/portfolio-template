<template>
  <nav class="bg-blue-600 text-white py-4 px-6 flex justify-between items-center sticky top-0">
    <div class="font-bold text-xl">Moje Portfolio</div>

    <div class="space-x-4">
      <a href="#section1" class="hover:underline" @click="scrollToSection(0)">{{ t('nav.about') }}</a>
      <a href="#section2" class="hover:underline" @click="scrollToSection(1)">{{ t('nav.portfolio') }}</a>
      <a href="#section3" class="hover:underline" @click="scrollToSection(2)">{{ t('nav.services') }}</a>
      <a href="#section4" class="hover:underline" @click="scrollToSection(3)">{{ t('nav.contact') }}</a>
    </div>

    <!-- Language Dropdown -->
    <div class="relative">
      <button @click="toggleDropdown" type="button"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <span>{{ currentLanguage.toUpperCase() }}</span>
        <svg class="fill-current w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.516 7.548l4.484 4.484 4.484-4.484L16 8.548l-6 6-6-6z" />
        </svg>
      </button>
      <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
        <a v-for="lang in languages" :key="lang" @click="selectLanguage(lang)"
          class="block px-4 py-2 hover:bg-blue-100 cursor-pointer">
          {{ lang.toUpperCase() }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { locale } = useI18n()

// Reactive dropdown state and language values
const isDropdownOpen = ref(false)
const languages = ['sk', 'en', 'de']
const currentLanguage = ref(locale.value)

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

function selectLanguage(lang: string) {
  locale.value = lang
  currentLanguage.value = lang
  isDropdownOpen.value = false
}

function scrollToSection(index: number) {
  const scrollContainer = document.querySelector('.scroll-container') as HTMLElement

  if (!scrollContainer) {
    return
  }

  const sections = scrollContainer.querySelectorAll('.scroll-area') as NodeListOf<HTMLElement>

  if (sections[index]) {
    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<style scoped>
/* Additional styling if needed */
</style>
