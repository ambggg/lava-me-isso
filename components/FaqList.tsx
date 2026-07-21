import type { ReactNode } from "react";

export type FaqItem = {
  question: string;
  answer: ReactNode;
};

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details className="faq__item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
