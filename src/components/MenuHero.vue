<template>
  <v-parallax :src="require('~/assets/img/brenna.jpg')">
    <v-container class="text-center fill-height display-2 neutral--text">
      <v-row>
        <v-col>
          <p class="text-accent">
            Menú
          </p>
          <p>
            Del horno a tu mesa
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script>
export default {
  name: 'MenuHero'
}
</script>
