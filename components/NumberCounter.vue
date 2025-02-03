<template>
  <div>
    <p>{{ currentNumber }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps } from "vue";

// Définition des props avec typage strict
const props = defineProps<{
  max: number;
  speed?: number; // Optionnel avec une valeur par défaut
}>();

// Valeur réactive pour l'affichage du compteur
const currentNumber = ref<number>(0);

onMounted(() => {
  startCounting();
});

// Fonction de comptage avec typage strict
const startCounting = (): void => {
  const step: number = Math.ceil(props.max / 100);
  const interval = setInterval(() => {
    if (currentNumber.value < props.max) {
      currentNumber.value += step;
      if (currentNumber.value > props.max) {
        currentNumber.value = props.max;
      }
    } else {
      clearInterval(interval);
    }
  }, props.speed ?? 50); // Utilisation de la valeur par défaut
};
</script>
