var webpack = require('webpack');

module.exports = {
  entry: './src/',
  output: {
    path: './build',
    filename: 'bundle.js',
    // filename: 'bundle.min.js',
    library: 'IIOO',
    libraryTarget: 'this'
  },
  module: {
    loaders: [{
      test: /\.coffee$/,
      loader: 'coffee-loader'
    // },{
    //   test: /\.css$/,
    //   loader: 'style!css'
    // },{
    //   test: /\.styl$/,
    //   loader: 'style!css!stylus'
    // },{
    //   test: /\.html$/,
    //   loader: 'html'
    }]
  },
  // plugins: [
  // new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: false
  //   }
  // })
  // ],
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.coffee']
  }
}
