<template>
  <div class="video-container">
    <video
      loop
      autoplay
      muted
      playsinline
      style="overflow: hidden"
    >
      <source
        src="/video/max_champs_silo.mp4"
        type="video/mp4"
      >
    </video>
    <v-container
      class="fill-height"
      style="position: relative;"
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
        class="scroll-icon"
        color="primary"
      >
        fas fa-angle-double-down
      </v-icon>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
  .video-container {
    height: 100vh;
    min-height: 500px;
    position: relative;
    overflow: hidden;
  }
  .video-container video {
    top: 50%;
    left: 50%;
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    -ms-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }

  .v-icon.scroll-icon {
    position: absolute;
    bottom: 5%;
    left: 50%;
  }
</style>
