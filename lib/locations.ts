import { whatsappAzambujaLink, whatsappCartaxoLink, whatsappOrienteLink, whatsappSantaremLink } from "./config";

/**
 * Páginas de localidade (SEO local).
 * Regras de escrita:
 * - A palavra-chave principal é "lavandaria em/no/na <zona>"; as secundárias são
 *   "lavandaria ao domicílio", "passar a ferro / engomadoria", "lençóis e toalhas", "preço".
 * - Cada página tem texto próprio (marcos e freguesias da zona) para não haver conteúdo duplicado.
 * - Preços sempre "+ IVA" e oferta de IVA a clientes mensais.
 * - Tom profissional: processo, cuidado, prazos e fatura — nada de "pequena equipa".
 */

// Texto simples (sem JSX) — usado tanto para mostrar a FAQ como para o schema FAQPage.
type PlainFaqItem = { question: string; answer: string; link?: { href: string; label: string } };

export type LocationSection = { heading: string; paragraphs: string[] };

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
  sections: LocationSection[];
  areas: string[];
  faqs: PlainFaqItem[];
};

// Parágrafos comuns sobre o processo — escritos uma vez, iguais em todas as zonas.
const PROCESS_PARAGRAPH =
  "Cada cliente tem o seu saco e cada saco é lavado e seco num ciclo próprio: a tua roupa nunca se mistura com a de outros clientes. Separamos brancos e cores, seguimos as etiquetas de lavagem e lavamos lençóis e toalhas à parte, no Saco Casa. Combinamos a data de entrega logo na recolha e passamos fatura com NIF sempre que pedires.";

function priceFaq(where: string): PlainFaqItem {
  return {
    question: `Quanto custa a lavandaria ${where}?`,
    answer:
      "Um saco de 8kg custa 15€ + IVA para lavar, secar e dobrar, ou 29€ + IVA para lavar, secar e passar a ferro. A recolha e a entrega estão incluídas e os clientes com recolha todos os meses não pagam IVA.",
    link: { href: "#precos", label: "Ver todos os preços" },
  };
}

function ironingFaq(where: string): PlainFaqItem {
  return {
    question: `Também passam a ferro ${where}?`,
    answer:
      "Sim. Com o serviço Lavar + Secar + Passar a Ferro (29€ + IVA por saco de 8kg) a roupa volta pronta a vestir. Também engomamos camisas avulsas a 3€ + IVA, com cabide incluído.",
    link: { href: "/engomadoria", label: "Ver o serviço de engomadoria" },
  };
}

const SHEETS_FAQ: PlainFaqItem = {
  question: "Também lavam lençóis, toalhas e edredões?",
  answer:
    "Sim. Lençóis e toalhas vão no Saco Casa, lavado à parte da roupa do dia-a-dia. Edredões e cobertores tratamos à parte: manda-nos o tamanho no WhatsApp e dizemos-te o preço.",
  link: { href: "#sacos", label: "Conhecer o Saco Casa" },
};

const FAMILY_FAQ: PlainFaqItem = {
  question: "O serviço dá para a roupa de uma família grande?",
  answer:
    "Sim. Podes encher vários sacos de 8kg de uma vez: cada saco é lavado num ciclo próprio e volta dobrado. Para famílias com muita roupa, a recolha todos os meses compensa — oferecemos o IVA.",
  link: { href: "#precos", label: "Ver preços" },
};

const BUSINESS_ANSWER =
  "Sim. Temos um serviço próprio para negócios, com recolhas em dias fixos e faturação mensal. Consulta a nossa página para empresas ou fala connosco no WhatsApp.";

