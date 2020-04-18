const path = require('path');

module.exports = {
  //モード値に設定したモードに最適化されたJSファイルが出力される
  mode: 'development',

  //エントリーポイント
  entry: './ts/index.ts',

  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },

  module: {
    rules: [{
      //拡張子.tsの場合
      test: /\.ts$/,
      //TypeScriptをコンパイル
      use: 'ts-loader'
    }]
  },

  //import文で.tsファイルを解決
  resolve: {
    modules: [
      "node_modules",
    ],
    extensions: [
      '.ts',
      '.js'
    ]
  }
};