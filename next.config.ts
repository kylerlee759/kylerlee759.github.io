import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  // Static HTML export → deployable to GitHub Pages (no Node server).
  output: "export",
  // Repo is "website" (a project site), so it's served under /website/.
  // Without this, /_next/* assets 404 and the page loads unstyled.
  basePath: "/website",
  // GitHub Pages can't run the Next image optimizer.
  images: { unoptimized: true },
  // Emit /work/index.html so Pages serves clean URLs without 404 on refresh.
  trailingSlash: true,
};

export default config;
