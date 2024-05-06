import axios from 'axios'

const createAxiosInstance = () => {
  const axiosInstance = axios.create({
    baseURL: ''
  })

  axiosInstance.interceptors.request.use((config) => {
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  axiosInstance.interceptors.response.use((response) => {
    const responseBody = response.data
    if (responseBody.code === '0000') {
      response.data = responseBody.data
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
