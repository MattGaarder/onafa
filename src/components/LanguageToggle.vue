<script setup>
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="language-toggle" role="group" :aria-label="label">
    <button
      v-for="option in options"
      :key="option.code"
      type="button"
      :aria-label="option.label"
      :aria-pressed="modelValue === option.code"
      @click="$emit('update:modelValue', option.code)"
    >
      {{ option.short }}
    </button>
  </div>
</template>
