> https://doc.webpack-china.org/guides/lazy-loading/
> https://github.com/github/fetch/blob/master/fetch.js blob的实现
- npm install --save-dev imports-loader
- npm install --save-dev exports-loader
- npm i --save babel-polyfill
- npm i --save whatwg-fetch

```javascript
    "build": "webpack --config packages/13_shim/webpack.config.js"
```
