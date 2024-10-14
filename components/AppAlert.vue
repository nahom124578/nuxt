<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-1000" @click.self="close">
    <div class="bg-white p-4 rounded-lg shadow-lg relative w-full max-w-md">
      <button class="absolute top-2 right-3 text-gray-600 hover:text-gray-800" @click="close">&times;</button>
      <slot></slot>
      <!-- This is where the Login component will be injected -->
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:visible"]);

const close = () => {
  emit("update:visible", false);
};
</script>

<style scoped>
/* You can remove the previous styles if they are not needed anymore */
</style>
