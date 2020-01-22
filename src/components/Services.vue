<template>
  <v-container class="fill-height neutral--text">
    <v-row class="text-center display-1">
      <v-col cols="12">
        <p class="text-accent">
          Tenemos los mejores servicios para ti
        </p>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col
            v-for="item in $static.services.edges"
            :key="item.node.id"
            cols="12"
            md="4"
          >
            <v-row>
              <v-col cols="12">
                <font-awesome-icon
                  :icon="item.node.icon.split(' ')"
                  size="2x"
                  :class="item.node.iconClass"
                />
              </v-col>
              <v-col cols="12">
                <p> {{ item.node.description }}</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<static-query>
  query {
    services: allService(sortBy: "name", order: ASC) {
      edges {
        node {
          id
          description
          icon
          iconClass
        }
      }
    }
  }
</static-query>

<script>
export default {
  name: 'Services'
}
</script>
