import { LiteraryFigure } from './types.ts';

export const literaryFigures: LiteraryFigure[] = [
  // --- NIVEL FÓNICO ---
  {
    id: 'aliteracion',
    name: { es: 'Aliteración', hy: 'Ալիտերացիա' },
    level: 'fónico',
    levelName: { es: 'Nivel fónico (sonidos)', hy: 'Հնչյունային մակարդակ (հնչյուններ)' },
    shortDesc: {
      es: 'Repetición intencionada de un mismo sonido consonántico para evocar sensaciones.',
      hy: 'Նույն բաղաձայն հնչյունի միտումնավոր կրկնություն՝ զգացողություններ արթնացնելու համար։',
    },
    fullDefinition: {
      es: 'La aliteración es una figura retórica de dicción que consiste en la repetición deliberada de uno o varios fonemas (generalmente consonantes) a lo largo de un verso, frase o estrofa, con el fin de producir un efecto acústico expresivo o imitar un fenómeno de la naturaleza.',
      hy: 'Ալիտերացիան արտասանական գեղարվեստական միջոց է, որը կայանում է մեկ կամ մի քանի հնչյունների (հատկապես բաղաձայնների) նպատակաուղղված կրկնության մեջ բանաստեղծական տողում, նախադասությունում կամ տան մեջ՝ արտահայտիչ հնչյունական տպավորություն ստեղծելու կամ բնության երևույթները նմանակելու համար։',
    },
    howToIdentify: [
      {
        es: '1. Lee el verso o la frase en voz alta con atención al sonido.',
        hy: '1. Ուշադիր և բարձրաձայն կարդա տողը կամ նախադասությունը՝ լսելով հնչողությունը։',
      },
      {
        es: '2. Detecta si hay una consonante o grupo consonántico que se repite con insistencia anormal.',
        hy: '2. Ուշադրություն դարձրու, թե արդյոք կա որևէ բաղաձայն, որը կրկնվում է անսովոր հաճախականությամբ։',
      },
      {
        es: '3. Pregúntate: ¿qué sensación transmite ese sonido? (la «s» sugiere susurro o silencio; la «r» fuerza o rugido; la «k/t» golpe seco).',
        hy: '3. Հարցրու ինքդ քեզ. ի՞նչ զգացողություն է հաղորդում այդ հնչյունը («s»-ը հուշում է շշուկ կամ լռություն, «r»-ը՝ ուժ կամ մռնչոց, «k/t»-ն՝ չոր հարված)։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«En el silencio sólo se escuchaba / un susurro de abejas que sonaba.»',
          hy: '«Լռության մեջ լսվում էր միայն / մեղուների շշուկը, որ հնչում էր։»',
        },
        authorOrContext: 'Garcilaso de la Vega (Égloga III)',
        analysis: {
          es: 'Repetición insistente del sonido suave /s/ (silencio, sólo, se, escuchaba, susurro, abejas, sonaba) para evocar acústicamente el zumbido de las abejas y la tranquilidad de la tarde.',
          hy: '/s/ մեղմ հնչյունի շարունակական կրկնություն (silencio, sólo, se, escuchaba, susurro, sonaba)՝ մեղուների բզզոցը և երեկոյի հանդարտությունը ձայնային առումով վերարտադրելու համար։',
        },
        acousticOrSemanticNote: {
          es: 'Nota de fonética: El fonema sibilante /s/ crea un ambiente de paz y rumor continuo.',
          hy: 'Հնչյունաբանական նշում. /s/ շչական հնչյունը ստեղծում է խաղաղության և անդադար խշշոցի մթնոլորտ։',
        },
      },
      {
        quote: {
          es: '«Susana susurra suavemente sobre su sueño.»',
          hy: '«Սուսանան մեղմորեն շշնջում է իր երազի մասին։»',
        },
        analysis: {
          es: 'Repetición del fonema /s/ que imita la suavidad del susurro.',
          hy: '/s/ հնչյունի կրկնություն, որը նմանակում է շշուկի մեղմությունը։',
        },
      },
      {
        quote: {
          es: '«Con el ala aleve del leve abanico.»',
          hy: '«Թեթև հովհարի դավադիր թևով։»',
        },
        authorOrContext: 'Rubén Darío',
        analysis: {
          es: 'Repetición de los fonemas /l/ y /b/ que reproduce la ligereza y el movimiento ondulante del aire.',
          hy: '/l/ և /b/ հնչյունների կրկնություն, որոնք վերարտադրում են օդի թեթևությունն ու ալիքաձև շարժումը։',
        },
      },
      {
        quote: {
          es: '«El trueno rueda raudo por la roca rocosa.»',
          hy: '«Որոտը սրընթաց գլորվում է ժայռոտ քարափով։»',
        },
        analysis: {
          es: 'Repetición de la vibrante múltiple /r/ para sugerir la fuerza y estruendo del trueno.',
          hy: 'Թրթռուն /r/ հնչյունի կրկնություն՝ որոտի ուժն ու դղրդյունը փոխանցելու համար։',
        },
      },
      {
        quote: {
          es: '«Mi mamá me mima mucho.»',
          hy: '«Իմ մայրիկը ինձ շատ է փայփայում։»',
        },
        analysis: {
          es: 'Aliteración infantil del fonema nasal bilabial /m/, transmitiendo ternura y afecto.',
          hy: '/m/ շրթնային քթային հնչյունի կրկնություն, որը հաղորդում է քնքշանք և սեր։',
        },
      },
      {
        quote: {
          es: '«Bajo el ala aleve se deslizaba la vela lejana.»',
          hy: '«Դավադիր թևի տակով սահում էր հեռավոր առագաստը։»',
        },
        analysis: {
          es: 'Aliteración líquida con /l/ que produce una sensación de fluidez marina.',
          hy: '/l/ հեղուկ հնչյունով ալիտերացիա, որն առաջացնում է ծովային սահունության զգացողություն։',
        },
      },
      {
        quote: {
          es: '«El perro corre rápido por el río rugiente.»',
          hy: '«Շունն արագ վազում է մռնչացող գետի երկայնքով։»',
        },
        analysis: {
          es: 'Aliteración en /r/ que transmite energía cinética y ruido tempestuoso.',
          hy: '/r/ հնչյունի ալիտերացիա, որը հաղորդում է շարժման արագություն և աղմկոտ հոսք։',
        },
      },
      {
        quote: {
          es: '«Caminante, no hay camino, se hace camino al andar.»',
          hy: '«Ուղևո՛ր, չկա ճանապարհ, ճանապարհը հարթվում է քայլելիս։»',
        },
        authorOrContext: 'Antonio Machado',
        analysis: {
          es: 'Aliteración oclusiva y nasal en /k/ y /m/ (caminante, camino, camino) unida a la repetición léxica.',
          hy: '/k/ և /m/ հնչյունների կրկնություն բառերի հետ միասին (caminante, camino, camino)։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Onomatopeya',
        difference: {
          es: 'La aliteración repite sonidos dentro de palabras normales (ej: "silencio sólo se escuchaba"), mientras que la onomatopeya es una palabra específica que imita directamente un ruido (ej: "¡tic-tac!", "¡guau!", "el chasquido").',
          hy: 'Ալիտերացիան կրկնում է հնչյունները սովորական բառերի մեջ, իսկ ձայնանմանությունը (onomatopeya) կոնկրետ բառ է, որն ուղղակիորեն նմանակում է բնության ձայնը (օր.՝ «չը՜խկ», «հա՛ֆ-հա՛ֆ», «տիկ-տակ»)։',
        },
        trick: {
          es: 'Si puedes buscarla como ruido inventado entre signos de exclamación ("¡pum!"), es onomatopeya; si son palabras corrientes donde resuena la misma consonante, es aliteración.',
          hy: 'Եթե դա բացականչական նշաններով առանձին ձայն է («բում»), դա ձայնանմանություն է, իսկ եթե սովորական բառեր են նույն բաղաձայնով, դա ալիտերացիա է։',
        },
      },
    ],
    examMistakes: [
      {
        es: 'No marques aliteración si solo se repite una letra por casualidad gramatical en dos palabras.',
        hy: 'Ալիտերացիա մի՛ նշիր, եթե տառը պատահականորեն համընկել է ընդամենը երկու բառում։',
      },
      {
        es: 'No confundir la repetición de palabras completas (anáfora) con la repetición de fonemas sueltos (aliteración).',
        hy: 'Մի՛ շփոթիր ամբողջական բառերի կրկնությունը (anáfora) առանձին հնչյունների կրկնության հետ (aliteración)։',
      },
    ],
    practicalRule: {
      es: 'Aliteración = Repetición de consonantes con efecto musical o sugerente.',
      hy: 'Ալիտերացիա = Բաղաձայնների կրկնություն՝ երաժշտական կամ հուզական ազդեցությամբ։',
    },
  },
  {
    id: 'onomatopeya',
    name: { es: 'Onomatopeya', hy: 'Ձայնանմանություն' },
    level: 'fónico',
    levelName: { es: 'Nivel fónico (sonidos)', hy: 'Հնչյունային մակարդակ (հնչյուններ)' },
    shortDesc: {
      es: 'Palabra o expresión que imita o recrea el sonido de la realidad.',
      hy: 'Բառ կամ արտահայտություն, որը նմանակում է իրականության բնական ձայները։',
    },
    fullDefinition: {
      es: 'La onomatopeya es la palabra formada por la imitación de un sonido de la naturaleza, de un animal o de un objeto inanimado. Puede ser una interjección directa (¡croac!, ¡pum!) o un verbo/sustantivo derivado (el zumbido, cacarear, chasquido).',
      hy: 'Ձայնանմանությունը բառ է, որը կազմված է բնության, կենդանու կամ առարկայի ձայնը նմանակելու միջոցով։ Կարող է լինել անմիջական ձայնարկություն (կռա՜, դըմփ, տիկ-տակ) կամ դրանից ածանցված գոյական/բայ (բզզոց, կչկչալ, չխկոց)։',
    },
    howToIdentify: [
      {
        es: '1. Busca palabras que intenten reproducir ruidos físicos o de animales.',
        hy: '1. Փնտրիր բառեր, որոնք փորձում են վերարտադրել ֆիզիկական կամ կենդանիների ձայները։',
      },
      {
        es: '2. Fíjate en cómics, diálogos o descripciones acústicas vívidas.',
        hy: '2. Ուշադրություն դարձրու երկխոսությունների կամ վառ հնչյունային նկարագրությունների վրա։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«El tic-tac del reloj rompía el silencio de la medianoche.»',
          hy: '«Ժամացույցի տիկ-տակը խախտում էր կեսգիշերվա լռությունը։»',
        },
        analysis: {
          es: '«Tic-tac» imita el mecanismo rítmico del péndulo del reloj.',
          hy: '«Տիկ-տակ»-ը նմանակում է ժամացույցի ճոճանակի ռիթմիկ ձայնը։',
        },
      },
      {
        quote: {
          es: '«En el estanque se oía el croac, croac de las ranas.»',
          hy: '«Լճակում լսվում էր գորտերի կռ-կռոցը։»',
        },
        analysis: {
          es: '«Croac» reproduce el canto anfibio.',
          hy: '«Կռ-կռոցը» վերարտադրում է գորտերի ձայնը։',
        },
      },
      {
        quote: {
          es: '«¡Pum! La puerta se cerró violentamente de golpe.»',
          hy: '«Դը՜մփ։ Դուռը հանկարծակի ու ուժգին փակվեց։»',
        },
        analysis: {
          es: '«¡Pum!» reproduce el choque seco de la madera.',
          hy: '«Դըմփ»-ը վերարտադրում է փայտի չոր հարվածի ձայնը։',
        },
      },
      {
        quote: {
          es: '«El zumbido de los mosquitos no nos dejaba dormir.»',
          hy: '«Մոծակների բզզոցը մեզ թույլ չէր տալիս քնել։»',
        },
        analysis: {
          es: 'Sustantivo onomatopéyico que imita el sonido continuo del vuelo del insecto.',
          hy: 'Ձայնանմանական գոյական, որը նմանակում է միջատի թռիչքի անդադար ձայնը։',
        },
      },
      {
        quote: {
          es: '«¡Kikirikí! Ya canta el gallo al amanecer.»',
          hy: '«Ծուղրուղո՜ւ: Աքաղաղն արդեն երգում է լուսաբացին։»',
        },
        analysis: {
          es: 'Imitación directa del canto matutino del gallo.',
          hy: 'Աքաղաղի առավոտյան կանչի անմիջական նմանակում։',
        },
      },
      {
        quote: {
          es: '«Se oyó un chasquido al romperse la rama seca.»',
          hy: '«Չոր ճյուղի կոտրվելիս մի չխկոց լսվեց։»',
        },
        analysis: {
          es: '«Chasquido» recrea la fractura rápida de la madera.',
          hy: '«Չխկոց»-ը վերարտադրում է փայտի արագ կոտրվելու ձայնը։',
        },
      },
      {
        quote: {
          es: '«El agua goteaba: ¡clic, clic, clic!, en el lavabo.»',
          hy: '«Ջուրը կաթկթում էր լվացարանի մեջ. կաթ, կաթ, կաթ։»',
        },
        analysis: {
          es: 'Imitación del impacto de gotas individuales sobre la porcelana.',
          hy: 'Կաթիլների հարվածի նմանակումը մակերեսին։',
        },
      },
      {
        quote: {
          es: '«El perro soltó un ¡guau, guau! furioso al ver al forastero.»',
          hy: '«Շունը կատաղի «հա՛ֆ, հա՛ֆ» հաչեց՝ անծանոթին տեսնելով։»',
        },
        analysis: {
          es: 'Onomatopeya del ladrido canino.',
          hy: 'Շան հաչոցի ձայնանմանություն։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Aliteración',
        difference: {
          es: 'La onomatopeya es el sonido imitado directamente como palabra (¡ring!, ¡miau!), mientras que la aliteración es un patrón estilístico repartido en varias palabras.',
          hy: 'Ձայնանմանությունը ձայնն է՝ անմիջապես որպես բառ (օր.՝ միաո՛ւ, դըմփ), իսկ ալիտերացիան հնչյունների համակարգված կրկնությունն է տարբեր բառերում։',
        },
        trick: {
          es: 'Si parece un efecto de sonido de cómic, es onomatopeya.',
          hy: 'Եթե կոմիքսի ձայնային էֆեկտ է հիշեցնում, ուրեմն ձայնանմանություն է։',
        },
      },
    ],
    examMistakes: [
      {
        es: 'No confundir verbos descriptivos comunes (gritar, hablar) con verbos onomatopéyicos genuinos (ulular, tintinear, chasquear).',
        hy: 'Մի՛ շփոթիր սովորական նկարագրական բայերը (գոռալ, խոսել) բուն ձայնանմանական բայերի հետ (բզզալ, զնգալ, չխկալ)։',
      },
    ],
    practicalRule: {
      es: 'Onomatopeya = Palabra que suena igual que el ruido real que describe.',
      hy: 'Ձայնանմանություն = Բառ, որը հնչում է ճիշտ այնպես, ինչպես իրական ձայնը։',
    },
  },
  {
    id: 'paronomasia',
    name: { es: 'Paronomasia', hy: 'Հարանունություն (Պարոնոմազիա)' },
    level: 'fónico',
    levelName: { es: 'Nivel fónico (sonidos)', hy: 'Հնչյունային մակարդակ (հնչյուններ)' },
    shortDesc: {
      es: 'Uso próximo de palabras con sonido muy parecido pero significados completamente distintos.',
      hy: 'Շատ նման հնչող, բայց բոլորովին տարբեր իմաստ ունեցող բառերի կիրառում կողք կողքի։',
    },
    fullDefinition: {
      es: 'La paronomasia consiste en colocar cercanas en una misma frase o verso dos palabras que se pronuncian de forma casi idéntica (difieren en una sola letra o fonema), pero que tienen significados totalmente diferentes. Genera un juego fonético y de ingenio muy llamativo.',
      hy: 'Հարանունությունը կայանում է նրանում, որ միևնույն նախադասության կամ տողի մեջ մոտ են դրվում երկու բառեր, որոնք արտասանվում են գրեթե նույն կերպ (տարբերվում են ընդամենը մեկ տառով կամ հնչյունով), բայց ունեն բոլորովին տարբեր իմաստներ։ Դա առաջացնում է հնչյունական և իմաստային սրամիտ խաղ։',
    },
    howToIdentify: [
      {
        es: '1. Busca pares de palabras casi gemelas en el mismo enunciado (ej: adoptar / adaptar, presa / prisa).',
        hy: '1. Փնտրիր գրեթե նույնական հնչող բառազույգեր նույն նախադասության մեջ (օր.՝ adoptar / adaptar, presa / prisa)։',
      },
      {
        es: '2. Comprueba que no sean la misma palabra repetida, sino dos términos distintos con significados diferentes.',
        hy: '2. Ստուգիր, որ դրանք չլինեն նույն բառի կրկնություն, այլ երկու տարբեր բառեր՝ տարբեր իմաստներով։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«Una pica lleva al hombro, / porque su suegra y la pica / son heparcos en la plática.»',
          hy: '«Մի նիզակ է կրում ուսին, / քանի որ նրա զոքանչն ու նիզակը...»',
        },
        authorOrContext: 'Francisco de Quevedo',
        analysis: {
          es: 'Juego entre "pica" (arma) y el verbo "picar" o su relación con la charlatanería.',
          hy: 'Բառախաղ «pica» (նիզակ) և համանման հնչողությամբ բառերի միջև։',
        },
      },
      {
        quote: {
          es: '«Tardó tanto en entender que entre la aptitud y la actitud está el éxito.»',
          hy: '«Այնքան երկար ժամանակ պահանջվեց հասկանալու, որ ընդունակության (aptitud) և վերաբերմունքի (actitud) միջև է թաքնված հաջողությունը։»',
        },
        analysis: {
          es: 'Paronomasia clásica entre aptitud (capacidad) y actitud (postura ante las cosas).',
          hy: 'Դասական հարանունություն aptitud (ընդունակություն) և actitud (վերաբերմունք) բառերի միջև։',
        },
      },
      {
        quote: {
          es: '«Quien parte y reparte se queda con la mejor parte.»',
          hy: '«Ով բաժանում և վերաբաժանում է, իրեն է մնում լավագույն բաժինը։»',
        },
        authorOrContext: 'Refrán popular tradicional',
        analysis: {
          es: 'Juego fónico entre "parte" (verbo partir / porción) y "reparte".',
          hy: 'Հնչյունական խաղ «parte» և «reparte» բառերի միջև։',
        },
      },
      {
        quote: {
          es: '«Vendado que me has vendido.»',
          hy: '«Կապկապված, որ ինձ ծախեցիր (դավաճանեցիր)։»',
        },
        authorOrContext: 'Luis de Góngora',
        analysis: {
          es: 'Paronomasia entre "vendado" (con los ojos tapados) y "vendido" (traicionado). Solo cambia una vocal.',
          hy: 'Հարանունություն «vendado» (աչքակապ) և «vendido» (ծախված/դավաճանված) բառերի միջև։ Փոխվում է միայն մեկ ձայնավոր։',
        },
      },
      {
        quote: {
          es: '«El cazador fue víctima de su propia casa.»',
          hy: '«Որսորդը (cazador) զոհ դարձավ իր սեփական տանը (casa)։»',
        },
        analysis: {
          es: 'Semejanza acústica entre cazar / casa.',
          hy: 'Հնչյունական նմանություն որսալ և տուն բառերի միջև։',
        },
      },
      {
        quote: {
          es: '«Milicia que es malicia en el combate.»',
          hy: '«Զորք (milicia), որը նենգություն է (malicia) մարտում։»',
        },
        analysis: {
          es: 'Contraste entre milicia y malicia: casi idéntico sonido, rotundo cambio moral.',
          hy: 'Հակադրություն milicia (զորք) և malicia (չարություն/նենգություն) բառերի միջև։',
        },
      },
      {
        quote: {
          es: '«Presa del miedo, caminaba con excesiva prisa.»',
          hy: '«Վախի գերին (presa) դարձած՝ նա քայլում էր չափազանց շտապողականությամբ (prisa)։»',
        },
        analysis: {
          es: 'Paronomasia entre "presa" y "prisa" (e / i).',
          hy: 'Հարանունություն «presa» (ավար/գերի) և «prisa» (շտապողականություն) բառերի միջև։',
        },
      },
      {
        quote: {
          es: '«De medio a miedo sólo hay una letra de distancia.»',
          hy: '«Միջոցից (medio) մինչև վախ (miedo) ընդամենը մեկ տառի հեռավորություն է։»',
        },
        analysis: {
          es: 'Juego metalingüístico sobre el parecido sonoro de las dos palabras.',
          hy: 'Լեզվական խաղ երկու բառերի հնչյունական նմանության վրա։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Calambur',
        difference: {
          es: 'La paronomasia usa dos palabras parecidas pero distintas (actitud/aptitud); el calambur reagrupa las sílabas de una palabra para formar otra (ej: "oro parece, plata no es" -> plátano).',
          hy: 'Հարանունությունը օգտագործում է երկու նման, բայց տարբեր բառեր, իսկ կալամբուրը վերախմբավորում է նույն վանկերը (օր.՝ plata no es -> plátano)։',
        },
        trick: {
          es: 'En paronomasia las palabras están separadas y se parecen en una o dos letras.',
          hy: 'Հարանունության մեջ բառերն առանձին են և տարբերվում են ընդամենը 1-2 տառով։',
        },
      },
    ],
    examMistakes: [
      {
        es: 'No confundas sinónimos (palabras que significan lo mismo) con parónimos (palabras que solo se parecen en el sonido).',
        hy: 'Մի՛ շփոթիր հոմանիշները (նույն իմաստն ունեցող բառերը) հարանունների հետ (բառեր, որոնք միայն հնչողությամբ են նման)։',
      },
    ],
    practicalRule: {
      es: 'Paronomasia = Palabras casi idénticas en pronunciación pero opuestas o ajenas en significado.',
      hy: 'Հարանունություն = Բառեր, որոնք արտասանությամբ գրեթե նույնական են, բայց իմաստով՝ բոլորովին տարբեր։',
    },
  },
  {
    id: 'epanadiplosis',
    name: { es: 'Epanadiplosis', hy: 'Էպանադիպլոզիս' },
    level: 'fónico',
    levelName: { es: 'Nivel fónico (sonidos y repetición)', hy: 'Հնչյունային մակարդակ (հնչյուններ և կրկնություն)' },
    shortDesc: {
      es: 'Empezar y terminar el mismo verso u oración con la misma palabra.',
      hy: 'Միևնույն տողը կամ նախադասությունը նույն բառով սկսելը և նույն բառով ավարտելը։',
    },
    fullDefinition: {
      es: 'La epanadiplosis es una figura retórica que consiste en repetir la misma palabra al principio y al final de una misma frase, cláusula o verso poético. Crea un círculo expresivo cerrado perfecto (estructura en anillo).',
      hy: 'Էպանադիպլոզիսը գեղարվեստական միջոց է, որը կայանում է նույն բառի կրկնության մեջ միևնույն նախադասության կամ բանաստեղծական տողի սկզբում և վերջում։ Այն ստեղծում է կատարյալ փակ շրջան (օղակաձև կառուցվածք)։',
    },
    howToIdentify: [
      {
        es: '1. Mira la primera palabra del verso.',
        hy: '1. Նայիր տողի առաջին բառին։',
      },
      {
        es: '2. Mira la última palabra del MISMO verso.',
        hy: '2. Նայիր ՆՈՒՅՆ տողի ամենավերջին բառին։',
      },
      {
        es: '3. Si son exactamente la misma palabra (ej: "Verde... verde"), ¡es una epanadiplosis!',
        hy: '3. Եթե դրանք ճիշտ նույն բառն են (օր.՝ «Verde... verde»), ուրեմն դա էպանադիպլոզիս է։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«Verde que te quiero verde.»',
          hy: '«Կանաչ, ախ որքա՜ն եմ սիրում քեզ կանաչ։»',
        },
        authorOrContext: 'Federico García Lorca',
        analysis: {
          es: 'Empieza con «Verde» y termina con «verde». El verso queda envuelto en el color.',
          hy: 'Սկսվում է «Verde» (կանաչ) բառով և ավարտվում «verde» (կանաչ) բառով։ Տողը պարուրված է այդ գույնով։',
        },
      },
      {
        quote: {
          es: '«Silencio de la noche, doloroso silencio.»',
          hy: '«Գիշերվա լռություն, ցավոտ լռություն։»',
        },
        analysis: {
          es: 'Comienza con "Silencio" y cierra con "silencio", remarcando la soledad.',
          hy: 'Սկսվում է «Silencio» (լռություն) բառով և եզրափակվում «silencio»-ով՝ ընդգծելով մենությունը։',
        },
      },
      {
        quote: {
          es: '«Huracán, huracán, venir te siento, / y en tu soplo abrasado / respiro ya el ardiente respirar / de tu profundo seno, huracán.»',
          hy: '«Փոթորիկ, փոթորիկ, զգում եմ գալուստդ... փոթորիկ։»',
        },
        authorOrContext: 'José María Heredia',
        analysis: {
          es: 'Abre la estrofa invocando al "huracán" y la clausura con "huracán".',
          hy: 'Տունը բացվում է «huracán» (փոթորիկ) բառով և փակվում «huracán»-ով։',
        },
      },
      {
        quote: {
          es: '«Palabras, sólo palabras, el viento se lleva las palabras.»',
          hy: '«Բառեր, միայն բառեր, քամին տանում է բառերը։»',
        },
        analysis: {
          es: 'Comienza con palabras y concluye con palabras, insistiendo en la vanidad de lo dicho.',
          hy: 'Սկսվում է «palabras» բառով և ավարտվում «palabras»-ով՝ շեշտելով ասվածի ունայնությունը։',
        },
      },
      {
        quote: {
          es: '«¿Cómo era, Dios mío, cómo era?»',
          hy: '«Ինչպիսի՞ն էր, Տե՛ր իմ, ինչպիսի՞ն էր։»',
        },
        authorOrContext: 'Juan Ramón Jiménez',
        analysis: {
          es: 'La pregunta angustiada abre y cierra con la fórmula "cómo era".',
          hy: 'Տագնապալի հարցը բացվում և փակվում է «cómo era» (ինչպիսի՞ն էր) արտահայտությամբ։',
        },
      },
      {
        quote: {
          es: '«Amor es todo lo que tengo, y todo lo que doy es amor.»',
          hy: '«Սերն այն ամենն է, ինչ ունեմ, և այն ամենը, ինչ տալիս եմ, սեր է։»',
        },
        analysis: {
          es: 'Abre con "Amor" y cierra con "amor".',
          hy: 'Սկսվում է «Amor»-ով և ավարտվում «amor»-ով։',
        },
      },
      {
        quote: {
          es: '«Última lágrima que cae, la última.»',
          hy: '«Վերջին արցունքը, որ թափվում է, ամենավերջինը։»',
        },
        analysis: {
          es: 'Epanadiplosis de "última".',
          hy: '«Última» բառի էպանադիպլոզիս։',
        },
      },
      {
        quote: {
          es: '«Tiempo que todo lo curas, tiempo.»',
          hy: '«Ժամանա՛կ, որ ամեն ինչ բուժում ես, ժամանա՛կ։»',
        },
        analysis: {
          es: 'Invocación circular al "tiempo".',
          hy: '«Tiempo» (ժամանակ) բառի շրջանաձև կանչը։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Anáfora',
        difference: {
          es: 'La anáfora repite palabras AL PRINCIPIO de versos DISTINTOS consecutivos. La epanadiplosis repite al PRINCIPIO Y AL FINAL del MISMO verso.',
          hy: 'Անաֆորան բառերը կրկնում է ՏԱՐԲԵՐ հաջորդական տողերի ՍԿԶԲՈՒՄ։ Էպանադիպլոզիսը կրկնում է ՆՈՒՅՆ տողի ՍԿԶԲՈՒՄ ԵՎ ՎԵՐՋՈՒՄ։',
        },
        trick: {
          es: 'Epanadiplosis = Efecto espejo dentro de una sola línea (A ... A).',
          hy: 'Էպանադիպլոզիս = Հայելային էֆեկտ մեկ տողի ներսում (A ... A)։',
        },
      },
    ],
    examMistakes: [
      {
        es: '¡Cuidado en el examen! Si ves la misma palabra al inicio del verso 1 y al inicio del verso 2, es ANÁFORA, no epanadiplosis.',
        hy: 'Զգո՛ւյշ քննության ժամանակ։ Եթե տեսնում ես նույն բառը 1-ին տողի սկզբում և 2-րդ տողի սկզբում, դա ԱՆԱՖՈՐԱ է, այլ ոչ թե էպանադիպլոզիս։',
      },
    ],
    practicalRule: {
      es: 'Epanadiplosis = [Palabra] ................... [Misma palabra].',
      hy: 'Էպանադիպլոզիս = [Բառ] ................... [Նույն բառը]։',
    },
  },

  // --- NIVEL MORFOSINTÁCTICO ---
  {
    id: 'hiperbaton',
    name: { es: 'Hipérbaton', hy: 'Շրջադասություն (Հիպերբատոն)' },
    level: 'morfosintáctico',
    levelName: { es: 'Nivel morfosintáctico (orden y gramática)', hy: 'Ձևաբանական-շարահյուսական մակարդակ (կարգ և քերականություն)' },
    shortDesc: {
      es: 'Alteración del orden lógico y habitual de las palabras en la oración.',
      hy: 'Նախադասության մեջ բառերի տրամաբանական և սովորական շարադասության խախտում։',
    },
    fullDefinition: {
      es: 'El hipérbaton consiste en alterar el orden sintáctico habitual que siguen las palabras en español neutro (Sujeto + Verbo + Complemento Directo + Complemento Indirecto + Complementos Circunstanciales) con el fin de destacar una palabra al inicio, acomodarse a la rima o dotar al texto de solemnidad clásica.',
      hy: 'Շրջադասությունը (հիպերբատոն) կայանում է իսպաներենի սովորական շարահյուսական կարգի խախտման մեջ (Ենթակա + Բայ-ստորոգյալ + Ուղիղ խնդիր + Անուղղակի խնդիր + Պարագաներ)՝ որևէ բառ սկզբում ընդգծելու, հանգին հարմարվելու կամ տեքստին վեհաշուք դասական երանգ հաղորդելու նպատակով։',
    },
    howToIdentify: [
      {
        es: '1. Lee la oración y pregúntate: «¿Hablaría así una persona en la calle normalmente?» Si suena desordenado o como el maestro Yoda de Star Wars, hay hipérbaton.',
        hy: '1. Կարդա նախադասությունը և հարցրու ինքդ քեզ. «Այդպե՞ս կխոսեր սովորական մարդը փողոցում»։ Եթե այն անսովոր կամ շրջված է հնչում, ապա առկա է շրջադասություն։',
      },
      {
        es: '2. Reconstruye el orden habitual: busca primero el sujeto, luego el verbo conjugado y después los complementos.',
        hy: '2. Վերականգնիր սովորական կարգը. նախ գտիր ենթական, հետո խոնարհված բայը և ապա՝ լրացումները։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«Volverán las oscuras golondrinas / en tu balcón sus nidos a colgar.»',
          hy: '«Կվերադառնան մութ ծիծեռնակները / քո պատշգամբում իրենց բները կախելու։»',
        },
        authorOrContext: 'Gustavo Adolfo Bécquer (Rima LIII)',
        analysis: {
          es: 'Orden lógico: «Las oscuras golondrinas volverán a colgar sus nidos en tu balcón». El verbo «volverán» se adelanta al principio y el infinitivo «a colgar» queda desplazado al final.',
          hy: 'Տրամաբանական կարգ. «Las oscuras golondrinas volverán a colgar sus nidos en tu balcón»: «Volverán» (կվերադառնան) բայը բերվել է առաջ, իսկ «a colgar» (կախելու) անորոշ դերբայը տեղափոխվել է ամենավերջ։',
        },
      },
      {
        quote: {
          es: '«Del monte en la ladera / por mi mano tengo plantado un huerto.»',
          hy: '«Լեռան լանջին / իմ ձեռքով ես մի պարտեզ եմ տնկել։»',
        },
        authorOrContext: 'Fray Luis de León',
        analysis: {
          es: 'Orden lógico: «Tengo plantado un huerto con mi mano en la ladera del monte». Los complementos circunstanciales se colocan antes del verbo.',
          hy: 'Տրամաբանական կարգ. «Tengo plantado un huerto... en la ladera del monte»: Տեղի և ձևի պարագաները դրվել են նախադասության հենց սկզբում։',
        },
      },
      {
        quote: {
          es: '«Cansado de tanto esperar, el tren finalmente llegó.»',
          hy: '«Այդքան սպասելուց հոգնած՝ գնացքը վերջապես հասավ։»',
        },
        analysis: {
          es: 'Orden lógico: «El tren llegó finalmente cansado de tanto esperar».',
          hy: 'Տրամաբանական կարգ. «El tren llegó finalmente...»։ Գնացքը (ենթական) տեղադրված է մեջտեղում։',
        },
      },
      {
        quote: {
          es: '«A Dafne ya los brazos le crecían...»',
          hy: '«Դափնեի թևերն արդեն աճում էին...»',
        },
        authorOrContext: 'Garcilaso de la Vega',
        analysis: {
          es: 'Orden lógico: «Los brazos ya le crecían a Dafne». Se adelanta el complemento indirecto.',
          hy: 'Տրամաբանական կարգ. «Los brazos ya le crecían a Dafne»: Հանգման անուղղակի խնդիրը առաջ է բերվել։',
        },
      },
      {
        quote: {
          es: '«De verdes sauces hay una espesura.»',
          hy: '«Կանաչ ուռիներից մի թավուտ կա։»',
        },
        authorOrContext: 'Garcilaso de la Vega',
        analysis: {
          es: 'Orden lógico: «Hay una espesura de verdes sauces». El complemento del nombre se coloca al principio.',
          hy: 'Տրամաբանական կարգ. «Hay una espesura de verdes sauces»: Որոշիչը առաջ է բերվել գոյականից։',
        },
      },
      {
        quote: {
          es: '«Pasos de un peregrino son, errante.»',
          hy: '«Մի ուխտավորի քայլերն են, թափառական։»',
        },
        authorOrContext: 'Luis de Góngora',
        analysis: {
          es: 'Orden lógico: «Son pasos de un peregrino errante».',
          hy: 'Տրամաբանական կարգ. «Son pasos de un peregrino errante»։ Խիստ շրջված շարահյուսություն։',
        },
      },
      {
        quote: {
          es: '«En la oscura noche, la blanca nieve brillaba.»',
          hy: '«Մութ գիշերում սպիտակ ձյունը փայլում էր։»',
        },
        analysis: {
          es: 'Orden lógico: «La nieve blanca brillaba en la noche oscura». Se adelanta el complemento temporal y se antepone el adjetivo.',
          hy: 'Տրամաբանական կարգ. «La nieve blanca brillaba en la noche oscura»։ Ժամանակի պարագան դրվել է սկզբում։',
        },
      },
      {
        quote: {
          es: '«Poco dinero tengo yo hoy.»',
          hy: '«Քիչ գումար ունեմ ես այսօր։»',
        },
        analysis: {
          es: 'Orden habitual: «Yo hoy tengo poco dinero».',
          hy: 'Սովորական կարգ. «Yo hoy tengo poco dinero»։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Orden habitual',
        difference: {
          es: 'El hipérbaton rompe deliberadamente la secuencia lógica Sujeto + Verbo + Objeto para llamar la atención sobre una palabra.',
          hy: 'Շրջադասությունը նպատակաուղղված խախտում է Ենթակա + Բայ + Լրացումներ կարգը՝ որևէ բառի վրա ուշադրություն սևեռելու համար։',
        },
        trick: {
          es: 'Si al leerlo tienes que pensar cómo ordenarlo en tu cabeza para entenderlo bien, hay hipérbaton.',
          hy: 'Եթե կարդալիս ստիպված ես մտքումդ տեղերը փոխել՝ հասկանալու համար, ուրեմն հաստատ շրջադասություն է։',
        },
      },
    ],
    examMistakes: [
      {
        es: 'No creas que cualquier frase poética es hipérbaton; debe haber un desorden real de la estructura sintáctica.',
        hy: 'Մի՛ կարծիր, թե ցանկացած բանաստեղծական տող շրջադասություն է. պետք է լինի իրական շարահյուսական խախտում։',
      },
    ],
    practicalRule: {
      es: 'Hipérbaton = Palabras desordenadas a propósito para crear ritmo o énfasis.',
      hy: 'Շրջադասություն (Հիպերբատոն) = Բառերի դասավորության հատուկ խախտում՝ ռիթմ կամ շեշտ ստեղծելու համար։',
    },
  },
  {
    id: 'anafora',
    name: { es: 'Anáfora', hy: 'Անաֆորա (Սկզբնակրկնություն)' },
    level: 'morfosintáctico',
    levelName: { es: 'Nivel morfosintáctico (orden y repetición)', hy: 'Ձևաբանական-շարահյուսական մակարդակ (կարգ և կրկնություն)' },
    shortDesc: {
      es: 'Repetición de una o varias palabras al comienzo de versos u oraciones consecutivas.',
      hy: 'Մեկ կամ մի քանի բառերի կրկնություն հաջորդական տողերի կամ նախադասությունների սկզբում։',
    },
    fullDefinition: {
      es: 'La anáfora es la repetición periódica de la misma palabra o grupo de palabras al principio de dos o más versos, estrofas o enunciados sucesivos. Sirve para dar fuerza insistente, ritmo musical y unidad temática al texto.',
      hy: 'Անաֆորան (սկզբնակրկնություն) նույն բառի կամ բառախմբի պարբերական կրկնությունն է երկու կամ ավելի հաջորդական բանաստեղծական տողերի, տների կամ նախադասությունների սկզբում։ Այն ծառայում է տեքստին համառ ուժ, երաժշտական ռիթմ և թեմատիկ միասնություն հաղորդելուն։',
    },
    howToIdentify: [
      {
        es: '1. Coloca tu mirada en la primera palabra de cada verso uno debajo del otro.',
        hy: '1. Նայիր յուրաքանչյուր տողի առաջին բառին՝ մեկը մյուսի տակ։',
      },
      {
        es: '2. Si dos o más líneas consecutivas arrancan con la misma palabra exacta (ej: «Temprano... / Temprano...»), es una anáfora evidente.',
        hy: '2. Եթե երկու կամ ավելի հաջորդական տողեր սկսվում են նույն բառով (օր.՝ «Temprano... / Temprano...»), ապա դա ակնհայտ անաֆորա է։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«Temprano levantó la muerte el vuelo,\ntemprano madrugó la madrugada,\ntemprano estás rodando por el suelo.»',
          hy: '«Վաղաժամ մահը թռիչք առավ,\nվաղաժամ լուսացավ լուսաբացը,\nվաղաժամ դու գլորվում ես գետնին։»',
        },
        authorOrContext: 'Miguel Hernández (Elegía a Ramón Sijé)',
        analysis: {
          es: 'La triple repetición de «Temprano» al inicio de cada verso enfatiza el dolor desgarrador por la muerte prematura de su amigo.',
          hy: '«Temprano» (վաղաժամ) բառի եռակի կրկնությունը յուրաքանչյուր տողասկզբում ընդգծում է ընկերոջ վաղաժամ մահվան սրտաճմլիկ ցավը։',
        },
      },
      {
        quote: {
          es: '«Por ti el silencio de la selva umbrosa,\npor ti la soledad y apartamiento...»',
          hy: '«Քո պատճառով՝ ստվերոտ անտառի լռությունը,\nքո պատճառով՝ մենությունն ու մեկուսացումը...»',
        },
        authorOrContext: 'Garcilaso de la Vega',
        analysis: {
          es: 'Repetición de «Por ti» al comienzo de versos contiguos.',
          hy: '«Por ti» (քեզ համար/քո պատճառով) արտահայտության կրկնություն տողասկզբում։',
        },
      },
      {
        quote: {
          es: '«Menos tu vientre,\ntodo es confuso.\nMenos tu vientre,\ntodo es futuro.»',
          hy: '«Բացի քո որովայնից,\nամեն ինչ մշուշոտ է։\nԲացի քո որովայնից,\nամեն ինչ ապագա է։»',
        },
        authorOrContext: 'Miguel Hernández',
        analysis: {
          es: 'Anáfora del sintagma «Menos tu vientre».',
          hy: '«Menos tu vientre» բառակապակցության անաֆորա։',
        },
      },
      {
        quote: {
          es: '«Aquí me pongo a cantar,\naquí no hay penas ni llantos,\naquí florece la paz.»',
          hy: '«Այստեղ ես սկսում եմ երգել,\nայստեղ չկան վշտեր ու լաց,\nայստեղ ծաղկում է խաղաղությունը։»',
        },
        analysis: {
          es: 'Repetición del adverbio «Aquí» al arrancar cada verso.',
          hy: '«Aquí» (այստեղ) մակբայի կրկնություն տողասկզբում։',
        },
      },
      {
        quote: {
          es: '«Ni esperanza ni miedo,\nni rencor ni consuelo.»',
          hy: '«Ո՛չ հույս, ո՛չ վախ,\nո՛չ ոխ, ո՛չ մխիթարություն։»',
        },
        analysis: {
          es: 'Repetición de la conjunción negativa «Ni» al inicio de cada línea.',
          hy: '«Ni» (ո՛չ) ժխտական շաղկապի անաֆորա։',
        },
      },
      {
        quote: {
          es: '«Querrán volarlo y no podrán volarlo.\nQuerrán romperlo y no podrán romperlo.\nQuerrán matarlo y no podrán matarlo.»',
          hy: '«Կուզենան պայթեցնել նրան ու չեն կարողանա։\nԿուզենան ջարդել նրան ու չեն կարողանա։\nԿուզենան սպանել նրան ու չեն կարողանա։»',
        },
        authorOrContext: 'Alejandro Romualdo',
        analysis: {
          es: 'Anáfora con el verbo «Querrán» que transmite resistencia inquebrantable.',
          hy: '«Querrán» (կուզենան) բայի անաֆորա, որը հաղորդում է անկոտրում դիմադրություն։',
        },
      },
      {
        quote: {
          es: '«Dile que no me busque,\ndile que ya partí,\ndile que no me llame más.»',
          hy: '«Ասա՛ նրան, որ չփնտրի ինձ,\nասա՛ նրան, որ ես արդեն մեկնել եմ,\nասա՛ նրան, որ այլևս չզանգահարի ինձ։»',
        },
        analysis: {
          es: 'Anáfora con el imperativo «Dile que».',
          hy: '«Dile que» (ասա նրան, որ) հրամայական արտահայտության անաֆորա։',
        },
      },
      {
        quote: {
          es: '«Verde en el monte,\nverde en el prado,\nverde en mi corazón.»',
          hy: '«Կանաչ՝ սարում,\nկանաչ՝ մարգագետնում,\nկանաչ՝ իմ սրտում։»',
        },
        analysis: {
          es: 'Repetición inicial de «verde».',
          hy: '«Verde» բառի սկզբնական կրկնություն։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Epanadiplosis',
        difference: {
          es: 'La anáfora repite al PRINCIPIO de varias líneas (A... / A... / A...); la epanadiplosis repite al PRINCIPIO Y AL FINAL de una sola línea (A... A).',
          hy: 'Անաֆորան կրկնում է տարբեր տողերի ՍԿԶԲՈՒՄ (A... / A... / A...), իսկ էպանադիպլոզիսը կրկնում է նույն տողի ՍԿԶԲՈՒՄ ԵՎ ՎԵՐՋՈՒՄ (A... A)։',
        },
        trick: {
          es: 'Anáfora = Inicio vertical de versos.',
          hy: 'Անաֆորա = Տողերի ուղղահայաց սկիզբ։',
        },
      },
    ],
    examMistakes: [
      {
        es: 'No confundas una anáfora con una repetición casual de artículos o preposiciones en el medio de una frase.',
        hy: 'Մի՛ շփոթիր անաֆորան նախադասության մեջտեղում հոդերի կամ նախդիրների պատահական կրկնության հետ։',
      },
    ],
    practicalRule: {
      es: 'Anáfora = Misma palabra al principio de versos seguidos.',
      hy: 'Անաֆորա = Նույն բառը հաջորդական տողերի սկզբում։',
    },
  },
  {
    id: 'asindeton',
    name: { es: 'Asíndeton', hy: 'Անշաղկապություն (Ասինդետոն)' },
    level: 'morfosintáctico',
    levelName: { es: 'Nivel morfosintáctico (nexos y ritmo)', hy: 'Ձևաբանական-շարահյուսական մակարդակ (կապեր և ռիթմ)' },
    shortDesc: {
      es: 'Omisión de nexos o conjunciones para dar rapidez y dinamismo a la frase.',
      hy: 'Շաղկապների բացթողում՝ նախադասությանը արագություն և դինամիզմ հաղորդելու համար։',
    },
    fullDefinition: {
      es: 'El asíndeton consiste en eliminar deliberadamente las conjunciones coordinantes (como «y», «e», «ni», «o») entre palabras, sintagmas u oraciones, sustituyéndolas por simples comas. Produce una sensación de celeridad, urgencia, acumulación vertiginosa o acción trepidante.',
      hy: 'Անշաղկապությունը կայանում է բառերի, բառակապակցությունների կամ նախադասությունների միջև համադասական շաղկապների («y», «ni», «o» և այլն) գիտակցված բացթողման մեջ՝ դրանք փոխարինելով ստորակետներով։ Այն առաջացնում է արագության, հրատապության և բուռն գործողության տպավորություն։',
    },
    howToIdentify: [
      {
        es: '1. Busca listas de acciones o adjetivos separados solo por comas.',
        hy: '1. Փնտրիր գործողությունների կամ ածականների շարք, որոնք բաժանված են միայն ստորակետներով։',
      },
      {
        es: '2. Comprueba si falta la típica conjunción «y» antes del último elemento.',
        hy: '2. Ստուգիր, թե արդյոք բացակայում է վերջին անդամից առաջ սովորական «y» (և) շաղկապը։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«Llegué, vi, vencí.» (Veni, vidi, vici)',
          hy: '«Եկա, տեսա, հաղթեցի։»',
        },
        authorOrContext: 'Julio César',
        analysis: {
          es: 'Tres verbos de acción fulgurante sin conjunción «y». Comunica una victoria instantánea sin pausas.',
          hy: 'Երեք գործողության բայ՝ առանց «y» (և) շաղկապի։ Հաղորդում է ակնթարթային և անկասելի հաղթանակ։',
        },
      },
      {
        quote: {
          es: '«Rendí, rompí, derribé, / rajé, deshice, prendí...»',
          hy: '«Խոնարհեցրի, ջարդեցի, տապալեցի, / ճեղքեցի, քանդեցի, գերի վերցրի...»',
        },
        authorOrContext: 'Lope de Vega',
        analysis: {
          es: 'Sucesión implacable de pretéritos que simula el frenesí de la batalla.',
          hy: 'Անցյալ կատարյալ ժամանակով բայերի շարք, որը նմանակում է ճակատամարտի կատաղի եռուզեռը։',
        },
      },
      {
        quote: {
          es: '«En tierra, en humo, en polvo, en sombra, en nada.»',
          hy: '«Հողի մեջ, ծխի մեջ, փոշու մեջ, ստվերի մեջ, ոչնչի մեջ։»',
        },
        authorOrContext: 'Luis de Góngora',
        analysis: {
          es: 'Gradación descendente sin conjunciones que acelera la aniquilación de la belleza humana.',
          hy: 'Նվազող աստիճանավորում առանց շաղկապների, որն արագացնում է մարդկային գեղեցկության ոչնչացումը։',
        },
      },
      {
        quote: {
          es: '«Corre, vuela, traspasa la alta sierra.»',
          hy: '«Վազի՛ր, թռի՛ր, անցի՛ր բարձր լեռնաշղթան։»',
        },
        authorOrContext: 'Fray Luis de León',
        analysis: {
          es: 'Imperativos concatenados que imprimen urgencia extrema.',
          hy: 'Հրամայական բայերի շարան, որը փոխանցում է ծայրահեղ հրատապություն։',
        },
      },
      {
        quote: {
          es: '«Día, noche, poniente, madrugada.»',
          hy: '«Ցերեկ, գիշեր, մայրամուտ, լուսաբաց։»',
        },
        analysis: {
          es: 'El paso del tiempo comprimido sin enlaces gramaticales.',
          hy: 'Ժամանակի արագ ընթացքը՝ սեղմված առանց քերականական կապերի։',
        },
      },
      {
        quote: {
          es: '«Grita, llora, suplica, implora clemencia.»',
          hy: '«Գոռում է, լալիս է, աղաչում է, գթություն աղերսում։»',
        },
        analysis: {
          es: 'Acumulación de verbos emocionales sin conjunciones coordinantes.',
          hy: 'Հուզական բայերի կուտակում առանց համադասական շաղկապների։',
        },
      },
      {
        quote: {
          es: '«Fuego, humo, ceniza, ruina total.»',
          hy: '«Կրակ, ծուխ, մոխիր, լիակատար ավեր։»',
        },
        analysis: {
          es: 'Sucesión rápida de las fases destructivas del incendio.',
          hy: 'Հրդեհի կործանարար փուլերի արագ հաջորդականությունը։',
        },
      },
      {
        quote: {
          es: '«Mira, escucha, calla, aprende.»',
          hy: '«Նայի՛ր, լսի՛ր, լռի՛ր, սովորի՛ր։»',
        },
        analysis: {
          es: 'Asíndeton de consejos directos y contundentes.',
          hy: 'Ուղիղ և կտրուկ խորհուրդների անշաղկապ շարք։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Polisíndeton',
        difference: {
          es: 'El asíndeton QUITA conjunciones (da rapidez: "A, B, C"); el polisíndeton REPITE conjunciones innecesarias (da lentitud e insistencia: "A y B y C y D"). Son opuestos exactos.',
          hy: 'Անշաղկապությունը (asíndeton) ՀԱՆՈՒՄ Է շաղկապները (հաղորդում է արագություն՝ «A, B, C»), իսկ բազմաշաղկապությունը (polisíndeton) ԱՆՀԱՐԿԻ ԿՐԿՆՈՒՄ Է դրանք (հաղորդում է դանդաղություն և ծանրություն՝ «A y B y C y D»)։ Դրանք հակադիր են։',
        },
        trick: {
          es: 'Asíndeton empieza por "A-" (privativo, sin nexos). Polisíndeton empieza por "Poli-" (muchos nexos).',
          hy: 'Asíndeton սկսվում է ժխտական «A-»-ով (առանց շաղկապների)։ Polisíndeton սկսվում է «Poli-»-ով (բազմաթիվ շաղկապներ)։',
        },
      },
    ],
    examMistakes: [
      {
        es: 'No confundir una simple enumeración normal («Compré pan, leche y fruta») con asíndeton. En el asíndeton se omite INCLUSO la última «y» («Compré pan, leche, fruta»).',
        hy: 'Մի՛ շփոթիր սովորական թվարկումը («Գնեցի հաց, կաթ և միրգ») անշաղկապության հետ։ Անշաղկապության դեպքում բաց է թողնվում ՆԱԵՎ վերջին «և»-ը։',
      },
    ],
    practicalRule: {
      es: 'Asíndeton = Cero conjunciones, solo comas (rapidez).',
      hy: 'Անշաղկապություն = Զրո շաղկապ, միայն ստորակետներ (արագություն)։',
    },
  },
  {
    id: 'polisindeton',
    name: { es: 'Polisíndeton', hy: 'Բազմաշաղկապություն (Պոլիսինդետոն)' },
    level: 'morfosintáctico',
    levelName: { es: 'Nivel morfosintáctico (nexos y ritmo)', hy: 'Ձևաբանական-շարահյուսական մակարդակ (կապեր և ռիթմ)' },
    shortDesc: {
      es: 'Repetición intencionada de conjunciones (como «y», «ni») para dar lentitud, solemnidad y peso.',
      hy: 'Շաղկապների («y», «ni») միտումնավոր կրկնություն՝ խոսքին դանդաղություն, վեհություն և ծանրություն հաղորդելու համար։',
    },
    fullDefinition: {
      es: 'El polisíndeton es la figura retórica consistente en emplear repetidamente conjunciones de coordinación (típicamente «y» o «ni») donde gramaticalmente bastaría una coma. Ralentiza el tempo narrativo, enfatiza cada elemento por separado y añade un tono solemne o melancólico.',
      hy: 'Բազմաշաղկապությունը կայանում է համադասական շաղկապների (հատկապես «y» կամ «ni») բազմակի կիրառման մեջ այնտեղ, որտեղ քերականորեն կբավարարեր պարզ ստորակետը։ Այն դանդաղեցնում է պատմողական ընթացքը, առանձին-առանձին ծանրություն է տալիս յուրաքանչյուր անդամին և հաղորդում է հանդիսավոր կամ թախծոտ երանգ։',
    },
    howToIdentify: [
      {
        es: '1. Cuenta cuántas veces aparece la palabra «y» o «ni» en la misma frase.',
        hy: '1. Հաշվիր, թե քանի անգամ է հանդիպում «y» (և) կամ «ni» (ո՛չ) շաղկապը նույն նախադասության մեջ։',
      },
      {
        es: '2. Si aparece 3, 4 o más veces uniendo elementos consecutivos («y sueña y lucha y llora y espera»), es polisíndeton.',
        hy: '2. Եթե այն հանդիպում է 3, 4 կամ ավելի անգամ՝ միացնելով հաջորդական անդամներ, ապա դա բազմաշաղկապություն է։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«Hay un palacio y un río y un lago y un puente viejo.»',
          hy: '«Կա մի պալատ, և մի գետ, և մի լիճ, և մի հին կամուրջ։»',
        },
        authorOrContext: 'Juan Ramón Jiménez',
        analysis: {
          es: 'La repetición de «y» nos obliga a detenernos en cada paisaje con serenidad.',
          hy: '«Y» (և) շաղկապի կրկնությունը ստիպում է մեզ հանդարտորեն կանգ առնել յուրաքանչյուր տեսարանի վրա։',
        },
      },
      {
        quote: {
          es: '«Ni nardos ni caracolas / tienen el cutis tan fino, / ni los cristales con luna / relumbran con ese brillo.»',
          hy: '«Ո՛չ նարդոսները, ո՛չ խեցիները / չունեն այդքան նուրբ մաշկ, / ո՛չ էլ լուսնոտ հայելիները / փայլում են այդպիսի շողով։»',
        },
        authorOrContext: 'Federico García Lorca (Romance de la pena negra)',
        analysis: {
          es: 'Reiteración insistente de la conjunción negativa «ni», acumulando negaciones poéticas.',
          hy: '«Ni» (ո՛չ) ժխտական շաղկապի համառ կրկնություն՝ բանաստեղծական ժխտումների կուտակմամբ։',
        },
      },
      {
        quote: {
          es: '«Y los árboles se inclinaban, y el viento soplaba, y la lluvia caía, y la noche se volvía más oscura.»',
          hy: '«Եվ ծառերն էին խոնարհվում, և քամին էր փչում, և անձրևն էր տեղում, և գիշերն ավելի էր մթնում։»',
        },
        analysis: {
          es: 'La acumulación de «y» incrementa progresivamente la atmósfera opresiva del temporal.',
          hy: '«Y» շաղկապների կուտակումը հետզհետե ավելացնում է փոթորկի ճնշող մթնոլորտը։',
        },
      },
      {
        quote: {
          es: '«Y ríe y salta y canta y sueña con mañanas luminosas.»',
          hy: '«Եվ ծիծաղում է, և ցատկոտում, և երգում, և երազում լուսավոր առավոտների մասին։»',
        },
        analysis: {
          es: 'Marca cada una de las acciones alegres dándoles pleno protagonismo.',
          hy: 'Նշում է ուրախ գործողություններից յուրաքանչյուրը՝ տալով դրանց լիակատար կարևորություն։',
        },
      },
      {
        quote: {
          es: '«Ni el oro ni la plata ni los diamantes colmaron su vacío.»',
          hy: '«Ո՛չ ոսկին, ո՛չ արծաթը, ո՛չ ադամանդները չլցրին նրա դատարկությունը։»',
        },
        analysis: {
          es: 'Triple conjunción «ni» que resalta el desengaño material.',
          hy: 'Եռակի «ni» շաղկապ, որն ընդգծում է նյութականի նկատմամբ հիասթափությունը։',
        },
      },
      {
        quote: {
          es: '«Y avanza y tropieza y se levanta y prosigue su marcha.»',
          hy: '«Եվ առաջ է շարժվում, և սայթաքում, և ոտքի կանգնում, և շարունակում իր երթը։»',
        },
        analysis: {
          es: 'Expresa el esfuerzo extenuante paso a paso.',
          hy: 'Քայլ առ քայլ արտահայտում է տանջալից ջանքերը։',
        },
      },
      {
        quote: {
          es: '«El tiempo pasa y la sombra crece y el frío penetra los huesos.»',
          hy: '«Ժամանակն անցնում է, և ստվերն է մեծանում, և ցուրտն է թափանցում ոսկորների մեջ։»',
        },
        analysis: {
          es: 'Polisíndeton para dramatizar la llegada inexorable de la vejez.',
          hy: 'Բազմաշաղկապություն՝ ծերության անխուսափելի գալուստը դրամատիզացնելու համար։',
        },
      },
      {
        quote: {
          es: '«Ni duerme ni come ni descansa ni habla con nadie.»',
          hy: '«Ո՛չ քնում է, ո՛չ ուտում, ո՛չ հանգստանում, ո՛չ էլ խոսում որևէ մեկի հետ։»',
        },
        analysis: {
          es: 'Polisíndeton negativo que refleja obsesión profunda.',
          hy: 'Ժխտական բազմաշաղկապություն, որն արտացոլում է խորը կլանվածություն։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Asíndeton',
        difference: {
          es: 'Polisíndeton = Muchas conjunciones repetidas (ritmo pausado). Asíndeton = Cero conjunciones (ritmo rápido).',
          hy: 'Polisíndeton = Բազմաթիվ կրկնվող շաղկապներ (դանդաղ ռիթմ)։ Asíndeton = Զրո շաղկապ (արագ ռիթմ)։',
        },
        trick: {
          es: 'Recuerda: Poli = Muchos (muchos nexos).',
          hy: 'Հիշիր. Poli = Շատ (շատ կապեր)։',
        },
      },
    ],
    examMistakes: [
      {
        es: 'Usar una sola «y» gramatical al final de una frase normal NO es polisíndeton. Debe haber repetición innecesaria para ser figura retórica.',
        hy: 'Սովորական նախադասության վերջում ընդամենը մեկ «y» շաղկապ ունենալը բազմաշաղկապություն ՉԷ։ Պետք է լինի գեղարվեստական միտումնավոր կրկնություն։',
      },
    ],
    practicalRule: {
      es: 'Polisíndeton = Repetición continua de «y» o «ni» para dar peso y lentitud.',
      hy: 'Բազմաշաղկապություն = «Y» կամ «ni» շաղկապների շարունակական կրկնություն՝ ծանրություն և դանդաղություն հաղորդելու համար։',
    },
  },
  {
    id: 'enumeracion',
    name: { es: 'Enumeración', hy: 'Թվարկում (Էնումերացիա)' },
    level: 'morfosintáctico',
    levelName: { es: 'Nivel morfosintáctico (acumulación sintáctica)', hy: 'Ձևաբանական-շարահյուսական մակարդակ (շարահյուսական կուտակում)' },
    shortDesc: {
      es: 'Sucesión continua y acumulativa de elementos gramaticales afines.',
      hy: 'Քերականորեն համասեռ տարրերի անընդհատ և կուտակային շարք։',
    },
    fullDefinition: {
      es: 'La enumeración es la acumulación sucesiva de sustantivos, adjetivos, verbos u oraciones completas que pertenecen a un mismo campo conceptual o que describen las facetas de un todo. Puede ser caótica (elementos aparentemente inconexos) o graduada (ascendente o descendente).',
      hy: 'Թվարկումը գոյականների, ածականների, բայերի կամ նախադասությունների հաջորդական կուտակումն է, որոնք պատկանում են նույն իմաստային դաշտին կամ նկարագրում են ամբողջի տարբեր կողմերը։ Կարող է լինել քաոսային կամ աստիճանավորված (աճող կամ նվազող)։',
    },
    howToIdentify: [
      {
        es: '1. Detecta una lista prolongada de palabras de la misma categoría gramatical (tres o más sustantivos, adjetivos, etc.).',
        hy: '1. Գտիր նույն քերականական կարգի բառերի երկար շարք (երեք կամ ավելի գոյականներ, ածականներ և այլն)։',
      },
      {
        es: '2. Analiza si forman una descripción panorámica o detallada de una escena.',
        hy: '2. Ուսումնասիրիր, թե արդյոք դրանք կազմում են տեսարանի մանրամասն համայնապատկեր։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«En polvo, en humo, en aire, en sombra, en nada.»',
          hy: '«Փոշու, ծխի, օդի, ստվերի, ոչնչի մեջ։»',
        },
        authorOrContext: 'Luis de Góngora',
        analysis: {
          es: 'Enumeración descendente o gradación de elementos que se disuelven.',
          hy: 'Նվազող թվարկում կամ տարրերի աստիճանավորում, որոնք հալչում են։',
        },
      },
      {
        quote: {
          es: '«Había libros, pergaminos, candelabros, relojes rotos y mapas polvorientos sobre la mesa.»',
          hy: '«Սեղանի վրա կային գրքեր, մագաղաթներ, աշտանակներ, կոտրված ժամացույցներ և փոշոտ քարտեզներ։»',
        },
        analysis: {
          es: 'Enumeración de objetos que recrea el desorden del estudio del alquimista.',
          hy: 'Առարկաների թվարկում, որը վերստեղծում է ալքիմիկոսի սենյակի անկարգությունը։',
        },
      },
      {
        quote: {
          es: '«Era alegre, generoso, audaz, comprensivo y leal con sus amigos.»',
          hy: '«Նա ուրախ էր, առատաձեռն, խիզախ, ըմբռնող և հավատարիմ իր ընկերների հանդեպ։»',
        },
        analysis: {
          es: 'Enumeración de cualidades morales positivas (adjetivos).',
          hy: 'Դրական բարոյական հատկանիշների թվարկում (ածականներ)։',
        },
      },
      {
        quote: {
          es: '«Corrió por el bosque, saltó el arroyo, cruzó el valle y escaló la cumbre.»',
          hy: '«Վազեց անտառով, ցատկեց առվի վրայով, անցավ հովիտը և մագլցեց գագաթը։»',
        },
        analysis: {
          es: 'Enumeración narrativa de acciones consecutivas del protagonista.',
          hy: 'Հերոսի հաջորդական գործողությունների պատմողական թվարկում։',
        },
      },
      {
        quote: {
          es: '«Todo era silencio, calma, quietud, sosiego.»',
          hy: '«Ամեն ինչ լռություն էր, անդորր, անշարժություն, հանդարտություն։»',
        },
        analysis: {
          es: 'Enumeración de sustantivos sinónimos para recalcar la paz absoluta.',
          hy: 'Հոմանիշ գոյականների թվարկում՝ բացարձակ խաղաղությունն ընդգծելու համար։',
        },
      },
      {
        quote: {
          es: '«Manzanas, peras, higos, uvas y castañas llenaban el cesto del mercado.»',
          hy: '«Խնձորներ, տանձեր, թուզ, խաղող և շագանակներ էին լցնում շուկայի զամբյուղը։»',
        },
        analysis: {
          es: 'Enumeración descriptiva de frutos otoñales.',
          hy: 'Աշնանային մրգերի նկարագրական թվարկում։',
        },
      },
      {
        quote: {
          es: '«Barcos, gaviotas, redes, olas y marineros conformaban el puerto.»',
          hy: '«Նավակներ, ճայեր, ուռկաններ, ալիքներ և նավաստիներ էին կազմում նավահանգիստը։»',
        },
        analysis: {
          es: 'Enumeración de elementos marinos.',
          hy: 'Ծովային տարրերի թվարկում։',
        },
      },
      {
        quote: {
          es: '«Aspiro la menta, el tomillo, el romero y la flor del azahar.»',
          hy: '«Շնչում եմ անանուխը, ուրցը, հազրեվարդը և նարնջենու ծաղիկը։»',
        },
        analysis: {
          es: 'Enumeración de aromas silvestres que evocan la primavera.',
          hy: 'Դաշտային բույրերի թվարկում, որոնք հիշեցնում են գարունը։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Asíndeton',
        difference: {
          es: 'La enumeración se centra en el CONTENIDO (listar elementos acumulados); el asíndeton se centra en el NEXO (quitar conjunciones). Muchas veces coinciden en el mismo texto.',
          hy: 'Թվարկումը (enumeración) կենտրոնանում է ԲՈՎԱՆԴԱԿՈՒԹՅԱՆ վրա (տարրերի շարք կազմելը), իսկ անշաղկապությունը (asíndeton)՝ ԿԱՊԻ վրա (շաղկապները հանելը)։ Հաճախ նույն նախադասության մեջ դրանք համընկնում են։',
        },
        trick: {
          es: 'Toda enumeración sin conjunciones es a la vez asíndeton.',
          hy: 'Առանց շաղկապների ցանկացած թվարկում միաժամանակ նաև անշաղկապություն է։',
        },
      },
    ],
    examMistakes: [
      {
        es: 'No enumeres dos cosas sueltas; deben ser tres o más elementos para constituir figura expresiva.',
        hy: 'Երկու պատահական բառը դեռևս գեղարվեստական թվարկում չէ. անհրաժեշտ է երեք կամ ավելի տարրերի շարք։',
      },
    ],
    practicalRule: {
      es: 'Enumeración = Lista sucesiva de elementos afines o acumulados.',
      hy: 'Թվարկում = Համասեռ կամ կուտակված տարրերի հաջորդական ցանկ։',
    },
  },
  {
    id: 'pleonasmo',
    name: { es: 'Pleonasmo', hy: 'Ավելորդաբանություն (Պլեոնազմ)' },
    level: 'morfosintáctico',
    levelName: { es: 'Nivel morfosintáctico (redundancia expresiva)', hy: 'Ձևաբանական-շարահյուսական մակարդակ (արտահայտիչ ավելորդություն)' },
    shortDesc: {
      es: 'Uso de palabras innecesarias para el sentido literal pero que añaden fuerza expresiva.',
      hy: 'Ուղիղ իմաստի համար ավելորդ բառերի օգտագործում, որոնք սակայն հաղորդում են հուզական մեծ ուժ։',
    },
    fullDefinition: {
      es: 'El pleonasmo consiste en utilizar palabras aparentemente redundantes o innecesarias para la comprensión lógica de la oración, pero que el autor introduce voluntariamente para aportar intensidad, certeza testimonial indudable o dramatismo a lo expresado.',
      hy: 'Ավելորդաբանությունը (պլեոնազմ) կայանում է այնպիսի բառերի օգտագործման մեջ, որոնք տրամաբանորեն ավելորդ են նախադասությունը հասկանալու համար, բայց հեղինակը դրանք միտումնավոր ներմուծում է՝ ասվածին առանձնահատուկ ուժգնություն, ականատեսի անհերքելի համոզվածություն կամ դրամատիզմ հաղորդելու համար։',
    },
    howToIdentify: [
      {
        es: '1. Busca expresiones donde se dice dos veces lo mismo con distintos términos (ej: «verlo con los ojos», «subir arriba»).',
        hy: '1. Փնտրիր արտահայտություններ, որտեղ նույն միտքը տարբեր բառերով երկու անգամ է ասվում (օր.՝ «սեփական աչքերով տեսնել», «վերև բարձրանալ»)։',
      },
      {
        es: '2. Distingue si es un error coloquial descuidado o una figura literaria que refuerza la emoción.',
        hy: '2. Տարբերակիր՝ արդյոք դա խոսակցական անուշադիր սխա՞լ է, թե՞ գեղարվեստական միջոց, որն ուժեղացնում է հույզը։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«De los sus ojos tan fuertemente llorando...»',
          hy: '«Իր աչքերից այդքան ուժգին արցունք թափելով...»',
        },
        authorOrContext: 'Cantar de mio Cid (siglo XII)',
        analysis: {
          es: 'Es el verso que abre el Cantar de mio Cid. Decir que lloraba «de sus ojos» es redundante (no se llora por otra parte), pero conmueve e intensifica el dolor del héroe desterrado.',
          hy: 'Սա «Իմ Սիդի երգը» հերոսավեպը բացող տողն է։ Ասելը, թե նա լալիս էր «իր աչքերից», ավելորդաբանություն է (այլ տեղից չեն լալիս), բայց այն հուզում և սաստկացնում է աքսորված հերոսի վիշտը։',
        },
      },
      {
        quote: {
          es: '«Lo vi con mis propios ojos y nadie me lo puede negar.»',
          hy: '«Ես դա տեսա իմ սեփական աչքերով, և ոչ ոք չի կարող դա հերքել։»',
        },
        analysis: {
          es: '«Ver con los propios ojos» es un pleonasmo que certifica de forma contundente la verdad de un testimonio.',
          hy: '«Սեփական աչքերով տեսնելը» պլեոնազմ է, որն անառարկելիորեն հաստատում է վկայության ճշմարտացիությունը։',
        },
      },
      {
        quote: {
          es: '«Temprano madrugó la madrugada.»',
          hy: '«Վաղաժամ լուսացավ լուսաբացը։»',
        },
        authorOrContext: 'Miguel Hernández',
        analysis: {
          es: 'Madrugar la madrugada es pleonasmo semántico intensificador del despertar súbito de la muerte.',
          hy: 'Լուսաբացի լուսանալը իմաստային պլեոնազմ է, որն ընդգծում է մահվան հանկարծահաս զարթոնքը։',
        },
      },
      {
        quote: {
          es: '«Bébete ese vaso de leche fresca con tu propia boca sedienta.»',
          hy: '«Խմի՛ր այդ բաժակ թարմ կաթը քո իսկ ծարավ բերանով։»',
        },
        analysis: {
          es: 'Beber con la boca es un pleonasmo que acentúa la sensación física de satisfacción.',
          hy: 'Բերանով խմելը պլեոնազմ է, որը շեշտում է հագեցման ֆիզիկական զգացողությունը։',
        },
      },
      {
        quote: {
          es: '«Lloraba un llanto amargo en el rincón solitario.»',
          hy: '«Դառն արցունքներով մի լաց էր լալիս մենավոր անկյունում։»',
        },
        analysis: {
          es: 'Llorar un llanto (figura etimológica pleonástica) refuerza la pesadumbre.',
          hy: 'Լաց լինելը (արմատական պլեոնազմ) ուժեղացնում է վիշտը։',
        },
      },
      {
        quote: {
          es: '«Caminé con mis pies cansados hasta el final de la colina.»',
          hy: '«Իմ հոգնած ոտքերով քայլեցի մինչև բլրի վերջը։»',
        },
        analysis: {
          es: 'Pleonasmo corporal que enfatiza el agotamiento físico del caminante.',
          hy: 'Մարմնական պլեոնազմ, որն ընդգծում է քայլողի ֆիզիկական հյուծվածությունը։',
        },
      },
      {
        quote: {
          es: '«Entra para adentro antes de que comience el aguacero.»',
          hy: '«Ներս մտիր ներս՝ նախքան տեղատարափի սկսվելը։»',
        },
        analysis: {
          es: 'En el habla coloquial es redundancia; en un personaje literario rústico refleja urgencia y espontaneidad.',
          hy: 'Խոսակցականում անհարկի ավելորդություն է, իսկ գեղարվեստական կերպարի խոսքում արտացոլում է հրատապություն։',
        },
      },
      {
        quote: {
          es: '«Grité con mi voz quebrada al ver el fuego.»',
          hy: '«Գոռացի իմ կոտրված ձայնով՝ կրակը տեսնելով։»',
        },
        analysis: {
          es: 'Gritar con la voz es pleonasmo enfatizador del desespero.',
          hy: 'Ձայնով գոռալը պլեոնազմ է, որն ընդգծում է հուսահատությունը։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Redundancia vulgar / Vicio del lenguaje',
        difference: {
          es: 'La redundancia descuidada es un error gramatical involuntario («subir arriba», «bajar abajo»). El pleonasmo literario es una decisión artística deliberada para emocionar o enfatizar («llorar de los ojos»).',
          hy: 'Անփույթ ավելորդաբանությունը (redundancia) պատահական քերականական սխալ է (օր.՝ «վերև բարձրանալ», «ներքև իջնել»), իսկ գրական պլեոնազմը գիտակցված արվեստի հնար է՝ հույզը խորացնելու համար («աչքերով լացել»)։',
        },
        trick: {
          es: 'Si aporta emoción poética o fuerza testimonial en un verso, es pleonasmo.',
          hy: 'Եթե տողի մեջ այն հաղորդում է բանաստեղծական հույզ կամ վկայական ուժ, ուրեմն պլեոնազմ է։',
        },
      },
    ],
    examMistakes: [
      {
        es: 'No digas en el examen que todo pleonasmo es "un fallo gramatical". En literatura es un recurso retórico reconocido y valioso.',
        hy: 'Քննությանը մի՛ ասա, որ ցանկացած պլեոնազմ «քերականական սխալ» է։ Գրականության մեջ այն ճանաչված և արժեքավոր գեղարվեստական միջոց է։',
      },
    ],
    practicalRule: {
      es: 'Pleonasmo = Redundancia voluntaria para añadir fuerza o emoción («lo vi con mis ojos»).',
      hy: 'Պլեոնազմ = Գիտակցված ավելորդություն՝ ուժ կամ հույզ հաղորդելու համար («աչքերովս տեսա»)։',
    },
  },

  // --- NIVEL SEMÁNTICO ---
  {
    id: 'metafora',
    name: { es: 'Metáfora', hy: 'Փոխաբերություն (Մետաֆորա)' },
    level: 'semántico',
    levelName: { es: 'Nivel semántico (significados e imágenes)', hy: 'Իմաստային մակարդակ (իմաստներ և պատկերներ)' },
    shortDesc: {
      es: 'Identificación de un término real (A) con uno imaginario o figurado (B) por su semejanza.',
      hy: 'Իրական տարրի (A) նույնացում պատկերավոր/երևակայական տարրի (B) հետ՝ նմանության հիման վրա։',
    },
    fullDefinition: {
      es: 'La metáfora es la reina de las figuras literarias y consiste en identificar un elemento real (A) con un elemento figurado o imaginario (B), entre los cuales existe una relación objetiva o subjetiva de semejanza. A diferencia del símil o comparación, la metáfora NO utiliza nexos comparativos como «como», «parece» o «cual», sino que funde directamente ambos términos en uno solo.',
      hy: 'Փոխաբերությունը գեղարվեստական միջոցների «թագուհին» է և կայանում է իրական տարրի (A) նույնացման մեջ պատկերավոր կամ երևակայական տարրի (B) հետ, որոնց միջև առկա է օբյեկտիվ կամ սուբյեկտիվ նմանություն։ Ի տարբերություն համեմատության (símil)՝ փոխաբերությունը ՉԻ օգտագործում համեմատական կապեր («ինչպես», «կարծես», «como», «parece»), այլ ուղղակիորեն միաձուլում է երկու հասկացությունները։',
    },
    howToIdentify: [
      {
        es: '1. Localiza el término real (A): de qué se está hablando en la realidad (los dientes, los ojos, el pelo, el río, el tiempo).',
        hy: '1. Գտիր իրական տարրը (A). ինչի՞ մասին է խոսքն իրականում (ատամներ, աչքեր, մազեր, գետ, ժամանակ)։',
      },
      {
        es: '2. Localiza el término figurado o imaginario (B): con qué elemento bello, poético o sorprendente se asocia (perlas, luceros, oro, camino, hilo).',
        hy: '2. Գտիր պատկերավոր տարրը (B). ո՞ր գեղեցիկ, բանաստեղծական կամ զարմանալի առարկայի հետ է այն կապվում (մարգարիտներ, աստղեր, ոսկի, ճանապարհ)։',
      },
      {
        es: '3. Identifica la relación de semejanza: ¿por qué los compara? (por el color blanco, el brillo, la forma, la fluidez).',
        hy: '3. Որոշիր նմանության կապը. ինչո՞ւ է նմանեցնում (սպիտակ գույնի, փայլի, ձևի, թե՞ հոսունության պատճառով)։',
      },
      {
        es: '4. Clasifica la estructura: ¿Aparecen A y B con el verbo ser (A es B)? ¿Aparece solo B porque A está implícito (B)? ¿O se unen con la preposición de (B de A)?',
        hy: '4. Դասակարգիր կառուցվածքը. հայտնվո՞ւմ են արդյոք A-ն և B-ն «լինել» բայի միջոցով (A es B), հայտնվո՞ւմ է միայն B-ն, որովհետև A-ն ենթադրվում է համատեքստից (B), թե՞ միանում են «de» նախդիրով (B de A)։',
      },
    ],
    examples: [
      {
        quote: {
          es: '«Tus ojos son estrellas que alumbran mi camino.» (Estructura: A es B)',
          hy: '«Քո աչքերը աստղեր են, որոնք լուսավորում են իմ ճանապարհը։» (Կառուցվածք. A es B)',
        },
        analysis: {
          es: 'Término real A: "Tus ojos". Término figurado B: "estrellas". Estructura: A es B. Semejanza: el brillo y la luz que orientan en la oscuridad.',
          hy: 'Իրական տարր A. «Աչքերդ»: Պատկերավոր տարր B. «աստղեր»: Կառուցվածք. A es B: Նմանություն. փայլը և լույսը, որոնք առաջնորդում են խավարում։',
        },
        acousticOrSemanticNote: {
          es: 'Metáfora impura o explícita: ambos términos (ojos y estrellas) están visibles en el texto.',
          hy: 'Բացահայտ փոխաբերություն. երկու տարրերն էլ (աչքեր և աստղեր) տեսանելի են տեքստում։',
        },
      },
      {
        quote: {
          es: '«Dos luceros me miraban con infinita tristeza.» (Estructura: B pura)',
          hy: '«Երկու լուսատուներ նայում էին ինձ անհուն տխրությամբ։» (Կառուցվածք. B մաքուր)',
        },
        analysis: {
          es: 'Término figurado B: "Dos luceros". Término real A: los ojos (está IMPLÍCITO y se deduce porque "miran"). Estructura: B pura.',
          hy: 'Պատկերավոր տարր B. «Երկու լուսատուներ»: Իրական տարր A. աչքերը (ԵՆԹԱԴՐՎՈՒՄ Է, քանի որ նրանք «նայում են»): Կառուցվածք. B (մաքուր փոխաբերություն)։',
        },
        acousticOrSemanticNote: {
          es: 'IMPORTANTE: En la metáfora pura B, el lector debe deducir el término real A a partir de las pistas del contexto.',
          hy: 'ԿԱՐԵՎՈՐ. Մաքուր B փոխաբերության դեպքում ընթերցողը պետք է կռահի իրական A տարրը համատեքստի հուշումներից։',
        },
      },
      {
        quote: {
          es: '«El oro de su cabello brillaba bajo el sol de mediodía.» (Estructura: B de A)',
          hy: '«Նրա մազերի ոսկին շողում էր կեսօրվա արևի տակ։» (Կառուցվածք. B de A)',
        },
        analysis: {
          es: 'Término figurado B: "El oro". Término real A: "su cabello". Unión sintáctica con "de" (B de A). Semejanza: el color rubio y el resplandor precioso.',
          hy: 'Պատկերավոր տարր B. «Ոսկին»: Իրական տարր A. «նրա մազերը»: Շարահյուսական կապ «de» նախդիրով (B de A): Նմանություն. շեկ գույնը և թանկարժեք փայլը։',
        },
      },
      {
        quote: {
          es: '«Las perlas de tu boca asomaban al sonreír.» (Estructura: B de A)',
          hy: '«Բերանիդ մարգարիտները երևում էին ժպտալիս։» (Կառուցվածք. B de A)',
        },
        analysis: {
          es: 'B: perlas / A: los dientes (en la boca). Semejanza: blancura, brillo y forma pulida.',
          hy: 'B. մարգարիտներ / A. ատամները (բերանում): Նմանություն. սպիտակություն, փայլ և հղկված տեսք։',
        },
      },
      {
        quote: {
          es: '«Nuestras vidas son los ríos que van a dar en la mar...» (Estructura: A es B)',
          hy: '«Մեր կյանքերը գետեր են, որոնք հոսում են դեպի ծովը...» (Կառուցվածք. A es B)',
        },
        authorOrContext: 'Jorge Manrique',
        analysis: {
          es: 'A: vidas / B: ríos. Semejanza: el curso continuo del agua que avanza sin detenerse hacia su final.',
          hy: 'A. կյանքեր / B. գետեր: Նմանություն. ջրի անընդհատ հոսքը, որն առանց կանգնելու գնում է դեպի իր ավարտը։',
        },
      },
      {
        quote: {
          es: '«El manto blanco del invierno cubrió toda la montaña.» (Estructura: B de A)',
          hy: '«Ձմռան սպիտակ թիկնոցը ծածկեց ողջ լեռը։» (Կառուցվածք. B de A)',
        },
        analysis: {
          es: 'B: manto blanco / A implícito: la nieve que cae en invierno. Semejanza: cubre la tierra como una vestidura gruesa.',
          hy: 'B. սպիտակ թիկնոց / A. ձյունը, որ տեղում է ձմռանը: Նմանություն. ծածկում է երկիրը ինչպես հաստ վերնազգեստ։',
        },
      },
      {
        quote: {
          es: '«La guitarra es un pozo con viento en vez de agua.» (Estructura: A es B)',
          hy: '«Կիթառը մի ջրհոր է՝ ջրի փոխարեն քամիով։» (Կառուցվածք. A es B)',
        },
        authorOrContext: 'Gerardo Diego',
        analysis: {
          es: 'A: la guitarra / B: un pozo. Semejanza: la boca circular hueca y profunda por donde brota el sonido vibrante.',
          hy: 'A. կիթառը / B. ջրհորը: Նմանություն. կլոր, խորը անցքը, որտեղից բխում է թրթռացող հնչյունը։',
        },
      },
      {
        quote: {
          es: '«Una lluvia de aplausos inundó el teatro al caer el telón.»',
          hy: '«Ծափահարությունների անձրևը ողողեց թատրոնը վարագույրն իջնելիս։»',
        },
        analysis: {
          es: 'B: lluvia / A: aplausos (B de A). Semejanza: la abundancia, densidad y caída continua del sonido.',
          hy: 'B. անձրև / A. ծափահարություններ: Նմանություն. առատությունը, խտությունը և ձայնի անընդհատ տեղալը։',
        },
      },
      {
        quote: {
          es: '«El algodón del cielo flotaba plácidamente al atardecer.»',
          hy: '«Երկնքի բամբակը հանդարտորեն լողում էր մայրամուտին։»',
        },
        analysis: {
          es: 'B: algodón / A implícito: las nubes blancas. Semejanza: textura esponjosa y blancura ligera.',
          hy: 'B. բամբակ / A ենթադրյալ. սպիտակ ամպերը: Նմանություն. փափուկ տեսքը և թեթև սպիտակությունը։',
        },
      },
      {
        quote: {
          es: '«Su corazón de hierro no se conmovió ante el llanto.» (Estructura: A de B / B atributivo)',
          hy: '«Նրա երկաթե սիրտը չհուզվեց լացից։»',
        },
        analysis: {
          es: 'A: corazón / B: hierro. Semejanza: la dureza, frialdad e insensibilidad del metal aplicada al sentimiento.',
          hy: 'A. սիրտ / B. երկաթ: Նմանություն. մետաղի կարծրությունը, սառնությունը և անզգայությունը՝ վերագրված զգացմունքին։',
        },
      },
    ],
    similarFiguresComparison: [
      {
        comparedWith: 'Símil o comparación',
        difference: {
          es: 'El símil mantiene los dos términos SEPARADOS mediante un nexo comparativo explícito: «Tus ojos son COMO estrellas» o «brillan CUAL luceros». La metáfora los IDENTIFICA sin nexo: «Tus ojos SON estrellas» o directamente «Los dos luceros me miraban».',
          hy: 'Համեմատությունը (símil) պահպանում է երկու տարրերն ԱՌԱՆՁԻՆ՝ բացահայտ համեմատական կապով. «Աչքերդ ԱՍԵՍ աստղեր լինեն» կամ «brillan COMO luceros»: Փոխաբերությունը (metáfora) ՆՈՒՅՆԱՑՆՈՒՄ Է դրանք առանց այդպիսի կապի. «Աչքերդ աստղեր են» կամ ուղղակի «Երկու լուսատուներ նայում էին ինձ»։',
        },
        trick: {
          es: '¿Lleva «como», «cual» o «parece»? Es SÍMIL. ¿No lleva ningún nexo comparativo y dice directamente que una cosa es la otra? Es METÁFORA.',
          hy: 'Կա՞ «como» (ինչպես), «parece» (թվում է) կամ «cual»։ Ուրեմն ՀԱՄԵՄԱՏՈՒԹՅՈՒՆ Է (símil)։ Չկա՞ ոչ մի այդպիսի կապ, և ուղղակի ասվում է, որ մի բանը մյուսն է։ Ուրեմն ՓՈԽԱԲԵՐՈՒԹՅՈՒՆ Է (metáfora)։',
        },
      },
    ],
    examMistakes: [
      {
        es: '¡El error más grave en 1.º de ESO! No confundas jamás metáfora con símil. Si ves la palabra «como», NUNCA marques metáfora.',
        hy: 'Ամենալուրջ սխալը 1-ին ESO-ում։ Երբեք մի՛ շփոթիր փոխաբերությունը համեմատության հետ։ Եթե տեսնում ես «como» (ինչպես) բառը, ԵՐԲԵՔ փոխաբերություն չնշես։',
      },
      {
        es: 'En la metáfora pura («los luceros me miraban»), no digas que el elemento figurado son los ojos. El figurado son los «luceros» y el real son los «ojos».',
        hy: 'Մաքուր փոխաբերության մեջ («los luceros me miraban») չասես, թե պատկերավոր տարրը աչքերն են։ Պատկերավորը «luceros»-ն է (լուսատուները), իսկ իրականը՝ «ojos»-ը (աչքերը)։',
      },
    ],
    practicalRule: {
      es: 'Metáfora = A es B, B de A, o solo B (sin nexos de comparación como "como").',
      hy: 'Փոխաբերություն = A es B, B de A, կամ միայն B (առանց "como" համեմատական կապի)։',
    },
  },
];
