// module.exports = {
//   reactStrictMode: true,
//   i18n: {
//     locales: ['en', 'es', 'fr'],
//     defaultLocale: 'en',
//   },
// };

module.exports = {
  i18n: {
    locales: ['en', 'sr'],
    defaultLocale: 'en',
  },

  async rewrites() {
    return [
      {
        source: '/passengers/:path', // automatically handles all locales
        destination: '/putnici/:path', // automatically passes the locale on
      },
      // {
      //   // does not handle locales automatically since locale: false is set
      //   source: '/nl/with-locale-manual',
      //   destination: '/nl/another',
      //   locale: false,
      // },
      // {
      //   // this matches '/' since `en` is the defaultLocale
      //   source: '/en',
      //   destination: '/en/another',
      //   locale: false,
      // },
      // {
      //   // this gets converted to /(en|fr|de)/(.*) so will not match the top-level
      //   // `/` or `/fr` routes like /:path* would
      //   source: '/(.*)',
      //   destination: '/another',
      // },
    ];
  },
};
