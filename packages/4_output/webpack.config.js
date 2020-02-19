const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.js'),
    print: path.resolve(__dirname, 'print.js'),
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(['dist'], {
       root: ROOT_PATH, // cause the root category is out of where the webpack.config.js is.
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
};
