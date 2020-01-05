const pkg = require('../package.json');

const isDebug = !process.argv.includes('--release');

const minimizeCssOptions = {
  discardComments: { removeAll: true },
};

module.exports = () => ({
  plugins: [
    require('autoprefixer')({
      browsers: pkg.browserslist,
    }),
    ...(isDebug
      ? []
      : [
        require('cssnano')({
          preset: ['default', minimizeCssOptions],
        }),
      ]),
  ],
});
