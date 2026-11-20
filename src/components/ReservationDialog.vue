<script setup>
import { reactive } from 'vue'
import { useLocale } from '../composables/useLocale'
import { reservationUrl } from '../data/site'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])
const { copy } = useLocale()

const form = reactive({
  name: '',
  date: '',
  guests: '',
  notes: ''
})

function close() {
  emit('update:modelValue', false)
}

function continueToWhatsApp() {
  const whatsappCopy = copy.value.reservation.whatsapp
  const details = [
    whatsappCopy.greeting,
    '',
    `${whatsappCopy.name}: ${form.name}`,
    form.date ? `${whatsappCopy.date}: ${form.date}` : '',
    form.guests ? `${whatsappCopy.guests}: ${form.guests}` : '',
    form.notes ? `${whatsappCopy.notes}: ${form.notes}` : ''
  ].filter(Boolean)

  window.open(reservationUrl(details.join('\n')), '_blank', 'noopener,noreferrer')
  close()
}
</script>

<template>
  <q-dialog :model-value="props.modelValue" @update:model-value="emit('update:modelValue', $event)">
    <q-card class="reservation-card">
      <div class="reservation-card__topline">
        <p class="eyebrow">{{ copy.reservation.eyebrow }}</p>
        <q-btn round dense flat icon="close" :aria-label="copy.reservation.close" @click="close" />
      </div>
      <h2>{{ copy.reservation.title[0] }}<br /><em>{{ copy.reservation.title[1] }}</em></h2>
      <p class="reservation-card__intro">{{ copy.reservation.intro }}</p>

      <q-form class="reservation-form" @submit="continueToWhatsApp">
        <q-input
          v-model="form.name"
          outlined
          :label="copy.reservation.name"
          :rules="[(value) => !!value || copy.reservation.validation.name]"
        />
        <div class="reservation-form__two-columns">
          <q-input v-model="form.date" outlined type="date" :label="copy.reservation.date" stack-label />
          <q-select
            v-model="form.guests"
            outlined
            :label="copy.reservation.guests"
            :options="copy.reservation.guestOptions"
            :rules="[(value) => !!value || copy.reservation.validation.guests]"
          />
        </div>
        <q-input
          v-model="form.notes"
          outlined
          type="textarea"
          autogrow
          :label="copy.reservation.notes"
        />
        <q-btn
          type="submit"
          no-caps
          unelevated
          class="button button--primary reservation-form__submit"
          :label="copy.reservation.submit"
        />
      </q-form>
    </q-card>
  </q-dialog>
</template>
