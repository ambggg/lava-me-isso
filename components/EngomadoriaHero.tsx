import { Logo } from "./Logo";
import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { whatsappEngomadoriaLink } from "@/lib/config";

export function EngomadoriaHero() {
  return (
    <header className="hero">
      <div className="hero__inner container">
        <Logo variant="light" className="hero__logo" />
        <p className="badge">📍 Santarém · Cartaxo</p>
        <h1 className="hero__title">Engomadoria ao domicílio em Santarém, Cartaxo, Azambuja e Lisboa Oriente</h1>
        <p className="hero__subtitle">
          Camisas prontas a vestir, cabide incluído. Recolhemos, engomamos e entregamos à tua
          porta.
        </p>
        <WhatsappCustomButton
          href={whatsappEngomadoriaLink}
          event="cta_whatsapp_engomadoria"
          location="hero"
          className="btn btn--primary btn--large"
        >
          Pedir Engomadoria 🧺
        </WhatsappCustomButton>
        <p className="hero__note">Recolha e entrega incluídas</p>
      </div>
    </header>
  );
}
