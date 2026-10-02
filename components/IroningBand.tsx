import { icons } from "./LocationIcons";

const perks = [
  {
    icon: icons.hanger,
    title: "Camisas e vestidos em cabide",
    text: "Prontos a pendurar no armário, sem vincos.",
  },
  {
    icon: icons.bag,
    title: "Lençóis e toalhas também",
    text: "No Saco Casa, lavados à parte, passados e dobrados.",
  },
  {
    icon: icons.door,
    title: "Recolha e entrega incluídas",
    text: "Em Santarém, Cartaxo, Azambuja e Lisboa Oriente.",
  },
  {
    icon: icons.card,
    title: "Pagas na entrega",
    text: "MBWay, transferência ou numerário. Fatura com NIF.",
  },
];

/** Faixa "Nunca mais passas a ferro": mensagem + 4 benefícios em cartões. */
export function IroningBand() {
  return (
    <section className="section iron-band" aria-labelledby="iron-band-title">
      <div className="container iron-band__grid">
        <div className="iron-band__content">
          <p className="iron-band__eyebrow">Engomadoria ao domicílio</p>
          <h2 id="iron-band-title" className="iron-band__title">
            Nunca mais passas a ferro.
          </h2>
          <p className="iron-band__lead">
            É a tarefa da casa que toda a gente adia. A roupa sai da tua porta por passar e volta pronta a vestir, com
            os lençóis e as toalhas da família incluídos.
          </p>
        </div>
        <ul className="iron-band__perks">
          {perks.map((perk) => (
            <li key={perk.title} className="iron-band__perk">
              <span className="iron-band__icon">{perk.icon}</span>
              <strong>{perk.title}</strong>
              <span>{perk.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
