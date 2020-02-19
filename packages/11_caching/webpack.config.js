const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: {
    vendor: ['lodash'],
    app: path.resolve(__dirname, 'index.js'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
       root: ROOT_PATH,
    }),
    new HtmlWebpackPlugin({
      title: 'caching',
    }),
    // 用的webpack v3.8.1，发现不用下面的插件，vendor的chunkhash也不会变
    // new webpack.HashedModuleIdsPlugin(),
    // 每次只修改index.js和print.js的时候，只有vendor.js保持不变
    // app因为内容变了，肯定会变
    // runtime包含了应用的模块序号和对应的模块hash映射，所以也会因为app变而自己变；例如：
    //
    // {"0":"02f989e5","1":"026ea816"}[chunkId] + ".js";
    // {"0":"02f989e5","1":"973a4531"}[chunkId] + ".js";
    // 0为vendor.js，1为app.js
    new webpack.optimize.CommonsChunkPlugin({
      // vendor
      // vendor.js 包含runtime和lodash
      //
      // ['vendor', 'runtime']
      // vendor.js包含lodash，runtime包含runtime，和写两个commonschunk效果一样
      name: 'vendor',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',
    }),
  ],
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
};
