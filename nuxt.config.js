export default {
  head: {
    title: 'AWP - Home',
    htmlAttrs: { lang: 'en' },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=5'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'AWP Project'
      },
      {
        name: 'keywords',
        content: 'AWP'
      },
      {
        name: 'author',
        content: 'Ali Nasser & Abdulrahman Allababidi'
      },
      {
        name: 'robots',
        content: 'index, follow'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  components: true,

  css: [
    '@/assets/scss/main.scss',
    'aos/dist/aos.css'
  ],

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
    '@nuxt/postcss8',
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt',
    '@aceforth/nuxt-optimized-images'
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-compress',
    '@nuxtjs/i18n'
  ],

  plugins: [
    { src: '~/plugins/aos', ssr: false }
  ],

  loaders: [
    {
      test: /\.(jpe?g|png)$/i,
      loaders: [
        'file-loader',
        'webp-loader'
      ]
    }
  ],

  pwa: {
    icon: {
      fileName: 'icon.png',
      source: '@/static/icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    manifest: {
      name: 'AWP Project',
      short_name: 'AWP',
      theme_color: '#FFF',
      display: 'standalone'
    },
    workbox: {
      runtimeCaching: [{
        urlPattern: 'https://awp.surge.sh/.*',
        handler: 'StaleWhileRevalidate'
      }]
    }
  },

  'nuxt-compress': {
    gzip: { threshold: 8192 },
    brotli: { threshold: 8192 }
  },

  optimizedImages: {
    optimizeImages: true
  },

  i18n: {
    strategy: 'prefix_and_default',
    skipSettingLocaleOnNavigate: false,

    vueI18n: {
      silentTranslationWarn: true,
      silentFallbackWarn: true
    },

    locales: [
      {
        code: 'en',
        file: 'en/index.ts',
        name: 'English',
        iso: 'en-US'
      }, {
        code: 'ar',
        file: 'ar/index.ts',
        name: 'العربية',
        iso: 'ar-SY'
      }
    ],

    lazy: true,
    langDir: 'i18n/',
    defaultLocale: 'en',
    parsePages: false,

    pages: {},

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  build: {
    extend(config) {
      config.node = {
        fs: 'empty'
      }
    },
    loaders: {
      scss: {
        implementation: require('sass')
      }
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    },
    babel: {
      compact: true
    }
  }
}
