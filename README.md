# lava-me isso.

Landing page de conversão da lavandaria digital "lava-me isso." — recolha e entrega ao domicílio em Santarém e Cartaxo. Construído em Next.js (App Router).

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estrutura

- `app/` — páginas (App Router), layout raiz, CSS global e API routes
- `app/api/webhooks/` — endpoints preparados para integrações futuras (Stripe, WhatsApp Cloud API)
- `components/` — secções da página, todas em React/TSX
- `lib/prices.ts` — **preços do site**, editar aqui (usa `null` para "Brevemente")
- `lib/config.ts` — número de WhatsApp, mensagem pré-preenchida e metadados do site
- `lib/analytics.ts` — tracking de cliques nos botões de WhatsApp (Plausible/GA4)

## Variáveis de ambiente

Copia `.env.example` para `.env.local` ao ativar Stripe ou a WhatsApp Cloud API.

## Deploy

Projeto Next.js standard — importar o repositório na [Vercel](https://vercel.com/new) sem configuração adicional.

```bash
npm run build
```
