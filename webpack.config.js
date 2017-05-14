var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test:watch';
// var isProd = process.env.NODE_ENV === 'production';

module.exports = function() {
  var config = {};

  config.devtool = 'cheap-module-eval-source-map';

  config.entry = './src/app/app.module.js';

  config.output = {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  };

  config.devServer = {
    contentBase: path.join(__dirname, 'src'),
    overlay: true,
    stats: 'minimal',
    historyApiFallback: true
  };

  config.module = {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        use: ['eslint-loader'],
        include: path.join(__dirname, 'src/app')
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src/app')
      },
      {
        test: /\.html$/,
        use: ['ngtemplate-loader', 'html-loader'],
        include: path.join(__dirname, 'src/app')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }

  if (isTest) {
    config.devtool = 'inline-source-map';
    config.output = {};
    return config;
  }

  config.plugins = [];
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    })
  );

  return config;
}();
