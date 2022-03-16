import Cookies from 'js-cookie'

const TokenKey = 'BSMS_TOKEN'
const TokenTime = 'BSMS_TOKEN_TIME'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export const setTokenTime = () => Cookies.set(TokenTime, Date.now())

export const getTokenTime = () => Cookies.get(TokenTime)
