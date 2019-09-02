<template>
  <div>
    <humbargur />
    <div id="header">
      <nuxt-link to="/">
        <div class="logo">
          <img :src="logoDataUrl" alt="logo" />
        </div>
        <h1 class="header-title">
          技術書ランキングをQiita記事から集計
          <br />テック・ブック・ランク
        </h1>
        <div class="statistics">投稿数: 37,896 書籍数: 4,305</div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { logoDataUrl } from '@/assets/logoDataUrl'
import humbargur from '@/components/humbargur.vue'
export default {
  components: {
    humbargur
  },
  data() {
    return {
      logoDataUrl: logoDataUrl
    }
  }
}
</script>
<style lang="scss" scoped>
.logo {
  width: 30%;
  max-width: 200px;
  min-width: 130px;
  margin: auto;
  img {
    vertical-align: middle;
  }
}
#header {
  text-align: center;
  background-color: $main-brand-color;
  padding: 16px;
  text-decoration: none;
  a {
    color: $main-brand-white;
    text-decoration: none;
  }
  .header-title {
    color: $main-brand-white;
    font-size: 20px;
    padding-top: 10px;
  }
  .statistics {
    color: $main-brand-white;
    padding-top: 10px;
    font-size: 12px;
  }
}
</style>
