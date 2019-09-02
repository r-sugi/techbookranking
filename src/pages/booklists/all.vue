<template>
  <div>
    <ChartWrapper :books="chartBooks" :point-type="pointType" />
    <RankingTitle />
    <Booklists :booklists="booklists" />
  </div>
</template>
<script>
import Booklists from '@/components/booklists.vue'
import { urlBookPointMapper } from '@/lib/util.js'
import RankingTitle from '@/components/rankingTitle.vue'
import ChartWrapper from '@/components/chart/wrapper.vue'
import { head } from '@/constants/head'
export default {
  name: 'All',
  components: {
    Booklists,
    RankingTitle,
    ChartWrapper
  },
  head() {
    return head({
      currentTitle: `全て ${this.$options.name}`,
      currentUrl: this.$route.fullPath
    })
  },
  computed: {
    chartBooks() {
      return this.booklists.slice(0, 6)
    }
  },
  async asyncData({ app, store }) {
    const type = app.context.route.name.split('/')[1]
    if (store.state.booklists[`${type}`].length) {
      return {
        booklists: store.state.booklists[`${type}`],
        pointType: urlBookPointMapper(app.context.route.fullPath)
      }
    }
    await store.dispatch('booklists/fetch', { type })
    return {
      booklists: store.state.booklists[`${type}`],
      pointType: urlBookPointMapper(app.context.route.fullPath)
    }
  }
}
</script>
