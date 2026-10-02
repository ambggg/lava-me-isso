import type { Metadata } from "next";
import Link from "next/link";
import { EngomadoriaPricing } from "@/components/EngomadoriaPricing";
import { EngomadoriaFaq, engomadoriaFaqs } from "@/components/EngomadoriaFaq";
import { EngomadoriaFinalCta } from "@/components/EngomadoriaFinalCta";
import { HowItWorks } from "@/components/HowItWorks";
import { IroningBand } from "@/components/IroningBand";
import { IroningCard } from "@/components/IroningCard";
import { Reviews } from "@/components/Reviews";
import { icons } from "@/components/LocationIcons";
import { WhatsappCustomButton } from "@/components/WhatsappCustomButton";
import { JsonLd } from "@/components/JsonLd";
import { buildBreadcrumbSchema, buildFaqPageSchema, buildServiceSchema } from "@/lib/schema";
import { nap, site, whatsappEngomadoriaLink } from "@/lib/config";
import { allLocations } from "@/lib/locations";

const PAGE_URL = `${site.url}/engomadoria`;

export const metadata: Metadata = {
  title: "Engomadoria e Passar a Ferro ao Domicílio | lava-me isso.",
  description:
    "Engomadoria ao domicílio em Santarém, Cartaxo, Azambuja e Lisboa Oriente. Passar a ferro 27€ + IVA ou lavar e passar 29€ + IVA por saco de 8kg. Pede no WhatsApp.",
  alternates: {
    canonical: "/engomadoria",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: "Engomadoria ao domicílio — lava-me isso.",
    description:
      "Passamos a ferro por ti: recolha e entrega ao domicílio em Santarém, Cartaxo, Azambuja e Lisboa Oriente. Lençóis, toalhas, camisas e vestidos.",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Texto de SEO em 3 blocos (palavras-chave: engomadoria, passar a ferro, ao domicílio, preço por peça, zonas).
const story = [
  {
    heading: "Engomadoria com recolha e entrega ao domicílio",
    paragraphs: [
      "Passar a ferro é a tarefa da casa que mais tempo rouba e que ninguém gosta de fazer. A lava-me isso. é uma engomadoria com recolha e entrega ao domicílio: vamos buscar a roupa à tua porta, passamos a ferro com cuidado e devolvemos tudo pronto a vestir ou a arrumar.",
      "Fazemos engomadoria em Santarém, no Cartaxo, na Azambuja e em Lisboa Oriente — Parque das Nações, Olivais Norte, Moscavide, Portela e Sacavém. Combinamos a recolha para o dia e a hora que te dão jeito, incluindo fins de semana quando a rota o permite.",
    ],
  },
  {
    heading: "Só passar a ferro ou com a lavagem incluída",
    paragraphs: [
      "Se a roupa já está lavada, o serviço Só Passar a Ferro custa 27€ + IVA por saco de 8kg: devolvemos tudo passado, com camisas e vestidos em cabide. Camisas avulsas custam 2,50€ por peça, IVA incluído.",
      "Se preferires despachar tudo de uma vez, o serviço Lavar + Secar + Passar a Ferro custa 29€ + IVA por saco de 8kg, com recolha e entrega incluídas. Lençóis e toalhas vão no Saco Casa, lavados à parte e passados a ferro. Clientes com recolha todos os meses não pagam IVA.",
    ],
  },
  {
    heading: "Engomadoria profissional, para casas e empresas",
    paragraphs: [
      "Cada cliente tem o seu saco e a tua roupa nunca se mistura com a de outros. Seguimos as etiquetas de cada peça, camisas e vestidos voltam em cabide e o resto dobrado, e passamos fatura com NIF sempre que pedires.",
      "Para alojamento local, ginásios, spas e escritórios, passamos a ferro lençóis, toalhas, fardas e camisas, com recolhas em dias fixos e faturação mensal.",
    ],
  },
];

export default function Engomadoria() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Engomadoria com recolha ao domicílio",
          description:
            "Serviço de engomadoria e passar a ferro com recolha e entrega ao domicílio em Santarém, Cartaxo, Azambuja e Lisboa Oriente.",
          url: PAGE_URL,
        })}
      />
      <JsonLd data={buildFaqPageSchema(engomadoriaFaqs)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Início", url: `${site.url}/` },
          { name: "Engomadoria", url: PAGE_URL },
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
                <li aria-current="page">Engomadoria</li>
              </ol>
            </nav>
            <ul className="hero__zones lp-hero__zones" aria-label="Zonas servidas">
              {allLocations.map((location) => (
                <li key={location.slug}>
                  <Link href={`/lavandaria-${location.slug}`}>{location.city}</Link>
                </li>
              ))}
            </ul>
            <h1 className="lp-hero__title">Engomadoria e passar a ferro ao domicílio</h1>
            <p className="lp-hero__lead">
              Recolhemos à tua porta, passamos a ferro e devolvemos pronto a vestir. Roupa, lençóis e toalhas, desde 27€ + IVA por saco.
            </p>
            <div className="lp-hero__actions">
              <WhatsappCustomButton
                href={whatsappEngomadoriaLink}
                event="cta_whatsapp_engomadoria"
                location="hero"
                className="btn btn--primary btn--large"
              >
                Pedir Engomadoria 🧺
              </WhatsappCustomButton>
              <span className="lp-hero__phone">WhatsApp {nap.telephoneDisplay}</span>
            </div>
          </div>
          <IroningCard />
        </div>
      </header>

      <main>
        <IroningBand />
        <EngomadoriaPricing />

        <section className="section lp-story" aria-labelledby="sobre-engomadoria-title">
          <div className="container lp-story__container">
            <h2 id="sobre-engomadoria-title" className="lp-story__title">
              Engomadoria lava-me isso.
            </h2>
            {story.map((block) => (
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

        <HowItWorks variant="ironing" />

        <section className="section section--purple lp-nearby" id="zonas" aria-labelledby="zonas-engomadoria-title">
          <div className="container lp-nearby__container">
            <h2 id="zonas-engomadoria-title" className="section__title">
              Engomadoria perto de ti
            </h2>
            <ul className="lp-nearby__list lp-nearby__list--four">
              {allLocations.map((location) => (
                <li key={location.slug}>
                  <Link href={`/lavandaria-${location.slug}`} className="lp-nearby__card">
                    <span className="lp-nearby__name">
                      Engomadoria {location.preposition} {location.city}
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

        <Reviews />
        <EngomadoriaFaq />
        <EngomadoriaFinalCta />
      </main>

      <WhatsappCustomButton
        href={whatsappEngomadoriaLink}
        event="cta_whatsapp_engomadoria"
        location="floating"
        className="whatsapp-float"
        ariaLabel="Pedir engomadoria no WhatsApp"
      >
        <span aria-hidden="true">🧺</span> Pedir Engomadoria
      </WhatsappCustomButton>
    </>
  );
}
