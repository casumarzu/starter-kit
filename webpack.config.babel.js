import path from 'path'
import webpack from 'webpack'

import rules from './webpack/rules'
import plugins from './webpack/plugins'
import alias from './webpack/alias'

const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'

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

const app = ['./src/scripts/index.js']

if(isDev) app.unshift(hotMiddlewareScript)

export default {
  entry: { app, vendor },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.[hash].js'
  },
  resolve: {
    alias,
    // extensions: ['', '.js', '.css'],
    // root: path.resolve(__dirname, 'src'),
    // modulesDirectories: ['node_modules']
  },
  plugins,
  module: { rules },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};
