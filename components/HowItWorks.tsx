const steps = [
  {
    number: 1,
    emoji: "📱",
    title: "Manda mensagem no WhatsApp",
    text: "Diz a morada. Combinas o dia.",
  },
  {
    number: 2,
    emoji: "🚪",
    title: "Recolhemos à tua porta",
    text: "Na hora combinada. Sem stress.",
  },
  {
    number: 3,
    emoji: "🧺",
    title: "Devolvemos em 48h",
    text: "Lavada, seca e dobrada.",
  },
];

export function HowItWorks() {
  return (
    <section className="section" id="como-funciona" aria-labelledby="como-funciona-title">
      <div className="container">
        <h2 id="como-funciona-title" className="section__title">
          Como funciona
        </h2>
        <ol className="steps">
          {steps.map((step) => (
            <li className="step" key={step.number}>
              <span className="step__number">{step.number}</span>
              <span className="step__emoji" aria-hidden="true">
                {step.emoji}
              </span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
