import Vue from 'vue'
import Router from 'vue-router'
import routes from '../router.config.json'
import _ from 'lodash'
import i18n from '@/i18n'
import huiLocale from 'hui/lib/locale'
import common from 'dolphin_common'
Vue.use(common)
Vue.use(Router)

/**
 * @desc: 组装路由
 * @date: 2017/11/10 9:28
 * @author: zhangxin14
 */
const createRoute = (routes) => {
  return routes.reduce((processedRoutes, currentRoute) => {
    processedRoutes.push(processRouteObj(_.omit(currentRoute, 'breadcrumb')))
    return processedRoutes
  }, [])
}

const processRouteObj = ({name, path, component}) => ({
  path: path,
  name: name,
  component: () => import(`@/pages/${component}`)
})

const router = new Router({
  mode: 'history',
  routes: createRoute(routes)
})

/**
 * @author: xuzilong
 * @date: 2017-12-14 18:40:18
 * @desc:  阻塞等待语言包加载完毕之后再进入路由
 */

router.beforeEach((to, form, next) => {
  let messages = i18n.messages
  let isLoadLanguage                                          // 是否已经加载语言包

  for (let key in messages) {
    isLoadLanguage = key
  }

  if (isLoadLanguage) {
    next()
    return
  }

  const locale = Vue.prototype.$utils.getCookie('i18n') || 'zh_CN'                 // 获取当前语言类型
  let lang = require(`@/i18n/${locale}/index`)
  i18n.setLocaleMessage(locale, JSON.parse(JSON.stringify(lang)))
  huiLocale.i18n((key, value) => i18n.t(key, value))        // hui的多语言
  i18n.locale = locale
  next()
})

export default router
