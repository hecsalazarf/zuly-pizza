// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  siteName: 'Zuly Pizza',
  siteUrl: 'https://zuly.pizza',
  siteDescription: 'Hacemos pizzas, las mejores de la huasteca hidalguense. Envíos a domicilio. Te esperamos en Atlapexco, Hidalgo. Descrubre nuestras promociones. Pizzas elaboradas con ingredientes de calidad.',
  pathPrefix: '/demos/zuly-pizza',
  metadata: {
    themeColor: '#44A573',
    locales: ['es-mx', 'es'],
    ogType: 'website',
    ogImage: 'src/assets/img/icon_325x325.png'
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
    // console.log(chain.toString())

    // Sass options were moved inside sassOptions in sass-loader v8.0.0
    // Gridsome v0.7.0 does not support the new schema
    // To overcome this issue, we delete the indentedSyntax prop, so that
    // sass-loader does not display an error of unknown properties
    // https://github.com/gridsome/gridsome/issues/750
    chain.module
      .rule('sass')
      .oneOf('modules')
      .use('sass-loader')
      .tap(options => {
        delete options.indentedSyntax
        return options
      })

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

    chain.plugin('vuetify-loader')
      .use(VuetifyLoaderPlugin)
  },
  transpileDependencies: ['vuetify'], // Transpile Vuetify to support old browsers
  css: {
    loaderOptions: {
      sass: {
        additionalData: "@import 'src/scss/vuetify_vars.scss'", // Override vuetify sass variables
        // Sass options were moved inside sassOptions in sass-loader v8.0.0
        // Gridsome v0.7.0 does not support the new schema
        // To overcome this issue, we set options in here
        sassOptions: {
          indentedSyntax: true
        }
      }
    }
  },
  port: 8082
}
