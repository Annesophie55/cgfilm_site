import { defineNuxtPlugin } from "nuxt/app";
import type { NuxtApp } from 'nuxt/app';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 🚀 Ajout de `gsap.registerPlugin(gsap)`
export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(gsap, ScrollTrigger); // 🔥 Enregistre GSAP en plus de ScrollTrigger
    console.log("✅ GSAP & ScrollTrigger chargés !");
  }

  nuxtApp.provide("gsap", gsap);
  nuxtApp.provide("ScrollTrigger", ScrollTrigger);
});
