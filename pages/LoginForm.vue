<template>
    <div class="min-h-screen flex items-center justify-center bg-black">
      <div class="bg-black p-8 rounded-lg h-screen shadow-lg w-full max-w-md border border-gray-700">
        <BackToLogin />
        <div class="text-center text-gray-100 text-sm mb-7 font-normal">
          Enter your Password
        </div>
        <PasswordField v-model:password="password" />
        <div class="text-right mb-5">
          <a href="#" class="underline text-gray-300 text-sm">Forgot Password?</a>
        </div>
        <Button type="submit" @click="submitPassword">Enter</Button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Button from "../components/atoms/Buttons.vue";
  import BackToLogin from "../components/atoms/BackToLogin.vue";
  import PasswordField from "../components/atoms/PasswordField.vue";
  
  const password = ref('');
  
  const submitPassword = () => {
    console.log('Checking password...');
    
    // Mock password check
    if (password.value === 'correctpassword') {
      console.log('Password correct. Triggering login success...');
      // Emit an event to the parent to show the login success page
      emit('loginSuccess');
    } else {
      alert('Incorrect password. Please try again.');
    }
  };
  </script>
  