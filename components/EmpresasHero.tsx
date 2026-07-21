import { Logo } from "./Logo";
import { WhatsappB2BButton } from "./WhatsappB2BButton";

export function EmpresasHero() {
  return (
    <header className="hero">
      <div className="hero__inner container">
        <Logo variant="light" className="hero__logo" />
        <p className="badge">Vagas limitadas por rota · Lista de espera ativa</p>
        <h1 className="hero__title">Lavandaria para o teu negócio. Sem falhas, sem stress.</h1>
        <p className="hero__subtitle">
          Recolhas regulares, prazos garantidos e faturação mensal para alojamentos locais,
          restauração e empresas de Santarém e Cartaxo.
        </p>
        <WhatsappB2BButton location="hero-b2b" className="btn btn--primary btn--large">
          Pedir Proposta no WhatsApp 🧺
        </WhatsappB2BButton>
      </div>
    </header>
  );
}
