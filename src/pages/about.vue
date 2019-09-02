<template>
  <div>
    about
  </div>
</template>
<script>
import { head } from '@/constants/head'
export default {
  layout: 'siteDescription',
  name: 'About',
  head() {
    return head({
      currentTitle: ` ${this.$options.name}`,
      currentUrl: this.$route.fullPath
    })
  }
}
</script>
