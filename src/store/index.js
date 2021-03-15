import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1
  },
  mutations: {
    setCount (state, n) {
      state.count = n;
    }
  },
  actions: {
  },
  modules: {
  }
})
