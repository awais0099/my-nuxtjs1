// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vesp/nuxt-fontawesome',
    '@nuxt/image',
    '@nuxt/eslint'
  ],
  eslint: {
    checker: true,
    config: {
      stylistic: true // or pass an object for specific options like { semi: false }
    }
  },
  fontawesome: {
    icons: {
      solid: [
        'user',
        'home',
        'cog',
        'tag',
        'clock',
        'list-check',
        'location-dot',
        'money-bill-transfer',
        'utensils',
        'magnifying-glass',
        'truck',
        'motorcycle',
        'bag-shopping',
        'star'
      ],
      regular: ['comment', 'clock'],
      brands: ['facebook', 'twitter', 'youtube', 'instagram']
    }
  }
})