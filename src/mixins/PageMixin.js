
export default {
  mounted () {
    this.$root.$on('goTo', this.goTo)
  },
  beforeDestroy () {
    this.$root.$off('goTo')
  },
  methods: {
    goTo (section) {
      let el
      if (this.$refs[section]) {
        el = this.$refs[section]
      } else if (this.$refs[section].$el) {
        el = this.$refs[section].$el
      } else {
        return
      }
      this.$vuetify.goTo(el, {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      })
    }
  }
}
