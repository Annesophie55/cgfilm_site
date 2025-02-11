<template>
  <div class="parallax-container">
    <div class="parallax-image-container">
      <NuxtImg
        class="parallax-image"
        :src="props.imgSrc"
        :alt="props.imgAlt"
        width="1260"
        height="450"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useNuxtApp } from "nuxt/app";
import { defineProps } from "vue";

const props = defineProps<{
  imgSrc: string;
  imgAlt: string;
}>();

onMounted(() => {
  const nuxtApp = useNuxtApp();

  // Vérifie que les plugins GSAP et ScrollTrigger existent bien avant de les utiliser
  if (nuxtApp.$gsap && nuxtApp.$ScrollTrigger) {
    const gsap = nuxtApp.$gsap as typeof import("gsap").default;
    const ScrollTrigger = nuxtApp.$ScrollTrigger as typeof import("gsap/ScrollTrigger").ScrollTrigger;

    gsap.to(".parallax-image", {
      y: "-37%",
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax-image-container",
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
  height: 200px;
  overflow: hidden;
}

.parallax-image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.parallax-image {
  width: 100%;
  height: 150%;
  object-fit: cover;
}
</style>
