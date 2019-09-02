<template>
  <div>
    <headerTemplate />
    <booklistMenu />
    <nuxt />
    <sideNav />
  </div>
</template>

<script>
import headerTemplate from '@/components/header.vue'
import sideNav from '@/components/sideNav.vue'
import booklistMenu from '@/components/booklistMenu.vue'

export default {
  components: {
    headerTemplate,
    sideNav,
    booklistMenu
  }
}
</script>
