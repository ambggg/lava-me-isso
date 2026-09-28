import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { CookieConsent } from "@/components/CookieConsent";
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
        <SiteHeader />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
