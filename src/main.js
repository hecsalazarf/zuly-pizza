// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { vuetify, initFontawesome, createGtag } from '~/plugins'
import { globalScripts } from '~/meta'
import '~/scss/main.scss'

export default function (Vue, { router, appOptions, head, isClient }) {
  head.htmlAttrs = { lang: 'es-MX' }
  head.script.push(...globalScripts)

  if (isClient) {
    import(/* webpackChunkName: "pwa--src" */'../src-pwa')
      .catch(e => console.error(e))
    createGtag(Vue, router, window)
  }
  appOptions.vuetify = vuetify(Vue)
  initFontawesome(Vue)
}
