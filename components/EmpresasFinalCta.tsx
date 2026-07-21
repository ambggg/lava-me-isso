import { WhatsappB2BButton } from "./WhatsappB2BButton";

export function EmpresasFinalCta() {
  return (
    <section className="section section--cta" aria-labelledby="cta-final-empresas-title">
      <div className="container">
        <h2 id="cta-final-empresas-title" className="section__title">
          Junta-te à lista de espera
        </h2>
        <p className="section__subtitle">Vagas limitadas por rota, por ordem de chegada.</p>
        <WhatsappB2BButton location="cta-final-b2b" className="btn btn--primary btn--large">
          Pedir Proposta no WhatsApp 🧺
        </WhatsappB2BButton>
        <p className="cta-final__note">
          Estamos a abrir vagas por rota — os primeiros da lista entram primeiro.
        </p>
      </div>
    </section>
  );
}
