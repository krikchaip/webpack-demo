const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // visit: https://webpack.js.org/configuration/devtool/
  // Avoid inline-*** and eval-*** use in production as they can increase bundle size and reduce the overall performance.
  devtool: 'source-map',
  plugins: [
    // visit: https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
    new UglifyJSPlugin({ sourceMap: true }),

    // Many libraries will key off the process.env.NODE_ENV variable to determine what should be included in the library.
    // However, with process.env.NODE_ENV === 'production'
    // they might drop or add significant portions of code to optimize how things run for your actual users.
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
  ]
});