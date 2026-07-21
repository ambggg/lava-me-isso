import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Pricing } from "@/components/Pricing";
import { Trust } from "@/components/Trust";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { WhatsappFloat } from "@/components/WhatsappFloat";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <HowItWorks />
        <Pricing />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <WhatsappFloat />
    </>
  );
}
