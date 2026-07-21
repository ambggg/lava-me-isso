import { whatsappCartaxoLink, whatsappSantaremLink } from "./config";

// Texto simples (sem JSX) — usado tanto para mostrar a FAQ como para o schema FAQPage.
type PlainFaqItem = { question: string; answer: string };

export type LocationData = {
  slug: "santarem" | "cartaxo";
  city: string;
  preposition: "em" | "no"; // "Lavandaria em Santarém" vs "Lavandaria no Cartaxo"
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
    "Lavandaria em Santarém com recolha e entrega ao domicílio em 72h. Saco de 7kg por 15€. Pede a tua recolha no WhatsApp.",
  ogTitle: "Lavandaria em Santarém — lava-me isso.",
  ogDescription: "Recolhemos, lavamos e entregamos a tua roupa em Santarém, sem saíres de casa.",
  whatsappLink: whatsappSantaremLink,
  whatsappEvent: "cta_whatsapp_santarem",
  intro: [
    "Se vives ou trabalhas em Santarém, sabes bem como é difícil arranjar tempo para tratar da roupa entre o trabalho, a família e o resto da vida. A lava-me isso. nasceu precisamente para tirar essa tarefa da tua lista — recolhemos a roupa suja à tua porta, lavamos, secamos e, se quiseres, passamos a ferro, devolvendo tudo pronto a arrumar sem teres de sair de casa nem uma vez.",
    "Servimos toda a cidade de Santarém, do centro histórico — Sé, Marvila, Alcáçova — até às freguesias mais afastadas, como Alcanede, Pernes, Vale de Santarém, Achete ou Alcanhões. Se moras perto do Instituto Politécnico de Santarém ou trabalhas na zona do Hospital Distrital, também te vimos buscar a roupa sem problema — combinamos sempre o dia e a hora que te dão mais jeito, incluindo ao fim do dia ou ao fim de semana.",
    "Como funciona na prática? Mandas-nos uma mensagem no WhatsApp a dizer a tua morada em Santarém e o dia ideal para a recolha. Aparecemos à hora combinada, levamos o saco de roupa e, em 72 horas, devolvemos tudo lavado, seco e dobrado — ou engomado, se pediste esse serviço. Pagas por MBWay, transferência ou numerário na entrega, sem complicações.",
    "Um saco de 7kg custa 15€, com recolha e entrega já incluídas no preço — sem surpresas nem taxas escondidas. Se tiveres peças delicadas ou que precisem de cuidado especial, diz-nos no WhatsApp antes da recolha: separamos cores, usamos água fria quando é preciso e seguimos sempre as etiquetas.",
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
      title: "Devolvemos em 72h",
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
      question: "Qual é o prazo de entrega em Santarém?",
      answer: "72h a contar da recolha, tal como no resto da zona que servimos. Muitas vezes conseguimos ser mais rápidos.",
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
    "Lavandaria no Cartaxo com recolha e entrega ao domicílio em 72h. Saco de 7kg por 15€. Pede a tua recolha no WhatsApp.",
  ogTitle: "Lavandaria no Cartaxo — lava-me isso.",
  ogDescription: "Recolhemos, lavamos e entregamos a tua roupa no Cartaxo, sem saíres de casa.",
  whatsappLink: whatsappCartaxoLink,
  whatsappEvent: "cta_whatsapp_cartaxo",
  intro: [
    "O Cartaxo é conhecido pelo vinho e pela vida tranquila — mas isso não significa que sobre tempo para tratar da roupa suja. A lava-me isso. leva a lavandaria até à tua porta: recolhemos, lavamos, secamos e, se quiseres, passamos a ferro, devolvendo tudo pronto a vestir em 72 horas, sem teres de sair de casa.",
    "Servimos o Cartaxo e as freguesias da União de Freguesias do Cartaxo e Vale da Pinta, além de Ereira, Pontével, Valada e Vila Chã de Ourique. Se vives perto do centro, da zona da estação ou mais para os lados das quintas e adegas da região, combinamos sempre a recolha para a hora que te dá mais jeito.",
    "O processo é simples: manda-nos mensagem no WhatsApp com a tua morada no Cartaxo e o dia ideal. Vamos buscar o saco de roupa suja à porta, tratamos de tudo e devolvemos lavado, seco e dobrado — ou engomado — em 72h. Pagamento por MBWay, transferência ou numerário na entrega, o que for mais prático para ti.",
    "Um saco de 7kg custa 15€, já com recolha e entrega incluídas — sem surpresas na conta final. Se tiveres peças delicadas ou que precisem de cuidado especial, avisa-nos no WhatsApp antes da recolha: separamos cores, usamos água fria quando é preciso e seguimos sempre as etiquetas de lavagem.",
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
      title: "Devolvemos em 72h",
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
      question: "Qual é o prazo de entrega no Cartaxo?",
      answer: "72h a contar da recolha, tal como em Santarém. Muitas vezes conseguimos entregar mais depressa.",
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
