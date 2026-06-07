// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxt/image',
  ],

  runtimeConfig: {
    public: {
      gaId: process.env.NUXT_PUBLIC_GA_ID || 'G-21HE4Y4KFB',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Riti Sharma — PhD Candidate, Experimental Mechanics & Biomechanics',
      meta: [
        { name: 'description', content: 'PhD candidate at UPenn studying nanoscale fracture mechanics in bone using synchrotron X-ray tomography at Brookhaven National Lab. Expertise in experimental mechanics, viscoelasticity, and materials biomechanics. Graduating August 2027.' },
        { name: 'author', content: 'Riti Sharma' },
        { name: 'keywords', content: 'nanoscale mechanics, materials biomechanics, experimental mechanics, fracture mechanics, X-ray tomography, synchrotron, bone fatigue, viscoelasticity, PhD mechanical engineering, UPenn, Brookhaven National Lab' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Riti Sharma' },
        { property: 'og:image', content: '/images/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/images/og-image.png' },
        { name: 'theme-color', content: '#FFFFFF' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://ritisharma.com' },
      ],
    },
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
    },
    display: 'swap',
    preload: true,
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
  },

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },

  image: {
    quality: 80,
    format: ['webp', 'avif', 'png', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  content: {
    markdown: {
      remarkPlugins: [],
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
      crawlLinks: true,
      failOnError: false,
    },
    compressPublicAssets: true,
  },

  routeRules: {
    '/': { prerender: true },
  },
})
