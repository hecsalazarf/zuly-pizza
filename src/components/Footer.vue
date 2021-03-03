<template>
  <v-footer
    app
    absolute
    color="primary"
    class="neutral--text d-flex flex-column"
  >
    <p
      class="text-center mb-0"
    >
      ©
      {{ year }} — <strong>{{ value.name }}</strong>
    </p>
    <p
      class="text-center mb-0 overline"
    >
      Powered by
      <a
        href="https://www.typcod.com"
        target="_blank"
        rel="author noopener noreferrer"
      >
        <strong class="neutral--text">Typcod</strong>
      </a>
    </p>
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
