// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@pinia/nuxt',
    '@element-plus/nuxt',
    'nuxt-quasar-ui',
  ],
  css: [
    'element-plus/dist/index.css',
    '@/assets/scss/ui.scss',
  ],
  quasar: {
    lang: 'ko-KR',
    extras: {
      fontIcons: ['material-icons'],
    },
    plugins: ['Notify', 'Loading'],
  },
  devtools: { enabled: true }
})
