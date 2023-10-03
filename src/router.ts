import { createRouter, createWebHistory, RouteRecordSingleView } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import User from './views/User.vue'

const routes: RouteRecordSingleView[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/users/:id',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router