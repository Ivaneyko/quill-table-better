const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: path.resolve(__dirname, '../demo/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
  },
  devServer: {
    compress: true,
    port: 12345,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'quill-table-better',
      template: path.resolve(__dirname, '../demo/index.html')
    })
  ]
});