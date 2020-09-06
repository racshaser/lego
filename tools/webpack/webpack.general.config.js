import path from 'path';
import pkg from '../../package.json';

export const ROOT_DIR = path.resolve(__dirname, '../..');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);
export const SRC_DIR = resolvePath('src');
export const BUILD_DIR = resolvePath('build');

export const REGULAR = {
  script: /\.(js|jsx|mjs|ejs)$/,
  style:  /\.(css|less|styl|scss|sass|sss)$/,
  image: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
};

export const isDebug = !process.argv.includes('--release');
export const isVerbose = process.argv.includes('--verbose');

const staticAssetName = isDebug
  ? '[path][name].[ext]?[hash:8]'
  : '[hash:8].[ext]';

export const config = {
  context: ROOT_DIR,

  mode: isDebug ? 'development' : 'production',

  output: {
    path: resolvePath(BUILD_DIR, 'public/assets'),
    publicPath: '/assets/',
    pathinfo: isVerbose,
    filename: isDebug ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDebug
      ? '[name].chunk.js'
      : '[name].[chunkhash:8].chunk.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },

  resolve: {
    modules: ['node_modules', 'src'],
  },

  module: {
    strictExportPresence: true,

    rules: [
      //
      // Scripts rules
      // -----------------------------------------------------------------------
      {
        test: REGULAR.script,
        include: [SRC_DIR, resolvePath('tools')],
        loader: 'babel-loader',
        options: {
          cacheDirectory: isDebug,
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              {
                forceAllTransforms: !isDebug,
                modules: false,
                useBuiltIns: false,
                debug: false,
              },
            ],
            ['@babel/preset-react', { development: isDebug }],
          ],
          plugins: [
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-syntax-dynamic-import',
            // Remove PropTypes in Production mode
            ...(isDebug ? [] : ['transform-react-remove-prop-types']),
          ],
        },
      },
      //
      // Styles rules
      // -----------------------------------------------------------------------
      {
        test: REGULAR.style,
        rules: [
          {
            issuer: { not: [REGULAR.style] },
            use: 'isomorphic-style-loader',
          },
          {
            exclude: SRC_DIR,
            loader: 'css-loader',
            options: {
              sourceMap: isDebug,
            },
          },
          {
            include: SRC_DIR,
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: isDebug,
              modules: {
                localIdentName: isDebug
                  ? '[name]-[local]-[hash:base64:5]'
                  : '[hash:base64:5]',
              },
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './tools/postcss.config.js',
              },
            },
          },
        ],
      },
      //
      // Images rules
      // -----------------------------------------------------------------------
      {
        test: REGULAR.image,
        oneOf: [
          // Inline lightweight images into CSS
          {
            issuer: REGULAR.style,
            oneOf: [
              {
                test: /\.svg$/,
                loader: 'svg-url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },
              {
                loader: 'url-loader',
                options: {
                  name: staticAssetName,
                  limit: 4096, // 4kb
                },
              },
            ],
          },
          {
            loader: 'file-loader',
            options: {
              name: staticAssetName,
            },
          },
        ],
      },
      //
      // Return public URL for all other files that not explicitly excluded
      // -----------------------------------------------------------------------
      {
        exclude: [REGULAR.script, REGULAR.style, REGULAR.image, /\.json$/],
        loader: 'file-loader',
        options: {
          name: staticAssetName,
        },
      },
    ],
  },

  // Reject on first error instead of tolerating it (due bundling)
  bail: !isDebug,
  cache: isDebug,

  // Specify what bundle information gets displayed
  // https://webpack.js.org/configuration/stats/
  stats: {
    cached: isVerbose,
    cachedAssets: isVerbose,
    chunks: isVerbose,
    chunkModules: isVerbose,
    colors: true,
    hash: isVerbose,
    modules: isVerbose,
    reasons: isDebug,
    timings: true,
    version: isVerbose,
  },

  // Choose a developer tool to enhance debugging
  // https://webpack.js.org/configuration/devtool/#devtool
  devtool: isDebug ? 'cheap-module-inline-source-map' : 'source-map',
};

export default {
  config,
  REGULAR,
  ROOT_DIR,
  BUILD_DIR,
  isDebug
};
