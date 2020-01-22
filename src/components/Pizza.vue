<template>
  <v-row no-gutters>
    <v-col
      cols="6"
      class="relative"
      :order="imageRight ? 2 : 0"
    >
      <v-btn
        color="primary"
        dark
        class="absolute pricing-btn"
        elevation="5"
        fab
        small
        aria-label="botón ver precios de pizza"
        @click="showPricing = !showPricing"
      >
        <font-awesome-icon
          :icon="['fas', 'dollar-sign']"
          size="lg"
        />
      </v-btn>
      <g-image
        class="w-full h-full rounded"
        alt="imagen de pizza"
        :src="value.image"
      />
      <v-scale-transition origin="center">
        <div
          v-show="showPricing"
          class="w-full h-full absolute accent rounded pricing-container secondary--text headline pa-3"
        >
          <ul class="pricing-list pa-0">
            <li
              v-for="(price, index) in value.pricing"
              :key="index"
              class="d-flex"
            >
              <strong class="d-flex flex-grow-1 pricing-item">{{ price.name }}</strong>
              <em>${{ price.amount }}</em>
            </li>
          </ul>
        </div>
      </v-scale-transition>
    </v-col>
    <v-col
      cols="6"
      class="description-container pa-2"
      order="1"
    >
      <p class="headline font-weight-bold accent--text">
        {{ value.name }}
      </p>
      <p class="title">
        {{ value.description }}
      </p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PizzaItem',
  props: {
    value: {
      type: Object,
      default: () => ({
        title: '',
        description: '',
        image: '',
        pricing: []
      })
    },
    imageRight: Boolean
  },
  data () {
    return {
      showPricing: false
    }
  }
}
</script>

<style lang="scss" scoped>
.pricing-btn {
  bottom: 5px;
  right: 5px;
  z-index: 2;
}

.pricing-container {
  top: 0;
  opacity: 0.9;
}

.pricing-item::after {
  content: '';
  border-bottom: dashed 1px gray;
  flex:1;
  margin-bottom: 10px;
  margin-left: 0.5em;
  margin-right: 0.5em;
}

.pricing-list {
  list-style-type: none;
}
</style>
