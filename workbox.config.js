const path = require('path')

module.exports = {
  swDest: path.join('dist', 'service-worker.js'),
  skipWaiting: true,
  cleanupOutdatedCaches: true,
  globDirectory: 'dist',
  globPatterns: ['assets/**/*.{js,css,ttf,json}', '**/*.html'],
  cacheId: 'assets',
  clientsClaim: true,
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|jpeg|svg|mp4)$/,
    handler: 'StaleWhileRevalidate',
    options: {
      // networkTimeoutSeconds: 5, // Only for NetworkFirst strategy
      cacheName: 'media',
      expiration: {
        maxEntries: '30'
      }
    }
  }]
}
