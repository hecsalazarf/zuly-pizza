// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const merge = require('webpack-merge')

module.exports = {
  siteName: 'Gridsome',
  plugins: [],
  configureWebpack (config) {
    return merge({
      plugins: [
        new VuetifyLoaderPlugin()
      ]
    }, config)
  },
  port: 8082
}
