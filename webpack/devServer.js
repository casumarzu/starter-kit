import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import proxyMiddleware from 'http-proxy-middleware'
import webpackConfig from '../webpack.config.babel.js'
const PORT = 8080

const app = express()
const compiler = webpack(webpackConfig)


// import Dashboard from 'webpack-dashboard'
// import DashboardPlugin from 'webpack-dashboard/plugin'
//
// const dashboard = new Dashboard()
// compiler.apply(new DashboardPlugin(dashboard.setData))

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  contentBase: path.join(__dirname, 'src'),
  hot: true,
  quiet: false,
  historyApiFallback: true,
  https: true,
  progress: true
}))

app.use('/api', proxyMiddleware({
  target: 'https://jsonplaceholder.typicode.com',
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/api/' : '',
    }
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 2000
}))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
});
