import { NextRequest, NextResponse } from "next/server";

/**
 * Placeholder do webhook da WhatsApp Cloud API.
 * GET — usado pela Meta para verificar o endpoint (handshake hub.challenge).
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    return new NextResponse(challenge ?? "", { status: 200 });
  }

  return new NextResponse("Forbidden", { status: 403 });
}

/**
 * POST — recebe as mensagens e eventos enviados pela Meta.
 */
export async function POST(request: NextRequest) {
  const event = await request.json();
  console.log("WhatsApp webhook event:", event);

  return NextResponse.json({ received: true }, { status: 200 });
}
