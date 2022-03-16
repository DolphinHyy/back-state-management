import { loginAPI } from '@/api/user.js'
import { getToken, setToken, removeToken } from '@/utils/auth'

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
  },
  logOut(state) {
    removeToken()
    state.token = null
  }
}
const actions = {
  async login(context, payload) {
    try {
      // console.log(payload)
      const res = await loginAPI(payload)
      // console.log(data.data.token)
      context.commit('setToken', res.token)
    } catch (error) {
      console.dir(error)
    }
  },
  logout(context) {
    context.commit('logOut')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

