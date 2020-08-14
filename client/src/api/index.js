import axios from 'axios'

/**
 * axios interceptor
 */
// before send request ..
const globalRequestErrorHandler = (err) => {
  return Promise.reject(err)
}
// before get response ..
const globalResponseErrorHandler = (err) => {
  // networking error handling goes here..

  // status 4xx
  // status 5xx

  return Promise.reject(err)
}
/**
 * axios instance
 */
const instance = axios.create()
// headers
instance.defaults.headers['Accept'] = 'application/json'
instance.defaults.headers['Content-Type'] = 'application/json'
instance.defaults.headers['Authorization'] = 'AUTH_TOKEN'
// others
instance.defaults.baseURL = 'http://localhost:4000'
instance.defaults.timeout = 10000
// interceptor
instance.interceptors.request.use((conf) => conf, globalRequestErrorHandler)
instance.interceptors.response.use((res) => res, globalResponseErrorHandler)
/**
 * global requester - all app network should use this ..
 * @param {*} config
 */
export const makeRequest = (config) => instance({ ...config })
