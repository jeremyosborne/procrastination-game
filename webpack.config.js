const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

// Have more `BUILD_TYPE`s? Add them here. The config must also be made to support them.
const SUPPORTED_BUILD_TYPES = ['development', 'production'].reduce((types, t) => {
  types[t] = t
  return types
}, {})
const SUPPORTED_BUILD_TYPES_DEFAULT = 'production'

module.exports = (env, argv) => {
  // Prevent cwd problems by anchoring everything from the location of the webpack file.
  const ROOT_DIR = path.resolve(__dirname)

  //
  // debug or optimized builds?
  //
  let buildType = SUPPORTED_BUILD_TYPES[process.env.BUILD_TYPE]
  if (process.env.BUILD_TYPE && !buildType) {
    throw new Error(`Passed unknown BUILD_TYPE of ${process.env.BUILD_TYPE}. Please use one of the supported types of: ${Object.keys(SUPPORTED_BUILD_TYPES.join(', '))}.`)
  } else if (!buildType) {
    // not passing a build type is fine.
    buildType = SUPPORTED_BUILD_TYPES_DEFAULT
  }
  console.log('Using buildType:', buildType)

  // Used in multiple spots. Allows reference within partials to the
  const htmlWebpackPlugin = {
    filename: 'index.html',
    template: path.join(ROOT_DIR, 'src/html/index.html'),
  }

  return {
    devServer: {
      // The application may request static, non compiled assets. If these exist
      // they will be located in this directory. There seems to be multiple solutions
      // to this, like with the copy-webpack-plugin, but this seems to be the best
      // solution for the dev-server "build" since it prevents unnecessary copying.
      contentBase: path.join(__dirname, 'static'),
      hot: true,
    },
    devtool: 'eval-source-map', // static output: source-map
    entry: path.join(ROOT_DIR, 'src/apps/main.js'),
    // For now, let webpack do a lot of the work for us since our buildTypes match theirs.
    mode: buildType,
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
        // Originally included to experiment with passing vars down to partials.
        // Un-included for now due to awkwardness and a need to just move on
        // since the amount of content on this site will always be minimal.
        // {
        //   test: /\.html$/,
        //   use: [
        //     {
        //       loader: 'html-loader',
        //       options: {
        //         interpolate: true
        //       },
        //     }
        //   ]
        // },
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
      chunkFilename: '[name].chunk.js',
      filename: '[name].js',
      path: path.resolve(ROOT_DIR, 'dist'),
      // If you change this, you better check the HTML template hrefs for anything
      // that assumes publicPath to be what it is, like the site-header.
      publicPath: '/',
    },
    plugins: [
      new CopyPlugin([
        {
          from: path.join(ROOT_DIR, 'static'),
          to: path.join(ROOT_DIR, 'dist')
        },
      ]),
      new HtmlWebpackPlugin(htmlWebpackPlugin),
    ],
    resolve: {
      // options for resolving module requests
      // (does not apply to resolving to loaders)
      modules: [
        'node_modules',
        path.resolve(ROOT_DIR, 'src/apps'),
        path.resolve(ROOT_DIR, 'src'),
      ],
      // directories where to look for modules
      extensions: [
        '.js',
        '.json',
        '.jsx',
        '.css',
      ],
    },
  }
}
