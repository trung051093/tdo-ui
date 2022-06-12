// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withTM = require('next-transpile-modules')(['react-scroll-section']);
const nextTranslate = require('next-translate')

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // images: {
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 500, 760, 920, 1080],
  //   formats: ['image/webp'],
  // },
};

module.exports = withTM(withNx(nextTranslate(nextConfig)));
