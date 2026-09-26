import { ImageResponse } from "next/og";

// Imagem de partilha (Open Graph / redes sociais) gerada no build —
// aplica-se a todas as páginas que não tenham a sua própria.
export const alt = "lava-me isso. — Lavandaria com recolha e entrega ao domicílio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#1A0040",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
          lava-me&nbsp;<span style={{ color: "#FFFC31" }}>isso.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 900, lineHeight: 1.05, letterSpacing: -3 }}>
            A tua roupa lavada, seca e dobrada.
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#EDE0FF" }}>
            Lavandaria com recolha e entrega ao domicílio
          </div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {["Santarém", "Cartaxo", "Azambuja", "Lisboa Oriente"].map((zone) => (
            <div
              key={zone}
              style={{
                display: "flex",
                background: "#7B2FBE",
                color: "#FFFFFF",
                fontSize: 22,
                fontWeight: 700,
                padding: "10px 18px",
                borderRadius: 10,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              {zone}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
