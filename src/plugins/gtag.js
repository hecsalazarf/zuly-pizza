class GAnalytics {
  constructor (scope, trackingId) {
    this.trackingId = trackingId
    this.scope = scope
  }

  init () {
    this.scope.dataLayer = this.scope.dataLayer || []
    this.gtag('js', new Date())
    this.gtag('config', this.trackingId, { send_page_view: false })
  }

  gtag () {
    this.scope.dataLayer.push(arguments)
  }

  onPageView (to) {
    this.config({
      page_path: to.path,
      send_page_view: true
    })
  }

  config (options) {
    this.gtag('config', this.trackingId, options)
  }

  event (name, params) {
    this.gtag('event', name, params)
  }
}

export default function (Vue, router, scope) {
  const ga = new GAnalytics(scope, process.env.GRIDSOME_GA_TRACKING_ID)
  ga.init()
  router.afterEach(ga.onPageView.bind(ga))
  Vue.prototype.$ga = ga
}
