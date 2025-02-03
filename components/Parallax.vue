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
import { useNuxtApp } from "nuxt/app";

onMounted(() => {
  const nuxtApp = useNuxtApp();

  // Vérifie que les plugins GSAP et ScrollTrigger existent bien avant de les utiliser
  if (nuxtApp.$gsap && nuxtApp.$ScrollTrigger) {
    const gsap = nuxtApp.$gsap as typeof import("gsap").default;
    const ScrollTrigger = nuxtApp.$ScrollTrigger as typeof import("gsap/ScrollTrigger").ScrollTrigger;

    gsap.to(".impact-img", {
      y: "-37%",
      ease: "none",
      scrollTrigger: {
        trigger: ".impact-image",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }
});
</script>

<style scoped lang="scss">
.parallax-container {
  position: relative;
  width: 100%;
  height: 170px;
  overflow: hidden;
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
