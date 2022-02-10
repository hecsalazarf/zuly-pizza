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
            :src="mapUri"
          />
        </v-lazy>
        <iframe
          v-if="noLazyMap"
          class="w-full h-auto border-none map-frame rounded"
          :src="mapUri"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { agentFeatures } from '~/utils'
const { hasIntersectionObserver } = agentFeatures

export default {
  name: 'FindUs',
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    mapUri: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      noLazyMap: false
    }
  },
  computed: {
    phone () {
      const { main, alternative } = this.value.addresses[0].phones
      return {
        main,
        alternative
      }
    },
    address () {
      const { street, province, region } = this.value.addresses[0]
      return {
        street,
        province,
        region
      }
    },
    schedule () {
      const { fromDay, fromTime, toDay, toTime } = this.value.schedule
      return {
        fromDay,
        fromTime,
        toDay,
        toTime
      }
    }
  },
  mounted () {
    if (!hasIntersectionObserver()) {
      this.noLazyMap = true
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
