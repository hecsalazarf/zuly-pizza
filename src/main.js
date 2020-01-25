// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { vuetify, initFontawesome } from '~/plugins'
import '~/scss/main.scss'

export default function (Vue, { router, appOptions, head, isClient }) {
  if (isClient) {
    import(/* webpackChunkName: "pwa--src" */'../src-pwa')
      .catch(e => console.error(e))
  }

  head.htmlAttrs = { lang: 'es-MX' }
  appOptions.vuetify = vuetify(Vue)
  initFontawesome(Vue)
}
