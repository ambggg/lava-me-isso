import Link from "next/link";
import type { ReactNode } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
  // Link opcional por baixo da resposta (página interna ou âncora na mesma página).
  link?: { href: string; label: string };
};

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details className="faq__item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
          {item.link ? (
            <Link href={item.link.href} className="faq__link">
              {item.link.label} <span aria-hidden="true">→</span>
            </Link>
          ) : null}
        </details>
      ))}
    </div>
  );
}
