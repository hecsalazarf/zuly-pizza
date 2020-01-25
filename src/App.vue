<template>
  <v-app id="app">
    <main-layout>
      <router-view />
      <update-banner
        v-if="updateFound"
        @input="updateFound = $event"
      />
    </main-layout>
  </v-app>
</template>

<script>
import MainLayout from '~/layouts/Main.vue'
import { UpdateBanner } from '~/components'

export default {
  name: 'App',
  components: {
    MainLayout,
    UpdateBanner
  },
  data () {
    return {
      updateFound: false
    }
  },
  mounted () {
    window.addEventListener('updateFound', this.displayUpdate)
  },
  beforeDestroy () {
    window.removeEventListener('updateFound', this.displayUpdate)
  },
  methods: {
    displayUpdate () {
      this.updateFound = true
    }
  }
}
</script>
