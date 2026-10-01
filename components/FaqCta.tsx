import { WhatsappCustomButton } from "./WhatsappCustomButton";

type FaqCtaProps = {
  href: string;
  event: string;
};

/** Fecho das perguntas frequentes: quem ainda tem dúvidas fala connosco no WhatsApp. */
export function FaqCta({ href, event }: FaqCtaProps) {
  return (
    <div className="faq-cta">
      <div className="faq-cta__text">
        <p className="faq-cta__title">Ainda tens dúvidas?</p>
        <p className="faq-cta__lead">Pergunta-nos no WhatsApp. Respondemos nós, não um robô.</p>
      </div>
      <WhatsappCustomButton href={href} event={event} location="faq" className="btn btn--primary btn--small faq-cta__btn">
        Perguntar no WhatsApp
      </WhatsappCustomButton>
    </div>
  );
}
