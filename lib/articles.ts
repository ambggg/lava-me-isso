export type ArticleBlock = { type: "heading" | "paragraph"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  status: "draft" | "published";
  blocks: ArticleBlock[];
};

/**
 * RASCUNHO — por rever por humanos antes de publicar.
 * Enquanto status for "draft": fica fora do sitemap, do /dicas (listagem)
 * e da indexação (noindex), mas continua acessível pelo URL direto para revisão.
 */
const quantoCustaLavarUmEdredao: Article = {
  slug: "quanto-custa-lavar-um-edredao",
  title: "Quanto custa lavar um edredão? (E porque é que a máquina lá de casa não chega)",
  excerpt:
    "Porque é que os edredões nunca saem bem lavados na máquina de casa — e quanto custa mandá-los lavar como deve ser.",
  metaTitle: "Quanto Custa Lavar um Edredão? | lava-me isso.",
  metaDescription:
    "Descobre porque é que a máquina de casa não lava bem um edredão e quanto custa mandá-lo lavar numa lavandaria em Santarém ou no Cartaxo.",
  publishedAt: "2026-07-21",
  status: "draft",
  blocks: [
    {
      type: "paragraph",
      text: "Se já tentaste meter um edredão de casal na máquina de casa, já sabes o problema: ou não cabe, ou cabe mas sai da lavagem ainda com sabão lá dentro, ou pior — a máquina desequilibra-se toda e passas a lavagem a ouvir aquele barulho de quem está prestes a avariar. Não é impressão tua. É mesmo assim.",
    },
    {
      type: "heading",
      text: "Porque é que a máquina lá de casa não chega",
    },
    {
      type: "paragraph",
      text: "As máquinas domésticas normais têm tambores entre 6kg e 9kg de capacidade — e isso é peso de roupa seca. Um edredão de casal, com o enchimento todo, pode pesar 3 a 4kg seco, mas ocupa um volume enorme dentro do tambor. Quando fica encharcado de água, esse peso praticamente duplica ou triplica, e a máquina simplesmente não tem força de centrifugação nem espaço para fazer o trabalho como deve ser.",
    },
    {
      type: "paragraph",
      text: "O resultado mais comum é um edredão que sai da máquina com o enchimento todo amontoado numa ponta, zonas por lavar no meio, e detergente que nunca chegou a ser completamente enxaguado — o que, para quem tem alergias ou pele sensível, não é nada agradável.",
    },
    {
      type: "heading",
      text: "O que muda numa lavandaria",
    },
    {
      type: "paragraph",
      text: "As máquinas industriais que usamos têm tambores muito maiores — entre 15kg e 25kg, dependendo do equipamento — e uma capacidade de centrifugação bastante superior. O edredão tem espaço para \"respirar\" dentro do tambor: a água e o detergente circulam por todo o enchimento, não só pelas bordas. A secagem final também fica muito mais eficiente, sem aquele cheiro a húmido que às vezes fica depois de secar um edredão grande em casa (ou pior, no estendal, onde pode levar dias).",
    },
    {
      type: "heading",
      text: "Quanto custa lavar um edredão connosco",
    },
    {
      type: "paragraph",
      text: "Um edredão de casal cabe confortavelmente num saco de 7kg quando pesado seco — o nosso preço de 15€ por saco (recolha e entrega incluídas) aplica-se na mesma. Se tiveres um edredão maior (super king, ou com enchimento extra grosso de inverno), pode ocupar mais do que um saco. Nesse caso, é só avisares-nos no WhatsApp com as medidas ou o peso aproximado, e dizemos-te logo se precisas de um saco extra.",
    },
    {
      type: "paragraph",
      text: "Não achamos justo cobrar um preço \"especial para edredões\" só porque é um item maior — o que importa é o peso e o espaço que ocupa, tal como qualquer outra peça de roupa.",
    },
    {
      type: "heading",
      text: "Cuidados que temos com edredões",
    },
    {
      type: "paragraph",
      text: "Edredões costumam ter etiquetas específicas — água fria, sem branqueador, secagem a baixa temperatura — e seguimos sempre essas indicações à risca. Se o teu edredão tiver algum cuidado especial (penas naturais, por exemplo, que precisam de um processo mais lento de secagem para não apodrecerem por dentro), diz-nos antes da recolha e ajustamos o processo.",
    },
    {
      type: "heading",
      text: "E os cobertores, mantas e almofadões?",
    },
    {
      type: "paragraph",
      text: "A mesma lógica aplica-se a cobertores grandes, mantas pesadas de lã e almofadões de sofá — tudo o que não cabe bem na máquina de casa, cabe (e sai muito melhor) numa lavagem industrial. Se tiveres dúvidas sobre se algo cabe num saco de 7kg ou precisa de mais espaço, é mais fácil perguntares-nos diretamente do que tentar adivinhar.",
    },
    {
      type: "heading",
      text: "Com que frequência se deve lavar um edredão?",
    },
    {
      type: "paragraph",
      text: "Ao contrário dos lençóis, que idealmente se lavam todas as semanas, um edredão (o enchimento, não a capa) aguenta bem duas a três lavagens por ano, desde que uses sempre uma capa por cima. A capa é que protege o edredão do suor, da pele morta e do pó — e é essa capa que deve ser lavada com regularidade, como o resto da roupa de cama. Ainda assim, vale a pena lavar o edredão a fundo pelo menos uma vez por estação, especialmente antes de o guardar no verão ou de o tirar do armário no inverno, para não ficar com cheiro a fechado.",
    },
    {
      type: "heading",
      text: "Resumindo",
    },
    {
      type: "paragraph",
      text: "Se o teu edredão já passou dos tempos em que a máquina de casa dava conta do recado — ou nunca deu, sejamos sinceros — não precisas de o levar a lado nenhum. Manda-nos mensagem, combinamos a recolha em Santarém ou no Cartaxo, e devolvemos-to lavado a sério, seco por completo e pronto para a cama, em 72 horas.",
    },
  ],
};

export const articles: Article[] = [quantoCustaLavarUmEdredao];

export const publishedArticles = articles.filter((article) => article.status === "published");

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
