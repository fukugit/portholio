const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  mode: "development",
  devtool: "source-map",
  output: {
      path: `${__dirname}/docs`,
      filename: 'main.js'
  },
  devServer: {
      contentBase: './docs'
  },
  module: {
    rules: [
      // HTMLローダー
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attributes: true
          }
        }
      },
      // sass ローダー
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      // 画像ローダー
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: './img/[name].[ext]',
        },
      },
      // Babel ローダー
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                // ES2015以降のコードを変換
                '@babel/preset-env',
              ]
            }
          }
        ],
        exclude: /node_modules/,
      },
      // ESLint
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: false,
          failOnError: true,
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"
    }),
    new MiniCssExtractPlugin({
      filename:'css/style.css'
    })
  ],
};
