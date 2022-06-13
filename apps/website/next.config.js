const withTM = require("next-transpile-modules")(['library']);
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

module.exports = withTM({
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  }
});
