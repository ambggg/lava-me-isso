import type { Metadata } from "next";
import { EngomadoriaHero } from "@/components/EngomadoriaHero";
import { EngomadoriaIntro } from "@/components/EngomadoriaIntro";
import { EngomadoriaPricing } from "@/components/EngomadoriaPricing";
import { EngomadoriaHowItWorks } from "@/components/EngomadoriaHowItWorks";
import { EngomadoriaFaq, engomadoriaFaqs } from "@/components/EngomadoriaFaq";
import { EngomadoriaFinalCta } from "@/components/EngomadoriaFinalCta";
import { WhatsappCustomButton } from "@/components/WhatsappCustomButton";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqPageSchema, buildServiceSchema } from "@/lib/schema";
import { whatsappEngomadoriaLink } from "@/lib/config";

const PAGE_URL = "https://lavameisso.pt/engomadoria";

export const metadata: Metadata = {
  title: "Passar a Ferro em Santarém e Cartaxo | lava-me isso.",
  description:
    "Passamos a ferro em Santarém e Cartaxo, com recolha ao domicílio. Camisa a partir de 3€, com cabide incluído. Pede no WhatsApp.",
  alternates: {
    canonical: "/engomadoria",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: "Engomadoria com recolha em Santarém e Cartaxo — lava-me isso.",
    description: "Camisas a 3€, cabide incluído. Recolhemos, engomamos e entregamos à tua porta.",
    url: PAGE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Engomadoria() {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "Engomadoria com recolha ao domicílio",
          description: "Serviço de passar a ferro com recolha e entrega ao domicílio em Santarém e Cartaxo.",
          url: PAGE_URL,
        })}
      />
      <JsonLd data={buildFaqPageSchema(engomadoriaFaqs)} />

      <EngomadoriaHero />
      <main>
        <EngomadoriaIntro />
        <EngomadoriaPricing />
        <EngomadoriaHowItWorks />
        <EngomadoriaFaq />
        <EngomadoriaFinalCta />
      </main>

      <WhatsappCustomButton
        href={whatsappEngomadoriaLink}
        event="cta_whatsapp_engomadoria"
        location="floating"
        className="whatsapp-float"
        ariaLabel="Pedir engomadoria no WhatsApp"
      >
        <span aria-hidden="true">🧺</span> Pedir Engomadoria
      </WhatsappCustomButton>
    </>
  );
}
