import request from '@/utils/request'

export function loginAPI(data) {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户列表
 * @param {pagenum,pagesize} params pagenum:请求第几页数据 pagesize:按每页多少项数据来取
 * @returns
 */
export function getUsersListAPI(params = { query: '', pagenum: 1, pagesize: 5 }) {
  return request({
    url: '/users',
    params
  })
}

/**
 * 更改用户状态
 * @param {*} uId 用户id
 * @param {*} type 用户状态
 * @returns
 */
export function changeUserStateAPI(uId, type) {
  return request({
    url: `/users/${uId}/state/${type}`,
    method: 'PUT'
  })
}

/**
 * 注册用户
 * @param {username,password,email,mobile} data
 * @returns
 */
export function addUserAPI(data) {
  return request({
    url: '/users',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 * @param {*} id
 * @returns
 */
export function getUserAPI(id) {
  return request({
    url: '/users/' + id
  })
}

/**
 * 修改用户信息
 * @param {id,email,mobile} data
 */
export function putUserAPI(data) {
  return request({
    url: '/users/' + data.id,
    method: 'PUT',
    data
  })
}

/**
 * 删除用户
 * @param {*} data
 * @returns
 */
export function delUserAPI(id) {
  return request({
    url: '/users/' + id,
    method: 'delete'
  })
}
