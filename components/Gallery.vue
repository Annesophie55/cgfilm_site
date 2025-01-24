<template>
    <div class="gallery">
      <div class="gallery-item">
        <NuxtLink to="/films">
          <NuxtImg
            src="@/assets/images/films.webp"></NuxtImg>
          <h2>Films</h2>
        </NuxtLink>
      </div>
      <div class="gallery-item">
        <NuxtLink to="/filmMaker">
          <NuxtImg
            src="@/assets/images/filmMaker.webp"></NuxtImg>
          <h2>Le réalisateur</h2>
        </NuxtLink>
      </div>
    </div> 
</template>