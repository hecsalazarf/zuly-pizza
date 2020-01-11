// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify/lib'
import '~/scss/main.scss'
// import Vuetify from 'vuetify'

export default function (Vue, { router, appOptions, head, isClient }) {
  head.htmlAttrs = { lang: 'es-MX' }
  Vue.use(Vuetify)
  appOptions.vuetify = new Vuetify({
    icons: {
      iconfont: 'fa'
    },
    lang: {
      current: 'es'
    }
  })
}
