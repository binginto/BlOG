import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index/index'
import Binginto from 'pages/binginto/binginto'
import Guest from 'pages/guest/guest'

Vue.use(Router)

// 开启debug模式
Vue.config.debug = true

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/binginto',
      name: 'Binginto',
      component: Binginto
    },
    {
      path: '/guest',
      name: 'Guest',
      component: Guest
    }
  ]
})
