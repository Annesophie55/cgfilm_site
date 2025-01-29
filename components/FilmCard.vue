<template>
  <div class="film-card" v-if="film">
    <div class="film-card__wrapper">
      <div class="film-card__image">
        <NuxtLink :to="film.detailPage">
          <NuxtImg :src="film.poster" :alt="film.title" width="400" />
        </NuxtLink>
      </div>
      <div class="film-card__details">
        <div class="film-card__content">
          <h3>{{ film.title }}</h3>
          <p>Sortie : {{ film.releaseDate }}</p>
          <div>
        <span v-for="(actor, index) in film.cast" :key="index">
          {{ actor.name }}{{ index < film.cast.length - 1 ? ', ' : '' }}
        </span>
      </div>
        </div>
        <div class="film-card__description">
          <p>{{ film.description }}</p>
        </div>
      </div>
    </div>
    <div class="film-card__cta">
        <NuxtLink v-if="film.detailPage" :to="film.detailPage" class="btn-discover">
          Voir la fiche
        </NuxtLink>
        <NuxtLink v-if="film.embedUrl" :to="film.embedUrl" class="btn-watch">
          Bande-annonce
        </NuxtLink>
      </div>
  </div>
</template>

<script setup>
defineProps({
  film: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
@use '@/assets/scss/components/film-card.scss';
</style>