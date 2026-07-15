import { WhatsappButton } from "./WhatsappButton";

export function FinalCta() {
  return (
    <section className="section section--cta" aria-labelledby="cta-final-title">
      <div className="container">
        <h2 id="cta-final-title" className="section__title">
          Pronto para despachar a roupa suja?
        </h2>
        <p className="section__subtitle">Manda mensagem. Combinamos tudo.</p>
        <WhatsappButton location="cta-final" className="btn btn--primary btn--large">
          Agendar Recolha 🧺
        </WhatsappButton>
      </div>
    </section>
  );
}
