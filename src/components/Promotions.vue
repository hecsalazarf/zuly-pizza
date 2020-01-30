<template>
  <v-carousel
    hide-delimiter-background
    :show-arrows="false"
    cycle
  >
    <v-carousel-item
      v-for="item in value.edges"
      :key="item.node.id"
      transition="scale-transition"
      reverse-transition="scale-transition"
    >
      <v-container class="h-full">
        <v-row
          justify="center"
          align="center"
          class="promo-container h-full text-center"
        >
          <v-col
            cols="12"
            sm="6"
            md="7"
            lg="8"
          >
            <g-image
              :src="item.node.image"
              class="w-full promo-img"
            />
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="5"
            lg="4"
            class="headline"
          >
            <h2 class="text-accent font-weight-regular primary--text text--darken-1 mb-sm-12 pb-3">
              {{ item.node.start }}
            </h2>
            <p
              v-for="(label, index) in item.node.labels"
              :key="index"
              class="display-1"
            >
              {{ label }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'Promotions',
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 599px) {
    .promo-img {
      width: 60%;
    }

    .promo-container {
      height: auto;
    }
  }
  @media screen and (min-width: 1265px) {
    .promo-img {
      width: 70%;
    }
  }
  @media screen and (min-width: 1905px) {
    .promo-img {
      width: 50%;
    }
  }
</style>
