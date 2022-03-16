import axios from 'axios'
import { getToken, getTokenTime } from './auth'
import store from '@/store'
import router from '@/router'

const timeout = 7200 * 1000

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

// 添加请求拦截器
request.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  if (getToken()) {
    if (Date.now() - getTokenTime() > timeout) {
      store.dispatch('user/logout')
      router.push('/login')
      return Promise.reject(new Error('TOKEN 过期'))
    }
    config.headers.Authorization = 'Bearer ' + getToken()
  }
  return config
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function(response) {
  // 对响应数据做点什么
  console.log(response)
  if (response.data.meta.status === 200) {
    return response.data.data
  } else {
    return Promise.reject(new Error(response.data.meta.msg))
  }
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request
