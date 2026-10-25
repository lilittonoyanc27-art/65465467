import { Exercise } from './types.ts';

export const exercisesList: Exercise[] = [
  // ==========================================
  // MODALIDAD A: TEST CON 4 OPCIONES (A, B, C, D)
  // ==========================================
  {
    id: 'test-1',
    topicId: 'tema-1',
    topicTitle: { es: 'Literatura popular y culta', hy: 'Ժողովրդական և հեղինակային գրականություն' },
    type: 'test',
    difficulty: 'básico',
    instruction: {
      es: 'Elige la respuesta correcta para la siguiente pregunta sobre literatura tradicional.',
      hy: 'Ընտրիր ճիշտ պատասխանը ավանդական գրականության վերաբերյալ հետևյալ հարցի համար։',
    },
    question: {
      es: '¿Por qué la literatura popular suele tener diferentes versiones de un mismo poema o cuento?',
      hy: 'Ինչո՞ւ ժողովրդական գրականության մեջ նույն բանաստեղծությունը կամ հեքիաթը հաճախ ունենում են տարբեր տարբերակներ։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'Porque siempre la escribía un autor con firma legal en un registro oficial.',
          hy: 'Քանի որ այն միշտ գրում էր պաշտոնական գրանցամատյանում ստորագրած հեղինակը։',
        },
      },
      {
        id: 'B',
        text: {
          es: 'Porque los reyes medievales prohibían que los libros se imprimieran en papel.',
          hy: 'Քանի որ միջնադարյան թագավորներն արգելում էին գրքերը թղթի վրա տպագրել։',
        },
      },
      {
        id: 'C',
        text: {
          es: 'Porque se transmitía oralmente y cada juglar o narrador olvidaba o cambiaba detalles.',
          hy: 'Քանի որ փոխանցվում էր բանավոր, և յուրաքանչյուր աշուղ կամ պատմող մոռանում էր կամ փոխում մանրամասները։',
        },
      },
      {
        id: 'D',
        text: {
          es: 'Porque los textos antiguos se traducían siempre a diez idiomas a la vez.',
          hy: 'Քանի որ հին տեքստերը միշտ թարգմանվում էին միաժամանակ տասը լեզուներով։',
        },
      },
    ],
    correctOption: 'C',
    explanation: {
      es: 'La transmisión oral provoca necesariamente variantes: cada persona que recuerda un romance añade o modifica versos de memoria.',
      hy: 'Բանավոր փոխանցումը անխուսափելիորեն առաջացնում է տարբերակներ. յուրաքանչյուր ոք հիշողությամբ ավելացնում կամ փոխում է տողերը։',
    },
  },
  {
    id: 'test-2',
    topicId: 'tema-2',
    topicTitle: { es: 'El lenguaje literario', hy: 'Գրական լեզու' },
    type: 'test',
    difficulty: 'intermedio',
    instruction: {
      es: 'Determina cuál de las siguientes afirmaciones define la función poética o estética.',
      hy: 'Որոշիր, թե հետևյալ պնդումներից որն է սահմանում բանաստեղծական կամ գեղագիտական գործառույթը։',
    },
    question: {
      es: '¿En qué consiste principalmente la finalidad estética del lenguaje literario?',
      hy: 'Ինչո՞ւմն է հիմնականում կայանում գրական լեզվի գեղագիտական նպատակը։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'En transmitir una orden de tráfico rápida y sin adornos.',
          hy: 'Երթևեկության կարգադրությունն արագ և առանց զարդարանքների հաղորդելու մեջ։',
        },
      },
      {
        id: 'B',
        text: {
          es: 'En llamar la atención sobre la belleza y forma del propio mensaje para emocionar.',
          hy: 'Բուն հաղորդագրության գեղեցկության և ձևի վրա ուշադրություն հրավիրելու մեջ՝ հույզեր արթնացնելու համար։',
        },
      },
      {
        id: 'C',
        text: {
          es: 'En dar una definición estrictamente científica en un laboratorio químico.',
          hy: 'Քիմիական լաբորատորիայում խիստ գիտական սահմանում տալու մեջ։',
        },
      },
      {
        id: 'D',
        text: {
          es: 'En utilizar únicamente palabras en latín sin significado en español.',
          hy: 'Միայն լատիներեն բառեր օգտագործելու մեջ՝ առանց իսպաներեն իմաստի։',
        },
      },
    ],
    correctOption: 'B',
    explanation: {
      es: 'La función poética o estética se enfoca en la forma de las palabras para causar placer artístico y evocar sentimientos.',
      hy: 'Բանաստեղծական կամ գեղագիտական գործառույթը կենտրոնանում է բառերի ձևի վրա՝ գեղարվեստական հաճույք և հույզեր արթնացնելու համար։',
    },
  },
  {
    id: 'test-3',
    topicId: 'tema-3',
    topicTitle: { es: 'La prosa y el verso', hy: 'Արձակ և չափածո' },
    type: 'test',
    difficulty: 'examen',
    instruction: {
      es: 'Aplica la regla métrica española del acento en la última palabra.',
      hy: 'Կիրառիր վերջին բառի շեշտի իսպանական մետրիկական կանոնը։',
    },
    question: {
      es: 'Si un verso termina en una palabra AGUDA (como «corazón» o «mar»), ¿cómo se calcula su cómputo métrico final?',
      hy: 'Եթե բանաստեղծական տողն ավարտվում է ՎԵՐՋՆԱՇԵՇՏ (aguda) բառով (ինչպես «corazón» կամ «mar»), ինչպե՞ս է հաշվարկվում նրա վերջնական վանկերի չափը։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'Se resta una sílaba (-1) al cómputo métrico.',
          hy: 'Չափական հաշվարկից հանվում է մեկ վանկ (-1)։',
        },
      },
      {
        id: 'B',
        text: {
          es: 'El número de sílabas se duplica automáticamente.',
          hy: 'Վանկերի թիվը ինքնաբերաբար կրկնապատկվում է։',
        },
      },
      {
        id: 'C',
        text: {
          es: 'Se ignora la rima y pasa a considerarse prosa común.',
          hy: 'Հանգը անտեսվում է և այն սկսում է համարվել սովորական արձակ։',
        },
      },
      {
        id: 'D',
        text: {
          es: 'Se suma obligatoriamente una sílaba (+1) al cómputo total del verso.',
          hy: 'Տողի ընդհանուր հաշվարկին պարտադիր գումարվում է մեկ վանկ (+1)։',
        },
      },
    ],
    correctOption: 'D',
    explanation: {
      es: 'Regla de oro de la métrica española: si el verso acaba en palabra aguda se suma +1 sílaba; si es llana se queda igual; si es esdrújula se resta -1.',
      hy: 'Իսպանական մետրիկայի ոսկե կանոնը. եթե տողն ավարտվում է վերջնաշեշտ բառով՝ +1 վանկ, նախավերջին շեշտով՝ անփոփոխ, նախանախավերջինով՝ -1 վանկ։',
    },
  },
  {
    id: 'test-4',
    topicId: 'tema-4',
    topicTitle: { es: 'Cuento, leyenda, mito y romance', hy: 'Պատմվածք, ավանդազրույց, առասպել և ռոմանս' },
    type: 'test',
    difficulty: 'intermedio',
    instruction: {
      es: 'Distingue las características del mito frente a otros géneros narrativos.',
      hy: 'Տարբերակիր առասպելի հատկանիշները այլ պատմողական ժանրերից։',
    },
    question: {
      es: '¿Quiénes protagonizan principalmente los MITOS y qué intentan explicar estos relatos?',
      hy: 'Ովքե՞ր են հիմնականում ԱՌԱՍՊԵԼՆԵՐԻ գլխավոր հերոսները և ի՞նչ են փորձում բացատրել այդ պատմությունները։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'Caballeros con armadura medieval que cobran impuestos a los campesinos.',
          hy: 'Միջնադարյան զրահապատ ասպետներ, որոնք հարկեր են հավաքում գյուղացիներից։',
        },
      },
      {
        id: 'B',
        text: {
          es: 'Científicos del siglo XXI investigando en satélites espaciales.',
          hy: '21-րդ դարի գիտնականներ, որոնք հետազոտություններ են անում արբանյակներում։',
        },
      },
      {
        id: 'C',
        text: {
          es: 'Dioses y seres sobrenaturales para explicar el origen del cosmos y de las fuerzas naturales.',
          hy: 'Աստվածներ և գերբնական էակներ՝ տիեզերքի և բնության ուժերի ծագումը բացատրելու համար։',
        },
      },
      {
        id: 'D',
        text: {
          es: 'Animales domésticos que no hablan y viven en granjas actuales.',
          hy: 'Ընտանի կենդանիներ, որոնք չեն խոսում և ապրում են այսօրվա ֆերմաներում։',
        },
      },
    ],
    correctOption: 'C',
    explanation: {
      es: 'El mito es un relato sagrado de la Antigüedad protagonizado por dioses o semidioses para dar sentido cósmico a la realidad.',
      hy: 'Առասպելը հնագույն սրբազան պատմություն է՝ աստվածների մասնակցությամբ, որը բացատրում է իրականության տիեզերական ծագումը։',
    },
  },
  {
    id: 'test-5',
    topicId: 'tema-2',
    topicTitle: { es: 'El lenguaje literario', hy: 'Գրական լեզու' },
    type: 'test',
    difficulty: 'básico',
    instruction: {
      es: 'Distingue entre el sentido literal (denotativo) y el figurado (connotativo).',
      hy: 'Տարբերակիր ուղիղ (դենոտատիվ) և փոխաբերական (կոնոտատիվ) իմաստները։',
    },
    question: {
      es: '¿En cuál de las siguientes oraciones la palabra «otoño» se usa en sentido figurado connotativo?',
      hy: 'Հետևյալ նախադասություններից որո՞ւմ «otoño» (աշուն) բառն օգտագործված փոխաբերական (կոնոտատիվ) իմաստով։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: '«El viejo marinero se encontraba en el otoño de su vida».',
          hy: '«Ծեր նավաստին գտնվում էր իր կյանքի աշնանը» (ծերություն)։',
        },
      },
      {
        id: 'B',
        text: {
          es: '«El otoño astronómico comienza a finales de septiembre en el hemisferio norte».',
          hy: '«Աստղագիտական աշունը սկսվում է սեպտեմբերի վերջին հյուսիսային կիսագնդում»։',
        },
      },
      {
        id: 'C',
        text: {
          es: '«En otoño las temperaturas medias descienden cinco grados centígrados».',
          hy: '«Աշնանը միջին ջերմաստիճանը նվազում է հինգ աստիճանով»։',
        },
      },
      {
        id: 'D',
        text: {
          es: '«Compré un abrigo grueso para los meses de otoño en el centro comercial».',
          hy: '«Առևտրի կենտրոնից տաք վերարկու գնեցի աշնան ամիսների համար»։',
        },
      },
    ],
    correctOption: 'A',
    explanation: {
      es: 'En la opción A, «otoño» connota vejez, declive vital y serenidad, no la estación meteorológica del calendario.',
      hy: 'A տարբերակում «աշունը» փոխաբերաբար նշանակում է ծերություն, կյանքի մայրամուտ, ոչ թե օրացուցային եղանակ։',
    },
  },
  {
    id: 'test-6',
    topicId: 'tema-3',
    topicTitle: { es: 'La prosa y el verso', hy: 'Արձակ և չափածո' },
    type: 'test',
    difficulty: 'examen',
    instruction: {
      es: 'Identifica la clase de rima según las terminaciones fonéticas.',
      hy: 'Որոշիր հանգի տեսակը ըստ հնչյունական վերջավորությունների։',
    },
    question: {
      es: '¿Qué tipo de rima existe entre los versos que terminan en «caminos» y «amigos»?',
      hy: 'Ի՞նչ տեսակի հանգ կա «caminos» և «amigos» բառերով ավարտվող տողերի միջև։',
    },
    options: [
      {
        id: 'A',
        text: {
          es: 'Rima consonante perfecta porque ambas palabras acaban en la letra «s».',
          hy: 'Կատարյալ համակազմ հանգ, քանի որ երկու բառերն էլ ավարտվում են «s» տառով։',
        },
      },
      {
        id: 'B',
        text: {
          es: 'Rima asonante, porque a partir de la tónica solo coinciden las vocales i - o.',
          hy: 'Ձայնավորական (ասոնանս) հանգ, քանի որ շեշտից հետո համընկնում են միայն i - o ձայնավորները։',
        },
      },
      {
        id: 'C',
        text: {
          es: 'No tienen ningún tipo de rima y son versos libres.',
          hy: 'Չունեն ոչ մի տեսակի հանգ և ազատ տողեր են։',
        },
      },
      {
        id: 'D',
        text: {
          es: 'Rima estrófica esdrújula con aumento de dos sílabas.',
          hy: 'Էսդրուխուլա տնային հանգ՝ երկու վանկի ավելացմամբ։',
        },
      },
    ],
    correctOption: 'B',
    explanation: {
      es: 'La vocal tónica es la «i» (cam-I-nos / am-I-gos). Vocales idénticas: i - o. Consonantes distintas: n vs g. Por tanto, es rima asonante (i-o).',
      hy: 'Շեշտված ձայնավորը «i»-ն է (cam-I-nos / am-I-gos)։ Ձայնավորները նույնն են՝ i - o, բաղաձայնները տարբեր՝ n և g։ Հետևաբար՝ ասոնանս հանգ է (i-o)։',
    },
  },

  // ==========================================
  // MODALIDAD B: VERDADERO O FALSO
  // ==========================================
  {
    id: 'vf-1',
    topicId: 'tema-1',
    topicTitle: { es: 'Literatura popular y culta', hy: 'Ժողովրդական և հեղինակային գրականություն' },
    type: 'verdadero_falso',
    difficulty: 'básico',
    instruction: {
      es: 'Indica si la afirmación es verdadera o falsa. Si es falsa, observa su corrección.',
      hy: 'Նշիր՝ արդյոք պնդումը ճիշտ է, թե սխալ։ Եթե սխալ է, ուսումնասիրիր ճիշտ տարբերակը։',
    },
    statement: {
      es: 'La literatura popular se transmitía originalmente por escrito a través de libros impresos por grandes editoriales comerciales.',
      hy: 'Ժողովրդական գրականությունը ի սկզբանե փոխանցվում էր գրավոր՝ խոշոր առևտրային հրատարակչությունների տպագիր գրքերի միջոցով։',
    },
    isTrue: false,
    correctionIfFalse: {
      es: 'FALSO: La literatura popular se transmitía oralmente (de boca en boca y de generación en generación). Solo siglos más tarde fue recopilada por escrito.',
      hy: 'ՍԽԱԼ Է. Ժողովրդական գրականությունը փոխանցվում էր բանավոր (բերանացի, սերնդեսերունդ)։ Միայն դարեր անց այն գրի առնվեց։',
    },
    explanation: {
      es: 'En la época medieval el pueblo no sabía leer ni existía la imprenta; las canciones y romances vivían en la memoria y en la voz de las gentes.',
      hy: 'Միջնադարում ժողովուրդը կարդալ չգիտեր, և տպագրություն գոյություն չուներ. երգերն ու ռոմանսներն ապրում էին մարդկանց հիշողության և ձայնի մեջ։',
    },
  },
  {
    id: 'vf-2',
    topicId: 'tema-3',
    topicTitle: { es: 'La prosa y el verso', hy: 'Արձակ և չափածո' },
    type: 'verdadero_falso',
    difficulty: 'intermedio',
    instruction: {
      es: 'Evalúa la veracidad de la siguiente regla sobre la rima asonante y consonante.',
      hy: 'Գնահատիր հետևյալ կանոնի ճշմարտացիությունը համակազմ և ձայնավորական հանգերի վերաբերյալ։',
    },
    statement: {
      es: 'En la rima asonante coinciden tanto las vocales como las consonantes a partir de la última vocal tónica.',
      hy: 'Ձայնավորական (ասոնանս) հանգի դեպքում վերջին շեշտված ձայնավորից սկսած համընկնում են ինչպես ձայնավորները, այնպես էլ բաղաձայնները։',
    },
    isTrue: false,
    correctionIfFalse: {
      es: 'FALSO: Eso es la rima CONSONANTE. En la rima ASONANTE coinciden ÚNICAMENTE las vocales.',
      hy: 'ՍԽԱԼ Է. Դա ՀԱՄԱԿԱԶՄ (consonante) հանգն է։ ՁԱՅՆԱՎՈՐԱԿԱՆ (asonante) հանգի դեպքում համընկնում են ՄԻԱՅՆ ձայնավորները։',
    },
    explanation: {
      es: 'Ejemplo: «casa» y «pasa» es consonante (-asa / -asa). «Casa» y «rama» es asonante (a-a).',
      hy: 'Օրինակ. «casa» և «pasa»՝ համակազմ է (-asa / -asa)։ «Casa» և «rama»՝ ասոնանս է (a-a)։',
    },
  },
  {
    id: 'vf-3',
    topicId: 'figuras',
    topicTitle: { es: 'Figuras literarias: Metáfora', hy: 'Գեղարվեստական միջոցներ. Փոխաբերություն' },
    type: 'verdadero_falso',
    difficulty: 'examen',
    instruction: {
      es: 'Juzga si la frase con la palabra «como» es una metáfora en el sentido riguroso del examen.',
      hy: 'Դատիր՝ արդյոք «como» բառով նախադասությունը փոխաբերություն է քննության խիստ իմաստով։',
    },
    statement: {
      es: 'La oración «Sus ojos brillaban como el sol» es una metáfora.',
      hy: '«Sus ojos brillaban como el sol» (Նրա աչքերը շողում էին արևի պես) նախադասությունը փոխաբերություն է։',
    },
    isTrue: false,
    correctionIfFalse: {
      es: 'FALSO: Es un SÍMIL O COMPARACIÓN, porque lleva la palabra explícita de enlace «como». La metáfora diría: «Sus ojos eran soles» o «Los soles de su rostro».',
      hy: 'ՍԽԱԼ Է. Դա ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ (símil) է, քանի որ ունի բացահայտ «como» (ինչպես) կապը։ Փոխաբերությունը կլիներ. «Sus ojos eran soles» կամ «Los soles de su rostro»։',
    },
    explanation: {
      es: 'En 1.º de ESO nunca confundas la metáfora (identificación sin nexo) con el símil (comparación con «como» o «parece»).',
      hy: '1-ին ESO-ում երբեք մի՛ շփոթիր փոխաբերությունը (նույնացում առանց կապի) համեմատության հետ («como» կամ «parece» կապով)։',
    },
  },
  {
    id: 'vf-4',
    topicId: 'figuras',
    topicTitle: { es: 'Figuras literarias: Epanadiplosis', hy: 'Գեղարվեստական միջոցներ. Էպանադիպլոզիս' },
    type: 'verdadero_falso',
    difficulty: 'intermedio',
    instruction: {
      es: 'Verifica la estructura de la epanadiplosis.',
      hy: 'Ստուգիր էպանադիպլոզիսի կառուցվածքը։',
    },
    statement: {
      es: 'La epanadiplosis consiste en empezar y acabar el mismo verso o frase con la misma palabra exacta.',
      hy: 'Էպանադիպլոզիսը կայանում է նույն բանաստեղծական տողը կամ նախադասությունը ճիշտ նույն բառով սկսելու և ավարտելու մեջ։',
    },
    isTrue: true,
    explanation: {
      es: 'Verdadero. Ejemplo célebre de García Lorca: «Verde que te quiero verde». Forma un círculo poético simétrico.',
      hy: 'Ճիշտ է։ Լորկայի հայտնի օրինակը. «Verde que te quiero verde»։ Կազմում է սիմետրիկ բանաստեղծական շրջան։',
    },
  },

  // ==========================================
  // MODALIDAD C: COMPLETA EL TEXTO
  // ==========================================
  {
    id: 'comp-1',
    topicId: 'tema-4',
    topicTitle: { es: 'El romance', hy: 'Ռոմանս' },
    type: 'completa',
    difficulty: 'intermedio',
    instruction: {
      es: 'Rellena el espacio en blanco con el concepto métrico adecuado para definir el romance.',
      hy: 'Լրացրու դատարկ տեղը ռոմանսը բնորոշող ճիշտ չափական հասկացությամբ։',
    },
    sentenceBefore: {
      es: 'El romance tradicional está compuesto por una serie indeterminada de versos de arte menor que tienen exactamente',
      hy: 'Ավանդական ռոմանսը բաղկացած է փոքր արվեստի տողերի անորոշ շարքից, որոնք ունեն ճիշտ',
    },
    blankPlaceholder: '____ sílabas ____',
    sentenceAfter: {
      es: 'con rima asonante en los versos pares y versos impares que quedan sueltos.',
      hy: 'զույգ տողերի ասոնանս հանգով և կենտ տողերով, որոնք մնում են ազատ։',
    },
    options: [
      { es: 'ocho (octosílabos)', hy: 'ութ (ութվանկանի - octosílabos)' },
      { es: 'once (endecasílabos)', hy: 'տասնմեկ (տասնմեկվանկանի)' },
      { es: 'catorce (alejandrinos)', hy: 'տասնչորս (ալեքսանդրյան)' },
      { es: 'cinco (pentasílabos)', hy: 'հինգ (հնգավանկանի)' },
    ],
    correctAnswer: 'ocho (octosílabos)',
    explanation: {
      es: 'El romance español se define exclusivamente por el verso octosílabo (8 sílabas) con rima asonante en pares.',
      hy: 'Իսպանական ռոմանսը բնորոշվում է բացառապես ութվանկանի տողերով (8 sílabas)՝ զույգ տողերի ասոնանս հանգով։',
    },
  },
  {
    id: 'comp-2',
    topicId: 'figuras',
    topicTitle: { es: 'Figuras morfosintácticas', hy: 'Ձևաբանական-շարահյուսական միջոցներ' },
    type: 'completa',
    difficulty: 'básico',
    instruction: {
      es: 'Selecciona la figura retórica correspondiente a la omisión de conjunciones.',
      hy: 'Ընտրիր շաղկապների բացթողմանը համապատասխանող գեղարվեստական միջոցը։',
    },
    sentenceBefore: {
      es: 'Cuando un escritor elimina voluntariamente las conjunciones coordinantes como «y» para dar rapidez y dinamismo a la acción, está empleando la figura llamada',
      hy: 'Երբ գրողը գործողությանն արագություն և շարժում հաղորդելու համար գիտակցված բաց է թողնում համադասական շաղկապները, նա կիրառում է հետևյալ միջոցը՝',
    },
    blankPlaceholder: '____ [figura] ____',
    sentenceAfter: {
      es: ', como en la célebre frase: «Llegué, vi, vencí».',
      hy: ', ինչպես հայտնի արտահայտության մեջ. «Եկա, տեսա, հաղթեցի»։',
    },
    options: [
      { es: 'asíndeton', hy: 'ասինդետոն (անշաղկապություն)' },
      { es: 'polisíndeton', hy: 'պոլիսինդետոն (բազմաշաղկապություն)' },
      { es: 'hipérbaton', hy: 'հիպերբատոն (շրջադասություն)' },
      { es: 'aliteración', hy: 'ալիտերացիա' },
    ],
    correctAnswer: 'asíndeton',
    explanation: {
      es: 'El asíndeton suprime nexos («a-» = sin, «syndeton» = unión) para imprimir celeridad.',
      hy: 'Ասինդետոնը (անշաղկապությունը) վերացնում է կապերը՝ արագություն հաղորդելու համար։',
    },
  },

  // ==========================================
  // MODALIDAD D: RELACIONA COLUMNAS
  // ==========================================
  {
    id: 'rel-1',
    topicId: 'tema-4',
    topicTitle: { es: 'Géneros narrativos', hy: 'Պատմողական ժանրեր' },
    type: 'relaciona',
    difficulty: 'intermedio',
    instruction: {
      es: 'Relaciona cada género narrativo con su característica distintiva principal.',
      hy: 'Համապատասխանեցրու յուրաքանչյուր պատմողական ժանր իր գլխավոր բնորոշ հատկանիշի հետ։',
    },
    pairs: [
      {
        id: 'p1',
        left: { es: 'El mito', hy: 'Առասպել (El mito)' },
        right: { es: 'Protagonizado por dioses; explica el origen del cosmos', hy: 'Գլխավոր հերոսները աստվածներ են. բացատրում է տիեզերքի ծագումը' },
      },
      {
        id: 'p2',
        left: { es: 'La leyenda', hy: 'Ավանդազրույց (La leyenda)' },
        right: { es: 'Basada en hechos o lugares reales con elementos fantásticos', hy: 'Հիմնված է իրական վայրերի կամ դեպքերի վրա՝ ֆանտաստիկ տարրերով' },
      },
      {
        id: 'p3',
        left: { es: 'El cuento popular', hy: 'Ժողովրդական հեքիաթ (El cuento)' },
        right: { es: 'Narración breve de ficción con planteamiento, nudo y moraleja', hy: 'Կարճ գեղարվեստական պատմություն՝ սկզբով, զարգացմամբ և խրատով' },
      },
      {
        id: 'p4',
        left: { es: 'El romance', hy: 'Ռոմանս (El romance)' },
        right: { es: 'Poema narrativo de versos octosílabos con rima asonante en pares', hy: 'Ութվանկանի պատմողական չափածո՝ զույգ տողերի ասոնանս հանգով' },
      },
    ],
    explanation: {
      es: 'Cada uno de los cuatro géneros posee una función y una forma específicas en la tradición hispánica.',
      hy: 'Չորս ժանրերից յուրաքանչյուրն ունի իրեն հատուկ գործառույթն ու ձևը իսպանական ավանդույթում։',
    },
  },
  {
    id: 'rel-2',
    topicId: 'figuras',
    topicTitle: { es: 'Figuras fónicas y morfosintácticas', hy: 'Հնչյունային և ձևաբանական-շարահյուսական միջոցներ' },
    type: 'relaciona',
    difficulty: 'examen',
    instruction: {
      es: 'Empareja cada figura literaria con su ejemplo poético exacto.',
      hy: 'Միացրու յուրաքանչյուր գեղարվեստական միջոց իր ճշգրիտ բանաստեղծական օրինակի հետ։',
    },
    pairs: [
      {
        id: 'p5',
        left: { es: 'Aliteración', hy: 'Ալիտերացիա' },
        right: { es: '«En el silencio sólo se escuchaba un susurro de abejas...»', hy: '«En el silencio sólo se escuchaba un susurro de abejas...»' },
      },
      {
        id: 'p6',
        left: { es: 'Epanadiplosis', hy: 'Էպանադիպլոզիս' },
        right: { es: '«Verde que te quiero verde.»', hy: '«Verde que te quiero verde.»' },
      },
      {
        id: 'p7',
        left: { es: 'Anáfora', hy: 'Անաֆորա' },
        right: { es: '«Temprano levantó la muerte el vuelo / temprano madrugó...»', hy: '«Temprano levantó la muerte el vuelo / temprano madrugó...»' },
      },
      {
        id: 'p8',
        left: { es: 'Hipérbaton', hy: 'Շրջադասություն (Hipérbaton)' },
        right: { es: '«Volverán las oscuras golondrinas en tu balcón sus nidos a colgar.»', hy: '«Volverán las oscuras golondrinas en tu balcón sus nidos a colgar.»' },
      },
    ],
    explanation: {
      es: 'Son los ejemplos magistrales más representativos de la literatura española del Siglo de Oro y la lírica moderna.',
      hy: 'Սրանք իսպանական Ոսկեդարի և նոր քնարերգության ամենատիպական դասական օրինակներն են։',
    },
  },

  // ==========================================
  // MODALIDAD E: ENCUENTRA EL ERROR
  // ==========================================
  {
    id: 'err-1',
    topicId: 'figuras',
    topicTitle: { es: 'Figuras retóricas', hy: 'Գեղարվեստական միջոցներ' },
    type: 'encuentra_error',
    difficulty: 'intermedio',
    instruction: {
      es: 'Encuentra la afirmación errónea en la clasificación y selecciona la corrección adecuada.',
      hy: 'Գտիր դասակարգման մեջ առկա սխալ պնդումը և ընտրիր ճիշտ ուղղումը։',
    },
    erroneousStatement: {
      es: '«El verso "Hay un palacio y un río y un lago y un puente viejo" es un claro ejemplo de ASÍNDETON porque acelera el ritmo eliminando palabras».',
      hy: '«"Hay un palacio y un río y un lago y un puente viejo" տողը ԱՆՇԱՂԿԱՊՈՒԹՅԱՆ (asíndeton) հստակ օրինակ է, քանի որ արագացնում է ռիթմը՝ բառերը հեռացնելով»։',
    },
    highlightedError: {
      es: 'Es un claro ejemplo de ASÍNDETON',
      hy: 'Սա ԱՆՇԱՂԿԱՊՈՒԹՅԱՆ հստակ օրինակ է',
    },
    correctionOptions: [
      {
        es: 'Es en realidad POLISÍNDETON, porque repite la conjunción «y» muchas veces para ralentizar el ritmo.',
        hy: 'Իրականում դա ԲԱԶՄԱՇԱՂԿԱՊՈՒԹՅՈՒՆ (polisíndeton) է, քանի որ կրկնում է «y» (և) շաղկապը՝ ռիթմը դանդաղեցնելու համար։',
      },
      {
        es: 'Es en realidad una onomatopeya que imita el ruido de los barcos en el río.',
        hy: 'Իրականում դա ձայնանմանություն է, որը նմանակում է նավակների ձայնը։',
      },
      {
        es: 'Es en realidad un hipérbaton porque no tiene sujeto gramatical.',
        hy: 'Իրականում դա շրջադասություն է, քանի որ քերականական ենթակա չունի։',
      },
    ],
    correctIndex: 0,
    explanation: {
      es: 'Repetir la conjunción «y» varias veces es POLISÍNDETON. El asíndeton es justo lo opuesto: no poner ninguna conjunción.',
      hy: '«Y» շաղկապը բազմիցս կրկնելը ԲԱԶՄԱՇԱՂԿԱՊՈՒԹՅՈՒՆ (polisíndeton) է։ Անշաղկապությունը ուղիղ հակառակն է՝ շաղկապ չդնելը։',
    },
  },
  {
    id: 'err-2',
    topicId: 'tema-1',
    topicTitle: { es: 'Literatura popular vs culta', hy: 'Ժողովրդական և հեղինակային գրականություն' },
    type: 'encuentra_error',
    difficulty: 'básico',
    instruction: {
      es: 'Corrige el error sobre la autoría de las obras literarias.',
      hy: 'Ուղղիր գրական ստեղծագործությունների հեղինակության վերաբերյալ սխալը։',
    },
    erroneousStatement: {
      es: '«Don Quijote de la Mancha es una obra de literatura popular porque es muy famosa y todo el pueblo español la conoce».',
      hy: '«"Դոն Կիխոտը" ժողովրդական գրականության գործ է, քանի որ շատ հայտնի է և ողջ իսպանացի ժողովուրդը գիտի այն»։',
    },
    highlightedError: {
      es: 'es una obra de literatura popular',
      hy: 'ժողովրդական գրականության գործ է',
    },
    correctionOptions: [
      {
        es: 'Es LITERATURA CULTA: fue escrita por un autor conocido (Miguel de Cervantes), transmitida de forma impresa y su texto es fijo.',
        hy: 'Սա ՀԵՂԻՆԱԿԱՅԻՆ (գիտուն) ԳՐԱԿԱՆՈՒԹՅՈՒՆ է. գրվել է հայտնի հեղինակի (Միգել դե Սերվանտես) կողմից, տարածվել տպագիր ձևով և ունի հաստատուն տեքստ։',
      },
      {
        es: 'Es un romance anónimo transmitido oralmente por los juglares medievales en plazas.',
        hy: 'Անանուն ռոմանս է, որը միջնադարյան աշուղները բանավոր երգել են հրապարակներում։',
      },
      {
        es: 'Es un mito griego sobre los doce trabajos de Hércules en La Mancha.',
        hy: 'Հունական առասպել է Հերկուլեսի 12 սխրանքների մասին։',
      },
    ],
    correctIndex: 0,
    explanation: {
      es: 'Que una obra sea "famosa entre el pueblo" no la convierte en literatura popular; la literatura culta la crea un autor individual con nombre propio para el libro impreso.',
      hy: 'Այն փաստը, որ գործը հայտնի է ժողովրդի մեջ, չի նշանակում, թե ժողովրդական է. հեղինակային գրականությունը ստեղծում է կոնկրետ հեղինակը տպագիր գրքի համար։',
    },
  },

  // ==========================================
  // MODALIDAD F: IDENTIFICA LA FIGURA
  // ==========================================
  {
    id: 'iden-1',
    topicId: 'figuras',
    topicTitle: { es: 'Identificación de figuras', hy: 'Գեղարվեստական միջոցի ճանաչում' },
    type: 'identifica_figura',
    difficulty: 'intermedio',
    instruction: {
      es: 'Lee atentamente el siguiente verso y selecciona la figura retórica predominante.',
      hy: 'Ուշադիր կարդա հետևյալ տողը և ընտրիր գերակշռող գեղարվեստական միջոցը։',
    },
    textSnippet: {
      es: '«El trueno rueda raudo por la roca rocosa.»',
      hy: '«Որոտը սրընթաց գլորվում է ժայռոտ քարափով։»',
    },
    options: [
      { es: 'Aliteración (del fonema vibrante /r/)', hy: 'Ալիտերացիա (/r/ թրթռուն հնչյունի կրկնությամբ)' },
      { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն' },
      { es: 'Epanadiplosis', hy: 'Էպանադիպլոզիս' },
      { es: 'Metáfora pura B', hy: 'Մաքուր փոխաբերություն B' },
    ],
    correctFigure: 'Aliteración (del fonema vibrante /r/)',
    explanation: {
      es: 'La repetición constante del sonido /r/ busca recrear acústicamente el retumbar del trueno.',
      hy: '/r/ հնչյունի անդադար կրկնությունը նպատակ ունի ձայնային առումով վերարտադրել որոտի դղրդյունը։',
    },
  },
  {
    id: 'iden-2',
    topicId: 'figuras',
    topicTitle: { es: 'Identificación de figuras', hy: 'Գեղարվեստական միջոցի ճանաչում' },
    type: 'identifica_figura',
    difficulty: 'examen',
    instruction: {
      es: 'Analiza los dos versos de Bécquer y descubre qué alteración sintáctica se produce.',
      hy: 'Վերլուծիր Բեկերի երկու տողերը և պարզիր, թե շարահյուսական ինչ խախտում է տեղի ունենում։',
    },
    textSnippet: {
      es: '«Del salón en el ángulo oscuro, / de su dueña tal vez olvidada, / silenciosa y cubierta de polvo / veíase el arpa.»',
      hy: '«Սրահի մութ անկյունում, / իր տիրուհուց թերևս մոռացված, / լուռ ու փոշով պատված / երևում էր տավիղը։»',
    },
    authorOrSource: 'Gustavo Adolfo Bécquer',
    options: [
      { es: 'Hipérbaton (desorden del orden habitual: El arpa veíase silenciosa en el ángulo oscuro del salón...)', hy: 'Շրջադասություն (Hipérbaton՝ սովորական կարգի խախտմամբ)' },
      { es: 'Onomatopeya de cuerdas musicales', hy: 'Երաժշտական լարերի ձայնանմանություն' },
      { es: 'Asíndeton sin puntos', hy: 'Անշաղկապություն' },
      { es: 'Paronomasia entre salón y arpa', hy: 'Հարանունություն' },
    ],
    correctFigure: 'Hipérbaton (desorden del orden habitual: El arpa veíase silenciosa en el ángulo oscuro del salón...)',
    explanation: {
      es: 'El sujeto («el arpa») se desplaza hasta el final de la estrofa, mientras que los complementos circunstanciales van primero.',
      hy: 'Ենթական («el arpa»՝ տավիղը) տեղափոխվել է տան ամենավերջը, իսկ տեղի և ձևի պարագաները դրվել են սկզբում։',
    },
  },
  {
    id: 'iden-3',
    topicId: 'figuras',
    topicTitle: { es: 'Identificación de figuras', hy: 'Գեղարվեստական միջոցի ճանաչում' },
    type: 'identifica_figura',
    difficulty: 'básico',
    instruction: {
      es: 'Identifica la figura que imita un sonido directo de la realidad.',
      hy: 'Ճանաչիր այն միջոցը, որն ուղղակիորեն նմանակում է իրականության ձայնը։',
    },
    textSnippet: {
      es: '«En mitad de la noche se escuchó un fuerte ¡clic! seguido de un ¡pum! ensordecedor.»',
      hy: '«Կեսգիշերին լսվեց ուժգին մի չը՛խկ, որին հաջորդեց խլացնող դը՛մփը։»',
    },
    options: [
      { es: 'Onomatopeya', hy: 'Ձայնանմանություն (Onomatopeya)' },
      { es: 'Hipérbaton', hy: 'Շրջադասություն' },
      { es: 'Pleonasmo', hy: 'Ավելորդաբանություն' },
      { es: 'Metáfora', hy: 'Փոխաբերություն' },
    ],
    correctFigure: 'Onomatopeya',
    explanation: {
      es: '«¡Clic!» y «¡pum!» son onomatopeyas directas que imitan ruidos mecánicos y de impacto.',
      hy: '«¡Clic!»-ը և «¡pum!»-ը ձայնանմանություններ են, որոնք նմանակում են մեխանիկական և հարվածային ձայներ։',
    },
  },

  // ==========================================
  // MODALIDAD G: NO CONFUNDAS (COMPARATIVOS)
  // ==========================================
  {
    id: 'conf-1',
    topicId: 'figuras',
    topicTitle: { es: 'No confundas: Aliteración vs Onomatopeya', hy: 'Մի՛ շփոթիր. Ալիտերացիա թե՞ Ձայնանմանություն' },
    type: 'no_confundas',
    difficulty: 'intermedio',
    instruction: {
      es: 'Compara ambos conceptos acústicos y resuelve la pregunta.',
      hy: 'Համեմատիր այս երկու հնչյունային հասկացությունները և լուծիր առաջադրանքը։',
    },
    concept1: 'Aliteración (Ալիտերացիա)',
    concept2: 'Onomatopeya (Ձայնանմանություն)',
    scenario: {
      es: 'Un estudiante lee: «El zumbido de las moscas llenaba el establo». Su compañero afirma que es aliteración porque se repite la letra «s».',
      hy: 'Աշակերտը կարդում է. «El zumbido de las moscas llenaba el establo»: Նրա ընկերը պնդում է, թե դա ալիտերացիա է, քանի որ «s» տառն է կրկնվում։',
    },
    question: {
      es: '¿Es correcta la afirmación del compañero o qué recurso destaca principalmente en «zumbido»?',
      hy: 'Արդյո՞ք ընկերոջ պնդումը ճիշտ է, թե՞ «zumbido» բառի մեջ գերակշռում է այլ միջոց։',
    },
    options: [
      {
        es: 'Es incorrecto: «zumbido» es una ONOMATOPEYA porque la palabra en sí imita el sonido del vuelo del insecto.',
        hy: 'Սխալ է. «zumbido»-ն (բզզոցը) ՁԱՅՆԱՆՄԱՆՈՒԹՅՈՒՆ է, քանի որ բուն բառն է նմանակում միջատի թռիչքի ձայնը։',
      },
      {
        es: 'Es correcto, cualquier palabra que tenga la letra «s» es automáticamente una aliteración poética.',
        hy: 'Ճիշտ է, ցանկացած բառ, որն ունի «s» տառ, ինքնաբերաբար բանաստեղծական ալիտերացիա է։',
      },
      {
        es: 'Ninguna de las dos, es un hipérbaton medieval.',
        hy: 'Ոչ մեկը. դա միջնադարյան շրջադասություն է։',
      },
    ],
    correctIndex: 0,
    explanation: {
      es: '«Zumbido» es un sustantivo onomatopéyico creado para recrear el sonido real del insecto.',
      hy: '«Zumbido»-ն ձայնանմանական գոյական է՝ ստեղծված միջատի բնական ձայնը վերարտադրելու համար։',
    },
  },
  {
    id: 'conf-2',
    topicId: 'figuras',
    topicTitle: { es: 'No confundas: Anáfora vs Epanadiplosis', hy: 'Մի՛ շփոթիր. Անաֆորա թե՞ Էպանադիպլոզիս' },
    type: 'no_confundas',
    difficulty: 'examen',
    instruction: {
      es: 'Aprende a diferenciar la posición de las palabras repetidas.',
      hy: 'Սովորիր տարբերակել կրկնվող բառերի դիրքը։',
    },
    concept1: 'Anáfora (Անաֆորա)',
    concept2: 'Epanadiplosis (Էպանադիպլոզիս)',
    scenario: {
      es: 'En el examen aparecen dos ejemplos: 1) «Por ti madrugo, / por ti trabajo, / por ti vivo». 2) «Silencio de la noche, profundo silencio».',
      hy: 'Քննությանը տրված են երկու օրինակներ. 1) «Por ti madrugo, / por ti trabajo, / por ti vivo»։ 2) «Silencio de la noche, profundo silencio»։',
    },
    question: {
      es: '¿Cuál es la clasificación rigurosa de ambos ejemplos?',
      hy: 'Ո՞րն է երկու օրինակների ճշգրիտ դասակարգումը։',
    },
    options: [
      {
        es: 'El 1 es ANÁFORA (repite al inicio de varios versos) y el 2 es EPANADIPLOSIS (repite al inicio y final del mismo verso).',
        hy: '1-ը ԱՆԱՖՈՐԱ է (կրկնվում է մի քանի տողերի սկզբում), իսկ 2-ը՝ ԷՊԱՆԱԴԻՊԼՈԶԻՍ (կրկնվում է նույն տողի սկզբում և վերջում)։',
      },
      {
        es: 'Ambos son anáforas idénticas sin diferencia alguna.',
        hy: 'Երկուսն էլ նույնական անաֆորաներ են՝ առանց որևէ տարբերության։',
      },
      {
        es: 'El 1 es epanadiplosis y el 2 es polisíndeton con nexos.',
        hy: '1-ը էպանադիպլոզիս է, իսկ 2-ը՝ պոլիսինդետոն։',
      },
    ],
    correctIndex: 0,
    explanation: {
      es: 'La anáfora actúa verticalmente al inicio de versos contiguos; la epanadiplosis actúa horizontalmente enmarcando un único verso.',
      hy: 'Անաֆորան գործում է ուղղահայաց՝ հաջորդական տողերի սկզբում, իսկ էպանադիպլոզիսը՝ հորիզոնական՝ շրջանակելով մեկ տողը։',
    },
  },
  {
    id: 'conf-3',
    topicId: 'tema-4',
    topicTitle: { es: 'No confundas: Leyenda vs Mito', hy: 'Մի՛ շփոթիր. Ավանդազրույց թե՞ Առասպել' },
    type: 'no_confundas',
    difficulty: 'intermedio',
    instruction: {
      es: 'Distingue entre la mitología y las leyendas populares locales.',
      hy: 'Տարբերակիր դիցաբանությունը և տեղական ժողովրդական ավանդազրույցները։',
    },
    concept1: 'Leyenda (Ավանդազրույց)',
    concept2: 'Mito (Առասպել)',
    scenario: {
      es: 'Se narra la historia de cómo Apolo persiguió a la ninfa Dafne y los dioses la convirtieron en laurel para salvarla.',
      hy: 'Պատմվում է այն մասին, թե ինչպես Ապոլոնը հետապնդեց Դափնե հավերժահարսին, և աստվածները նրան դափնու ծառ դարձրին՝ փրկելու համար։',
    },
    question: {
      es: '¿Por qué este relato clásico se clasifica como MITO y no como leyenda?',
      hy: 'Ինչո՞ւ է այս դասական պատմությունը դասակարգվում որպես ԱՌԱՍՊԵԼ, ոչ թե ավանդազրույց։',
    },
    options: [
      {
        es: 'Porque sus personajes son dioses de la Antigüedad y explica el origen de una especie botánica en un tiempo primordial sagrado.',
        hy: 'Քանի որ կերպարները հին աստվածներ են և բացատրում է բույսի ծագումը նախնադարյան սրբազան ժամանակներում։',
      },
      {
        es: 'Porque ocurrió en un castillo medieval de Toledo en el siglo XIV.',
        hy: 'Որովհետև տեղի է ունեցել Տոլեդոյի միջնադարյան ամրոցում 14-րդ դարում։',
      },
      {
        es: 'Porque está escrito en prosa periodística contemporánea.',
        hy: 'Որովհետև գրված է ժամանակակից լրագրողական արձակով։',
      },
    ],
    correctIndex: 0,
    explanation: {
      es: 'Los mitos implican dioses inmortales y orígenes cósmicos; las leyendas se anclan en personajes humanos y lugares geográficos concretos.',
      hy: 'Առասպելները ներառում են անմահ աստվածներ և տիեզերական ծագում, իսկ ավանդազրույցները հիմնված են մարդկային կերպարների և կոնկրետ վայրերի վրա։',
    },
  },

  // ==========================================
  // MODALIDAD I: ANALIZA LA METÁFORA
  // ==========================================
  {
    id: 'meta-1',
    topicId: 'figuras',
    topicTitle: { es: 'Análisis de la metáfora', hy: 'Փոխաբերության վերլուծություն' },
    type: 'analiza_metafora',
    difficulty: 'intermedio',
    instruction: {
      es: 'Identifica el término real A, el término figurado B y el tipo de estructura metafórica.',
      hy: 'Որոշիր իրական տարրը (A), պատկերավոր տարրը (B) և փոխաբերության կառուցվածքային տեսակը։',
    },
    expression: {
      es: '«El manto blanco del invierno cubrió toda la campiña.»',
      hy: '«Ձմռան սպիտակ թիկնոցը ծածկեց ողջ դաշտավայրը։»',
    },
    realElementA: {
      es: 'La nieve caída en invierno',
      hy: 'Ձմռանը տեղացած ձյունը',
    },
    figurativeElementB: {
      es: 'El manto blanco (vestidura)',
      hy: 'Սպիտակ թիկնոցը (հագուստը)',
    },
    structureType: 'B de A',
    whyItIsMetaphor: {
      es: 'Se identifica la capa de nieve con un manto por su color blanco puro, su espesor y la forma en que cubre uniformemente la tierra como una vestidura protectora.',
      hy: 'Ձյան շերտը նույնացվում է թիկնոցի հետ իր մաքուր սպիտակ գույնի, հաստության և այն ձևի պատճառով, որով այն հագուստի պես միատարր ծածկում է երկիրը։',
    },
    explanation: {
      es: 'Estructura «B de A» o metáfora aposicional donde el término figurado B («manto blanco») califica metafóricamente la estación.',
      hy: '«B de A» կառուցվածք, որտեղ B պատկերավոր տարրը («սպիտակ թիկնոց») փոխաբերորեն բնորոշում է տարվա եղանակը։',
    },
  },
  {
    id: 'meta-2',
    topicId: 'figuras',
    topicTitle: { es: 'Análisis de la metáfora', hy: 'Փոխաբերության վերլուծություն' },
    type: 'analiza_metafora',
    difficulty: 'examen',
    instruction: {
      es: 'Descompón la famosa metáfora de los luceros.',
      hy: 'Վերլուծիր լուսատուների հայտնի փոխաբերությունը։',
    },
    expression: {
      es: '«Dos luceros me miraban con infinita ternura desde el balcón.»',
      hy: '«Երկու լուսատուներ ինձ նայում էին անհուն քնքշությամբ պատշգամբից։»',
    },
    realElementA: {
      es: 'Los ojos (está implícito en el verbo «miraban»)',
      hy: 'Աչքերը (ենթադրվում է «նայում էին» բայից)',
    },
    figurativeElementB: {
      es: 'Dos luceros (estrellas brillantes)',
      hy: 'Երկու լուսատուներ (փայլուն աստղեր)',
    },
    structureType: 'B',
    whyItIsMetaphor: {
      es: 'Es una metáfora pura (solo aparece B). La semejanza se basa en el brillo luminoso y la capacidad de orientar.',
      hy: 'Մաքուր փոխաբերություն է (հայտնվում է միայն B-ն)։ Նմանությունը հիմնված է լուսավոր փայլի և առաջնորդելու հատկության վրա։',
    },
    explanation: {
      es: 'En la metáfora pura B, el término real A no se menciona expresamente, sino que el lector lo deduce del contexto de la oración.',
      hy: 'Մաքուր B փոխաբերության մեջ իրական A տարրը ուղղակիորեն չի նշվում, այլ ընթերցողն այն կռահում է համատեքստից։',
    },
  },

  // ==========================================
  // MODALIDAD J: JUSTIFICA TU RESPUESTA
  // ==========================================
  {
    id: 'just-1',
    topicId: 'figuras',
    topicTitle: { es: 'Justificación argumentada', hy: 'Հիմնավորված բացատրություն' },
    type: 'justifica',
    difficulty: 'intermedio',
    instruction: {
      es: 'Completa la justificación teórica correcta para fundamentar tu respuesta de examen.',
      hy: 'Լրացրու ճիշտ տեսական հիմնավորումը՝ քննության պատասխանը փաստարկելու համար։',
    },
    statement: {
      es: '«Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada...»',
      hy: '«Temprano levantó la muerte el vuelo, / temprano madrugó la madrugada...»',
    },
    leadIn: {
      es: 'Se trata de una ANÁFORA porque...',
      hy: 'Սա ԱՆԱՖՈՐԱ է, քանի որ...',
    },
    options: [
      {
        es: 'repite la misma palabra «Temprano» al principio de dos versos consecutivos para dar insistencia y ritmo.',
        hy: 'կրկնում է նույն «Temprano» բառը երկու հաջորդական տողերի սկզբում՝ ռիթմ և շեշտադրում հաղորդելու համար։',
      },
      {
        es: 'elimina todas las comas y puntos ortográficos del poema.',
        hy: 'հեռացնում է բանաստեղծության բոլոր ստորակետներն ու կետերը։',
      },
      {
        es: 'compara a la muerte con un pájaro mediante la conjunción «como».',
        hy: 'մահը «como» շաղկապով համեմատում է թռչունի հետ։',
      },
    ],
    correctIndex: 0,
    explanation: {
      es: 'La justificación rigurosa en el examen de Lengua exige señalar qué palabra se repite y en qué posición exacta del verso aparece.',
      hy: 'Լեզվի քննության ժամանակ խիստ հիմնավորումը պահանջում է նշել, թե որ բառն է կրկնվում և տողի որ դիրքում։',
    },
  },
  {
    id: 'just-2',
    topicId: 'tema-4',
    topicTitle: { es: 'Justificación de géneros', hy: 'Ժանրերի հիմնավորում' },
    type: 'justifica',
    difficulty: 'examen',
    instruction: {
      es: 'Fundamenta por qué el relato del Monte de las Ánimas de Bécquer es una leyenda.',
      hy: 'Հիմնավորիր, թե ինչու է Բեկերի «Ոգիների բլուրը» պատմվածքը ավանդազրույց։',
    },
    statement: {
      es: 'Un relato ambientado en la ciudad de Soria que cuenta cómo los esqueletos de los templarios cabalgan en la Noche de Difuntos.',
      hy: 'Սորիա քաղաքում ծավալվող պատմություն այն մասին, թե ինչպես են տաճարականների կմախքները ձիավարում Ննջեցյալների գիշերը։',
    },
    leadIn: {
      es: 'Es una LEYENDA porque...',
      hy: 'Սա ԱՎԱՆԴԱԶՐՈՒՅՑ է, քանի որ...',
    },
    options: [
      {
        es: 'se ambienta en una localización geográfica real (Soria, monte de las Ánimas) y combina una base histórica con elementos fantásticos y sobrenaturales de tradición popular.',
        hy: 'տեղի է ունենում իրական աշխարհագրական վայրում (Սորիա) և միավորում է պատմական հիմքը ժողովրդական գերբնական ու ֆանտաստիկ տարրերի հետ։',
      },
      {
        es: 'la protagoniza el dios Zeus en el Monte Olimpo griego antes de la creación humana.',
        hy: 'գլխավոր հերոսը Զևս աստվածն է Օլիմպոս լեռան վրա՝ մինչև մարդու ստեղծումը։',
      },
      {
        es: 'es un artículo de divulgación médica sobre los huesos humanos.',
        hy: 'գիտահանրամատչելի բժշկական հոդված է մարդու ոսկորների մասին։',
      },
    ],
    correctIndex: 0,
    explanation: {
      es: 'La presencia de un lugar geográfico verificable y de una fecha del calendario popular unida al misterio define la leyenda romántica.',
      hy: 'Ստուգելի աշխարհագրական վայրի և տոնացուցային օրվա առկայությունը առեղծվածի հետ միասին բնորոշում է ռոմանտիկ ավանդազրույցը։',
    },
  },

  // ==========================================
  // MODALIDAD H: TRANSFORMA LAS FRASES
  // ==========================================
  {
    id: 'trans-1',
    topicId: 'figuras',
    topicTitle: { es: 'Transformación estilística', hy: 'Ոճական վերակերպում' },
    type: 'transforma',
    difficulty: 'intermedio',
    instruction: {
      es: 'Transforma la siguiente frase cotidiana en una ALITERACIÓN que evoque el silencio o el viento usando el sonido suave /s/.',
      hy: 'Վերածիր հետևյալ առօրյա նախադասությունը ԱԼԻՏԵՐԱՑԻԱՅԻ՝ կիրառելով /s/ մեղմ հնչյունը։',
    },
    originalSentence: {
      es: 'Frase normal: «La chica hablaba muy bajito por la noche en su habitación».',
      hy: 'Սովորական նախադասություն. «Աղջիկը գիշերը շատ ցածր էր խոսում իր սենյակում»։',
    },
    targetFigure: {
      es: 'Aliteración en /s/',
      hy: 'Ալիտերացիա /s/ հնչյունով',
    },
    modelAnswer: {
      es: '«Sara susurraba suaves secretos silenciosos en la sombra.»',
      hy: '«Սառան շշնջում էր ստվերում սիրալիր, սքանչելի, սրտակից գաղտնիքներ։»',
    },
    keyElementsRequired: [
      { es: 'Repetir la consonante «s» en al menos 3 o 4 palabras', hy: 'Կրկնել «s» բաղաձայնը առնվազն 3-4 բառում' },
      { es: 'Mantener un sentido poético relacionado con el susurro o el silencio', hy: 'Պահպանել շշուկի կամ լռության հետ կապված բանաստեղծական իմաստ' },
    ],
    explanation: {
      es: 'La acumulación del sonido sibilante reproduce físicamente la atmósfera de discreción y susurro.',
      hy: 'Շչական հնչյունի կուտակումը ֆիզիկապես վերարտադրում է շշուկի և լռության մթնոլորտը։',
    },
  },
  {
    id: 'trans-2',
    topicId: 'figuras',
    topicTitle: { es: 'Transformación estilística: Metáfora', hy: 'Ոճական վերակերպում. Փոխաբերություն' },
    type: 'transforma',
    difficulty: 'examen',
    instruction: {
      es: 'Transforma la siguiente comparación con «como» en una METÁFORA directa sin nexos comparativos.',
      hy: 'Վերածիր հետևյալ «como» (ինչպես) կապով համեմատությունը ուղիղ ՓՈԽԱԲԵՐՈՒԹՅԱՆ՝ առանց համեմատական կապերի։',
    },
    originalSentence: {
      es: 'Símil: «Las gotas de lluvia son transparentes como lágrimas del cielo».',
      hy: 'Համեմատություն. «Անձրևի կաթիլները թափանցիկ են, ինչպես երկնքի արցունքները»։',
    },
    targetFigure: {
      es: 'Metáfora (A es B, o B de A)',
      hy: 'Փոխաբերություն (A es B, կամ B de A)',
    },
    modelAnswer: {
      es: '«La lluvia es el llanto del cielo» o «Lágrimas de cristal caen de las nubes».',
      hy: '«Անձրևը երկնքի լացն է» կամ «Բյուրեղյա արցունքներ են թափվում ամպերից»։',
    },
    keyElementsRequired: [
      { es: 'Eliminar completamente el nexo «como» o «parece»', hy: 'Լիովին հեռացնել «como» կամ «parece» կապը' },
      { es: 'Identificar directamente la lluvia con lágrimas o llanto', hy: 'Ուղղակիորեն նույնացնել անձրևը արցունքների կամ լացի հետ' },
    ],
    explanation: {
      es: 'Al suprimir el «como», la comparación se convierte en identificación metafórica pura.',
      hy: 'Հեռացնելով «ինչպես» (como) կապը՝ համեմատությունը վերածվում է բուն փոխաբերության։',
    },
  },

  // ==========================================
  // MODALIDAD K: CLASIFICACIÓN
  // ==========================================
  {
    id: 'clas-1',
    topicId: 'figuras',
    topicTitle: { es: 'Clasificación por niveles', hy: 'Դասակարգում ըստ մակարդակների' },
    type: 'clasificacion',
    difficulty: 'intermedio',
    instruction: {
      es: 'Clasifica las siguientes figuras retóricas en su nivel lingüístico correspondiente.',
      hy: 'Դասակարգիր հետևյալ գեղարվեստական միջոցները իրենց համապատասխան լեզվական մակարդակներում։',
    },
    categories: [
      { id: 'cat-fon', name: { es: 'Nivel Fónico (sonidos)', hy: 'Հնչյունային մակարդակ (հնչյուններ)' } },
      { id: 'cat-sin', name: { es: 'Nivel Morfosintáctico (gramática y orden)', hy: 'Ձևաբանական-շարահյուսական մակարդակ (կարգ և քերականություն)' } },
      { id: 'cat-sem', name: { es: 'Nivel Semántico (significado e imágenes)', hy: 'Իմաստային մակարդակ (իմաստներ և պատկերներ)' } },
    ],
    items: [
      { id: 'it-1', text: { es: 'Aliteración', hy: 'Ալիտերացիա' }, correctCategoryId: 'cat-fon' },
      { id: 'it-2', text: { es: 'Onomatopeya', hy: 'Ձայնանմանություն' }, correctCategoryId: 'cat-fon' },
      { id: 'it-3', text: { es: 'Paronomasia', hy: 'Հարանունություն' }, correctCategoryId: 'cat-fon' },
      { id: 'it-4', text: { es: 'Epanadiplosis', hy: 'Էպանադիպլոզիս' }, correctCategoryId: 'cat-fon' },
      { id: 'it-5', text: { es: 'Hipérbaton', hy: 'Շրջադասություն' }, correctCategoryId: 'cat-sin' },
      { id: 'it-6', text: { es: 'Anáfora', hy: 'Անաֆորա' }, correctCategoryId: 'cat-sin' },
      { id: 'it-7', text: { es: 'Asíndeton', hy: 'Անշաղկապություն' }, correctCategoryId: 'cat-sin' },
      { id: 'it-8', text: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն' }, correctCategoryId: 'cat-sin' },
      { id: 'it-9', text: { es: 'Enumeración', hy: 'Թվարկում' }, correctCategoryId: 'cat-sin' },
      { id: 'it-10', text: { es: 'Pleonasmo', hy: 'Ավելորդաբանություն' }, correctCategoryId: 'cat-sin' },
      { id: 'it-11', text: { es: 'Metáfora', hy: 'Փոխաբերություն' }, correctCategoryId: 'cat-sem' },
    ],
    explanation: {
      es: 'Las figuras se dividen según afecten al plano del sonido (fónico), a la estructura de la oración (morfosintáctico) o al sentido de las palabras (semántico).',
      hy: 'Գեղարվեստական միջոցները դասակարգվում են ըստ այն բանի, թե արդյոք ազդում են հնչյունների (հնչյունային), նախադասության կարգի (ձևաբանական-շարահյուսական), թե՞ բառերի իմաստի վրա (իմաստային)։',
    },
  },

  // ==========================================
  // MODALIDAD L: PREGUNTAS ABIERTAS
  // ==========================================
  {
    id: 'open-1',
    topicId: 'tema-1',
    topicTitle: { es: 'Pregunta abierta de desarrollo', hy: 'Բաց զարգացման հարց' },
    type: 'pregunta_abierta',
    difficulty: 'examen',
    instruction: {
      es: 'Escribe una respuesta argumentada en español sobre la transmisión literaria.',
      hy: 'Գրիր հիմնավորված պատասխան իսպաներենով գրականության փոխանցման ուղիների վերաբերյալ։',
    },
    question: {
      es: '¿Por qué se conservaban por escrito algunas obras de literatura popular si su naturaleza original era oral?',
      hy: 'Ինչո՞ւ էին որոշ ժողովրդական գործեր գրի առնվում և պահպանվում, եթե նրանց բուն բնույթը բանավոր էր։',
    },
    modelAnswer: {
      es: 'Aunque nacieron para ser cantadas y recordadas de viva voz, a finales de la Edad Media y durante el Renacimiento varios músicos, nobles y eruditos quedaron maravillados por la belleza, frescura y emoción de estas canciones populares. Por ello, decidieron recopilarlas por escrito en colecciones llamadas Cancioneros y Romanceros, evitando así que desaparecieran en el olvido con el paso del tiempo.',
      hy: 'Թեև դրանք ստեղծվել էին բանավոր երգվելու և հիշվելու համար, Միջնադարի վերջում և Վերածննդի շրջանում երաժիշտներ, ազնվականներ և գիտնականներ հիացան այս ժողովրդական երգերի գեղեցկությամբ ու թարմությամբ։ Այդ իսկ պատճառով նրանք որոշեցին գրի առնել դրանք Cancioneros և Romanceros կոչվող ժողովածուներում՝ փրկելով դրանք ժամանակի ընթացքում մոռացության մատնվելուց։',
    },
    rubricCriteria: [
      { es: 'Mencionar que su origen era oral en fiestas y plazas populares', hy: 'Նշել, որ դրանց ծագումը բանավոր էր տոներում և հրապարակներում' },
      { es: 'Explicar el papel de los eruditos y músicos que las valoraron artísticamente', hy: 'Բացատրել գիտնականների և երաժիշտների դերը, ովքեր գնահատեցին դրանց գեղարվեստական արժեքը' },
      { es: 'Citar los Cancioneros o Romanceros como recopilaciones escritas', hy: 'Հիշատակել Cancioneros կամ Romanceros ժողովածուները որպես գրավոր գանձարաններ' },
    ],
    explanation: {
      es: 'Esta pregunta evalúa la comprensión histórica de la transición entre la oralidad y la fijación manuscrita o impresa.',
      hy: 'Այս հարցը գնահատում է բանավորությունից դեպի գրավոր կամ տպագիր ամրագրման անցման պատմական ըմբռնումը։',
    },
  },
  {
    id: 'open-2',
    topicId: 'tema-3',
    topicTitle: { es: 'Diferencia entre verso y prosa', hy: 'Տարբերությունը չափածոյի և արձակի միջև' },
    type: 'pregunta_abierta',
    difficulty: 'examen',
    instruction: {
      es: 'Explica cómo reconocer en un examen si un texto está en prosa o en verso.',
      hy: 'Բացատրիր, թե ինչպես քննության ժամանակ ճանաչել՝ տեքստը արձա՞կ է, թե՞ չափածո։',
    },
    question: {
      es: 'Si te ponen dos textos sin título en el examen, ¿qué tres rasgos visuales y sonoros te permiten asegurar que uno es verso y el otro prosa?',
      hy: 'Եթե քննությանը քեզ տան երկու անվերնագիր տեքստ, տեսողական և ձայնային ո՞ր երեք հատկանիշներով կհամոզվես, որ մեկը չափածո է, իսկ մյուսը՝ արձակ։',
    },
    modelAnswer: {
      es: '1) La disposición visual: la prosa ocupa todo el renglón de margen a margen y se agrupa en párrafos, mientras que el verso se escribe en líneas cortas centradas agrupadas en estrofas. 2) La métrica: los versos tienen un número medido de sílabas (como 8 o 11 sílabas), mientras que la prosa no tiene medida fija. 3) El ritmo y la rima: el verso suele presentar rima consonante o asonante y pausas rítmicas regulares.',
      hy: '1) Տեսողական տեսքը. արձակը զբաղեցնում է ամբողջ տողը լուսանցքից լուսանցք և խմբավորված է պարբերություններով, իսկ չափածոն գրված է կարճ տողերով՝ տներով։ 2) Չափը. չափածոյի տողերն ունեն վանկերի հստակ հաշվարկ (օր.՝ 8 կամ 11 վանկ), իսկ արձակը չունի հաստատուն չափ։ 3) Ռիթմը և հանգը. չափածոյին բնորոշ է համակազմ կամ ձայնավորական հանգը և կանոնավոր դադարները։',
    },
    rubricCriteria: [
      { es: 'Disposición gráfica (renglón completo vs líneas cortas centradas)', hy: 'Գրաֆիկական դասավորություն (ամբողջական տող ընդդեմ կարճ տողերի)' },
      { es: 'Párrafos frente a estrofas', hy: 'Պարբերություններ ընդդեմ տների' },
      { es: 'Cómputo silábico y presencia de ritmo / rima', hy: 'Վանկերի հաշվարկ և ռիթմի/հանգի առկայություն' },
    ],
    explanation: {
      es: 'Es la pregunta clásica de prueba inicial y final en el primer curso de la Educación Secundaria Obligatoria.',
      hy: 'Սա Պարտադիր միջնակարգ կրթության (ESO) 1-ին դասարանի դասական քննական հարցն է։',
    },
  },
];
