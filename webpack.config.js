const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: '[name][ext]',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
      watch: true,
    },
    port: 5001,
    open: true,
    hot: true,
  },
  // loaders
  module: {
    rules: [
      // css
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // images
      { test: /\.(svg|ico|png|jpg|gif|webp|jpeg)$/, type: 'asset/resource' },
      // js for babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
    ],
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'just-demo',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/tempt.html'),
    }),
  ],
};
