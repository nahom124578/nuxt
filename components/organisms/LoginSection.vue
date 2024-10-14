<template>
    <LoginForm v-if="!isRegistrationMode" @loginSuccess="handleLoginSuccess" />
    <RegistrationForm
      v-if="isRegistrationMode"
      :email="email"
      @goBackToLogin="goBackToLogin"
      @registrationSuccessfull="registrationSuccessfull"
    />
    <loginSuccess v-if="hasRegistered" />
  </template>
  
  <script setup>
  import { ref } from "vue";
  import LoginForm from "../../pages/LoginForm.vue";
  import RegistrationForm from "../molecules/RegistrationForm.vue";
  import loginSuccess from "../../pages/LoginSuccess.vue";
  
  const isLoginVisible = ref(false);
  const isRegistrationMode = ref(false);
  const hasRegistered = ref(false);
  const email = ref("");
  
  const showLogin = () => {
    isLoginVisible.value = true;
    isRegistrationMode.value = false; // Show login by default
  };
  
  const handleLoginSuccess = (userEmail) => {
    console.log("Login successful for email:", userEmail);
    email.value = userEmail; // Store the email for registration
    isRegistrationMode.value = true; // Switch to registration mode
  };
  
  const registrationSuccessfull = () => {
    console.log("Registration successful for email:", email.value);
    hasRegistered.value = true;
  };
  
  const goBackToLogin = () => {
    isRegistrationMode.value = false; // Switch back to login
  };
  </script>