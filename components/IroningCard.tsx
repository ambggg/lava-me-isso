"use client";

import { useState } from "react";
import { icons } from "./LocationIcons";
import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { buildWhatsappLink } from "@/lib/config";
import { bagWeight, formatPrice, pricing, VAT_SHORT } from "@/lib/prices";

type Mode = "passar" | "lavar";

/**
 * Cartão do hero da página de engomadoria: "Só passar" ou "Lavar + passar".
 * Abre em "Lavar + passar" (o serviço mais pedido).
 */
export function IroningCard() {
  const [mode, setMode] = useState<Mode>("lavar");

  const options = {
    passar: {
      tab: "Só passar",
      price: pricing.ironOnly,
      note: "Trazes lavada, devolvemos passada",
      cta: "Quero só passar a ferro",
      message: `Olá! Quero só passar a roupa a ferro (saco de ${bagWeight}) 🧺`,
      location: "ironing-card-passar",
    },
    lavar: {
      tab: "Lavar + passar",
      price: pricing.washDryIron,
      note: "Lavar + secar + passar a ferro",
      cta: "Quero lavado e passado",
      message: `Olá! Quero a roupa lavada e passada a ferro (saco de ${bagWeight}) 🧺`,
      location: "ironing-card-lavar",
    },
  } as const;

  const current = options[mode];

  return (
    <aside className="lp-facts" aria-label="Preço da engomadoria">
      <div className="lp-facts__price">
        <div className="lp-facts__switch" role="radiogroup" aria-label="Escolhe o serviço">
          {(["passar", "lavar"] as Mode[]).map((key) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={mode === key}
              className={`lp-facts__tab${mode === key ? " is-active" : ""}`}
              onClick={() => setMode(key)}
            >
              {key === "passar" ? icons.iron : icons.bag}
              {options[key].tab}
            </button>
          ))}
        </div>

        <div className="lp-facts__figure" key={mode} aria-live="polite">
          <span className="lp-facts__label">Saco de {bagWeight}</span>
          <span className="lp-facts__value">
            {formatPrice(current.price)} <small>{VAT_SHORT}</small>
          </span>
          <span className="lp-facts__note">{current.note}</span>
        </div>
      </div>

      <ul className="lp-facts__list">
        <li>
          <span className="lp-facts__icon">{icons.hanger}</span>
          <span>
            <strong>Camisas e vestidos em cabide</strong>
            O resto volta dobrado, pronto a arrumar
          </span>
        </li>
        <li>
          <span className="lp-facts__icon">{icons.bag}</span>
          <span>
            <strong>Lençóis e toalhas também</strong>
            No Saco Casa, lavados à parte e passados
          </span>
        </li>
        <li>
          <span className="lp-facts__icon">{icons.door}</span>
          <span>
            <strong>Recolha e entrega à porta</strong>
            No dia que te dá jeito
          </span>
        </li>
      </ul>

      <div className="lp-facts__cta">
        <WhatsappCustomButton
          href={buildWhatsappLink(current.message)}
          event="cta_whatsapp_engomadoria"
          location={current.location}
          className="btn btn--primary lp-facts__btn"
        >
          {current.cta}
        </WhatsappCustomButton>
      </div>
    </aside>
  );
}
