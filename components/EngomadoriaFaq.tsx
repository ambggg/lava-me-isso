import { FaqList } from "./FaqList";

export const engomadoriaFaqs = [
  {
    question: "Quanto custa passar uma camisa a ferro?",
    answer: "3€ por camisa, já com cabide incluído — perfeita para pendurar direto no armário.",
  },
  {
    question: "Só fazem camisas ou também outras peças?",
    answer: "Fazemos qualquer peça de roupa — calças, vestidos, lençóis, toalhas. Manda-nos a lista no WhatsApp e dizemos-te o preço.",
  },
  {
    question: "Têm um pacote que inclua lavar, secar e passar?",
    answer: "Sim — o pack completo (lavar + secar + passar a ferro) custa 29€ por saco de 7kg, com recolha e entrega incluídas.",
  },
  {
    question: "Preciso de trazer a roupa já lavada?",
    answer: "Não é obrigatório. Se só precisares de passar a ferro, cobramos por peça. Se quiseres o pack completo, tratamos de tudo desde a lavagem.",
  },
  {
    question: "Fazem recolha e entrega em Santarém e no Cartaxo?",
    answer: "Sim, em toda a zona que servimos. Combina o dia e a hora no WhatsApp.",
  },
];

export function EngomadoriaFaq() {
  return (
    <section className="section section--purple" id="faq-engomadoria" aria-labelledby="faq-engomadoria-title">
      <div className="container">
        <h2 id="faq-engomadoria-title" className="section__title">
          Perguntas frequentes sobre engomadoria
        </h2>
        <FaqList items={engomadoriaFaqs} />
      </div>
    </section>
  );
}
