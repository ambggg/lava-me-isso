import { nap, site } from "./config";

type FaqItem = {
  question: string;
  answer: string;
};

/**
 * LocalBusiness por página de localidade — mesmo NAP em todo o site,
 * mas com areaServed e url específicos da página.
 */
export function buildLocalBusinessSchema({
  url,
  areaServed,
  description,
}: {
  url: string;
  areaServed: string[];
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DryCleaningOrLaundry",
    name: nap.name,
    description,
    url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/logo.png`,
    telephone: nap.telephone,
    priceRange: "€€",
    areaServed: areaServed.map((name) => ({ "@type": "City", name })),
    address: {
      "@type": "PostalAddress",
      addressLocality: areaServed[0],
      addressRegion: areaServed[0],
      addressCountry: "PT",
    },
    sameAs: ["https://www.instagram.com/lavameisso", "https://www.facebook.com/lavameisso"],
  };
}

/** FAQPage — usa sempre texto simples (sem JSX) nas respostas. */
export function buildFaqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Service — para a página /engomadoria. */
export function buildServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: {
      "@type": "DryCleaningOrLaundry",
      name: nap.name,
      telephone: nap.telephone,
    },
    areaServed: nap.areas.map((areaName) => ({ "@type": "City", name: areaName })),
  };
}

/** Article — preparado para quando o /dicas for publicado. */
export function buildArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: nap.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: nap.name,
      url: site.url,
    },
  };
}

/** BreadcrumbList — "Início › Página". */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
