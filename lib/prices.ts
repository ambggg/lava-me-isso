/**
 * prices.ts — EDITAR PREÇOS AQUI.
 * Usa null nos que ainda não estão definidos: aparecem como "Brevemente"
 * na página em vez de um valor.
 */

export type PriceValue = string | null;

export const bagWeight = "7kg";

export const pricing = {
  washDry: "15€" as PriceValue, // Cartão 1 — Lavar + Secar
  launch: "15€" as PriceValue, // Oferta de lançamento (1ª lavagem, 2 sacos de 7kg)
  washDryIron: "29€" as PriceValue, // Cartão 2 — Lavar + Secar + Passar a Ferro (kit completo)
  ironOnly: "27€" as PriceValue, // Cartão 3 — Só Passar a Ferro
};

const PLACEHOLDER = "Brevemente";

export function formatPrice(value: PriceValue): string {
  return value ?? PLACEHOLDER;
}
