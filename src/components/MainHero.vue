<template>
  <div class="video-container relative h-screen">
    <video
      loop
      autoplay
      muted
      playsinline
      class="absolute min-h-full min-w-full w-auto h-auto"
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
          />
        </v-col>
        <v-col
          cols="12 text-center"
          class="pa-5"
        >
          <h1 class="display-2 neutral--text">
            Hacemos pizzas, las mejores de la huasteca hidalguense
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

  .logo {
    width: 30%;
    opacity: 0.8;
  }

  @media screen and (max-width: 599px){
    .logo {
      width: 50%;
    }
    .scroll-icon {
      bottom: 10%;
    }
  }

  @media screen and (min-width: 1265px) {
    .logo {
      width: 20%;
    }
  }
</style>
