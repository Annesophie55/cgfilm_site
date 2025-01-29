<template>
  <div class="film-gallery">
    <FilmCard v-for="film in films" :key="film.id" :film="film" />
  </div>
</template>

<script setup>
import films from "@/data/films";
import FilmCard from "@/components/FilmCard.vue";
</script>

<style scoped lang="scss">
.film-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

</style>
