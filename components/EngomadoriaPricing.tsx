import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { whatsappEngomadoriaLink } from "@/lib/config";
import { bagWeight, formatPrice, MONTHLY_VAT_OFFER, pricing, SHIRT_VAT_NOTE, VAT_NOTE } from "@/lib/prices";

export function EngomadoriaPricing() {
  return (
    <section className="section section--purple" id="precos-engomadoria" aria-labelledby="precos-engomadoria-title">
      <div className="container">
        <h2 id="precos-engomadoria-title" className="section__title">
          Preços da engomadoria
        </h2>

        <div className="pricing-grid">
          <div className="price-card">
            <h3 className="price-card__title">Só Passar a Ferro</h3>
            <p className="price-card__price">{formatPrice(pricing.ironOnly)}</p>
            <p className="price-card__vat">{VAT_NOTE}</p>
            <p className="price-card__desc">Saco de {bagWeight} · trazes lavada, devolvemos passada</p>
            <ul className="price-card__list">
              <li>Camisas e vestidos em cabide</li>
              <li>Recolha + entrega incluídas</li>
            </ul>
          </div>

          <div className="price-card price-card--popular">
            <span className="price-card__badge">Mais popular</span>
            <h3 className="price-card__title">Lavar + Secar + Passar</h3>
            <p className="price-card__price">{formatPrice(pricing.washDryIron)}</p>
            <p className="price-card__vat">{VAT_NOTE}</p>
            <p className="price-card__desc">Saco de {bagWeight} · tratamos de tudo</p>
            <ul className="price-card__list">
              <li>Pronta a vestir e a arrumar</li>
              <li>Recolha + entrega incluídas</li>
            </ul>
          </div>

          <div className="price-card">
            <h3 className="price-card__title">Saco Casa · Lençóis e Toalhas</h3>
            <p className="price-card__price">
              <span className="price-card__from">desde</span> {formatPrice(pricing.sacoCasa)}
            </p>
            <p className="price-card__vat">{VAT_NOTE}</p>
            <p className="price-card__desc">Lavar + secar + dobrar · passar a ferro conforme as peças</p>
            <ul className="price-card__list">
              <li>Lençóis, capas, fronhas e toalhas</li>
              <li>Lavados à parte da roupa do dia-a-dia</li>
              <li>Recolha + entrega incluídas</li>
            </ul>
          </div>
        </div>

        <p className="pricing-note pricing-note--spaced">
          Camisas avulsas: {formatPrice(pricing.ironShirt)} por peça ({SHIRT_VAT_NOTE}), entregues em cabide.{" "}
          {MONTHLY_VAT_OFFER}
        </p>

        <WhatsappCustomButton
          href={whatsappEngomadoriaLink}
          event="cta_whatsapp_engomadoria"
          location="pricing"
          className="btn btn--primary btn--large"
        >
          Pedir Agora 🧺
        </WhatsappCustomButton>
      </div>
    </section>
  );
}
