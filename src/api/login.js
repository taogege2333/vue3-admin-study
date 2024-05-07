import { request } from "./request"

export const login = (username, password) => {
  return request({
    url: '/api/login',
    method: 'post',
    data: { username, password }
  })
}