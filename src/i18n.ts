// src/i18n.ts
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import sk from './locales/sk.json'
import de from './locales/de.json'

// Default jazyk
const defaultLocale = 'sk'

const i18n = createI18n({
  legacy: false, // dôležité pri Vue 3 s Composition API
  globalInjection: true,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    sk,
    de
  }
})

export default i18n
