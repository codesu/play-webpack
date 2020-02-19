const path = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: {
    A: path.resolve(__dirname, './A'),
    B: path.resolve(__dirname, './B'),
    C: path.resolve(__dirname, './C'),
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    // 也会影响到commonchunk的名称，优先级低于commonchunkplugin的filename
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
    ]
  },
  plugins: [
    // new UglifyJSPlugin(),
    // 生成8个文件
    // A.css: 只包含styleA.css
    // A.js: __webpack_require__ style和styleA的方法，不过相关style又被extracttext移除了
    // B.css: 只包含styleB.css
    // B.js: __webpack_require__ style和styleB的方法，不过相关style又被extracttext移除了
    // C.css: 包含style.css和styleC.css
    // C.js: runtime
    // commons.css: 只包含style.css
    // commons.js: runtime
    new CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      chunks: ['A', 'B'],
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
  ],
};
