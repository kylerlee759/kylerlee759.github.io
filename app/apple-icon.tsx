import { ImageResponse } from "next/og";
import { seo } from "@/store";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#1A1815",
          color: "#FDFBF6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 130,
          fontWeight: 500,
          fontFamily: "Georgia, serif",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        {seo.icon.letter}
        <span style={{ color: "#C4551A", marginLeft: 4 }}>
          {seo.icon.accentChar}
        </span>
      </div>
    ),
    size,
  );
}
