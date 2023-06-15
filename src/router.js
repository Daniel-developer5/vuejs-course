import Router from 'vue-router'
import Home from '@/views/Home'

export default Router.createRouter({
  history: Router.createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/todos',
      component: () => import('@/views/Todos'),
    }
  ]
})
