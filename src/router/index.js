import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/Layout.vue'
import { useRouterStore } from '@/stores/router'
import { useUserStore } from '@/stores/user'
import asyncRoutes from './asyncRoutes'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout,
      redirect: '/layout/home',
      children: [],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/MyLogin.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const userStore = useUserStore()
  const routerStore = useRouterStore()

  // 未登录
  if (!userStore.userInfo && to.fullPath !== '/login') {
    return next('/login')
  }

  // 已登陆，添加授权路由
  if (!routerStore.authRoutes && userStore.userInfo) {
    await routerStore.setAuthRoutes(asyncRoutes, userStore.userInfo.auth)
    routerStore.authRoutes.forEach(route => router.addRoute('layout', route))
    return next(to.fullPath)
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
