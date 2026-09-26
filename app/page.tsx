import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { HowItWorks } from "@/components/HowItWorks";
import { Bags } from "@/components/Bags";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { buildLocalBusinessSchema } from "@/lib/schema";
import { nap, site } from "@/lib/config";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

// LocalBusiness só na homepage — as páginas de localidade têm o seu próprio.
const localBusiness = buildLocalBusinessSchema({
  url: `${site.url}/`,
  areaServed: nap.areas,
  description:
    "Lavandaria com recolha e entrega ao domicílio em Santarém, Cartaxo, Azambuja e Lisboa Oriente.",
});

export default function Home() {
  return (
    <>
      <JsonLd data={localBusiness} />
      <Hero />
      <main>
        <HowItWorks />
        <Bags />
        <Pricing />
        <Reviews />
        <Faq />
        <FinalCta />
      </main>
      <WhatsappFloat />
    </>
  );
}
