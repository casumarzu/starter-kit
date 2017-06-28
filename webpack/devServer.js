// import path from 'path'
// import express from 'express'
// import webpack from 'webpack'
// // import webpackDevMiddleware from 'webpack-dev-middleware'
// // import webpackHotMiddleware from 'webpack-hot-middleware'
// import webpackDevServer from 'webpack-dev-server'
// import proxyMiddleware from 'http-proxy-middleware'
// import webpackConfig from '../webpack.config.babel.js'
// const PORT = 8080
//
// const app = express()
// const compiler = webpack(webpackConfig)
//
// // app.use(webpackDevMiddleware(compiler, {
// //   publicPath: '/',
// //   hot: true,
// //   contentBase: path.join(__dirname, './src'),
// //   stats: {
// //     colors: true,
// //     chunks: false,
// //     'errors-only': true
// //   }
// // }))
// //
// // app.use(webpackHotMiddleware(compiler))
//
// // app.use('/api', proxyMiddleware({
// //   target: 'https://jsonplaceholder.typicode.com',
// //   changeOrigin: true,
// //   ws: true,
// //   pathRewrite: {
// //     '^/api/' : '',
// //   }
// // }))
//
// const devServerOptions = {
//   contentBase: path.join(__dirname, '../src'),
//   hot: true,
//   inline: true,
//   quiet: false,
//   noInfo: false,
//   stats: {
//     colors: true,
//     chunks: false,
//   },
//   compress: true,
//   port: PORT,
//   historyApiFallback: true,
//   watchOptions: {
//     aggregateTimeout: 200,
//   },
//   proxy: {},
// }
//
// const frontDevServer = new webpackDevServer(
//   webpack(webpackConfig),
//   devServerOptions
// )
//
// const HOST = '0.0.0.0'
// frontDevServer.listen(PORT, HOST, () => {
// 	console.log(`${key('Front-End Server:')} ${value(`http://${HOST}:${PORT}`)}`);
// });
//
// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}!`)
// });


import webpack from 'webpack'
import config from '../webpack.config.babel'
import WebpackDevServer from 'webpack-dev-server'
const PORT = 8080
const HOST = 'localhost'

const server = new WebpackDevServer(webpack(config), {
  contentBase: './src',
  hot: true,
  quiet: false,
  historyApiFallback: true,
  proxy: {
    '/api/**': {
      target: {
        host: 'jsonplaceholder.typicode.com',
        protocol: 'https:',
        path: '/',
        secure: false,
        port: 80
      },
      pathRewrite: { '/api' : '' },
      changeOrigin: true,
      secure: false
    },
  },
  stats: {
    colors: true,
    progress: true
  }
});

server.listen(PORT, HOST, (err, result) => {
  if (err) console.log(err)

  console.log(`Listening at localhost: ${PORT}`)
})
