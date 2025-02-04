<template>
  <swiper
    :modules="[Autoplay, Navigation]"
    :slides-per-view="1"
    :loop="true"
    :autoplay="{ delay: 30000, disableOnInteraction: false }"
    navigation
    class="video-carousel"
  >
    <swiper-slide v-for="(film, index) in films" :key="index">
      <div class="video-container">
        <!-- Vidéo en plein écran -->
        <iframe
          :src="`${film.embedUrl}?autoplay=1&controls=0&mute=1&start=10&end=40&rel=0&loop=1&playlist=${film.videoId}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <!-- Contenu animé -->
        <div class="film-info" :class="{ show: showContent }">
          <h2>{{ film.title }}</h2>
          <p>{{ film.subtitle }}</p>
          <NuxtLink :to="film.detailPage" class="btn-discover">Découvrir</NuxtLink>
        </div>
        
        <!-- Bouton pour descendre -->
        <button @click="scrollToNextSection" class="btn-scroll">
          Explorer l'univers de <em>CG-Film</em>
          <br>
          <client-only>
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
          </client-only>
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ref, onMounted } from "vue";

// Ajout du typage pour films
interface Film {
  title: string;
  subtitle: string;
  embedUrl: string;
  detailPage: string;
  videoId: string;
}

import filmsData from "~/data/films"; // Assure-toi que le fichier `films.ts` est bien typé

const films = ref<Film[]>(filmsData); // Typage de la liste des films

// Ajout du typage boolean
const showContent = ref<boolean>(false);

onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 5000);
});

// Typage de la fonction scrollToNextSection
const scrollToNextSection = (): void => {
  const nextSection = document.querySelector<HTMLElement>(".about-container");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>


<style scoped>
.video-carousel {
  width: 100vw;
  height: 100%;
}

.video-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.video-container iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.film-info {
  position: absolute;
  left: -100%;
  bottom: 45%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: left;
  opacity: 0;
  transition: all 1s ease-in-out;
}

.film-info.show {
  left: 5%;
  opacity: 1;
}

.btn-discover {
  display: inline-block;
  margin-top: 10px;
  background: rgb(12, 173, 161);
  background: linear-gradient(212deg, rgba(12, 173, 161, 1) 30%, rgba(12, 148, 138, 0.9831168356906163) 48%, rgba(14, 124, 139, 1) 78%);
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.btn-discover:hover {
  background: #087f7d;
}

.btn-scroll {
  position: absolute;
  bottom: 5%;
  left: 50%;
  background: rgb(217, 231, 230);
  transform: translateX(-50%);
  color: var(--gray-dark);
  opacity: 0.8;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
}

.btn-scroll:hover {
  background: #087f7d;
  color: var(--white);
}

</style>
