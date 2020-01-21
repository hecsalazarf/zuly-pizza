// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const merge = require('webpack-merge')

module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://www.gridsome.org',
  siteDescription: 'Una descripción del sitio',
  metadata: {
    themeColor: '#00594f'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/organization.json',
        typeName: 'Organization'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/products/**/*.json',
        typeName: 'Product'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/services/**/*.json',
        typeName: 'Service'
      }
    }
  ],
  configureWebpack (config) {
    return merge({
      plugins: [
        new VuetifyLoaderPlugin()
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
