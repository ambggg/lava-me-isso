/**
 * reviews.ts — mensagens reais de clientes recebidas no WhatsApp.
 * Copiar o texto tal como o cliente o escreveu (ortografia e emojis incluídos).
 * Nunca incluir telefones, emails, NIF, comprovativos de pagamento ou fotos.
 * Só publicar com autorização do cliente.
 */

export type ReviewMessage =
  | { kind: "in"; text: string; time: string } // mensagem do cliente
  | { kind: "out"; text: string; time: string } // resposta da lava-me isso.
  | { kind: "date"; text: string } // separador de data
  | { kind: "sticker"; text: string }; // autocolante (texto do autocolante)

export type ReviewConversation = {
  id: string;
  name: string;
  initial: string;
  who: string;
  day: string;
  hook: string;
  messages: ReviewMessage[];
};

export const reviewConversations: ReviewConversation[] = [
  {
    id: "carla",
    name: "Carla",
    initial: "C",
    who: "Spa - Santarém",
    day: "24 set 2026",
    hook: "“As toalhas estavam super fofinhas”",
    messages: [
      { kind: "date", text: "24 de setembro de 2026" },
      { kind: "in", text: "Ola bom dia, espero que estejam bem", time: "10:07" },
      {
        kind: "in",
        text: "Adorei o vosso serviço. As toalhas estavam super fofinhas e muito suaves. Muito obrigada🥰",
        time: "10:08",
      },
      { kind: "out", text: "Viva Carla, muito obrigado pelo feedback 🙏", time: "10:09" },
      { kind: "in", text: "Qual a vossa disponibilidade?", time: "10:10" },
    ],
  },
  {
    id: "ermelindo",
    name: "Ermelindo",
    initial: "E",
    who: "Cliente",
    day: "22 set 2026",
    hook: "“O serviço está 💫💫💫💫💫”",
    messages: [
      { kind: "in", text: "Olá.\nBoa noite!!", time: "21:28" },
      { kind: "in", text: "O serviço está 💫💫💫💫💫", time: "21:28" },
      { kind: "in", text: "Mt obrigado", time: "21:28" },
      { kind: "sticker", text: "Gostei muito do vosso trabalho" },
    ],
  },
  {
    id: "catia",
    name: "Cátia",
    initial: "C",
    who: "Cliente",
    day: "ago 2026",
    hook: "“Está tudo impecável”",
    messages: [
      { kind: "in", text: "Obrigada. Está tudo impecável", time: "11:47" },
      { kind: "in", text: "Podemos combinar recolha dia 9 de setembro?", time: "11:48" },
      { kind: "date", text: "31 de agosto de 2026" },
      {
        kind: "out",
        text: "Boa tarde srª Cátia, obrigada a si😊! Fico mesmo feliz que tenha gostado do nosso serviço, agendamos então para dia 9 de setembro.",
        time: "12:48",
      },
    ],
  },
];
