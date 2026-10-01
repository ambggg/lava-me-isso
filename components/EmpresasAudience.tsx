const audiences = [
  {
    title: "Alojamento Local",
    text: "Lençóis e toalhas prontos entre check-outs.",
  },
  {
    title: "Restauração e cafés",
    text: "Toalhas de mesa, panos e fardas sempre a rodar.",
  },
  {
    title: "Clínicas, ginásios e cabeleireiros",
    text: "Toalhas e batas em ciclo semanal.",
  },
  {
    title: "Outros negócios",
    text: "Fardas e têxteis — fala connosco.",
  },
];

export function EmpresasAudience() {
  return (
    <section className="section" id="para-quem" aria-labelledby="para-quem-title">
      <div className="container">
        <h2 id="para-quem-title" className="section__title">
          Lavandaria para empresas em Santarém, Cartaxo, Azambuja e Lisboa Oriente
        </h2>
        <ul className="cards">
          {audiences.map((item) => (
            <li className="card" key={item.title}>
              <h3 className="card__title">{item.title}</h3>
              <p className="card__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
