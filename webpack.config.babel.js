import path from 'path'
import webpack from 'webpack'

import rules from './webpack/rules'
import plugins from './webpack/plugins'
// import postcss from './webpack/postcss'
// import alias from './webpack/alias'

const NODE_ENV = process.env.NODE_ENV

const vendor = [
  'react',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux',
  // 'redux-devtools',
  // 'redux-devtools',
  // 'redux-devtools-dock-monitor',
  'redux-saga',
  'redux-form',
  'babel-polyfill',
  'whatwg-fetch'
]

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

export default {
  entry: {
    app: [hotMiddlewareScript, './src/scripts/index.js'],
    // app: ['./src/scripts/index.js'],
    vendor
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.[hash].js'
  },
  // resolve: {
  //   extensions: ['', '.js', '.css'],
  //   alias,
  //   root: path.resolve(__dirname, 'src'),
  //   modulesDirectories: ['node_modules']
  // },
  plugins,
  module: { rules },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  // devtool: 'cheap-module-eval-source-map'
};
