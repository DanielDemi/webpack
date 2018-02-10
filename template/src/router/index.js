import Vue from 'vue'
import Router from 'vue-router'
import routes from '../router.config.json'
import i18n from '@/i18n'
import huiLocale from 'hui/lib/locale'
import { http } from '@/api/util'
Vue.use(Router)

const createRoute = (routes) => {
  return routes.reduce((processedRoutes, currentRoute) => {
    processedRoutes.push(processRouteObj(currentRoute))
    return processedRoutes
  }, [])
}

const processRouteObj = ({component, ...args}) => {
  return Object.assign({
    component: () => import(`@/pages/${component}`)
  }, args)
}

const router = new Router({
  mode: 'history',
  routes: createRoute(routes)
})

router.beforeEach(async (to, form, next) => {
  let messages = i18n.messages
  // 是否已经加载语言包
  let isLoadLanguage                                          

  for (let key in messages) {
    isLoadLanguage = key
  }

  if (isLoadLanguage) {
    next()
    return
  }

  // 开发态时，取本地的json文件
  // 在调试多语言时，在HMR更新下，为了将多语言的`js`文件转化成`json`文件
  // 建议将`webpack.dev.conf.js`中的`webpackShellPlugin`的`dev`选项设置为`false`
  try {
    // 请求与用户相关的多语言和皮肤包
    // warn：这里的请求需要根据各自的组件写不同的请求 eg：
    // let {data} = await http.get('/userInfo')
    await setLanguage()
    next()
  } catch (err) {
    // 请求失败 默认使用中文包
    await setLanguage('zh_CN')
    console.error(err)
    next()
  }
})

const setLanguage = async (locale) => {
  try {
    // 请求静态文件中的语言包数据 eg:
    let lang = await http.get(`${process.env.NODE_ENV !== 'development' ? '/hello/' : '' }/static/i18n/${locale}/index.json`)
    // 解析语言包
    i18n.setLocaleMessage(locale, JSON.parse(JSON.stringify(lang.data)))
    // 设置hui组件的多语言
    huiLocale.i18n((key, value) => i18n.t(key, value))        
    // 设置当前语言
    i18n.locale = locale
  } catch(err) {
    console.error(err)
    // 请求语言包失败，请求默认的语言包
    setLanguage('zh_CN')
  }
}

export default router
