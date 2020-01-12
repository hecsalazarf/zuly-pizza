<template>
  <div class="layout-wrapper">
    <nav-drawer v-model="drawer" />
    <app-bar @input="drawer = !drawer" />
    <v-content>
      <!-- <v-container fluid> -->
      <!-- If using vue-router -->
      <slot />
      <!-- </v-container> -->
    </v-content>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import { AppBar, NavDrawer } from '~/components'

export default {
  name: 'MainLayout',
  components: {
    AppBar,
    NavDrawer
  },
  data () {
    return {
      drawer: false
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .layout-wrapper {
    background-color: #f6eec9
  }
</style>
