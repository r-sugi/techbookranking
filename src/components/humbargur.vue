<template>
  <div class="menu-icon" @click="toggle()">
    <div
      class="bm-burger-button"
      style="z-index: 100; position: fixed; width: 30px; height: 26px; left: 12px; top: 12px;"
    >
      <span>
        <span
          class="bm-burger-bars"
          style="position: absolute; height: 20%; left: 0px; right: 0px; top: 0%; opacity: 1; background: rgb(119, 119, 119);"
        ></span>
        <span
          class="bm-burger-bars"
          style="position: absolute; height: 20%; left: 0px; right: 0px; top: 40%; opacity: 1; background: rgb(119, 119, 119);"
        ></span>
        <span
          class="bm-burger-bars"
          style="position: absolute; height: 20%; left: 0px; right: 0px; top: 80%; opacity: 1; background: rgb(119, 119, 119);"
        ></span>
      </span>
      <button
        style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; margin: 0px; padding: 0px; border: none; opacity: 0; font-size: 8px; cursor: pointer;"
      >
        Open Menu
      </button>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({ toggle: 'sideNav/toggle' })
  }
}
</script>
