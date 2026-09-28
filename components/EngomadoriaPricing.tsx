import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { whatsappEngomadoriaLink } from "@/lib/config";
import { bagWeight, formatPrice, MONTHLY_VAT_OFFER, pricing, VAT_NOTE } from "@/lib/prices";

export function EngomadoriaPricing() {
  return (
    <section className="section section--purple" id="precos-engomadoria" aria-labelledby="precos-engomadoria-title">
      <div className="container">
        <h2 id="precos-engomadoria-title" className="section__title">
          Preços da engomadoria
        </h2>

        <div className="pricing-grid">
          <div className="price-card">
            <h3 className="price-card__title">Camisa Avulsa</h3>
            <p className="price-card__price">{formatPrice(pricing.ironShirt)}</p>
            <p className="price-card__vat">{VAT_NOTE}</p>
            <p className="price-card__desc">Por peça</p>
            <ul className="price-card__list">
              <li>Cabide incluído</li>
              <li>Recolha + entrega incluídas</li>
            </ul>
          </div>

          <div className="price-card">
            <h3 className="price-card__title">Outras Peças</h3>
            <p className="price-card__price">Pede orçamento</p>
            <p className="price-card__desc">Calças, vestidos, lençóis, toalhas</p>
            <ul className="price-card__list">
              <li>Preço por peça</li>
              <li>Manda a lista no WhatsApp</li>
            </ul>
          </div>

          <div className="price-card price-card--popular">
            <span className="price-card__badge">Mais popular</span>
            <h3 className="price-card__title">Pack Completo</h3>
            <p className="price-card__price">{formatPrice(pricing.washDryIron)}</p>
            <p className="price-card__vat">{VAT_NOTE}</p>
            <p className="price-card__desc">Lavar + secar + passar, saco de {bagWeight}</p>
            <ul className="price-card__list">
              <li>Pronta a vestir e a arrumar</li>
              <li>Recolha + entrega incluídas</li>
            </ul>
          </div>
        </div>

        <p className="pricing-note pricing-note--spaced">{MONTHLY_VAT_OFFER}</p>

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
