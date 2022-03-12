import { loginAPI } from '@/api/user.js'
import { getToken, setToken } from '@/utils/auth'

const state = {
  // token: JSON.parse(localStorage.getItem('BSM_TOKEN')) || null
  token: getToken()
}
const mutations = {
  setToken(state, payload) {
    // console.log(payload)
    state.token = payload
    // localStorage.setItem('BSM_TOKEN', JSON.stringify(payload))
    setToken(payload)
  }
}
const actions = {
  async login(content, payload) {
    try {
      // console.log(payload)
      const res = await loginAPI(payload)
      // console.log(data.data.token)
      content.commit('setToken', res.token)
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

