import { JsonLd } from "./JsonLd";
import { buildFaqPageSchema } from "@/lib/schema";

const faqs = [
  {
    question: "A que zonas fazem entregas?",
    answer: "Santarém, Cartaxo e freguesias próximas. Manda a morada no WhatsApp e confirmamos na hora.",
    schemaAnswer: "Santarém, Cartaxo e freguesias próximas. Manda a morada no WhatsApp e confirmamos na hora.",
  },
  {
    question: "Qual a diferença entre os serviços?",
    answer: (
      <>
        <strong>Lavar + Secar:</strong> roupa limpa, seca e dobrada.{" "}
        <strong>Lavar + Secar + Ferro:</strong> também sai pronta a vestir e arrumar.{" "}
        <strong>Só Ferro:</strong> já tens a roupa lavada, só falta passar.
      </>
    ),
    // Versão em texto simples, só para o schema FAQPage (que não aceita JSX).
    schemaAnswer:
      "Lavar + Secar: roupa limpa, seca e dobrada. Lavar + Secar + Ferro: também sai pronta a vestir e arrumar. Só Ferro: já tens a roupa lavada, só falta passar.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer: "72h a contar da recolha. Muitas vezes é mais rápido.",
    schemaAnswer: "72h a contar da recolha. Muitas vezes é mais rápido.",
  },
  {
    question: "Como posso pagar?",
    answer: "MBWay, transferência ou numerário na entrega. À tua escolha.",
    schemaAnswer: "MBWay, transferência ou numerário na entrega. À tua escolha.",
  },
  {
    question: "O que cabe num saco de 7kg?",
    answer:
      "Aproximadamente 25 a 40 peças de roupa — t-shirts, calças, camisolas, roupa interior, toalhas. Dá para a roupa suja de uma semana.",
    schemaAnswer:
      "Aproximadamente 25 a 40 peças de roupa — t-shirts, calças, camisolas, roupa interior, toalhas. Dá para a roupa suja de uma semana.",
  },
  {
    question: "Fazem cuidados especiais (delicados, cores separadas)?",
    answer: "Sim. Diz no WhatsApp o que precisa de cuidado extra — separamos cores e usamos água fria para delicados.",
    schemaAnswer:
      "Sim. Diz no WhatsApp o que precisa de cuidado extra — separamos cores e usamos água fria para delicados.",
  },
];

export function Faq() {
  const faqSchema = buildFaqPageSchema(
    faqs.map((item) => ({
      question: item.question,
      answer: item.schemaAnswer,
    }))
  );

  return (
    <section className="section section--purple" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <JsonLd data={faqSchema} />
        <h2 id="faq-title" className="section__title">
          Perguntas frequentes
        </h2>

        <div className="faq">
          {faqs.map((item) => (
            <details className="faq__item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
