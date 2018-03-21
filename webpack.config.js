const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.css$/, use: ['style-loader', 'css-loader'] }]
  }
};

// to run specific config file use 'npx webpack --config path/to/webpack.config.js'
// or via npm script