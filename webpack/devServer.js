import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
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
  quiet: true
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 2000
}))

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`)
});
