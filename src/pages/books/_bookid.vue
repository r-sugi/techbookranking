<template>
  <div class="grid-book">
    <el-card class="box-card">
      <BookHeader :book="book" />
      <div class="book-description">
        <p class="book-author">
          <span class="label">著者:</span>{{ book.author_name }}
        </p>
        <p class="book-publish-date">
          <span class="label">出版日:</span>{{ book.publish_date }}
        </p>
        <TagChart :tags="book.tags" />
        <div class="book-tags">
          <span class="label">タグ:</span>
          <Tag
            v-for="(tag, index) in book.tags.slice(0, 5)"
            :key="index"
            :tag="tag"
          ></Tag>
        </div>
      </div>
      <div class="book-top-posts">
        <div class="book-referrer-header">本書が引用されているQiita記事</div>
        <ul>
          <Post
            v-for="(post, index) in book.posts"
            :key="index"
            :has-link="!serialNum"
            :post="post"
          />
        </ul>
      </div>
      <p class="book-referrer-header">本書の内容</p>
      <!-- eslint-disable vue/no-v-html -->
      <span v-html="book.description" />
      <!-- eslint-enable vue/no-v-html -->
      <div
        class="book-bottons"
        style="width: 80%; margin: 0 auto; display: flex;"
      >
        <a
          :href="`https://www.amazon.co.jp/dp/${book.ASIN}`"
          target="_blank"
          rel="noopener"
        >
          <el-button style="width: 100%;" size="large" type="warning"
            >Amazon</el-button
          >
        </a>
      </div>
    </el-card>
  </div>
</template>
<script>
import BookHeader from '@/components/BookHeader.vue'
import Tag from '@/components/tag.vue'
import Post from '@/components/post.vue'
import TagChart from '@/components/tagChart.vue'
import { head } from '@/constants/head'
export default {
  components: {
    BookHeader,
    Tag,
    TagChart,
    Post
  },
  props: {
    serialNum: {
      type: Number,
      default: null
    }
  },
  head() {
    return head({
      currentTitle: `${this.book.book_title}`,
      currentUrl: this.$route.fullPath,
      imagePath: this.book.image_path
    })
  },
  async asyncData({ store, params }) {
    await store.dispatch('books/fetch', {
      bookId: params.bookid
    })
    return {
      book: store.state.books.book
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/style/_books.scss';
@import '../../assets/style/_book.scss';
</style>
