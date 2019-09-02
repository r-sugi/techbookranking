<template>
  <div class="grid-book">
    <Book
      v-for="(book, index) in booklists"
      :id="`t_${index + 1}`"
      :key="index"
      :book="book"
      :serial-num="index + 1"
    />
  </div>
</template>
<script>
import Book from '@/components/book.vue'
export default {
  components: {
    Book
  },
  props: {
    booklists: {
      type: Array,
      require: true,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/_books.scss';
</style>
