import { defineNuxtPlugin } from "nuxt/app";
import type { NuxtApp } from 'nuxt/app';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
  }

  nuxtApp.provide("gsap", gsap);
  nuxtApp.provide("ScrollTrigger", ScrollTrigger);
});
