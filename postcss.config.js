module.exports = {
  // parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: 'last 2 versions',
      warnForDuplicates: false,
      features: {
        autoprefixer: {
          remove: false
        }
      }
    },
    'cssnano': {},
    'precss': {},
    'postcss-sorting': {},
    'postcss-utilities': {},
    'postcss-short': {},

    'postcss-assets': {},
    'postcss-sprites': {},
    'postcss-font-magician': {},
    'postcss-inline-svg': {},
    'postcss-write-svg': {},

    'stylefmt': {},
    'doiuse': {},
    'colorguard': {},
    'postcss-reporter': {},
    'postcss-browser-reporter': {},

    'rucksack-css': {},
    'cssnano': {},
    'postcss-import': {},

    // 'postcss-use': {},
    // 'postcss-modules': {},
    'react-css-modules': {},
  }
}
