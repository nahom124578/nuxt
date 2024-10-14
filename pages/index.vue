<template>
  <div class="bg-black">
    <div data-layout="default">
      <div class="fixed left-0 right-0 top-0 z-[60] flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2">
        <div class="flex items-center gap-4 md:pl-20"></div>
        <div class="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center">
          <div id="search" class="w-3/5 sm:w-1/3 group/input pointer-events-auto relative h-full rounded-md pt-2 transition-all">
            <div class="relative z-10 flex h-9 w-full items-center gap-2 px-2 text-sm">
              <div class="group-hover/input:scale-110 shrink-0 cursor-pointer text-lg transition-all">
                <i class="fa-solid fa-magnifying-glass text-xs"></i>
              </div>
              <input
                v-model="email"
                maxlength="100"
                autocomplete="new-password"
                class="h-full w-0 flex-1 bg-transparent text-13 outline-none"
                placeholder="Search courses..."
              />
              <div class="relative z-20 shrink-0 cursor-pointer text-sm text-[#707070] hover:text-[#ffffff]">
                <i style="display: none" class="fa-solid fa-circle-xmark"></i>
              </div>
              <div class="bg-gradient-top absolute bottom-0 left-0 right-0 h-[1px] w-full"></div>
            </div>
          </div>
        </div>

        <!-- Updated Button with Icons -->
        <div class="group relative shrink-0 scale-100 cursor-pointer items-center justify-center overflow-hidden rounded border px-4 py-1.5 text-sm leading-none transition-all hover:border-transparent active:scale-95 hover:bg-[rgb(158,125,26)]">
          <!-- Button content -->
          <Button
            class="relative flex items-center justify-center text-white px-6 py-2 w-full transition-all"
            @click="navigateToMailForm"
          >
            <!-- Human Icon and Plus Sign -->
            <i class="fa-solid fa-user text-gold mr-1.5 group-hover:text-black"></i> <!-- Human Icon -->
            <i class="fa-solid fa-plus text-gold mr-2 group-hover:text-black"></i> <!-- Plus Icon -->
            <h3 class="group-hover:text-black">Join Us</h3>
          </Button>
        </div>
      </div>

      <div id="page" class="relative min-h-screen pt-14 transition-all duration-200">
        <div class="relative h-[36rem] overflow-hidden">
          <div class="z-1 relative flex items-center px-10 pt-40 text-white">
            <div class="mr-10 flex-1">
              <div class="mb-5 text-6xl font-bold opacity-90">
                E-learning Revolution 2
              </div>
              <div class="mb-5 text-xl">
                We have worked to digitize our school, and give the whole world
                the opportunity to do it with a new study platform designed for
                teachers.
              </div>
              <a href="/" class="inline-block cursor-pointer rounded-md bg-black px-4 py-3">
                Go to Marketplace
              </a>
            </div>
            <div class="h-80 flex-1 rounded bg-black"></div>
          </div>
        </div>
      </div>

      <AppAlert :visible="isLoginVisible" @update:visible="isLoginVisible = $event">
        <Loginsection></Loginsection>
      </AppAlert>
    </div>
  </div>
</template>

<script setup>
import AppAlert from "../components/AppAlert.vue";
import Loginsection from "../components/organisms/LoginSection.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { store } from "./store.js";

// Declare refs and router
const isLoginVisible = ref(false);
const email = ref(''); // Add email ref
const router = useRouter();

// Function to check email and navigate
const checkEmailAndNavigate = () => {
  console.log('Checking email...');

  // Use the store's method to check if the email is registered
  if (store.isEmailRegistered(email.value)) {
    console.log('Navigating to loginSuccess page...');
    router.push({ path: '/loginSuccess' }); // Navigate to loginSuccess
  } else {
    console.error('Email not registered:', email.value);
    alert('This email is not registered. Please sign up first.');
  }
};

// Function to navigate to MailForm
const navigateToMailForm = () => {
  router.push('/MailForm'); // Navigate to MailForm page
};
</script>

<style scoped>
/* Additional styles can be added here if needed */
</style>
