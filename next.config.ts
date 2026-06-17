import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  // Static HTML export → deployable to GitHub Pages (no Node server).
  output: "export",
  // User-site repo (kylerlee759.github.io) serves at the root domain, so NO
  // basePath — assets resolve from "/". (A project repo would need basePath.)
  // GitHub Pages can't run the Next image optimizer.
  images: { unoptimized: true },
  // Emit /work/index.html so Pages serves clean URLs without 404 on refresh.
  trailingSlash: true,
};

export default config;
