import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('@/components/ref')
  },
  {
    path: '/render',
    name: 'render',
    component: () => import('@/components/render')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('@/components/computed')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
