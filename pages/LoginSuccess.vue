<template>
  <div class="flex justify-center items-center min-h-screen bg-black">
    <!-- Verification Modal -->
    <div class="bg-black p-12 rounded-lg h-full text-center max-w-md w-full shadow-lg border border-gray-700">
      <!-- Logo -->
       <div class="text-center text-white font-semibold mb-10">Thanks for joining Aladia</div>
      <div class="mb-10">
        <img src="../static/logo.png" alt="Logo" class="w-24 h-auto mx-auto" />
      </div>
        
        <div class="mb-10 text-center text-white">
          <h2 class="text-xl font-semibold mb-5">Login Successful</h2>
          <p class="text-white/70">You can now access your account.</p>
        </div>
        <div class="text-white mb-10">
          <Button type="submit" @click="handleSubmit">Go To Market Place</Button>
        </div>
      </div>
      </div>
    
</template>

<script>

import Button from '../components/atoms/Buttons.vue';

export default {
  
  components: {
   
    Button,
    
  },
  data() {
    return {
    };
  },
  
};
</script>

<style scoped>
/* Add any custom styles if necessary */
</style>
