"use client";

import type { ReactNode } from "react";
import { whatsappLink } from "@/lib/config";
import { trackWhatsAppClick } from "@/lib/analytics";

type WhatsappButtonProps = {
  location: string;
  className: string;
  children: ReactNode;
  ariaLabel?: string;
};

export function WhatsappButton({ location, className, children, ariaLabel }: WhatsappButtonProps) {
  return (
    <a
      className={className}
      href={whatsappLink}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      onClick={() => trackWhatsAppClick(location)}
    >
      {children}
    </a>
  );
}
