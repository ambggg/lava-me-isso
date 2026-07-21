const steps = [
  {
    number: 1,
    title: "Conversa inicial",
    text: "Percebemos volumes e dias ideais para o teu negócio.",
  },
  {
    number: 2,
    title: "Plano fixo",
    text: "Recolhas e entregas em dias combinados, todas as semanas.",
  },
  {
    number: 3,
    title: "Zero preocupações",
    text: "Prazo garantido e fatura mensal no email.",
  },
];

export function EmpresasHowItWorks() {
  return (
    <section
      className="section section--purple"
      id="como-funciona-empresas"
      aria-labelledby="como-funciona-empresas-title"
    >
      <div className="container">
        <h2 id="como-funciona-empresas-title" className="section__title">
          Como funciona para empresas
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
