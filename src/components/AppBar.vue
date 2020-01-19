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
      <font-awesome-icon
        :icon="['fas', 'bars']"
        size="2x"
        class="white--text"
      />
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
