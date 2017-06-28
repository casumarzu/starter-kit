import path from 'path'
import webpack from 'webpack'

import vendor from './webpack/vendor'
import rules from './webpack/rules'
import plugins from './webpack/plugins'
import alias from './webpack/alias'

const HOST = 'localhost'
const PORT = 8080
const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'

// const hotMiddlewareScript = 'webpack-hot-middleware/client?path=__webpack_hmr&reload=true'

const app = ['./src/scripts/index.js']

// if(isDev) app.unshift(hotMiddlewareScript)

if(isDev) {
  app.unshift(`webpack-dev-server/client?http://${HOST}:${PORT}`)
  app.unshift('react-hot-loader/patch')
  // app.unshift('webpack/hot/only-dev-server')
}

export default {
  entry: { app, vendor },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.[hash].js'
  },
  resolve: { alias },
  plugins,
  module: { rules }
}
