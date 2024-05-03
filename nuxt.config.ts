// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === 'development' },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
  ],

  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },

  googleFonts: {
    download: true,
    inject: true,
    families: {
      Inter: [300, 400, 500, 700],
    },
  },

  tailwindcss: {
    viewer: false,
    exposeConfig: false,
  }
})
