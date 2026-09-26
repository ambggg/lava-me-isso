import Link from "next/link";
import { Logo } from "./Logo";
import { WhatsappButton } from "./WhatsappButton";

// Zonas com página própria ligam para ela (links internos para SEO local).
const zones: { name: string; href?: string }[] = [
  { name: "Santarém", href: "/lavandaria-santarem" },
  { name: "Cartaxo", href: "/lavandaria-cartaxo" },
  { name: "Azambuja", href: "/lavandaria-azambuja" },
  { name: "Lisboa Oriente", href: "/lavandaria-lisboa-oriente" },
];

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__inner container">
        <Logo variant="light" className="hero__logo" />
        <ul className="hero__zones" aria-label="Zonas servidas">
          {zones.map((zone) => (
            <li key={zone.name}>
              {zone.href ? <Link href={zone.href}>{zone.name}</Link> : <span>{zone.name}</span>}
            </li>
          ))}
        </ul>
        <h1 className="hero__title">
          <span className="hero__kicker">Lavandaria com recolha e entrega ao domicílio</span>
          A tua roupa lavada, seca e dobrada.
        </h1>
        <p className="hero__subtitle">Recolhemos. Lavamos. Entregamos. Simples.</p>
        <WhatsappButton location="hero" className="btn btn--primary btn--large">
          Agendar Recolha 🧺
        </WhatsappButton>
      </div>
    </header>
  );
}
