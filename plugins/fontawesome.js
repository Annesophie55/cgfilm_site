import { defineNuxtPlugin } from '#app'; // Assure l'import correct
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

// Ajoute les icônes à la bibliothèque
library.add(faFacebook, faLinkedin, faYoutube);

// Définit le composant global FontAwesomeIcon
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
