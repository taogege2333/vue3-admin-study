import { getResponse } from './resData'

export default [
  {
    url: '/api/getMenuList',
    method: 'get',
    response: getResponse([
      {
        id: '0',
        title: '首页',
        icon: 'House',
        path: '/layout/home'
      },
      {
        id: '1',
        title: '测试A',
        icon: 'Menu',
        children: [
          {
            id: '1-1',
            title: 'test1',
            path: '/layout/test1',
            icon: 'Menu',
          },
          {
            id: '1-2',
            title: '测试B',
            children: [
              {
                id: '1-2-1',
                title: 'test2',
                path: '/layout/test2',
                icon: 'Menu',
              },
            ],
          },
        ]
      },
      {
        id: '1-3',
        title: 'test3',
        path: '/layout/test3',
      },
      {
        id: '1-4',
        title: 'test4',
        path: '/layout/test4',
      },
      {
        id: '1-5',
        title: 'test13',
        path: '/layout/test13',
      },
    ])
  }
]