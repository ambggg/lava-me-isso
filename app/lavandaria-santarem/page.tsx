import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { santarem } from "@/lib/locations";

export const metadata: Metadata = {
  title: santarem.metaTitle,
  description: santarem.metaDescription,
  alternates: {
    canonical: "/lavandaria-santarem",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: santarem.ogTitle,
    description: santarem.ogDescription,
    url: "https://lavameisso.pt/lavandaria-santarem",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function LavandariaSantarem() {
  return <LocationPage data={santarem} />;
}
