<template>
  <a :href="`${path}#t_${chartImageSerialNo}`">
    <img v-lazy="chartImage" class="chart-image" alt="chart" />
  </a>
</template>
<script>
export default {
  props: {
    chartImage: {
      type: String,
      require: true,
      default: null
    },
    chartImageSerialNo: {
      type: Number,
      require: true,
      default: null
    }
  },
  data() {
    return {
      path: ''
    }
  },
  mounted() {
    this.path = this.$route.path
  }
}
</script>
<style lang="scss" scoped>
.chart-image {
  width: calc((100% - 80px) / 6);
  margin-left: 5px;
  margin-right: 5px;
}
</style>
