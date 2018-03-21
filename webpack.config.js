const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js', // visit: https://webpack.js.org/configuration/output/#output-chunkfilename
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({ title: 'Code Splitting' }),
  ],
};

// to run specific config file use 'npx webpack --config path/to/webpack.config.js'
// or via npm script