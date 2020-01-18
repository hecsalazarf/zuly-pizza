// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { vuetify, initFontawesome } from '~/plugins'
import { metaAttrs } from '~/meta'
import '~/scss/main.scss'

export default function (Vue, { router, appOptions, head, isClient }) {
  head.htmlAttrs = { lang: 'es-MX' }
  head.meta.push(...metaAttrs)
  head.script.push({
    src: '/js/register-sw.js',
    type: 'text/javascript',
    body: true
  })
  appOptions.vuetify = vuetify(Vue)
  initFontawesome(Vue)
}
