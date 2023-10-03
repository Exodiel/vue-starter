import { createRouter, createWebHistory, RouteRecordSingleViewWithChildren } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import User from './views/User.vue'
import UserProfile from './views/UserProfile.vue'
import UserConfig from './views/UserConfig.vue'

const routes: RouteRecordSingleViewWithChildren[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: []
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: []
  },
  {
    path: '/users/:id',
    name: 'User',
    component: User,
    children: [
      {
        path: 'profile',
        name: 'Profile',
        component: UserProfile
      },
      {
        path: 'configuration',
        name: 'Configuration',
        component: UserConfig
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})
export default router