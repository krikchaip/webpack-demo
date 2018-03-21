const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map', // visit: https://webpack.js.org/configuration/devtool/
  devServer: { contentBase: './dist', hot: true },
  entry: { app: './src/index.js' },
  output: {
    filename: '[name].bundle.js', // dynamically generate bundle names, based on the entry point names
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // This loader uses module.hot.accept behind the scenes to patch <style> tags when CSS dependencies are updated.
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Hot Module Replacement' }), // automatically manages HTML output file
    new CleanWebpackPlugin(['dist']), // automatically clean 'dist' folder before building
    new webpack.HotModuleReplacementPlugin(), // enable HMR
    new webpack.NamedModulesPlugin(), // make it easier to see which dependencies are being patched
  ]
};

// to run specific config file use 'npx webpack --config path/to/webpack.config.js'
// or via npm script