<template>
  <div class="video-container relative h-screen">
    <!-- <video
      loop
      autoplay
      muted
      playsinline
      class="absolute min-h-full min-w-full w-auto h-auto"
    >
      <source
        src="/video/max_champs_silo.mp4"
        type="video/mp4"
      >
    </video> -->
    <v-container
      class="fill-height relative pa-0"
    >
      <v-row no-gutters>
        <v-col cols="12 text-center">
          <h1 class="primary--text">
            LOGO
          </h1>
        </v-col>
        <v-spacer />
      </v-row>
      <div class="d-flex scroll-icon absolute justify-center w-full">
        <font-awesome-icon
          :icon="['fas', 'angle-double-down']"
          size="2x"
          class="primary--text text--lighten-1"
        />
      </div>
    </v-container>
  </div>
</template>

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
    bottom: 10%;
  }
</style>
