<template>
  <label class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="hidden" 
    />
    <span
      class="w-5 h-5 border-2 rounded flex items-center justify-center mr-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500"
      :class="{
        'bg-black border-gray-300': modelValue, // Checked styles
        'bg-black border-gray-700': !modelValue, // Unchecked styles
        'border-gray-700 hover:border-gray-300': !modelValue // Hover styles
      }"
    >
      <font-awesome-icon 
        v-if="modelValue" 
        :icon="['fas', 'check']" 
        class="text-white" 
      />
    </span>
    <slot></slot> 
  </label>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* Optional: Add any custom styles if necessary */
</style>
