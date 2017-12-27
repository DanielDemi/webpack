{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
import i18n from './i18n'

import hui from 'hui'
import common from 'dolphin_common'
import 'dolphin_common/lib/theme/reset.css'
import 'hui/lib/theme-default/index.css'
import 'dolphin_common/lib/theme/index.css'

Vue.use(hui)
Vue.use(common)
Vue.config.productionTip = false

// 全局混合，对面包屑的多语言进行处理
Vue.mixin({
  computed: {
    i18nBreadcrumb () {
      return this.breadcrumb ? this.breadcrumb.map(bd => ({
        title: this.$t(bd.title),
        router: bd.router
      })) : null
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }
  {{/if_eq}}
})
