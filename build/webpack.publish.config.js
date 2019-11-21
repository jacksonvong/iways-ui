var path = require('path')
var webpack = require('webpack')
const config = require('../config')
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner
const ExtractTextPlugin = require ('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
// const vueLoaderConfig = require('./vue-loader.conf')
const publish = require('./publish')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

process.stdout.write('\n')
var spinner = new Spinner(chalk.green('%s Building Iways UI Components..'))
spinner.setSpinnerString('⣾⣽⣻⢿⡿⣟⣯⣷')
spinner.start()

module.exports = {
  entry: Object.assign({
    style: resolve('src/iways-ui/src/style.js'),
    index: resolve('src/iways-ui/src/index.js')
  }, publish.packages, publish.mixins, publish.utils),
  output: {
    path: resolve('src/iways-ui/dist'),
    filename: '[name].js',
    library: 'IwaysUi',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'theme/assets/images/icon/[name].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'theme/assets/media/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'theme/assets/fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: publish.alias
  },
  externals: Object.assign({}, publish.externals, nodeExternals(), {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  })
}

if (process.env.NODE_ENV === 'production') {
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new ExtractTextPlugin("index.css",{allChunks: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: config.build.productionSourceMap,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.ProgressPlugin((percentage, msg, ...args) => {
      spinner.setSpinnerTitle(chalk.green('%s ' + parseInt(percentage * 100) + '%' + ' Building iways-ui components.. ' + args[0]))
      if (percentage === 1) {
        spinner.stop()
        process.stdout.write('\n')
      }
    })
  ])
}
