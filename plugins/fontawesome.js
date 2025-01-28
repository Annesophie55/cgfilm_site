import { defineNuxtPlugin } from '#imports'; // Assure l'import correct
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importation des icônes spécifiques
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Ajoute les icônes à la bibliothèque
library.add(faFacebook, faLinkedin, faYoutube, faChevronDown);

// Définit le composant global FontAwesomeIcon
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});
