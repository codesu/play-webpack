> https://doc.webpack-china.org/guides/getting-started/
```javascript
    "remove": "rm -rf dist/*",
    "copy": "cp packages/1_cli/index.html ./dist",
    "build": "webpack packages/1_cli/index.js dist/bundle.js",
    "deploy": "npm run remove && npm run build && npm run copy"
```

