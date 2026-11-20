import { media } from './site'

const sharedNavigation = [
  { target: 'historia' },
  { target: 'cozinha' },
  { target: 'galeria' },
  { target: 'visite' }
]

export const supportedLocales = ['pt', 'en']

export const translations = {
  pt: {
    meta: {
      lang: 'pt-BR',
      title: 'Onafã — Cozinha desterrada',
      description: 'Onafã: cozinha desterrada, da serra para a mesa.'
    },
    language: {
      selector: 'Selecionar idioma',
      options: [
        { code: 'pt', short: 'PT', label: 'Português' },
        { code: 'en', short: 'EN', label: 'English' }
      ]
    },
    a11y: {
      logo: 'Onafã — cozinha desterrada',
      goHome: 'Ir para o início',
      primaryNavigation: 'Navegação principal',
      openNavigation: 'Abrir navegação',
      closeNavigation: 'Fechar navegação',
      mobileNavigation: 'Navegação em dispositivos móveis',
      reservation: 'Reservar uma mesa'
    },
    navigation: sharedNavigation.map((item, index) => ({
      ...item,
      label: ['A casa', 'A cozinha', 'Galeria', 'Visite'][index]
    })),
    header: {
      reserve: 'Reservar'
    },
    hero: {
      location: 'Teresópolis, RJ · Brasil',
      kicker: 'Cozinha desterrada',
      statement: ['Uma mesa sem fronteiras,', 'com os pés na serra.'],
      reserve: 'Reservar uma mesa',
      explore: 'Conheça a cozinha',
      noteBefore: 'Onafã vem de ',
      noteAfter: ': estamos com fome.',
      imageAlt: 'Fachada da casa Onafã em Teresópolis',
      caption: 'Uma casa para chegar, demorar e partilhar.',
      scrollCue: 'Desça para descobrir'
    },
    story: {
      eyebrow: 'A casa',
      title: ['Do mundo,', 'até a serra.'],
      imageAlt: 'Interior aconchegante da casa Onafã',
      caption: 'Uma casa antiga, muitos lugares à mesa.',
      lead: 'O Onafã nasce do apetite por encontros: uma cozinha viajante, feita aqui, com curiosidade pelo que existe além.',
      paragraphs: [
        'Trabalhamos próximos de quem cultiva, produz e transforma a região. As referências chegam de longe, os ingredientes encontram a estação e cada prato ganha o seu próprio caminho.',
        'Chamamos isso de cozinha desterrada: livre para atravessar memórias, técnicas e territórios — sem perder de vista a mesa que está diante de nós.'
      ],
      term: 'cozinha desterrada',
      sound: '[koˈzi.ɲɐ des.teˈʁa.dɐ]',
      definition: 'Uma cozinha que viaja para criar novos lugares de pertencimento.'
    },
    menu: {
      eyebrow: 'A cozinha',
      title: ['Sem fronteiras.', 'Com intenção.'],
      intro: 'A carta acompanha o tempo, a colheita e a vontade de dividir. Aqui está um pequeno mapa do que move a nossa mesa.',
      footer: 'O menu muda. A vontade de receber, não.',
      chapters: [
        {
          id: 'partilhar',
          label: 'Para partilhar',
          number: '01',
          title: 'O começo é um convite para ficar.',
          body: 'Pequenos pratos, pão na mesa e ingredientes que pedem conversa. A chegada tem o ritmo da casa: sem pressa, para abrir o apetite e a noite.',
          notes: ['Pratos para o centro da mesa', 'Produtos de temporada', 'Combinações que mudam com a semana'],
          image: media.smallPlates,
          alt: 'Prato compartilhável servido em louça escura'
        },
        {
          id: 'travessias',
          label: 'Travessias',
          number: '02',
          title: 'Receitas que carregam mais de um lugar.',
          body: 'A cozinha desterrada encontra referências de viagem, técnica e memória para criar pratos livres de fronteiras — mas sempre atentos ao que a serra oferece agora.',
          notes: ['Fogo, acidez e profundidade', 'Produtores e artesãos locais', 'Uma carta em movimento'],
          image: media.ember,
          alt: 'Prato quente com ingredientes dourados'
        },
        {
          id: 'terminar',
          label: 'Para terminar',
          number: '03',
          title: 'Uma última pausa antes de ir.',
          body: 'Doces, cafés e uma boa mesa prolongam o encontro. Deixe espaço para a sobremesa e para a vontade de voltar.',
          notes: ['Doçura sem exagero', 'Café para alongar a conversa', 'Uma despedida que fica na memória'],
          image: media.dessert,
          alt: 'Sobremesa de chocolate apresentada em prato'
        }
      ]
    },
    gallery: {
      eyebrow: 'Momentos',
      title: ['O que acontece', 'entre uma garfada e outra.'],
      intro: 'Ingredientes, texturas, tempo à mesa. Uma coleção de detalhes que contam a história de cada encontro.',
      expandImage: 'Ampliar imagem',
      closeImage: 'Fechar imagem ampliada',
      images: [
        { id: 'table', src: media.table, alt: 'Mesa com pratos coloridos e ingredientes variados', label: 'Mesa farta', layout: 'tall' },
        { id: 'tart', src: media.tart, alt: 'Pequeno prato colorido sobre mesa de madeira', label: 'Pequenos gestos', layout: 'small' },
        { id: 'interior', src: media.interior, alt: 'Canto iluminado da casa com janelas e almofadas', label: 'Dentro da casa', layout: 'portrait' },
        { id: 'spread', src: media.spread, alt: 'Prato servido para compartilhar', label: 'Ao centro', layout: 'wide' },
        { id: 'market', src: media.market, alt: 'Prato com ingredientes frescos e coloridos', label: 'Estação', layout: 'small' },
        { id: 'toast', src: media.toast, alt: 'Torrada com acompanhamentos frescos', label: 'Texturas', layout: 'small' }
      ]
    },
    visit: {
      eyebrow: 'Visite',
      title: ['A mesa está', 'em Teresópolis.'],
      intro: 'Venha com fome e tempo. Para informações sobre a carta e os horários da semana, fale com a gente pelo WhatsApp.',
      addressLabel: 'Endereço',
      maps: 'Abrir no Maps',
      reservationsLabel: 'Reservas',
      reservationsCopy: ['Escolha uma data e conte', 'como imagina o seu encontro.'],
      reserve: 'Planejar uma visita'
    },
    footer: {
      tagline: 'cozinha desterrada',
      home: 'Início',
      directions: 'Como chegar',
      reserve: 'Reservar',
      note: 'Do mundo até Teresópolis, e de volta à mesa.'
    },
    reservation: {
      eyebrow: 'Reserva',
      close: 'Fechar reserva',
      title: ['Vamos guardar', 'um lugar para você.'],
      intro: 'Conte o essencial. Você será levado ao WhatsApp para confirmar os detalhes com a equipe.',
      name: 'Seu nome',
      date: 'Data desejada',
      guests: 'Pessoas',
      notes: 'Há algo que devemos saber?',
      guestOptions: ['1 pessoa', '2 pessoas', '3 pessoas', '4 pessoas', '5 pessoas', '6 ou mais pessoas'],
      validation: {
        name: 'Digite seu nome',
        guests: 'Escolha o número de pessoas'
      },
      submit: 'Continuar no WhatsApp',
      whatsapp: {
        greeting: 'Olá, gostaria de consultar disponibilidade para uma reserva no Onafã.',
        name: 'Nome',
        date: 'Data desejada',
        guests: 'Pessoas',
        notes: 'Observações'
      }
    }
  },
  en: {
    meta: {
      lang: 'en',
      title: 'Onafã — Cuisine without borders',
      description: 'Onafã: cuisine without borders, from the mountains to the table.'
    },
    language: {
      selector: 'Select language',
      options: [
        { code: 'pt', short: 'PT', label: 'Português' },
        { code: 'en', short: 'EN', label: 'English' }
      ]
    },
    a11y: {
      logo: 'Onafã — cuisine without borders',
      goHome: 'Go to the top',
      primaryNavigation: 'Primary navigation',
      openNavigation: 'Open navigation',
      closeNavigation: 'Close navigation',
      mobileNavigation: 'Mobile navigation',
      reservation: 'Book a table'
    },
    navigation: sharedNavigation.map((item, index) => ({
      ...item,
      label: ['The house', 'The kitchen', 'Gallery', 'Visit'][index]
    })),
    header: {
      reserve: 'Book'
    },
    hero: {
      location: 'Teresópolis, RJ · Brazil',
      kicker: 'Cuisine without borders',
      statement: ['A table without borders,', 'rooted in the mountains.'],
      reserve: 'Book a table',
      explore: 'Discover the kitchen',
      noteBefore: 'Onafã comes from ',
      noteAfter: ': we are hungry.',
      imageAlt: 'The Onafã house in Teresópolis',
      caption: 'A house to arrive, linger and share.',
      scrollCue: 'Scroll to discover'
    },
    story: {
      eyebrow: 'The house',
      title: ['From the world,', 'to the mountains.'],
      imageAlt: 'A welcoming corner inside the Onafã house',
      caption: 'An old house, many places at the table.',
      lead: 'Onafã was born from an appetite for gathering: a travelling kitchen, made here, and curious about what lies beyond.',
      paragraphs: [
        'We work closely with the people who grow, make and transform this region. References come from afar, ingredients follow the season, and every dish finds its own path.',
        'We call it unrooted cuisine: free to move through memories, techniques and places — while keeping our eyes on the table before us.'
      ],
      term: 'unrooted cuisine',
      sound: '[an-ˈrü-təd kwə-ˈzēn]',
      definition: 'A cuisine that travels to create new places of belonging.'
    },
    menu: {
      eyebrow: 'The kitchen',
      title: ['No borders.', 'With intention.'],
      intro: 'The menu follows the weather, the harvest and the desire to share. Here is a small map of what moves our table.',
      footer: 'The menu changes. Our desire to welcome does not.',
      chapters: [
        {
          id: 'partilhar',
          label: 'For the table',
          number: '01',
          title: 'The first course is an invitation to stay.',
          body: 'Small plates, bread on the table and ingredients that invite conversation. Arrival moves at the house pace: unhurried, opening the appetite and the evening.',
          notes: ['Plates for the centre of the table', 'Seasonal produce', 'Pairings that change with the week'],
          image: media.smallPlates,
          alt: 'A shareable dish served on dark ceramics'
        },
        {
          id: 'travessias',
          label: 'Journeys',
          number: '02',
          title: 'Recipes that carry more than one place.',
          body: 'Our unrooted cuisine brings together travel, technique and memory to make dishes without borders — always attentive to what the mountains offer now.',
          notes: ['Fire, brightness and depth', 'Local producers and makers', 'A menu in motion'],
          image: media.ember,
          alt: 'A warm dish with golden ingredients'
        },
        {
          id: 'terminar',
          label: 'To finish',
          number: '03',
          title: 'One last pause before you go.',
          body: 'Desserts, coffee and a good table extend the gathering. Leave room for something sweet and the desire to return.',
          notes: ['Sweetness without excess', 'Coffee to extend the conversation', 'A farewell that stays with you'],
          image: media.dessert,
          alt: 'A chocolate dessert on a plate'
        }
      ]
    },
    gallery: {
      eyebrow: 'Moments',
      title: ['What happens', 'between one bite and the next.'],
      intro: 'Ingredients, textures, time at the table. A collection of details that tells the story of each gathering.',
      expandImage: 'Expand image',
      closeImage: 'Close enlarged image',
      images: [
        { id: 'table', src: media.table, alt: 'A table of colourful dishes and assorted ingredients', label: 'An abundant table', layout: 'tall' },
        { id: 'tart', src: media.tart, alt: 'A small colourful dish on a wooden table', label: 'Small gestures', layout: 'small' },
        { id: 'interior', src: media.interior, alt: 'A bright corner of the house with windows and cushions', label: 'Inside the house', layout: 'portrait' },
        { id: 'spread', src: media.spread, alt: 'A dish served to share', label: 'At the centre', layout: 'wide' },
        { id: 'market', src: media.market, alt: 'A dish with fresh colourful ingredients', label: 'The season', layout: 'small' },
        { id: 'toast', src: media.toast, alt: 'Toast with fresh accompaniments', label: 'Textures', layout: 'small' }
      ]
    },
    visit: {
      eyebrow: 'Visit',
      title: ['The table is', 'in Teresópolis.'],
      intro: 'Come hungry and with time. For this week’s menu and opening hours, talk to us on WhatsApp.',
      addressLabel: 'Address',
      maps: 'Open in Maps',
      reservationsLabel: 'Reservations',
      reservationsCopy: ['Choose a date and tell us', 'how you imagine your gathering.'],
      reserve: 'Plan a visit'
    },
    footer: {
      tagline: 'cuisine without borders',
      home: 'Top',
      directions: 'Directions',
      reserve: 'Book',
      note: 'From the world to Teresópolis, and back to the table.'
    },
    reservation: {
      eyebrow: 'Reservation',
      close: 'Close reservation',
      title: ["We'll save", 'a place for you.'],
      intro: 'Share the essentials. You will be taken to WhatsApp to confirm the details with our team.',
      name: 'Your name',
      date: 'Preferred date',
      guests: 'Guests',
      notes: 'Is there anything we should know?',
      guestOptions: ['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', '6 or more guests'],
      validation: {
        name: 'Enter your name',
        guests: 'Choose the number of guests'
      },
      submit: 'Continue on WhatsApp',
      whatsapp: {
        greeting: 'Hello, I would like to check availability for a reservation at Onafã.',
        name: 'Name',
        date: 'Preferred date',
        guests: 'Guests',
        notes: 'Notes'
      }
    }
  }
}
