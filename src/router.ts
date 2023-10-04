import { createRouter, createWebHistory, RouteLocationNormalized, RouteRecordSingleViewWithChildren } from 'vue-router'
const Home = () => import('./views/Home.vue')
const About = () => import('./views/About.vue')
const User = () => import('./views/User.vue')
const UserProfile = () => import('./views/UserProfile.vue')
const UserConfig = () => import('./views/UserConfig.vue')
const Login = () => import('./views/Login.vue')

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