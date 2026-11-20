import { computed, ref, watch } from 'vue'
import { supportedLocales, translations } from '../data/copy'

const storageKey = 'onafa-locale'

function readStoredLocale() {
  if (typeof window === 'undefined') return 'pt'

  try {
    const storedLocale = window.localStorage.getItem(storageKey)
    return supportedLocales.includes(storedLocale) ? storedLocale : 'pt'
  } catch {
    return 'pt'
  }
}

const locale = ref(readStoredLocale())
const copy = computed(() => translations[locale.value])

watch(locale, (value) => {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(storageKey, value)
  } catch {
    // A blocked storage API should never stop language selection.
  }
})

export function useLocale() {
  function setLocale(value) {
    if (supportedLocales.includes(value)) locale.value = value
  }

  return { locale, copy, setLocale }
}
