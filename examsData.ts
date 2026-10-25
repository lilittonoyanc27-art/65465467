import { ExamBlueprint } from './types.ts';

export const examBlueprints: ExamBlueprint[] = [
  {
    id: 'exam-tema-1',
    title: {
      es: 'Examen de Unidad: Literatura Popular y Literatura Culta',
      hy: 'Թեմատիկ քննություն. Ժողովրդական և հեղինակային գրականություն',
    },
    description: {
      es: 'Evaluación oficial sobre oralidad, cancioneros, anonimia y características de las obras cultas.',
      hy: 'Պաշտոնական ստուգարք բանավորության, երգարանների, անանունության և հեղինակային գործերի հատկանիշների վերաբերյալ։',
    },
    questionCount: 6,
    timeLimitMinutes: 15,
    topicFilter: 'tema-1',
    questions: [
      {
        id: 'eq1-1',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Cuál es el rasgo definitorio principal de la literatura popular tradicional?',
          hy: 'Ո՞րն է ավանդական ժողովրդական գրականության գլխավոր բնորոշ հատկանիշը։',
        },
        options: [
          { id: 'A', text: { es: 'La publicación obligatoria en diarios digitales de tirada nacional.', hy: 'Համազգային թվային թերթերում պարտադիր հրապարակումը։' } },
          { id: 'B', text: { es: 'Estar firmada siempre por un caballero templario medieval.', hy: 'Միշտ միջնադարյան տաճարական ասպետի կողմից ստորագրված լինելը։' } },
          { id: 'C', text: { es: 'La autoría anónima y su transmisión oral de generación en generación.', hy: 'Անանուն հեղինակությունը և սերնդեսերունդ բանավոր փոխանցումը։' } },
          { id: 'D', text: { es: 'Tener una única versión inmutable que nadie puede alterar jamás.', hy: 'Միակ անփոփոխ տարբերակ ունենալը, որը ոչ ոք չի կարող փոխել։' } },
        ],
        correctOption: 'C',
        explanation: {
          es: 'La literatura popular nace del pueblo, no tiene un autor individualizado y vive en la memoria viva oral colectiva.',
          hy: 'Ժողովրդական գրականությունը ծնվում է ժողովրդի մեջ, չունի անհատականացված հեղինակ և ապրում է կենդանի բանավոր հիշողության մեջ։',
        },
      },
      {
        id: 'eq1-2',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Cómo se denominan las colecciones de poemas y canciones populares que se pusieron por escrito en los siglos XV y XVI?',
          hy: 'Ինչպե՞ս են կոչվում 15-րդ և 16-րդ դարերում գրի առնված ժողովրդական երգերի և բանաստեղծությունների ժողովածուները։',
        },
        options: [
          { id: 'A', text: { es: 'Diccionarios enciclopédicos modernos.', hy: 'Ժամանակակից հանրագիտարանային բառարաններ։' } },
          { id: 'B', text: { es: 'Cancioneros y Romanceros.', hy: 'Երգարաններ (Cancioneros) և Ռոմանսերոներ (Romanceros)։' } },
          { id: 'C', text: { es: 'Periódicos y gacetas matinales de noticias.', hy: 'Առավոտյան թերթեր և տեղեկագրեր։' } },
          { id: 'D', text: { es: 'Códigos civiles de la corte de Castilla.', hy: 'Կաստիլիայի արքունիքի քաղաքացիական օրենսգրքեր։' } },
        ],
        correctOption: 'B',
        explanation: {
          es: 'Los cancioneros (canciones líricas) y romanceros (romances narrativos) salvaron del olvido la tradición oral.',
          hy: 'Cancioneros-ները (քնարական երգեր) և Romanceros-ները (պատմողական ռոմանսներ) մոռացությունից փրկեցին բանավոր ավանդույթը։',
        },
      },
      {
        id: 'eq1-3',
        originTopic: 'Literatura popular y culta',
        question: {
          es: 'En la literatura culta, ¿qué ocurre con el texto de la obra?',
          hy: 'Հեղինակային (գիտուն) գրականության մեջ ի՞նչ է տեղի ունենում ստեղծագործության տեքստի հետ։',
        },
        options: [
          { id: 'A', text: { es: 'Cualquier lector puede reescribir la mitad del libro y publicarlo con su propio nombre.', hy: 'Ցանկացած ընթերցող կարող է վերաշարադրել գրքի կեսը և հրատարակել իր անունով։' } },
          { id: 'B', text: { es: 'Se destruye tras la primera lectura para que no queden copias.', hy: 'Ոչնչացվում է առաջին ընթերցումից հետո, որպեսզի օրինակներ չմնան։' } },
          { id: 'C', text: { es: 'Solo se transmite mediante señales de humo entre castillos.', hy: 'Փոխանցվում է միայն ծխային ազդանշաններով ամրոցների միջև։' } },
          { id: 'D', text: { es: 'Permanece fijo, definitivo y firmado por su autor con intención artística personal.', hy: 'Մնում է հաստատուն, վերջնական և հեղինակի կողմից ստորագրված՝ անձնական գեղարվեստական մտահղացմամբ։' } },
        ],
        correctOption: 'D',
        explanation: {
          es: 'La literatura culta se plasma por escrito, protegiendo la autoría y la integridad inmutable del texto original.',
          hy: 'Հեղինակային գրականությունը ամրագրվում է գրավոր՝ պաշտպանելով հեղինակությունը և տեքստի անփոփոխությունը։',
        },
      },
      {
        id: 'eq1-4',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Por qué se utilizan estribillos y repeticiones frecuentes en las canciones populares tradicionales?',
          hy: 'Ինչո՞ւ են ավանդական ժողովրդական երգերում հաճախ օգտագործվում կրկներգեր և կրկնություններ։',
        },
        options: [
          { id: 'A', text: { es: 'Para facilitar la memorización auditiva y permitir al pueblo cantar a coro.', hy: 'Լսողական հիշողությունը հեշտացնելու և ժողովրդին միասին երգելու հնարավորություն տալու համար։' } },
          { id: 'B', text: { es: 'Porque a los poetas se les acababan las palabras del vocabulario.', hy: 'Քանի որ բանաստեղծների բառապաշարը սպառվում էր։' } },
          { id: 'C', text: { es: 'Para gastar más tinta en los monasterios medievales.', hy: 'Միջնադարյան վանքերում ավելի շատ թանաք ծախսելու համար։' } },
          { id: 'D', text: { es: 'Para que los versos parezcan más difíciles de comprender al oyente.', hy: 'Որպեսզի տողերը ավելի դժվար հասկանալի թվան ունկնդրին։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'Los estribillos son recursos mnemotécnicos fundamentales de la poesía oral colectiva.',
          hy: 'Կրկներգերը հավաքական բանավոր պոեզիայի հիմնարար հիշողական (մնեմոնիկ) միջոցներն են։',
        },
      },
      {
        id: 'eq1-5',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Quiénes eran los juglares en la Edad Media hispánica?',
          hy: 'Ովքե՞ր էին ժուգլարները (երգիչ-ասացողները) իսպանական միջնադարում։',
        },
        options: [
          { id: 'A', text: { es: 'Monjes que pasaban la vida copiando manuscritos en latín cerrado.', hy: 'Վանականներ, ովքեր կյանքն անցկացնում էին փակ լատիներեն ձեռագրեր արտագրելով։' } },
          { id: 'B', text: { es: 'Artistas ambulantes que cantaban y recitaban cantares de gesta y romances en plazas públicas y castillos.', hy: 'Թափառական արվեստագետներ, ովքեր հրապարակներում և ամրոցներում երգում ու ասմունքում էին հերոսավեպեր և ռոմանսներ։' } },
          { id: 'C', text: { es: 'Gobernadores nombrados por el rey para recaudar impuestos agrarios.', hy: 'Թագավորի կողմից նշանակված կառավարիչներ՝ հարկեր հավաքելու համար։' } },
          { id: 'D', text: { es: 'Médicos cortesanos encargados de las boticas reales.', hy: 'Արքունական բժիշկներ՝ արքայական դեղատների պատասխանատուներ։' } },
        ],
        correctOption: 'B',
        explanation: {
          es: 'El mester de juglaría era el oficio de los juglares, transmisores orales de noticias, poemas y epopeyas para el pueblo.',
          hy: 'Mester de juglaría-ն ժուգլարների արհեստն էր, ովքեր բանավոր տարածում էին լուրեր, բանաստեղծություններ և էպոսներ։',
        },
      },
      {
        id: 'eq1-6',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Por qué la literatura culta tiende a emplear un vocabulario más rico y figuras retóricas complejas?',
          hy: 'Ինչո՞ւ է հեղինակային գրականությունը հակված օգտագործելու ավելի հարուստ բառապաշար և բարդ գեղարվեստական միջոցներ։',
        },
        options: [
          { id: 'A', text: { es: 'Porque estaba prohibido por ley usar palabras sencillas.', hy: 'Քանի որ օրենքով արգելված էր պարզ բառեր օգտագործելը։' } },
          { id: 'B', text: { es: 'Para impedir que el rey pudiera leer y criticar el manuscrito.', hy: 'Որպեսզի թագավորը չկարողանա կարդալ և քննադատել ձեռագիրը։' } },
          { id: 'C', text: { es: 'Porque persigue una intencionalidad estética consciente y un estilo literario individual elaborado.', hy: 'Քանի որ հետապնդում է գիտակցված գեղագիտական նպատակ և մշակված անհատական գրական ոճ։' } },
          { id: 'D', text: { es: 'Porque solo existían cinco autores en toda Europa.', hy: 'Քանի որ ամբողջ Եվրոպայում ընդամենը հինգ հեղինակ կար։' } },
        ],
        correctOption: 'C',
        explanation: {
          es: 'El autor culto pule su estilo con detenimiento, seleccionando figuras literarias para conseguir belleza artística perdurable.',
          hy: 'Հեղինակային գրողը մանրակրկիտ մշակում է իր ոճը՝ ընտրելով գեղարվեստական միջոցներ՝ հարատև գեղարվեստական գեղեցկություն ստանալու համար։',
        },
      },
    ],
  },
  {
    id: 'exam-figuras',
    title: {
      es: 'Gran Examen Monográfico: Las 11 Figuras Literarias',
      hy: 'Մեծ թեմատիկ քննություն. 11 Գեղարվեստական արտահայտչամիջոցները',
    },
    description: {
      es: 'Evaluación exhaustiva de nivel fónico, morfosintáctico y semántico con análisis de metáforas A y B.',
      hy: 'Համապարփակ ստուգարք հնչյունային, ձևաբանական-շարահյուսական և իմաստային մակարդակների վերաբերյալ՝ A և B փոխաբերությունների վերլուծությամբ։',
    },
    questionCount: 8,
    timeLimitMinutes: 20,
    questions: [
      {
        id: 'ef-1',
        originTopic: 'Figuras literarias',
        question: {
          es: 'En el verso «Susana susurra suavemente», ¿qué figura literaria predomina?',
          hy: '«Susana susurra suavemente» տողում ո՞ր գեղարվեստական միջոցն է գերակշռում։',
        },
        options: [
          { id: 'A', text: { es: 'Metáfora pura con sustitución.', hy: 'Մաքուր փոխաբերություն փոխարինմամբ։' } },
          { id: 'B', text: { es: 'Aliteración (repetición del fonema /s/).', hy: 'Ալիտերացիա (/s/ հնչյունի կրկնությամբ)։' } },
          { id: 'C', text: { es: 'Hipérbaton con hipérbole.', hy: 'Շրջադասություն չափազանցությամբ։' } },
          { id: 'D', text: { es: 'Pleonasmo innecesario.', hy: 'Ավելորդաբանություն։' } },
        ],
        correctOption: 'B',
        explanation: {
          es: 'La reiteración del sonido suave /s/ es una aliteración que evoca acústicamente el murmullo.',
          hy: '/s/ մեղմ հնչյունի կրկնությունը ալիտերացիա է, որը ձայնային առումով վերարտադրում է շշուկը։',
        },
      },
      {
        id: 'ef-2',
        originTopic: 'Figuras literarias',
        question: {
          es: '¿Cuál es la diferencia fundamental entre METÁFORA y SÍMIL en los exámenes de Lengua?',
          hy: 'Ո՞րն է ՓՈԽԱԲԵՐՈՒԹՅԱՆ և ՀԱՄԵՄԱՏՈՒԹՅԱՆ հիմնարար տարբերությունը լեզվի քննություններում։',
        },
        options: [
          { id: 'A', text: { es: 'La metáfora solo existe en prosa y el símil solo en el verso de romance.', hy: 'Փոխաբերությունը գոյություն ունի միայն արձակում, իսկ համեմատությունը՝ միայն ռոմանսում։' } },
          { id: 'B', text: { es: 'Son exactamente idénticas y no existe ninguna diferencia técnica entre ambas.', hy: 'Դրանք բացարձակապես նույնական են և չկա ոչ մի տեխնիկական տարբերություն։' } },
          { id: 'C', text: { es: 'El símil usa nexos comparativos como «como» o «parece»; la metáfora identifica directamente sin nexo.', hy: 'Համեմատությունը (símil) օգտագործում է համեմատական կապեր («como», «parece»), իսկ փոխաբերությունը նույնացնում է ուղղակիորեն՝ առանց կապի։' } },
          { id: 'D', text: { es: 'El símil siempre rima en asonante y la metáfora en consonante.', hy: 'Համեմատությունը միշտ ասոնանս է հանգավորվում, իսկ փոխաբերությունը՝ կոնսոնանտ։' } },
        ],
        correctOption: 'C',
        explanation: {
          es: '«Tus ojos son como estrellas» = símil (con nexo «como»). «Tus ojos son estrellas» = metáfora (identificación directa).',
          hy: '«Աչքերդ աստղերի պես են» = համեմատություն («como» կապով)։ «Աչքերդ աստղեր են» = փոխաբերություն (ուղղակի նույնացում)։',
        },
      },
      {
        id: 'ef-3',
        originTopic: 'Figuras literarias',
        question: {
          es: 'En la metáfora «El oro de su cabello brillaba al viento», ¿qué elemento es el término figurado B?',
          hy: '«El oro de su cabello brillaba al viento» փոխաբերության մեջ ո՞ր տարրն է պատկերավոր B տարրը։',
        },
        options: [
          { id: 'A', text: { es: '«El viento» (el elemento ambiental externo).', hy: '«El viento» (արտաքին քամին)։' } },
          { id: 'B', text: { es: '«Su cabello» (el elemento real humano visible).', hy: '«Su cabello» (մազերը՝ մարդկային տեսանելի իրական տարրը)։' } },
          { id: 'C', text: { es: '«Brillaba» (el verbo que indica luminosidad).', hy: '«Brillaba» (լուսավորություն ցույց տվող բայը)։' } },
          { id: 'D', text: { es: '«El oro» (el elemento figurado e imaginario de color rubio).', hy: '«El oro» (ոսկին՝ շիկահեր գույնի պատկերավոր ու երևակայական տարրը)։' } },
        ],
        correctOption: 'D',
        explanation: {
          es: 'Estructura «B de A»: el término figurado B es «el oro» (evoca color rubio y brillo), mientras que A es el cabello real.',
          hy: '«B de A» կառուցվածք. պատկերավոր B տարրը «ոսկին» է, իսկ իրական A տարրը՝ մազերը։',
        },
      },
      {
        id: 'ef-4',
        originTopic: 'Figuras literarias',
        question: {
          es: '¿Qué figura retórica encontramos en el verso «Verde que te quiero verde»?',
          hy: 'Ի՞նչ գեղարվեստական միջոց է «Verde que te quiero verde» տողում։',
        },
        options: [
          { id: 'A', text: { es: 'Epanadiplosis (empieza y termina el verso con la misma palabra «verde»).', hy: 'Էպանադիպլոզիս (տողը սկսվում և ավարտվում է նույն «verde» բառով)։' } },
          { id: 'B', text: { es: 'Onomatopeya de un instrumento de cuerda antiguo.', hy: 'Հին լարային գործիքի ձայնանմանություն։' } },
          { id: 'C', text: { es: 'Asíndeton sin conjunción entre oraciones.', hy: 'Անշաղկապություն։' } },
          { id: 'D', text: { es: 'Hipérbaton con tres sujetos invertidos.', hy: 'Շրջադասություն երեք շրջված ենթականերով։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'La epanadiplosis encuadra el verso repitiendo el mismo término en los dos extremos.',
          hy: 'Էպանադիպլոզիսը շրջանակում է տողը՝ նույն բառը կրկնելով երկու ծայրերում։',
        },
      },
      {
        id: 'ef-5',
        originTopic: 'Figuras literarias',
        question: {
          es: '«Rendí, rompí, derribé, rajé, deshice, prendí». ¿Qué figura sintáctica acelera este verso?',
          hy: '«Rendí, rompí, derribé, rajé, deshice, prendí»: Ի՞նչ շարահյուսական միջոց է արագացնում այս տողը։',
        },
        options: [
          { id: 'A', text: { es: 'Polisíndeton con repetición de enlaces «y».', hy: 'Բազմաշաղկապություն «y» կապերով։' } },
          { id: 'B', text: { es: 'Asíndeton (omisión total de conjunciones para dar rapidez y dinamismo).', hy: 'Անշաղկապություն (շաղկապների իսպառ բացակայություն՝ արագություն հաղորդելու համար)։' } },
          { id: 'C', text: { es: 'Paronomasia con palabras de igual sonido.', hy: 'Հարանունություն նույնահունչ բառերով։' } },
          { id: 'D', text: { es: 'Metáfora pura sin término real presente.', hy: 'Մաքուր փոխաբերություն։' } },
        ],
        correctOption: 'B',
        explanation: {
          es: 'El asíndeton elimina las conjunciones coordinantes, produciendo vértigo, rapidez y tensión.',
          hy: 'Անշաղկապությունը հեռացնում է համադասական շաղկապները՝ առաջացնելով արագություն և դինամիկա։',
        },
      },
      {
        id: 'ef-6',
        originTopic: 'Figuras literarias',
        question: {
          es: '¿Qué figura retórica se encuentra en «Te he llamado un millón de veces y no contestas»?',
          hy: 'Ի՞նչ գեղարվեստական միջոց է «Te he llamado un millón de veces y no contestas» նախադասության մեջ։',
        },
        options: [
          { id: 'A', text: { es: 'Aliteración fónica de consonantes nasales.', hy: 'Ռնգային բաղաձայնների հնչյունային ալիտերացիա։' } },
          { id: 'B', text: { es: 'Asíndeton sin nexos coordinantes.', hy: 'Անշաղկապություն։' } },
          { id: 'C', text: { es: 'Pleonasmo con reiteración de ojos y manos.', hy: 'Ավելորդաբանություն։' } },
          { id: 'D', text: { es: 'Hipérbole (exageración desmedida de la realidad con fin expresivo).', hy: 'Չափազանցություն (հիպերբոլա՝ իրականության ծայրահեղ չափազանցում արտահայտչական նպատակով)։' } },
        ],
        correctOption: 'D',
        explanation: {
          es: 'Llamar «un millón de veces» es una exageración patente imposible en la realidad: es una hipérbole típica.',
          hy: '«Մեկ միլիոն անգամ զանգելը» իրականության մեջ անհնար չափազանցություն է. դասական հիպերբոլա է։',
        },
      },
      {
        id: 'ef-7',
        originTopic: 'Figuras literarias',
        question: {
          es: 'En el verso de Bécquer «Volverán las oscuras golondrinas en tu balcón sus nidos a colgar», ¿qué figura altera el orden sintáctico habitual?',
          hy: 'Բեկերի «Volverán las oscuras golondrinas en tu balcón sus nidos a colgar» տողում ո՞ր միջոցն է խախտում սովորական շարահյուսական կարգը։',
        },
        options: [
          { id: 'A', text: { es: 'Onomatopeya del canto de las aves.', hy: 'Թռչունների երգի ձայնանմանություն։' } },
          { id: 'B', text: { es: 'Pleonasmo innecesario.', hy: 'Անհարկի ավելորդաբանություն։' } },
          { id: 'C', text: { es: 'Hipérbaton (inversión del orden lógico Sujeto + Verbo + Complementos).', hy: 'Շրջադասություն (հիպերբատոն՝ Ենթակա + Բայ + Լրացումներ տրամաբանական կարգի շրջում)։' } },
          { id: 'D', text: { es: 'Paronomasia entre nido y golondrina.', hy: 'Հարանունություն։' } },
        ],
        correctOption: 'C',
        explanation: {
          es: 'El orden habitual sería: «Las oscuras golondrinas volverán a colgar sus nidos en tu balcón». La alteración es un hipérbaton poético.',
          hy: 'Սովորական կարգը կլիներ՝ «Las oscuras golondrinas volverán a colgar sus nidos...»: Փոփոխությունը պոետիկ շրջադասություն է։',
        },
      },
      {
        id: 'ef-8',
        originTopic: 'Figuras literarias',
        question: {
          es: '«El viento de la noche gemía entre los árboles solitarios». ¿Qué recurso encontramos al atribuir llanto al viento?',
          hy: '«Գիշերվա քամին հեծեծում էր միայնակ ծառերի միջև»: Ի՞նչ միջոց է, երբ քամուն վերագրվում է հեծեծանք (լաց)։',
        },
        options: [
          { id: 'A', text: { es: 'Personificación o prosopopeya (atribución de cualidades humanas a seres inanimados).', hy: 'Անձնավորում կամ պրոսոպոպեա (մարդկային հատկանիշների վերագրում անշունչ առարկաներին)։' } },
          { id: 'B', text: { es: 'Asíndeton sin nexos ni comas.', hy: 'Անշաղկապություն։' } },
          { id: 'C', text: { es: 'Epanadiplosis simétrica.', hy: 'Համաչափ էպանադիպլոզիս։' } },
          { id: 'D', text: { es: 'Aliteración silbante exclusiva de la letra F.', hy: 'F տառի բացառիկ ալիտերացիա։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'El viento es un elemento inanimado que no puede gemir por voluntad propia; atribuirle llanto humano es una personificación.',
          hy: 'Քամին անշունչ երևույթ է, որը չի կարող հեծեծալ. մարդկային լաց վերագրելը անձնավորում է։',
        },
      },
    ],
  },
  {
    id: 'exam-final',
    title: {
      es: 'Examen Final Global de Lengua Castellana y Literatura — 1.º ESO',
      hy: 'Ընդհանուր ամփոփիչ քննություն. Իսպաներեն լեզու և գրականություն — 1-ին ESO',
    },
    description: {
      es: 'Simulacro oficial que abarca literatura popular, géneros narrativos, prosa, métrica y figuras retóricas.',
      hy: 'Պաշտոնական ամփոփիչ քննություն՝ ընդգրկելով ժողովրդական գրականությունը, պատմողական ժանրերը, արձակը, չափածոն և գեղարվեստական միջոցները։',
    },
    questionCount: 10,
    timeLimitMinutes: 30,
    questions: [
      {
        id: 'fin-1',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Por qué un romance tradicional recogido en un pueblo de Granada puede tener versos distintos al mismo romance en Asturias?',
          hy: 'Ինչո՞ւ Գրանադայի գյուղում գրի առնված ավանդական ռոմանսը կարող է ունենալ այլ տողեր, քան Աստուրիայում գրված նույն ռոմանսը։',
        },
        options: [
          { id: 'A', text: { es: 'Porque la imprenta moderna cometió un error tipográfico involuntario.', hy: 'Որովհետև ժամանակակից տպարանը պատահական տպագրական սխալ է թույլ տվել։' } },
          { id: 'B', text: { es: 'Porque estaba prohibido cantar la misma canción en dos regiones de España.', hy: 'Որովհետև արգելված էր նույն երգը երգել Իսպանիայի երկու տարբեր շրջաններում։' } },
          { id: 'C', text: { es: 'Porque uno de ellos fue traducido al dialecto provenzal.', hy: 'Որովհետև դրանցից մեկը թարգմանվել էր պրովանսալյան բարբառով։' } },
          { id: 'D', text: { es: 'Porque la transmisión oral durante siglos generó múltiples variantes y versiones locales.', hy: 'Քանի որ դարեր շարունակ բանավոր փոխանցումը առաջացրել է բազմաթիվ տեղական տարբերակներ։' } },
        ],
        correctOption: 'D',
        explanation: {
          es: 'La memoria colectiva de los cantores populares introduce cambios espontáneos en cada comarca con el paso del tiempo.',
          hy: 'Ժողովրդական երգիչների հավաքական հիշողությունը ժամանակի ընթացքում յուրաքանչյուր գավառում ինքնաբուխ փոփոխություններ է մտցնում։',
        },
      },
      {
        id: 'fin-2',
        originTopic: 'La prosa y el verso',
        question: {
          es: '¿Cómo se llama la coincidencia de vocales y consonantes a partir de la última vocal tónica en dos versos?',
          hy: 'Ինչպե՞ս է կոչվում երկու տողերի վերջին շեշտված ձայնավորից սկսած և՛ ձայնավորների, և՛ բաղաձայնների համընկնումը։',
        },
        options: [
          { id: 'A', text: { es: 'Rima asonante vocalica.', hy: 'Ձայնավորական (ասոնանս) հանգ (Rima asonante)։' } },
          { id: 'B', text: { es: 'Rima consonante.', hy: 'Համակազմ (կոնսոնանտ) հանգ (Rima consonante)։' } },
          { id: 'C', text: { es: 'Verso libre o blanco sin medida.', hy: 'Ազատ կամ սպիտակ տող։' } },
          { id: 'D', text: { es: 'Asíndeton estrófico rítmico.', hy: 'Տնային անշաղկապություն։' } },
        ],
        correctOption: 'B',
        explanation: {
          es: 'Si coinciden vocales y consonantes es consonante (cantero / sendero). Si solo coinciden las vocales es asonante (casa / playa).',
          hy: 'Եթե համընկնում են և՛ ձայնավորները, և՛ բաղաձայնները, ապա կոնսոնանտ է (cantero / sendero)։ Եթե միայն ձայնավորները՝ ասոնանս (casa / playa)։',
        },
      },
      {
        id: 'fin-3',
        originTopic: 'Géneros narrativos',
        question: {
          es: 'Un relato tradicional protagonizado por la diosa Atenea que explica cómo nació el árbol del olivo en el mundo es:',
          hy: 'Աթենաս աստվածուհու մասին ավանդական պատմությունը, որը բացատրում է, թե ինչպես առաջացավ ձիթենին աշխարհում, հետևյալն է՝',
        },
        options: [
          { id: 'A', text: { es: 'Una noticia periodística de última hora.', hy: 'Վերջին լուրերի թերթային հաղորդագրություն։' } },
          { id: 'B', text: { es: 'Un romance bélico cantado por los juglares.', hy: 'Ժուգլարների երգած ռազմական ռոմանս։' } },
          { id: 'C', text: { es: 'Un mito (explica el origen sagrado de un elemento natural mediante dioses).', hy: 'Առասպել (Mito՝ աստվածների միջոցով բացատրում է բնական տարրի սրբազան ծագումը)։' } },
          { id: 'D', text: { es: 'Una novela de ciencia ficción espacial futurista.', hy: 'Ֆուտուրիստական գիտաֆանտաստիկ վեպ։' } },
        ],
        correctOption: 'C',
        explanation: {
          es: 'Trata de dioses inmortales y explica el origen primordial de un elemento de la naturaleza: es un mito inequívoco.',
          hy: 'Պատմում է անմահ աստվածների մասին և բացատրում բնության տարրի նախնական ծագումը. անկասկած առասպել է։',
        },
      },
      {
        id: 'fin-4',
        originTopic: 'Figuras literarias',
        question: {
          es: 'En el verso «De los sus ojos tan fuertemente llorando», ¿qué figura expresiva observamos?',
          hy: '«De los sus ojos tan fuertemente llorando» տողում ի՞նչ գեղարվեստական արտահայտչամիջոց ենք տեսնում։',
        },
        options: [
          { id: 'A', text: { es: 'Pleonasmo (redundancia voluntaria que conmueve y añade intensidad).', hy: 'Ավելորդաբանություն (պլեոնազմ՝ գիտակցված ավելորդություն, որը հուզում և ուժ է հաղորդում)։' } },
          { id: 'B', text: { es: 'Aliteración continua de la letra Z.', hy: 'Z տառի շարունակական ալիտերացիա։' } },
          { id: 'C', text: { es: 'Metáfora pura con sustitución de ojos por estrellas.', hy: 'Մաքուր փոխաբերություն աչքերը աստղերով փոխարինելով։' } },
          { id: 'D', text: { es: 'Onomatopeya de un llanto infantil agudo.', hy: 'Մանկական լացի ձայնանմանություն։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: '«Llorar de los ojos» es un pleonasmo emotivo magistral del Cantar de mio Cid.',
          hy: '«Աչքերից արցունք թափելը» «Իմ Սիդի երգը» դյուցազնավեպի հուզական վարպետ պլեոնազմն է։',
        },
      },
      {
        id: 'fin-5',
        originTopic: 'Figuras literarias',
        question: {
          es: '¿Qué figura retórica se encuentra en la frase: «Presa del pánico, avanzaba con excesiva prisa»?',
          hy: 'Ի՞նչ գեղարվեստական միջոց է «Presa del pánico, avanzaba con excesiva prisa» նախադասության մեջ։',
        },
        options: [
          { id: 'A', text: { es: 'Polisíndeton con repetición de nexos copulativos.', hy: 'Բազմաշաղկապություն կապերի կրկնությամբ։' } },
          { id: 'B', text: { es: 'Asíndeton sin verbos conjugados.', hy: 'Անշաղկապություն առանց խոնարհված բայերի։' } },
          { id: 'C', text: { es: 'Mito griego cosmogónico sobre el pánico.', hy: 'Հունական տիեզերածնական առասպել։' } },
          { id: 'D', text: { es: 'Paronomasia (entre las palabras acústicamente parecidas presa / prisa).', hy: 'Հարանունություն (պարոնոմազիա՝ հնչյունապես նման «presa» և «prisa» բառերի միջև)։' } },
        ],
        correctOption: 'D',
        explanation: {
          es: 'Paronomasia: dos términos casi idénticos en su sonido (presa / prisa) que provocan un efecto estético ingenioso.',
          hy: 'Հարանունություն. արտասանությամբ գրեթե նույնական երկու բառեր (presa / prisa), որոնք ստեղծում են սրամիտ գեղագիտական տպավորություն։',
        },
      },
      {
        id: 'fin-6',
        originTopic: 'La prosa y el verso',
        question: {
          es: '¿Qué fenómeno métrico ocurre cuando la vocal final de una palabra se une a la vocal inicial de la siguiente para formar una sola sílaba métrica?',
          hy: 'Ի՞նչ մետրիկական երևույթ է տեղի ունենում, երբ բառի վերջին ձայնավորը միանում է հաջորդ բառի սկզբնական ձայնավորին՝ կազմելով մեկ վանկ։',
        },
        options: [
          { id: 'A', text: { es: 'Diéresis obligatoria.', hy: 'Պարտադիր դիերեզիս։' } },
          { id: 'B', text: { es: 'Sinalefa (ejemplo: «viento_en popa»).', hy: 'Սինալեֆա (օրինակ՝ «viento_en popa»)։' } },
          { id: 'C', text: { es: 'Sinéresis interna de diptongo.', hy: 'Դիպտոնգի ներքին սիներեզիս։' } },
          { id: 'D', text: { es: 'Encabalgamiento abrupto.', hy: 'Կտրուկ անջատում (տողանցում)։' } },
        ],
        correctOption: 'B',
        explanation: {
          es: 'La sinalefa es la unión de la vocal final de una palabra y la inicial de la siguiente en una sola sílaba métrica al medir versos en español.',
          hy: 'Սինալեֆան բառի վերջին և հաջորդ բառի սկզբի ձայնավորների միացումն է մեկ վանկի մեջ իսպաներեն տաղաչափության մեջ։',
        },
      },
      {
        id: 'fin-7',
        originTopic: 'Géneros narrativos',
        question: {
          es: '¿Cuál es la diferencia principal entre un CUENTO tradicional y una LEYENDA?',
          hy: 'Ո՞րն է ավանդական ՀԵՔԻԱԹԻ և ԱՎԱՆԴԱԶՐՈՒՅՑԻ (լեգենդի) հիմնական տարբերությունը։',
        },
        options: [
          { id: 'A', text: { es: 'El cuento se escribe siempre en verso y la leyenda siempre en prosa periodística.', hy: 'Հեքիաթը միշտ չափածո է, իսկ լեգենդը՝ լրագրողական արձակ։' } },
          { id: 'B', text: { es: 'No existe ninguna diferencia; son dos palabras para el mismo tipo de texto.', hy: 'Ոչ մի տարբերություն չկա. նույն տեքստի երկու անվանումներն են։' } },
          { id: 'C', text: { es: 'La leyenda parte de un lugar o hecho histórico real que se rodea de misterio, mientras el cuento es pura ficción intemporal.', hy: 'Լեգենդը հիմնվում է իրական վայրի կամ պատմական փաստի վրա՝ պատվելով առեղծվածով, մինչդեռ հեքիաթը զուտ անժամանակ երևակայություն է։' } },
          { id: 'D', text: { es: 'Los cuentos solo los escriben reyes y las leyendas los soldados.', hy: 'Հեքիաթները գրում են միայն թագավորները, իսկ լեգենդները՝ զինվորները։' } },
        ],
        correctOption: 'C',
        explanation: {
          es: 'La leyenda se ubica en un lugar concreto conocido (como Toledo o Granada) con base histórica transformada por la tradición popular.',
          hy: 'Ավանդազրույցը (լեգենդը) տեղայնացված է կոնկրետ ճանաչելի վայրում (օր.՝ Տոլեդո, Գրանադա) և ունի պատմական հիմք, իսկ հեքիաթն անժամանակ է։',
        },
      },
      {
        id: 'fin-8',
        originTopic: 'La prosa y el verso',
        question: {
          es: 'Si un verso en español termina en una palabra AGUDA (como «cantar» o «corazón»), ¿qué regla métrica se aplica al contar las sílabas?',
          hy: 'Եթե իսպաներեն տողն ավարտվում է AGUDA (վերջին վանկի վրա շեշտված) բառով («cantar», «corazón»), ո՞ր տաղաչափական կանոնն է կիրառվում վանկերը հաշվելիս։',
        },
        options: [
          { id: 'A', text: { es: 'Se suma obligatoriamente una sílaba (+1 al cómputo final).', hy: 'Պարտադիր գումարվում է մեկ վանկ (+1 վերջնական հաշվարկին)։' } },
          { id: 'B', text: { es: 'Se resta una sílaba (-1 al cómputo final).', hy: 'Հանվում է մեկ վանկ (-1 վերջնական հաշվարկից)։' } },
          { id: 'C', text: { es: 'Se duplica el número total de sílabas del poema.', hy: 'Կրկնապատկվում է բանաստեղծության վանկերի ընդհանուր քանակը։' } },
          { id: 'D', text: { es: 'El verso queda anulado y no se puede contar.', hy: 'Տողը չեղարկվում է և հաշվարկի ենթակա չէ։' } },
        ],
        correctOption: 'A',
        explanation: {
          es: 'Ley del acento final en español: palabra aguda suma una sílaba (+1), llana se queda igual, y esdrújula resta una (-1).',
          hy: 'Իսպաներենի վերջին շեշտի կանոն. aguda բառը գումարում է մեկ վանկ (+1), llana-ն մնում է նույնը, esdrújula-ն հանում է մեկ (-1)։',
        },
      },
      {
        id: 'fin-9',
        originTopic: 'Figuras literarias',
        question: {
          es: '«El tic-tac del reloj rompía el silencio de la biblioteca». ¿Qué recurso sonoro imita el ruido real del péndulo?',
          hy: '«Ժամացույցի tic-tac-ը խախտում էր գրադարանի լռությունը»: Ի՞նչ հնչյունային միջոց է ընդօրինակում ճոճանակի իրական ձայնը։',
        },
        options: [
          { id: 'A', text: { es: 'Polisíndeton copulativo.', hy: 'Բազմաշաղկապություն։' } },
          { id: 'B', text: { es: 'Hipérbaton invertido.', hy: 'Շրջադասություն։' } },
          { id: 'C', text: { es: 'Onomatopeya (imitación lingüística de un sonido real).', hy: 'Ձայնանմանություն (օնոմատոպեա՝ իրական ձայնի լեզվական նմանակում)։' } },
          { id: 'D', text: { es: 'Epíteto redundante de color.', hy: 'Գույնի ավելորդ մակդիր։' } },
        ],
        correctOption: 'C',
        explanation: {
          es: '«Tic-tac» es la onomatopeya estándar que recrea acústicamente el mecanismo del reloj.',
          hy: '«Tic-tac»-ը ստանդարտ ձայնանմանություն է, որը ձայնային տեսքով վերարտադրում է ժամացույցի մեխանիզմը։',
        },
      },
      {
        id: 'fin-10',
        originTopic: 'Literatura popular y culta',
        question: {
          es: '¿Qué es un ROMANCE en la literatura tradicional española?',
          hy: 'Ի՞նչ է ՌՈՄԱՆՍԸ իսպանական ավանդական գրականության մեջ։',
        },
        options: [
          { id: 'A', text: { es: 'Un libro de recetas de cocina medieval escritas en prosa.', hy: 'Միջնադարյան խոհարարական բաղադրատոմսերի արձակ գիրք։' } },
          { id: 'B', text: { es: 'Un poema narrativo en versos octosílabos con rima asonante en los versos pares y libres los impares.', hy: 'Պատմողական պոեմ՝ ութվանկանի տողերով, որտեղ զույգ տողերն ունեն ասոնանս հանգ, իսկ կենտ տողերն ազատ են։' } },
          { id: 'C', text: { es: 'Una carta diplomática enviada al Papa de Roma.', hy: 'Հռոմի Պապին ուղղված դիվանագիտական նամակ։' } },
          { id: 'D', text: { es: 'Una canción moderna que solo se interpreta con guitarras eléctricas.', hy: 'Ժամանակակից երգ, որը կատարվում է միայն էլեկտրական կիթառով։' } },
        ],
        correctOption: 'B',
        explanation: {
          es: 'Estructura canónica del romance español: versos de 8 sílabas (octosílabos), con rima asonante en los pares (-a, -a, ...) y versos impares sueltos.',
          hy: 'Իսպանական ռոմանսի կանոնական կառուցվածքը. 8 վանկանի տողեր (օկտոսիլաբ), զույգ տողերում ասոնանս հանգ, իսկ կենտ տողերն ազատ։',
        },
      },
    ],
  },
];
