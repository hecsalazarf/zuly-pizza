<template>
  <div
    v-scroll="onScroll"
    class="layout-wrapper"
  >
    <nav-drawer v-model="drawer" />
    <app-bar @input="drawer = !drawer" />
    <v-content class="pt-0">
      <slot />
    </v-content>
    <v-scale-transition>
      <v-btn
        v-if="windowYOffset > 90"
        fixed
        dark
        fab
        bottom
        right
        color="primary"
        tag="a"
        :href="`tel:${5527666299}`"
      >
        <v-icon
          color="secondary"
          class="font-italic"
        >
          fas fa-phone-volume
        </v-icon>
      </v-btn>
    </v-scale-transition>
  </div>
</template>

<script>
import { AppBar, NavDrawer } from '~/components'
import { debounce } from '~/utils'

export default {
  name: 'MainLayout',
  components: {
    AppBar,
    NavDrawer
  },
  data () {
    return {
      drawer: false,
      windowYOffset: 0
    }
  },
  methods: {
    onScroll: debounce(function (e) {
      this.windowYOffset = window.pageYOffset
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
  .layout-wrapper {
    background-color: #f6eec9
  }
</style>
