<template>
  <el-card class="box-card">
    <BookHeader :book="book" :serial-num="serialNum" />
    <div class="book-description">
      <p class="book-author">
        <span class="label">著者:</span>{{ book.author_name }}
      </p>
      <p class="book-publish-date">
        <span class="label">出版日:</span>{{ book.publish_date }}
      </p>
      <div class="book-tags">
        <span class="label">タグ:</span>
        <Tag
          v-for="(tag, index) in book.tags.slice(0, 5)"
          :key="index"
          :tag="tag"
        ></Tag>
      </div>
    </div>
    <SnsShareButton :title="book.book_title" />
    <div class="book-top-posts">
      <div class="book-referrer-header">引用されているQiita記事トップ5</div>
      <ul>
        <Post v-for="(post, index) in topFivePosts" :key="index" :post="post" />
        <li>
          <a style="font-weight: bold;" @click="bookDetail(book)"
            >全ての引用Qiita記事（{{ book.posts.length }}件）</a
          >
        </li>
      </ul>
    </div>
    <div class="book-bottons">
      <el-button type="success" @click="bookDetail(book)">詳細 </el-button>
      <a
        :href="`https://www.amazon.co.jp/dp/${book.ASIN}`"
        target="_blank"
        rel="noopener"
      >
        <el-button type="warning">Amazon</el-button>
      </a>
    </div>
  </el-card>
</template>
<script>
import BookHeader from '@/components/BookHeader.vue'
import SnsShareButton from '@/components/SnsShareButton.vue'
import Tag from '@/components/tag.vue'
import Post from '@/components/post.vue'
export default {
  components: {
    BookHeader,
    SnsShareButton,
    Tag,
    Post
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
  },
  computed: {
    topFivePosts() {
      return this.book.posts.slice(0, 5)
    }
  },
  methods: {
    bookDetail(book) {
      this.$router.push({ path: `/books/${book.uuid}` })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/style/_book.scss';
</style>
