<template>
  <div class="img-fixed-container">
    <div class="img-content">
      <figure>
        <NuxtImg :src="src" :alt="alt" :width="width" :height="height" class="imgSticky"/>
        <figcaption v-if="caption">{{ caption }}</figcaption>
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, watchEffect, ref } from "vue";
import { useNuxtApp } from "nuxt/app";

const props = defineProps<{
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string; // Optionnel
  breakpoint: number; // Taille de l’écran à partir de laquelle l’animation est activée
}>();

const isGSAPActive = ref(false); // État de l’animation

onMounted(() => {
  const nuxtApp = useNuxtApp();
  let scrollTriggerInstance: any = null;

  const initGSAP = () => {
    const screenWidth = window.innerWidth;
    
    if (screenWidth > props.breakpoint && !isGSAPActive.value && nuxtApp.$gsap && nuxtApp.$ScrollTrigger) {
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

      isGSAPActive.value = true;
    } else if (screenWidth <= 768 && isGSAPActive.value) {
      console.log("🔴 Disabling GSAP animation - Small screen detected");
      
      if (scrollTriggerInstance) {
        scrollTriggerInstance.scrollTrigger.kill();
        scrollTriggerInstance = null;
      }

      isGSAPActive.value = false;
    }
  };

  watchEffect(() => {
    window.addEventListener("resize", initGSAP);
    initGSAP();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", initGSAP);
    if (scrollTriggerInstance) {
      scrollTriggerInstance.scrollTrigger.kill();
    }
  });
});
</script>

