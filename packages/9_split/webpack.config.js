const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: {
    chunkIndex: path.resolve(__dirname, 'chunkIndex.js'),
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: ROOT_PATH,
    }),
    new HtmlWebpackPlugin({
      title: 'code splitting',
    }),
    // new BundleAnalyzerPlugin(), // 会自动打开分析网页
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
};
