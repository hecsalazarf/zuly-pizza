// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify/lib'
import { headerAttrs } from '~/meta'
import '~/scss/main.scss'

export default function (Vue, { router, appOptions, head, isClient }) {
  head.htmlAttrs = { lang: 'es-MX' }
  head.meta.push(...headerAttrs)
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify({
    icons: {
      iconfont: 'fa'
    },
    lang: {
      current: 'es'
    },
    theme: {
      dark: false,
      default: 'light',
      options: {
        cspNonce: undefined,
        customProperties: undefined,
        minifyTheme: undefined,
        themeCache: undefined
      },
      themes: {
        light: {
          primary: '#D08800',
          secondary: '#D22509',
          accent: '#661706',
          body: 'F6EEC9',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        }
      }
    }
  })
}
