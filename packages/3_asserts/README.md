> https://doc.webpack-china.org/guides/asset-management/
```javascript
    "remove": "rm -rf dist/*",
    "copy": "cp packages/3_asserts/index.html ./dist",
    "build": "webpack --config packages/3_asserts/webpack.config.js",
    "deploy": "npm run remove && npm run build && npm run copy"
```

