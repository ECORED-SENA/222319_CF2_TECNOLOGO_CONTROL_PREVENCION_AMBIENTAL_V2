export default {
  global: {
    componenteFormativo: 'Valoración de los impactos y riesgos ambientales',
    descripcionCurso:
      '​​​En este componente formativo se identifican todos los términos, técnicas y métodos que contribuyen al diagnóstico ambiental en una organización; realizando identificación del contexto de la organización, componentes ambientales, diversas metodologías de evaluación de impacto y riesgos ambientales para priorizar los impactos significativos y proponer planes de manejo ambiental.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    /*imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],*/
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Impacto ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Valoración de impactos y riesgos ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Metodologías de valoración de impactos ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Medidas de manejo ambiental',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/pdf.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arboleda, J. A. (2008). Manual de evaluación de impacto ambiental de proyectos, obra o actividades. Medellin, Colombia.',
      link: 'https://doi.org/10.1017/CBO9781107415324.004',
    },
    {
      referencia:
        'Conesa V. (1993). La Evaluación del Impacto Ambiental. (2da ed.). Mundi Prensa: Madrid, España.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000007947',
    },
    {
      referencia:
        'Decreto 2820/2010. [Presidencia de la República]. Por el cual se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales.',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2009) GTC 104 Gestión del Riesgo Ambiental, Principios y Procesos. Agosto 5 de 2010.',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (2015).  Norma NTC-ISO 14001 Sistema de gestión ambiental.',
      link: '',
    },
    {
      referencia: 'Wikipedia. (2020). Línea de base (medio ambiente).',
      link:
        'https://es.wikipedia.org/wiki/L%C3%ADnea_de_base_(medio_ambiente)#:~:text=Se%20entiende%20por%20l%C3%ADnea%20de,influencia%20de%20nuevas%20intervenciones%20antr%C3%B3picas.',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'elemento de las actividades, productos o servicios de una organización que interactúa o puede interactuar con el medio ambiente. (NTC ISO 14001:2015)',
    },
    {
      termino: 'Ciclo de vida',
      significado:
        'etapas consecutivas e interrelacionadas de un sistema de producto (o servicio) , desde la adquisición de materia prima o su generación a partir de recursos naturales hasta la disposición final. (NTC ISO 14001:2015)',
    },
    {
      termino: 'Evaluación de Impacto Ambiental',
      significado:
        'se entiende por Evaluación de Impacto Ambiental, el conjunto de estudios y sistemas técnicos que permiten estimar los efectos que la ejecución de un determinado proyecto, obra o actividad, causa sobre el medio ambiente, el cual tiene la identificación de los aspectos e impactos ambientales por medio de metodologías cuantitativas y/o cualitativas como puede ser el desarrollo de matrices de impacto ambiental.  (Vicente Conesa -Guia Metodologica para la Evaluaciòn del Impacto Ambiental).',
    },
    {
      termino: 'Factores ambientales',
      significado:
        'factores ambientales o parámetros ambientales, englobamos los diversos componentes del Medio Ambiente entre los cuales se desarrolla la vida en nuestro planeta. Son el soporte de toda actividad humana.  Son susceptibles de ser modificados por los humanos y estas modificaciones pueden ser grandes y ocasionar graves problemas, generalmente difíciles de valorar ya que suelen ser a medio o largo plazo, o bien problemas menores y entonces son fácilmente soportables.   Los factores ambientales considerados son:  • El hombre, la flora y la fauna.  • El suelo, el agua, el aire, el clima y el paisaje. Las interacciones entre los anteriores.  • Los bienes materiales y el patrimonio cultural. (Conesa, V. 1993).',
    },
    {
      termino: 'Línea Base Ambiental',
      significado:
        'es la descripción de la situación actual, en la fecha del estudio, sin influencia de nuevas intervenciones antrópicas. En otras palabras, es la fotografía de la situación ambiental imperante, considerando todas las variables ambientales, en el momento que se ejecuta el estudio. Se consideran todos los elementos que intervienen en una evaluación de impacto ambiental y una situación crítica, reseñando actividad humana actual, estado y situación de la biomasa vegetal y animal, clima, suelos, etc. (Wikipedia, 2020).',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'cambio en el medio ambiente, ya sea adverso o beneficioso como resultado total o parcial de los aspectos ambientales de una organización. (NTC ISO 14001:2015).',
    },
    {
      termino: 'Medio ambiente',
      significado:
        'entorno en el cual una organización opera, incluidos el aire, el agua, el suelo, los recursos naturales, la flora, la fauna, los seres humanos y sus interrelaciones. (NTC ISO 14001:2015).',
    },
    {
      termino: 'Proceso',
      significado:
        'conjunto de actividades interrelacionadas o que interactúan, que transforman las entradas en salidas (NTC ISO 14001:2015).',
    },
    {
      termino: 'Plan de manejo ambiental',
      significado:
        'es el conjunto detallado de medidas y actividades que, producto de una evaluación ambiental, están orientadas a prevenir, mitigar, corregir o compensar los impactos y efectos ambientales debidamente identificados, que se causen por el desarrollo de un proyecto, obra o actividad. Incluye los planes de seguimiento, monitoreo, contingencia, y abandono según la naturaleza del proyecto, obra o actividad. (Decreto 2820/2010 art. 1).',
    },
    {
      termino: 'Prevención de la contaminación',
      significado:
        'utilizaciòn de procesos, prácticas, técnicas, materiales, productos, servicios o energía para evitar, reducir o controlar (en forma separada o en combinación) la generación, emisión o descarga de cualquier tipo de contaminante o residuo, con el fin de reducir impactos ambientales adversos. (NTC ISO 14001:2015).',
    },
  ],
  complementario: [
    {
      tema: 'Impacto ambiental',
      referencia:
        'Noticias Caracol (2018 agosto 12). Ituango vive la peor crisis tras emergencia del proyecto hidroeléctrico | Noticias Caracol [video]. ',
      tipo: 'Video',
      link: 'https://youtu.be/buPSHHPnPzk',
    },
    {
      tema: 'Impacto ambiental',
      referencia:
        'Arboleda, J. (2008) Manual de Evaluación de Impacto Ambiental de Proyectos, Obras o Actividades. p. 18.',
      tipo: 'Libro',
      link: 'https://www.academia.edu/34461272/Manual_EIA_Jorge_Arboleda_1_',
    },
    {
      tema: 'Impacto ambiental',
      referencia:
        'Arboleda, J. (2008). Anexos al manual de evaluación de impacto ambiental de proyectos, obras o actividades, en Manual de Evaluación de Impacto Ambiental de Proyectos, Obras o Actividades, p.15-18.   ',
      tipo: 'PDF',
      link:
        'https://docplayer.es/41432935-Manual-para-la-evaluacion-de-impacto-ambiental-de-proyectos-obras-o-actividades-anexos.html',
    },
    {
      tema: 'Valoración de impactos y riesgos ambientales',
      referencia:
        'ICONTEC. (2009) Guía técnica colombiana GTC 104 Gestión del riesgo Ambiental Principios y proceso.',
      tipo: 'PDF',
      link: 'https://docplayer.es/86811895-Guia-tecnica-colombiana-104.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Diana Carolina Triana Guarnizo',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Indutrial',
        },
        {
          nombre: 'Juan Carlos Cárdenas Sánchez',
          cargo: 'Instructor',
          centro: 'Centro de Gestión Indutrial',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Floridablanca - Centro Industrial del Diseño y La Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador web',
          centro:
            'Regional Floridablanca - Centro Industrial del Diseño y La Manufactura',
        },
        {
          nombre: 'Francisco Jose Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Floridablanca - Centro Industrial del Diseño y La Manufactura',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
