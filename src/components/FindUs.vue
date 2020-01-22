<template>
  <v-container class="neutral--text">
    <v-row align="center">
      <v-col
        cols="12"
        md="6"
        class="text-center display-1"
      >
        <p class="text-accent">
          Encuéntranos
        </p>
        <v-row class="text-left">
          <v-col cols="1">
            <font-awesome-icon
              :icon="['fas', 'phone-alt']"
              class="primary--text business-info-icon"
              size="xs"
            />
          </v-col>
          <v-col>
            Llámanos o escríbenos al <span class="font-weight-bold">{{ phone.main }}</span>
            y <span class="font-weight-bold">{{ phone.alternative }}</span>
          </v-col>
        </v-row>
        <v-row class="text-left">
          <v-col cols="1">
            <font-awesome-icon
              :icon="['fas', 'map-marked-alt']"
              class="primary--text business-info-icon"
              size="xs"
            />
          </v-col>
          <v-col>
            <span class="font-weight-bold">{{ address.street }}</span> {{ address.province }}, {{ address.region }}
          </v-col>
        </v-row>
        <v-row class="text-left">
          <v-col cols="1">
            <font-awesome-icon
              :icon="['fas', 'clock']"
              class="primary--text business-info-icon"
              size="xs"
            />
          </v-col>
          <v-col>
            Abierto de {{ schedule.fromDay }} a {{ schedule.toDay }} <span class="font-weight-bold">{{ schedule.fromTime }} - {{ schedule.toTime }}</span>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-lazy>
          <iframe
            class="w-full h-auto border-none map-frame rounded"
            :src="mapFrameUrl"
          />
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<static-query>
  query {
    organization(id: "upizza") {
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
      schedule {
        fromDay
        toDay
        fromTime
        toTime
      }
    }
  }
</static-query>

<script>
export default {
  name: 'FindUs',
  computed: {
    mapFrameUrl () {
      return `${process.env.GRIDSOME_GMAPS_EMBED_URL}?q=${process.env.GRIDSOME_GMAPS_QUERY}&key=${process.env.GRIDSOME_GMAPS_API_KEY}`
    },
    phone () {
      const { main, alternative } = this.$static.organization.addresses[0].phones
      return {
        main,
        alternative
      }
    },
    address () {
      const { street, province, region } = this.$static.organization.addresses[0]
      return {
        street,
        province,
        region
      }
    },
    schedule () {
      const { fromDay, fromTime, toDay, toTime } = this.$static.organization.schedule
      return {
        fromDay,
        fromTime,
        toDay,
        toTime
      }
    }
  }
}
</script>

<style lang="scss" scoped>
iframe.map-frame {
  height: 70vh;
}

.business-info-icon {
  margin-bottom: 7px;
}
</style>
