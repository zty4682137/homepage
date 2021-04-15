import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store
const initStore = () => {
  return store || (store = new Vuex.Store({
    state: {
      // ''
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtbnktdXNlciIsImlhdCI6MTYwMDA5ODM5OCwiZXhwIjoxNTk4Mzk1NDMxLCJpZCI6IjEyODAwNDU4NDU0MDE1Nzk1MjIifQ.x8kWsmwsZDdZQ_nr5VGvDC6JWFpNxY8GJDbxbOYDaJQ',
      courseFilterData: ['all', 'all'],
      // 当前关键字查询
      // ''
      searchKey: '',
      // 最后一个路由
      lastRoute: '',
      // 当前视频id
      currentVideo: '',
      // 当前视频列表
      videoList: [],
      // 全局登录弹窗显示隐藏
      showLoginBox: false
    },
    mutations: {
      SET_TOKEN(state, params) {
        state.token = params
      }
    },
    actions: {
      setToken(context, params) {
        context.commit('SET_TOKEN', params)
      }
    },
    modules: {}
  }))
}
export default initStore
