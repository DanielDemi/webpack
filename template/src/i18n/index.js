import Vue from 'vue'
import VueI18n from 'vue-i18n'
import http from './http'

Vue.use(VueI18n)

const i18n = new VueI18n({})

/**
  * @Author: zhuxiankang
  * @Date:   2017-11-28 15:00:41
  * @Desc:   设置多语言(组件内调用方式: this.$i18n.setLanguage(locale))
  * @Parm:   url -> 获取语言包的路径
  *          callback -> 回调函数
  */
i18n.setLanguage = (url, callback, error) => {
  http.getLanguageDev(url).then(res => {
    callback(res)
  }).catch(err => {
    error(err)
  })
}

export default i18n
