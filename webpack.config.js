const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (_env, argv) {
  const isProduction = argv.mode === 'production'
  const isDevelopment = !isProduction

  return {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    plugins: [
      isProduction &&
        new MiniCssExtractPlugin({
          filename: '[name].[contenthash:8].css',
        }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'dist/index.html'),
      }),
      new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
    devServer: {
      port: 3000,
      contentBase: path.resolve(__dirname, './dist'),
      compress: true,
      historyApiFallback: true,
      open: true,
      hot: true,
    },
  }
}
