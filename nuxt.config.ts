import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // Enable server-side rendering
  ssr: true,

  app: {
    head: {
      title: 'CG-Film - Jimmy-Paul Coti',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Site vitrine de Jimmy-Paul Coti' },
      ],
    },
  },

  css: [
    '@/assets/scss/main.scss', // Include a global SCSS file
  ],

  modules: [
    [
      '@nuxtjs/i18n', // Module for language management
      {
        locales: [
          { code: 'fr', name: 'Français', iso: 'fr-FR', file: 'fr.json' },
          { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
        ],
        defaultLocale: 'fr',
        lazy: true,
        langDir: 'locales/',
      },
    ],
    '@nuxt/image',  // Image optimization
    '@nuxtjs/google-fonts', // Google Fonts
  ],

  googleFonts: {
    families: {
      'Dancing Script': [400, 700],
      'Lato': [100, 300, 400, 700, 900],
      'Playfair Display': [400, 700, 900],
    },
    display: 'swap',
  },
  
  // Include a global plugin
  plugins: ['~/plugins/fontawesome.js'],

  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
  },

  build: {
    transpile: ['vue-toastification'], // Transpile a library if needed
  },

  compatibilityDate: '2025-01-24',
});