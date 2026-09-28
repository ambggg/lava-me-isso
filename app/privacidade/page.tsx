import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/CookieConsent";
import { nap } from "@/lib/config";

// Rever com um jurista quando possível.
const LEGAL_NAME = "Girafa Roliça, Lda.";
const LEGAL_NIF = "519324528";
const CONTACT_EMAIL = "bruno@lavameisso.com";
const LAST_UPDATED = "28 de setembro de 2026";

export const metadata: Metadata = {
  title: "Política de privacidade | lava-me isso.",
  description: "Como a lava-me isso. trata os teus dados pessoais e utiliza cookies.",
  alternates: {
    canonical: "/privacidade",
  },
};

export default function Privacidade() {
  return (
    <main className="section">
      <div className="container article-content">
        <h1 className="section__title">Política de privacidade</h1>
        <p className="article-meta">Última atualização: {LAST_UPDATED}</p>

        <h2>Quem somos</h2>
        <p>
          A lava-me isso. é uma lavandaria com recolha e entrega ao domicílio, explorada por {LEGAL_NAME}, NIF{" "}
          {LEGAL_NIF}. Para qualquer questão sobre os teus dados, fala connosco pelo WhatsApp {nap.telephoneDisplay}{" "}
          ou por email para <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Que dados recolhemos</h2>
        <p>
          Quando nos contactas pelo WhatsApp, recebemos o teu nome, o teu número de telefone e a morada que nos
          indicas para a recolha e entrega. Se pedires fatura, recolhemos também o NIF e o email. Usamos estes dados
          apenas para prestar o serviço, faturar e falar contigo sobre as tuas encomendas.
        </p>

        <h2>Estatísticas do site (Google Analytics)</h2>
        <p>
          Se aceitares os cookies, usamos o Google Analytics 4 para saber quantas pessoas visitam o site, de onde
          vêm e que botões usam. Estes dados são estatísticos e não os usamos para te identificar. Se recusares, o
          Google Analytics não é carregado. Podes mudar a tua escolha a qualquer momento: <CookieSettingsButton />.
        </p>

        <h2>Durante quanto tempo guardamos os dados</h2>
        <p>
          Os dados das encomendas são guardados enquanto fores cliente e, depois, apenas pelo tempo exigido por lei
          (por exemplo, para efeitos de faturação). As estatísticas do Google Analytics são guardadas pelo período
          configurado na conta.
        </p>

        <h2>Os teus direitos</h2>
        <p>
          Podes pedir-nos a qualquer momento acesso, correção ou eliminação dos teus dados, ou opor-te ao seu
          tratamento. Basta enviares-nos uma mensagem. Se achares que os teus dados não foram bem tratados, podes
          apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD).
        </p>
      </div>
    </main>
  );
}
