importScripts('/assets/js/workbox-v6.1.0/workbox-sw.js')
workbox.setConfig({ modulePathPrefix: '/assets/js/workbox-v6.1.0/' })

workbox.core.setCacheNameDetails({ prefix: '', suffix: '', precache: 'precache' })
workbox.core.clientsClaim()
self.addEventListener('message', onMessage)

const precache = self.__WB_MANIFEST
precacheMedia(precache)
workbox.precaching.precacheAndRoute(precache)

workbox.precaching.cleanupOutdatedCaches()
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ cacheName: 'media', plugins: [new workbox.expiration.ExpirationPlugin({ maxEntries: 30, purgeOnQuotaError: false })] }), 'GET')
workbox.routing.registerRoute(/\/assets\/media\/.*\.mp4$/, new workbox.strategies.CacheFirst({
  cacheName: 'precachedMedia',
  plugins: [
    new workbox.expiration.ExpirationPlugin({ maxEntries: 5, purgeOnQuotaError: false }),
    new workbox.rangeRequests.RangeRequestsPlugin(),
    new workbox.cacheableResponse.CacheableResponsePlugin({ statuses: [200] })
  ]
}))

function precacheMedia (precache) {
  const media = precache.filter((p, i, arr) => {
    if (/.*\.mp4$/.test(p.url)) {
      arr.splice(i, 1)
      return true
    }
    return false
  })
  self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('precachedMedia')
        .then(cache => {
          media.forEach(e => cache.add(e.url))
        })
    )
  })
}

function onMessage (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    // instructs the latest service worker to activate as soon as it enters the waiting phase
    self.skipWaiting()
  }
}
