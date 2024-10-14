<template>
  <div class="flex justify-center items-center min-h-screen bg-black">
    <!-- Verification Modal -->
    <div class="bg-black p-12 rounded-lg h-full text-center max-w-md w-full shadow-lg border border-gray-700">
      <!-- Logo -->
      <div class="mb-6">
        <img src="../static/logo.png" alt="Logo" class="w-24 h-auto mx-auto" />
      </div>

      <!-- Display Name and Surname Below Logo -->
      <div class="text-white text-2xl mb-6">
        {{ fullName }}
      </div>

      <!-- Company Info and Message -->
      <div>
        <p class="text-gray-400">Thanks for joining Aladia</p>
        <p class="text-gray-400">
          Please enter below the 6-digit code we sent you through your registration e-mail:
        </p>
      </div>

      <!-- Code Input Fields -->
      <div class="flex justify-between mt-6 mb-4">
        <CodeInput v-for="n in 6" :key="n" v-model="code[n-1]" />
      </div>

      <!-- Submit Button -->
      <Button @click="handleSubmit">Enter</Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CodeInput from '../components/atoms/CodeInput.vue';
import Button from '../components/atoms/Buttons.vue';

const props = defineProps({
  fullName: {
    type: String,
    required: true,
  },
});

// Remove `useRoute` and define `code` directly
const code = ref(['', '', '', '', '', '']);

// Handle form submission
const handleSubmit = () => {
  const verificationCode = code.value.join('');
  console.log('Submitted verification code:', verificationCode);
  console.log('Full Name:', props.fullName); // Log the full name
  // Add your verification logic here
};
</script>

<style scoped>
/* No custom styles needed since all are using Tailwind CSS */
</style>
