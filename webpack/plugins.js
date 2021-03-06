import path from 'path'
import webpack, {
  optimize,
  HotModuleReplacementPlugin,
  NoEmitOnErrorsPlugin,
  ProgressPlugin,
  DefinePlugin,
  LoaderOptionsPlugin,
  SourceMapDevToolPlugin
} from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import NpmInstallPlugin from 'npm-install-webpack2-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import StyleLintPlugin from 'stylelint-webpack-plugin'
import colors from 'colors'
import chalk from 'chalk'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import postcss from './postcss'

const {
  OccurenceOrderPlugin,
  UglifyJsPlugin,
  CommonsChunkPlugin
} = optimize
const {NODE_ENV} = process.env
const title = '🚀Starter-kit'

const Html = new HtmlWebpackPlugin({
  title: NODE_ENV === 'production' ? title : `Dev ${title}`,
  filename: 'index.html',
  favicon: path.join(__dirname, '../', 'src', 'favicon.ico'),
  template: path.join(__dirname, '../', 'src', '/templates/index.html'),
  chunks: ['app', 'vendor']
})

const Progress = new ProgressBarPlugin({
  format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',
  clear: false
})

const Define = new DefinePlugin({
  'process.env':{
    'NODE_ENV': JSON.stringify(NODE_ENV)
  }
})

const Loader = new LoaderOptionsPlugin({
  minimize: true,
  debug: false,
  options: { postcss }
})

const Chunks = new CommonsChunkPlugin({
  name: "vendor",
  filename: "vendor.[hash].js",
  // async: true,
})

const StylLint = new StyleLintPlugin({
  configFile: '.stylelintrc',
  context: path.join(__dirname, '../', 'src'),
  files: '**/*.css',
  failOnError: false
})

const BundleAnalyzer = new BundleAnalyzerPlugin({
  analyzerMode: 'server',
  analyzerHost: '127.0.0.1',
  analyzerPort: 8888,
  reportFilename: 'report.html',
  defaultSizes: 'parsed',
  openAnalyzer: true,
  generateStatsFile: false,
  statsFilename: 'stats.json',
  statsOptions: null,
  logLevel: 'info'
})

const SourceMap = new SourceMapDevToolPlugin()

const plugins = [
  Html,
  Loader,
  Progress,
  Define,
  Chunks,
  StylLint,
  SourceMap
]

const devPlugins = [
  new HotModuleReplacementPlugin(),
  new NoEmitOnErrorsPlugin(),
  // BundleAnalyzer,
  // new NpmInstallPlugin(),
  // new ExtractTextPlugin(),
  // new OccurenceOrderPlugin(),
]

const prodPlugins = [
  // new ExtractTextPlugin('bundle.[hash].css', { allChunks: true }),
  new UglifyJsPlugin({compressor: { warnings: false }}),
  // new OccurenceOrderPlugin(),
]

export default plugins.concat(NODE_ENV === 'production' ? prodPlugins : devPlugins)
