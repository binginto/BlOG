import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/index/index'
import AboutMe from 'pages/aboutMe/aboutMe'
import MyWork from 'pages/myWork/myWork'
import MyBlog from 'pages/myBlog/myBlog'
import ContactMe from 'pages/contactMe/contactMe'
import Info from 'pages/info/info'

Vue.use(Router)

// 开启debug模式
Vue.config.debug = true
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/aboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/myWork',
      name: 'MyWork',
      component: MyWork
    },
    {
      path: '/myBlog',
      name: 'MyBlog',
      component: MyBlog
    },
    {
      path: '/contactMe',
      name: 'ContactMe',
      component: ContactMe
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})

export default router
