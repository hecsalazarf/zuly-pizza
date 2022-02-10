class AnalyticsHelper {
  constructor (scope) {
    this.trackingId = process.env.GRIDSOME_GA_TRACKING_ID
    this.url = process.env.GRIDSOME_GA_EMBED_URL
    this.scope = undefined
  }

  init (scope, router, Vue) {
    if (!this.validParams()) {
      console.info('Analytics helper cannot be initialized because no valid params exist.')
      return
    }

    this.scope = scope
    this.scope.dataLayer = this.scope.dataLayer || []
    this.gtag('js', new Date())
    this.gtag('config', this.trackingId, { send_page_view: false })

    router.afterEach(this.onPageView.bind(this))
    Vue.prototype.$ga = this
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

  validParams () {
    return typeof this.trackingId !== 'undefined' || typeof this.url !== 'undefined'
  }

  get scripts () {
    if (this.validParams()) {
      return [
        {
          src: `${this.url}?id=${this.trackingId}`,
          type: 'text/javascript',
          body: true
        }
      ]
    }

    return []
  }
}

export default AnalyticsHelper
