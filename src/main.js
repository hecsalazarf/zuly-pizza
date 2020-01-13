// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { vuetify } from '~/plugins'
import { headerAttrs } from '~/meta'
import '~/scss/main.scss'

export default function (Vue, { router, appOptions, head, isClient }) {
  head.htmlAttrs = { lang: 'es-MX' }
  head.meta.push(...headerAttrs)
  appOptions.vuetify = vuetify(Vue)
}
