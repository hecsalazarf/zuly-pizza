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
        src="/video/max_champs_silo.mp4"
        type="video/mp4"
      >
    </video>
    <v-container
      class="fill-height relative"
    >
      <v-row>
        <v-col cols="12 text-center">
          <h1 class="primary--text">
            LOGO
          </h1>
        </v-col>
        <v-spacer />
      </v-row>
      <v-icon
        class="scroll-icon absolute"
        color="primary"
      >
        fas fa-angle-double-down
      </v-icon>
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

  .v-icon.scroll-icon {
    bottom: 5%;
    left: 50%;
  }
</style>
