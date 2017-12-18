/*
 * @Author: liumeng6
 * @Date: 2017-08-22 09:07:51
 * @Last Modified by: undefined
 * @Last Modified time: 2017-08-25 15:55:01
 * @remark: axios拦截器
 */

import axios from 'axios'
import { Notification } from 'hui'

const http = axios.create({
  timeout: 20000,
  withCredentials: true,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})

// 相应拦截器
http.interceptors.response.use(function (response) {
  // 对错误进行统一处理
  if (response.data.code !== '0' && response.data.msg) {
    Notification.error({
      message: response.data.msg
    })
    return Promise.reject(response.data.code)
  }
  // 根据响应数据判断是否登录过期
  if (response.data.success === false && response.data.errorCode === 'pleaseRefreshByHeader') {
    let refreshUrl = response.headers['refresh-url'].split('?')[0]
    refreshUrl = refreshUrl + '?service=' + location.protocol + '//' + location.host + '/vss/ui/redirect' + location.pathname + encodeURIComponent(location.search)
    location.href = refreshUrl
  }
  return Promise.resolve({
    msg: response.data.msg,
    data: response.data.data
  })
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 请求拦截器
http.interceptors.request.use(function (config) {
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default http

