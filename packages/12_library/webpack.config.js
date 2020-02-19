const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.js'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
       root: ROOT_PATH,
    }),
  ],
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    filename: 'webpack-numbers.js',
    library: 'webpackNumbers', // 全局变量
    // 配合library使用
    // var => var webpackNumbers = xxx
    // assign => webpackNumbers = xxx
    // this => this['webpackNumbers'] = xxx
    // window, global 同上
    // commonjs => exports['webpackNumbers'] = xxx
    // commonjs2 => module.exports = xxx, library会被忽视
    // amd => define('webpackNumbers', [], function(){}), library可为空
    // umd => umd模式, https://github.com/umdjs/umd
    // jsonp => webpackNumbers(xxx)，自动执行
    libraryTarget: 'umd',
  },
  // https://doc.webpack-china.org/configuration/externals/
  // 从输出的bundle中排出以来
  // ['./math', 'subtract'] 从./math模块中，把substract排除出去
  // jQuery，全局变量jQuery，相当于root: 'jQuery'
  // object形式，在多种情况下，怎么引用lodash，如amd时候，通过define(['lodash'])
  // /^(jquery|\$)$/i，匹配上的就移除
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};
