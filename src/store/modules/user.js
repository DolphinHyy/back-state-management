import { loginAPI } from '@/api/user.js'

const state = {
  token: JSON.parse(localStorage.getItem('BSM_TOKEN')) || null
}
const mutations = {
  setToken(state, payload) {
    state.token = payload
    localStorage.setItem('BSM_TOKEN', JSON.stringify(payload))
  }
}
const actions = {
  async login(content, payload) {
    try {
      // console.log(payload)
      const { data } = await loginAPI(payload)
      console.log(data.data.token)
      content.commit('setToken', data.data.token)
    } catch (error) {
      console.dir(error)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

