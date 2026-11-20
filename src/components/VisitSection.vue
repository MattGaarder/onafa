<script setup>
import { useLocale } from '../composables/useLocale'
import { restaurant } from '../data/site'

const { copy } = useLocale()

defineEmits(['reserve'])
</script>

<template>
  <section id="visite" class="visit" aria-labelledby="visit-title">
    <div class="visit__image" aria-hidden="true"></div>
    <div class="visit__content">
      <p class="eyebrow eyebrow--light">{{ copy.visit.eyebrow }}</p>
      <h2 id="visit-title">{{ copy.visit.title[0] }}<br /><em>{{ copy.visit.title[1] }}</em></h2>
      <p class="visit__intro">{{ copy.visit.intro }}</p>

      <div class="visit__details">
        <div>
          <span>{{ copy.visit.addressLabel }}</span>
          <p v-for="line in restaurant.address" :key="line">{{ line }}</p>
          <a :href="restaurant.mapsUrl" target="_blank" rel="noreferrer">{{ copy.visit.maps }}</a>
        </div>
        <div>
          <span>{{ copy.visit.reservationsLabel }}</span>
          <p>{{ copy.visit.reservationsCopy[0] }}<br />{{ copy.visit.reservationsCopy[1] }}</p>
          <button type="button" class="visit__reserve-link" @click="$emit('reserve')">
            {{ copy.visit.reserve }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
