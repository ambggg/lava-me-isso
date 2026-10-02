import Link from "next/link";

export function EngomadoriaIntro() {
  return (
    <section className="section" aria-labelledby="engomadoria-sobre-title">
      <div className="container location-content">
        <h2 id="engomadoria-sobre-title" className="section__title">
          Engomadoria com recolha ao domicílio
        </h2>
        <p className="location-content__paragraph">
          Passar a roupa a ferro é uma das tarefas domésticas que mais tempo rouba — e das que
          ninguém gosta de fazer. Na lava-me isso., tratamos disso por ti: recolhemos as peças à
          tua porta em{" "}
          <Link href="/lavandaria-santarem">Santarém</Link> ou no{" "}
          <Link href="/lavandaria-cartaxo">Cartaxo</Link>, engomamos com cuidado e devolvemos
          tudo pronto a vestir ou a arrumar, sem vincos nem stress.
        </p>
        <p className="location-content__paragraph">
          Cobramos por peça, começando nos 2,50€ por camisa (IVA incluído) — entregue em cabide, para ires
          direto do saco para o armário. Se preferires simplificar, também temos o pack completo
          (lavar + secar + passar a ferro), pensado para quem quer despachar a roupa suja de uma
          só vez.
        </p>
        <p className="location-content__paragraph">
          Não precisas de ter a roupa já lavada — tratamos de tudo do início ao fim, ou só do que
          faltar. Diz-nos o que precisas no WhatsApp e ajustamos o serviço ao teu caso.
        </p>
      </div>
    </section>
  );
}
