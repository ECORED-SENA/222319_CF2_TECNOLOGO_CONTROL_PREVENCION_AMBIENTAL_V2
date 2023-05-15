<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center
      .col-12.bg-c1.p-4.mb-5
        p.mb-0 #[b.txt-c1 Todo proceso de transformación de productos y prestación de servicios, trae consigo la generación de impactos ambientales positivos y negativos] que afectan los sistemas socioecológicos, debido a las prácticas insostenibles y el incumplimiento de las diferentes normas, acuerdos y políticas que regulan estas actividades. De ahí la importancia de la implementación de una gestión ambiental en las organizaciones. El siguiente video presenta, de manera introductoria, el valor de un diagnóstico ambiental, dando lugar así a las temáticas a desarrollar.
      .col-lg-11
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/PdeFLo6RqpQ" title="Gestión ambiental" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Gestión ambiental

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
