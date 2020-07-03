const withCSS = require('@zeit/next-css')
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin")
module.exports = withCSS({
  webpack(config, options) {
    config.plugins.push(new ImageminWebpWebpackPlugin())
    return config
  }
})
