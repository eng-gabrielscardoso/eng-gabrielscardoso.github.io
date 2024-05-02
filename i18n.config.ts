export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  availableLocales: ['en', 'pt'],
  messages: {
    en: {
      welcome: 'Welcome to Gabriel Portfolio',
    },
    pt: {
      welcome: 'Bem-vindo ao Portfólio do Gabriel',
    },
  },
}))
