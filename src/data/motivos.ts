// Motivos de consulta de Sexología clínica.
// Los que tienen `pagina` se publican en /sexologia-clinica/<slug>/ y aparecen
// como enlace en la lista de la página de Sexología clínica.
//
// Formato de los bloques de texto:
//   'texto con **negrita** y *cursiva*'  → párrafo
//   'voz:…'    → voz interna (cita breve en serif)
//   'dest:…'   → frase destacada con línea lateral
//   'ciclo:a|b|c' → ciclo encadenado con flechas

export interface Seccion {
  titulo: string;
  bloques: string[];
}

export interface PaginaMotivo {
  title: string;
  description: string;
  h1: string;
  intro: string[];
  secciones: Seccion[];
}

export interface Motivo {
  label: string;
  slug?: string;
  pagina?: PaginaMotivo;
}

export const MOTIVOS: Motivo[] = [
  { label: 'Deseo sexual' },
  { label: 'Dificultades de erección' },
  { label: 'Eyaculación rápida' },
  {
    label: 'Eyaculación retardada',
    slug: 'eyaculacion-retardada',
    pagina: {
      title: 'Eyaculación retardada · Silvina Lizarraga',
      description:
        'Cuando “llegar” se vuelve una obligación. Un espacio para comprender la dificultad para eyacular, con una mirada que integra lo médico, lo emocional y lo vincular.',
      h1: 'Cuando “llegar” empieza a convertirse en una obligación',
      intro: [
        'Algunas personas consultan porque necesitan mucho tiempo para eyacular, porque solamente pueden hacerlo en determinadas circunstancias o porque durante un encuentro sexual no logran hacerlo.',
        'A veces la dificultad estuvo presente desde el comienzo de su vida sexual. Otras aparece después de un período en el que la respuesta era diferente. También puede suceder que la eyaculación aparezca en algunas situaciones y no en otras.',
        'dest:El tiempo, por sí solo, no nos dice qué está sucediendo.',
        'Necesitamos comprender cómo vive esa persona la dificultad, cuándo aparece, cuándo no y qué lugar fue ocupando en su sexualidad y en sus vínculos.',
        'Que una respuesta aparezca en una situación y no en otra nos da información. **No nos da, por sí sola, una explicación.**',
      ],
      secciones: [
        {
          titulo: '“Tengo que acabar”',
          bloques: [
            'A medida que el encuentro avanza y la eyaculación no llega, puede empezar a aparecer una preocupación:',
            'voz:“¿Por qué no puedo acabar?”',
            'Y después otra:',
            'voz:“Tengo que acabar.”',
            'Lo que comenzó como un encuentro sexual puede transformarse progresivamente en un esfuerzo por conseguir una respuesta.',
            'La atención empieza a desplazarse hacia el tiempo, el propio cuerpo, lo que estará pensando la otra persona o cuánto más podrá continuar.',
            '**Cuanto mayor es la obligación de llegar, más difícil puede resultar permanecer conectado con aquello que se está sintiendo.**',
            'Algunas personas lo describen diciendo: *“se me va la cabeza”*. El cuerpo continúa en el encuentro, pero la atención empieza a alejarse de las sensaciones y del placer.',
          ],
        },
        {
          titulo: 'Dos dificultades diferentes, una misma exigencia',
          bloques: [
            'En la eyaculación rápida la preocupación puede ser:',
            'voz:“Todavía no. Tengo que aguantar.”',
            'En la retardada puede convertirse en:',
            'voz:“Dale. Tengo que acabar.”',
            'Son dificultades distintas, pero en ambas puede ocurrir que la experiencia sexual empiece a organizarse alrededor de conseguir —o impedir— una determinada respuesta corporal.',
            'Y el placer quede en segundo plano.',
          ],
        },
        {
          titulo: 'La otra persona también está en el encuentro',
          bloques: [
            'Cuando la eyaculación tarda mucho en aparecer, la otra persona también puede empezar a preguntarse qué sucede.',
            'Puede sentirse responsable, pensar que no está generando suficiente excitación o interpretar la dificultad como falta de deseo.',
            'Al mismo tiempo, quien intenta eyacular puede percibir esa preocupación y sentirse todavía más observado o exigido.',
            '**Así, casi sin darse cuenta, dos personas pueden terminar trabajando para conseguir una eyaculación en lugar de estar compartiendo una experiencia sexual.**',
          ],
        },
        {
          titulo: 'Cada cuerpo aprende su propia manera de responder',
          bloques: [
            'A lo largo de la vida vamos construyendo formas particulares de excitarnos y de experimentar placer.',
            'En algunas personas existen modos de estimulación muy específicos que resultan fáciles de reproducir en ciertas circunstancias y difíciles en otras.',
            'Eso no significa que alguien se masturbe “mal”, ni permite concluir automáticamente que una determinada práctica o el consumo de pornografía expliquen la dificultad.',
            '**Primero necesitamos comprender qué sucede en esa persona.**',
          ],
        },
        {
          titulo: 'No todo es psicológico',
          bloques: [
            'Las dificultades para eyacular también pueden estar relacionadas con medicamentos, consumo de sustancias, condiciones médicas, factores neurológicos, intervenciones quirúrgicas, cambios asociados a distintas etapas de la vida u otros aspectos biológicos.',
            'Por eso no parto de explicaciones como *“no puede soltarse”*, *“necesita controlar”* o *“es un problema emocional”* antes de comprender qué está sucediendo.',
            '**Una dificultad sexual puede tener más de un factor interviniendo al mismo tiempo.**',
          ],
        },
        {
          titulo: 'Mucho más que llegar',
          bloques: [
            'El problema no siempre es solamente cuánto tiempo tarda una persona en eyacular.',
            'A veces el verdadero sufrimiento aparece cuando todo el encuentro empieza a quedar organizado alrededor de esa respuesta.',
            'dest:La sexualidad puede volver a ser algo más amplio que la obligación de llegar.',
          ],
        },
      ],
    },
  },
  {
    label: 'Dificultades relacionadas con el orgasmo',
    slug: 'dificultades-con-el-orgasmo',
    pagina: {
      title: 'Dificultades relacionadas con el orgasmo · Silvina Lizarraga',
      description:
        '¿Siempre tiene que haber un orgasmo? Un espacio para comprender qué está sucediendo, sin explicaciones automáticas y con una mirada más amplia sobre el placer.',
      h1: '¿Siempre tiene que haber un orgasmo?',
      intro: [
        'El orgasmo suele ocupar un lugar privilegiado dentro de nuestra idea de cómo “debería” ser una relación sexual.',
        'A veces, tanto, que el encuentro parece dividirse en dos categorías: si hubo orgasmo, salió bien; si no lo hubo, algo falló.',
        'Pero una experiencia sexual puede ser placentera, íntima y satisfactoria sin que necesariamente termine en un orgasmo.',
        'dest:No tener un orgasmo en un encuentro no constituye, por sí mismo, una dificultad sexual.',
        'Necesitamos comprender qué está sucediendo, si representa un cambio, en qué situaciones aparece y, fundamentalmente, **qué significa y cuánto malestar genera para esa persona**.',
      ],
      secciones: [
        {
          titulo: '¿Nunca ocurrió o algo cambió?',
          bloques: [
            'Hay personas que nunca experimentaron un orgasmo. Otras podían alcanzarlo y en algún momento comenzaron a encontrar dificultades.',
            'También puede ocurrir que aparezca en determinadas situaciones y no en otras.',
            'Una vez más, saber **cuándo sucede y cuándo no** puede ayudarnos a comprender la dificultad, pero no autoriza explicaciones automáticas.',
            'Cada historia necesita ser entendida en su propio contexto.',
          ],
        },
        {
          titulo: 'El orgasmo tampoco es un examen',
          bloques: [
            'Cuando empieza la preocupación por “llegar”, es fácil que la atención se aleje de las sensaciones.',
            'Aparecen preguntas:',
            'voz:¿Por qué todavía no puedo?<br />¿Qué tendría que estar sintiendo?<br />¿La otra persona se estará dando cuenta?',
            'Y aquello que necesita conexión con el cuerpo puede convertirse en una evaluación permanente de si la respuesta está sucediendo como “debería”.',
            'La otra persona también puede entrar en esa lógica y empezar a esforzarse cada vez más para conseguir el orgasmo.',
            '**Y el encuentro empieza a parecerse más a conseguir aprobar un examen que a un espacio para compartir placer.**',
          ],
        },
        {
          titulo: 'El placer no funciona igual para todas las personas',
          bloques: [
            'Muchas personas llegan a la vida adulta con poca información sobre su propia respuesta sexual y con muchas ideas acerca de cómo debería producirse un orgasmo.',
            'No todas las personas necesitan la misma estimulación, ni experimentan el placer de la misma manera.',
            'Tampoco existe una única forma “correcta” de llegar al orgasmo.',
            '**Conocer el propio cuerpo y comprender la propia respuesta sexual también forma parte de construir una sexualidad más propia.**',
          ],
        },
        {
          titulo: 'No todo ocurre “en la cabeza”',
          bloques: [
            'Las dificultades relacionadas con el orgasmo también pueden estar asociadas con medicamentos, determinadas condiciones médicas o neurológicas, cambios hormonales, dolor u otros factores biológicos.',
            'Al mismo tiempo pueden intervenir ansiedad, estrés, experiencias previas, relación con el propio cuerpo, contexto, vínculo y expectativas.',
            'Y muchas veces no existe una única causa.',
            '**Por eso no parto de una explicación previa. Primero necesitamos comprender qué está sucediendo.**',
          ],
        },
        {
          titulo: 'Más que una meta',
          bloques: [
            'El orgasmo puede ser una experiencia muy placentera.',
            'Pero **no es el certificado de que hubo una buena relación sexual, ni su ausencia significa necesariamente que no hubo placer.**',
            'dest:La sexualidad es mucho más amplia que una meta al final del encuentro.',
          ],
        },
      ],
    },
  },
  {
    label: 'Dolor y dificultades en la penetración',
    slug: 'dolor-en-la-penetracion',
    pagina: {
      title: 'Dolor y dificultades en la penetración · Silvina Lizarraga',
      description:
        'El dolor sexual no es algo que haya que aprender a soportar. Un espacio para comprender qué está sucediendo, con evaluación integral y sin juicios.',
      h1: 'El dolor no es algo que haya que aprender a soportar',
      intro: [
        'Algunas personas sienten dolor, ardor, molestia o una sensación intensa de tensión durante determinados encuentros sexuales.',
        'Otras encuentran que la penetración resulta difícil o directamente imposible.',
        'El dolor puede aparecer ante el contacto, al intentar una penetración vaginal o anal, durante ella o incluso después del encuentro. En algunas situaciones también puede existir una respuesta involuntaria de tensión muscular que dificulta o impide la penetración.',
        'dest:El dolor sexual no debería naturalizarse ni convertirse en algo que haya que soportar para poder tener una relación sexual.',
      ],
      secciones: [
        {
          titulo: 'Cuando el cuerpo empieza a anticipar',
          bloques: [
            'Si una experiencia dolió una vez, es comprensible que ante el siguiente encuentro aparezca temor a que vuelva a suceder.',
            'El cuerpo puede empezar a prepararse para protegerse.',
            'ciclo:Dolor|miedo al dolor|mayor tensión|nuevamente dolor',
            'Con el tiempo pueden aparecer evitación, disminución del deseo o temor frente a situaciones que se perciben como el comienzo de una experiencia que podría volver a doler.',
            'Esto no significa que **“el dolor sea psicológico”**.',
            'Significa que cuerpo y emoción pueden empezar a participar de un mismo circuito, incluso cuando el origen inicial haya sido físico.',
          ],
        },
        {
          titulo: 'Primero, comprender qué está sucediendo',
          bloques: [
            'El dolor sexual puede estar relacionado con múltiples factores.',
            'Dependiendo de la zona y del tipo de práctica, pueden intervenir cambios hormonales o genitourinarios, infecciones, endometriosis, afecciones vulvares o dermatológicas, alteraciones del piso pélvico, lesiones, condiciones que afectan la región anal o rectal y otras causas médicas.',
            'También pueden intervenir experiencias previas, miedo, trauma, contexto, aspectos emocionales o vinculares.',
            'Por eso, ante dolor persistente o recurrente, **la evaluación médica es importante**.',
            'En algunas situaciones también puede ser necesaria la participación de profesionales especializados en piso pélvico.',
          ],
        },
        {
          titulo: 'La penetración no define una relación sexual',
          bloques: [
            'Cuando existe dolor o dificultad para penetrar, toda la sexualidad puede empezar a organizarse alrededor de una sola pregunta:',
            'voz:“¿Hoy podremos?”',
            'Entonces cada encuentro corre el riesgo de convertirse en una prueba.',
            'Si se logra, parece un éxito.<br />Si no se logra, parece un fracaso.',
            'Y pueden ir quedando afuera muchas otras posibilidades de encuentro, excitación, contacto, juego y placer.',
            '**La penetración —vaginal o anal— puede formar parte de un encuentro sexual o no estar presente. No determina por sí misma si hubo una experiencia sexual satisfactoria.**',
          ],
        },
        {
          titulo: 'No se trata solamente de “lograr que entre”',
          bloques: [
            'Cuando la penetración se convierte en el único objetivo, puede aparecer una presión enorme alrededor del cuerpo y del encuentro.',
            'Y el riesgo es que toda la experiencia quede reducida a comprobar si esta vez “se pudo”.',
            'Pero una persona no debería atravesar dolor o miedo para cumplir con una expectativa acerca de cómo tendría que ser su sexualidad.',
            '**Seguridad, deseo, placer, autonomía y capacidad de elegir importan tanto como cualquier respuesta corporal.**',
          ],
        },
        {
          titulo: 'Recuperar seguridad y placer',
          bloques: [
            'Cuando durante mucho tiempo el cuerpo estuvo asociado con dolor, miedo o esfuerzo, el problema ya no es solamente si la penetración resulta posible.',
            'También importa qué ocurre con la confianza en el propio cuerpo, con el deseo, con el placer y con la posibilidad de elegir cómo vivir la sexualidad.',
            'dest:Que la penetración sea posible no es el objetivo final. Poder vivir la propia sexualidad sin dolor, sin miedo y con mayor libertad tiene mucho más sentido.',
          ],
        },
      ],
    },
  },
];

export const motivoHref = (m: Motivo) => (m.slug ? `/sexologia-clinica/${m.slug}/` : undefined);
