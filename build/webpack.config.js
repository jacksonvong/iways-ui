const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require ('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const vueLoaderConfig = require('./vue-loader.conf')
const chalk = require('chalk')
const Spinner = require('cli-spinner').Spinner

const publish = require('./publish')

process.stdout.write(chalk.cyan('Let\'s go! \n'))
const spinner = new Spinner(chalk.green('%s Building Iways UI..'))
spinner.setSpinnerString('⣾⣽⣻⢿⡿⣟⣯⣷')
spinner.start()

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  mode: 'production',
  entry: {
    style: resolve('src/iways-ui/src/style.js'),
    index: resolve('src/iways-ui/src/index.js')
  },
  output: {
    path: resolve('src/iways-ui/dist'),
    filename: '[name].js',
    library: 'IwaysUi',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
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
        options: vueLoaderConfig
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
  externals: Object.assign({}, nodeExternals(), {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }),
  plugins: [
    new webpack.ProgressPlugin((percentage, msg, ...args) => {
      spinner.setSpinnerTitle(chalk.green('%s ' + parseInt(percentage * 100) + '%' + ' Building Iways UI..'))
      if (percentage === 1) {
        spinner.stop()
        process.stdout.write('\n')
      }
    })
  ]
}
