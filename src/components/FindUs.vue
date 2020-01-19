<template>
  <v-container class="neutral--text">
    <v-row align="center">
      <v-col
        cols="12"
        md="6"
        class="text-center display-1"
      >
        <p class="text-accent">
          Encuéntranos
        </p>
        <v-row class="text-left">
          <v-col cols="1">
            <font-awesome-icon
              :icon="['fas', 'phone-alt']"
              class="primary--text business-info-icon"
              size="xs"
            />
          </v-col>
          <v-col>
            Llámanos al <span class="font-weight-bold">55 2766 6299</span>
          </v-col>
        </v-row>
        <v-row class="text-left">
          <v-col cols="1">
            <font-awesome-icon
              :icon="['fas', 'map-marked-alt']"
              class="primary--text business-info-icon"
              size="xs"
            />
          </v-col>
          <v-col>
            <span class="font-weight-bold">Calle Molier #23</span> Atlapexco, Hidalgo
          </v-col>
        </v-row>
        <v-row class="text-left">
          <v-col cols="1">
            <font-awesome-icon
              :icon="['fas', 'clock']"
              class="primary--text business-info-icon"
              size="xs"
            />
          </v-col>
          <v-col>
            Abierto de lunes a viernes <span class="font-weight-bold">8:00am - 9:00pm</span>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-lazy>
          <iframe
            class="w-full h-auto border-none map-frame rounded"
            :src="mapFrameUrl"
          />
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'FindUs',
  computed: {
    mapFrameUrl () {
      return `${process.env.GRIDSOME_GMAPS_EMBED_URL}?q=${process.env.GRIDSOME_GMAPS_QUERY}&key=${process.env.GRIDSOME_GMAPS_API_KEY}`
    }
  }
}
</script>

<style lang="scss" scoped>
iframe.map-frame {
  height: 70vh;
}

.business-info-icon {
  margin-bottom: 7px;
}
</style>
