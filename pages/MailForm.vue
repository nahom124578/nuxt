<template>
  <div class="min-h-screen flex items-center justify-center bg-black overflow-hidden">
    <div class="h-screen bg-black p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-500">
      
      <!-- Welcome component at the top -->
      <Welcome />

      <div class="text-center text-gray-400 text-sm mb-7">
        Enter your email
      </div>

      <!-- Email input field with icon -->
      <form @submit.prevent="handleSubmit" class="mb-6">
        
        <InputField v-model="email" placeholder="Email Address" :icon="['fas', 'envelope']" />

        <!-- Submit button styled using Tailwind -->
        <Button
          type="submit"
          :class="{
            'border-gray-300': emailPattern.test(email),
            'cursor-not-allowed border-transparent': !emailPattern.test(email)
          }"
          :disabled="!emailPattern.test(email)"
        >
          Enter
        </Button>
      </form>

      <!-- Divider line and "Or" text -->
      <div class="flex items-center justify-between mb-6">
        <span class="w-1/2 border-b border-transparent bg-gradient-to-r from-black to-gray-300 h-0.5"></span>
        <span class="text-sm text-gray-400 px-3">Or</span>
        <span class="w-1/2 border-b border-transparent bg-gradient-to-l from-black to-gray-300 h-0.5"></span>
      </div>

      <!-- Social buttons for Google, Facebook, Apple -->
      <div class="space-y-3 mb-6">
        <SocialButton @click="handleGoogleLogin" class="w-full bg-white text-black flex items-center justify-center py-2 rounded hover:bg-gray-200 transition duration-300">
          <template #icon>
            <img src="../static/google.png" alt="Google" class="h-5 w-5" />
          </template>
          <template #text>
            Continue with Google
          </template>
        </SocialButton>

        <SocialButton @click="handleFacebookLogin" class="w-full bg-blue-600 text-white flex items-center justify-center py-2 rounded hover:bg-blue-700 transition duration-300">
          <template #icon>
            <img src="../static/facebook.png" alt="Facebook" class="h-5 w-5" />
          </template>
          <template #text>
            Continue with Facebook
          </template>
        </SocialButton>

        <SocialButton @click="handleAppleLogin" class="w-full bg-black text-white flex items-center justify-center py-2 rounded hover:bg-gray-800 transition duration-300">
          <template #icon>
            <font-awesome-icon :icon="['fab', 'apple']" class="h-5 w-5 text-white" />
          </template>
          <template #text>
            Continue with Apple
          </template>
        </SocialButton>
      </div>

      <!-- Terms & Conditions link -->
      <div class="text-center mt-3 -mb-8">
        <a href="#" class="text-xs text-gray-500 hover:text-gray-400 transition duration-300">Terms & Conditions</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SocialButton from '../components/atoms/SocialButton.vue';
import Button from '../components/atoms/Buttons.vue'; // Adjust as necessary
import InputField from '../components/atoms/InputField.vue';
import { store } from './store'; // Ensure the store is imported correctly
import Welcome from '../components/molecules/Welcome.vue';
import { useRouter } from 'vue-router'; // Import useRouter

const email = ref(''); // Use ref for email
const router = useRouter(); // Initialize router

// Regular expression for email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleSubmit = async () => {
  // Check if email is empty
  if (!email.value) {
    alert('Email field cannot be empty.');
    return;
  }

  // Check if the email is in a valid format
  if (!emailPattern.test(email.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Proceed with email registration check
  try {
    const isRegistered = store.isEmailRegistered(email.value); // Check if the email is registered
    if (isRegistered) {
      // If the email is registered, navigate to LoginField
      console.log('Email is registered, navigating to LoginField.');
      router.push('/LoginField'); // Navigate to LoginField if registered
    } else {
      // If the email is not registered, navigate to register page with email as query parameter
      console.log('Navigating to register page with email:', email.value); // Debugging log
      router.push({ path: '/register', query: { email: email.value } });
    }
  } catch (error) {
    console.error('Error checking email registration:', error);
  }
};

const handleGoogleLogin = () => {
  // Handle Google login logic
};

const handleFacebookLogin = () => {
  // Handle Facebook login logic
};

const handleAppleLogin = () => {
  // Handle Apple login logic
};
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
