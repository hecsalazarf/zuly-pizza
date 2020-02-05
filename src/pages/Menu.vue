<template>
  <div class="relative">
    <section>
      <menu-hero />
    </section>
    <section class="third">
      <v-container class="neutral--text">
        <v-row>
          <v-col
            cols="12"
            class="text-center"
          >
            <p class="display-1">
              Conoce nuestras pizzas, elige y ordena.
            </p>
            <p class="headline">
              Recuerda que puedes pedirlas con orilla rellena de queso. <sup class="body-2">*</sup>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(item, index) in this.$page.pizzas.edges"
            :key="item.node.id"
            cols="12"
            md="6"
            lg="4"
          >
            <pizza
              :value="item.node"
              :image-right="$vuetify.breakpoint.mdAndUp && isPhotoRight(index)"
            />
          </v-col>
        </v-row>
        <div>
          <p class="text-left mt-5">
            * La orilla de queso tiene un costo adicional.
          </p>
        </div>
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
      themeColor
      ogType
      ogImage
      locales
    }
  }
</static-query>

<page-query>
  query {
    pizzas: allProduct {
      totalCount
      edges {
        node {
          name
          description
          pricing {
            name
            amount
          }
          image(width: 1520, height: 2000)
        }
      }
    }

    organization(id: "zuly-pizza") {
      logos {
        white {
          image
        }
      }
    }
  }
</page-query>

<script>
import { MenuHero, Pizza } from '~/components'
import { createPageMeta } from '~/meta'

export default {
  metaInfo () {
    return createPageMeta('menu', this.$static.metadata)
  },
  name: 'MenuPage',
  components: {
    MenuHero,
    Pizza
  },
  data () {
    return {
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
