import Vuetify from 'vuetify/lib'
import es from 'vuetify/lib/locale/es'

export default function (Vue) {
  if (process.env.NODE_ENV === 'development') {
    // As of version 2.2.3, when vuetify uses SVG fontawesome icons, a warning is shown
    // This hack suppresses this annoying message.
    // See more at https://github.com/vuetifyjs/vuetify/issues/9999
    const ignoredWarning = 'The .native modifier for v-on is only valid on components but it was used on <svg>'
    Vue.config.warnHandler = function (msg, vm, trace) {
      if (!msg.includes(ignoredWarning)) {
        console.error(`[Vue warn]: ${msg}`)
        console.error(trace)
      }
    }
  }
  Vue.use(Vuetify)
  return new Vuetify({
    icons: {
      iconfont: 'faSvg'
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
          primary: '#44A573', // sea green
          secondary: '#3E3E3E', // black olive
          accent: '#FF9A70', // blue
          neutral: '#FFFFFF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00'
        }
      }
    }
  })
}
