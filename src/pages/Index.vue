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
          class="fifth w-full h-full absolute"
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
          class="third w-full h-full absolute"
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
    }
  }
</static-query>

<script>
import { MainHero, Promotions, Services, AboutUs, FindUs } from '~/components'
import { PageMixin } from '~/mixins'

export default {
  metaInfo () {
    const title = 'Inicio'
    const { siteDescription, siteName, siteUrl } = this.$static.metadata
    return {
      title,
      meta: [
        { name: 'description', content: siteDescription },
        { property: 'og:description', content: siteDescription },
        { property: 'og:title', content: `${title} - ${siteName}` },
        { property: 'og:url', content: siteUrl }
      ],
      link: [
        { rel: 'canonical', href: siteUrl },
        { rel: 'alternate', hreflang: 'es-MX', href: siteUrl },
        { rel: 'alternate', hreflang: 'es', href: siteUrl },
        { rel: 'alternate', hreflang: 'x-default', href: siteUrl }
      ]
    }
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
