const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
      path: `${__dirname}/docs`,
      filename: 'main.js'
  },
  devServer: {
      contentBase: './docs'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attributes: true
          }
        }
      },
      {
        test: /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ]
      },
      // {
      //   test: /\.(gif|png|jpg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10,
      //         name: './img/[name].[ext]'
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: './img/[name].[ext]',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    }),
    new MiniCssExtractPlugin({
      filename:'./src/css/style.css'
    })
  ],
};
