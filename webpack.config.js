const path = require('path')

const resolve = (dir) => {
  return path.join(process.cwd(), dir)
}

module.exports = {
  mode: 'production',
  entry: resolve('src/index.js'),
  output: {
    path: resolve('dist'),
    filename: 'library.js',
    // 不定义则默认为导出的变量名
    // library: 'globalName',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: 'babel-loader'
      }
    ]
  }
}
