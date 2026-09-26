import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
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
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: "lava-me isso. — Lavandaria com recolha e entrega em Santarém, Cartaxo, Azambuja e Lisboa Oriente",
    description: "A tua roupa lavada, seca e dobrada, sem saíres de casa. Recolhemos e entregamos à tua porta.",
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#EDE0FF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT" className={poppins.variable}>
      <body>
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

        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
