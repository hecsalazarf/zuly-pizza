<template>
  <v-app-bar
    app
    collapse
    elevate-on-scroll
    color="primary"
    hide-on-scroll
    width="60px"
  >
    <v-app-bar-nav-icon @click="$emit('input', true)">
      <v-icon
        color="secondary"
      >
        fas fa-bars
      </v-icon>
    </v-app-bar-nav-icon>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data () {
    return {
    }
  }
}
</script>
