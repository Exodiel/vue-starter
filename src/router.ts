import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordSingleViewWithChildren } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import User from './views/User.vue'
import UserProfile from './views/UserProfile.vue'
import UserConfig from './views/UserConfig.vue'
import Login from './views/Login.vue'

const beforeEnterHook = (to: RouteLocationNormalized) => {
  console.log("Paht", to.path)
}

const routes: RouteRecordSingleViewWithChildren[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [],
    beforeEnter: [beforeEnterHook]
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: []
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
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
router.beforeEach((to, from, next) => {
  let isAuthenticated = true;
  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' })
  } else {
    next()
  }
})
export default router