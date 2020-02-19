http://foio.github.io/wepack-code-spliting/

- npm install extract-text-webpack-plugin --save-dev

```javascript
  "remove": "rm -rf dist/*",
  "build": "npm run remove && webpack --config packages/chunks/webpack.config.js",
  "style": "npm run remove && webpack --config packages/chunks/webpack.style.js",
```
