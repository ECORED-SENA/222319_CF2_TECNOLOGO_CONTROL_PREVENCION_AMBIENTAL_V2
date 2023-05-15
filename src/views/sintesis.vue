<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 El diagnóstico ambienta, aunque no es un proceso único o estándar para todas las organizaciones, pues depende de determinados factores, sí requiere de la implementación de técnicas y métodos que contribuyen a la identificación del contexto de la organización,  sus componentes ambientales y la evaluación de impacto y riesgos ambientales que permiten priorizar acciones y proponer planes de manejo ambiental. Lo anterior visto en este componente se sintetiza en el siguiente gráfico.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
