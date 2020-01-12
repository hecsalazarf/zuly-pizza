<template>
  <v-navigation-drawer
    :value="value"
    app
    right
    color="primary"
    temporary
    touchless
    @input="$emit('input', $event)"
  >
    <v-container fluid>
      <v-row class="text-center secondary--text display-2" style="font-family: Galada !important">
        <v-col cols="12">
          <div>Menu</div>
        </v-col>
        <v-col cols="12">
          <div>Servicios</div>
        </v-col>
        <v-col cols="12">
          <div>Historia</div>
        </v-col>
        <v-col cols="12">
          <div>Ubicación</div>
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
