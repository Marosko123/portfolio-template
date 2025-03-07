<template>
  <div class="w-full h-full flex flex-col md:flex-row bg-slate-950">
    <div class="flex items-center justify-center md:w-1/2 ">
      <img src="@/assets/maros/maros-ocean-transparent.png" alt="Maroš Bednár usmievajúca sa postava"
        class="max-h-full" />
    </div>

    <div class="flex flex-col justify-center items-start p-8 md:w-1/2 space-y-6">
      <h2 class="text-5xl font-bold text-neutral-100">
        {{ t('sections.about.title') }}
      </h2>
      <p class="text-2xl text-neutral-100">
        {{ t('sections.about.description') }}
      </p>

      <div class="flex space-x-6 mt-4 text-2xl">
        <a href="https://www.instagram.com/bednar.maros/" target="_blank" rel="noopener noreferrer"
          class="hover:text-gold">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/maros.bednar8" target="_blank" rel="noopener noreferrer"
          class="hover:text-gold">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="https://github.com/Marosko123" target="_blank" rel="noopener noreferrer" class="hover:text-gold">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/marosbednar/" target="_blank" rel="noopener noreferrer"
          class="hover:text-gold">
          <i class="fab fa-linkedin"></i>
        </a>
      </div>

      <button @click="scrollToContact()"
        class="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 self-center md:self-start">
        {{ t('sections.about.contactButton') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function scrollToContact() {
  const contactIndex = 2
  scrollToSection(contactIndex)
}

function scrollToSection(index: number) {
  const scrollContainer = document.querySelector('.scroll-container') as HTMLElement
  if (!scrollContainer) return

  const sections = scrollContainer.querySelectorAll('.scroll-area') as NodeListOf<HTMLElement>
  if (sections[index]) {
    sections[index].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<style scoped></style>
