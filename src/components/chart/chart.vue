<template>
  <div class="chart-container">
    <canvas id="myChart" />
    <div class="chart-images">
      <ChartImage
        v-for="(chartImage, index) in books.map(book => book.image_path)"
        :key="index"
        :chart-image="chartImage"
        :chart-image-serial-no="index + 1"
      />
    </div>
  </div>
</template>
<script>
import Chart from 'chart.js'
import { type, data, options } from '@/constants/chart.js'
import ChartImage from '@/components/chart/chartImage.vue'
export default {
  components: {
    ChartImage
  },
  props: {
    books: {
      type: Array,
      require: true,
      default: null
    },
    pointType: {
      type: String,
      require: true,
      default: null
    }
  },
  mounted() {
    data.datasets[0].data = this.books.map(book => book[`${this.pointType}`])
    /* eslint-disable no-unused-vars */
    const chart = new Chart(document.getElementById('myChart'), {
      type,
      data,
      options
    })
    /* eslint-enable no-unused-vars */
  }
}
</script>
<style lang="scss" scoped>
.chart-container {
  padding: 10px;
  max-width: 400px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
}
.chart-images {
  text-align: center;
  padding-left: 30px;
  height: 80px;
}
</style>
