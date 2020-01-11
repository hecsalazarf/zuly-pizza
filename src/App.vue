<template>
  <v-app id="app">
    <main-layout>
      <router-view />
    </main-layout>
  </v-app>
</template>

<script>
import MainLayout from '~/layouts/Main.vue'

export default {
  name: 'App',
  components: {
    MainLayout
  },
  mounted () {
    // import('aos').then(AOS => AOS.init())
  }
}
</script>
