<template>
  <v-footer
    app
    absolute
    color="primary"
    class="neutral--text"
  >
    <v-col
      class="text-center"
      cols="12"
    >
      ©
      {{ year }} — <strong>{{ value.name }}</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
