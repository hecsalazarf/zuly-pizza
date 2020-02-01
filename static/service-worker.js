importScripts('/assets/js/workbox-v5.0.0/workbox-sw.js')
workbox.setConfig({ modulePathPrefix: '/assets/js/workbox-v5.0.0/' })

workbox.core.setCacheNameDetails({ prefix: 'assets' })
workbox.core.skipWaiting()
workbox.core.clientsClaim()

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)

workbox.precaching.cleanupOutdatedCaches()
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|mp4)$/, new workbox.strategies.StaleWhileRevalidate({ cacheName: 'media', plugins: [new workbox.expiration.ExpirationPlugin({ maxEntries: 30, purgeOnQuotaError: false })] }), 'GET')
