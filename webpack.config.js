const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devServer: {
    // The application may request static, non compiled assets. If these exist
    // they will be located in this directory. There seems to be multiple solutions
    // to this, like with the copy-webpack-plugin, but this seems to be the best
    // solution for the dev-server "build" since it prevents unnecessary copying.
    contentBase: path.join(__dirname, 'static'),
    hot: true,
  },
  devtool: 'inline-source-map',
  entry: path.join(__dirname, 'src/apps/achievements/index.js'),
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
    new CopyPlugin([
      {from: path.join(__dirname, 'static'), to: path.join(__dirname, 'dist')},
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/assets/index.html'),
    }),
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
