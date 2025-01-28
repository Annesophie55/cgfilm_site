<template>
  <div>
    <!-- Appelle ton Header ici -->
    <Header />

    <!-- Contenu de la page d'accueil -->
    <main class="homepage">
      <section class="carrousel">
        <Carrousel />
      </section>

      <!-- Section fictive pour tester -->
      <section class="about">
        <div class="photo">
          <NuxtImg src="/images/portrait.webp" alt="Photo de Jimmy-Paul Coti" width="250" priority />
        </div>
        <blockquote>
          Ajouter une citation de Jimmy-Paul Coti ici
          <br>
          <cite>Jimmy-Paul Coti</cite>
        </blockquote>

      </section>
    </main>

    <!-- Appelle ton Footer ici -->
    <Footer />
  </div>
</template>

<script setup>
import Gallery from '~/components/Carrousel.vue';



  // Aucun script nécessaire pour cette page minimaliste
</script>

<style scoped lang="scss">
@use '@/assets/scss/pages/index.scss';
</style>
