'use strict';  
var webpack = require('webpack'),  
path = require('path');

var APP = path.join(__dirname, 'app');

module.exports = {  
  context: APP,
  entry: {
    app: './bootstrap2.js',
    vendor: ['angular', 'angular-ui-router', 'oclazyload']
  },
  output: {
    path: path.join(APP, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      mangle: false
    }),
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate' },
      { test: /\.scss$/, exclude: /node_modules/, loader: 'style!css!sass' },
      { test: /\.html$/, loader: "raw" }
    ]
  }
};