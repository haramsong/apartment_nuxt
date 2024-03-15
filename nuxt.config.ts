// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  srcDir: 'src/',
  modules: [
    '@pinia/nuxt'
  ],
  css: [
    '@/assets/scss/ui.scss'
  ],
  devtools: { enabled: true }
})
