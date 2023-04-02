const withSvgr = require('next-svgr');
const { i18n } = require('./next-i18next.config');

const nextConfig = {
  i18n,
};

module.exports = withSvgr(nextConfig);
