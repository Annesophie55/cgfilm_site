<template>
  <header>
    <!-- Contenu du header -->
    <div class=''>
      <!-- Logo -->
      <nuxt-link to="/" class="logo">
        <NuxtImg
          src="/images/logo.webp"
          alt="Logo de cgfilm13"
          width="200"
          height="104"
          priority
        />
      </nuxt-link>

      <!-- Menu de navigation mobile -->
      <button class="hamburger" aria-label="Menu" aria-controls="navigation">
        <div></div>
        <div></div>
        <div></div>
      </button>
      <!-- Navigation -->
      <nav id="navigation" class="d-flex flex-evenly my-10" >
        <ul class="d-flex nav-links">
          <li class=""><nuxt-link to="/">Accueil</nuxt-link></li>
          <li class=""><nuxt-link to="/filmMaker">Le réalisateur</nuxt-link></li>
          <li class=""><nuxt-link to="/films">Films</nuxt-link></li>
          <li class=""><nuxt-link to="/featured">En vedette</nuxt-link></li>
          <li class=""><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </nav>

      <!-- Lien vers les réseaux sociaux -->
      <ul class="d-flex social-links mx-80">
        <li>    
          <a href="https://www.youtube.com/user/cgfilm13" aria-label="Lien vers le youtube de cgfilm13">
            <client-only>
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </client-only>
          </a>
        </li>
        <li>    
          <a href="https://www.linkedin.com/in/jimmy-paul-coti-90829b76/" aria-label="Lien vers le Facebook de cgfilm13">
            <client-only>
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </client-only>
          </a>
        </li>
        <li class="ms-30">
          <a href="https://www.linkedin.com/in/jimmy-paul-coti-90829b76/" aria-label="Lien vers le Linkedin de Jimmy Paul Coti">
            <client-only>
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </client-only>
          </a>
        </li>
      </ul>   
    </div>   

    <div class="btn-language">
      <span>Fr</span>
      <div class="switch"></div>
      <span>En</span>
    </div>
  </header>
</template>

<script setup>
// Ajoute la logique si nécessaire
</script>

<style scoped>
/* Styles spécifiques au header */

</style>
