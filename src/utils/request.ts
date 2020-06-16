import { extend } from 'umi-request'

export const errorHandler = (error:any) => {
  const { response = {}, data } = error
  throw data
}


const BASE_URL = 'https://www.fastmock.site/mock/b92208a63206babe2693ab9218d239bb/umi'

const request = extend({
  prefix: `${BASE_URL}`,
  timeout: 10000,
  redirect: 'error',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
  credentials: 'include',
  errorHandler: errorHandler,
})

/* 全局拦截器 */
// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  return { url, options }
})
// response拦截器, 处理response
request.interceptors.response.use(async response => {
  const data = await response.clone().json()
  return data
})

export default request