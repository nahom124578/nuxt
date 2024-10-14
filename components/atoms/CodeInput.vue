<template>
    <input
      type="text"
      maxlength="1"
      class="w-10 h-10 text-2xl text-center border border-gray-600 rounded bg-white text-black focus:border-gray-500 focus:outline-none"
      :value="modelValue"  <!-- Bind the value to modelValue -->
      "  <!-- Emit event on input -->
    />
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: String,
      default: '',
    },
  });
  
  const emit = defineEmits(['update:modelValue']);  // Define emit for v-model
  
  const updateValue = (value) => {
    emit('update:modelValue', value);  // Emit the updated value
  };
  </script>
  
  <style scoped>
  /* No custom styles needed since all are using Tailwind CSS */
  </style>
  