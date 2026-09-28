import { whatsappAzambujaLink, whatsappCartaxoLink, whatsappOrienteLink, whatsappSantaremLink } from "./config";

// Texto simples (sem JSX) — usado tanto para mostrar a FAQ como para o schema FAQPage.
type PlainFaqItem = { question: string; answer: string };

export type LocationData = {
  slug: "santarem" | "cartaxo" | "azambuja" | "lisboa-oriente";
  city: string;
  preposition: "em" | "no" | "na"; // "Lavandaria em Santarém" / "no Cartaxo" / "na Azambuja"
  h1: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  whatsappLink: string;
  whatsappEvent: string;
  intro: string[];
  areas: string[];
  steps: { title: string; text: string }[];
  faqs: PlainFaqItem[];
};

export const santarem: LocationData = {
  slug: "santarem",
  city: "Santarém",
  preposition: "em",
  h1: "Lavandaria em Santarém com recolha e entrega ao domicílio",
  metaTitle: "Lavandaria em Santarém | Recolha e Entrega ao Domicílio",
  metaDescription:
    "Lavandaria em Santarém com recolha e entrega ao domicílio. Saco de 7kg por 15€ + IVA. Pede a tua recolha no WhatsApp.",
  ogTitle: "Lavandaria em Santarém — lava-me isso.",
  ogDescription: "Recolhemos, lavamos e entregamos a tua roupa em Santarém, sem saíres de casa.",
  whatsappLink: whatsappSantaremLink,
  whatsappEvent: "cta_whatsapp_santarem",
  intro: [
    "Se vives ou trabalhas em Santarém, sabes bem como é difícil arranjar tempo para tratar da roupa entre o trabalho, a família e o resto da vida. A lava-me isso. nasceu precisamente para tirar essa tarefa da tua lista — recolhemos a roupa suja à tua porta, lavamos, secamos e, se quiseres, passamos a ferro, devolvendo tudo pronto a arrumar sem teres de sair de casa nem uma vez.",
    "Servimos toda a cidade de Santarém, do centro histórico — Sé, Marvila, Alcáçova — até às freguesias mais afastadas, como Alcanede, Pernes, Vale de Santarém, Achete ou Alcanhões. Se moras perto do Instituto Politécnico de Santarém ou trabalhas na zona do Hospital Distrital, também te vimos buscar a roupa sem problema — combinamos sempre o dia e a hora que te dão mais jeito, incluindo ao fim do dia ou ao fim de semana.",
    "Como funciona na prática? Mandas-nos uma mensagem no WhatsApp a dizer a tua morada em Santarém e o dia ideal para a recolha. Aparecemos à hora combinada, levamos o saco de roupa e devolvemos tudo lavado, seco e dobrado — ou engomado, se pediste esse serviço. Pagas por MBWay, transferência ou numerário na entrega, sem complicações.",
    "Um saco de 7kg custa 15€ + IVA, com recolha e entrega já incluídas no preço — e, se fores cliente mensal, oferecemos o IVA. Se tiveres peças delicadas ou que precisem de cuidado especial, diz-nos no WhatsApp antes da recolha: separamos cores, usamos água fria quando é preciso e seguimos sempre as etiquetas.",
    "Somos uma equipa local, não uma marca nacional a operar à distância: conhecemos Santarém, sabemos como é o trânsito no centro à hora de almoço e adaptamo-nos à tua rotina, não o contrário. Não há máquinas anónimas nem central de atendimento — falas sempre com quem trata da tua roupa.",
    "Trabalhamos tanto com particulares como com alojamento local, restaurantes e outros negócios da cidade. Se és um destes casos, temos um serviço à parte pensado para o teu volume e para a tua faturação mensal — recolhas em dias fixos, sem teres de pensar nisso todas as semanas.",
  ],
  areas: [
    "Centro histórico (Sé, Marvila, Alcáçova)",
    "Alcanede",
    "Pernes",
    "Vale de Santarém",
    "Achete",
    "Alcanhões",
    "Abrã",
    "Póvoa de Santarém",
  ],
  steps: [
    {
      title: "Manda mensagem",
      text: "Diz-nos que estás em Santarém e qual o dia que te dá jeito.",
    },
    {
      title: "Recolhemos à porta",
      text: "Aparecemos na hora combinada, em qualquer zona da cidade.",
    },
    {
      title: "Devolvemos à porta",
      text: "Lavada, seca e dobrada — ou engomada, se pediste.",
    },
  ],
  faqs: [
    {
      question: "Entregam em toda a cidade de Santarém, incluindo o centro histórico?",
      answer:
        "Sim. Cobrimos o centro histórico (Sé, Marvila, Alcáçova) e as freguesias à volta, como Alcanede, Pernes, Vale de Santarém e Alcanhões. Manda a tua morada no WhatsApp e confirmamos na hora.",
    },
    {
      question: "Servem estudantes do Instituto Politécnico de Santarém?",
      answer:
        "Sim, com todo o gosto. Muitos estudantes deslocados usam o nosso serviço porque não têm máquina de lavar em casa ou preferem poupar tempo para estudar.",
    },
    {
      question: "Quando recebo a roupa de volta em Santarém?",
      answer: "Combinamos a data de entrega contigo logo no dia da recolha, tal como no resto da zona que servimos.",
    },
    {
      question: "Fazem recolhas ao fim de semana em Santarém?",
      answer:
        "Sim, tentamos sempre adaptar-nos ao teu horário — incluindo fins de semana, quando a rota o permite. Combina connosco no WhatsApp.",
    },
    {
      question: "Trabalham com alojamento local ou restaurantes em Santarém?",
      answer:
        "Sim — temos um serviço próprio para negócios, com recolhas fixas e faturação mensal. Consulta a nossa página para empresas.",
    },
  ],
};

