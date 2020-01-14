<template>
  <div class="relative">
    <section>
      <main-hero />
    </section>
    <section class="fifth">
      <promotions />
    </section>
    <section>
      <services />
    </section>
    <section class="third">
      <about-us />
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
import { MainHero, Promotions, Services, AboutUs } from '~/components'
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
    AboutUs
  },
  data () {
    return {
    }
  }
}
</script>
