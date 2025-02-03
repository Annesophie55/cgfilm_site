<template>
  <div class="parallax-container">
    <div class="impact-image">
      <NuxtImg
        class="impact-img"
        src="/images/tournage_le_juste.webp"
        alt="photo du tournage de la série le juste"
        width="1260"
        height="250"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrement du plugin avec typage correct
gsap.registerPlugin(ScrollTrigger);

onMounted((): void => {
  gsap.to(".impact-img", {
    y: "-37%", // Réduit l'effet de décalage
    ease: "none",
    scrollTrigger: {
      trigger: ".impact-image",
      start: "top bottom",
      end: "bottom top",
      scrub: true, // Effet fluide
    },
  });
});
</script>

<style scoped lang="scss">
.parallax-container {
  position: relative;
  width: 100%;
  height: 170px; // Hauteur fixe pour le parallax
  overflow: hidden; // Empêche le débordement sur le contenu au-dessus
}

.impact-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.impact-img {
  width: 100%;
  height: 150%;
  object-fit: cover;
}
</style>
