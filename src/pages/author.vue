<template>
  <div>
    author
  </div>
</template>
<script>
import { head } from '@/constants/head'
export default {
  layout: 'siteDescription',
  name: 'Author',
  head() {
    return head({
      currentTitle: `開発者`,
      currentUrl: this.$route.fullPath
    })
  }
}
</script>
