const path = require('path');
const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader'],
    }, {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: ['file-loader'],
    }],
  },
};
