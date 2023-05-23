<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Impacto ambiental
    p.mb-5 Muchas de las actividades humanas, pero en especial aquellas de producción o prestación de bienes y servicios, suministro de materias primas y desarrollo de infraestructura, interactúan de alguna manera con el entorno donde se emplazan, tanto en su construcción como en su operación.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por ejemplo, consumen recursos naturales, remueven vegetación, utilizan suelos productivos, modifican el paisaje, desplazan personas, producen residuos o emisiones, etc. Es decir, generan cambios en las condiciones ambientales que pueden ser muy variables en cuanto a su significancia, magnitud, duración, extensión, etc.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        figure.mb-3
          img(src='@/assets/curso/tema1/img1.svg', style="width: 550px", alt='').m-auto

      .col-lg-6
        .row
          .col-12.bg-c2.p-4
            p El resultado de esta relación proyecto-ambiente a lo largo del tiempo ha conducido a un proceso de deterioro o pérdida de la calidad ambiental que se ha acentuado en las últimas décadas, llegando a extremos preocupantes, en algunas ocasiones insostenibles o desembocando en situaciones de tipo global, que están poniendo en riesgo la salud, el bienestar y aún la supervivencia del ser humano.
            p.mb-0 Esta situación ha generado entonces un movimiento mundial que busca revertir, o por lo menos reducir esta tasa de deterioro, que se ha consolidado dentro del concepto de desarrollo sostenible que se empezó a acuñar desde la cumbre de Río. #[b Para consolidar los postulados del desarrollo sostenible, se han propuesto diferentes estrategias y mecanismos, tales como las que se muestra en la siguiente infografía].

    .titulo-sexto.color-acento-contenido.ms-0.mb-4.ml-0
      p.mb-0 Figura 1. Postulados del desarrollo sostenible
    .row.mb-5
      .col-12.bg-c3.p-4
        .row.justify-content-center
          .col-lg-10.mb-4
            h4.text-center Para consolidar los postulados del desarrollo sostenible, se han propuesto diferentes estrategias y mecanismos, tales como las que se muestra en la siguiente infografía.
          .row.justify-content-center.mb-5
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta-avatar.h-100
                img(src='@/assets/curso/tema1/img2.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center.mb-0 Fortalecer las instituciones ambientales.
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta-avatar.h-100
                img(src='@/assets/curso/tema1/img3.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center.mb-0 Formular políticas y normas ambientales de obligatorio cumplimiento.
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta-avatar.h-100
                img(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center.mb-0 Alentar la acción voluntaria mediante el montaje de sistemas de gestión ambiental y la producción más limpia.
            .col-10.col-md-6.col-lg-3.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/tema1/img5.svg' alt='AvatarTop')
                .tarjeta.color-primario
                  .p-4
                    p.text-center.mb-0 Estimular la participación de la comunidad para que tome posiciones frente al deterioro o establecer instrumentos de gestión para el análisis ambiental de los proyectos.
          .col-lg-10.bg-c4
            .row
              .col-auto.ps-0
                figure
                  img(src='@/assets/curso/tema1/img6.svg', style="width: 80px", alt='').m-auto
              .col.p-4
                p.mb-0 También se destaca la Evaluación de Impacto Ambiental (EIA). Herramienta que permite determinar no solo las consecuencias ambientales de cualquier emprendimiento, sino también proponer las acciones necesarias para atender dichas secuelas.
    p.mb-5 Sin embargo, se debe tener presente que el hecho de que un proyecto o actividad altere significativamente el ambiente, no significa que no sea viable, ya que la viabilidad no se mide por la generación de impactos positivos o negativos sino por la capacidad del ambiente de recuperarse ya sea por medios naturales o artificiales y de los promotores de los proyectos de hacer un manejo adecuado de los impactos; de tal forma, que se pueda garantizar un nuevo equilibrio proyecto ambiente que refleje en términos absolutos una igual o mejor calidad en las condiciones del ambiente afectado.
    .row.mb-5
      .col-12.bg-c5
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img2.png', style="width: 300px", alt='').m-auto
          .col-lg-8
            p.mb-0 Es por eso que se puede decir en términos generales que el objetivo de la evaluación de impacto ambiental, es encontrar las soluciones que den armonía a la relación proyecto/sistema ambiental.
    p.mb-5 De lo que se trata es de estudiar el medio, descubrir los procesos y funciones de sus componentes, analizar su sensibilidad, o sea el grado de vulnerabilidad, sus debilidades y fortalezas, para diagnosticar su real capacidad de recuperación frente a las acciones y procesos producidos por la obra y su energía desplegada, y suplir con medidas artificiales los desajustes de la relación proyecto/ambiente.” (Charla del profesor Manuel Zárate, Panamá, 2004) (Citado por Arboleda, J. A. (2008).
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img8.svg", alt='')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1 #[b Proyecto hidroléctrico]
                  p.text-white Se sugiere visualizar el video que se encuentra en el material de apoyo, el cual presenta la crisis enfrentada en Ituango por el proyecto hidroeléctrico.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(href="https://www.youtube.com/watch?v=buPSHHPnPzk" target="_blank")
                    span(style="color: #000 !important") Ver Video
                    i.fab.fa-youtube(style="color: #000 !important")
    p.mb-5 #[b Las bases conceptuales, entonces, para la evaluación y valoración de los aspectos, impactos y riesgos ambientales se pueden apreciar en el siguiente recurso.]
    .tarjeta.tarjeta--azul.p-4.p-lg-5.mb-5
      SlyderA(tipo="b")
        .row.m-1
          .col-lg-4.mb-4.mb-lg-0
            h4 Conocer el proyecto
            p.mb-0 Si el impacto ambiental es el resultado de la interacción entre un proyecto o actividad propuesta y el ambiente, para identificar los impactos es indispensable empezar por un buen conocimiento del proyecto, obra o actividad propuesto, de sus componentes, sus procesos constructivos y operativos, las etapas de desarrollo que comprende, etc.
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/img3.png', style="width: 650px", alt='').m-auto
        .row.m-1
          .col-lg-4.mb-4.mb-lg-0
            h4 Describir procesos
            p.mb-0 Es por esto que es indispensable describir cuáles son los procesos que se llevan a cabo al interior de la organización o proyecto para llegar a la identificación de los aspectos e impactos ambientales.
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/img4.png', style="width: 650px", alt='').m-auto
        .row.m-1
          .col-lg-4.mb-4.mb-lg-0
            h4 Realizar análisis técnico
            p.mb-0 Se requiere entonces realizar una lectura de la información técnica, de ingeniería y operacional del proyecto “con ojos ambientales”, es decir, realizar un análisis de la documentación correspondiente con la finalidad de detectar aquellas acciones (actividades, operaciones, procedimientos, elementos, aspectos, tareas, etc.) del proyecto, obra o actividad que están relacionándose de cualquier manera con el medio ambiente, porque son éstas las que producirán, directa o indirectamente, los cambios en algunos de los componentes de dicho entorno. Estas acciones se denominan: Acciones susceptibles de producir impacto (ASPI), por tanto, se requiere identificar los aspectos e impactos relacionados.
          .col-lg-8
            figure
              img(src='@/assets/curso/tema1/img5.png', style="width: 650px", alt='').m-auto
    .row.mb-4
      .col-auto.bg-c6
        h3.mb-0.px-4.py-3.text-white Aspectos e impactos ambientales
    p.mb-5 Se presentan algunas tablas que se relacionan como Anexos en el Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades, de Arboleda (2008); recurso que se encuentra en el material de apoyo, páginas de la 15 a la 18.
    .row.align-items-center
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img6.png', style="width: 550px", alt='').m-auto
      .col-lg-8
        .row
          .col-12.p-4.bg-c7
            p.mb-0 #[b De igual forma, se puede resumir que es indispensable identificar los componentes ambientales en el área de influencia directa e indirecta] y comprender los procesos a los que se dedica la organización a manera de plano de localización y diagrama de flujo de procesos, tal y como se ejemplifica en las páginas 24 a 26 del Manual de Evaluación de Impactos Ambientales para proyectos, obra actividades, de Arboleda (2008).

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
