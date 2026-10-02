import { FaqList, type FaqItem } from "./FaqList";
import { FaqCta } from "./FaqCta";
import { whatsappEngomadoriaLink } from "@/lib/config";

export const engomadoriaFaqs: (FaqItem & { answer: string })[] = [
  {
    question: "Quanto custa passar uma camisa a ferro?",
    answer: "2,50€ por camisa, com IVA incluído, entregue em cabide — pronta a pendurar no armário.",
    link: { href: "#precos-engomadoria", label: "Ver preços da engomadoria" },
  },
  {
    question: "Só fazem camisas ou também outras peças?",
    answer:
      "Passamos a ferro qualquer peça — calças, vestidos, lençóis, toalhas, fardas. Manda-nos a lista no WhatsApp e dizemos-te o preço.",
  },
  {
    question: "Têm um serviço que inclua lavar, secar e passar?",
    answer:
      "Sim. O serviço Lavar + Secar + Passar a Ferro custa 29€ + IVA por saco de 8kg, com recolha e entrega incluídas. Clientes com recolha todos os meses não pagam IVA.",
    link: { href: "#precos-engomadoria", label: "Ver preços" },
  },
  {
    question: "Passam a ferro lençóis e toalhas?",
    answer:
      "Sim, é dos pedidos que mais recebemos de famílias. Lençóis e toalhas vão no Saco Casa, lavados à parte da roupa do dia-a-dia, passados a ferro e dobrados. O Saco Casa custa desde 15€ + IVA; com passagem a ferro, o preço depende das peças — manda-nos mensagem e dizemos-te logo.",
    link: { href: "#precos-engomadoria", label: "Ver o Saco Casa nos preços" },
  },
  {
    question: "Preciso de entregar a roupa já lavada?",
    answer:
      "Não. Se a roupa já estiver lavada, o serviço Só Passar a Ferro custa 27€ + IVA por saco de 8kg. Se quiseres lavar e passar, tratamos de tudo desde a lavagem por 29€ + IVA.",
  },
  {
    question: "Quando recebo a roupa engomada?",
    answer: "Combinamos a data de entrega contigo logo quando marcamos a recolha. Camisas e vestidos voltam em cabide, o resto dobrado.",
  },
  {
    question: "Em que zonas fazem engomadoria ao domicílio?",
    answer:
      "Em Santarém, Cartaxo, Azambuja e Lisboa Oriente (Parque das Nações, Olivais Norte, Moscavide, Portela e Sacavém). Combina o dia e a hora no WhatsApp.",
    link: { href: "#zonas", label: "Ver zonas servidas" },
  },
  {
    question: "Fazem engomadoria para empresas e alojamento local?",
    answer:
      "Sim. Passamos a ferro lençóis, toalhas, fardas e camisas para negócios, com recolhas em dias fixos e faturação mensal.",
    link: { href: "/empresas", label: "Ver lavandaria para empresas" },
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
        <FaqCta href={whatsappEngomadoriaLink} event="cta_whatsapp_engomadoria" />
      </div>
    </section>
  );
}
