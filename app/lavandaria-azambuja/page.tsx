import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { azambuja } from "@/lib/locations";

export const metadata: Metadata = {
  title: azambuja.metaTitle,
  description: azambuja.metaDescription,
  alternates: {
    canonical: "/lavandaria-azambuja",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: azambuja.ogTitle,
    description: azambuja.ogDescription,
    url: "https://lavameisso.pt/lavandaria-azambuja",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function LavandariaAzambuja() {
  return <LocationPage data={azambuja} />;
}