export const cartaxo: LocationData = {
  slug: "cartaxo",
  city: "Cartaxo",
  preposition: "no",
  h1: "Lavandaria no Cartaxo com recolha e entrega ao domicílio",
  metaTitle: "Lavandaria no Cartaxo | Recolha e Entrega ao Domicílio",
  metaDescription:
    "Lavandaria no Cartaxo com recolha e entrega ao domicílio. Saco de 7kg por 15€ + IVA. Pede a tua recolha no WhatsApp.",
  ogTitle: "Lavandaria no Cartaxo — lava-me isso.",
  ogDescription: "Recolhemos, lavamos e entregamos a tua roupa no Cartaxo, sem saíres de casa.",
  whatsappLink: whatsappCartaxoLink,
  whatsappEvent: "cta_whatsapp_cartaxo",
  intro: [
    "O Cartaxo é conhecido pelo vinho e pela vida tranquila — mas isso não significa que sobre tempo para tratar da roupa suja. A lava-me isso. leva a lavandaria até à tua porta: recolhemos, lavamos, secamos e, se quiseres, passamos a ferro, devolvendo tudo pronto a vestir, sem teres de sair de casa.",
    "Servimos o Cartaxo e as freguesias da União de Freguesias do Cartaxo e Vale da Pinta, além de Ereira, Pontével, Valada e Vila Chã de Ourique. Se vives perto do centro, da zona da estação ou mais para os lados das quintas e adegas da região, combinamos sempre a recolha para a hora que te dá mais jeito.",
    "O processo é simples: manda-nos mensagem no WhatsApp com a tua morada no Cartaxo e o dia ideal. Vamos buscar o saco de roupa suja à porta, tratamos de tudo e devolvemos lavado, seco e dobrado — ou engomado — no dia combinado. Pagamento por MBWay, transferência ou numerário na entrega, o que for mais prático para ti.",
    "Um saco de 7kg custa 15€ + IVA, já com recolha e entrega incluídas — e, se fores cliente mensal, oferecemos o IVA. Se tiveres peças delicadas ou que precisem de cuidado especial, avisa-nos no WhatsApp antes da recolha: separamos cores, usamos água fria quando é preciso e seguimos sempre as etiquetas de lavagem.",
    "Ao contrário de uma lavandaria industrial ou de uma marca nacional, somos uma equipa pequena e local: conhecemos as ruas do Cartaxo, sabemos onde fica cada quinta e cada rua da vila, e tratamos a tua roupa com o mesmo cuidado que temos com a nossa. Falas sempre connosco, não com uma central de atendimento.",
    "Se tens um restaurante, um alojamento local ou outro negócio no Cartaxo, também temos um serviço próprio pensado para volumes maiores, com recolhas em dias fixos e fatura mensal simplificada — para não teres de pensar na lavandaria todas as semanas.",
  ],
  areas: [
    "Cartaxo (centro e zona da estação)",
    "Vale da Pinta",
    "Ereira",
    "Pontével",
    "Valada",
    "Vila Chã de Ourique",
  ],
  steps: [
    {
      title: "Manda mensagem",
      text: "Diz-nos que estás no Cartaxo e qual o dia que te dá jeito.",
    },
    {
      title: "Recolhemos à porta",
      text: "Aparecemos na hora combinada, na vila ou nas freguesias à volta.",
    },
    {
      title: "Devolvemos à porta",
      text: "Lavada, seca e dobrada — ou engomada, se pediste.",
    },
  ],
  faqs: [
    {
      question: "Entregam em toda a vila do Cartaxo e freguesias à volta?",
      answer:
        "Sim. Cobrimos o Cartaxo, Vale da Pinta, Ereira, Pontével, Valada e Vila Chã de Ourique. Confirma a tua morada no WhatsApp e dizemos-te logo se está dentro da rota.",
    },
    {
      question: "Trabalham com as quintas e adegas da região?",
      answer:
        "Sim — tratamos de toalhas, fardas e têxteis para negócios ligados ao turismo e ao vinho na zona. Fala connosco para um plano à medida.",
    },
    {
      question: "Quando recebo a roupa de volta no Cartaxo?",
      answer: "Combinamos a data de entrega contigo logo no dia da recolha, tal como em Santarém.",
    },
    {
      question: "Como faço a primeira encomenda no Cartaxo?",
      answer: "Manda mensagem no WhatsApp com a tua morada e o dia que preferes. Combinamos a recolha e é só isso.",
    },
    {
      question: "Fazem recolha em casas mais afastadas do centro do Cartaxo?",
      answer: "Sim, desde que estejamos a passar na rota nesse dia. Pergunta-nos a tua zona exata e confirmamos rapidamente.",
    },
  ],
};

