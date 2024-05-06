import { request } from './request'

export const getMenuList = () => {
  return request({
    url: '/api/getMenuList',
    method: 'get'
  })
}
