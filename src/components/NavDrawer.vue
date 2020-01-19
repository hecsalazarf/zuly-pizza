<template>
  <v-navigation-drawer
    :value="value"
    app
    left
    color="primary"
    temporary
    touchless
    @input="$emit('input', $event)"
  >
    <v-container
      fluid
      class="h-full"
    >
      <v-row class="text-center display-1">
        <v-col
          v-if="$route.path !== '/'"
          cols="12"
        >
          <g-link
            class="text-accent neutral--text"
            to="/"
          >
            Inicio
          </g-link>
        </v-col>
        <v-col
          v-if="$route.path !== '/menu/'"
          cols="12"
        >
          <g-link
            class="text-accent neutral--text"
            to="/menu/"
          >
            Menu
          </g-link>
        </v-col>
        <v-col cols="12">
          <a
            class="text-accent neutral--text"
            @click="navigateTo({ path: '/', ref: 'promotions' })"
          >
            Promos
          </a>
        </v-col>
        <v-col cols="12">
          <a
            class="text-accent neutral--text"
            @click="navigateTo({ path: '/', ref: 'services' })"
          >
            Servicios
          </a>
        </v-col>
        <v-col cols="12">
          <a
            class="text-accent neutral--text"
            @click="navigateTo({ path: '/', ref: 'aboutUs' })"
          >
            Historia
          </a>
        </v-col>
        <v-col cols="12">
          <a
            class="text-accent neutral--text"
            @click="navigateTo({ path: '/', ref: 'findUs' })"
          >
            Ubicación
          </a>
        </v-col>
      </v-row>
      <div class="absolute social-networks">
        <a href="">
          <font-awesome-icon
            :icon="['fab', 'facebook-square']"
            class="accent--text text--darken-3"
            size="2x"
          />
        </a>
      </div>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',
  props: {
    value: {
      type: Boolean
    }
  },
  methods: {
    navigateTo (route) {
      this.$emit('input', false)
      this.goTo(route)
    },
    goTo ({ path, ref }) {
      if (this.$route.path !== path) {
        this.$router.push({ path })
        setTimeout(() => this.$root.$emit('goTo', ref), 400)
      } else {
        this.$root.$emit('goTo', ref)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.social-networks {
  right: 10%;
  bottom: 5%;
}
</style>
