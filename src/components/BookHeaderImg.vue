<template>
  <div class="book-img-box">
    <a
      :href="`https://www.amazon.co.jp/dp/${book.ASIN}`"
      target="_blank"
      rel="noopener"
    >
      <img
        v-lazy="book.image_path"
        class="book-img lazyload"
        :alt="book.book_title"
      />
    </a>
  </div>
</template>
<script>
export default {
  props: {
    book: {
      type: Object,
      require: true,
      default: () => {}
    }
  }
}
</script>
<style lang="scss" scoped>
.book-img-box {
  width: 130px;
  height: 170px;
}
.book-img {
  object-fit: cover;
}
</style>
