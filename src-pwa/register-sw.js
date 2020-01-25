export function register (swUrl, hooks = {}) {
  if ('serviceWorker' in navigator) {
    const { registrationOptions = {} } = hooks
    delete hooks.registrationOptions

    const emit = (hook, ...args) => {
      if (hooks && hooks[hook]) {
        hooks[hook](...args)
      }
    }
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register(swUrl, registrationOptions)
        .then(registration => {
          emit('registered', registration)
          if (registration.waiting) {
            emit('updated', registration)
            return
          }
          registration.onupdatefound = () => {
            emit('updatefound', registration)
            const installingWorker = registration.installing
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  // At this point, the old content will have been purged and
                  // the fresh content will have been added to the cache.
                  // It's the perfect time to display a "New content is
                  // available; please refresh." message in your web app.
                  emit('updated', registration)
                } else {
                  // At this point, everything has been precached.
                  // It's the perfect time to display a
                  // "Content is cached for offline use." message.
                  emit('cached', registration)
                }
              }
            }
          }
        })
        .catch(error => {
          emit('error', error)
        })
    })
  }
}

export function unregister () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister()
    })
  }
}
