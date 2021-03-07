const withPWA = require('next-pwa'); // eslint-disable-line no-alert
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
});
