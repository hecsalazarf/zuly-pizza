export default function (fn, wait = 250, immediate) {
  let timeout

  function debounced (/* ...args */) {
    const args = arguments

    const later = () => {
      // eslint-disable-next-line no-void
      timeout = void 0
      if (immediate !== true) {
        fn.apply(this, args)
      }
    }

    clearTimeout(timeout)
    // eslint-disable-next-line no-void
    if (immediate === true && timeout === void 0) {
      fn.apply(this, args)
    }
    timeout = setTimeout(later, wait)
  }

  debounced.cancel = () => {
    clearTimeout(timeout)
  }

  return debounced
}
