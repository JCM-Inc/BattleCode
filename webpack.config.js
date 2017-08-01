const path = require('path');

module.exports = {
  entry: './public/js/index.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'index.min.js',
  },
  module: {
    rules: [
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      DashBoard: path.resolve(__dirname, 'public/js/DashBoard'),
    },
  },
};

