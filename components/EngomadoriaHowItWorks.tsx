const steps = [
  {
    number: 1,
    title: "Manda mensagem",
    text: "Diz-nos quantas peças e se estás em Santarém ou no Cartaxo.",
  },
  {
    number: 2,
    title: "Recolhemos",
    text: "Vamos buscar as peças à tua porta, na hora combinada.",
  },
  {
    number: 3,
    title: "Entregamos prontas",
    text: "De volta à tua porta, prontas a vestir ou a arrumar.",
  },
];

export function EngomadoriaHowItWorks() {
  return (
    <section className="section" aria-labelledby="como-funciona-engomadoria-title">
      <div className="container">
        <h2 id="como-funciona-engomadoria-title" className="section__title">
          Como funciona
        </h2>
        <ol className="steps">
          {steps.map((step) => (
            <li className="step" key={step.number}>
              <span className="step__number">{step.number}</span>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
