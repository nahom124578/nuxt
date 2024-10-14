<template>
  <div class="w-full">
    <button
      :type="type"
      class="cursor-pointer w-full bg-black rounded-md text-sm font-normal text-white px-6 py-2 transition duration-300 ease-in-out text-center hover:border-gray-300 hover:border hover:bg-transparent"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style scoped>
/* Keep the background image static and cover the button */
button {
  background-image: url('/static/bgimage.jpg'); /* Adjust the path as necessary */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* On hover, keep the image background and show a gray border */
button:hover {
  background-image: url('/static/bgimage.jpg'); /* Keeps the background image on hover */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
