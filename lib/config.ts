export const whatsapp = {
  number: "351910675457",
  message: "Olá! Vi o site e quero agendar uma recolha 🧺",
};

export const whatsappLink = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
  whatsapp.message
)}`;

export const site = {
  name: "lava-me isso.",
  url: "https://lavameisso.pt",
  title: "Lavandaria com recolha e entrega ao domicílio | Santarém e Cartaxo | lava-me isso.",
  description:
    "Lavandaria em Santarém e Cartaxo com recolha e entrega ao domicílio em 72h. Manda uma mensagem no WhatsApp e nós tratamos da tua roupa — lavada, seca e dobrada.",
};
