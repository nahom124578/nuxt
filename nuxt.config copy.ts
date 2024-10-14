export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css', // Include Tailwind CSS
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['@fortawesome/vue-fontawesome'], // Ensure Font Awesome is transpiled
  },

  components: true, // Enable automatic component registration

  // Routes (if any) are added automatically based on pages directory.

  plugins: [
    '@/plugins/fontawesome.js', // Register FontAwesome plugin
  ],

  compatibilityDate: '2024-10-08',
});
