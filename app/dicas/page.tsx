import type { Metadata } from "next";
import Link from "next/link";
import { publishedArticles } from "@/lib/articles";
import { whatsappLink } from "@/lib/config";

// Fica noindex enquanto não houver artigos publicados — evita indexar uma
// página vazia. Remove este bloco assim que o primeiro artigo for publicado.
export const metadata: Metadata = {
  title: "Dicas | lava-me isso.",
  description: "Dicas sobre lavandaria, cuidados com a roupa e o dia a dia em Santarém, Cartaxo, Azambuja e Lisboa Oriente.",
  alternates: {
    canonical: "/dicas",
  },
  robots: {
    index: publishedArticles.length > 0,
    follow: true,
  },
};

export default function Dicas() {
  return (
    <main>
      <section className="section" aria-labelledby="dicas-title">
        <div className="container">
          <h1 id="dicas-title" className="section__title">
            Dicas
          </h1>

          {publishedArticles.length === 0 ? (
            <p className="article-empty">
              Estamos a preparar os primeiros artigos. Volta em breve — ou fala connosco
              diretamente no{" "}
              <a href={whatsappLink} target="_blank" rel="noopener">
                WhatsApp
              </a>
              .
            </p>
          ) : (
            <div className="article-list">
              {publishedArticles.map((article) => (
                <Link key={article.slug} href={`/dicas/${article.slug}`} className="article-card">
                  <h2 className="article-card__title">{article.title}</h2>
                  <p className="article-card__excerpt">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
