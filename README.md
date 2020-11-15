# learning-npm
npm/webpack/babel の学習用リポジトリです。  

# Demo
[デモ](https://fukugit.github.io/learning-npm)  

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

