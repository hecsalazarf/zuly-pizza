import { register } from './register-sw'

const bootstrap = function () {
  if (process.env.NODE_ENV === 'development') {
    console.log('Bypassing service worker registration in development mode')
    return
  }
  register('/service-worker.js', {
    // The registrationOptions object will be passed as the second argument
    // to ServiceWorkerContainer.register()
    // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register#Parameter

    // registrationOptions: { scope: './' },

    ready () {
      console.log('App is being served from cache by a service worker.')
    },

    registered (registration) {
      console.log('Service worker has been registered.')
    },

    cached (registration) {
      console.log('Content has been cached for offline use.')
    },

    updatefound (registration) {
      console.log('New content is downloading.')
    },

    updated (registration) {
      if (registration.waiting) {
        const waitingWorker = registration.waiting
        waitingWorker.onstatechange = () => {
          if (waitingWorker.state === 'activated') {
            window.dispatchEvent(new CustomEvent('updateFound'))
          }
        }
      }
      console.log('New content is available; please refresh.')
    },

    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },

    error (err) {
      console.log('iihiih')
      console.error('Error during service worker registration:', err)
    }
  })
}

bootstrap()
