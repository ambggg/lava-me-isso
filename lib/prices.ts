/**
 * prices.ts — EDITAR PREÇOS AQUI.
 * Usa null nos que ainda não estão definidos: aparecem como "Brevemente"
 * na página em vez de um valor.
 */

export type PriceValue = string | null;

export const bagWeight = "7kg";

export const pricing = {
  washDry: "15€" as PriceValue, // Cartão 1 — Lavar + Secar
  launch: "7,50€" as PriceValue, // Oferta de lançamento (1ª lavagem, lavar + secar)
  washDryIron: null as PriceValue, // Cartão 2 — Lavar + Secar + Passar a Ferro
  ironOnly: null as PriceValue, // Cartão 3 — Só Passar a Ferro
  ironOnlyUnit: "kg", // "kg" ou "peça" — só usado quando ironOnly estiver definido
};

const PLACEHOLDER = "Brevemente";

export function formatPrice(value: PriceValue): string {
  return value ?? PLACEHOLDER;
}

export function formatIronOnlyPrice(): string {
  return pricing.ironOnly ? `${pricing.ironOnly}/${pricing.ironOnlyUnit}` : PLACEHOLDER;
}
