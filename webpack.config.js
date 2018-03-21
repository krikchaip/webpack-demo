const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    // lodash is also imported within ./src/another-module.js and will thus be duplicated in both bundles.
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HTMLWebpackPlugin({ title: 'Code Splitting' }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'common-bundle-name' }), // DEPRECATED
  ],
};

// to run specific config file use 'npx webpack --config path/to/webpack.config.js'
// or via npm script