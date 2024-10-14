<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div class="relative z-10 h-full p-5 text-13 border popup-content">
        <div class="pt-8">
          <div
            class="relative flex h-32 justify-center overflow-hidden rounded border border-white/20 bg-black px-8 py-6 opacity-80 transition-all duration-300 mt-0 mb-6"
          >
            <div class="gradient absolute inset-0 opacity-[0.15]"></div>
            
          </div>
          <div class="mb-6 text-center text-white">
            <h2 class="text-xl font-semibold">Login Successful</h2>
            <p class="text-white/70">You can now log in to your account.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  </script>
  <style scoped></style>