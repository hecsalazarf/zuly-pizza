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
        class="text-center display-1"
      >
        <p class="text-accent secondary--text text--darken-0">
          Nuestra historia
        </p>
        <p class="secondary--text">
          The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>
