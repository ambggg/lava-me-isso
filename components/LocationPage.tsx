import Link from "next/link";
import type { CSSProperties } from "react";
import { icons } from "./LocationIcons";
import { FactsCard } from "./FactsCard";
import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { FaqList } from "./FaqList";
import { FaqCta } from "./FaqCta";
import { JsonLd } from "./JsonLd";
import { HowItWorks } from "./HowItWorks";
import { Bags } from "./Bags";
import { Pricing } from "./Pricing";
import { Reviews } from "./Reviews";
import { buildBreadcrumbSchema, buildFaqPageSchema, buildLocalBusinessSchema } from "@/lib/schema";
import { buildWhatsappLink, nap, site } from "@/lib/config";
import { allLocations, type LocationData } from "@/lib/locations";

// Posição de cada zona à volta do centro (ilustrativo, não geográfico).
function zonePosition(index: number, total: number): CSSProperties {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const x = 50 + Math.cos(angle) * 40;
  const y = 50 + Math.sin(angle) * 38;
  return { "--x": `${x.toFixed(1)}%`, "--y": `${y.toFixed(1)}%` } as CSSProperties;
}

export function LocationPage({ data }: { data: LocationData }) {
  const path = `/lavandaria-${data.slug}`;
  const pageUrl = `${site.url}${path}`;
  const where = `${data.preposition} ${data.city}`;
  const others = allLocations.filter((location) => location.slug !== data.slug);

  return (
    <>
      <JsonLd
        data={buildLocalBusinessSchema({
          url: pageUrl,
          areaServed: [data.city, ...data.areas],
          description: `Lavandaria com recolha e entrega ao domicílio ${where}.`,
        })}
      />
      <JsonLd data={buildFaqPageSchema(data.faqs)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Início", url: `${site.url}/` },
          { name: `Lavandaria ${where}`, url: pageUrl },
        ])}
      />

      <header className="lp-hero">
        <div className="container lp-hero__grid">
          <div className="lp-hero__main">
            <nav aria-label="Breadcrumb" className="lp-crumbs">
              <ol>
                <li>
                  <Link href="/">Início</Link>
                </li>
                <li aria-current="page">Lavandaria {where}</li>
              </ol>
            </nav>
            <p className="lp-hero__place">
              {icons.pin}
              {data.city}
            </p>
            <h1 className="lp-hero__title">{data.h1}</h1>
            <p className="lp-hero__lead">
              Recolhemos à tua porta, lavamos, secamos e devolvemos tudo dobrado. Marca tudo pelo WhatsApp.
            </p>
            <div className="lp-hero__actions">
              <WhatsappCustomButton
                href={data.whatsappLink}
                event={data.whatsappEvent}
                location="hero"
                className="btn btn--primary btn--large"
              >
                Agendar Recolha 🧺
              </WhatsappCustomButton>
              <span className="lp-hero__phone">WhatsApp {nap.telephoneDisplay}</span>
            </div>
          </div>

          <FactsCard
            city={data.city}
            where={where}
            event={data.whatsappEvent}
          />
        </div>
      </header>

      <main>
        <section className="section lp-story" aria-labelledby="sobre-title">
          <div className="container lp-story__container">
            <h2 id="sobre-title" className="lp-story__title">
              Lavandaria {where}
            </h2>
            {data.sections.map((block) => (
              <div className="lp-story__block" key={block.heading}>
                <h3 className="lp-story__heading">{block.heading}</h3>
                <div className="lp-story__text">
                  {block.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--purple lp-zones" id="zonas" aria-labelledby="zonas-title">
          <div className="container lp-zones__container">
            <div className="lp-zones__intro">
              <h2 id="zonas-title" className="lp-zones__title">
                Zonas servidas {where}
              </h2>
              <p className="lp-zones__text">
                Toca na tua zona para pedires a recolha. Não vês a tua rua? Manda a morada no WhatsApp e
                confirmamos na hora se está dentro da rota.
              </p>
              <WhatsappCustomButton
                href={data.whatsappLink}
                event={data.whatsappEvent}
                location="zones"
                className="btn btn--primary btn--small lp-zones__cta"
              >
                Confirmar a minha morada
              </WhatsappCustomButton>
            </div>
            <div className="lp-zones__map">
              <span className="lp-zones__ring" aria-hidden="true" />
              <span className="lp-zones__center" aria-hidden="true">
                <span className="lp-zones__pulse" />
                {icons.pin}
                <span>{data.city}</span>
              </span>
              <ul className="lp-zones__list">
                {data.areas.map((area, index) => (
                  <li key={area} style={zonePosition(index, data.areas.length)}>
                    <WhatsappCustomButton
                      href={buildWhatsappLink(
                        `Olá! Estou em ${area} (${data.city}) e quero agendar uma recolha 🧺`
                      )}
                      event={data.whatsappEvent}
                      location="zone-chip"
                      className="lp-zones__chip"
                      ariaLabel={`Pedir recolha em ${area} no WhatsApp`}
                    >
                      <span className="lp-zones__dot" aria-hidden="true" />
                      <span className="lp-zones__name">{area}</span>
                      <span className="lp-zones__go" aria-hidden="true">
                        Pedir recolha {icons.arrow}
                      </span>
                    </WhatsappCustomButton>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Bags />
        <Pricing title={`Preços ${where}`} />
        <Reviews />

        <section className="section section--purple" aria-labelledby="faq-title">
          <div className="container">
            <h2 id="faq-title" className="section__title">
              Perguntas frequentes sobre {data.city}
            </h2>
            <FaqList items={data.faqs} />
            <FaqCta href={data.whatsappLink} event={data.whatsappEvent} />
          </div>
        </section>

        <section className="section lp-nearby" aria-labelledby="nearby-title">
          <div className="container lp-nearby__container">
            <h2 id="nearby-title" className="section__title">
              Também estamos em
            </h2>
            <ul className="lp-nearby__list">
              {others.map((location) => (
                <li key={location.slug}>
                  <Link href={`/lavandaria-${location.slug}`} className="lp-nearby__card">
                    <span className="lp-nearby__name">
                      Lavandaria {location.preposition} {location.city}
                    </span>
                    <span className="lp-nearby__areas">{location.areas.slice(0, 3).join(" · ")}</span>
                    <span className="lp-nearby__go">
                      Ver zona {icons.arrow}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
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
        ariaLabel={`Agendar recolha ${where} no WhatsApp`}
      >
        <span aria-hidden="true">🧺</span> Agendar Recolha
      </WhatsappCustomButton>
    </>
  );
}
