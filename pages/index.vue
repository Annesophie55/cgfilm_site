<template>
  <div>
    <!-- Appelle ton Header ici -->
    <Header />

    <!-- Contenu de la page d'accueil -->
    <main class="homepage">
      <section class="hero">
        <div>{{ $t('welcome') }}</div>
        <h1>Bienvenue sur CG-Film Camargue</h1>
        <p>
          Découvrez nos productions cinématographiques et documentaires,
          plongez dans des histoires captivantes au cœur de la Camargue.
        </p>
        <NuxtLink to="/films" class="btn-primary">Voir nos films</NuxtLink>
      </section>

      <!-- Section fictive pour tester -->
      <section class="about">
        <h2>À propos de CG-Film</h2>
        <p>
          Spécialisés dans les documentaires, nous mettons en avant les trésors naturels et culturels de la région.
        </p>
      </section>
    </main>

    <!-- Appelle ton Footer ici -->
    <Footer />
  </div>
</template>

<script setup>
  // Aucun script nécessaire pour cette page minimaliste
</script>

<style scoped>
/* Style de base pour tester */
.homepage {
  text-align: center;
  padding: 2rem;
}

.hero {
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.btn-primary {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  color: white;
  background-color: #007b9a;
  text-decoration: none;
  border-radius: 5px;
}

.about {
  margin-top: 2rem;
}

.about h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}
</style>
