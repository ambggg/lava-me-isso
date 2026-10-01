"use client";

import { useState } from "react";
import { icons } from "./LocationIcons";
import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { buildWhatsappLink } from "@/lib/config";
import { bagWeight, formatPrice, pricing, VAT_SHORT } from "@/lib/prices";

type Option = "lavado" | "passado";

type FactsCardProps = {
  city: string;
  where: string; // "em Santarém", "no Cartaxo"…
  event: string;
};

/**
 * Cartão-resumo do hero das páginas de localidade.
 * O visitante escolhe "Só lavado" ou "Lavado + passado" e o preço,
 * a descrição e o botão de WhatsApp mudam de acordo.
 * Começa em "Lavado + passado": é o serviço que mais converte.
 */
export function FactsCard({ city, where, event }: FactsCardProps) {
  const [option, setOption] = useState<Option>("passado");

  const options = {
    lavado: {
      tab: "Só lavado",
      price: pricing.washDry,
      note: "Lavar + secar + dobrar",
      perk: { title: "Dobrada e pronta a arrumar", text: "Tu só tens de pendurar" },
      cta: "Quero a roupa lavada",
      message: `Olá! Estou ${where} e quero a roupa lavada (saco de ${bagWeight}) 🧺`,
      location: "facts-card-lavado",
    },
    passado: {
      tab: "Lavado + passado",
      price: pricing.washDryIron,
      note: "Lavar + secar + passar a ferro",
      perk: { title: "Nunca mais passas a ferro", text: "Volta pronta a vestir" },
      cta: "Quero lavado e passado",
      message: `Olá! Estou ${where} e quero a roupa lavada e passada a ferro (saco de ${bagWeight}) 🧺`,
      location: "facts-card-passado",
    },
  } as const;

  const current = options[option];

  return (
    <aside className="lp-facts" aria-label={`Preço e serviço ${where}`}>
      <div className="lp-facts__price">
        <div className="lp-facts__switch" role="radiogroup" aria-label="Escolhe o serviço">
          {(Object.keys(options) as Option[]).map((key) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={option === key}
              className={`lp-facts__tab${option === key ? " is-active" : ""}`}
              onClick={() => setOption(key)}
            >
              {key === "passado" ? icons.iron : icons.bag}
              {options[key].tab}
            </button>
          ))}
        </div>

        <div className="lp-facts__figure" key={option} aria-live="polite">
          <span className="lp-facts__label">Saco de {bagWeight}</span>
          <span className="lp-facts__value">
            {formatPrice(current.price)} <small>{VAT_SHORT}</small>
          </span>
          <span className="lp-facts__note">{current.note}</span>
        </div>
      </div>

      <ul className="lp-facts__list">
        <li className="lp-facts__perk" key={option}>
          <span className="lp-facts__icon lp-facts__icon--accent">{option === "passado" ? icons.iron : icons.check}</span>
          <span>
            <strong>{current.perk.title}</strong>
            {current.perk.text}
          </span>
        </li>
        <li>
          <span className="lp-facts__icon">{icons.door}</span>
          <span>
            <strong>Recolha e entrega à porta</strong>
            Em {city}, no dia que te dá jeito
          </span>
        </li>
        <li>
          <span className="lp-facts__icon">{icons.gift}</span>
          <span>
            <strong>Clientes mensais</strong>
            Oferecemos o IVA
          </span>
        </li>
        <li>
          <span className="lp-facts__icon">{icons.card}</span>
          <span>
            <strong>Pagas na entrega</strong>
            MBWay, transferência ou numerário
          </span>
        </li>
      </ul>

      <div className="lp-facts__cta">
        <WhatsappCustomButton
          href={buildWhatsappLink(current.message)}
          event={event}
          location={current.location}
          className="btn btn--primary lp-facts__btn"
        >
          {current.cta}
        </WhatsappCustomButton>
      </div>
    </aside>
  );
}
