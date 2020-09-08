import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import user from './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  state: () => {
    return {
      num: 1
    }
  },
  mutations: {
    SET_NUM(state, payload) {
      state.num = payload
    }
  },
  actions: {
    setNum({ commit }, num) {
      commit('SET_NUM', num)
    }
  },
  plugins: [createPersistedState()]
})

export default store
