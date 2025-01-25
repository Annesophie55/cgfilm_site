<template>
  <header>
    <!-- Contenu du header -->
      <!-- Logo -->
      <nuxt-link to="/" class="logo">
        <NuxtImg
          src="/images/logo.webp"
          alt="Logo de cgfilm13"
          width="100"
          priority
        />
      </nuxt-link>

      <!-- Navigation -->
      <nav id="navigation">
        <ul class="nav-links">
          <li class="nav-link"><nuxt-link to="/">Accueil</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/filmMaker">Le réalisateur</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/films">Films</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/featured">En vedette</nuxt-link></li>
          <li class="nav-link"><nuxt-link to="/contact">Contact</nuxt-link></li>
        </ul>
      </nav> 
    <div class="header-item-group">
      
    <!-- Menu de navigation mobile -->
    <button class="hamburger" aria-label="Menu" aria-controls="navigation">
      <div></div>
      <div></div>
      <div></div>
    </button>

    <div class="header-extras">
      <!-- Bouton pour changer la langue -->
      <div class="btn-language">
      <span class="lang-label">Fr</span>
      <div class="switch-container">
        <input type="checkbox" id="lang-switch" class="lang-switch-input">
        <label for="lang-switch" class="lang-switch-label"></label>
      </div>
      <span class="lang-label">En</span>
    </div>


      <!-- Lien vers les réseaux sociaux -->
      <ul class="social-links">
        <li>    
          <a href="https://www.youtube.com/user/cgfilm13" aria-label="Lien vers le youtube de cgfilm13">
            <client-only>
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </client-only>
          </a>
        </li>
        <li>    
          <a href="https://www.facebook.com/jimmy.coty.1" aria-label="Lien vers le Facebook de cgfilm13">
            <client-only>
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </client-only>
          </a>
        </li>
        <li class="">
          <a href="https://www.linkedin.com/in/jimmy-paul-coti-90829b76/" aria-label="Lien vers le Linkedin de Jimmy Paul Coti">
            <client-only>
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </client-only>
          </a>
        </li>
      </ul>
    </div>
  </div>
  </header>
</template>

<script setup>
// Ajoute la logique si nécessaire
</script>

<style scoped lang="scss">
@use '@/assets/scss/mixins' as mixins;
@use '@/assets/scss/_base.scss' as base;

/* Styles spécifiques au header */
header{
  background-color: var(--blue-accent-1);
  color: var(--white);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  @include mixins.flex-between;
  width: 100%;
  height: 100px;
  transition: all 0.3s;

  .logo{
    background-color: var(--white);
    padding: 5px 5px 0px 5px;
    margin-left: 15px;
    border-radius: 8px;
  }
}

.social-links{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  margin-top: 10px;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  letter-spacing: 2px;
  font-size: 18px;
}

.hamburger{
  display: none;
  cursor: pointer;
  padding: 5px;
  margin-right: 15px;
  background-color: var(--blue-accent-5);
  border-radius: 5px;
}

.hamburger div {
  width: 25px;
  height: 3px;
  background-color: var(--blue-accent-1);
  margin: 5px;
  transition: all 0.3s;
}

.header-extras{
  margin-right: 15px;
}

// .btn-language{
//   height: 30;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 5px;
//   box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
//   padding: 5px;
// }

.btn-language {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, sans-serif;
}

.lang-label {
  font-size: 16px;
  font-weight: bold;
}

.switch-container {
  position: relative;
  width: 50px;
  height: 25px;
}

.lang-switch-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.lang-switch-label {
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  transition: background-color 0.3s;
}

.lang-switch-label:before {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  top: 2.5px;
  left: 2.5px;
  transition: transform 0.3s;
}

.lang-switch-input:checked + .lang-switch-label {
  background-color: #4caf50;
}

.lang-switch-input:checked + .lang-switch-label:before {
  transform: translateX(25px);
}



</style>
