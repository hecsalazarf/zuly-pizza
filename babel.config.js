module.exports = function (api) {
  api.cache(true)

  const presets = [
    '@vue/babel-preset-app'
  ]

  return {
    presets
  }
}
