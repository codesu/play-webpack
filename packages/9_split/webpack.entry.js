const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'index.js'),
    another: path.resolve(__dirname, 'another-module.js'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: ROOT_PATH,
    }),
    new HtmlWebpackPlugin({
      title: 'code splitting',
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common', // 指定公共 bundle 的名称
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
};
