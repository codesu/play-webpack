const path = require('path');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: {
    vendor: [path.resolve(__dirname, './vendor1'), path.resolve(__dirname, 'vendor2')],
    pageA: path.resolve(__dirname, './pageA'),
    pageB: path.resolve(__dirname, './pageB'),
    pageC: path.resolve(__dirname, './pageC'),
  },
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    // 也会影响到commonchunk的名称，优先级低于commonchunkplugin的filename
    filename: '[name].js',
  },
  plugins: [
    // 可以写多个commonschunkplugin，后面的插件中name数组可以引用之前生成的name
    new CommonsChunkPlugin({
      // vendor，生成4个包
      // 一个参数且在entry中的，生成entry中的4个包，vendor会将runtime打包进去，抽取了ABC的公共代码

      // common，生成5个包
      // 一个参数且和entry无关的，生成4个entry包，1个包含runtime和ABC公共代码的common

      // ['common', 'vendor']，生成5个包
      // 最后一个参数生成的包含有runtime，此例为vendor包含runtime和vendor代码，common抽取ABC中代码
      // 如果调换顺序，则common只包含runtime，vendor包含vendor和ABC公共代码
      // 这样就可以缓存common，即runtime，可以直接inline进html中
      name: ['vendor', 'common'],
      // 覆盖output.filename中选项
      // filename: '[name].[chunkhash:8].js',
      minChunks: 2,
    }),
  ],
};
