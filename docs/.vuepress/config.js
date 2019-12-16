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
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'IWAYS-UI',
      description: 'Vue-powered Static Site Generator'
    },
    '/': {
      lang: 'zh-CN',
      title: 'IWAYS-UI',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
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
        '@iways-ui': path.join(__dirname, '../..'),
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
    locales: {
      '/': {
        selectText: '选择语言',
        // 该语言在下拉菜单中的 label 标签
        label: '简体中文',
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
      },
      '/en/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // 你的GitHub仓库，请正确填写
        repo: 'https://github.com/jacksonvong/iways-ui-vuepress',
        // 自定义仓库链接文字。
        repoLabel: 'iways-ui',
        nav: [
          {
            text: 'Guide',
            link: '/en/guide/install'
          }
        ],
        sidebar: [
          {
            title: 'Guide ',
            collapsable: false
          },
          ['/en/guide/install','Install'],
          ['/en/guide/started','Started'],
          {
            title: 'Components',
            collapsable: false
          },
          // ['/en/guide/component/button','按钮'],
          ['/en/guide/component/manfbrand', 'Manfbrand'],
          ['/en/guide/component/submodel', 'Submodel'],
          ['/en/guide/component/version', 'Version'],
          ['/en/guide/component/region', 'Region'],
          ['/en/guide/component/segment', 'Segment'],
          ['/en/guide/component/favorite', 'Favorite'],
          ['/en/guide/component/select', 'Select'],
          ['/en/guide/component/datepicker', 'Datepicker'],
          ['/en/guide/component/cascader', 'Cascader'],
          ['/en/guide/component/cascader-table', 'Cascader-Table'],
        ],
        displayAllHeaders: true // 默认值：false
      }
    }
  }
}