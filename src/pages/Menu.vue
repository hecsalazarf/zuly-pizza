<template>
  <div class="relative">
    <section>
      <menu-hero />
    </section>
    <section class="third">
      <v-container class="neutral--text">
        <v-row>
          <v-col cols="12">
            <p class="text-center display-1">
              Especialidades en tamaños chico, mediano, grande y familiar
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(item, index) in count"
            :key="index"
            cols="12"
            md="6"
            lg="4"
          >
            <pizza
              title="Pepperoni"
              description="La clásica de pepperoni con orilla de queso de la región."
              :image-right="$vuetify.breakpoint.mdAndUp && isPhotoRight(index)"
              image="~/assets/img/products/pizza-1.jpg"
            />
          </v-col>
        </v-row>
      </v-container>
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
import { MenuHero, Pizza } from '~/components'

export default {
  metaInfo () {
    const title = 'Menu'
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
  name: 'MenuPage',
  components: {
    MenuHero,
    Pizza
  },
  data () {
    return {
      count: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
    }
  },
  computed: {
    itemsPerRow () {
      if (this.$vuetify.breakpoint.mdOnly) {
        return 2
      } else if (this.$vuetify.breakpoint.lgAndUp) {
        return 3
      } else {
        return 1
      }
    }
  },
  methods: {
    isPhotoRight (index) {
      // With this algorithm we toggle the picture from left to right
      // and viceversa every itemsPerRow, no matter the number of items
      return Math.trunc(index / this.itemsPerRow) % 2 !== 0
    }
  }
}
</script>
