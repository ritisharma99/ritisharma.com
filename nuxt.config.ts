// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content',
    '@nuxt/image',
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Riti Sharma - Portfolio',
      meta: [
        { name: 'description', content: 'Riti Sharma — Biomechanical engineer, PhD researcher at UPenn. Exploring nanoscale fatigue in bone using synchrotron X-ray tomography.' },
        { name: 'author', content: 'Riti Sharma' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Riti Sharma' },
        { property: 'og:image', content: '/images/og-image.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: '/images/og-image.png' },
        { name: 'theme-color', content: '#0B1020' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    },
  },

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    display: 'swap',
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
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
    // Netlify CMS will write markdown to content/
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
  },

  routeRules: {
    '/': { prerender: true },
  },
})
