import VueHighlightJS from 'vue-highlight.js';
import 'highlight.js/styles/shades-of-purple.css'
//xt256.css'//tomorrow.css'//dark.css';//高亮代码样式
// 源码引入
import IwaysUI from '@iways-ui/src'
import '@iways-ui/src/theme/index.scss'
// NPM引入
// import IwaysUI from 'iways-ui'
// import 'iways-ui/dist/index.css'
// CDN引入
// const Vue = require('vue')
// const IwaysUI = require('iways-ui')
import './public/scss/base.scss'
// import VueECharts from 'vue-echarts' //注册图表
export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // ...做一些其他的应用级别的优化
  Vue.use(VueHighlightJS)//高亮代码
  Vue.use(IwaysUI, {
    size: 'mini'
  })
  Vue.config.productionTip = false
  // Vue.use(Element)
  // Vue.component('chart', VueECharts)
}