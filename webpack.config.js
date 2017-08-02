const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './public/js/index.js',
  output: {
    path: `${__dirname}/public`,
    filename: 'index.min.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.styl$/, loader: ['style-loader', 'css-loader', 'stylus-loader'] },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      DashBoard: path.resolve(__dirname, 'public/js/React Components/DashBoard'),
      Login_Signup: path.resolve(__dirname, 'public/js/React Components/Login_Signup'),
    },
  },
  plugins: [],
};

if (process.env.NODE_ENV === 'prod') {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
}
