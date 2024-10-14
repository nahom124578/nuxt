<template>
  <button
    class="w-full flex items-center justify-start rounded-md border border-gray-600 bg-black text-white px-2 py-1 transition duration-300 ease-in-out hover:bg-gray-600"
    @click="$emit('click')"
  >
    <span class="w-6 h-6 flex items-center justify-center mr-2">
      <slot name="icon" />
    </span>
    <span class="text-left text-sm"> <!-- Added text-sm for smaller text -->
      <slot name="text" />
    </span>
  </button>
</template>

<script>
export default {
  name: 'SocialButton',
};
</script>

<style scoped>
/* Ensures the button maintains the background color transition */
button {
  background-color: black; /* Set background to black */
  transition: background-color 0.3s ease-in-out;
}
</style>
