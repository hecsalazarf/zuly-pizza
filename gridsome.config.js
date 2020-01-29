// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const merge = require('webpack-merge')

module.exports = {
  siteName: 'Zuly Pizza',
  siteUrl: 'https://zuly.pizza',
  siteDescription: 'Hacemos pizzas, las mejores de la huasteca hidalguense. Envíos a domicilio. Te esperamos en Atlapexco, Hidalgo. Descrubre nuestras promociones. Pizzas elaboradas con ingredientes de calidad.',
  metadata: {
    themeColor: '#44A573',
    locales: ['es_MX', 'es'],
    ogType: 'website',
    ogImage: '/imgages/icons/icon-325.png'
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
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/promotions/**/*.json',
        typeName: 'Promotion'
      }
    }
  ],
  chainWebpack (chain) {
    // console.log(chain.module.rules.get('images'))
    // Override default configuration to save images in the same directory
    // that Gridsome uses
    chain.module
      .rule('images')
      .use('url-loader')
      .tap(options => ({
        limit: 5000,
        name (file) {
          if (process.env.NODE_ENV === 'development') {
            return '[path][name].[ext]'
          }

          return 'assets/static/[name].[hash].[ext]'
        }
      }))
  },
  configureWebpack (config) {
    return merge({
      plugins: [
        new VuetifyLoaderPlugin()
      ]
    }, config)
  },
  transpileDependencies: ['vuetify'], // Transpile Vuetify to support old browsers
  css: {
    loaderOptions: {
      sass: {
        data: "@import 'src/scss/vuetify_vars.scss'" // Override vuetify sass variables
      }
    }
  },
  port: 8082
}
