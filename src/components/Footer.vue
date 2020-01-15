<template>
  <v-footer
    app
    absolute
    color="primary"
  >
    <v-col
      class="text-center"
      cols="12"
    >
      ©
      {{ new Date().getFullYear() }} — <strong>Pizzas ABC</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
