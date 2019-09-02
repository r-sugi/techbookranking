<template>
  <div v-if="serialNum" class="book-header-title">
    <div class="book-header-points">
      <span class="serial-num">{{ serialNum }}</span>
      <span
        v-if="
          this.$route.path === '/booklists/all' ||
            this.$route.path.match(/\/booklists\/[a-z0-9]{32}.*/)
        "
        class="book-point"
      >
        {{ book.pointAll }} p
      </span>
      <span
        v-if="
          this.$route.path === '/booklists/yearly' || this.$route.path === '/'
        "
        class="book-point"
      >
        {{ book.pointYearly }} p
      </span>
      <span v-if="this.$route.path === '/booklists/monthly'" class="book-point">
        {{ book.pointMonthly }} p
      </span>
    </div>
    <nuxt-link :to="`/books/${book.uuid}`">
      <p class="book-title">{{ book.book_title }}</p>
    </nuxt-link>
  </div>
  <div v-else class="book-header-title">
    <a
      :href="`https://www.amazon.co.jp/dp/${book.ASIN}`"
      target="_blank"
      rel="noopener"
    >
      <p class="book-title">{{ book.book_title }}</p>
    </a>
    <ul class="point-lists">
      <li class="point-list">総合： {{ book.pointAll }} p</li>
      <li class="point-list">年間： {{ book.pointYearly }} p</li>
      <li class="point-list">月間： {{ book.pointMonthly }} p</li>
    </ul>
  </div>
</template>
<script>
export default {
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
.book-header-title {
  display: flex;
  padding: 0 1rem;
  flex-flow: column nowrap;
}
.serial-num {
  font-size: 3rem;
  font-weight: 700;
  margin-right: 0.3rem;
}
.book-header-points {
  margin-bottom: 0.5rem;
}
.book-title {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: left;
  line-height: 2rem;
}
.point-lists {
  padding: 1rem 0 1rem 2rem;
  .point-list:not(:last-child) {
    margin-bottom: 0.5rem;
  }
}
</style>
