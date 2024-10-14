<template>
  <div class="min-h-screen flex items-center justify-center bg-black">
    <div class="bg-black p-8 rounded-lg h-screen shadow-lg w-full max-w-md border border-gray-700">
      <!-- Back to Log In Link -->
      <BackToLogin />

      <!-- Navigational Box with Logo and Heading -->
      <div class="bg-cover bg-center rounded-sm p-4 mb-7 flex items-center justify-between shadow-sm border border-gray-800">
        <img src="../static/logo.png" alt="Logo" class="w-25 h-20 mr-16 mb-2" />
        <div class="text-left flex-1 mb-10">
          <h3 class="text-xl text-white font-semibold mb-4">Password Recovery</h3>
          <p class="text-gray-400 text-sm">
            Retrieve your password<br />account through your<br />registration mail
          </p>
        </div>
      </div>

      <!-- Recovery Link Section -->
      <div class="flex items-center justify-center mb-6">
        <span class="text-white">Enter recovery mail</span>
      </div>
      <div>
        <p class="text-gray-300 text-sm text-center mb-6">
          A recovery mail will be sent to this address. Be sure<br /> that it is correct before submitting
        </p>
      </div>

      <form @submit.prevent="onSubmit" class="mb-6">
        <label for="email" class="sr-only mb-6">Recovery E-mail</label>
        <InputField
          id="email"
          type="email"
          v-model="email"
          placeholder="Email Address"
          :icon="['fas', 'envelope']"
        />
        <Button type="submit" class="cursor-pointer bg-black rounded-md text-sm font-normal mt-6">Enter</Button>
      </form>
    </div>
  </div>
</template>

<script>
import InputField from '../components/atoms/InputField.vue';
import Button from '../components/atoms/Buttons.vue';
import BackToLogin from '../components/atoms/BackToLogin.vue';

export default {
  components: {
    InputField,
    Button,
    BackToLogin,
  },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    onSubmit() {
      alert('Recovery link has been sent!'); // Placeholder functionality
      // Add functionality to send the recovery link (e.g., API call)
    },
  },
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
