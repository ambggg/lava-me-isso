import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { site } from "@/lib/config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: "lava-me isso. — Lavandaria com recolha e entrega em Santarém e Cartaxo",
    description: "A tua roupa lavada, seca e dobrada, sem saíres de casa. Recolhemos e entregamos em 72h.",
    url: site.url,
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%F0%9F%A7%BA%3C/text%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#EDE0FF",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DryCleaningOrLaundry",
  name: "lava-me isso.",
  description: "Lavandaria digital com recolha e entrega ao domicílio em Santarém e Cartaxo.",
  url: "https://lavameisso.pt/",
  telephone: "+351910675457",
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Santarém" },
    { "@type": "City", name: "Cartaxo" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santarém",
    addressRegion: "Santarém",
    addressCountry: "PT",
  },
  sameAs: ["https://www.instagram.com/lavameisso", "https://www.facebook.com/lavameisso"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={poppins.variable}>
      <body>
        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        {/* Plausible Analytics — substitui "lavameisso.pt" pelo teu domínio e descomenta */}
        {/* <Script defer data-domain="lavameisso.pt" src="https://plausible.io/js/script.js" /> */}

        {/* Google Analytics 4 — substitui G-XXXXXXX pelo teu Measurement ID e descomenta */}
        {/*
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX" />
        <Script id="ga4-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
        */}

        {children}
        <Footer />
        <WhatsappFloat />
      </body>
    </html>
  );
}
