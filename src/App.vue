<template>
  <v-app id="app">
    <main-layout>
      <router-view />
      <update-banner ref="updateBanner" />
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
    }
  },
  mounted () {
    window.addEventListener('updateFound', this.onUpdateFound)
  },
  beforeDestroy () {
    window.removeEventListener('updateFound', this.onUpdateFound)
  },
  methods: {
    onUpdateFound ({ detail }) {
      const { registration } = detail
      registration.onstatechange = () => {
        if (registration.state === 'activated') {
          // reload window when waiting worker gets activated
          window.location.reload()
        }
      }
      this.$refs.updateBanner.$once('update', () => {
        registration.postMessage({ type: 'SKIP_WAITING' })
      })
      this.$refs.updateBanner.show()
    }
  }
}
</script>
