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
          cols="12"
        >
          <g-image
            :src="logo"
            class="logo"
          />
        </v-col>
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
            Menú
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
      <div class="d-flex w-full social-networks justify-end pa-3 text-center">
        <p class="neutral--text body-2">
          Este sitio utiliza tecnología web progresiva. Puedes acceder a él sin acceso a internet (offline).
        </p>
        <!-- <a
          href=""
          aria-label="Síguenos en Facebook"
        >
          <font-awesome-icon
            :icon="['fab', 'facebook-square']"
            class="accent--text text--lighten-2"
            size="2x"
          />
        </a> -->
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
  data () {
    return {
      logo: ''
    }
  },
  mounted () {
    this.$fetch('/menu/')
      .then(({ data }) => {
        this.logo = data.organization.logos.white.image
      })
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

.logo {
  width: 40%;
}
</style>
