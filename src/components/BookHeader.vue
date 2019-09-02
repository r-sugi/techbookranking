<template>
  <section class="book-header">
    <BookHeaderImg :book="book" />
    <BookHeaderTitle :book="book" :serial-num="serialNum" />
  </section>
</template>
<script>
import BookHeaderTitle from '~/components/BookHeaderTitle.vue'
import BookHeaderImg from '~/components/BookHeaderImg.vue'
export default {
  components: {
    BookHeaderTitle,
    BookHeaderImg
  },
  props: {
    book: {
      type: Object,
      require: true,
      default: () => {}
    },
    serialNum: {
      type: Number,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.book-header {
  display: flex;
  margin-bottom: 0.5rem;
}
</style>
