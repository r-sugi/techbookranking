import { Resources } from '@/repositories/Resources.js'
import { repositoryFactory } from '@/repositories/repositoryFactory'

export const state = () => ({
  yearly: [],
  all: [],
  monthly: [],
  tagBooklists: []
})

export const actions = {
  async fetch({ commit }, payload) {
    const res = await new Resources({
      requestfn: () => {
        return repositoryFactory
          .create('booklists')
          .get(`/booklists/${payload.type}`)
      }
    }).exec()
    if (res.isError()) {
      console.log(res)
    }
    commit('booklists', { type: payload.type, res })
  },
  async fetchByTag({ commit }, payload) {
    const res = await new Resources({
      requestfn: () => {
        return repositoryFactory
          .create('booklists')
          .get(`/booklists/${payload.tagId}`)
      }
    }).exec()
    if (res.isError()) {
      console.log(res)
    }
    commit('tagBooklists', { res })
  }
}

export const mutations = {
  booklists(state, payload) {
    state[`${payload.type}`] = payload.res.data
  },
  tagBooklists(state, { res }) {
    state.tagBooklists = res.data
  }
}
