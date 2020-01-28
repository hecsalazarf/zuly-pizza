const path = require('path')

module.exports = {
  swSrc: path.join('static', 'service-worker.js'),
  swDest: path.join('dist', 'service-worker.js'),
  globDirectory: 'dist',
  globPatterns: ['assets/**/*.{js,css,ttf,json}', '**/*.html']
  // used by wizard
  /*
  importWorkboxFrom: 'local',
  skipWaiting: true,
  cleanupOutdatedCaches: true,
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
  */
}
