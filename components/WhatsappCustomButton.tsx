"use client";

import type { ReactNode } from "react";
import { trackWhatsAppCustomClick } from "@/lib/analytics";

type WhatsappCustomButtonProps = {
  href: string;
  event: string;
  location: string;
  className: string;
  children: ReactNode;
  ariaLabel?: string;
};

// Botão de WhatsApp genérico para páginas de SEO local — cada página define
// o seu próprio link (mensagem pré-preenchida) e nome de evento de analytics.
export function WhatsappCustomButton({
  href,
  event,
  location,
  className,
  children,
  ariaLabel,
}: WhatsappCustomButtonProps) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      onClick={() => trackWhatsAppCustomClick(event, location)}
    >
      {children}
    </a>
  );
}
