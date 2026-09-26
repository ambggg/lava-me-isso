import type { ReactNode } from "react";
import { WhatsappButton } from "./WhatsappButton";
import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { whatsappSacoCasaLink } from "@/lib/config";
import { bagWeight, formatPrice, pricing, sacoCasaWeight } from "@/lib/prices";

type BagArtProps = {
  body: string;
  band: string;
  children: ReactNode;
};

// Ilustração do saco de marca — o ícone dentro da etiqueta muda por saco.
function BagArt({ body, band, children }: BagArtProps) {
  return (
    <svg className="bag__art" viewBox="0 0 160 160" aria-hidden="true">
      <ellipse cx="80" cy="150" rx="44" ry="5" fill="#1A0040" opacity="0.08" />
      <path d="M52 30 Q66 20 80 30 Q94 20 108 30 L104 46 H56 Z" fill={body} />
      <path
        d="M46 52 C32 80 30 118 42 138 C52 147 108 147 118 138 C130 118 128 80 114 52 Z"
        fill={body}
      />
      <rect x="48" y="42" width="64" height="12" rx="6" fill={band} />
      <path d="M80 50 q-8 14 -20 20" stroke="#FFFC31" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M80 50 q8 14 20 20" stroke="#FFFC31" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <circle cx="80" cy="49" r="4" fill="#FFFC31" />
      <rect x="56" y="84" width="48" height="40" rx="10" fill="#FAF7FF" />
      <g
        transform="translate(68 92)"
        stroke="#7C3AED"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {children}
      </g>
    </svg>
  );
}

export function Bags() {
  return (
    <section className="section section--purple" id="sacos" aria-labelledby="sacos-title">
      <div className="container bags__container">
        <h2 id="sacos-title" className="section__title bags__title">
          Dois sacos, para te poupar tempo
        </h2>
        <p className="bags__subtitle">
          A roupa do dia-a-dia num saco, a roupa de cama e banho no outro. Lavados à parte, sem misturas.
        </p>

        <div className="bags">
          <article className="bag" aria-labelledby="saco-roupa-title">
            <BagArt body="#7C3AED" band="#7B2FBE">
              {/* t-shirt */}
              <path d="M4 3 L9 1 Q12 4 15 1 L20 3 L23 8 L19 10 V23 H5 V10 L1 8 Z" />
            </BagArt>
            <div className="bag__content">
              <h3 id="saco-roupa-title" className="bag__title">
                Saco Roupa
              </h3>
              <p className="bag__lead">Para a roupa suja da semana.</p>
              <ul className="bag__list">
                <li>T-shirts, calças e camisolas</li>
                <li>Roupa interior e meias</li>
                <li>Pijamas e roupa de desporto</li>
              </ul>
              <p className="bag__meta">
                Saco de {bagWeight} · <strong>desde {formatPrice(pricing.washDry)}</strong>
              </p>
              <WhatsappButton location="bag-roupa" className="btn btn--outline btn--small">
                Pedir o Saco Roupa
              </WhatsappButton>
            </div>
          </article>

          <article className="bag bag--casa" aria-labelledby="saco-casa-title">
            <span className="bag__new">Novo</span>
            <BagArt body="#1A0040" band="#7B2FBE">
              {/* toalhas dobradas */}
              <rect x="0" y="3" width="24" height="6" rx="2" />
              <rect x="0" y="10" width="24" height="6" rx="2" />
              <rect x="0" y="17" width="24" height="6" rx="2" />
            </BagArt>
            <div className="bag__content">
              <h3 id="saco-casa-title" className="bag__title">
                Saco Casa
              </h3>
              <p className="bag__lead">Para lençóis e toalhas, lavados à parte.</p>
              <ul className="bag__list">
                <li>Lençóis, capas de edredão e fronhas</li>
                <li>Toalhas de banho e de rosto</li>
                <li>Toalhas de praia e de piscina</li>
              </ul>
              {sacoCasaWeight || pricing.sacoCasa ? (
                <p className="bag__meta">
                  {sacoCasaWeight ? <>Saco de {sacoCasaWeight}</> : null}
                  {sacoCasaWeight && pricing.sacoCasa ? " · " : null}
                  {pricing.sacoCasa ? <strong>{pricing.sacoCasa}</strong> : null}
                </p>
              ) : null}
              <WhatsappCustomButton
                href={whatsappSacoCasaLink}
                event="cta_whatsapp_saco_casa"
                location="bag-casa"
                className="btn btn--primary btn--small"
              >
                Quero o Saco Casa
              </WhatsappCustomButton>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
