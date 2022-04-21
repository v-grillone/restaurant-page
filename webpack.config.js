const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      // {
      //   test: /\.(png|jpe?g|gif|jpg)$/i,
      //   use: {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[hash].[ext]',
      //         outputPath: 'assets'
      //       },
      //     },
      // },
      {
        test: /\.(jpe?g|png|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext]'
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Lucky Cafe',
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
};