export const santarem: LocationData = {
  slug: "santarem",
  city: "Santarém",
  preposition: "em",
  h1: "Lavandaria em Santarém com recolha e entrega ao domicílio",
  metaTitle: "Lavandaria em Santarém com Recolha ao Domicílio | lava-me isso.",
  metaDescription:
    "Lavandaria em Santarém com recolha e entrega à porta. Lavar e dobrar desde 15€ + IVA, lavar e passar a ferro 29€ + IVA. Pede a recolha no WhatsApp.",
  ogTitle: "Lavandaria em Santarém — lava-me isso.",
  ogDescription: "Recolhemos, lavamos, passamos a ferro e entregamos a tua roupa em Santarém, sem saíres de casa.",
  whatsappLink: whatsappSantaremLink,
  whatsappEvent: "cta_whatsapp_santarem",
  sections: [
    {
      heading: "Lavandaria ao domicílio em Santarém",
      paragraphs: [
        "A lava-me isso. é uma lavandaria com recolha e entrega ao domicílio em Santarém. Vamos buscar a roupa à tua porta, lavamos, secamos, passamos a ferro se quiseres e devolvemos tudo dobrado, pronto a arrumar. Sem filas, sem horários de loja e sem fins de semana perdidos com a roupa.",
        "Servimos toda a cidade de Santarém, do centro histórico — Sé, Marvila e Alcáçova — às freguesias à volta, como Alcanede, Pernes, Vale de Santarém, Achete, Alcanhões, Abrã e Póvoa de Santarém. Seja no centro, perto do Hospital Distrital ou numa aldeia do concelho, recolhemos no dia e hora que combinarmos.",
      ],
    },
    {
      heading: "Lavar e passar a ferro em Santarém: como funciona e quanto custa",
      paragraphs: [
        "Mandas-nos mensagem no WhatsApp com a tua morada em Santarém. Levamos-te os sacos lava-me isso. e marcamos a data da recolha. Enches o Saco Roupa com a roupa do dia-a-dia e o Saco Casa com lençóis e toalhas; nós recolhemos, tratamos de tudo e entregamos no dia combinado. Pagas na entrega, por MBWay, transferência ou numerário.",
        "Um saco de 8kg custa 15€ + IVA para lavar, secar e dobrar, ou 29€ + IVA com passagem a ferro, com a recolha e a entrega já incluídas. Se fores cliente com recolha todos os meses, oferecemos o IVA. Para camisas, a engomadoria avulsa custa 3€ + IVA por peça, com cabide.",
      ],
    },
    {
      heading: "Uma lavandaria profissional em Santarém, para casas e empresas",
      paragraphs: [
        PROCESS_PARAGRAPH,
        "Também trabalhamos com alojamento local, ginásios, spas e outros negócios de Santarém, com recolhas em dias fixos e faturação mensal. Toalhas, lençóis e têxteis tratados com o mesmo cuidado, todas as semanas, sem teres de pensar nisso.",
      ],
    },
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
  faqs: [
    priceFaq("em Santarém"),
    ironingFaq("em Santarém"),
    {
      question: "Entregam em toda a cidade de Santarém, incluindo o centro histórico?",
      answer:
        "Sim. Cobrimos o centro histórico (Sé, Marvila, Alcáçova) e as freguesias à volta, como Alcanede, Pernes, Vale de Santarém e Alcanhões. Manda a tua morada no WhatsApp e confirmamos na hora.",
      link: { href: "#zonas", label: "Ver zonas servidas" },
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
    FAMILY_FAQ,
    SHEETS_FAQ,
    {
      question: "Trabalham com alojamento local, ginásios ou spas em Santarém?",
      answer: BUSINESS_ANSWER,
      link: { href: "/empresas", label: "Ver lavandaria para empresas" },
    },
  ],
};

export const cartaxo: LocationData = {
  slug: "cartaxo",
  city: "Cartaxo",
  preposition: "no",
  h1: "Lavandaria no Cartaxo com recolha e entrega ao domicílio",
  metaTitle: "Lavandaria no Cartaxo com Recolha ao Domicílio | lava-me isso.",
  metaDescription:
    "Lavandaria no Cartaxo com recolha e entrega à porta. Lavar e dobrar desde 15€ + IVA, lavar e passar a ferro 29€ + IVA. Pede a recolha no WhatsApp.",
  ogTitle: "Lavandaria no Cartaxo — lava-me isso.",
  ogDescription: "Recolhemos, lavamos, passamos a ferro e entregamos a tua roupa no Cartaxo, sem saíres de casa.",
  whatsappLink: whatsappCartaxoLink,
  whatsappEvent: "cta_whatsapp_cartaxo",
  sections: [
    {
      heading: "Lavandaria ao domicílio no Cartaxo",
      paragraphs: [
        "A lava-me isso. é uma lavandaria com recolha e entrega ao domicílio no Cartaxo. Vamos buscar a roupa a casa, lavamos, secamos, passamos a ferro se quiseres e devolvemos tudo dobrado, pronto a vestir ou a arrumar — sem teres de sair de casa.",
        "Servimos o Cartaxo e Vale da Pinta, Ereira, Pontével, Valada e Vila Chã de Ourique. Do centro e da zona da estação às quintas e adegas mais afastadas, combinamos a recolha para o dia e a hora que te dão jeito.",
      ],
    },
    {
      heading: "Lavar e passar a ferro no Cartaxo: como funciona e quanto custa",
      paragraphs: [
        "Mandas-nos mensagem no WhatsApp com a tua morada no Cartaxo. Levamos-te os sacos lava-me isso. e marcamos a data da recolha. Enches o Saco Roupa com a roupa do dia-a-dia e o Saco Casa com lençóis e toalhas; nós recolhemos, tratamos de tudo e entregamos no dia combinado. Pagas na entrega, por MBWay, transferência ou numerário.",
        "Um saco de 8kg custa 15€ + IVA para lavar, secar e dobrar, ou 29€ + IVA com passagem a ferro, já com recolha e entrega incluídas. Clientes com recolha todos os meses não pagam IVA. Camisas avulsas engomadas a 3€ + IVA por peça, com cabide.",
      ],
    },
    {
      heading: "Uma lavandaria profissional no Cartaxo, para casas, quintas e empresas",
      paragraphs: [
        PROCESS_PARAGRAPH,
        "Para quintas, adegas, alojamento local e outros negócios do concelho, temos recolhas em dias fixos e faturação mensal: toalhas, fardas e têxteis tratados todas as semanas, sem teres de pensar na lavandaria.",
      ],
    },
  ],
  areas: [
    "Cartaxo (centro e zona da estação)",
    "Vale da Pinta",
    "Ereira",
    "Pontével",
    "Valada",
    "Vila Chã de Ourique",
  ],
  faqs: [
    priceFaq("no Cartaxo"),
    ironingFaq("no Cartaxo"),
    {
      question: "Entregam em toda a vila do Cartaxo e freguesias à volta?",
      answer:
        "Sim. Cobrimos o Cartaxo, Vale da Pinta, Ereira, Pontével, Valada e Vila Chã de Ourique. Confirma a tua morada no WhatsApp e dizemos-te logo se está dentro da rota.",
      link: { href: "#zonas", label: "Ver zonas servidas" },
    },
    {
      question: "Quando recebo a roupa de volta no Cartaxo?",
      answer: "Combinamos a data de entrega contigo logo no dia da recolha, tal como em Santarém.",
    },
    {
      question: "Fazem recolha em casas mais afastadas do centro do Cartaxo?",
      answer:
        "Sim, desde que estejamos a passar na rota nesse dia. Pergunta-nos a tua zona exata e confirmamos rapidamente.",
    },
    SHEETS_FAQ,
    FAMILY_FAQ,
    {
      question: "Trabalham com as quintas e adegas da região?",
      answer:
        "Sim — tratamos de toalhas, fardas e têxteis para negócios ligados ao turismo e ao vinho na zona, com recolhas fixas e faturação mensal. Fala connosco para um plano à medida.",
      link: { href: "/empresas", label: "Ver lavandaria para empresas" },
    },
  ],
};

export const lisboaOriente: LocationData = {
  slug: "lisboa-oriente",
  city: "Lisboa Oriente",
  preposition: "em",
  h1: "Lavandaria em Lisboa Oriente com recolha e entrega ao domicílio",
  metaTitle: "Lavandaria no Parque das Nações e Lisboa Oriente | lava-me isso.",
  metaDescription:
    "Lavandaria ao domicílio no Parque das Nações, Olivais, Moscavide, Portela e Sacavém. Desde 15€ + IVA, passar a ferro 29€ + IVA. Pede no WhatsApp.",
  ogTitle: "Lavandaria em Lisboa Oriente — lava-me isso.",
  ogDescription:
    "Recolhemos, lavamos, passamos a ferro e entregamos a tua roupa no Parque das Nações, Olivais Norte, Moscavide, Portela e Sacavém.",
  whatsappLink: whatsappOrienteLink,
  whatsappEvent: "cta_whatsapp_oriente",
  sections: [
    {
      heading: "Lavandaria ao domicílio no Parque das Nações e Lisboa Oriente",
      paragraphs: [
        "A lava-me isso. é uma lavandaria com recolha e entrega ao domicílio em Lisboa Oriente. Deixamos-te os sacos, recolhemos a roupa à porta, lavamos, secamos, passamos a ferro se quiseres e devolvemos tudo dobrado — sem idas à lavandaria entre o trabalho e o resto da semana.",
        "Servimos o Parque das Nações, do Oriente à zona norte junto ao Parque Tejo, e as zonas à volta: Olivais Norte, Moscavide, Portela e Sacavém. Se vives perto da Gare do Oriente ou trabalhas num dos escritórios da zona, combinamos a recolha para o dia e a hora que te dão jeito.",
      ],
    },
    {
      heading: "Lavar e passar a ferro em Lisboa Oriente: como funciona e quanto custa",
      paragraphs: [
        "Mandas-nos mensagem no WhatsApp com a tua morada. Levamos-te os sacos lava-me isso. e marcamos a data da recolha. Enches o Saco Roupa com a roupa do dia-a-dia e o Saco Casa com lençóis e toalhas; nós recolhemos, tratamos de tudo e entregamos no dia combinado. Pagas na entrega, por MBWay, transferência ou numerário.",
        "Um saco de 8kg custa 15€ + IVA para lavar, secar e dobrar, ou 29€ + IVA com passagem a ferro, com recolha e entrega incluídas. Clientes com recolha todos os meses não pagam IVA. Camisas avulsas engomadas a 3€ + IVA por peça, com cabide — prontas para a semana de escritório.",
      ],
    },
    {
      heading: "Uma lavandaria profissional em Lisboa Oriente, para casas e empresas",
      paragraphs: [
        PROCESS_PARAGRAPH,
        "Para alojamento local, ginásios, escritórios e outros negócios do Parque das Nações e arredores, temos recolhas em dias fixos e faturação mensal — roupa de cama e toalhas sempre prontas para a próxima reserva.",
      ],
    },
  ],
  areas: ["Parque das Nações", "Olivais Norte", "Moscavide", "Portela", "Sacavém"],
  faqs: [
    priceFaq("em Lisboa Oriente"),
    ironingFaq("no Parque das Nações"),
    {
      question: "Que zonas de Lisboa Oriente servem?",
      answer:
        "Parque das Nações, Olivais Norte, Moscavide, Portela e Sacavém. Manda a tua morada no WhatsApp e confirmamos na hora se está dentro da rota.",
      link: { href: "#zonas", label: "Ver zonas servidas" },
    },
    {
      question: "Quando recebo a roupa de volta?",
      answer: "Combinamos a data de entrega contigo logo quando marcamos a recolha.",
    },
    SHEETS_FAQ,
    FAMILY_FAQ,
    {
      question: "Como posso pagar?",
      answer: "MBWay, transferência ou numerário na entrega. Passamos fatura com NIF sempre que pedires.",
    },
    {
      question: "Trabalham com alojamento local no Parque das Nações?",
      answer: BUSINESS_ANSWER,
      link: { href: "/empresas", label: "Ver lavandaria para empresas" },
    },
  ],
};

export const azambuja: LocationData = {
  slug: "azambuja",
  city: "Azambuja",
  preposition: "na",
  h1: "Lavandaria na Azambuja com recolha e entrega ao domicílio",
  metaTitle: "Lavandaria na Azambuja com Recolha ao Domicílio | lava-me isso.",
  metaDescription:
    "Lavandaria na Azambuja com recolha e entrega à porta. Lavar e dobrar desde 15€ + IVA, lavar e passar a ferro 29€ + IVA. Pede a recolha no WhatsApp.",
  ogTitle: "Lavandaria na Azambuja — lava-me isso.",
  ogDescription: "Recolhemos, lavamos, passamos a ferro e entregamos a tua roupa na Azambuja, sem saíres de casa.",
  whatsappLink: whatsappAzambujaLink,
  whatsappEvent: "cta_whatsapp_azambuja",
  sections: [
    {
      heading: "Lavandaria ao domicílio na Azambuja",
      paragraphs: [
        "A lava-me isso. é uma lavandaria com recolha e entrega ao domicílio na Azambuja. Entre o comboio para Lisboa, o trabalho e a família, deixa a roupa connosco: recolhemos à porta, lavamos, secamos, passamos a ferro se quiseres e devolvemos tudo dobrado.",
        "Servimos a vila da Azambuja e as freguesias à volta — Aveiras de Cima, Aveiras de Baixo, Vila Nova da Rainha, Vale do Paraíso e Alcoentre. Perto da estação, no centro ou mais para os lados das quintas, combinamos a recolha para o dia e a hora que te dão jeito.",
      ],
    },
    {
      heading: "Lavar e passar a ferro na Azambuja: como funciona e quanto custa",
      paragraphs: [
        "Mandas-nos mensagem no WhatsApp com a tua morada na Azambuja. Levamos-te os sacos lava-me isso. e marcamos a data da recolha. Enches o Saco Roupa com a roupa do dia-a-dia e o Saco Casa com lençóis e toalhas; nós recolhemos, tratamos de tudo e entregamos no dia combinado. Pagas na entrega, por MBWay, transferência ou numerário.",
        "Um saco de 8kg custa 15€ + IVA para lavar, secar e dobrar, ou 29€ + IVA com passagem a ferro, com recolha e entrega incluídas. Clientes com recolha todos os meses não pagam IVA. Camisas avulsas engomadas a 3€ + IVA por peça, com cabide.",
      ],
    },
    {
      heading: "Uma lavandaria profissional na Azambuja, para casas e empresas",
      paragraphs: [
        PROCESS_PARAGRAPH,
        "Para alojamento local, ginásios, empresas e outros negócios da Azambuja, temos recolhas em dias fixos e faturação mensal: toalhas, fardas e roupa de cama tratadas todas as semanas, sem teres de pensar na lavandaria.",
      ],
    },
  ],
  areas: [
    "Azambuja (vila)",
    "Aveiras de Cima",
    "Aveiras de Baixo",
    "Vila Nova da Rainha",
    "Vale do Paraíso",
    "Alcoentre",
  ],
  faqs: [
    priceFaq("na Azambuja"),
    ironingFaq("na Azambuja"),
    {
      question: "Que zonas da Azambuja servem?",
      answer:
        "A vila da Azambuja e as freguesias à volta, como Aveiras de Cima, Aveiras de Baixo, Vila Nova da Rainha, Vale do Paraíso e Alcoentre. Manda a tua morada no WhatsApp e confirmamos na hora se está dentro da rota.",
      link: { href: "#zonas", label: "Ver zonas servidas" },
    },
    {
      question: "Quando recebo a roupa de volta?",
      answer: "Combinamos a data de entrega contigo logo quando marcamos a recolha.",
    },
    SHEETS_FAQ,
    FAMILY_FAQ,
    {
      question: "Como posso pagar?",
      answer: "MBWay, transferência ou numerário na entrega. Passamos fatura com NIF sempre que pedires.",
    },
    {
      question: "Trabalham com empresas e alojamento local na Azambuja?",
      answer: BUSINESS_ANSWER,
      link: { href: "/empresas", label: "Ver lavandaria para empresas" },
    },
  ],
};

// Todas as páginas de localidade — usado no bloco "Também estamos em".
export const allLocations: LocationData[] = [santarem, cartaxo, azambuja, lisboaOriente];
