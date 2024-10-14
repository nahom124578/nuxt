<template>
  <div class="text-center mb-2 -mt-8">
    <router-link
      to="/MailForm" 
      class="text-gray-200 text-sm flex items-center justify-center mx-auto"
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
    >
      <template v-if="hovered">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        <span> Back to Log In</span>
      </template>
      <template v-else>
        <span> < Back to Log In</span>
      </template>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hovered: false,
    };
  },
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
