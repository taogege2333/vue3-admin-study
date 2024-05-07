import axios from 'axios'

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: ''
  })

  axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') || ''
    return {
      ...config,
      headers: { token }
    }
  }, (error) => {
    return Promise.reject(error)
  })

  axiosInstance.interceptors.response.use((response) => {
    const responseBody = response.data
    if (responseBody.code === '0000') {
      response.data = responseBody.data
      if (response.data?.token) {
        localStorage.setItem('token', response.data.token)
      }
      return response
    } else {
      return Promise.reject(new Error(responseBody.message))
    }
  }, (error) => {
    return Promise.reject(error)
  })

  return axiosInstance
}

const createRequestFunc = (axiosInstance) => (options) => axiosInstance(options)

export const request = createRequestFunc(createAxiosInstance())
