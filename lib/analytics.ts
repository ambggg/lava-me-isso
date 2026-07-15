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
