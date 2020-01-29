module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  globals: {
    'ga': true, // Google Analytics
    'process': true,
    'importScripts': 'readonly', // method of the WorkerGlobalScope
    'workbox': 'readonly' // Workbox
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
};
