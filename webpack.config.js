const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  devtool: 'inline-source-map',
  entry: './src/apps/achievements/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              // Due to https://github.com/postcss/postcss-loader/issues/204#issuecomment-380885660
              // don't use external config, it seems duplicate work.
              plugins: [
                require('autoprefixer'),
              ]
            }
          }
        ],
      },
      {
        test: /\.jsx?$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  output: {
    filename: 'achievements-main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'static/index.html',
    })
  ],
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src/apps'),
      path.resolve(__dirname, 'src'),
    ],
    // directories where to look for modules
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
}
