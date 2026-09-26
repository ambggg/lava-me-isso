import type { MetadataRoute } from "next";
import { site } from "@/lib/config";

// O /dicas fica de fora propositadamente enquanto estiver vazio/em rascunho —
// só entra no sitemap quando o primeiro artigo for revisto e publicado.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${site.url}/empresas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/lavandaria-santarem`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/lavandaria-cartaxo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/lavandaria-azambuja`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/lavandaria-lisboa-oriente`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/engomadoria`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
