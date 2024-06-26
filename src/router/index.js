import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import coinView from '../views/coinView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/coin/:id',
      name: 'coinView',
      component: coinView
    }
  ]
})

export default router
