import pkg from '../../package'

const GA_TRACKING_ID = process.env.GA_TRACKING_ID || 'UA-141297483-1'
const API_BASE_URL = 'http://localhost:3000'
const PORT = process.env.PORT || 8080
const BASE_DIR = process.env.BASE_DIR || '/'
const SITE_DESC = process.env.BASE_DESC || pkg.description
const SITE_TITLE = process.env.SITE_TITLE || 'QiitaBookRank'
const SITE_SUBTITLE =
  process.env.SITE_SUBTITLE || 'Qiita記事から人気の技術書を紹介'
const APP_BASE_URL = process.env.APP_BASE_URL || `http://localhost:${PORT}`
const OG_IMAGE_URL = process.env.OG_IMAGE_URL || ''
const BASE_TITLE = '技術書ランキング'

const HEAD = {
  title: BASE_TITLE,
  titleTemplate: `%s | ${SITE_TITLE}`,
  meta: [
    // common
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'fragment', content: '!' },
    {
      hid: 'description',
      name: 'description',
      content: `${SITE_DESC} | ${SITE_TITLE} ${SITE_SUBTITLE}`
    },
    // og
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: SITE_TITLE
    },
    { hid: 'og:type', property: 'og:type', content: 'website' },
    { hid: 'og:url', property: 'og:url', content: APP_BASE_URL },
    { hid: 'og:title', property: 'og:title', content: SITE_TITLE },
    { hid: 'og:image', property: 'og:image', content: OG_IMAGE_URL },
    {
      hid: 'og:description',
      property: 'og:description',
      content: `${SITE_DESC} | ${SITE_TITLE}  ${SITE_SUBTITLE}`
    },
    // twitter
    // how to debug: https://twitter.com/login?redirect_after_login=https%3A%2F%2Fcards-dev.twitter.com%2Fvalidator
    {
      hid: 'twitter:creator',
      property: 'twitter:creator',
      content: '@nodenodenode1'
    },
    {
      hid: 'twitter:card',
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    // fb
    // how to debug: https://developers.facebook.com/tools/debug/
    {
      hid: 'fb:app_id',
      property: 'fb:app_id',
      content: 'App-ID（15文字の半角数字）' // https://blog.sixapart.jp/2012-04/fb-app-id.html
    }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preconnect', href: '//images-fe.ssl-images-amazon.com' },
    { rel: 'preconnect', href: '//www.google-analytics.com' }
  ]
}

export const envs = {
  API_BASE_URL,
  APP_BASE_URL,
  PORT,
  BASE_DIR,
  BASE_TITLE,
  GA_TRACKING_ID,
  HEAD
}
