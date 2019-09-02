# techbookrank

> introduce books by qiita posts

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

## notes
@nuxtjs/pwa module causes the ERROR when `nuxt start start`, which will be fixed as below
```
ERROR  (node:4264) DeprecationWarning: Tapable.plugin is deprecated. Use new API on .hooks instead
https://github.com/nuxt/create-nuxt-app/issues/185#issuecomment-466757262
```

## TODO
```
GTM 導入
improve console.log :
https://github.com/chalk/chalk
https://slides.com/nakajmg/deck#/6

不要なconsole.logを表示させない: https://ja.nuxtjs.org/api/configuration-vue-config/
```
