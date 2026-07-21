import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { whatsappEngomadoriaLink } from "@/lib/config";

export function EngomadoriaFinalCta() {
  return (
    <section className="section section--cta" aria-labelledby="cta-final-engomadoria-title">
      <div className="container">
        <h2 id="cta-final-engomadoria-title" className="section__title">
          Pronta a vestir, sem tocares no ferro
        </h2>
        <p className="section__subtitle">Manda mensagem. Combinamos tudo.</p>
        <WhatsappCustomButton
          href={whatsappEngomadoriaLink}
          event="cta_whatsapp_engomadoria"
          location="cta-final"
          className="btn btn--primary btn--large"
        >
          Pedir Engomadoria 🧺
        </WhatsappCustomButton>
      </div>
    </section>
  );
}
