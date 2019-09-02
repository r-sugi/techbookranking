<template>
  <div class="chart-container">
    <canvas id="myChart" />
  </div>
</template>
<script>
import Chart from 'chart.js'
export default {
  props: {
    tags: {
      type: Array,
      require: true,
      default: null
    }
  },
  mounted() {
    const data = this.tags.map(tag => tag.point)
    const labels = this.tags.map(tag => tag.name)
    /* eslint-disable no-unused-vars */
    const chart = new Chart(document.getElementById('myChart'), {
      type: 'doughnut',
      data: {
        labels,
        datasets: [
          {
            data: data,
            borderColor: 'rgba(151, 215, 119, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(151, 215, 119, 0.8)'
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        maintainAspectRatio: false
      }
    })
    /* eslint-enable no-unused-vars */
  }
}
</script>
<style lang="scss" scoped>
.chart-container {
  position: relative;
  max-width: 370px;
  max-height: 370px;
  height: 250px;
  margin: 1rem auto;
  @include mq(md) {
    width: 50vw;
    height: 50vh;
    margin: 1rem 0;
  }
}
</style>
