import Vue from 'vue'
import Router from 'vue-router'
import routes from '../router.config.json'
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
    processedRoutes.push(processRouteObj(currentRoute))
    return processedRoutes
  }, [])
}

/** 
 * @Desc: 处理面包屑 
 * warn： 如果路由有多层嵌套需要对多层嵌套做额外的递归处理
 * @Author: zhangxin14 
 * @Date: 2017-12-27 14:35:27 
 */
const processRouteObj = ({name, path, component, breadcrumb}) => ({
  path: path,
  name: name,
  props: {breadcrumb: breadcrumb},
  component: () => import(`@/pages/${component}`)
})


const router = new Router({
  mode: 'history',
  routes: createRoute(routes)
})

/**
 * @description:  阻塞等待语言包加载完毕之后再进入路由
 * @author:       zhuxiankang
 * @time:         2017/11/28
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

  if (process.env.NODE_ENV === 'development') {               // 开发态
    let lang = require('@/i18n/zh_CN')
    i18n.setLocaleMessage('zh_CN', JSON.parse(JSON.stringify(lang)))
    huiLocale.i18n((key, value) => i18n.t(key, value))        // hui的多语言
    i18n.locale = 'zh_CN'
    next()
  } else {                                                    // 部署态
    // http请求语言包
    // 注意next()应该在请求响应回调函数中处理
  }
})

export default router
