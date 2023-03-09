// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_BASE_URL,
    },
  },
  modules: ['@nuxtjs/tailwindcss','@kevinmarrec/nuxt-pwa'],
  pwa: {
    workbox: { enabled: false },
  },
})
