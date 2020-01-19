<template>
  <v-container class="fill-height neutral--text">
    <v-row class="text-center display-1">
      <v-col cols="12">
        <p class="text-accent">
          Tenemos los mejores servicios para ti
        </p>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-row>
              <v-col cols="12">
                <font-awesome-icon
                  :icon="['fas', 'pepper-hot']"
                  size="2x"
                  class="primary--text"
                />
              </v-col>
              <v-col cols="12">
                <p> Vendemos productos frescos con ingredientes de la regióm</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            md="4"
          >
            <v-row>
              <v-col cols="12">
                <font-awesome-icon
                  :icon="['fas', 'pizza-slice']"
                  size="2x"
                  class="accent--text text--darken-1"
                />
              </v-col>
              <v-col cols="12">
                <p>No tienes porque comprar toda una pizza, también vendemos rebanadas individuales</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12 "
            md="4"
          >
            <v-row>
              <v-col cols="12">
                <font-awesome-icon
                  :icon="['fas', 'motorcycle']"
                  size="2x"
                  class="primary--text"
                />
              </v-col>
              <v-col cols="12">
                <p>Entregamos a domicilio a las comunidades cercanas</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Services'
}
</script>
