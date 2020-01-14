<template>
  <v-container class="fill-height">
    <v-row class="text-center">
      <v-col cols="12">
        <p> Tenemos los mejores servicios para ti </p>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col
            cols="12"
            md="4"
          >
            <v-row>
              <v-col cols="12">
                <v-icon
                  color="fourth"
                  size="5rem"
                >
                  fas fa-pepper-hot
                </v-icon>
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
                <v-icon
                  color="#FF6F00"
                  size="5rem"
                >
                  fas fa-pizza-slice
                </v-icon>
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
                <v-icon
                  color="third"
                  size="5rem"
                >
                  fas fa-motorcycle
                </v-icon>
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
