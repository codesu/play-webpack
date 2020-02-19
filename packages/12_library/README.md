> https://doc.webpack-china.org/guides/lazy-loading/
通过webpack打包的library，会带上runtime，代码冗余，推荐使用rollup，https://github.com/rollup/rollup
相比原本umd规则，https://github.com/umdjs/umd，生成的更周全

```javascript
    "build": "webpack --config packages/12_library/webpack.config.js"
```
