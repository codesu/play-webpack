const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '../../');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'index.ts'),
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
       root: ROOT_PATH,
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(ROOT_PATH, 'dist'),
  },
};
