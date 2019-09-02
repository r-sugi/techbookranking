<template>
  <div>
    <ChartWrapper :books="chartBooks" :point-type="pointType" />
    <RankingTitle :ranking-title="rankingTitle" />
    <Booklists :booklists="booklists" />
  </div>
</template>
<script>
import ChartWrapper from '@/components/chart/wrapper.vue'
import Booklists from '@/components/booklists.vue'
import { urlBookPointMapper } from '@/lib/util.js'
import RankingTitle from '@/components/rankingTitle.vue'
import { head } from '@/constants/head'
export default {
  components: {
    Booklists,
    RankingTitle,
    ChartWrapper
  },
  head() {
    return head({
      currentTitle: `${this.rankingTitle}`,
      currentUrl: this.$route.fullPath
    })
  },
  computed: {
    chartBooks() {
      return this.booklists.slice(0, 6)
    }
  },
  async asyncData({ app, store, params, redirect }) {
    await store.dispatch('booklists/fetchByTag', { tagId: params.tagId })
    if (store.state.booklists.tagBooklists.length === 0) {
      redirect('/')
    }
    return {
      booklists: store.state.booklists.tagBooklists,
      rankingTitle: params.tagname,
      pointType: urlBookPointMapper(app.context.route.fullPath)
    }
  }
}
</script>
