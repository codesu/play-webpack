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
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'lazy loading',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
};
