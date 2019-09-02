<template>
  <nuxt-link :to="`/booklists/${tag.uuid}/${tag.name}`">
    <el-button style="font-weight: bold" size="mini" type="success">{{
      tag.name
    }}</el-button>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    tag: {
      type: Object,
      require: true,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.el-button--mini {
  margin: 0.7% 1%;
}
</style>
