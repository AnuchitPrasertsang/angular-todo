var path = require('path');

module.exports = {
  entry: './src/app/app.module.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.html$/,
        use: ['ngtemplate-loader', 'html-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
