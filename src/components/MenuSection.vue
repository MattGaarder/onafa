<script setup>
import { computed, ref } from 'vue'
import { useLocale } from '../composables/useLocale'

const { copy } = useLocale()
const activeChapter = ref('partilhar')
const menuChapters = computed(() => copy.value.menu.chapters)
const currentChapter = computed(
  () => menuChapters.value.find((chapter) => chapter.id === activeChapter.value) ?? menuChapters.value[0]
)
</script>

<template>
  <section id="cozinha" class="menu-showcase" aria-labelledby="kitchen-title">
    <div class="menu-showcase__intro section-wrap">
      <div>
        <p class="eyebrow eyebrow--light">{{ copy.menu.eyebrow }}</p>
        <h2 id="kitchen-title">{{ copy.menu.title[0] }}<br /><em>{{ copy.menu.title[1] }}</em></h2>
      </div>
      <p>{{ copy.menu.intro }}</p>
    </div>

    <div class="menu-showcase__content section-wrap">
      <q-tabs
        v-model="activeChapter"
        class="menu-tabs"
        active-color="white"
        indicator-color="accent"
        align="left"
        narrow-indicator
      >
        <q-tab
          v-for="chapter in menuChapters"
          :key="chapter.id"
          :name="chapter.id"
          :label="chapter.label"
          no-caps
        />
      </q-tabs>

      <q-tab-panels v-model="activeChapter" animated class="menu-panels">
        <q-tab-panel
          v-for="chapter in menuChapters"
          :key="chapter.id"
          :name="chapter.id"
          class="menu-panel"
        >
          <div class="menu-panel__copy">
            <span class="menu-panel__number">{{ chapter.number }}</span>
            <h3>{{ chapter.title }}</h3>
            <p>{{ chapter.body }}</p>
            <ul>
              <li v-for="note in chapter.notes" :key="note">{{ note }}</li>
            </ul>
          </div>
          <figure class="menu-panel__image">
            <img :src="chapter.image" :alt="chapter.alt" loading="lazy" />
          </figure>
        </q-tab-panel>
      </q-tab-panels>

      <p class="menu-showcase__footer">
        <span>{{ copy.menu.footer }}</span>
        <span aria-hidden="true">·</span>
        <span>{{ currentChapter.label }}</span>
      </p>
    </div>
  </section>
</template>
