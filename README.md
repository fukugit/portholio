# learning-npm
npm/webpack の学習用リポジトリです。  

<br>

## Demo
GitHubActions でビルドしています。
[デモ](https://fukugit.github.io/learning-npm)  

<br>  

## デバッグ方法
ローカル環境でデバッグする方法です。  
Webpackでビルドする前のJSファイルをVsCodeでデバッグする方法になります。  
### WebPackのサーバ起動
```
npm start
```
<br>

### ターミナルで実行
すでにChromeを開いていたらうまく動作しません。必ず閉じてから実施してください。  
```
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222
```
<br>

### ブラウザでサイトにアクセス
http://localhost:8080/

### launch.jsonを起動
```Attach to WebPack Server on Chrome``` を起動します。

### JavaScriptファイルにブレークポイントを貼る
[WebPackでビルド前のJSファイル](./src/js)にブレークポイントを貼って、画面を操作するとブレークポイントが動きます。  



## 学んだこと

### npmでモジュール管理
本番用と開発用
| 環境              | コマンド                   |
| --------------- | ---------------------- |
| dependencies    | npm install --save     |
| devDependencies | npm install --save-dev |

### モジュールのコマンド(webpackとか)を実行する方法
```sh
npx webpack
```

<br>

### Webpackをとりあえず動かす方法
WebPackを使ってとりあえずビルドしたい時はこの２つをinstallすればOKです。  
```json
  "devDependencies": {
    "webpack": "^4.44.1",
    "webpack-cli": "3.3.12",
  }
```

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

[package.json](package.json) にビルドを定義します。  
```json
  "scripts": {
    "build": "webpack --config webpack.config.js"
  }
```

その後  
```
npm run build
```

上記の例だと、HTMLに以下の記述をしておけば上記でビルドした```main.js```を呼び出すことができます。  
HTMLへのjsの差し込みをwebpackは自動でやってくれません。  
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
WebpackでWebサーバを立ち上げて作成したHTMLを確認するには以下が必要です。
```json
  "devDependencies": {
    "webpack-dev-server": "^3.11.0"
  }
```

```webpack.config.js``` にこちらを定義します。  
```
module.exports = {
  devServer: {
      contentBase: './docs'  // Webサーバ起動時にどのファイルを参照するかの設定です。
  },
}
```

```package.json``` に開始コマンドを定義します。これで ```npm start```を実行するとWebサーバが立ち上がります。  
src配下（ビルド前のファイル）を更新すると即時反映されますが、これはメモリ展開されたものを見ているだけなので、docに出力するにはビルドを行う必要があります。  
```json
  "scripts": {
    "start": "webpack-dev-server --open",
  },
```

<br>

### CSSを読み込む方法
CSSを読み込んでJS内で使用するだけであれば、```webpack.config.js``` にこちらを定義します。  
ただし、これだとHTMLからCSSが参照されないので、HTMLを使うのであればCSSをdocフォルダ配下に出力する必要があります。  
しかしwebpackの標準機能ではCSSの出力機能がないのでそれについてはプラグインを使っていきます。  
具体的な使い方はこの後に記述します「CSSをアウトプットする方法」を参照して下さい。
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
         'style-loader',
         'css-loader'
        ]
      },
```

上述の設定だけでは不足していて、
エントリポイントの[/index.js](./src/js/index.js)で、以下の記述のようにCSSimportして初めてCSSを参照することが可能になります。  
```javascript
import '../css/style.css';
```

<br>

### CSSをアウトプットする方法
CSSをアウトプットするには、まずは```mini-css-extract-plugin```というプラグインが必要になります。  
```json
  "devDependencies": {
    "mini-css-extract-plugin": "^1.3.1",
  }
```

上記をインストール後、```webpack.config.js```に以下のように設定します。  
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

CSSをアウトプットしても[/index.js](./src/js/index.js)で、以下の記述の記述は必要です。  
```
import '../css/style.css';
```

<br>

### 画像をアウトプットする方法
画像のアウトプットは簡単です。  
npmでまずは以下をインストールします。  
```
"url-loader": "^4.1.1",
```

その後、以下の設定を```webpack.config.js```に追加すればOKです。ビルド時に```docs```配下に画像が出力されます。  
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

### HTMLをアウトプットする方法
HTMLをアウトプットするには、プラグインが必要です。  
まずは以下の２つをnpmでインストールします。  
```
"html-loader": "^1.3.2",
"html-webpack-plugin": "^4.5.0",
```

その後、以下の設定を```webpack.config.js```に追加すればOKです。ビルド時に```docs```配下にHTMLが出力されます。このHTMLにはJSやCSSのパスが自動で含まれます。  
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
      template: "./src/html/index.html"
    }),
  ],
```

<br>

### Sassを使う方法
[コチラ](http://vistylee.com/webpack-sass-css/) を参考にしました。
```
npm install sass-loader sass 
```

```webpack.config.js```に以下を追加します。
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

[/index.js](./src/js/index.js)で、以下の記述をします。  
```
import "../css/style.scss";
```

<br>

### Sass でnpmモジュールのCSSを使う方法
[style.scss](./src/css/style.scss)で、以下の記述をします。  
```sass
@import "~animate.css";
```

上記は、animate.css を使った令です。こちらのモジュールを使うには以下でインストールする必要があります。
```
npm install animate.css --save
```

<br>

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

## ローカルでの実行方法
ブラウザで動かす方法を説明します。

### 必要なアプリケーション
```Node.js```

### 実行
ローカル環境でwebサーバを立ち上げて実行する方法です。  
```
npm start
```

### ビルド
```dist```フォルダ配下にHTMLファイルとJavaScriptが生成されます。
```
npm run build
```

<br>

## 参考にしたサイト
[HTMLファイルをdist配下に出力する方法](https://ema-hiro.hatenablog.com/entry/2017/10/12/015748)  
[画像をoutputする方法](https://note.com/koki_nagai/n/n5a637b6b727d)  
