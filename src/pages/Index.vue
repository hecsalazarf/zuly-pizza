<template>
  <div class="relative">
    <section>
      <main-hero />
    </section>
    <section
      v-intersect.quiet.once="createIntersectHandler('isPromosVisible')"
      class="relative primary"
    >
      <v-scale-transition origin="center">
        <div
          v-show="isPromosVisible"
          class="accent w-full h-full absolute"
        />
      </v-scale-transition>
      <promotions ref="promotions" />
    </section>
    <section>
      <services ref="services" />
    </section>
    <section
      v-intersect.quiet.once="createIntersectHandler('isAboutUSVisible')"
      class="relative primary"
    >
      <v-scale-transition origin="center">
        <div
          v-show="isAboutUSVisible"
          class="accent w-full h-full absolute"
        />
      </v-scale-transition>
      <about-us ref="aboutUs" />
    </section>
    <section>
      <find-us ref="findUs" />
    </section>
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteUrl
      siteDescription
      themeColor
      ogType
      ogImage
      locales
    }
  }
</static-query>

<script>
import { MainHero, Promotions, Services, AboutUs, FindUs } from '~/components'
import { PageMixin } from '~/mixins'
import { createPageMeta } from '~/meta'

export default {
  metaInfo () {
    return createPageMeta('home', this.$static.metadata)
  },
  name: 'IndexPage',
  components: {
    MainHero,
    Promotions,
    Services,
    AboutUs,
    FindUs
  },
  mixins: [PageMixin],
  data () {
    return {
      isPromosVisible: false,
      isAboutUSVisible: false
    }
  },
  methods: {
    createIntersectHandler (toggler) {
      const handler = function (entry) {
        this[toggler] = entry[0].isIntersecting
      }
      return {
        handler: handler.bind(this),
        options: {
          threshold: 0.5
        }
      }
    }
  }
}
</script>
