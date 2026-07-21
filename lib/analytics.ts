declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined") return;

  if (typeof window.plausible === "function") {
    window.plausible("WhatsApp Click", { props: { location } });
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", { location });
  }
}

// Evento distinto do B2C, para medir a conversão da página /empresas em separado.
export function trackWhatsAppB2BClick(location: string) {
  if (typeof window === "undefined") return;

  if (typeof window.plausible === "function") {
    window.plausible("cta_whatsapp_b2b", { props: { location } });
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", "cta_whatsapp_b2b", { location });
  }
}

// Genérico para páginas de SEO local (localidades, engomadoria) — cada uma
// passa o seu próprio nome de evento, para atribuição de canal em separado.
export function trackWhatsAppCustomClick(event: string, location: string) {
  if (typeof window === "undefined") return;

  if (typeof window.plausible === "function") {
    window.plausible(event, { props: { location } });
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", event, { location });
  }
}
