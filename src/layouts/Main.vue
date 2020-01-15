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
        v-if="windowYOffset > 90 && !isFooterVisible"
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
    <Footer
      v-intersect.quiet="{
        handler: onFooterIntersect,
        options: {
          threshold: 0.2
        }
      }"
    />
  </div>
</template>

<script>
import { AppBar, NavDrawer, Footer } from '~/components'
import { debounce } from '~/utils'

export default {
  name: 'MainLayout',
  components: {
    AppBar,
    NavDrawer,
    Footer
  },
  data () {
    return {
      drawer: false,
      windowYOffset: 0,
      isFooterVisible: false
    }
  },
  methods: {
    onScroll: debounce(function (e) {
      this.windowYOffset = window.pageYOffset
    }, 100),
    onFooterIntersect (entries) {
      this.isFooterVisible = entries[0].isIntersecting
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-wrapper {
    background-color: #f6eec9
  }
</style>
