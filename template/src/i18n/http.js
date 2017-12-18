import axios from 'axios'

const http = axios.create({
  timeout: 20000,
  withCredentials: true,
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

export default {
  getLanguageDev (url) {
    return http({
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  }
}
