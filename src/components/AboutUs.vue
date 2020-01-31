<template>
  <v-container class="relative">
    <v-row align="center">
      <v-col
        cols="12"
        md="6"
      >
        <g-image
          src="~/assets/img/about_us.jpg"
          class="w-full h-auto rounded"
          alt="acerca de imagen"
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="text-center display-1 secondary--text"
      >
        <p class="text-accent">
          Nuestra historia
        </p>
        <p
          v-for="(paragraph, index) in value.aboutUs"
          :key="index"
        >
          {{ paragraph }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutUs',
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
