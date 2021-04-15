import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'
import intro from '@/intro.vue'
import app from '@/App.vue'
import info from '@/views/info'
import playground from '@/views/playground'
import pic from '@/views/pic'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   component: intro
  // },
  {
    path: '/',
    redirect: {
      name: 'info'
    },
    component: app,
    children: [{
        path: 'info',
        name: 'info',
        component: info
      },
      {
        path: 'playground',
        name: 'playground',
        component: playground
      },
      {
        path: 'pic',
        name: 'pic',
        component: pic
      }
    ]
  }
]


export function createRouter() {
  const router = new VueRouter({
    routes
  })
  router.beforeEach((to, from, next) => {
    // store().dispatch('setLastRoute', from) // 如果是首次进入页面 from也存在 需要用from.name判断
    next()
  })
  return router
}
