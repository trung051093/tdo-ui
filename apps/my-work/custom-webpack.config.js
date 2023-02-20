// Helper for combining webpack config objects
const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = (config, context) => {
  return merge(config, {
    // overwrite values here
    node: { global: true }, // Fix: "Uncaught ReferenceError: global is not defined"
    plugins: [
      // Work around for Buffer is undefined:
      // https://github.com/webpack/changelog-v5/issues/10
      new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
      }),
      new webpack.ProvidePlugin({
          process: 'process/browser',
      }),
  ],
  });
};
