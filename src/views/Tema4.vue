<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Medidas de manejo ambiental
    p Según el decreto 2041 de 2014 sobre Licencias Ambientales, define que el Plan de Manejo Ambiental “Es el conjunto detallado de actividades, que producto de una evaluación ambiental, están orientadas a prevenir, mitigar, corregir o compensar los impactos y efectos ambientales que se causen por el desarrollo de un proyecto, obra o actividad.  Incluye los planes de seguimiento, monitoreo, contingencia, y abandono según la naturaleza del proyecto, obra o actividad”.
    p.mb-5 #[b De acuerdo con lo anterior, es importante destacar que la formulación del plan de manejo ambiental del proyecto, obra o actividad debe incluir tres aspectos:]
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row
            .col-lg-8.mb-4.mb-lg-0
              p #[b El plan de manejo de los impactos ambientales (PMI)]
              p.mb-0 Es el conjunto de medidas que buscan prevenir o minimizar las consecuencias desfavorables del proyecto, de tal modo que se conserven, lo más fielmente posible, las condiciones ambientales iniciales o la situación previa sin proyecto.  Incluye también las acciones que se deben tomar para potencializar o maximizar los beneficios que puede generar el proyecto.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema4/img1.png', style="width: 450px", alt='').m-auto
          .row
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema4/img2.png', style="width: 450px", alt='').m-auto
            .col-lg-8
              p #[b El plan de monitoreo y seguimiento ambiental del proyecto (PMS)]
              p.mb-0 Es el plan de recolección sistemática de datos y de seguimiento ambiental del proyecto (vigilancia), que permite verificar las condiciones ambientales con proyecto y la efectividad de las medidas que se propusieron para el manejo de las consecuencias que este genera.
          .row
            .col-lg-8.mb-4.mb-lg-0
              p #[b Plan de contingencias ambientales (PCT)]
              p.mb-0 Es el conjunto de acciones que se deben implementar para el manejo de los riesgos ambientales que puede generar el proyecto.
            .col-lg-4
              figure
                img(src='@/assets/curso/tema4/img3.png', style="width: 450px", alt='').m-auto
    .row.mb-5
      .col-12.bg-c12.p-4
        p.mb-0 #[b Para la formulación del PMA], es necesario volver a utilizar toda la información recolectada, procesada o producida en los elementos anteriores de la EIA, es decir, se requiere la información sobre el proyecto, en especial la de las ASPI, la información sobre el ambiente que puede ser afectado, en especial de las FARI y la información sobre los impactos. Igualmente, en este proceso se produce información que se debe incorporar a los estudios técnicos y económicos del proyecto en su conjunto, tales como los costos y los programas de ejecución del PMA.
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 Figura 3. Esquema conceptual de la formulación del PMA
    figure.mb-3
      img(src='@/assets/curso/tema4/img1.svg', style="width: 1150px", alt='').m-auto

    .bg-c20.my-5
      p.p-4 #[strong De acuerdo con la finalidad o el objetivo que se desea alcanzar, las medidas se pueden clasificar de la siguiente manera:]

    .tarjeta.tarjeta--azul.p-4.p-lg-5.mb-5
      SlyderA(tipo="b")
        .row.m-1
          .col-lg-5.mb-4.mb-lg-0
            h4 Medidas de prevención
            p Son acciones encaminadas a evitar los impactos y efectos negativos que pueda generar un proyecto, obra o actividad sobre el medio ambiente. Es decir, son aquellas medidas que buscan eliminar a priori las causas que pueden generar los impactos y, por lo tanto, hacen parte de la etapa de estudio y diseño del proyecto o antes de que se inicie la construcción.
            p.mb-0 Por ejemplo, como medidas de prevención se pueden implementar cambios en el diseño del proyecto, en los procesos de construcción u operación, en las tecnologías utilizadas, en su localización, en el calendario de trabajo, etc., los cuales tienen que ser incorporados al proyecto antes de su construcción.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/img4.png', style="width: 650px", alt='').m-auto
        .row.m-1
          .col-lg-5.mb-4.mb-lg-0
            h4 Medidas de mitigación
            p Son acciones dirigidas a minimizar los impactos y efectos negativos de un proyecto, obra o actividad sobre el medio ambiente, o sea la implementación de acciones para limitar o eliminar los posibles efectos adversos del proyecto. Para lograr esta reducción, se deben considerar todas las posibilidades técnicas, administrativas u operacionales que puede tener el proyecto.
            p.mb-0 Por ejemplo, para controlar la contaminación del agua por aguas residuales, se pueden utilizar sistemas de separación por gravedad o tratamientos biológicos o químicos, con lo cual se estaría reduciendo la cantidad de DBO que estaría llegando a los cuerpos de agua (magnitud) y por lo tanto minimizando la significancia del impacto ambiental (Con estas medidas se está actuando sobre el proyecto, sus tecnologías y procesos).
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/img5.png', style="width: 650px", alt='').m-auto
        .row.m-1
          .col-lg-5.mb-4.mb-lg-0
            h4 Medidas de corrección
            p Se dice que estas medidas son acciones dirigidas a recuperar, restaurar o reparar las condiciones del medio ambiente afectado por el proyecto, obra o actividad.   Es decir, son las medidas en las que se actúa directamente sobre el recurso afectado, tratando de restablecer las condiciones en las que se encontraba sin la presencia del proyecto.
            p.mb-0 Por ejemplo, para controlar los efectos de las excavaciones sobre el suelo, se tienen que adelantar actividades de restauración o recuperación en el suelo directamente, tales como engramados, fertilizaciones, etc., (con estas medidas se está actuando sobre el recurso afectado).
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/img6.png', style="width: 650px", alt='').m-auto
        .row.m-1
          .col-lg-6.mb-4.mb-lg-0
            h4 Medidas de compensación
            p Son las obras o actividades dirigidas a resarcir y retribuir a las comunidades, las regiones, localidades y entorno natural por los impactos o efectos negativos generados por un proyecto, obra o actividad, que no puedan ser evitados, corregidos, mitigados o sustituidos.   Se denominan también medidas de reemplazo y su propósito es compensar a la comunidad o al Estado por la pérdida de un recurso ambiental en un lugar determinado, con la conformación o creación de este mismo tipo de recurso en otro lugar. También aplican para el manejo de los impactos residuales o sea aquellos que no se pueden manejar completamente. Pueden comprender el pago en dinero a la comunidad para compensar la pérdida de actividades productivas o la construcción de obras o actividades para resarcir por el daño de un determinado recurso.
            p.mb-0 Por ejemplo, la pérdida de vegetación por efecto de un embalse se tiene que compensar con la creación de una zona forestal de condiciones similares a la inundada en otra zona, ya que físicamente es imposible reemplazarla en el mismo embalse.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema4/img7.png', style="width: 650px", alt='').m-auto
    p.mb-4 Ahora bien, las medidas de manejo ambiental las define la empresa de acuerdo a sus impactos significativos o componentes afectados por esos impactos significativos. El Plan de manejo ambiental de control de emisiones (relaciona el impacto significativo) o Plan de manejo ambiental calidad del aire dirigido hacia el componente ambiental que esta vulnerado por el impacto), por ejemplo, son medidas por directrices de autoridades ambientales y si requiere cumplir términos de referencia o guías ambientales del sector para licencia ambiental.
    .row.justify-content-center.mb-4
      .col-lg-10.bg-c4
        .row
          .col-auto.ps-0
            figure
              img(src='@/assets/curso/tema1/img6.svg', style="width: 80px", alt='').m-auto
          .col.p-4
            p.mb-0 #[b Ejemplos de manejo ambiental]
            p.mb-0 Algunos de esos ejemplos son los mencionados por el libro de Arboleda (2008). Consultar páginas de la 112 a la 117 en donde se visibiliza, a través de una serie de tablas de listados genéricos, medidas para el manejo ambiental de algunos impactos, las cuales se realizan por componentes ambientales afectados, que a su vez son las más comunes de usar en un proyecto.
    p.mb-5 Con base en lo anterior, y en el material de consulta, es necesario determinar que no existe un procedimiento universal para la formulación de un plan de manejo de los impactos ambientales, por lo que este trabajo se apoya más en la experiencia y conocimiento de las personas que participan en la EIA. A continuación, se expone un proceso lógico que apunta en este sentido.
    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center(titulo="Paso 1")
          .col-10.bg-c18.p-4
            p #[b Análisis de los impactos y las relaciones causa-efecto.]
            .row.align-items-center
              .col-lg-auto.col-12
                figure.mb-2.mb-lg-0
                  img(src='@/assets/curso/tema4/img2.svg', style="width: 130px", alt='').m-auto
              .col
                p.mb-0 El primer paso para poder identificar las medidas de manejo es conocer muy bien todo lo relacionado con el impacto, tal como la acción que lo origina, las consecuencias que genera, su área de influencia, los atributos con los cuales se presenta (magnitud, periodicidad, velocidad, duración, etc.). Igualmente es necesario conocer muy bien los factores ambientales que están siendo afectados, por dicho impacto: Sus condiciones iniciales (sin proyecto), sus probables condiciones finales (con proyecto), su susceptibilidad al cambio, su importancia (ecológica, económica, cultural, etc.), etc.
        .row.justify-content-center(titulo="Paso 2")
          .col-10.bg-c18.p-4
            p #[b Análisis del marco normativo y empresarial.]
            .row.align-items-center
              .col-lg-auto.col-12
                figure.mb-2.mb-lg-0
                  img(src='@/assets/curso/tema4/img3.svg', style="width: 130px", alt='').m-auto
              .col
                p Cuando se tenga un conocimiento detallado del impacto y del ambiente que va a ser afectado, se deben analizar las normas de tipo legal que se aplican al proyecto y a los impactos que se generan (emisiones, vertimientos, consumos, etc.). Las exigencias de la autoridad ambiental (contenida en los términos de referencia, en resoluciones, etc.), las exigencias de tipo sectorial, las obligaciones empresariales establecidas en políticas o normas internas o en convenios que la empresa haya firmado, etc. En el caso de que la empresa disponga de un Sistema de Gestión Ambiental, también se deben revisar las exigencias de la norma bajo la cual se tiene montado el sistema (ISO 14.000 u otro).
                p.mb-0 Todo este marco determina las orientaciones del PMA y el alcance de las medidas que se deben formular, porque se tienen que cumplir todas estas ellas.
        .row.justify-content-center(titulo="Paso 3")
          .col-10.bg-c18.p-4
            p #[b Identificación de las acciones o medidas generales que pueden manejar el impacto.]
            .row.align-items-center
              .col-lg-auto.col-12
                figure.mb-2.mb-lg-0
                  img(src='@/assets/curso/tema4/img4.svg', style="width: 130px", alt='').m-auto
              .col
                p.mb-0 Consiste en empezar a analizar y a definir las medidas que pueden manejar el impacto analizado, de acuerdo con todo el abanico de posibilidades que se planteó anteriormente. En la selección de la medida se debe tener en cuenta lo siguiente: 1. Comprobar si es posible implementar algún cambio en el proyecto para eliminar el impacto (este chequeo debe hacerse teniendo en cuenta consideraciones de tipo técnico y económico). 2. Si no se puede prevenir el impacto, proponer una medida de mitigación o corrección dependiendo del tipo de impacto, hasta llevarlo a un nivel de significancia aceptable. 3. Si no es posible prevenir el impacto y tampoco atenuarlo, entonces se propone una medida de compensación. Inicialmente, se debe hacer un planteamiento general de la medida, indicando claramente el impacto que va a manejar e identificando sus aspectos generales, ya que el diseño definitivo se hará posteriormente en el paso 5.
        .row.justify-content-center(titulo="Paso 4")
          .col-10.bg-c18.p-4
            p #[b Agrupación de las medidas de manejo generales propuestas.]
            .row.align-items-center
              .col-lg-auto.col-12
                figure.mb-2.mb-lg-0
                  img(src='@/assets/curso/tema4/img5.svg', style="width: 130px", alt='').m-auto
              .col
                p Algunas medidas de manejo tienen características similares, ya sea porque sirven de solución a impactos similares, atienden impactos sobre un mismo componente o factor ambiental o tienen tantas cosas en común que se pueden atender por medio de una misma medida. En este caso y con el propósito de optimizar los recursos y aprovechar las sinergias entre diferentes acciones, se recomienda agrupar estas medidas en una sola.
                p.mb-0 Por ejemplo, se puede tener una medida para el control de la erosión que implique el uso de coberturas vegetales (engramados, reforestación, etc.), otra medida para tratamiento paisajístico que requiere también la utilización de vegetación y una medida de compensación para reponer un área determinada de vegetación destruida. Estas tres medidas que implican la producción, uso y trabajos con material vegetal, se podrían agrupar en una sola que se llame, por ejemplo: Proyecto de tratamientos con vegetación y que incluya todas las actividades necesarias para atender todos los impactos donde se necesite el uso, manejo y tratamiento con vegetación.
        .row.justify-content-center(titulo="Paso 5")
          .col-10.bg-c18.p-4
            p #[b Diseño de la medida o proyecto propuesto.]
            .row.align-items-center
              .col-lg-auto.col-12
                figure.mb-2.mb-lg-0
                  img(src='@/assets/curso/tema4/img6.svg', style="width: 130px", alt='').m-auto
              .col
                p.mb-0 Finalmente, luego de que se tengan agregadas las medidas de manejo, se realiza el diseño de esta, de tal forma que pueda ser llevada a construcción o implementación por el constructor o el operador del proyecto y en el que se puedan estimar los costos requeridos para llevarla a cabo con un grado aceptable de confiabilidad.
    p.mb-5 Este último paso debe contener a su vez los siguientes aspectos, de acuerdo con Arboleda (2008).
    SlyderF(columnas="col-md-6 col-xl-4")
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img7.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.mb-0 Objetivos de la medida. (incluyendo los impactos que va a manejar y los factores ambientales afectados).
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img8.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.mb-0 Meta a alcanzar con la medida, es decir los logros o resultados que se espera lograr.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img9.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.mb-0 Descripción detallada de la acción propuesta.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img10.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.mb-0 Planos de localización y las obras que comprende.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img11.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.mb-0 Criterios de diseño utilizados.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img12.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.mb-0 Efectos negativos que se pueden desprender de la medida. (si los hay).
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img13.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.mb-0 Necesidades de mantenimiento.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img14.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.mb-0 Indicadores de seguimiento y monitoreo de la medida.
      .tarjeta-avatar
        img(src='@/assets/curso/tema4/img15.svg' alt='AvatarTop')
        .tarjeta.color-primario
          .p-4
            p.mb-0 Organización y personal propuesta para atenderla, incluyendo la asignación de responsabilidades a diferentes niveles.

</template>

<script>
export default {
  name: 'Tema4',
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
