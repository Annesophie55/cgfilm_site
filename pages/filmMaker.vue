<template>
  <Header />
  <main>
    <section class="intro">
      <div class="intro-content">
        <figure>
          <NuxtImg src="/images/jimmy_radeau.webp" alt="Photo de Jimmy-Paul Coti lors du tournage de 'Aventure sur la rivière blanche'" width="1235" height="300"/>
          <figcaption>Quand le cascadeur est introuvable! - "Aventure sur la rivière Blanche"</figcaption>
        </figure>

        <h1 class="intro-title">Découvrez l'univers de Jimmy-Paul Coti</h1>
        <p class="intro-txt">"Jimmy-Paul Coti, réalisateur autodidacte et visionnaire, donne vie à des récits captivants depuis plus de quatre décennies."</p>
      </div>
      <div class="overlay"></div>
    </section>
    <section class="film-maker__bio">
      <h2 class="section-title">Les premiers pas d'un réalisateur passionné</h2>
      <div class="bio-content">
        <div class="img-fixed-container">
          <div class="img-content">
            <figure>
              <NuxtImg src="/images/derriere_la_camera.webp" alt="Photo de Jimmy-Paul Coti" width="400" height="400"/>
              <figcaption>Jimmy-Paul Coti derrière la camera</figcaption>
            </figure>
          </div>
        </div>
          <div class="bio-txt">
            <p>Jimmy-Paul Coti n’avait jamais imaginé devenir un jour réalisateur. Après avoir exercé une dizaine de métiers variés dans l’industrie et le commerce, la providence lui a offert une opportunité unique à 26 ans, sans formation académique ni école de cinéma.</p>
            <h3>"Les débuts en super 8 !"</h3>
            <p>À cette époque, les amateurs passionnés utilisaient des caméras 8mm ou Super 8, les plus fortunés optant pour le 16mm. Le prix élevé des caméras, des projecteurs, et surtout de la pellicule argentique, rendait cet art presque inaccessible. Malgré ces défis, Jimmy-Paul a fait ses débuts en autodidacte avec sa première caméra, une Super 8 ELMO, qu'il considérait comme une petite merveille technologique.</p>
            <h3>"Un premier projet audacieux !"</h3>
            <p>Avec cet équipement, il réalisa son tout premier film, 'Dernière Mission'. Avec sa naïveté de débutant Il avait écrit une sorte de James Bond, comportant des poursuites en voiture, des cascades spectaculaires, et même une course en 1300cc Kawasaki sous les ailes d’un avion volant en rase-motte. Ces débuts audacieux marquèrent le début d’une carrière où la passion et l'engagement de Jimmy-Paul ne faibliront jamais.</p>
        </div>
      </div>
    </section>
    <hr/>
    <section class="time-line">
      <TimeLine />
    </section>
  </main>
  <Footer />
</template>


<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import TimeLine from '~/components/TimeLine.vue';

</script>

<style scoped lang="scss">
@use '@/assets/scss/pages/filmMaker.scss';
</style>