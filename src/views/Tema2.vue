<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Valoración de impactos y riesgos ambientales
    p.mb-5 La valoración ambiental, de acuerdo con Conesa (1997), es el conjunto de elementos, características, procesos que dotan al medio ambiente de una serie de cualidades y méritos en los que se basa la necesidad de su conservación.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Esta valoración es el resultado del proceso de análisis y procesamiento de la información recolectada, por medio del cual se valora o cualifica la calidad de los componentes y factores del ambiente estudiado, permitiendo entonces sacar conclusiones sobre su importancia y apoyar de esta manera la toma de decisiones sobre las posibilidades de intervenirlo con el proyecto o de conservarlo en su estado actual. Los tipos de valor se clasifican, según Arboleda (2008), de esta manera:
    .row.mb-5
      .col-12.bg-c3.p-4
        p.text-center.mb-5 #[b Los tipos de valor se clasifican, según Arboleda (2008), de esta manera:]
        .row.justify-content-center
          .col-lg-10
            TabsA.color-primario.mb-5
              .tarjeta.color-acento-botones.p-4(titulo="Ecológico")
                .row
                  .col-12
                    p #[b Ecológico]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema2/img1.svg', style="width: 70px").m-auto
                  .col
                    p.mb-0 Este valor estriba principalmente en su importancia e interés para la ciencia, la técnica y la cultura; por ser aprovisionadores de recursos o receptores de actividades; por la reserva genética depositada en ellos.
              .tarjeta.color-acento-botones.p-4(titulo="Productivo")
                .row
                  .col-12
                    p #[b Productivo]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema2/img2.svg', style="width: 70px").m-auto
                  .col
                    p.mb-0 El medio ambiente en general y cada sistema en particular produce bienes y servicios en mayor o menos medida, bien en forma de recursos accesibles (disponibles) o potenciales (no disponibles, con las técnicas actuales). Por lo tanto, este valor debe reflejar la capacidad productiva del ambiente.
              .tarjeta.color-acento-botones.p-4(titulo="Paisajístico")
                .row
                  .col-12
                    p #[b Paisajístico]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema2/img3.svg', style="width: 70px").m-auto
                  .col
                    p.mb-0 Se refiere a los valores perceptuales incluyendo consideraciones de orden estético. Denota la expresión de los valores estéticos, plásticos y emocionales del medio natural.
              .tarjeta.color-acento-botones.p-4(titulo="Sociocultural")
                .row
                  .col-12
                    p #[b Sociocultural]
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema2/img4.svg', style="width: 70px").m-auto
                  .col
                    p.mb-0 Estriba en la importancia e interés de las estructuras y condiciones sociales e histórico-culturales de las comunidades humanas o de la población de un área determinada.
            .row
              .col-12.p-4.bg-white
                p.mb-0 El valor ambiental de un factor es directamente proporcional al grado de caracterización cualitativa que producen las siguientes consideraciones, de acuerdo con Conesa (1997), las cuales pueden tomarse como aspectos que posibilitan la determinación de la valoración ambiental.
    .row.mb-5
      .col-12.bg-c3.p-4
        p.text-center.mb-5 #[b Consideraciones de valoración ambiental]
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img2.png', style="width: 350px").m-auto
          .col-lg-7
            SlyderA
              .row.justify-content-center
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img5.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Extensión]. Refleja el área de influencia en relación con el entorno. A mayor extensión, mayor valor.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img6.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Complejidad]. Si el ambiente está compuesto por elementos diversos es más valioso que uno simple.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img7.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Rareza]. Califica lo frecuente o raro de un elemento del entorno.
              .row.justify-content-center
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img8.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Representatividad]. Determina el carácter simbólico del entrono (Incluye el carácter de endémico).
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img9.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Naturalidad]. En cuanto más natural sea un ambiente es más valioso.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img10.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Abundancia]. Cuando está en gran cantidad en el entorno.
              .row.justify-content-center
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img11.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Diversidad]. Abundancia de elementos distintos en el entorno.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img12.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Estabilidad]. Permanencia en el entorno, firmeza.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img13.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Singularidad]. Valor adicional por la condición de distinto o distinguido.
              .row.justify-content-center
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img14.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Irreversibilidad]. Imposibilidad de que cualquier alteración sea asimilada por el medio debido a mecanismos de autodepuración.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img15.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Fragilidad]. Vulnerabilidad y carácter perecedero de la cualidad del factor.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img16.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Continuidad]. Necesidad de conservación.
              .row.justify-content-center
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img17.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Insustitubilidad]. Imposibilidad de ser sustituido.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img18.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Clímax]. Proximidad al punto de más alto valor ambiental de un proceso.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img19.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Interés ecológico]. Por su peculiaridad ecológica.
              .row.justify-content-center
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img20.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Interés histórico-cultural]. Para las comunidadese interés individual para las personas.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img21.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Dificultad de conservación]. Dificultad es subsistencia en buen estado.
                .col-10.col-md-8.mb-4
                  .row
                    .col-12.pe-4.py-4.bg-c8
                      .row
                        .col-auto.pe-0
                          figure.fig-p1
                            img(src='@/assets/curso/tema2/img22.svg', style="width: 40px").m-auto
                        .col.ps-0
                          p.mb-0 #[b Significación]. Importancia para la zona del entorno.
    p.mb-5 #[b.txt-c1 Continuando con Conesa (1997)], la capacidad de acogida es la aptitud que presenta un determinado territorio para recibir las consecuencias positivas y negativas que se pueden derivar de la construcción o el funcionamiento de un proyecto. Para su determinación se ha utilizado el concepto de la “sensibilidad ambiental” la cual se define como la mayor o menor capacidad de un sistema natural o social, para asimilar la acción de agentes externos sobre alguna de sus partes, sin que se produzcan cambios en la estructura o las propiedades de esas partes, de una magnitud tal que las alteren significativamente en comparación con su estado original.
    .row.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .row
          .col-12.p-4.bg-c9
            p.mb-0 Esta sensibilidad ambiental no puede entenderse si se piensa en el sistema como un todo, puesto que la acción de los agentes externos se realiza, necesariamente, sobre componentes específicos del sistema. #[b Existen diferentes criterios para calificar la sensibilidad ambiental, sin embargo, puede partirse de una escala inversa de tres rangos, según Arboleda (2008), así]:
      .col-lg-6
        figure
          img(src='@/assets/curso/tema2/img3.png', style="width: 530px").m-auto
    .row.mb-5
      .col-12.bg-c3.p-4
        p.text-center.mb-5 #[b Criterios de calificación]
        .row.justify-content-center
          .col-lg-10.mb-5
            .row.justify-content-center
              .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
                .tarjeta-avatar.h-100
                  img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop')
                  .tarjeta.color-secundario1
                    .p-4
                      p.text-center #[b Sensibilidad ambiental alta:]
                      p.mb-0 Cuando el sistema tiene poca capacidad para asimilar los cambios introducidos en sus componentes por la acción de un proyecto o actividad, aún si esta acción tiene una magnitud menor.
              .col-10.col-md-6.col-lg-4.mb-4.mb-lg-0
                .tarjeta-avatar.h-100
                  img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop')
                  .tarjeta.color-secundario2
                    .p-4
                      p.text-center #[b Sensibilidad ambiental media:]
                      p.mb-0 El sistema tiene una capacidad moderada para asimilar las acciones propuestas sobre sus componentes; puede decirse que las respuestas de esos componentes son proporcionales a la magnitud de la acción de tales proyectos.
              .col-10.col-md-6.col-lg-4
                .tarjeta-avatar.h-100
                  img(src='@/assets/curso/tema2/img23.svg' alt='AvatarTop')
                  .tarjeta.color-secundario3
                    .p-4
                      p.text-center #[b Sensibilidad ambiental baja: ]
                      p.mb-0 Cuando la acción de un proyecto o actividad, aún si tiene una magnitud considerable, produce cambios menores en la estructura o propiedades del componente sobre el cual actúa.
          .col-lg-10.p-4.bg-white
            p.mb-0 Estas condiciones de acogida o sensibilidad se obtienen de los resultados de la evaluación ambiental, pero muchas veces también puede estar definida por los planes de ordenamiento territorial o las normas de usos del suelo.
    p En respuesta a la forma como se ejecuta o realiza la acción que produce el impacto y de acuerdo con las condiciones del factor ambiental que está siendo afectado por dicha acción (línea base), se generan características especiales en los impactos, que le establecen atributos particulares a cada uno de ellos.
    p.mb-5 #[b Identificar estas particularidades es la mayor dificultad en las evaluaciones y por eso la mayoría de los métodos de evaluación tratan de calificar algunos de estos atributos con el fin de determinar la significación o gravedad del impacto].
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-acento-botones1.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img24.svg", alt='')
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1 #[b Características de los impactos ambientales]
                  p En la siguiente tabla se presenta una lista de algunas de estas características, obtenida del libro de Vicente Conesa, (1997) Guía metodológica para la evaluación de impacto ambiental.
                .col-sm-auto
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/caracteristicas_impactos_ambientales.pdf')" target="_blank")
                    span(style="color: #000 !important") Abrir
    .row.mb-4
      .col-auto.bg-c6
        h3.mb-0.px-4.py-3.text-white Gestión del riesgo
    p.mb-5 Según la GTC 104 DE 2009, riesgo es la posibilidad de que suceda algo que tendrá impacto en los objetivos. El riesgo se puede originar en un evento, una acción o en la falta de acción. Las consecuencias pueden ir desde lo benéfico hasta lo catastrófico. #[b El riesgo para el ambiente se puede presentar en forma de "perturbación" causada por la actividad (o inactividad) humana que lleva a la degradación o a la pérdida de la sostenibilidad].
    .row.justify-content-center.mb-4
      .col-lg-10.bg-c10.p-4
        .row
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img4.png', style="width: 430px", alt='').m-auto
          .col-lg-8
            p.mb-0 #[b La gestión del riesgo comprende la cultura], procesos y estructuras que se orientan hacia el aprovechamiento de las oportunidades potenciales al tiempo que se manejan los efectos adversos. (ICONTEC, 2006).
    .row.mb-4
      .col-12.bg-c11.py-3
        p La gestión del riesgo concierne a todo el mundo y nunca es responsabilidad exclusiva de la alta dirección, los gerentes ni del consultor de riesgos de la organización. Exige el compromiso y la energía desde la alta dirección hasta los empleados, quienes pueden ser los primeros en ver un incidente, un peligro potencial o una oportunidad de mejora. La información de entrada también puede provenir de las partes interesadas.
        p Como lo ilustra la trayectoria de retroalimentación todo el proceso de gestión del riesgo es iterativo. #[b El proceso se puede repetir muchas veces con criterios adicionales o modificados para la evaluación del riesgo que conducen a un proceso de mejora continua].
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 Figura 2. Panorama general de la gestión del riesgo
    figure.mb-4
      img(src='@/assets/curso/tema2/img27.svg', style="width: 930px", alt='').m-auto
    .row.mb-5
      .col-auto
        p.txt-c2 Tomado de ICONTEC. (2009) Guía técnica colombiana GTC 104 Gestión del riesgo Ambiental Principios y proceso; p.2.
    p El riesgo ambiental se origina en la relación entre los seres humanos, sus actividades y el ambiente. La gestión del riesgo ecológico, que trata sobre los riesgos asociados con las actividades humanas pasadas, presentes y futuras sobre la flora, la fauna y los ecosistemas, es un subconjunto de la gestión del riesgo ambiental.
    p.mb-5 #[b Los riesgos ambientales se pueden agrupar en dos categorías: Riesgo para el ambiente y Riesgo para una organización debido a temas relacionados con el ambiente].
    .row.justify-content-center.align-items-center
      .col-lg-6.mb-4.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul1")
          .row(titulo="Riesgo para el ambiente")
            .col-12
              p.mb-0 Este tipo de riesgo reconoce que las actividades de una organización pueden causar alguna forma de cambio ambiental. Los riesgos ambientales se pueden relacionar con la flora y la fauna; la salud y el bienestar humanos; la prosperidad cultural y social; los recursos terrestres, acuáticos y aéreos; la energía y el clima. Es necesario definir el alcance de cada estudio particular.
          .row(titulo="Normatividad")
            .col-12
              p.mb-0 Esto incluye el riesgo de no cumplir la legislación y criterios existentes (o futuros). Otros riesgos incluyen las pérdidas de negocios que puede sufrir una organización como resultado de una gestión pobre, como es el caso de pérdida de reputación, multas, costos de litigios y por no asegurar y mantener los permisos y licencias para el desarrollo y las actividades operativas.
          .row(titulo="Salud y seguridad")
            .col-12
              p.mb-0 Los problemas de salud y seguridad y la gestión del riesgo para el manejo de emergencias pueden ser problemas significativos para el riesgo ambiental. Sin embargo, ya que otras guías abordan la orientación para estos problemas, y para evitar la duplicación, no se tratan en esta guía.
          .row(titulo="Gestión del riesgo")
            .col-12
              p.mb-0 La gestión del riesgo ambiental proporciona un conjunto formal de procesos que ayuda en la toma de decisiones que afectan el ambiente y orienta a los encargados de tomar decisiones en lo relativo a tratar la incertidumbre.
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/img5.png', style="width: 450px", alt='').m-auto

</template>

<script>
export default {
  name: 'Tema2',
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
