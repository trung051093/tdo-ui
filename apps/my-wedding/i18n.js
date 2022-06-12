module.exports = {
  locales: ['vn', 'en'],
  defaultLocale: 'vn',
  pages: {
    '*': ['common'],
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: (locale, namespace) =>
    import(`./public/locales/${locale}/${namespace}`).then((m) => m.default),
};
