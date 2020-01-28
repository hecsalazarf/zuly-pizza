importScripts('/assets/js/workbox-v4.3.1/workbox-sw.js')
workbox.setConfig({ modulePathPrefix: '/assets/js/workbox-v4.3.1/' })

workbox.core.setCacheNameDetails({ prefix: 'assets' })
workbox.core.skipWaiting()
workbox.core.clientsClaim()

workbox.precaching.precacheAndRoute([])

workbox.precaching.cleanupOutdatedCaches()
workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg|mp4)$/, new workbox.strategies.StaleWhileRevalidate({ cacheName: 'media', plugins: [new workbox.expiration.Plugin({ maxEntries: 30, purgeOnQuotaError: false })] }), 'GET')
