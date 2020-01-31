<template>
  <div class="relative">
    <section>
      <main-hero :value="$page.organization" />
    </section>
    <section
      v-intersect.quiet="createIntersectHandler('isPromosVisible')"
      class="relative primary"
    >
      <v-scale-transition origin="center">
        <div
          v-show="isPromosVisible"
          class="accent w-full h-full absolute"
        />
      </v-scale-transition>
      <promotions
        ref="promotions"
        :value="$page.promotions"
      />
    </section>
    <section>
      <services
        ref="services"
        :value="$page.services"
      />
    </section>
    <section
      v-intersect.quiet="createIntersectHandler('isAboutUSVisible')"
      class="relative primary"
    >
      <v-scale-transition origin="center">
        <div
          v-show="isAboutUSVisible"
          class="accent w-full h-full absolute"
        />
      </v-scale-transition>
      <about-us
        ref="aboutUs"
        :value="$page.organization"
      />
    </section>
    <section>
      <find-us
        ref="findUs"
        :value="$page.organization"
      />
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

<page-query>
  query {
    organization(id: "zuly-pizza") {
      name
      addresses {
        street
        province
        region
        phones {
          main
          alternative
        }
      }
      aboutUs
      logos {
        color {
          image
        }
      }
      schedule {
        fromDay
        toDay
        fromTime
        toTime
      }
    }

    promotions: allPromotion(order: ASC, sortBy:"name") {
      edges {
        node {
          id
          start
          labels
          image
        }
      }
    }

    services: allService(sortBy: "name", order: ASC) {
      edges {
        node {
          id
          description
          caption
          icon
          iconClass
        }
      }
    }
  }
</page-query>

<script>
import { MainHero, Promotions, Services, AboutUs, FindUs } from '~/components'
import { PageMixin } from '~/mixins'
import { createPageMeta } from '~/meta'
import { agentFeatures } from '~/utils'
const { hasIntersectionObserver } = agentFeatures

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
  mounted () {
    if (!hasIntersectionObserver()) {
      this.isPromosVisible = true
      this.isAboutUSVisible = true
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
          threshold: 0.3
        }
      }
    }
  }
}
</script>
