# learning-npm
npm/webpack の学習用リポジトリです。  

<br>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Demo
GitHubActions でビルドしています。  
[デモ](https://fukugit.github.io/learning-webpack/)  

<br>  

## ローカルで起動
### WebPackのサーバ起動
```
npm start
```
<br>  

## ローカルでデバッグ
Webpackでビルドする前のJSファイルをVsCodeでデバッグする方法です。  
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

### モジュールのコマンド(webpackとか)を実行する方法
```sh
npx webpack
```
<br>

### Webpackをとりあえず動かす方法
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

[package.json](package.json) にビルドを定義します。  
```json
  "scripts": {
    "build": "webpack --config webpack.config.js"
  }
```
<br>

上記の設定後に以下を実行するとJSファイルがビルドされます。  
```
npm run build
```
<br>

HTMLへのjsの差し込みをwebpackは自動でやってくれません。  
以下のようにHTMLを自分で用意して、ビルド後のJSファイルを読み込んで下さい。  
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

### WebPackのWebサーバを利用する方法
```json
  "devDependencies": {
    "webpack-dev-server": "^3.11.0"
  }
```
<br>

[webpack.config.js](webpack.config.js) にこちらを定義します。  
```
module.exports = {
  devServer: {
      contentBase: './docs'  // Webサーバ起動時にどのファイルを参照するかの設定です。
  },
}
```
<br>

```package.json``` に以下を定義します。  
これで ```npm start```を実行するとWebサーバが立ち上がります。  
備考としてですが、src配下（ビルド前のファイル）を更新すると即時反映されますが、これはメモリ展開されたものを見ているだけなので、docに出力するにはビルドを行う必要があります。  
```json
  "scripts": {
    "start": "webpack-dev-server --open",
  },
```
<br>

### CSSローダー
バンドルせずにCSSファイルとしてdist配下に出力します。  
CSSをアウトプットするには、プラグイン```mini-css-extract-plugin```が必要になります。  
```
npm install --save-dev css-loader style-loader mini-css-extract-plugin
```
<br>


上記をインストール後、[webpack.config.js](webpack.config.js)に以下のように設定します。  
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
```
"url-loader": "^4.1.1",
```
<br>

[webpack.config.js](webpack.config.js)に以下を追加すればOKです。  
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
HTMLをアウトプットするには、以下のプラグインが必要です。  
```
"html-loader": "^1.3.2",
"html-webpack-plugin": "^4.5.0",
```
<br>

[webpack.config.js](webpack.config.js)に以下を追加すればOKです。  
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

[/index.js](./src/js/index.js)で、以下の記述をします。  
```javascript
import "../css/style.scss";
```
<br>

### Sass でnpmモジュールのCSSを使う方法
[style.scss](./src/css/style.scss)で、以下の記述をします。  
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
```
npm install --save-dev babel-loader @babel/core @babel/preset-env
```
<br>

[webpack.config.js](webpack.config.js) に以下を追加します。
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

## このプロジェクトの構成  

| ファイル / ディレクトリ                                         | 概要                     |
| -------------------------------------------- | ---------------------- |
| [webpack.config.js](./webpack.config.js)     | Webpackの設定ファイル         |
| [package.json](./package.json)               | npm設定ファイル              |
| [html](./src/html) | ビルド後にdistに出力されるHTMLです。      |
| [css](./src/css) | ビルド後にdistに出力されるCSSです。      |
| [js/index.js](./src/js/index.js)         | WebPackのエントリポイント       |
| [js/main.js](./src/js/main.js)           | JSのメイン処理               |
| [js/timer.js](./src/js/timer.js)         | メイン処理からimportされる関数・クラス |
<br>

## 参考にしたサイト
[HTMLファイルをdist配下に出力する方法](https://ema-hiro.hatenablog.com/entry/2017/10/12/015748)  
[画像をoutputする方法](https://note.com/koki_nagai/n/n5a637b6b727d)  
