const express = require('express');
const webpack = require('webpack');
// webpackDevServer内部也使用的这个中间件
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.listen(3000, function(){
  console.log('Example app listen on port 3000!\n');
});
