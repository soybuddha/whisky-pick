const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const VENDOR_LIBS = [
  'react', 'react-dom', 'react-redux', 'react-router', 'redux', 'redux-thunk'
];

module.exports = {
  mode: 'none',
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    //publicPath: 'build/'
  },

  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      // {
      //   use:  ['style-loader', MiniCssExtractPlugin.loader, 'css-loader'],
      //   test: /\.css$/
      // },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
      // {
      //   use:  [
      //     {
      //       loader: 'url-loader',
      //       options: { limit: 40000 }
      //     },
      //     'image-webpack-loader'
      //   ],
      //   test: /\.(jpe?g|png|gif|svg)$/
      // },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'src/styles/style.css'
    // }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
