import { envs } from './src/constants/envs'
global.HTMLElement = typeof window === 'undefined' ? Object : window.HTMLElement

export default {
  mode: 'universal',
  srcDir: 'src',
  server: {
    port: envs.PORT
  },
  env: {
    baseUrl: envs.API_BASE_URL,
    appBaseUrl: envs.APP_BASE_URL,
    baseTitle: envs.BASE_TITLE,
    GA_TRACKING_ID: envs.GA_TRACKING_ID
  },
  head: envs.HEAD,

  router: {
    base: envs.BASE_DIR,
    routeNameSplitter: envs.BASE_DIR
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/pwa'],

  /*
   ** Nuxt.js plugins
   */
  plugins: [
    { src: '@/plugins/logger', ssr: true },
    { src: '@/plugins/element-ui', ssr: true },
    { src: '@/plugins/v-lazyload', ssr: false },
    { src: '@/plugins/ga.js', ssr: false }
  ],

  /*
   ** globally imported scss
   */
  styleResources: {
    scss: [
      '~/assets/style/globals/_reset.scss',
      '~/assets/style/globals/_common.scss',
      '~/assets/style/globals/_variables.scss'
    ]
  },

  css: ['element-ui/lib/theme-chalk/index.css'],

  /*
   ** Build configuration
   */
  build: {
    hardSource: true, // build cache will be created at node_modules/.cache/hard-source
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'inline-cheap-module-source-map'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  /*
   ** service worker
   */
  workbox: {
    offlineAnalytics: true,
    offline: false,
    skipWaiting: true,
    clientsClaim: true,
    runtimeCaching: [
      {
        urlPattern: `/*`,
        handler: 'staleWhileRevalidate',
        method: 'GET',
        strategyOptions: {
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 // 1日
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: `^https://images-fe.ssl-images-amazon.com/.*.(jpeg|jpg|png)$`,
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 // 1日
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      },
      {
        urlPattern: `^https://fonts.googleapis.com/.*$`,
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 30 // 30日
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}
