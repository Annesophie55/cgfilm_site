<template>
  <div class="img-fixed-container">
    <div class="img-content">
      <figure>
        <NuxtImg src="/images/derriere_la_camera.webp" alt="Photo de Jimmy-Paul Coti" width="400" height="400" class="imgSticky"/>
        <figcaption>Jimmy-Paul Coti derrière la camera</figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watchEffect, ref } from "vue";
import { useNuxtApp } from "nuxt/app";

const isGSAPActive = ref(false); // État de l’animation

onMounted(() => {
  const nuxtApp = useNuxtApp();
  let scrollTriggerInstance: any = null;

  const initGSAP = () => {
    const screenWidth = window.innerWidth;
    
    if (screenWidth > 768 && !isGSAPActive.value && nuxtApp.$gsap && nuxtApp.$ScrollTrigger) {
      console.log("🔵 GSAP INIT - Large screen detected");

      const gsap = nuxtApp.$gsap as typeof import("gsap").default;
      const ScrollTrigger = nuxtApp.$ScrollTrigger as typeof import("gsap/ScrollTrigger").ScrollTrigger;

      scrollTriggerInstance = gsap.to(".img-content", {
        y: "5rem",
        ease: "none",
        scrollTrigger: {
          trigger: ".img-content",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      isGSAPActive.value = true; // Marque GSAP comme actif
    } 
    else if (screenWidth <= 768 && isGSAPActive.value) {
      console.log("🔴 Disabling GSAP animation - Small screen detected");
      
      if (scrollTriggerInstance) {
        scrollTriggerInstance.scrollTrigger.kill();
        scrollTriggerInstance = null;
      }

      isGSAPActive.value = false; // Marque GSAP comme inactif
    }
  };

  // Exécute la logique au montage et écoute les changements de taille d'écran
  watchEffect(() => {
    window.addEventListener("resize", initGSAP);
    initGSAP(); // Exécute au chargement
  });

  // Nettoyage des événements au démontage
  onUnmounted(() => {
    window.removeEventListener("resize", initGSAP);
    if (scrollTriggerInstance) {
      scrollTriggerInstance.scrollTrigger.kill();
    }
  });
});

</script>

<style scoped lang="scss">
.img-fixed-container {
  width: 50%;
  max-width: 500px;
  position: relative;
  max-height: 400px;
  margin: 0px auto 20px auto;

  @media (max-width: 768px){
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
}

.img-content{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 768px){
    width: 80%;
    margin: auto;
  }
}

</style>
