
/**
 * babel-loader: 负责es6语法转化
 * babel-preset-env: 包含es6、7等版本的语法转化规则
 * babel-polyfill: es6内置方法和函数转化垫片
 * babel-plugin-transform-runtime: 避免polyfill污染全局变量
 * 更多资料：
 * polyfill引入：https://www.babeljs.cn/docs/usage/polyfill/
 * babel-preset-env配置：https://www.babeljs.cn/docs/plugins/preset-env/
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
      app: "./index.js"
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: './dist',
      hot: true,
      port: 9000,
      quiet: true
    },
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader" // 转化需要的loader
            // options选项配置在: .babelrc
            // options: {
            //   ...
            // }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({template: './index.html'}),
      new webpack.HotModuleReplacementPlugin()
    ]
  };