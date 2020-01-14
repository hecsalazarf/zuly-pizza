<template>
  <v-navigation-drawer
    :value="value"
    app
    left
    color="primary"
    temporary
    touchless
    @input="$emit('input', $event)"
  >
    <v-container fluid>
      <v-row class="text-center secondary--text display-1">
        <v-col cols="12">
          <div class="text-accent">
            Menu
          </div>
        </v-col>
        <v-col cols="12">
          <div class="text-accent">
            Servicios
          </div>
        </v-col>
        <v-col cols="12">
          <div class="text-accent">
            Historia
          </div>
        </v-col>
        <v-col cols="12">
          <div class="text-accent">
            Ubicación
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',
  props: {
    value: {
      type: Boolean
    }
  }
}
</script>
