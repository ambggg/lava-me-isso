import { WhatsappButton } from "./WhatsappButton";
import { bagWeight, formatPrice, pricing, VAT_NOTE } from "@/lib/prices";

export function Pricing() {
  return (
    <section className="section section--purple" id="precos" aria-labelledby="precos-title">
      <div className="container">
        <h2 id="precos-title" className="section__title">
          Preços e serviços
        </h2>

        <div className="launch-banner">
          <span className="badge launch-banner__tag">Clientes mensais</span>
          <p className="launch-banner__text">
            <strong className="highlight">Oferecemos o IVA</strong> a clientes com recolha todos os meses.
          </p>
        </div>

        <div className="pricing-grid">
          <div className="price-card">
            <h3 className="price-card__title">Lavar + Secar</h3>
            <p className="price-card__price">{formatPrice(pricing.washDry)}</p>
            <p className="price-card__vat">{VAT_NOTE}</p>
            <p className="price-card__desc">Saco de {bagWeight}</p>
            <ul className="price-card__list">
              <li>Lavada, seca e dobrada</li>
              <li>Recolha + entrega incluídas</li>
            </ul>
          </div>

          <div className="price-card price-card--popular">
            <span className="price-card__badge">Mais popular</span>
            <h3 className="price-card__title">Lavar + Secar + Passar a Ferro</h3>
            <p className="price-card__price">{formatPrice(pricing.washDryIron)}</p>
            <p className="price-card__vat">{VAT_NOTE}</p>
            <p className="price-card__desc">Saco de {bagWeight}</p>
            <ul className="price-card__list">
              <li>Pronta a vestir e a arrumar</li>
              <li>Recolha + entrega incluídas</li>
            </ul>
          </div>

          <div className="price-card">
            <h3 className="price-card__title">Só Passar a Ferro</h3>
            <p className="price-card__price">{formatPrice(pricing.ironOnly)}</p>
            <p className="price-card__vat">{VAT_NOTE}</p>
            <p className="price-card__desc">Trazes lavada, devolvemos engomada</p>
            <ul className="price-card__list">
              <li>Recolha + entrega incluídas</li>
            </ul>
          </div>
        </div>

        <WhatsappButton location="pricing" className="btn btn--primary btn--large">
          Pedir Agora 🧺
        </WhatsappButton>
      </div>
    </section>
  );
}
