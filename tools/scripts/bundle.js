import webpack from 'webpack';
import clientConfig from '../webpack/webpack.client.config';
import serverConfig from '../webpack/webpack.server.config';

const webpackConfig = [clientConfig, serverConfig];

/**
 * Creates application bundles from the source files.
 */
function bundle() {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        return reject(err);
      }

      console.info(stats.toString(webpackConfig[0].stats));
      if (stats.hasErrors()) {
        return reject(new Error('Webpack compilation errors'));
      }

      return resolve();
    });
  });
}

export default bundle;
