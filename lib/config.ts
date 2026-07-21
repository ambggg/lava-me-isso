export const whatsapp = {
  number: "351910675457",
  message: "Olá! Vi o site e quero agendar uma recolha 🧺",
};

export const whatsappLink = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
  whatsapp.message
)}`;

// Mensagem própria para a página /empresas — permite distinguir o canal B2B do B2C.
export const whatsappB2B = {
  number: "351910675457",
  message: "Olá! Tenho um negócio e quero uma proposta B2B 🧺",
};

export const whatsappB2BLink = `https://wa.me/${whatsappB2B.number}?text=${encodeURIComponent(
  whatsappB2B.message
)}`;

export const site = {
  name: "lava-me isso.",
  url: "https://lavameisso.pt",
  title: "Lavandaria com recolha e entrega ao domicílio | Santarém e Cartaxo | lava-me isso.",
  description:
    "Lavandaria em Santarém e Cartaxo com recolha e entrega ao domicílio em 72h. Manda uma mensagem no WhatsApp e nós tratamos da tua roupa — lavada, seca e dobrada.",
};
