<template>
  <v-slide-y-reverse-transition origin="center">
    <div
      v-if="isShown"
      class="update-banner primary"
    >
      <v-container class="pa-0">
        <v-row
          no-gutters
          align="center"
        >
          <v-col
            cols="8"
            md="9"
            class="pa-3"
          >
            <h3 class="neutral--text font-weight-regular title">
              El contenido ha sido actualizado. Recarga la página para ver los últimos cambios.
            </h3>
          </v-col>
          <v-col
            cols="4"
            md="3"
            class="pa-3 text-center"
          >
            <v-btn
              text
              color="neutral"
              class="subtitle-1"
              :loading="inProgress"
              @click="update"
            >
              Recargar
            </v-btn>
            <v-btn
              text
              color="neutral"
              class="subtitle-1"
              :disabled="inProgress"
              @click="hide"
            >
              Cancelar
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-slide-y-reverse-transition>
</template>

<script>
export default {
  name: 'UpdateBanner',
  props: {
    value: {
      type: Boolean
    }
  },
  data () {
    return {
      isShown: false,
      inProgress: false
    }
  },
  methods: {
    show () {
      this.isShown = true
    },
    hide () {
      this.isShown = false
    },
    update () {
      this.inProgress = true
      this.$emit('update')
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
