import path from 'path'
const NODE_ENV = process.env.NODE_ENV

const babelRule = { test: /\.js?$|\.jsx?$/, use: [ 'babel-loader' ] }
const cssRule   = { test: /\.css$/, use: [ 'style-loader', 'css-loader', 'postcss-loader'] }
const imageRule = { test: /\.(png|svg|jpg|gif)$/, use: [ 'file-loader' ] }
const fontRule  = { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] }
const csvRule   = { test: /\.(csv|tsv)$/, use: 'csv-loader' }
const xmlRule   = { test: /\.xml$/, use: 'xml-loader' }
const eslint    = { 
  test: /\.js$/,
  loader: 'eslint-loader',
  options: {
    emitError: false,
    emitWarning: false,
    quiet: false,
    failOnWarning: false,
    failOnError: false,
  },
  enforce: 'pre',
  include: [ path.resolve(__dirname, '../src')]
}

const rules = [ cssRule, babelRule, eslint, imageRule, fontRule, csvRule, xmlRule ]

export default rules
