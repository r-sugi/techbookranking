<template>
  <div>
    <no-ssr>
      <Chart :books="books.slice(0, 6)" :point-type="pointType" />
      <Placeholder slot="placeholder" />
    </no-ssr>
  </div>
</template>
<script>
import Chart from '@/components/chart/chart.vue'
import Placeholder from '@/components/Placeholder.vue'
export default {
  components: {
    Chart,
    Placeholder
  },
  props: {
    books: {
      type: Array,
      required: true,
      default: null
    },
    pointType: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
