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
          <font-awesome-icon :icon="['fas', 'chevron-down']" />
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ref, onMounted } from "vue";
import films from "@/data/films";

const videos = [
  {
    title: "Les Sabots de Vénus",
    subtitle: "Sélection Festival de Cannes",
    embedUrl: "https://www.youtube.com/embed/fdCmZEv1LLU",
    videoId: "fdCmZEv1LLU",
    detailPage: "/films/les-sabots-de-venus",
  },
  {
    title: "L'Aile et la Bête",
    subtitle: "Un James Bond à la Jimmy-Paul Coti",
    embedUrl: "https://www.youtube.com/embed/WfNqy_tRNcc",
    videoId: "WfNqy_tRNcc",
    detailPage: "/films/l-aile-et-la-bete",
  },
  {
    title: "Le Radeau",
    subtitle: "Un film d'aventure de la réalisation à la projection",
    embedUrl: "https://www.youtube.com/embed/F4S2cXmHizc",
    videoId: "F4S2cXmHizc",
    detailPage: "/films/le-radeau",
  },
];

const showContent = ref(false);
onMounted(() => {
  setTimeout(() => {
    showContent.value = true;
  }, 5000);
});

const scrollToNextSection = () => {
  const nextSection = document.querySelector(".next-section");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
.video-carousel {
  width: 100%;
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
  background-color: var(--black);
  transform: translateX(-50%);
  color: var(--gray-medium);
  opacity: 0.6;
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
