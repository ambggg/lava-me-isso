import { WhatsappButton } from "./WhatsappButton";

export function WhatsappFloat() {
  return (
    <WhatsappButton
      location="floating"
      className="whatsapp-float"
      ariaLabel="Agendar recolha no WhatsApp"
    >
      <span aria-hidden="true">🧺</span> Agendar Recolha
    </WhatsappButton>
  );
}
