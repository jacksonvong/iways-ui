const path = require('path')
const fs = require('fs')
const nodeExternals = require('webpack-node-externals')

const packages = fs.readdirSync(path.resolve(__dirname, '../src/iways-ui/src/packages'))
const mixins = fs.readdirSync(path.resolve(__dirname, '../src/iways-ui/src/mixins'))
const utils = fs.readdirSync(path.resolve(__dirname, '../src/iways-ui/src/utils'))

let externals = {}

packages.forEach(name => {
  externals[`packages/${name}`] = `iways-ui/dist/lib/${name}`
})

mixins.forEach(name => {
  name = name.substring(0, name.lastIndexOf('.'))
  externals[`mixins/${name}`] = `iways-ui/dist/mixins/${name}`
})

utils.forEach(name => {
  name = name.substring(0, name.lastIndexOf('.'))
  externals[`utils/${name}`] = `iways-ui/dist/utils/${name}`
})

exports.packages = packages.reduce((last, curr) => {
  last[`lib/${curr}`] = path.resolve(__dirname, `../src/iways-ui/src/packages/${curr}`)
  return last
}, {})
exports.mixins = mixins.reduce((last, curr) => {
  last[`mixins/${curr.substring(0, curr.lastIndexOf('.'))}`] = path.resolve(__dirname, `../src/iways-ui/src/mixins/${curr}`)
  return last
}, {})
exports.utils = utils.reduce((last, curr) => {
  last[`utils/${curr.substring(0, curr.lastIndexOf('.'))}`] = path.resolve(__dirname, `../src/iways-ui/src/utils/${curr}`)
  return last
}, {})
exports.theme = {
  'style': path.resolve(__dirname, `../src/iways-ui/src/style.js`)
}

exports.externals = externals

exports.alias = {
  'vue$': 'vue/dist/vue.esm.js',
  '@iways-ui': path.resolve(__dirname, '../src/iways-ui'),
  'packages': path.resolve(__dirname, '../src/iways-ui/src/packages'),
  'utils': path.resolve(__dirname, '../src/iways-ui/src/utils'),
  'mixins': path.resolve(__dirname, '../src/iways-ui/src/mixins')
}
