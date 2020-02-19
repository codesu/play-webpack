const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.js'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'dist'),
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      // css是在运行时通过js加入html inline的，js包里会带上style-loader/css-loader解析和添加样式的方法
      // css也会被套上模块头用来寻找，所以文件非常大
      use: ['style-loader', 'css-loader'],
    }],
  },
};
