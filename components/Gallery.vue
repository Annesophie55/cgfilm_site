<template>
  <div class="film-gallery">
    <FilmCard v-for="film in films" :key="film.id" :film="film" />
    <NuxtLink to="/films" class="btn-translucide">Accéder à la filmographie complète</NuxtLink>
  </div>
</template>


<script setup lang="ts">
import films from "~/data/films";
import FilmCard from "../components/FilmCard.vue";

</script>

<style scoped lang="scss">
.film-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 45px 0;
}

.btn-translucide{
    background-color: var(--white);
    color: var(--gray-dark);
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0.8;
    box-shadow: 0 0 5px var(--gray-dark);
    margin-top: 25px;
    width: 75%;
    height: 60px;
    font-family: var(--font-primary-bold);
    font-weight: 700;
}
</style>
