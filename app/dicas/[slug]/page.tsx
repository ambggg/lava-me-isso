import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { WhatsappCustomButton } from "@/components/WhatsappCustomButton";
import { buildArticleSchema } from "@/lib/schema";
import { articles, getArticleBySlug } from "@/lib/articles";
import { site, whatsappBlogLink } from "@/lib/config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/dicas/${article.slug}`,
    },
    // Rascunhos ficam sempre fora do índice do Google até serem revistos e publicados.
    robots: {
      index: article.status === "published",
      follow: article.status === "published",
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = `${site.url}/dicas/${article.slug}`;

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          headline: article.title,
          description: article.excerpt,
          url: articleUrl,
          datePublished: article.publishedAt,
          dateModified: article.publishedAt,
        })}
      />

      <main>
        <section className="section" aria-labelledby="article-title">
          <div className="container article-content">
            {article.status === "draft" && (
              <p className="article-meta">🔒 Rascunho — ainda não publicado, por rever antes de ir ao ar.</p>
            )}
            <h1 id="article-title" className="section__title">
              {article.title}
            </h1>
            {article.blocks.map((block, index) =>
              block.type === "heading" ? (
                <h2 key={index}>{block.text}</h2>
              ) : (
                <p key={index}>{block.text}</p>
              )
            )}
          </div>
        </section>

        <section className="section section--cta" aria-labelledby="article-cta-title">
          <div className="container">
            <h2 id="article-cta-title" className="section__title">
              Despacha essa roupa
            </h2>
            <p className="section__subtitle">Manda mensagem. Combinamos tudo.</p>
            <WhatsappCustomButton
              href={whatsappBlogLink}
              event="cta_whatsapp_blog"
              location={`article-${article.slug}`}
              className="btn btn--primary btn--large"
            >
              Agendar Recolha 🧺
            </WhatsappCustomButton>
          </div>
        </section>
      </main>
    </>
  );
}
