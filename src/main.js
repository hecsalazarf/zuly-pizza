// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { vuetify, initFontawesome, AnalyticsHelper } from '~/plugins'
import '~/scss/main.scss'

export default function (Vue, { router, appOptions, head, isClient }) {
  const gaHelper = new AnalyticsHelper()
  head.htmlAttrs = { lang: 'es-MX' }
  head.script.push(...gaHelper.scripts)

  if (isClient) {
    import(/* webpackChunkName: "pwa--src" */'../src-pwa')
      .catch(e => console.error(e))
    gaHelper.init(window, router, Vue)
  }
  appOptions.vuetify = vuetify(Vue)
  initFontawesome(Vue)
}
