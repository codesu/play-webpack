const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // 把source-map也去掉了

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
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: 'Tree shaking',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
};
