// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  devtools: { enabled: true },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY
  }
})
