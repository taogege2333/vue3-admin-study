const asyncRoutes =  [
  {
    path: 'home',
    name: 'home',
    component: () => import('@/views/MyHome.vue'),
    meta: {
      title: '首页',
      isTab: true
    }
  },
  {
    path: 'test1',
    name: 'test1',
    component: () => import('@/views/MyTest1.vue'),
    meta: {
      title: 'test1',
      auth: [1],
      isTab: true
    }
  },
  {
    path: 'test2',
    name: 'test2',
    component: () => import('@/views/MyTest2.vue'),
    meta: {
      title: 'test2',
      auth: [2],
      isTab: true
    }
  },
  {
    path: 'test3',
    name: 'test3',
    component: () => import('@/views/MyTest3.vue'),
    meta: {
      title: 'test3',
      auth: [3],
      isTab: true
    }
  },
  {
    path: 'test4',
    name: 'test4',
    component: () => import('@/views/MyTest4.vue'),
    meta: {
      title: 'test4',
      auth: [4],
      isTab: true
    }
  },
  {
    path: 'test13',
    name: 'test13',
    component: () => import('@/views/MyTest13.vue'),
    meta: {
      title: 'test13',
      auth: [1, 3],
      isTab: true
    }
  },
]

export default asyncRoutes
