<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <v-app-bar-nav-icon @click.stop="$emit('drawer')">
      <i class="fas fa-ad" />
    </v-app-bar-nav-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>
