const config = {
  entry: ['babel-polyfill', './src/router.jsx'],
  output: {
    path: `${__dirname}/build/public/js`,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader'],
    }],
  },
};
  
module.exports = config;