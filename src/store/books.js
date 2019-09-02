import { Resources } from '@/repositories/Resources.js'
import { repositoryFactory } from '@/repositories/repositoryFactory'

export const state = () => ({
  book: {}
})

export const actions = {
  async fetch({ commit }, payload) {
    const res = await new Resources({
      requestfn: () => {
        return repositoryFactory.create('books').get(`/books/${payload.bookId}`)
      }
    }).exec()
    if (res.isError()) {
      console.log(res)
    }
    commit('book', { data: res.data })
  }
}

export const mutations = {
  book(state, { data }) {
    state.book = data
  }
}
