<template>
  <div class="rounded-sm p-4 mb-7 flex items-center justify-between shadow-sm border border-gray-800 bg-cover bg-center" :class="bgImageClass">
    <img src="../../static/logo.png" alt="Logo" class="w-25 h-20 mr-16 mb-2" />
    <div class="text-left flex-1">
      <h2 class="text-xl text-white font-semibold mb-2">Welcome to Aladia,</h2>
      <p class="text-gray-400 text-sm">Create or access your<br />account from here</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImageClass: 'bg-[url(../../static/bgimage.jpg)]', // Use Tailwind's arbitrary value syntax
    };
  },
};
</script>

<style scoped>
/* Scoped CSS for the background image is not needed as it is handled by Tailwind */
</style>
