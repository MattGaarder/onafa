<script setup>
import { media } from '../data/site'

defineProps({
  alt: {
    type: String,
    default: 'Onafã'
  }
})
</script>

<template>
  <img class="brand-logo" :src="media.logo" :alt="alt" />
</template>
