import { Logo } from "./Logo";
import { WhatsappButton } from "./WhatsappButton";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__inner container">
        <Logo variant="light" className="hero__logo" />
        <p className="badge">📍 Santarém · Cartaxo</p>
        <h1 className="hero__title">A tua roupa lavada, seca e dobrada.</h1>
        <p className="hero__subtitle">Recolhemos. Lavamos. Entregamos. Simples.</p>
        <WhatsappButton location="hero" className="btn btn--primary btn--large">
          Agendar Recolha 🧺
        </WhatsappButton>
        <p className="hero__note">Entregamos em 72h · Sem compromisso</p>
      </div>
    </header>
  );
}
