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
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const userStore = useUserStore()
  const routerStore = useRouterStore()
  if (!routerStore.authRoutes) {
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
