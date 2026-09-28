"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

export const GA_MEASUREMENT_ID = "G-E6S24L199P";
const STORAGE_KEY = "lmi-cookie-consent";
export const OPEN_CONSENT_EVENT = "lmi-open-consent";

type Consent = "granted" | "denied" | null;

function readConsent(): Consent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function saveConsent(value: Exclude<Consent, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Sem armazenamento (ex.: navegação privada) — a escolha vale só para esta visita.
  }
}

/**
 * Banner de cookies + Google Analytics 4.
 * O Google Analytics só é carregado DEPOIS de o visitante aceitar.
 * Se recusar, nada é carregado nem enviado para a Google.
 */
export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setOpen(stored === null);

    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  const choose = (value: Exclude<Consent, null>) => {
    saveConsent(value);
    setConsent(value);
    setOpen(false);
    // Retirar o consentimento depois de aceitar: atualiza o Google e recarrega sem o script.
    if (value === "denied" && typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "denied" });
      window.location.reload();
    }
  };

  return (
    <>
      {consent === "granted" ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      ) : null}

      {open ? (
        <div className="consent" role="dialog" aria-live="polite" aria-labelledby="consent-title">
          <div className="consent__inner">
            <p id="consent-title" className="consent__title">
              Podemos medir as visitas ao site?
            </p>
            <p className="consent__text">
              Usamos o Google Analytics para perceber de onde vêm as visitas e que botões funcionam melhor. Só
              ativamos se aceitares. <Link href="/privacidade">Política de privacidade</Link>
            </p>
            <div className="consent__actions">
              <button type="button" className="btn btn--outline btn--small" onClick={() => choose("denied")}>
                Recusar
              </button>
              <button type="button" className="btn btn--primary btn--small" onClick={() => choose("granted")}>
                Aceitar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Link no rodapé para voltar a abrir o banner e mudar a escolha. */
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer__cookie-btn"
      onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))}
    >
      Preferências de cookies
    </button>
  );
}
