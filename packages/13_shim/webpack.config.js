const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.js'),
    polyfills: path.resolve(__dirname, 'polyfills.js'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
       root: ROOT_PATH,
    }),
    // 用来html确定文件名引入
    new CommonsChunkPlugin({
      name: 'polyfills',
      chunks:['polyfills'],
      filename: 'polyfills.bundle.js',
    }),
    new CommonsChunkPlugin({
      // 抽取runtime，打包到app中
      names: ['polyfills', 'app'],
    }),
    new HtmlWebpackPlugin({
      // .html有可能被莫名的loader加载，最好写个tpl
      template: path.resolve(__dirname, 'index.html'),
      excludeChunks: ['polyfills'],
    }),
    // 定义全局变量，可以不在代码中import lodash了
    new webpack.ProvidePlugin({
      join: ['lodash', 'join'],
    }),
  ],
  module: {
    rules: [{
      test: path.resolve(__dirname, 'index.js'),
      // 会在外面包一层function，call(window)
      // 导致无法在index.js中使用import，只能用require
      // https://github.com/webpack-contrib/imports-loader/issues/60
      use: 'imports-loader?this=>window',
    }, {
      // module最下方会加上
      // exports["file"] = (file);
      // exports["parse"] = (helpers.parse);
      test: path.resolve(__dirname, 'global.js'),
      use: 'exports-loader?file,parse=helpers.parse',
    }],
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
};
