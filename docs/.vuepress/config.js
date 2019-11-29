const path = require('path')
module.exports = {
  base: '/iways-ui/',
  title: 'IWAYS-UI',
  description: '一个基于vue的ui组件',
  head: [
    // ['script', { src: 'http://i.ways.cn/js/vue/2.6.10/vue.js?t=' + (new Date()).valueOf() }],
    // ['script', { src: 'http://i.ways.cn/js/iways-ui/index.js?t=' + (new Date()).valueOf() }],
    // ['link', { rel: 'stylesheet', type: 'text/css', href: 'http://i.ways.cn/js/iways-ui/index.css?t=' + (new Date()).valueOf() }]
  ],
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    externals: {
      // 'vue': 'Vue',
      // 'iways-ui': 'IwaysUi'
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.join(__dirname, '../../src'),
        '@iways-ui': path.join(__dirname, '../../src/iways-ui'),
      }
    },
    module: {
      // rules: [{
      //   test: /\.md$/,
      //   use: [
      //    'vue-loader',
      //     {
      //       loader: 'vue-markd-loader',
      //       options: {
      //         replaceFiles: true , // 默认true, 是否将文件填充进md
      //         wrapper:true // 默认true,默认输出Vue Component ,false 时输出html片段 
      //       }
      //     }
      //   ]
      // }]
    }
  },
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/jacksonvong/iways-ui-vuepress',
    // 自定义仓库链接文字。
    repoLabel: 'iways-ui',
    nav: [
      {
        text: '指南',
        link: '/guide/install'
      }
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false
      },
      ['/guide/install','安装'],
      ['/guide/started','快速上手'],
      {
        title: '组件',
        collapsable: false
      },
      // ['/guide/component/button','按钮'],
      ['/guide/component/manfbrand', '厂商'],
      ['/guide/component/submodel', '车型'],
      ['/guide/component/version', '型号'],
      ['/guide/component/region', '区域'],
      ['/guide/component/segment', '细分市场'],
      ['/guide/component/favorite', '收藏'],
      ['/guide/component/select', '选择'],
      ['/guide/component/datepicker', '日历'],
      ['/guide/component/cascader', '级联'],
      ['/guide/component/cascader-table', '级联表格'],
    ],
    displayAllHeaders: true // 默认值：false
  }
}