export const lisboaOriente: LocationData = {
  slug: "lisboa-oriente",
  city: "Lisboa Oriente",
  preposition: "em",
  h1: "Lavandaria em Lisboa Oriente com recolha e entrega ao domicílio",
  metaTitle: "Lavandaria no Parque das Nações e Lisboa Oriente | Recolha e Entrega",
  metaDescription:
    "Lavandaria com recolha e entrega ao domicílio no Parque das Nações, Olivais Norte, Moscavide, Portela e Sacavém. Saco de 7kg por 15€ + IVA. Pede no WhatsApp.",
  ogTitle: "Lavandaria em Lisboa Oriente — lava-me isso.",
  ogDescription:
    "Recolhemos, lavamos e entregamos a tua roupa no Parque das Nações, Olivais Norte, Moscavide, Portela e Sacavém.",
  whatsappLink: whatsappOrienteLink,
  whatsappEvent: "cta_whatsapp_oriente",
  intro: [
    "Entre o trabalho, o trânsito e o resto da vida, tratar da roupa é das primeiras coisas a ficar para trás. A lava-me isso. leva a lavandaria até à tua porta em Lisboa Oriente: deixamos-te os sacos, recolhemos a roupa suja, lavamos, secamos e devolvemos tudo dobrado — sem saíres de casa.",
    "Servimos o Parque das Nações, do Oriente à zona norte junto ao Parque Tejo, e as zonas à volta: Olivais Norte, Moscavide, Portela e Sacavém. Se vives perto da Gare do Oriente ou trabalhas num dos escritórios da zona, combinamos a recolha para o dia e a hora que te dão mais jeito.",
    "Como funciona? Mandas-nos mensagem no WhatsApp com a tua morada. Levamos-te os sacos lava-me isso. e marcamos a data da recolha. Enches o Saco Roupa com a roupa do dia-a-dia e o Saco Casa com lençóis e toalhas — nós tratamos do resto. Pagas por MBWay, transferência ou numerário na entrega.",
    "Um saco de 7kg custa 15€ + IVA, com recolha e entrega já incluídas — e, se fores cliente mensal, oferecemos o IVA. Tens peças delicadas ou com manchas? Diz-nos no WhatsApp antes da recolha: separamos cores, usamos água fria quando é preciso e seguimos sempre as etiquetas de lavagem.",
    "Somos uma equipa pequena, não uma cadeia com balcões e senhas: falas sempre com quem trata da tua roupa, não com uma central de atendimento.",
    "Tens um alojamento local, um ginásio ou um escritório em Lisboa Oriente? Temos um serviço à parte para negócios, com recolhas em dias fixos e fatura mensal — para não teres de pensar na lavandaria todas as semanas.",
  ],
  areas: ["Parque das Nações", "Olivais Norte", "Moscavide", "Portela", "Sacavém"],
  steps: [
    {
      title: "Manda mensagem",
      text: "Diz-nos a tua morada em Lisboa Oriente.",
    },
    {
      title: "Recebes os sacos",
      text: "Levamos-te os sacos e marcamos o dia da recolha.",
    },
    {
      title: "Devolvemos à porta",
      text: "Lavada, seca e dobrada — lençóis e toalhas incluídos.",
    },
  ],
  faqs: [
    {
      question: "Que zonas de Lisboa Oriente servem?",
      answer:
        "Parque das Nações, Olivais Norte, Moscavide, Portela e Sacavém. Manda a tua morada no WhatsApp e confirmamos na hora se está dentro da rota.",
    },
    {
      question: "Quando recebo a roupa de volta?",
      answer: "Combinamos a data de entrega contigo logo quando marcamos a recolha.",
    },
    {
      question: "Também lavam lençóis e toalhas?",
      answer:
        "Sim. Vão no Saco Casa, que é lavado à parte da tua roupa do dia-a-dia — assim nada se mistura.",
    },
    {
      question: "Como posso pagar?",
      answer: "MBWay, transferência ou numerário na entrega. À tua escolha.",
    },
    {
      question: "Trabalham com alojamento local no Parque das Nações?",
      answer:
        "Sim — temos um serviço próprio para negócios, com recolhas fixas e faturação mensal. Consulta a nossa página para empresas.",
    },
  ],
};

