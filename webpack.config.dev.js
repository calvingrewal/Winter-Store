var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: 'static',
  },
  devtool: 'source-map',
  devServer: {
     historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-0']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
          test: /.sass$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            loader: [
              'css-loader',
              'sass-loader',
            ],
          }),
        },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: false
    })
  ]
}
