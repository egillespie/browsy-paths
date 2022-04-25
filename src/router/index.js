import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home-view'
import About from '@/views/about-view'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
