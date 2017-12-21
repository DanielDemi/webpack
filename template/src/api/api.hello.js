import http from './index'

export default {
  getConfig () {
    return http.get('/requestUrl')
  }
}
