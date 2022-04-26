import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home-view'
import UrlsOnTheWeb from '@/views/urls-on-the-web'
import AbsolutePaths from '@/views/absolute-paths'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/urls-on-the-web',
    name: 'urls-on-the-web',
    component: UrlsOnTheWeb
  },
  {
    path: '/absolute-paths',
    name: 'absolute-paths',
    component: AbsolutePaths
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
