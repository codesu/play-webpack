const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'dist'),
  },
});
