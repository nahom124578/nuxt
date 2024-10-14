// plugins/font-awesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import the icons you need
import {
  faEnvelope,
  faUser,
  faKey,
  faEye,
  faEyeSlash,
  faArrowLeft,
  faCheck, // Add check icon for checkbox
} from '@fortawesome/free-solid-svg-icons';

import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(
  faEnvelope,
  faUser,
  faKey,
  faEye,
  faEyeSlash,
  faGoogle,
  faFacebook,
  faApple,
  faArrowLeft,
  faCheck // Add check icon here
);

// Export the FontAwesomeIcon component
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
