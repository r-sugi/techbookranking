<template>
  <div class="sns-share">
    この本をシェア：
    <a :href="fbUrl" target="_blank" rel="noopener" class="sns-link">
      facebook
      <img
        v-lazy="require('@/assets/icons/sns/fb-square.svg')"
        alt="facebook-link"
      />
    </a>
    <a :href="fbUrl" target="_blank" rel="noopener" class="sns-link">
      twitter
      <img
        v-lazy="require('@/assets/icons/sns/tw-square.svg')"
        alt="twitter-link"
      />
    </a>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: null
    }
  },
  data() {
    return {
      encodeUrl: ''
    }
  },
  computed: {
    twUrl() {
      const title = encodeURIComponent(`${this.title}`)
      return `https://twitter.com/intent/tweet?text=${title}&hashtags=techbookrank&url=${
        this.encodeUrl
      }`
    },
    fbUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.encodeUrl}`
    }
  }
}
</script>
<style lang="scss" scoped>
.sns-share {
  margin: 0.5rem 0;
  height: 2rem;
  line-height: 2rem;
  .sns-link {
    height: 100%;
    display: inline-block;
    img {
      height: 80%;
      vertical-align: middle;
    }
  }
  .sns-link:first-child {
    margin-right: 1rem;
  }
}
</style>
