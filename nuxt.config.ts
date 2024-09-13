// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/styles.css', '~/css/all.css'],
  modules: ['@vesp/nuxt-fontawesome', 'nuxt-swiper', '@pinia/nuxt']
})