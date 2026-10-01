/**
 * prices.ts — EDITAR PREÇOS AQUI.
 * Usa null nos que ainda não estão definidos: aparecem como "Brevemente"
 * na página em vez de um valor.
 */

export type PriceValue = string | null;

export const bagWeight = "8kg";

export const pricing = {
  washDry: "15€" as PriceValue, // Cartão 1 — Lavar + Secar
  launch: "15€" as PriceValue, // Oferta de lançamento (1ª lavagem, 2 sacos de 8kg)
  washDryIron: "29€" as PriceValue, // Cartão 2 — Lavar + Secar + Passar a Ferro (kit completo)
  ironOnly: "27€" as PriceValue, // Cartão 3 — Só Passar a Ferro
  ironShirt: "3€" as PriceValue, // Página /engomadoria — camisa avulsa, com cabide incluído
  sacoCasa: null as PriceValue, // Saco Casa — lençóis e toalhas (lavar + secar + dobrar)
};

// Capacidade do Saco Casa — null esconde a linha até estar definida (ex.: "8kg").
export const sacoCasaWeight: string | null = null;

// Os preços do site são apresentados SEM IVA (decisão de set 2026).
// Clientes com recolha todos os meses não pagam IVA.
export const VAT_NOTE = "Acresce IVA à taxa legal";
export const VAT_SHORT = "+ IVA";
export const MONTHLY_VAT_OFFER = "Oferecemos o IVA a clientes com recolha todos os meses.";

const PLACEHOLDER = "Brevemente";

export function formatPrice(value: PriceValue): string {
  return value ?? PLACEHOLDER;
}
