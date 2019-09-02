<template>
  <div :class="classObject" @transitionend="removeClass()">
    <div class="menu-overlay" @click="toggle()"></div>
    <div class="app-menu">
      <div
        class="bm-menu"
        style="height: 100%; box-sizing: border-box; overflow: auto; position: fixed; top: 0px; background: rgb(246, 246, 246); padding: 3em; font-size: 1.2em;"
      >
        <nav class="bm-item-list" style="height: 100%;">
          <nuxt-link
            to="/"
            style="display: block; outline: none;"
            @click.native="toggle()"
            >トップページ</nuxt-link
          >
          <nuxt-link
            to="/about"
            style="display: block; outline: none;"
            @click.native="toggle()"
            >サイトの説明</nuxt-link
          >
          <nuxt-link
            to="/author"
            style="display: block; outline: none;"
            @click.native="toggle()"
            >これを作った人</nuxt-link
          >
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      classObject: 'sideNav/classObject',
      visible: 'sideNav/visible'
    })
  },
  methods: {
    ...mapMutations({
      toggle: 'sideNav/toggle',
      removeClass: 'sideNav/removeClass'
    })
  }
}
</script>
<style lang="scss" scoped>
.menu {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 150;
}

.menu--visible {
  pointer-events: auto;
}

.app-menu {
  background-color: $main-brand-white;
  color: $main-brand-white;
  position: relative;
  max-width: 270px;
  width: 70%;
  height: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  -webkit-transform: translateX(-103%);
  transform: translateX(-103%);
  display: flex;
  flex-direction: column;
  will-change: transform;
  z-index: 160;
  pointer-events: auto;
}

.menu--visible .app-menu {
  -webkit-transform: none;
  transform: none;
}

.menu--animatable .app-menu {
  transition: all 250ms ease-in;
}

.menu--visible.menu--animatable .app-menu {
  transition: all 250ms ease-out;
}

.menu-overlay {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  will-change: opacity;
  pointer-events: none;
  transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
}
.menu--visible > .menu-overlay {
  opacity: 1;
  pointer-events: auto;
}
nav a {
  color: $text-link-active-color;
  display: block;
  outline: none;
  padding: 10px;
}
</style>
