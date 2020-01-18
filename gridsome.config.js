// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const merge = require('webpack-merge')
const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://www.gridsome.org',
  siteDescription: 'Una descripción del sitio',
  metadata: {
    themeColor: '#00594f'
  },
  plugins: [],
  configureWebpack (config) {
    return merge({
      plugins: [
        new VuetifyLoaderPlugin(),
        new GenerateSW({
          // For an unknown reason, the precache manifest contains an aditional style.js file,
          // which is not in the final bundle. We exclude this file directly
          exclude: [/styles\..*\.js$/],
          skipWaiting: true,
          cleanupOutdatedCaches: true,
          cacheId: 'assets',
          clientsClaim: true,
          runtimeCaching: [{
            urlPattern: /\.(?:png|jpg|jpeg|svg|mp4)$/,
            handler: 'StaleWhileRevalidate',
            options: {
              // networkTimeoutSeconds: 5, // Only for NetworkFirst strategy
              cacheName: 'media',
              expiration: {
                maxEntries: '30'
              }
            }
          }]
        })
      ]
    }, config)
  },
  css: {
    loaderOptions: {
      sass: {
        data: "@import 'src/scss/vuetify_vars.scss'" // Override vuetify sass variables
      }
    }
  },
  port: 8082
}
