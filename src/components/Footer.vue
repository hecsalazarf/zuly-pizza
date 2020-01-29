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
      class="text-center mb-0 caption"
    >
      Hecho con &#10084; por
      <a
        href="https://github.com/hecsalazarf"
        target="_blank"
        rel="author noopener noreferrer"
      >
        <strong class="neutral--text">HYZ</strong>
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
