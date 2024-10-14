<template>
  <div class="fixed inset-0 bg-cover bg-center filter blur-sm"></div>
  <div class="fixed inset-0 bg-black opacity-50"></div>
  <div class="items-center justify-center bg-black relative z-10 flex overflow-hidden">
    <div class="h-screen bg-black p-8 rounded-lg shadow-2xl w-full max-w-md border border-gray-800">
      <!-- Back to Log In Link -->
      <BackToLogin />

      <!-- Logo and Welcome Message -->
      <div class="flex items-center justify-center mb-2">
        <div class="w-48 h-24 bg-cover mr-0 bg-center border border-gray-600 rounded-sm">
          <img src="/static/logo.png" alt="Logo" class="w-full h-full object-contain" />
        </div>
        <div class="text-left ml-10">
          <p class="text-white text-lg font-semibold mt-3">Nice to meet you,</p>
          <p class="text-gray-400 text-sm mr-20">Upload a profile picture and complete your presentation</p>
        </div>
      </div>

      <!-- Terms & Conditions Checkbox -->
      <Checkbox v-model="acceptedTerms">
        <span :class="{'text-red-500': submitted && !acceptedTerms, 'text-gray-300': acceptedTerms || !submitted}">
          I accept 
          <a href="#" class="underline">Terms & Conditions</a> 
          and 
          <a href="#" class="underline">Privacy Policy</a>
        </span>
      </Checkbox>

      <!-- Form Heading -->
      <div class="text-center text-gray-300 text-sm mt-5 mb-5">
        Enter your details
      </div>

      <!-- Form Fields -->
      <form @submit.prevent="onSubmit" class="w-full max-w-sm mx-auto">
        <InputField 
          v-model="name" 
          placeholder="Name" 
          :icon="['fas', 'user']" 
          :class="{'border-red-500': nameError}" 
        />
        <p v-if="submitted && nameError" class="text-red-500 text-xs mb-1">Name must be at least 2 characters long and contain only letters.</p>
        
        <InputField 
          v-model="surname" 
          placeholder="Surname" 
          :icon="['fas', 'user']" 
          :class="{'border-red-500': surnameError}" 
        />
        <p v-if="submitted && surnameError" class="text-red-500 text-xs mb-1">Surname must be at least 2 characters long and contain only letters.</p>
        
        <InputField v-model="email" placeholder="justatest@gmail.com" :icon="['fas', 'envelope']" />

        <InputField 
          v-model="password" 
          :type="showPassword ? 'text' : 'password'" 
          placeholder="Password" 
          :icon="['fas', 'key']" 
          :toggleIcon="showPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']" 
          @toggle="togglePasswordVisibility" 
        />

        <!-- Password Strength Meter and Message -->
<div class="flex items-center justify-between mb-3">
  

  <p class="text-gray-400 text-xs ml-2">
    <span v-if="password.length < 8" class="text-red-500">• At least 8 characters</span>
    <span v-else-if="!hasNumber" class="text-yellow-500">• At least 1 number</span>
    <span v-else-if="!hasSpecialChar" class="text-green-500">• At least 1 special character</span>
    <span v-else-if="passwordStrength === 3" class="text-gray-500">• Strong password!</span>
  </p>
  <div class="w-24 h-2 bg-gray-300 rounded">
    <div
      class="h-full rounded"
      :class="{
        'bg-gray-500': passwordStrength === 1,
        'bg-gray-600': passwordStrength === 2,
        'bg-gray-700': passwordStrength === 3
      }"
      :style="{
        width: passwordStrength === 1 ? '33%' : passwordStrength === 2 ? '66%' : passwordStrength === 3 ? '100%' : '0%'
      }"
    ></div>
  </div>
</div>


        <!-- Confirm Password Field -->
        <InputField 
          v-model="confirmPassword" 
          :type="showConfirmPassword ? 'text' : 'password'" 
          placeholder="Confirm Password" 
          :icon="['fas', 'key']" 
          :toggleIcon="showConfirmPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']" 
          @toggle="toggleConfirmPasswordVisibility"
        />
        
        <!-- Confirm Password Message -->
        <p v-if="password && confirmPassword && password !== confirmPassword" class="text-red-500 text-xs mb-3">
          Passwords do not match!
        </p>

        <!-- Submit Button -->
        <Button type="submit" variant="primary" class="bg-black text-white" :disabled="!isFormValid">Enter</Button>
      </form>

      <!-- Terms & Conditions link -->
      <div class="text-center mt-3 -mb-8">
        <a href="#" class="text-xs text-gray-500 hover:text-gray-400 transition duration-300">Terms & Conditions</a>
      </div>
    </div>
  </div>
</template>

<script>
import InputField from '../components/atoms/InputField.vue';
import Button from '../components/atoms/Buttons.vue';
import Checkbox from '../components/atoms/Checkbox.vue';
import BackToLogin from '../components/atoms/BackToLogin.vue';

export default {
  components: {
    InputField,
    Button,
    Checkbox,
    BackToLogin,
  },
  data() {
    return {
      name: '',
      surname: '',
      email: this.$route.query.email || '', // Prepopulate email from query
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      acceptedTerms: false,
      submitted: false, // Track whether the form has been submitted
    };
  },
  computed: {
    passwordStrength() {
      let strength = 0;
      if (this.password.length >= 8) strength++;
      if (this.hasNumber) strength++;
      if (this.hasSpecialChar) strength++;
      return strength;
    },
    hasNumber() {
      return /\d/.test(this.password);
    },
    hasSpecialChar() {
      return /[!@#$%^&*(),.?":{}|<>]/.test(this.password);
    },
    isFormValid() {
      // Validate form fields
      return (
        this.name && 
        this.name.length > 2 && 
        /^[a-zA-Z]+$/.test(this.name) && // Only alphabets
        this.surname && 
        this.surname.length > 2 && 
        /^[a-zA-Z]+$/.test(this.surname) && // Only alphabets
        this.email &&
        this.password &&
        this.password === this.confirmPassword &&
        this.acceptedTerms &&
        this.passwordStrength === 3 // Ensure maximum strength
      );
    },
    nameError() {
      return this.submitted && (this.name.length < 2 || !/^[a-zA-Z]+$/.test(this.name));
    },
    surnameError() {
      return this.submitted && (this.surname.length < 2 || !/^[a-zA-Z]+$/.test(this.surname));
    },
  },
  methods: {
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPasswordVisibility() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    onSubmit() {
      this.submitted = true; // Mark the form as submitted
      if (this.isFormValid) {
        // Navigate to verification page with name, surname, and email
        this.$router.push({
          path: '/VerificationPage',
          query: {
            name: this.name,
            surname: this.surname,
            email: this.email
          }
        });
        console.log('Form submitted successfully:', {
          name: this.name,
          surname: this.surname,
          email: this.email,
        });
      } else {
        console.log('Form is invalid or terms not accepted.');
      }
    },
  },
};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
