<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import BrandLogo from './components/BrandLogo.vue'
import GallerySection from './components/GallerySection.vue'
import HeroSection from './components/HeroSection.vue'
import LanguageToggle from './components/LanguageToggle.vue'
import MenuSection from './components/MenuSection.vue'
import ReservationDialog from './components/ReservationDialog.vue'
import StorySection from './components/StorySection.vue'
import VisitSection from './components/VisitSection.vue'
import { useLocale } from './composables/useLocale'
import { restaurant } from './data/site'

const drawerOpen = ref(false)
const reservationOpen = ref(false)
const headerRaised = ref(false)
const { locale, copy } = useLocale()
const navigation = computed(() => copy.value.navigation)

function scrollToSection(target, closeDrawer = false) {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  if (closeDrawer) drawerOpen.value = false
}

function updateHeader() {
  headerRaised.value = window.scrollY > 24
}

function updateDocumentMetadata(localizedCopy) {
  if (typeof document === 'undefined') return

  document.documentElement.lang = localizedCopy.meta.lang
  document.title = localizedCopy.meta.title
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', localizedCopy.meta.description)
}

watch(copy, updateDocumentMetadata, { immediate: true })

onMounted(() => {
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
})

onBeforeUnmount(() => window.removeEventListener('scroll', updateHeader))
</script>

<template>
  <q-layout view="hHh Lpr fFf" class="site-layout">
    <q-header :class="['site-header', { 'site-header--raised': headerRaised }]" height-hint="72">
      <q-toolbar class="site-toolbar">
        <button type="button" class="site-brand" :aria-label="copy.a11y.goHome" @click="scrollToSection('inicio')">
          <BrandLogo class="site-brand__logo" alt="" />
        </button>

        <nav class="desktop-nav" :aria-label="copy.a11y.primaryNavigation">
          <button
            v-for="item in navigation"
            :key="item.target"
            type="button"
            @click="scrollToSection(item.target)"
          >
            {{ item.label }}
          </button>
        </nav>

        <div class="site-toolbar__actions">
          <LanguageToggle
            v-model="locale"
            class="language-toggle--header"
            :label="copy.language.selector"
            :options="copy.language.options"
          />
          <q-btn
            no-caps
            flat
            dense
            class="header-reserve"
            :label="copy.header.reserve"
            @click="reservationOpen = true"
          />
          <q-btn
            flat
            dense
            round
            icon="menu"
            class="mobile-menu"
            :aria-label="copy.a11y.openNavigation"
            @click="drawerOpen = true"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawerOpen"
      side="right"
      overlay
      behavior="mobile"
      :width="Math.min(420, 88 * 4.2)"
      class="site-drawer"
    >
      <div class="drawer-content">
        <div class="drawer-content__bar">
          <BrandLogo class="drawer-brand-logo" :alt="copy.a11y.logo" />
          <q-btn round flat dense icon="close" :aria-label="copy.a11y.closeNavigation" @click="drawerOpen = false" />
        </div>
        <nav class="drawer-nav" :aria-label="copy.a11y.mobileNavigation">
          <button
            v-for="(item, index) in navigation"
            :key="item.target"
            type="button"
            @click="scrollToSection(item.target, true)"
          >
            <span>0{{ index + 1 }}</span>{{ item.label }}
          </button>
        </nav>
        <div class="drawer-content__bottom">
          <LanguageToggle
            v-model="locale"
            class="language-toggle--drawer"
            :label="copy.language.selector"
            :options="copy.language.options"
          />
          <p>{{ restaurant.city }}</p>
          <q-btn
            no-caps
            unelevated
            class="button button--light"
            :label="copy.hero.reserve"
            @click="reservationOpen = true; drawerOpen = false"
          />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <q-page>
        <main>
          <HeroSection @reserve="reservationOpen = true" @explore="scrollToSection('cozinha')" />
          <StorySection />
          <MenuSection />
          <GallerySection />
          <VisitSection @reserve="reservationOpen = true" />
        </main>

        <footer class="site-footer">
          <div class="site-footer__brand">
            <BrandLogo class="site-footer__logo" :alt="copy.a11y.logo" />
          </div>
          <div class="site-footer__links">
            <button type="button" @click="scrollToSection('inicio')">{{ copy.footer.home }}</button>
            <a :href="restaurant.mapsUrl" target="_blank" rel="noreferrer">{{ copy.footer.directions }}</a>
            <button type="button" @click="reservationOpen = true">{{ copy.footer.reserve }}</button>
          </div>
          <p class="site-footer__note">{{ copy.footer.note }}</p>
        </footer>
      </q-page>
    </q-page-container>

    <q-page-sticky position="bottom-right" :offset="[18, 18]" class="mobile-reservation">
      <q-btn
        round
        unelevated
        icon="event_available"
        color="secondary"
        :aria-label="copy.a11y.reservation"
        @click="reservationOpen = true"
      />
    </q-page-sticky>

    <ReservationDialog v-model="reservationOpen" />
  </q-layout>
</template>
