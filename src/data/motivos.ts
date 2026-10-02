// Motivos de consulta de Sexología clínica.
// Los que tienen `pagina` se publican en /sexologia-clinica/<slug>/ y aparecen
// como enlace en la lista de la página de Sexología clínica.
//
// Formato de los bloques de texto:
//   'texto con **negrita**, *cursiva* y [enlace](/ruta/)'  → párrafo
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
  {
    label: 'Deseo sexual',
    slug: 'deseo-sexual',
    pagina: {
      title: 'Deseo sexual · Silvina Lizarraga',
      description:
        '“No tengo ganas” puede querer decir muchas cosas. Un espacio para comprender qué frena el deseo y qué necesita, sin frecuencias “correctas”.',
      h1: '“No tengo ganas” puede querer decir muchas cosas',
      intro: [
        'La disminución o ausencia de deseo sexual es uno de los motivos de consulta más frecuentes en sexología.',
        'Pero cuando alguien dice *“ya no tengo ganas”*, para mí esa frase es el comienzo de una exploración.',
        'Necesitamos comprender qué cambió, cuándo comenzó, cómo era anteriormente su sexualidad, qué sucede cuando aparece la posibilidad de un encuentro y, especialmente, **qué significa para esa persona no tener deseo**.',
      ],
      secciones: [
        {
          titulo: 'Cuando la falta de deseo es la punta del iceberg',
          bloques: [
            'A veces lo que aparece en la superficie no nos cuenta todo lo que está sucediendo por debajo.',
            'Detrás de una disminución del deseo pueden existir ansiedad, miedo al desempeño, dolor, dificultades de erección, eyaculación rápida o retardada, dificultades relacionadas con el orgasmo, cambios hormonales o físicos, medicamentos, cansancio, experiencias previas, conflictos vinculares, distancia emocional o una combinación de varios factores.',
            'dest:“No tengo deseo” es el comienzo de una pregunta, no el final de un diagnóstico.',
            'En algunos casos, lo que se vive como falta de deseo puede ser también una manera de dejar de exponerse a una experiencia que se volvió frustrante, exigente, dolorosa o angustiante.',
          ],
        },
        {
          titulo: 'El deseo no siempre aparece de la misma manera',
          bloques: [
            'Existe una idea muy instalada de que primero debería aparecer el deseo y recién después el acercamiento sexual.',
            'A veces ocurre así. Pero no siempre.',
            'En muchas personas, el deseo puede aparecer en respuesta a un acercamiento, una caricia, una conversación, una sensación corporal o un determinado contexto erótico. A esto se lo conoce como **deseo responsivo**.',
            'Que el deseo no aparezca espontáneamente no significa necesariamente que exista una dificultad.',
            'Pero deseo responsivo **no significa obligación, complacencia ni aceptar un encuentro esperando que “las ganas aparezcan”**. Requiere disponibilidad, libertad y un contexto que resulte seguro y agradable para esa persona.',
          ],
        },
        {
          titulo: '¿Qué necesita el deseo?',
          bloques: [
            'Más que preguntarnos cuánto deseo “debería” tener una persona, muchas veces resulta más útil comprender **qué lo facilita y qué lo inhibe**.',
            'El cansancio, el estrés, las preocupaciones, el dolor, el miedo al desempeño, los conflictos de pareja, la distancia emocional, algunos medicamentos o determinados cambios físicos pueden actuar como frenos.',
            'En otras situaciones, el tiempo, la intimidad, la conexión emocional, sentirse deseado, determinados estímulos eróticos o simplemente poder salir por un momento de las exigencias cotidianas pueden facilitar su aparición.',
            '**No siempre necesitamos fabricar más deseo. A veces necesitamos comprender qué lo está frenando y qué condiciones necesita esa persona para poder encontrarse con él.**',
          ],
        },
        {
          titulo: 'El deseo cambia a lo largo de la vida',
          bloques: [
            'El deseo no permanece idéntico a los veinte, a los cuarenta, a los sesenta o a los setenta años.',
            'Puede cambiar con el estrés, la crianza, una enfermedad, una separación, el climaterio o la menopausia, los cambios corporales, una relación de muchos años o diferentes momentos vitales.',
            '**Que el deseo cambie no significa necesariamente que la sexualidad haya terminado.**',
            'A veces necesita otros tiempos, otros estímulos, otras condiciones o expectativas diferentes.',
          ],
        },
        {
          titulo: 'Cuando dos personas no desean de la misma manera',
          bloques: [
            'En una pareja no es necesario que ambas personas tengan la misma frecuencia de deseo ni que este aparezca al mismo tiempo.',
            'Muchas veces el sufrimiento comienza con las interpretaciones.',
            'Quien tiene más deseo puede sentirse rechazado o poco deseado. Quien tiene menos puede empezar a sentirse presionado, observado o a vivir cada gesto de afecto como el comienzo de una demanda sexual.',
            'Así pueden aparecer ciclos en los que cuanto más una persona busca acercarse, más la otra se aleja; y cuanto más se aleja una, más la otra busca confirmación.',
            'La dificultad ya no está solamente en cuánto deseo tiene cada uno, sino en **qué sucede entre ambos alrededor del deseo**.',
          ],
        },
        {
          titulo: 'Una mirada integral',
          bloques: [
            'Los cambios en el deseo pueden relacionarse con aspectos emocionales y vinculares, pero también con hormonas, enfermedades, dolor, medicamentos, sustancias, sueño, cansancio o diferentes etapas de la vida.',
            'Muchas veces participan varios factores al mismo tiempo.',
            'Por eso no parto de una explicación previa. **Primero necesitamos comprender qué está sucediendo en esa persona y en ese momento de su vida.**',
          ],
        },
        {
          titulo: 'No se trata simplemente de “tener más ganas”',
          bloques: [
            'No existe una frecuencia “correcta” de deseo que todas las personas deban alcanzar.',
            'Tampoco una persona tiene una dificultad sexual simplemente porque desea menos que su pareja o porque atraviesa un período de menor interés sexual.',
            'Lo importante es comprender cómo vive esa situación, cuánto malestar le genera y qué desea para sí misma.',
            'dest:El objetivo no es fabricar deseo. Es comprenderlo y crear las condiciones para que pueda expresarse de una manera más propia, libre y satisfactoria.',
          ],
        },
      ],
    },
  },
  {
    label: 'Dificultades de erección',
    slug: 'dificultades-de-ereccion',
    pagina: {
      title: 'Dificultades de erección · Silvina Lizarraga',
      description:
        'Que una erección falle no significa necesariamente una disfunción. Una mirada integral que considera el cuerpo, las emociones y el vínculo.',
      h1: 'Que una erección falle no significa necesariamente que exista una disfunción',
      intro: [
        'Que en alguna ocasión una erección no aparezca, se pierda o tenga menos firmeza de la esperada no significa automáticamente que exista una disfunción eréctil.',
        'La respuesta sexual no funciona como un mecanismo voluntario que podemos encender y mantener a voluntad. Puede verse influida por el cuerpo, las emociones, el contexto, el vínculo, el cansancio, el estrés, sustancias, medicamentos y muchas otras variables.',
        '**El problema muchas veces comienza cuando aquello que ocurrió una vez empieza a ser esperado la próxima vez.**',
        'Aparece entonces una pregunta:',
        'voz:“¿Y si me vuelve a pasar?”',
        'Y la atención puede desplazarse de las sensaciones, el placer y el encuentro hacia la vigilancia de la erección.',
      ],
      secciones: [
        {
          titulo: '¿Sucede siempre o solamente en algunas situaciones?',
          bloques: [
            'Para comprender una dificultad de erección importa saber cuándo aparece, pero también cuándo no.',
            'Puede ocurrir con una persona y no con otra, en algunos encuentros pero no durante la masturbación, haber estado presente desde el comienzo de la vida sexual o aparecer después de años sin dificultades.',
            '**Que una erección aparezca en una situación y en otra no, no nos da por sí solo una explicación. Nos da una pista.**',
            'No significa automáticamente falta de deseo, ausencia de atracción ni un determinado conflicto psicológico.',
            'Necesitamos comprender qué cambia entre una situación y otra.',
          ],
        },
        {
          titulo: 'Una erección también habla del cuerpo',
          bloques: [
            'Las dificultades de erección pueden relacionarse con factores vasculares, metabólicos, neurológicos, hormonales, farmacológicos, con determinadas enfermedades, consumo de sustancias u otros aspectos físicos.',
            'Por eso no conviene asumir que una dificultad es psicológica simplemente porque aparece durante un encuentro sexual.',
            '**Una dificultad sexual puede tener más de un factor interviniendo al mismo tiempo.**',
          ],
        },
        {
          titulo: 'Cuando aparece la vigilancia',
          bloques: [
            'Después de una experiencia que generó preocupación, puede comenzar un ciclo:',
            'ciclo:dificultad|*“¿y si vuelve a pasar?”*|vigilancia|menos conexión con las sensaciones|mayor dificultad|*“sabía que iba a pasar”*',
            'La persona puede empezar a observarse casi desde afuera: comprobar si la erección está suficientemente firme, preguntarse cuánto durará o qué estará pensando la otra persona.',
            'dest:Deja de estar viviendo el encuentro y empieza a observarse durante el encuentro.',
            'Cuanto más se intenta controlar una respuesta que necesita excitación y conexión con las sensaciones, más difícil puede resultar permanecer en ellas.',
          ],
        },
        {
          titulo: 'La erección no es una medida',
          bloques: [
            'dest:Una erección es una respuesta sexual. No es una medida del deseo, de la masculinidad ni del valor de una persona.',
            'Y una relación sexual es mucho más que una penetración.',
            'Puede haber besos, caricias, contacto, excitación, fantasías, juego, exploración, placer compartido y muchas otras formas de encuentro.',
            '**La penetración puede estar presente o no. No define por sí sola si existió una experiencia sexual satisfactoria.**',
          ],
        },
        {
          titulo: 'La otra persona también puede entrar en el problema',
          bloques: [
            'Cuando aparece una dificultad de erección, la otra persona puede interpretarla como falta de deseo o de atracción, sentirse responsable o comenzar también a estar pendiente de si la erección aparece o se mantiene.',
            'Quien tiene la dificultad puede sentirse avergonzado, frustrado o temer decepcionar.',
            'Así, sin proponérselo, ambos pueden terminar observando la erección en lugar de participar del encuentro.',
          ],
        },
        {
          titulo: 'Cuando existe una ayuda médica',
          bloques: [
            'Los tratamientos médicos pueden ser un recurso valioso cuando están correctamente indicados.',
            'A veces pienso en ellos como una **muleta**: una ayuda puede acompañar durante un tiempo mientras se recuperan otros recursos, del mismo modo que una muleta permite caminar mientras continúa la rehabilitación de una lesión.',
            'Eso no significa que toda persona deba dejar una medicación ni que utilizarla implique dependencia. En algunos casos puede ser necesaria durante períodos prolongados por razones médicas.',
            'Lo importante es que la respuesta sexual no quede reducida exclusivamente a la presencia o ausencia de una medicación.',
          ],
        },
        {
          titulo: 'Recuperar el encuentro',
          bloques: [
            'Trabajar sobre una dificultad de erección implica algo más amplio que conseguir que una erección “funcione”.',
            'También importa recuperar la confianza en el propio cuerpo, poder volver a las sensaciones, al erotismo, al placer y a la presencia de la otra persona.',
            'dest:Una erección puede formar parte del encuentro. No necesita convertirse en la medida de si el encuentro existió o fue satisfactorio.',
          ],
        },
      ],
    },
  },
  {
    label: 'Eyaculación rápida',
    slug: 'eyaculacion-rapida',
    pagina: {
      title: 'Eyaculación rápida · Silvina Lizarraga',
      description:
        '¿Rápida para quién? Un espacio para comprender la eyaculación rápida más allá del cronómetro: regular no es lo mismo que controlar.',
      h1: '¿Rápida para quién?',
      intro: [
        'Cuando una persona dice *“acabo demasiado rápido”*, una de las primeras preguntas que aparece es:',
        'voz:¿Rápido para quién?',
        '¿Para esa persona? ¿Para la otra? ¿En relación con cuánto cree que debería durar un encuentro? ¿Con algo que vio, escuchó o aprendió acerca de la sexualidad?',
        'Y también:',
        'voz:¿Cómo sabemos que es rápido? ¿Cómo lo estamos midiendo?',
        'El tiempo puede ser parte de la dificultad, pero no alcanza por sí solo para comprenderla.',
        'Importa saber desde cuándo ocurre, si sucede siempre o en determinadas situaciones, cuánto margen siente la persona sobre su respuesta y qué malestar genera para ella o para su vínculo.',
      ],
      secciones: [
        {
          titulo: 'Cuando aparece el cronómetro',
          bloques: [
            'Muchas personas empiezan a organizar el encuentro alrededor de una sola consigna:',
            'voz:“Tengo que durar más.”',
            'Entonces aparecen estrategias para intentar controlar la eyaculación: distraerse, pensar en otra cosa, interrumpir constantemente, cambiar de posición, intentar sentir menos, “aguantar” o incluso masturbarse antes de un encuentro.',
            'No todas estas conductas tienen necesariamente el mismo significado ni son un problema en sí mismas.',
            'La pregunta es **qué función cumplen para esa persona**.',
            'Porque a veces sucede algo paradójico:',
            '**para poder sostener durante más tiempo un encuentro sexual, la persona empieza a hacer todo lo posible para sentir menos.**',
            'Y el encuentro se transforma en una misión para no eyacular.',
          ],
        },
        {
          titulo: 'Regular no es lo mismo que controlar',
          bloques: [
            'Controlar puede convertirse en intentar no sentir demasiado para evitar que la eyaculación ocurra.',
            'Regular implica algo diferente: poder reconocer la excitación, percibir cómo aumenta y permanecer conectado con las propias sensaciones sin vivir ese aumento como una amenaza.',
            'dest:No se trata simplemente de “aguantar”.',
            'Se trata de conocer cómo responde el propio cuerpo y desarrollar una relación diferente con la excitación.',
          ],
        },
        {
          titulo: 'Poder percibirse sin convertirse en espectador',
          bloques: [
            'La autopercepción corporal puede tener un lugar importante.',
            'Reconocer las sensaciones que acompañan la excitación y comprender cómo cambia la respuesta sexual permite conocer mejor el propio cuerpo.',
            'Pero esa atención no debería convertirse nuevamente en vigilancia.',
            '**Poder percibirse no es lo mismo que observarse permanentemente para comprobar si “ya está por pasar”.**',
          ],
        },
        {
          titulo: 'A veces detrás de la urgencia hay otra preocupación',
          bloques: [
            'En algunas personas la rapidez para penetrar o el apuro durante el encuentro pueden estar relacionados con otro temor:',
            'voz:“Tengo que aprovechar ahora que tengo la erección porque en cualquier momento puedo perderla.”',
            'En esos casos, una aparente dificultad para retrasar la eyaculación puede estar acompañada por miedo a perder la erección.',
            'Por eso no conviene mirar una respuesta sexual de manera aislada.',
          ],
        },
        {
          titulo: '¿Qué tendría que pasar antes de eyacular?',
          bloques: [
            'Muchas veces la preocupación por “durar” está relacionada con una expectativa: sostener la penetración hasta que la otra persona tenga un orgasmo.',
            'Cuando toda la experiencia sexual se organiza alrededor de esa idea, el tiempo puede convertirse en una enorme fuente de presión.',
            'La penetración es solamente una de las posibilidades dentro de un encuentro sexual y **el placer de la otra persona no depende exclusivamente de cuánto dure**.',
          ],
        },
        {
          titulo: 'Una cosa es eyacular. Otra es irse del juego',
          bloques: [
            'A veces lo que termina afectando más el encuentro no es únicamente cuándo ocurre la eyaculación, sino **qué sucede emocionalmente después**.',
            'Podemos imaginar a dos personas entrando a una cancha para jugar. Ambas están participando, disfrutando del encuentro. De pronto, una siente que algo salió mal y abandona el juego.',
            'La otra queda ahí, quizá todavía con ganas de seguir.',
            'Quien eyaculó puede sentir frustración, vergüenza, enojo consigo mismo o la sensación de haber fallado. Y quedarse en el encuentro implica también poder permanecer frente a la otra persona con esa frustración.',
            'A veces, en cambio, se desconecta, se aleja, pide disculpas o da por terminado el encuentro.',
            'La otra persona también puede sentirse frustrada, no necesariamente porque la eyaculación haya ocurrido antes de lo esperado, sino porque **el otro se retiró emocional o sexualmente mientras todavía había posibilidades de seguir compartiendo**.',
          ],
        },
        {
          titulo: 'Aprender a quedarse',
          bloques: [
            'Una eyaculación no tiene por qué marcar automáticamente el final de la experiencia sexual de ambas personas.',
            'Puede haber otras formas de continuar el encuentro, de dar y recibir placer, de permanecer conectados y de atravesar juntos una situación que no ocurrió como se esperaba.',
            'dest:Una cosa es eyacular. Otra es irse del juego.',
          ],
        },
        {
          titulo: 'Mucho más que durar',
          bloques: [
            'La dificultad no se reduce a conseguir más minutos.',
            'También importa comprender qué expectativas están presentes, cómo se vive la excitación, qué ocurre con la frustración, qué lugar ocupa la penetración y cuánto del encuentro quedó organizado alrededor de un cronómetro.',
            'dest:El objetivo no es aprender a aguantar. Es poder estar más presente en el propio cuerpo y en el encuentro.',
          ],
        },
      ],
    },
  },
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
            'En la [eyaculación rápida](/sexologia-clinica/eyaculacion-rapida/) la preocupación puede ser:',
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
