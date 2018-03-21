const path = require('path');

module.exports = {
  mode: 'production', // dead-code will be removed on 'production'
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // side-effect by default(not eliminated)
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },

      // modules are side-effect by default unless specified
      { include: path.resolve("node_modules", "lodash"), sideEffects: false },
    ]
  }
};

// to run specific config file use 'npx webpack --config path/to/webpack.config.js'
// or via npm script