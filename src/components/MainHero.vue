<template>
  <div class="video-container relative h-screen">
    <video
      loop
      autoplay
      muted
      playsinline
      class="absolute min-h-full min-w-full w-auto h-auto"
      crossorigin="anonymous"
    >
      <source
        :src="require('~/assets/video/main_hero.mp4')"
        type="video/mp4"
      >
    </video>
    <v-container
      class="h-full relative pa-0"
    >
      <v-row
        no-gutters
        align-content="center"
        class="h-full"
      >
        <v-col cols="12 text-center pa-5">
          <g-image
            :src="value.logos.color.image"
            class="logo"
            alt="logo imagen"
          />
        </v-col>
        <v-col
          cols="12 text-center"
          class="pa-5"
        >
          <h1 class="display-2 neutral--text header--text">
            Hacemos las mejores pizzas de la huasteca hidalguense
          </h1>
        </v-col>
      </v-row>
      <div class="d-flex scroll-icon absolute justify-center w-full">
        <font-awesome-icon
          :icon="['fas', 'angle-double-down']"
          size="2x"
          class="accent--text animated infinite fadeInDown slower"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MainHero',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
  .video-container {
    min-height: 500px;
    overflow: hidden;
  }
  .video-container video {
    top: 50%;
    left: 50%;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .scroll-icon {
    bottom: 0;
  }

  @media screen and (max-width: 599px){
    .logo {
      width: 70%;
    }
    .scroll-icon {
      bottom: 10%;
    }
    .header--text {
      font-size: 2.5rem !important;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 959px){
    .logo {
      width: 35%;
    }
    .header--text {
      font-size: 2.5rem !important;
    }
  }

  @media screen and (min-width: 960px) and (max-width: 1263px){
    .logo {
      width: 40%;
    }
  }

  @media screen and (min-width: 1264px) {
    .logo {
      width: 30%;
    }
  }
</style>
