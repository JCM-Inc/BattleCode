const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  output: {
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.styl$/, loader: ['style-loader', 'css-loader', 'stylus-loader'] },
      { test: /\.png$/, loader: ['file-loader'] },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      DashBoard: path.resolve(__dirname, 'public/js/React Components/DashBoard'),
      Signin: path.resolve(__dirname, 'public/js/React Components/Signin'),
      CreateCompetition: path.resolve(__dirname, 'public/js/React Components/Create Competition'),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: '../dist/index.html',
    }),
  ],
};

if (process.env.NODE_ENV === 'prod') {
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  module.exports.devtool = 'source-map';
  module.exports.devServer = {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        pathRewrite: {
          '^/api': '',
        },
        ws: true,
      },
    },
  };
}
