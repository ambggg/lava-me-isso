const reasons = [
  "Recolha e entrega incluídas, sempre",
  "Dias fixos, prazos cumpridos",
  "Faturação mensal simplificada",
  "Somos locais — resposta no próprio dia",
];

export function EmpresasWhyUs() {
  return (
    <section className="section" id="porque-nos" aria-labelledby="porque-nos-title">
      <div className="container">
        <h2 id="porque-nos-title" className="section__title">
          Porquê trabalhar connosco
        </h2>
        <ul className="why-us-list">
          {reasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
