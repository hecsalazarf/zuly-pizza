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
      {{ year }} — <strong>{{ $static.organization.name }}</strong>
    </v-col>
  </v-footer>
</template>

<static-query>
  query {
    organization(id: "upizza") {
      name
    }
  }
</static-query>

<script>
export default {
  name: 'Footer',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
