// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_BASE_URL,
    },
  },
  ssr: false,
  modules: ['@nuxtjs/tailwindcss','@kevinmarrec/nuxt-pwa'],
  pwa: {
    workbox: { enabled: true },
    meta: {
      title: "Nuxt 3 PWA",
      author: "Sheila",
      mobileAppIOS: true,
    },
    manifest: {
      name: "Nuxt 3 PWA",
      short_name: "Nuxt PWA",
    },
  },
})
