import { ImageResponse } from "next/og";
import { seo } from "@/store";

export const alt = seo.home.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F5F1EA",
          color: "#1A1815",
          display: "flex",
          flexDirection: "column",
          padding: "70px 90px",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Top rule */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 18,
            borderBottom: "2px solid #1A1815",
            fontSize: 22,
            fontFamily: "ui-monospace, monospace",
            color: "#3A362F",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
          }}
        >
          <span>{seo.ogImage.eyebrow}</span>
          <span style={{ color: "#C4551A" }}>{seo.ogImage.status}</span>
        </div>

        {/* Spacer */}
        <div style={{ flexGrow: 1, display: "flex" }} />

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 168,
            fontWeight: 500,
            letterSpacing: "-0.04em",
            lineHeight: 0.92,
          }}
        >
          <span>{seo.ogImage.name.replace(/\.$/, "")}</span>
          <span style={{ color: "#C4551A" }}>.</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 56,
            fontWeight: 300,
            fontStyle: "italic",
            color: "#3A362F",
            marginTop: 24,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          <span>{seo.ogImage.taglinePrefix}</span>
          <span style={{ color: "#C4551A" }}>{seo.ogImage.taglineEmphasis}</span>
          <span>{seo.ogImage.taglineSuffix}</span>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 48,
            paddingTop: 18,
            borderTop: "1px solid #1A1815",
            fontSize: 20,
            fontFamily: "ui-monospace, monospace",
            color: "#6B6458",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
          }}
        >
          <span>{seo.ogImage.role}</span>
          <span>{seo.siteUrl.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    size,
  );
}
