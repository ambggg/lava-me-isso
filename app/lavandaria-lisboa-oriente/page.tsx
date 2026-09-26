import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { lisboaOriente } from "@/lib/locations";

export const metadata: Metadata = {
  title: lisboaOriente.metaTitle,
  description: lisboaOriente.metaDescription,
  alternates: {
    canonical: "/lavandaria-lisboa-oriente",
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    title: lisboaOriente.ogTitle,
    description: lisboaOriente.ogDescription,
    url: "https://lavameisso.pt/lavandaria-lisboa-oriente",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function LavandariaLisboaOriente() {
  return <LocationPage data={lisboaOriente} />;
}
