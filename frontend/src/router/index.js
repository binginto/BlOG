import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Binginto from '@/components/binginto/binginto'
import Guest from '@/components/guest/guest'

Vue.use(Router)

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