export const azambuja: LocationData = {
  slug: "azambuja",
  city: "Azambuja",
  preposition: "na",
  h1: "Lavandaria na Azambuja com recolha e entrega ao domicílio",
  metaTitle: "Lavandaria na Azambuja | Recolha e Entrega ao Domicílio",
  metaDescription:
    "Lavandaria na Azambuja com recolha e entrega ao domicílio. Roupa, lençóis e toalhas. Saco de 7kg por 15€ + IVA. Pede a tua recolha no WhatsApp.",
  ogTitle: "Lavandaria na Azambuja — lava-me isso.",
  ogDescription: "Recolhemos, lavamos e entregamos a tua roupa na Azambuja, sem saíres de casa.",
  whatsappLink: whatsappAzambujaLink,
  whatsappEvent: "cta_whatsapp_azambuja",
  intro: [
    "Na Azambuja, entre o comboio para Lisboa, o trabalho e a família, o tempo para tratar da roupa é sempre o que sobra. A lava-me isso. leva a lavandaria até à tua porta: deixamos-te os sacos, recolhemos a roupa suja, lavamos, secamos e devolvemos tudo dobrado — sem saíres de casa.",
    "Servimos a vila da Azambuja e as freguesias à volta. Se vives perto da estação, no centro ou mais para os lados das quintas, combinamos a recolha para o dia e a hora que te dão mais jeito.",
    "Como funciona? Mandas-nos mensagem no WhatsApp com a tua morada. Levamos-te os sacos lava-me isso. e marcamos a data da recolha. Enches o Saco Roupa com a roupa do dia-a-dia e o Saco Casa com lençóis e toalhas — nós tratamos do resto. Pagas por MBWay, transferência ou numerário na entrega.",
    "Um saco de 7kg custa 15€ + IVA, com recolha e entrega já incluídas — e, se fores cliente mensal, oferecemos o IVA. Tens peças delicadas ou com manchas? Diz-nos no WhatsApp antes da recolha: separamos cores, usamos água fria quando é preciso e seguimos sempre as etiquetas de lavagem.",
    "Somos uma equipa pequena e local, do Ribatejo: falas sempre com quem trata da tua roupa, não com uma central de atendimento.",
    "Tens um alojamento local, um ginásio, um restaurante ou uma empresa na Azambuja? Temos um serviço à parte para negócios, com recolhas em dias fixos e fatura mensal.",
  ],
  areas: [
    "Azambuja (vila)",
    "Aveiras de Cima",
    "Aveiras de Baixo",
    "Vila Nova da Rainha",
    "Vale do Paraíso",
    "Alcoentre",
  ],
  steps: [
    {
      title: "Manda mensagem",
      text: "Diz-nos a tua morada na Azambuja.",
    },
    {
      title: "Recebes os sacos",
      text: "Levamos-te os sacos e marcamos o dia da recolha.",
    },
    {
      title: "Devolvemos à porta",
      text: "Lavada, seca e dobrada — lençóis e toalhas incluídos.",
    },
  ],
  faqs: [
    {
      question: "Que zonas da Azambuja servem?",
      answer:
        "A vila da Azambuja e as freguesias à volta, como Aveiras de Cima, Aveiras de Baixo, Vila Nova da Rainha, Vale do Paraíso e Alcoentre. Manda a tua morada no WhatsApp e confirmamos na hora se está dentro da rota.",
    },
    {
      question: "Quando recebo a roupa de volta?",
      answer: "Combinamos a data de entrega contigo logo quando marcamos a recolha.",
    },
    {
      question: "Também lavam lençóis e toalhas?",
      answer: "Sim. Vão no Saco Casa, que é lavado à parte da tua roupa do dia-a-dia — assim nada se mistura.",
    },
    {
      question: "Como posso pagar?",
      answer: "MBWay, transferência ou numerário na entrega. À tua escolha.",
    },
    {
      question: "Trabalham com empresas e alojamento local na Azambuja?",
      answer:
        "Sim — temos um serviço próprio para negócios, com recolhas fixas e faturação mensal. Consulta a nossa página para empresas.",
    },
  ],
};
