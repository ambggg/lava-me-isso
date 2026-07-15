import { NextRequest, NextResponse } from "next/server";

/**
 * Placeholder do webhook do Stripe.
 * Antes de processar eventos reais: verificar a assinatura do pedido com
 * stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET).
 */
export async function POST(_request: NextRequest) {
  return NextResponse.json({ received: true }, { status: 200 });
}
