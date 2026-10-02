"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { WhatsappButton } from "./WhatsappButton";
import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { whatsappEngomadoriaLink } from "@/lib/config";

type Step = {
  title: string;
  text: string;
  icon: ReactNode;
};

const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const defaultSteps: Step[] = [
  {
    title: "Fala connosco",
    text: "Manda mensagem no WhatsApp com a tua morada. É só isso para começar.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 20.5l1.6-5.2A8.4 8.4 0 1 1 21 11.5z" />
        <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
      </svg>
    ),
  },
  {
    title: "Levamos-te os sacos e marcamos o dia",
    text: "Recebes os sacos lava-me isso. em casa e combinamos a data de recolha que te dá jeito.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M3 10h18M8 3v4M16 3v4" />
        <path d="M9 15.5l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Enches os sacos. Nós tratamos do resto.",
    text: "Roupa do dia-a-dia num saco, lençóis e toalhas no outro. Recolhemos à tua porta e devolvemos tudo lavado.",
    icon: (
      <svg {...iconProps}>
        <path d="M6 9h12l-1.2 11a1 1 0 0 1-1 .9H8.2a1 1 0 0 1-1-.9L6 9z" />
        <path d="M9 9V7a3 3 0 0 1 6 0v2" />
      </svg>
    ),
  },
];

// Passos da página de engomadoria.
const ironingSteps: Step[] = [
  {
    title: "Diz-nos o que é para passar",
    text: "Manda mensagem no WhatsApp com as peças e a tua morada. Respondemos com o preço.",
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 20.5l1.6-5.2A8.4 8.4 0 1 1 21 11.5z" />
        <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
      </svg>
    ),
  },
  {
    title: "Recolhemos à tua porta",
    text: "No dia e hora que combinarmos. Não precisas de sair de casa.",
    icon: (
      <svg {...iconProps}>
        <path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" />
        <path d="M3 21h18M14.5 12h.01" />
      </svg>
    ),
  },
  {
    title: "Devolvemos pronta a vestir",
    text: "Camisas e vestidos em cabide, o resto dobrado. Pagas na entrega.",
    icon: (
      <svg {...iconProps}>
        <path d="M12 6a2 2 0 1 1 2 2c-1 0-2 .7-2 1.6V10" />
        <path d="M12 10 3 16.5a1 1 0 0 0 .6 1.8h16.8a1 1 0 0 0 .6-1.8L12 10z" />
      </svg>
    ),
  },
];

const CYCLE_MS = 2600;

export function HowItWorks({ variant = "default" }: { variant?: "default" | "ironing" }) {
  const steps = variant === "ironing" ? ironingSteps : defaultSteps;
  const listRef = useRef<HTMLOListElement>(null);
  const [armed, setArmed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  // Revela os passos quando a secção entra no ecrã.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    setArmed(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  // Depois de revelados, o destaque percorre os passos 1 → 2 → 3 em ciclo.
  useEffect(() => {
    if (!visible || !armed) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [visible, armed]);

  const listClass = ["hiw__steps", armed ? "is-armed" : "", visible ? "is-visible" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="section hiw" id="como-funciona" aria-labelledby="como-funciona-title">
      <div className="container">
        <h2 id="como-funciona-title" className="section__title hiw__title">
          Como funciona
        </h2>
        <p className="hiw__subtitle">
          {variant === "ironing" ? "Três passos. Zero tempo ao ferro." : "Três passos. Zero idas à lavandaria."}
        </p>

        <ol className={listClass} ref={listRef}>
          {steps.map((step, index) => (
            <li
              className={`hiw__step${armed && visible && active === index ? " is-active" : ""}`}
              key={step.title}
              style={{ "--i": index } as CSSProperties}
            >
              <div className="hiw__marker">
                <span className="hiw__icon">{step.icon}</span>
                <span className="hiw__num" aria-hidden="true">
                  {index + 1}
                </span>
              </div>
              <div className="hiw__body">
                <h3 className="hiw__step-title">
                  <span className="visually-hidden">Passo {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="hiw__text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {variant === "ironing" ? (
          <WhatsappCustomButton
            href={whatsappEngomadoriaLink}
            event="cta_whatsapp_engomadoria"
            location="how-it-works"
            className="btn btn--primary btn--large"
          >
            Pedir engomadoria 🧺
          </WhatsappCustomButton>
        ) : (
          <WhatsappButton location="how-it-works" className="btn btn--primary btn--large">
            Começar agora 🧺
          </WhatsappButton>
        )}
      </div>
    </section>
  );
}
