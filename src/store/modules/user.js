
const getDefaultState = () => {
  return {
    token: ''
  }
}

const state = getDefaultState()

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
