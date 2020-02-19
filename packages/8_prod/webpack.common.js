const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
};
