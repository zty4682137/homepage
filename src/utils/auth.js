// import Cookies from 'js-cookie'
import store from '@/store'

// const TokenKey = 'cookie-token'

export function getToken () {
  return store().state.token
}

// export function setToken (token) {
//   return Cookies.set(TokenKey, token)
// }

// export function removeToken () {
//   return Cookies.remove(TokenKey)
// }
