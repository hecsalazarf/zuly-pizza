<template>
  <v-container
    class="display-1 relative"
    :style="{ height }"
  >
    <div
      class="d-flex justify-center flex-column align-center h-full"
    >
      <p>
        <font-awesome-icon
          :icon="['fas', 'heart-broken']"
          size="3x"
          class="secondary--text"
        />
      </p>
      <p class="text-accent text-center third--text accent--text">
        Lo sentimos, la página que buscas no existe
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'Page404',
  metaInfo () {
    return {
      title: '404'
    }
  },
  data () {
    return {
      height: 0
    }
  },
  mounted () {
    const footer = document.querySelector('.v-footer')
    if (footer) {
      this.height = `calc(100vh - ${footer.offsetHeight}px)`
    } else {
      this.height = '100vh'
    }
  }
}
</script>
