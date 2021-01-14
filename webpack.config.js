const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
    sub: './src/js/sub.js'
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
      // TODO HTMLを複数指定する方法
      // https://gist.github.com/giisyu/12dfe2a4bde329b8ea99747fe87f63a9
      template: "./src/html/index.html"
    }),
    new MiniCssExtractPlugin({
      filename:'css/style.css'
    }),
    new CleanWebpackPlugin(),
  ],
};
