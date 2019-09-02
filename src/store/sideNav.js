export const state = () => ({
  visible: false,
  animatable: false
})

export const mutations = {
  toggle(state) {
    state.animatable = true
    state.visible = !state.visible
  },
  removeClass(state) {
    state.animatable = false
  }
}

export const getters = {
  classObject(state) {
    return {
      menu: true,
      'menu--animatable': state.animatable,
      'menu--visible': state.visible
    }
  },
  visible(state) {
    return state.visible
  }
}
