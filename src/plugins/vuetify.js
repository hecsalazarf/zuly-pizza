import Vuetify from 'vuetify/lib'
import es from 'vuetify/es5/locale/es'

export default function (Vue) {
  Vue.use(Vuetify)
  return new Vuetify({
    icons: {
      iconfont: 'fa'
    },
    lang: {
      current: 'es',
      locales: { es }
    },
    theme: {
      dark: false,
      default: 'light',
      options: {
        cspNonce: undefined,
        customProperties: true,
        minifyTheme: undefined,
        themeCache: undefined
      },
      themes: {
        light: {
          primary: '#D08800', // gold
          secondary: '#D22509', // red
          third: '#30429A', // blue
          fourth: '#124C21', // green
          fifth: '#661706', // brown
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
