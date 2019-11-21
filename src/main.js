// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import promise from 'es6-promise'

import IwaysUI from '@iways-ui/src'
import '@iways-ui/src/theme/index.scss'

promise.polyfill()
Vue.use(IwaysUI, {
  size: 'mini'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
