import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { cartaxo } from "@/lib/locations";

export const metadata: Metadata = {
  title: cartaxo.metaTitle,
  description: cartaxo.metaDescription,
  alternates: {
    canonical: "/lavandaria-cartaxo",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: cartaxo.ogTitle,
    description: cartaxo.ogDescription,
    url: "https://lavameisso.pt/lavandaria-cartaxo",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function LavandariaCartaxo() {
  return <LocationPage data={cartaxo} />;
}
