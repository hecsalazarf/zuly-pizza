<template>
  <v-btn
    v-scroll="scroll"
    class="nav-toggle"
    color="primary"
    top
    right
    fixed
    :elevation="elevation"
    @click="$emit('input', true)"
  >
    <v-icon color="secondary">
      fas fa-bars
    </v-icon>
  </v-btn>
</template>

<script>
import { debounce } from '~/utils'

export default {
  name: 'AppBar',
  data () {
    return {
      windowOffset: 0
    }
  },
  computed: {
    elevation () {
      if (this.windowOffset > 50) {
        return 5
      }
      return 0
    }
  },
  methods: {
    scroll: debounce(function (e) {
      if (window) {
        this.windowOffset = window.pageYOffset
      }
    }, 50)
  }
}
</script>

<style lang="scss" scoped>
  button.nav-toggle {
    z-index: 1;
  }
</style>
