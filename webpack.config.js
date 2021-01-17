const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    manga: './src/20210117-manga/js/index.js',
    coffeeshop: './src/20210118-coffeeshop/js/index.js'
  },
  mode: "development",
  devtool: "source-map",
  output: {
      path: `${__dirname}/docs`,
      filename: '[name].js'
  },
  // 共通のライブラリを分離する。 momentなど
  optimization: {
    splitChunks: {
      name: 'commonlib',
      chunks: 'initial',
    }
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
      template: "./src/index.html", // 元HTML
      filename: "index.html",  // 出力先HTML
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: "./src/20210117-manga/html/index.html", // 元HTML
      filename: "20210117-manga.html",  // 出力先HTML
      chunks: ['manga']
    }),
    new HtmlWebpackPlugin({
      template: "./src/20210118-coffeeshop/html/index.html", // 元HTML
      filename: "20210118-coffeeshop.html",  // 出力先HTML
      chunks: ['coffeeshop']
    }),
    new MiniCssExtractPlugin({
      filename:'css/[name].css'
    }),
    new CleanWebpackPlugin(),
  ],
};
