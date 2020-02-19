> https://doc.webpack-china.org/guides/getting-started/
```javascript
    "remove": "rm -rf dist/*",
    "copy": "cp packages/2_config/index.html ./dist",
    "build": "webpack --config packages/2_config/webpack.config.js",
    "deploy": "npm run remove && npm run build && npm run copy"
```

