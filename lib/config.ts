const WHATSAPP_NUMBER = "351910675457";

export function buildWhatsappLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsapp = {
  number: WHATSAPP_NUMBER,
  message: "Olá! Vi o site e quero agendar uma recolha 🧺",
};

export const whatsappLink = buildWhatsappLink(whatsapp.message);

// Mensagem própria para a página /empresas — permite distinguir o canal B2B do B2C.
export const whatsappB2B = {
  number: WHATSAPP_NUMBER,
  message: "Olá! Tenho um negócio e quero uma proposta B2B 🧺",
};

export const whatsappB2BLink = buildWhatsappLink(whatsappB2B.message);

// Mensagens próprias por página de SEO local — atribuição de canal em separado.
export const whatsappSantaremLink = buildWhatsappLink(
  "Olá! Vi a página de Santarém e quero agendar uma recolha 🧺"
);

export const whatsappCartaxoLink = buildWhatsappLink(
  "Olá! Vi a página do Cartaxo e quero agendar uma recolha 🧺"
);

export const whatsappEngomadoriaLink = buildWhatsappLink(
  "Olá! Quero saber mais sobre a engomadoria 🧺"
);

export const whatsappBlogLink = buildWhatsappLink("Olá! Li o artigo no site e quero saber mais 🧺");

export const nap = {
  name: "lava-me isso.",
  telephone: "+351910675457",
  telephoneDisplay: "910 675 457",
  areas: ["Santarém", "Cartaxo"],
};

export const site = {
  name: "lava-me isso.",
  url: "https://lavameisso.pt",
  title: "Lavandaria com recolha e entrega ao domicílio | Santarém e Cartaxo | lava-me isso.",
  description:
    "Lavandaria em Santarém e Cartaxo com recolha e entrega ao domicílio em 72h. Manda uma mensagem no WhatsApp e nós tratamos da tua roupa — lavada, seca e dobrada.",
};
