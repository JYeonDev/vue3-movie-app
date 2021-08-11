// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

// export
module.exports = {
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '~': path.resolve(__dirname, 'src'), // 현재 경로에서 현재프로젝트에서 사용하는 파일들이 모여 있는 경로
      'assets': path.resolve(__dirname, 'src/assets') // 실제이미지가 있는 경로
    }
  },
  // 파일을 읽어들이기 시작하는 진입점 설정
  // parcel index.html  유사
  entry: './src/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // 절대 경로 명시
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/, // vue라는 확장자를 가진 폴더는 해당규칙을 통해 걸러진다.
        use: 'vue-loader' // 연결할 로더가 하나뿐이라면 [] 배열은 생략이 가능하다.
      },
      {
        test: /\.s?css$/,
        use: [
          // 순서 중요
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },
  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin()
  ],

  // 개발 서버 옵션
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true
  }
}