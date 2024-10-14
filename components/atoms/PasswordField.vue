<template>
    <div class="relative mb-5">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <font-awesome-icon :icon="['fas', 'key']" class="h-4 w-4 text-gray-700" />
      </span>
      <input
        :type="showPassword ? 'text' : 'password'"
        :value="password"
        @input="$emit('update:password', $event.target.value)"
        placeholder="Password"
        class="w-full p-2 pl-10 border border-gray-600 rounded bg-white text-black placeholder-gray-700 focus:outline-none focus:border-gray-700"
      />
      <span class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" @click="togglePasswordVisibility">
        <font-awesome-icon :icon="showPassword ? ['fas', 'eye'] : ['fas', 'eye-slash']" class="h-4 w-4 text-gray-500" />
      </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      password: String,
    },
    data() {
      return {
        showPassword: false,
      };
    },
    methods: {
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
      }
    }
  };
  </script>
  