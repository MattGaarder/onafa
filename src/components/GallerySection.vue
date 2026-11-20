<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import imagesLoaded from 'imagesloaded'
import Masonry from 'masonry-layout'
import { useLocale } from '../composables/useLocale'

const { copy } = useLocale()
const galleryImages = computed(() => copy.value.gallery.images)
const galleryGrid = ref(null)
const galleryDialog = ref(false)
const selectedImageId = ref('table')
const selectedImage = computed(
  () => galleryImages.value.find((image) => image.id === selectedImageId.value) ?? galleryImages.value[0]
)

let masonry
let galleryLoader

function layoutGallery() {
  masonry?.layout()
}

function createMasonry() {
  if (!galleryGrid.value) return

  masonry = new Masonry(galleryGrid.value, {
    itemSelector: '.gallery-card',
    columnWidth: '.gallery__sizer',
    gutter: '.gallery__gutter-sizer',
    percentPosition: true,
    transitionDuration: '0.25s'
  })

  galleryLoader = imagesLoaded(galleryGrid.value)
  galleryLoader.on('progress', layoutGallery)
  layoutGallery()
}

function showImage(image) {
  selectedImageId.value = image.id
  galleryDialog.value = true
}

onMounted(async () => {
  await nextTick()
  createMasonry()
})

watch(galleryImages, async () => {
  await nextTick()
  masonry?.reloadItems()
  layoutGallery()
})

onBeforeUnmount(() => {
  galleryLoader?.off('progress', layoutGallery)
  masonry?.destroy()
})
</script>

<template>
  <section id="galeria" class="gallery section-wrap" aria-labelledby="gallery-title">
    <div class="gallery__intro">
      <div>
        <p class="eyebrow">{{ copy.gallery.eyebrow }}</p>
        <h2 id="gallery-title">{{ copy.gallery.title[0] }}<br /><em>{{ copy.gallery.title[1] }}</em></h2>
      </div>
      <p>{{ copy.gallery.intro }}</p>
    </div>

    <div ref="galleryGrid" class="gallery__grid">
      <div class="gallery__sizer" aria-hidden="true"></div>
      <div class="gallery__gutter-sizer" aria-hidden="true"></div>
      <button
        v-for="image in galleryImages"
        :key="image.id"
        type="button"
        :class="['gallery-card', `gallery-card--${image.layout}`]"
        :aria-label="`${copy.gallery.expandImage}: ${image.label}`"
        @click="showImage(image)"
      >
        <img :src="image.src" :alt="image.alt" loading="lazy" />
        <span class="gallery-card__label">{{ image.label }}</span>
      </button>
    </div>

    <q-dialog v-model="galleryDialog" class="gallery-dialog" transition-show="fade" transition-hide="fade">
      <q-card class="gallery-dialog__card">
        <q-btn
          round
          flat
          dense
          icon="close"
          class="gallery-dialog__close"
          :aria-label="copy.gallery.closeImage"
          @click="galleryDialog = false"
        />
        <img :src="selectedImage.src" :alt="selectedImage.alt" />
        <p>{{ selectedImage.label }}</p>
      </q-card>
    </q-dialog>
  </section>
</template>
