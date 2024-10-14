<template>
  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="bg-black p-8 rounded-lg h-screen shadow-lg w-full max-w-md border border-gray-700">
      
        <BackToLogin />
        <Welcome />
      
          <div class="text-center text-gray-100 text-sm mb-7 font-normal">
        Enter your Password
      </div>
      <PasswordField v-model:password="password" />
      <div class="text-right mb-5">
        <router-link to="/passwordRecovery" class="underline text-gray-300 text-sm">Forgot Password?</router-link>
      </div>
      <Button type="submit" @click="handleSubmit">Enter</Button>
    </div>
  </div>
</template>

<script>
import BackToLogin from '../components/atoms/BackToLogin.vue';
import PasswordField from '../components/atoms/PasswordField.vue';
import Button from '../components/atoms/Buttons.vue';
import { store } from './store';// Assuming this is where the registered emails and passwords are stored
import LoginSuccess from './LoginSuccess.vue';
import Welcome from '../components/molecules/Welcome.vue';

export default {
  
  components: {
    BackToLogin,
    PasswordField,
    Button,
    LoginSuccess,
    Welcome
  },
  data() {
    return {
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      const registeredEmail = store.currentEmail; // Assuming `currentEmail` is the email entered in the MailForm page and is available in the store
      const correctPassword = store.passwords[registeredEmail]; // Simulating password storage
      
      // Simulate password validation
      if (this.password === correctPassword) {
        // Navigate to loginSuccess.vue on correct password
        this.$router.push('/LoginSuccess');
      } else {
        // Handle wrong password (show error, etc.)
        alert('Incorrect password, please try again.');
      }
    }
  }
};
</script>

<style scoped>
/* Add any custom styles if necessary */
</style>
