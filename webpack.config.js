const path = require('path');

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
  }
};

// to run specific config file use 'npx webpack --config path/to/webpack.config.js'
// or via npm script