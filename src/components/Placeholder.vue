<template>
  <div class="placeholder">{{ text }}</div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Loading...'
    }
  }
}
</script>
<style lang="scss" scoped>
.placeholder {
  width: 400px;
  height: 280px;
}
</style>
