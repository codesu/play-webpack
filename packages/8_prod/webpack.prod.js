const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      // https://github.com/webpack/webpack/issues/2537
      // 在本js中，无法使用此变量来判断环境，可以在执行package.json script中加上NODE_ENV='production'
      // 适用于用来编译的文件来判断环境，如/node_modules，/src中

      // 值为变量名，如果直接写'production'，会输出production这个变量，没定义就会报错
      // JSON.stringfy后会在字符串前后加上双引号，这样会输出字符串production
      // 即使不用definePlugin，process.env.NODE_ENV也不会报错
      // 因为在src中使用了这个变量，webpack就加入了shim for using process in browser这个module
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
});
