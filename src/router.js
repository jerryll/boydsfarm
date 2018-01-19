import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Post from './components/Post.vue'
import Farmsupply from './components/Farmsupply.vue'
import PartsandService from './components/PartsandService.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: Post
    },
    {
      path: '/farmsupply',
      name: 'farmsupply',
      component: Farmsupply
    },
    {
      path: '/partsandservice',
      name: 'partsandservice',
      component: PartsandService
    }
  ]
})
