import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Movie.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component: Home
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('./views/Music.vue')
    },
    {
      path:"/chat",
      name:'chat',
      component: () => import('./views/Chat.vue')
    },
    {
      path:"/book",
      name:'book',
      component: () => import('./views/Book.vue')
    }
  ]
})
