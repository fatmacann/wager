const path = require('path')
const htmlWebPack = require('html-webpack-plugin')

const htmlWebPackConfig = new htmlWebPack({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = ({ mode } = { mode: 'production' }) => {
  console.log('mode:', mode)

  return {
    mode,
    entry: './src/index.js',
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [htmlWebPackConfig]
  }
}
