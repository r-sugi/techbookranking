<template>
  <h2 class="searched-tag">
    <div class="tag-button"></div>
    {{ rankingTitle }}
  </h2>
</template>
<script>
export default {
  props: {
    rankingTitle: {
      type: String,
      default: () => {
        return '技術書ランキング'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.searched-tag {
  text-align: center;
}
.tag-button {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: $main-brand-white;
  background: $main-brand-color;
  border-radius: 3px;
  margin-top: 8px;
}
h2 {
  font-size: 1.1rem;
}
</style>
