"use client";

import type { ReactNode } from "react";
import { whatsappB2BLink } from "@/lib/config";
import { trackWhatsAppB2BClick } from "@/lib/analytics";

type WhatsappB2BButtonProps = {
  location: string;
  className: string;
  children: ReactNode;
  ariaLabel?: string;
};

export function WhatsappB2BButton({ location, className, children, ariaLabel }: WhatsappB2BButtonProps) {
  return (
    <a
      className={className}
      href={whatsappB2BLink}
      target="_blank"
      rel="noopener"
      aria-label={ariaLabel}
      onClick={() => trackWhatsAppB2BClick(location)}
    >
      {children}
    </a>
  );
}
