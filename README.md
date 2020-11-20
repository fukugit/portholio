# learning-npm
npm/webpack の学習用リポジトリです。  

# Demo
[デモ](https://fukugit.github.io/learning-npm)  

## 学んだこと

### npmでモジュール管理
npmでモジュール管理するのに、本番でも利用するモジュールと開発時でしか利用しないモジュールの使い分けは以下のようにしてインストールします。  
こちらは本番でも利用するモジュールのインストール方法です。  
以下を実行後に```package.json```の```dependencies```に追記されます。
```
npm install --save
```
以下を実行後に```package.json```の```devDependencies```に追記されます。
```
npm install --save-dev
```
  
  
### モジュールのコマンド(webpackとか)を実行する方法
```
npx webpack
```

### Webpackをとりあえず動かす方法
WebPackを使ってとりあえずビルドしたい時はこの２つをinstallすればOKです。  
```
  "devDependencies": {
    "webpack": "^4.44.1",
    "webpack-cli": "3.3.12",
  }
```

```webpack.config.js``` にこちらを定義します。  
内容はエントリポイントとなるJavaScriptファイルとビルド出力先の２つになります。  
```
module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
      path: `${__dirname}/docs`,
      filename: 'main.js'
  },
}
```

```package.json``` にビルドを定義します。これで ```npm run build```を実行するとビルド出力先にJavaScriptが出力されます。  
```
  "scripts": {
    "build": "webpack --config webpack.config.js"
  }
```

### WebPackのWebサーバを利用する方法
WebpackでWebサーバを立ち上げて作成したHTMLを確認するには以下が必要です。
```
  "devDependencies": {
    "webpack-dev-server": "^3.11.0"
  }
```

```webpack.config.js``` にこちらを定義します。  
Webサーバ起動時にどのファイルを参照するかの設定です。  
```
module.exports = {
  devServer: {
      contentBase: './docs'
  },
}
```

```package.json``` に開始コマンドを定義します。これで ```npm start```を実行するとWebサーバが立ち上がります。  
src配下（ビルド前のファイル）を更新すると即時反映されますが、これはメモリ展開されたものを見ているだけなので、docに出力するにはビルドを行う必要があります。  
```
  "scripts": {
    "start": "webpack-dev-server --open",
  },
```

### CSSを読み込む方法
CSSを読み込んでJS内で使用するだけであれば、```webpack.config.js``` にこちらを定義します。  
ただし、正直これだとHTMLからCSSが参照されないので、HTMLを使うのであればCSSも出力する必要があります。  
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
      },,
```

### CSSをアウトプットする方法
```mini-css-extract-plugin``` 
### 画像をアウトプットする方法




## このプロジェクトの構成  

| ファイル                                         | 概要                     |
| -------------------------------------------- | ---------------------- |
| [webpack.config.js](./webpack.config.js)     | Webpackの設定ファイル         |
| [package.json](./package.json)               | npm設定ファイル              |
| [src/html/index.html](./src/html/index.html) | ビルド後にdistに出力されます。      |
| [src/js/index.js](./src/js/index.js)         | WebPackのエントリポイント       |
| [src/js/main.js](./src/js/main.js)           | JSのメイン処理               |
| [src/js/timer.js](./src/js/timer.js)         | メイン処理からimportされる関数・クラス |


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

## 参考にしたサイト
[HTMLファイルをdist配下に出力する方法](https://ema-hiro.hatenablog.com/entry/2017/10/12/015748)  
[画像をoutputする方法](https://note.com/koki_nagai/n/n5a637b6b727d)  
