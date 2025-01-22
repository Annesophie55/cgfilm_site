import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true, // Active le server-side rendering
  target: 'static', // Génération statique des pages
  app: {
    head: {
      title: 'CG-Film - Jimmy-Paul Coti',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Site vitrine de Jimmy-Paul Coti' }
      ]
    }
  },
  css: [
    '@/assets/styles/main.scss' // Exemple : inclure un fichier SCSS global
  ],
  modules: [
    '@nuxtjs/i18n', // Exemple : module pour la gestion des langues
    '@nuxt/image',  // Exemple : optimisation des images
  ],
  i18n: {
    locales: [
      { code: 'fr', name: 'Français', iso: 'fr-FR', file: 'fr.json' },
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'fr',
    lazy: true,
    langDir: 'locales/'
  },
  build: {
    transpile: ['vue-toastification'] // Exemple : transpile une lib si nécessaire
  }
})
