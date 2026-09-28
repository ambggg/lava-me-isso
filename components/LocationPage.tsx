import Link from "next/link";
import { Trust } from "./Trust";
import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { FaqList } from "./FaqList";
import { JsonLd } from "./JsonLd";
import { buildFaqPageSchema, buildLocalBusinessSchema } from "@/lib/schema";
import { bagWeight, formatPrice, MONTHLY_VAT_OFFER, pricing, VAT_SHORT } from "@/lib/prices";
import { site } from "@/lib/config";
import type { LocationData } from "@/lib/locations";

export function LocationPage({ data }: { data: LocationData }) {
  const pageUrl = `${site.url}/lavandaria-${data.slug}`;

  return (
    <>
      <JsonLd
        data={buildLocalBusinessSchema({
          url: pageUrl,
          areaServed: [data.city],
          description: `Lavandaria com recolha e entrega ao domicílio ${data.preposition} ${data.city}.`,
        })}
      />
      <JsonLd data={buildFaqPageSchema(data.faqs)} />

      <header className="hero">
        <div className="hero__inner container">
          <p className="badge">📍 {data.city}</p>
          <h1 className="hero__title">{data.h1}</h1>
          <p className="hero__subtitle">Recolhemos. Lavamos. Entregamos. Simples.</p>
          <WhatsappCustomButton
            href={data.whatsappLink}
            event={data.whatsappEvent}
            location="hero"
            className="btn btn--primary btn--large"
          >
            Agendar Recolha 🧺
          </WhatsappCustomButton>
          <p className="hero__note">
            Recolha e entrega incluídas · Saco de {bagWeight} por {formatPrice(pricing.washDry)} {VAT_SHORT}
          </p>
        </div>
      </header>

      <main>
        <section className="section" aria-labelledby="sobre-title">
          <div className="container location-content">
            <h2 id="sobre-title" className="section__title">
              Lavandaria {data.preposition} {data.city}
            </h2>
            {data.intro.map((paragraph, index) => (
              <p key={index} className="location-content__paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="section section--purple" aria-labelledby="zonas-title">
          <div className="container">
            <h2 id="zonas-title" className="section__title">
              Zonas servidas {data.preposition} {data.city}
            </h2>
            <ul className="location-areas">
              {data.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" aria-labelledby="como-funciona-title">
          <div className="container">
            <h2 id="como-funciona-title" className="section__title">
              Como funciona
            </h2>
            <ol className="steps">
              {data.steps.map((step, index) => (
                <li className="step" key={step.title}>
                  <span className="step__number">{index + 1}</span>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__text">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section--purple" aria-labelledby="precos-title">
          <div className="container">
            <h2 id="precos-title" className="section__title">
              Preços {data.preposition} {data.city}
            </h2>
            <div className="launch-banner">
              <p className="launch-banner__text">
                Saco de {bagWeight} — <strong className="highlight">{formatPrice(pricing.washDry)} {VAT_SHORT}</strong>, com
                recolha e entrega incluídas
              </p>
            </div>
            <p className="pricing-note">
              {MONTHLY_VAT_OFFER} Também fazemos passar a ferro — vê os <Link href="/engomadoria">preços de engomadoria</Link>, ou
              consulta a <Link href="/#precos">lista completa de preços e serviços</Link>.
            </p>
            <WhatsappCustomButton
              href={data.whatsappLink}
              event={data.whatsappEvent}
              location="pricing"
              className="btn btn--primary btn--large"
            >
              Pedir Agora 🧺
            </WhatsappCustomButton>
          </div>
        </section>

        <Trust />

        <section className="section section--purple" aria-labelledby="faq-title">
          <div className="container">
            <h2 id="faq-title" className="section__title">
              Perguntas frequentes sobre {data.city}
            </h2>
            <FaqList items={data.faqs} />
          </div>
        </section>

        <section className="section section--cta" aria-labelledby="cta-final-title">
          <div className="container">
            <h2 id="cta-final-title" className="section__title">
              Pronto para despachar a roupa suja?
            </h2>
            <p className="section__subtitle">Manda mensagem. Combinamos tudo.</p>
            <WhatsappCustomButton
              href={data.whatsappLink}
              event={data.whatsappEvent}
              location="cta-final"
              className="btn btn--primary btn--large"
            >
              Agendar Recolha 🧺
            </WhatsappCustomButton>
          </div>
        </section>
      </main>

      <WhatsappCustomButton
        href={data.whatsappLink}
        event={data.whatsappEvent}
        location="floating"
        className="whatsapp-float"
        ariaLabel={`Agendar recolha ${data.preposition} ${data.city} no WhatsApp`}
      >
        <span aria-hidden="true">🧺</span> Agendar Recolha
      </WhatsappCustomButton>
    </>
  );
}
