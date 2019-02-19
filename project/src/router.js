import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      component:() => import('./views/movie/Movie.vue'),
    },
    {
      path:'/movie',
      redirect:'/'
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('./views/music/Music.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('./views/chat/Chat.vue')
    },
    {
      path: '/book',
      name: 'book',
      component: () => import('./views/book/Book.vue')
    },
    {
      path:'/movieDetail',
      name:'movieDetail',
      component: () => import('./views/movie/Detail.vue')
    },
    {
      path:'*',
      component: () => import('./views/Error.vue')
    }
  ]
})
