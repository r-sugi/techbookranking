<template>
  <el-menu
    class="el-menu-demo flex"
    mode="horizontal"
    background-color="#fff"
    text-color="#545c64"
    active-text-color="#545c64"
    :default-active="activeIndex"
  >
    <el-menu-item index="0">
      <nuxt-link to="/booklists/all">全て</nuxt-link>
    </el-menu-item>
    <el-menu-item index="1">
      <nuxt-link to="/">年間</nuxt-link>
    </el-menu-item>
    <el-menu-item index="2">
      <nuxt-link to="/booklists/monthly">月間</nuxt-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  computed: {
    activeIndex() {
      if (this.$route.path === '/booklists/all') {
        return '0'
      } else if (
        this.$route.path === '/' ||
        this.$route.path.match(/\/booklists\/[a-z0-9]{32}.*/)
      ) {
        return '1'
      } else if (this.$route.path === '/booklists/monthly') {
        return '2'
      } else {
        return '3'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  justify-content: center;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
}
.el-menu--horizontal > .el-menu-item {
  height: 50px;
  line-height: 50px;
}
.el-menu-item {
  padding: 0;
  min-width: 4rem;
  text-align: center;
  a {
    display: inline-block;
    width: 100%;
  }
}
</style>
