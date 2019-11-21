### Quickstart

#### 引入 iways-ui
你可以引入整个 iways-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 iways-ui。
##### 完整引入
在 main.js 中写入以下内容：
``` js
// NPM引入
// import Vue from 'vue'
// import IwaysUI from 'iways-ui'
// import 'iways-ui/dist/index.css'
// CDN引入
const Vue = require('vue')
const IwaysUI = require('iways-ui')
import App from './App.vue'

Vue.use(IwaysUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

在webpack.base.config.js 中写入以下内容
``` js

module.exports = {
  ...
  entry: {
    app: './src/main.js'
  },
  externals: {
    'vue': 'Vue',
    'iways-ui': 'IwaysUi'
  },
  resolve: {
    ...
  }
}
```