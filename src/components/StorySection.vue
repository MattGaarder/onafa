<script setup>
import { useLocale } from '../composables/useLocale'
import { media } from '../data/site'

const { copy } = useLocale()
</script>

<template>
  <section id="historia" class="story section-wrap" aria-labelledby="story-title">
    <div class="story__heading">
      <p class="eyebrow">{{ copy.story.eyebrow }}</p>
      <h2 id="story-title">{{ copy.story.title[0] }}<br /><em>{{ copy.story.title[1] }}</em></h2>
    </div>

    <div class="story__grid">
      <figure class="story__photo">
        <img
          :src="media.interior"
          :alt="copy.story.imageAlt"
          loading="lazy"
        />
        <figcaption>{{ copy.story.caption }}</figcaption>
      </figure>

      <div class="story__copy">
        <p class="story__lead">{{ copy.story.lead }}</p>
        <p v-for="paragraph in copy.story.paragraphs" :key="paragraph">{{ paragraph }}</p>

        <div class="story__definition">
          <span class="story__definition-term">{{ copy.story.term }}</span>
          <span class="story__definition-sound">{{ copy.story.sound }}</span>
          <p>{{ copy.story.definition }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
