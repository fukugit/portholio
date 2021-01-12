# learning-webpack
webpack の学習用リポジトリです。  

<br>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
目次

- [Demo](#demo)
- [ローカルで起動](#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%A7%E8%B5%B7%E5%8B%95)
  - [WebPackのサーバ起動](#webpack%E3%81%AE%E3%82%B5%E3%83%BC%E3%83%90%E8%B5%B7%E5%8B%95)
- [ローカルでデバッグ](#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%A7%E3%83%87%E3%83%90%E3%83%83%E3%82%B0)
  - [WebPackのサーバ起動](#webpack%E3%81%AE%E3%82%B5%E3%83%BC%E3%83%90%E8%B5%B7%E5%8B%95-1)
  - [ターミナルで実行](#%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E3%81%A7%E5%AE%9F%E8%A1%8C)
  - [ブラウザでサイトにアクセス](#%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%A7%E3%82%B5%E3%82%A4%E3%83%88%E3%81%AB%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B9)
  - [launch.jsonを起動](#launchjson%E3%82%92%E8%B5%B7%E5%8B%95)
  - [JavaScriptファイルにブレークポイントを貼る](#javascript%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%81%AB%E3%83%96%E3%83%AC%E3%83%BC%E3%82%AF%E3%83%9D%E3%82%A4%E3%83%B3%E3%83%88%E3%82%92%E8%B2%BC%E3%82%8B)
- [学んだこと](#%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%93%E3%81%A8)
  - [npmでモジュール管理](#npm%E3%81%A7%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E7%AE%A1%E7%90%86)
  - [モジュールのコマンド(webpackとか)を実行する方法](#%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89webpack%E3%81%A8%E3%81%8B%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)
  - [Webpackをとりあえず動かす方法](#webpack%E3%82%92%E3%81%A8%E3%82%8A%E3%81%82%E3%81%88%E3%81%9A%E5%8B%95%E3%81%8B%E3%81%99%E6%96%B9%E6%B3%95)
  - [WebPackのWebサーバを利用する方法](#webpack%E3%81%AEweb%E3%82%B5%E3%83%BC%E3%83%90%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)
  - [CSSローダー](#css%E3%83%AD%E3%83%BC%E3%83%80%E3%83%BC)
  - [画像ファイルローダー](#%E7%94%BB%E5%83%8F%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%83%AD%E3%83%BC%E3%83%80%E3%83%BC)
  - [HTMLローダー](#html%E3%83%AD%E3%83%BC%E3%83%80%E3%83%BC)
  - [Sassローダー](#sass%E3%83%AD%E3%83%BC%E3%83%80%E3%83%BC)
  - [Sass でnpmモジュールのCSSを使う方法](#sass-%E3%81%A7npm%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB%E3%81%AEcss%E3%82%92%E4%BD%BF%E3%81%86%E6%96%B9%E6%B3%95)
  - [Babel](#babel)
- [このプロジェクトの構成](#%E3%81%93%E3%81%AE%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AE%E6%A7%8B%E6%88%90)
- [参考にしたサイト](#%E5%8F%82%E8%80%83%E3%81%AB%E3%81%97%E3%81%9F%E3%82%B5%E3%82%A4%E3%83%88)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Demo
[デモ](https://fukugit.github.io/learning-webpack/)  

<br>  

## ローカルで起動
### WebPackのサーバ起動
```
npm start
```
<br>  

## VSCodeでデバッグ
Webpackでビルドする前のJSファイルをVsCodeでデバッグする方法です。  
<br>  

### WebPackのサーバ起動
```
npm start
```
<br>

### ターミナルで実行
Chromeは必ず閉じてから実施してください。  
```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```
<br>

### ブラウザでサイトにアクセス
[http://localhost:8080/](http://localhost:8080/)  をブラウザのアドレスバーに指定します。  
<br>

### launch.jsonを起動
VSCodeで```Attach to WebPack Server on Chrome``` を起動します。  
<br>

### JavaScriptファイルにブレークポイントを貼る
[WebPackでビルド前のJSファイル](./src/js)にブレークポイントを貼って、画面を操作するとブレークポイント部分で止まります。  
<br>



## 学んだこと

### npmでモジュール管理
本番用と開発用
| 環境              | コマンド                   |
| --------------- | ---------------------- |
| dependencies    | npm install --save     |
| devDependencies | npm install --save-dev |
<br>

### npmモジュールのコマンドを実行する方法
```sh
npx webpack
```
<br>

### Webpackをとりあえず動かす方法
[package.json](package.json)  
```json
  "devDependencies": {
    "webpack": "^4.44.1",
    "webpack-cli": "3.3.12",
  }
```
<br>

[webpack.config.js](webpack.config.js)  
```
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',     // ここがエントリポイントになります。
  output: {
      path: `${__dirname}/docs`,  // ビルドの出力先です。
      filename: 'main.js'
  },
}
```
<br>

[package.json](package.json)  
```json
  "scripts": {
    "build": "webpack --config webpack.config.js"
  }
```
<br>

JavaScriptをビルド
```
npm run build
```
<br>

HTMLへのjsの差し込みは自動でやってくれません。  
HTMLを自分で用意して、ビルド後のJSファイルを読みます。  
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body class="sky">
<script type="text/javascript" src="./docs/main.js"></script>
</body>
</html>
```
<br>

### WebPackのWebサーバ起動
[package.json](package.json)  
```json
  "devDependencies": {
    "webpack-dev-server": "^3.11.0"
  }
```
<br>

[webpack.config.js](webpack.config.js)  
```
module.exports = {
  devServer: {
      contentBase: './docs'  // Webサーバ起動時にどのファイルを参照するかの設定です。
  },
}
```
<br>

[package.json](package.json)  
```npm start```を実行するとWebサーバが立ち上がります。  
```json
  "scripts": {
    "start": "webpack-dev-server --open",
  },
```
備考: src配下（ビルド前のファイル）を更新すると即時反映されますが、これはメモリ展開されたものを見ているだけなので、docに出力するには別途ビルドを行う必要があります。  
<br>

### CSSローダー
CSSファイルをdoc配下に出力します。  
[package.json](package.json) 
```
npm install --save-dev css-loader style-loader mini-css-extract-plugin
```
<br>

[webpack.config.js](webpack.config.js)  
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename:'./src/css/style.css'
    })
  ],
};

```
<br>

[/index.js](./src/js/index.js)で、以下の記述の記述は必要です。忘れずに。  
```
import '../css/style.css';
```

<br>

### 画像ファイルローダー
[package.json](package.json)  
```
"url-loader": "^4.1.1",
```
<br>

[webpack.config.js](webpack.config.js)  
ビルド時に```docs```配下に画像が出力されます。  
```
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: './img/[name].[ext]',
        },
      },
    ]
  },
```
<br>

### HTMLローダー
[package.json](package.json) 
```
"html-loader": "^1.3.2",
"html-webpack-plugin": "^4.5.0",
```
<br>

[webpack.config.js](webpack.config.js)  
ビルド時に```docs```配下にHTMLが出力されます。このHTMLにはJSやCSSのパスが自動で含まれます。  
```
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
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html"  //読み込み元ファイル
    }),
  ],
```

<br>

### Sassローダー
[コチラ](http://vistylee.com/webpack-sass-css/) を参考にしました。
<br>

[package.json](package.json) 
```
npm install sass-loader sass 
```
<br>

[webpack.config.js](webpack.config.js) に以下を追加します。
```
module: {
  rules: 
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

  plugins: [
    new MiniCssExtractPlugin({
      // ファイルの出力先
      filename:'css/style.css'
    })
  ]
```
<br>

[/index.js](./src/js/index.js)  
```javascript
import "../css/style.scss";
```
<br>

### Sass でnpmモジュールのCSSを使う方法
[style.scss](./src/css/style.scss)  
```css
@import "~animate.css";
```
<br>

上記は、[animate.css](https://animate.style/) を使った例です。  
```
npm install animate.css --save
```
<br>

### Babel
[package.json](package.json) 
```
npm install --save-dev babel-loader @babel/core @babel/preset-env
```
<br>

[webpack.config.js](webpack.config.js)  
```
  module: {
    rules: [
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
      }
    ]
  },
```
<br>



### ESLint
[package.json](package.json) 
```
npm install --save-dev eslint eslint-loader eslint-config-airbnb eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y
```
<br>

[webpack.config.js](webpack.config.js)  
```
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: false,
          failOnError: true,
        }
      }
    ]
  },
```
<br>

[.eslintrc.json](.eslintrc.json)  
```
{
  // airbnbルールセットの継承
  "extends": "airbnb",

  // ブラウザで動作
  "env": {
    "browser": true
  },

  // ルールの追加
  "rules": {
  }
}
```
<br>


## このプロジェクトの構成  

| ファイル / ディレクトリ                                         | 概要                     |
| -------------------------------------------- | ---------------------- |
| [webpack.config.js](./webpack.config.js)     | Webpackの設定ファイル         |
| [package.json](./package.json)               | npm設定ファイル              |
| [js/index.js](./src/js/index.js)         | WebPackのエントリポイント       |
| [js/main.js](./src/js/main.js)           | JSのメイン処理               |
| [js/timer.js](./src/js/timer.js)         | メイン処理からimportされる関数・クラス |
<br>

## 参考にしたサイト
[HTMLファイルをdist配下に出力する方法](https://ema-hiro.hatenablog.com/entry/2017/10/12/015748)  
[画像をoutputする方法](https://note.com/koki_nagai/n/n5a637b6b727d)  
