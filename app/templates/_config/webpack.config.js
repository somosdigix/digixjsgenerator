const path = require('path');

const fontLoaderQuery = { 
  publicPath: path.join(__dirname, '../dist/fonts'),
  name: '[hash].[ext]'
};

const configuration = {
  cache: true,

  entry: './bootstrap.js',

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].dist.js'
  },

  resolve: {
    alias: {
      '~': path.join(__dirname, '../'),
      'dom': '~/base-lib/dom',
      'sandbox': '~/base/sandbox',
      'controllerBase': '~/base/controllerBase'
    }
  },

  externals: {
    'Promise': 'Promise'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'html-loader', exclude: /node_modules/ },
      { test: /\.(scss|sass|css)$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.(svg|eot|ttf|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader', query: fontLoaderQuery }
    ]    
  }
};

module.exports = configuration;
