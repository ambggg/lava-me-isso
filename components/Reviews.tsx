"use client";

import { useState } from "react";
import { WhatsappCustomButton } from "./WhatsappCustomButton";
import { whatsappReviewsLink } from "@/lib/config";
import { reviewConversations } from "@/lib/reviews";

const chatIcon = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 20.5l1.6-5.2A8.4 8.4 0 1 1 21 11.5z" />
  </svg>
);

export function Reviews() {
  const [active, setActive] = useState(0);
  const current = reviewConversations[active];

  return (
    <section className="section reviews" id="clientes" aria-labelledby="clientes-title">
      <div className="container reviews__grid">
        <div className="reviews__intro">
          <span className="reviews__label">
            {chatIcon}
            Recebido no WhatsApp
          </span>
          <h2 id="clientes-title" className="reviews__title">
            Não somos nós que o dizemos.
          </h2>
          <p className="reviews__lead">
            Mensagens reais que recebemos dos nossos clientes, tal como as escreveram. Partilhadas com autorização.
          </p>
        </div>

        <div className="reviews__tabs" role="tablist" aria-label="Clientes">
          {reviewConversations.map((convo, index) => (
            <button
              key={convo.id}
              type="button"
              role="tab"
              id={`review-tab-${convo.id}`}
              aria-selected={index === active}
              aria-controls="review-panel"
              className={`reviews__tab${index === active ? " is-active" : ""}`}
              onClick={() => setActive(index)}
            >
              <span className="reviews__avatar reviews__avatar--soft" aria-hidden="true">
                {convo.initial}
              </span>
              <span className="reviews__tab-text">
                <span className="reviews__tab-name">
                  {convo.name}
                  <span className="reviews__tab-who"> · {convo.who}</span>
                  <span className="reviews__day">{convo.day}</span>
                </span>
                <span className="reviews__hook">{convo.hook}</span>
              </span>
            </button>
          ))}
        </div>

        <div
          className="reviews__chat"
          id="review-panel"
          role="tabpanel"
          aria-labelledby={`review-tab-${current.id}`}
        >
          <div className="reviews__chat-header">
            <span className="reviews__avatar" aria-hidden="true">
              {current.initial}
            </span>
            <span className="reviews__chat-who">
              <span className="reviews__chat-name">{current.name}</span>
              <span className="reviews__chat-meta">
                {current.who} · {current.day}
              </span>
            </span>
          </div>
          <div className="reviews__messages" key={current.id}>
            {current.messages.map((message, index) => {
              if (message.kind === "date") {
                return (
                  <span className="reviews__date" key={index}>
                    {message.text}
                  </span>
                );
              }
              if (message.kind === "sticker") {
                return (
                  <div className="reviews__sticker" key={index}>
                    <span className="reviews__sticker-label">Autocolante</span>
                    <span className="reviews__sticker-text">{message.text}</span>
                  </div>
                );
              }
              return (
                <div
                  className={`reviews__bubble reviews__bubble--${message.kind}`}
                  key={index}
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <span className="reviews__bubble-text">{message.text}</span>
                  <span className="reviews__bubble-time">
                    {message.kind === "out" ? "lava-me isso. · " : ""}
                    {message.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="reviews__cta">
          <span className="reviews__cta-text">A seguir és tu.</span>
          <WhatsappCustomButton
            href={whatsappReviewsLink}
            event="cta_whatsapp_reviews"
            location="reviews"
            className="btn btn--primary reviews__cta-btn"
          >
            Experimentar também
          </WhatsappCustomButton>
        </div>
      </div>
    </section>
  );
}
