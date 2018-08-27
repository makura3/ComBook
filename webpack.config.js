const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development', //webpack4〜
  entry: ['./src/main.js'],
  output: {
    filename: 'app.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true
            }
          },
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, './src/assets/scss/_variables.scss'),
                path.resolve(__dirname, './src/assets/scss/_mixin.scss')
              ]
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/assets/images')
    }
  },
  plugins: [new VueLoaderPlugin()]
}
