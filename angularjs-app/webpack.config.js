const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const index = require('fs').readFileSync('./src/index.html', 'utf8');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: index
  })],
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.html/,
        type: 'asset/source',
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true,
    static: {
      directory: path.join(__dirname, '/dist')
    }
  },
};