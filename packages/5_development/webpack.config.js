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
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(ROOT_PATH, 'dist'),
    inline: false, // iframe 模式并没有插入iframe，inline加入了HMR触发模块（事件提交，获取）
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
    publicPath: '/',
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
