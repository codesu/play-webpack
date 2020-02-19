const path = require('path');
const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
};
