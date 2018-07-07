var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './index.js',
  output: {
  	path: __dirname,
  	filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
};