<template>
  <div
    v-scroll="onScroll"
    class="layout-wrapper"
  >
    <nav-drawer v-model="drawer" />
    <app-bar @input="drawer = !drawer" />
    <v-content class="pt-0">
      <slot />
    </v-content>
    <v-scale-transition>
      <v-btn
        v-if="windowYOffset > 90 && !isFooterVisible"
        fixed
        dark
        fab
        bottom
        right
        color="primary"
        tag="a"
        :href="`tel:${$static.organization.addresses[0].phones.main}`"
        aria-label="botón marcar teléfono"
        class="animated infinite pulse slow"
        @click="sendEvent"
      >
        <font-awesome-icon
          class="headline neutral--text"
          :icon="['fas', 'phone-volume']"
        />
      </v-btn>
    </v-scale-transition>
    <Footer
      v-intersect.quiet="{
        handler: onFooterIntersect,
        options: {
          threshold: 0.2
        }
      }"
      :value="$static.organization"
    />
  </div>
</template>

<static-query>
  query {
    organization(id: "upizza") {
      name
      addresses {
        phones {
          main
        }
      }
    }
  }
</static-query>

<script>
import { AppBar, NavDrawer, Footer } from '~/components'
import { debounce } from '~/utils'
import { Categories, Actions } from '~/constants/analytics'

export default {
  name: 'MainLayout',
  components: {
    AppBar,
    NavDrawer,
    Footer
  },
  data () {
    return {
      drawer: false,
      windowYOffset: 0,
      isFooterVisible: false
    }
  },
  methods: {
    onScroll: debounce(function (e) {
      this.windowYOffset = window.pageYOffset
    }, 100),
    onFooterIntersect (entries) {
      this.isFooterVisible = entries[0].isIntersecting
    },
    sendEvent () {
      this.$ga.event(Actions.CLICK_TO_CALL, {
        event_category: Categories.ENGAGEMENT
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout-wrapper {
    background-color: var(--v-secondary-base);
  }
</style>
