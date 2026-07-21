import { WhatsappB2BButton } from "./WhatsappB2BButton";

export function WhatsappB2BFloat() {
  return (
    <WhatsappB2BButton
      location="floating-b2b"
      className="whatsapp-float"
      ariaLabel="Pedir proposta B2B no WhatsApp"
    >
      <span aria-hidden="true">🧺</span> Pedir Proposta
    </WhatsappB2BButton>
  );
}
