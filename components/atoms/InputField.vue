<template>
  <div class="mb-5 relative">
    <span class="absolute inset-y-0 left-0 flex items-center pl-3">
      <font-awesome-icon :icon="icon" class="h-4 w-4 text-gray-700" /> <!-- Icon remains unchanged -->
    </span>
    <!-- Wrap input in a div for opacity control -->
    <div :class="{ 'opacity-80': isClicked }" @click="toggleClick">
      <input
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full py-1 px-2 pl-10 border border-gray-600 rounded-md bg-white text-black placeholder-gray-700 focus:outline-none focus:border-gray-500 transition duration-150"
      />
    </div>
    <span v-if="toggleIcon" class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" @click="toggle">
      <font-awesome-icon :icon="toggleIcon" class="h-4 w-4 text-gray-700" /> <!-- Icon remains unchanged -->
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false, // State to track the clicked status
    };
  },
  props: {
    modelValue: {
      type: String,
      default: '', // Default value for modelValue
    },
    type: {
      type: String,
      default: 'text', // Default input type
    },
    placeholder: {
      type: String,
      default: '', // Default placeholder
    },
    icon: {
      type: Object,
      default: () => ({}), // Default icon object
    },
    toggleIcon: {
      type: Object,
      default: () => ({}), // Default toggle icon object
    },
  },
  methods: {
    toggle() {
      this.$emit('toggle'); // Emit toggle event
    },
    toggleClick() {
      this.isClicked = !this.isClicked; // Toggle the clicked state on input click
    },
  },
};
</script>

<style scoped>
/* Optional: Add any custom styles if necessary */
</style>
