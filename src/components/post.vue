<template>
  <li class="book-post-title">
    <a v-if="hasLink" :href="post.link" target="_blank" rel="noopener">
      {{ post.title }}
    </a>
    <template v-else>
      {{ post.title }}
    </template>
    <img
      v-lazy="require('@/assets/icons/baseline-thumb_up-24px.svg')"
      style="width: 1rem;"
      alt="like-thumb-up"
    />
    {{ post.like }}
  </li>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      Required: true,
      default: null
    },
    hasLink: {
      type: Boolean,
      require: true,
      default: false
    }
  }
}
</script>
