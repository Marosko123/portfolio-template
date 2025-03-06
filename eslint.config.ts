// .eslint.config.ts
import pluginVue from 'eslint-plugin-vue'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  // 1) Súbory na lintovanie
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  // 2) Súbory ignorované
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  // 3) Oficiálne Vue “flat recommended” nastavenia
  pluginVue.configs['flat/recommended'],

  // 4) TypeScript recommended config z '@vue/eslint-config-typescript'
  vueTsConfigs.recommended,

  // 5) Prettier “skipFormatting” – vypne formátovacie pravidlá
  skipFormatting,

  // 6) AŽ TU – konečné prepísanie vlastných pravidiel
  {
    name: 'my-custom-rules',
    rules: {
      // Ak chcete byť menej striktní v typovaní:
      '@typescript-eslint/no-explicit-any': 'off',

      // Vypneme multi-word požiadavku v názvoch komponentov
      'vue/multi-word-component-names': 'off',

      // Nech to len varuje
      'prefer-const': 'warn',

      'vue/html-self-closing': ['error', {
        html: {
          void: 'always',      // e.g. <br />, <img />, etc.
          normal: 'always',    // for non-void elements without content
          component: 'always'  // for Vue components
        },
        svg: 'always',
        math: 'always'
      }],

      "vue/max-attributes-per-line": ["error", {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }]
    },
  }
)
