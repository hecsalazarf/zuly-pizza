<template>
  <v-banner
    color="accent"
    class="update-banner primary"
  >
    <h3 class="neutral--text font-weight-regular title">
      El contenido de la página ha sido actualizado. Para ver los últimos cambios
      recarga la página.
    </h3>
    <template v-slot:actions>
      <v-btn
        text
        color="neutral"
        class="subtitle-1"
        @click="reload"
      >
        Recargar
      </v-btn>
      <v-btn
        text
        color="neutral"
        class="subtitle-1"
        @click="$emit('input', false)"
      >
        Cancelar
      </v-btn>
    </template>
  </v-banner>
</template>

<script>
export default {
  name: 'UpdateBanner',
  props: {
    value: {
      type: Boolean
    }
  },
  methods: {
    reload () {
      if (window) {
        window.location.reload()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.update-banner {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 5
}
</style>
