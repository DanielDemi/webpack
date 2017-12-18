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

import hui from 'hui'
import eid from 'everyone_is_designer'
import common from 'dolphin_common'
import 'dolphin_common/lib/theme/reset.css'
import 'hui/lib/theme-default/index.css'
import 'everyone_is_designer/lib/theme/index.css'
import 'dolphin_common/lib/theme/index.css'

Vue.use(hui)
Vue.use(eid)
Vue.use(common)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
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
