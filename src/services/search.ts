import request from '@/utils/request'

/* api */
export const login = (params: Object = {}) => {
  return request('/list', params)
}