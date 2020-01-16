<template>
  <v-carousel
    height="400"
    hide-delimiter-background
    :show-arrows="false"
    cycle
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      transition="scale-transition"
      reverse-transition="scale-transition"
    >
      <v-container class="fill-height">
        <v-row
          align="center"
          justify="center"
        >
          <v-col>
            <div class="display-3">
              {{ slide }} Promoción
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Promotions',
  data () {
    return {
      slides: [
        'Primera',
        'Segunda',
        'Tercera'
      ]
    }
  }
}
</script>
