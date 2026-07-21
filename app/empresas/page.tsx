import type { Metadata } from "next";
import { EmpresasHero } from "@/components/EmpresasHero";
import { EmpresasAudience } from "@/components/EmpresasAudience";
import { EmpresasHowItWorks } from "@/components/EmpresasHowItWorks";
import { EmpresasWhyUs } from "@/components/EmpresasWhyUs";
import { EmpresasPricingNote } from "@/components/EmpresasPricingNote";
import { EmpresasFinalCta } from "@/components/EmpresasFinalCta";
import { WhatsappB2BFloat } from "@/components/WhatsappB2BFloat";

export const metadata: Metadata = {
  title: "Lavandaria para empresas e alojamento local | Santarém e Cartaxo | lava-me isso.",
  description:
    "Lavandaria para empresas em Santarém e Cartaxo — alojamento local, restaurantes, clínicas e ginásios. Recolhas regulares, prazos garantidos e faturação mensal.",
  alternates: {
    canonical: "/empresas",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: "lava-me isso. para empresas — Santarém e Cartaxo",
    description:
      "Recolhas regulares, prazos garantidos e faturação mensal para alojamento local, restauração e empresas.",
    url: "https://lavameisso.pt/empresas",
    images: ["/og-image.jpg"],
  },
};

export default function Empresas() {
  return (
    <>
      <EmpresasHero />
      <main>
        <EmpresasAudience />
        <EmpresasHowItWorks />
        <EmpresasWhyUs />
        <EmpresasPricingNote />
        <EmpresasFinalCta />
      </main>
      <WhatsappB2BFloat />
    </>
  );
}
