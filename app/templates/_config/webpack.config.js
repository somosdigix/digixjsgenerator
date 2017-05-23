const fontPath = '';
const fontLoaderQuery = { 
  publicPath: __dirname + '/dist/fonts',
  name: '[hash].[ext]'
};

const configuration = {
  cache: true,

  entry: './bootstrap.js',

  output: {
    path: __dirname + '/dist',
    filename: '[name].dist.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(scss|sass|css)$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.(svg|eot|ttf|otf|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader', query: fontLoaderQuery }
    ]    
  }
  
};

module.exports = configuration;
