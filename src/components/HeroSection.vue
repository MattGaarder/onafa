<script setup>
import BrandLogo from './BrandLogo.vue'
import { useLocale } from '../composables/useLocale'
import { media } from '../data/site'

const { copy } = useLocale()

defineEmits(['reserve', 'explore'])
</script>

<template>
  <section id="inicio" class="hero" aria-labelledby="hero-title">
    <div class="hero__copy">
      <p class="eyebrow eyebrow--light">{{ copy.hero.location }}</p>
      <h1 id="hero-title" class="hero__brand">
        <BrandLogo class="hero__logo" :alt="copy.a11y.logo" />
      </h1>
      <p class="hero__statement">
        {{ copy.hero.statement[0] }}<br />
        {{ copy.hero.statement[1] }}
      </p>
      <div class="hero__actions">
        <q-btn
          no-caps
          unelevated
          class="button button--light"
          :label="copy.hero.reserve"
          @click="$emit('reserve')"
        />
        <button type="button" class="text-link text-link--light" @click="$emit('explore')">
          {{ copy.hero.explore }}
        </button>
      </div>
      <p class="hero__note">{{ copy.hero.noteBefore }}<em>on a faim</em>{{ copy.hero.noteAfter }}</p>
    </div>

    <figure class="hero__image-frame">
      <img
        :src="media.exterior"
        :alt="copy.hero.imageAlt"
        class="hero__image"
        fetchpriority="high"
      />
      <figcaption class="hero__caption">{{ copy.hero.caption }}</figcaption>
    </figure>

    <div class="hero__scroll-cue" aria-hidden="true">
      <span></span>
      {{ copy.hero.scrollCue }}
    </div>
  </section>
</template>
