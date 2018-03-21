const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js',
  },
  output: {
    filename: '[name].bundle.js', // dynamically generate bundle names, based on the entry point names
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'Output Management' }), // automatically manages HTML output file
    new CleanWebpackPlugin(['dist']), // automatically clean 'dist' folder before building
  ]
};

// to run specific config file use 'npx webpack --config path/to/webpack.config.js'
// or via npm script