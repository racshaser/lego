const isDebug = !process.argv.includes('--release');

const minimizeCssOptions = {
  discardComments: { removeAll: true },
};

module.exports = () => ({
  plugins: [
    require('autoprefixer')(),
    ...(isDebug
      ? []
      : [
        require('cssnano')({
          preset: ['default', minimizeCssOptions],
        }),
      ]),
  ],
});
